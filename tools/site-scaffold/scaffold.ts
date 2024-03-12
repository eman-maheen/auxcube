// This tool generates a tree of pages in Svelte quickly
// It is to be used as follows:
// 1- Update the sitemap in the $lib/content/sites.ts 
// 2- Run this file
// It will create a folder hierarchy in the src/routes folder, with each folder containing a default +page.svelte and a +page.server.ts using the templates present in this folder. It will not overwrite any existing pages, so if you want to regenerate them, you'll need to delete their existing folders in the routes
// If you change this, please share any upgrades with sohaibathar@gmail.com

const pageTemplateFile = "./+page.svelte";
const outputPath = "../../src/routes/(drafts)";

import * as fs from 'fs';
import { siteNav } from '../../src/lib/content/site.js';
import type { NavLink } from '../../src/lib/content/site.js';

const OVERWRITE = false;
let pageTemplate = fs.readFileSync(pageTemplateFile).toString();

async function createFolders(page: NavLink) {
    const folderPath = `${outputPath}${page.url}`;
    const pagePath = `${folderPath}/+page.svelte`;
    if (page.title && page.url && !page.skipScaffold) {
        // does not exist, create this page
        if (!fs.existsSync(folderPath)) {
            console.log(folderPath);
            fs.mkdirSync(folderPath, { recursive: true });
        }
        if (!fs.existsSync(pagePath) || OVERWRITE) {
            // FILL THE TEMPLATE HERE
            const filledPageTemplate = pageTemplate.replace(/PAGE_TITLE/g, page.title);
            fs.writeFileSync(pagePath, filledPageTemplate);
        }
    }
    if (page.children) {
        for (let child of page.children) {
            createFolders(child);
        }
    }
}

(await async function run() {
    siteNav.map(p => createFolders(p));
})();

console.log('DONE');
