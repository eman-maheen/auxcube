export const titleToSlug = (t: string) => {
    return t.toLowerCase().replace(/[\s]/g, "-").replace(/[\?]/g, "");
};
export const slugToCrumb = (t: string) => {
    return t.toUpperCase().replace(/[\-]/g, " ");
};

export type NavLink = {
    slug?: string;
    title: string;
    subtitle?: string;
    url?: string;
    children?: Array<NavLink>;
    img?: string;
    snippet?: string;
    skipScaffold?: boolean;
    publishPage?: boolean;
};


export const siteMap: NavLink[] =
    [
        { title: "Home",  skipScaffold: true, },
        { title: "Services",  skipScaffold: true, },
        { title: "Skills",  skipScaffold: true, },
        { title: "Partners",  skipScaffold: true, },
        { title: "Case Studies",  skipScaffold: true, },
        { title: "About",  skipScaffold: true, },
        { title: "Contact",  skipScaffold: true, },
    ];

function computeUrls(root: NavLink, path: string = "") {
    root.slug = `${titleToSlug(root.title)}`;
    root.url = `${path}/${root.slug}`;

    if (!root.children) {
        root.children = [];
    }
    for (const child of root.children) {
        computeUrls(child, root.url);
    }
    return root;
}
export const siteNav: Array<NavLink> = siteMap.map(root => computeUrls(root, ""));
export const services: NavLink | undefined = siteNav.find(v => v.title === "Services");