export const titleToSlug = (t) => {
    return t.toLowerCase().replace(/[\s]/g, "-").replace(/[\?]/g, "");
};
export const slugToCrumb = (t) => {
    return t.toUpperCase().replace(/[\-]/g, " ");
};
export const siteMap = [
    {
        skipScaffold: true,
        title: "Services",
        snippet: "Explore Our Services",
        children: [
            {
                skipScaffold: true,
                title: "MVP Development",
                snippet: "Take your MVP to the market faster through our extensive expertise with startups amplified by the Low Code tool-set.",
                publishPage: false,
                img: "mvp-development.svg",
                // TODO: Tech-specific development children pages
            },
            {
                skipScaffold: true,
                title: "PoC Development",
                snippet: "Develop a quick Proof of Concept to execute your core vision and collect feedback before committing to a long-term development plan.",
                publishPage: false,
                img: "poc-development.svg",
            },
            {
                skipScaffold: true,
                title: "SLC Development",
                snippet: "Engineer a Simple, Lovable, and Complete product, that is immediately usable, and provides more insights than a 'Minimum Viable Product'.",
                publishPage: false,
                img: "slc-development.svg",
                // img: "technology-transformation.png",
            },
            {
                skipScaffold: true,
                title: "Low Code Development",
                snippet: "Build fully-functional internal or customer-facing applications faster and quicker.",
                publishPage: false,
                img: "mvp-development.svg",
                // img: "technology-transformation.png",
            },
            {
                skipScaffold: true,
                title: "No Code Consulting",
                snippet: "Let us help you make the right choice when select a No Code Application Platform out of a multitude for your specific needs.",
                publishPage: false,
                // img: "technology-transformation.png",
            },
            {
                skipScaffold: true,
                title: "Low Code Consulting",
                snippet: "Choosing a Low Code platform is a critical decision. Let us guide you on the feasibility, cost, and expectations during the planning phase of a Low Code solution.",
                publishPage: false,
            },
            {
                skipScaffold: true,
                title: "No Code Automation",
                snippet: "Save time and money, optimize your business processes, and improve your efficiency with our No Code automation services to automate redundant, repetitive tasks.",
                // img: "technology-transformation.png",
                publishPage: false,
            },
            {
                skipScaffold: true,
                title: "Low Code Automation",
                snippet: "Accelerate your automation journey and achieve faster results with Low Code automation, when your business has complex rules, and No Code is insufficient.",
                publishPage: false,
            },
            {
                skipScaffold: true,
                title: "Robotic Process Automation",
                snippet: "Automate your repetitive and time-consuming tasks with RPA, letting intelligent software agents perform actions on your behalf, and free up your team to focus on more strategic work.",
                publishPage: false,
            },
            {
                skipScaffold: true,
                title: "Web Scraping",
                snippet: "Automate valuable data extraction from websites at scale, and gain insights into sales and competition to make better decisions.",
                publishPage: false,
            },
            {
                skipScaffold: true,
                title: "Open Source Implementation",
                snippet: "Identify possible existing open source software that can solve your problem with customization, before you opt for a custom software solution and reinvent the wheel.",
                publishPage: false,
            },
        ],
    },
    {
        skipScaffold: false,
        title: "Low Code",
        children: [
            {
                skipScaffold: true,
                title: "What is Low Code?",
            },
            {
                skipScaffold: true,
                title: "Low Code platforms features",
            },
            {
                skipScaffold: true,
                title: "Low Code benefits",
            },
            {
                skipScaffold: true,
                title: "Who can benefit from Low Code?"
            },
            {
                skipScaffold: true,
                title: "Types of Low Code Application Platforms"
            },
            {
                skipScaffold: true,
                title: "Low Code project lifecycle"
            },
            {
                skipScaffold: true,
                title: "Low Code limitations"
            },
            {
                skipScaffold: true,
                title: "Who is a Citizen Developer?"
            },
            {
                skipScaffold: true,
                title: "Low Code avoidance reasons"
            },
            {
                skipScaffold: true,
                title: "Low Code use cases"
            },
            {
                skipScaffold: true,
                title: "Low Code statistics"
            },
            {
                skipScaffold: true,
                title: "Low Code vs. traditional engineering"
            },
        ]
    },
    {
        skipScaffold: false,
        title: "No Code",
        children: [
            {
                skipScaffold: true,
                title: "What is No Code?",
            },
            {
                skipScaffold: true,
                title: "No Code platform features",
            },
            {
                skipScaffold: true,
                title: "No Code benefits"
            },
            {
                skipScaffold: true,
                title: "Who can benefit from No Code?"
            },
            {
                skipScaffold: true,
                title: "No Code project lifecycle"
            },
            {
                skipScaffold: true,
                title: "No Code limitations",
            },
            {
                skipScaffold: true,
                title: "No Code avoidance reasons",
            },
            {
                skipScaffold: true,
                title: "No Code avoidance use cases",
            },
            {
                skipScaffold: true,
                title: "No Code statistics"
            }, {
                skipScaffold: true,
                title: "No Code v. traditional engineering",
            },
        ]
    },
    {
        skipScaffold: true,
        title: "About LowcodeN",
        children: [
            {
                skipScaffold: true,
                title: "Team",
            },
            {
                skipScaffold: true,
                title: "Values",
            },
        ]
    },
    { title: "Contact", skipTopNav: true, skipScaffold: true },
    {
        title: "FAQ", skipTopNav: true, skipScaffold: true,
    },
    { title: "Privacy Policy", skipTopNav: true, skipScaffold: true, },
    { title: "Cookie Policy", skipTopNav: true, skipScaffold: true, },
    { title: "Submit RFP", skipTopNav: true, skipScaffold: true, },
];
function computeUrls(root, path = "") {
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
export const topNav = siteMap.map(root => computeUrls(root, "")).filter(v => !v.skipTopNav);
export const siteNav = siteMap.map(root => computeUrls(root, ""));
export const services = siteNav.find(v => v.title === "Services");
//# sourceMappingURL=site.js.map