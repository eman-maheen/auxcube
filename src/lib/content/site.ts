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
    skipTopNav?: boolean;
    publishPage?: boolean;
};


export const siteMap: NavLink[] =
    [
        {
            skipScaffold: true,
            publishPage: false,
            title: "Services",
            snippet: "Explore Our Services",
            children: [
                {
                    skipScaffold: true,
                    title: "MVP Development",
                    subtitle: "Test, validate, and tweak your product's core value",
                    snippet: "Take your MVP to the market faster through our extensive expertise in MVP Development for startups and amplified by the Low Code tool-set.",
                    publishPage: true,
                    img: "mvp-development.svg",
                    // TODO: Tech-specific development children pages
                },
                {
                    skipScaffold: true,
                    title: "PoC Development",
                    subtitle: "Validate your ideas and de-risk your product",
                    snippet: "Develop a quick Proof of Concept to execute your core vision and collect feedback before committing to a long-term development plan.",
                    publishPage: true,
                    img: "poc-development.svg",
                },
                {
                    skipScaffold: true,
                    title: "SLC Development",
                    subtitle: "Simple, Lovable, and Complete products, minus the bells and whistles",
                    snippet: "Engineer a Simple, Lovable, and Complete product, that users will immediately use and love, providing more insights than a 'Minimum Viable Product'.",
                    publishPage: true,
                    img: "slc-development.svg",
                },
                {
                    skipScaffold: true,
                    title: "Low Code Development",
                    subtitle: "Low Code Development",
                    snippet: "Build fully-functional internal or customer-facing applications faster and quicker.",
                    publishPage: true,
                    img: "low-code-development.svg",
                },
                {
                    skipScaffold: true,
                    title: "No Code Consulting",
                    subtitle: "Build better, faster, with No Code",
                    snippet: "Let us help you make the right choice  for your specific needs while selecting a No Code Application Platform out of a multitude.",
                    publishPage: true,
                    img: "no-code-consulting.svg",
                },
                {
                    skipScaffold: true,
                    title: "Low Code Consulting",
                    subtitle: "Let Low Code work for you",
                    snippet: "Choosing a Low Code platform is a critical decision. Let us guide you on the feasibility, cost, and expectations during the planning phase of a Low Code solution, to avoid future cul-de-sacs.",
                    publishPage: true,
                    img: "low-code-consulting.svg",
                },
                {
                    skipScaffold: true,
                    title: "No Code Automation",
                    subtitle: "Create workflows, not more work",
                    snippet: "Save time and money, optimize your business processes, and improve your efficiency with our No Code automation services to automate redundant, repetitive tasks.",
                    publishPage: true,
                    img: "no-code-automation.svg",
                },
                {
                    skipScaffold: true,
                    title: "Low Code Automation",
                    snippet: "Accelerate your automation journey and achieve faster results with Low Code automation, when your business has complex rules, and No Code is insufficient.",
                    publishPage: true,
                    img: "low-code-automation.svg",

                },
                {
                    skipScaffold: true,
                    title: "Robotic Process Automation",
                    subtitle: "Free your mind",
                    snippet: "Automate your repetitive and time-consuming tasks with RPA, letting intelligent software agents perform actions on your behalf, and free up your team to focus on more strategic work.",
                    publishPage: true,
                    img: "robotic-process-automation.svg",

                },
                {
                    skipScaffold: true,
                    title: "Data Scraping",
                    subtitle: "The new oil rig",
                    snippet: "Automate valuable data extraction from websites and APIs at scale, and gain insights into sales and competition to make better decisions.",
                    publishPage: true,
                    img: "data-scraping.svg",
                },
                {
                    skipScaffold: true,
                    title: "Open Source Consulting",
                    subtitle: "Do not reinvent the wheel",
                    snippet: "Identify possible existing open source software that can solve your problem with customization, before you opt for a custom software solution and reinvent the wheel.",
                    publishPage: true,
                    img: "open-source-consulting.svg",
                },
                {
                    skipScaffold: true,
                    title: "Greenfield Software Development",
                    subtitle: "Your vision, our expertise",
                    snippet: "If No Code and Low Code are insufficient for your complex business requirements, we can switch to our default custom engineering mode and help you implement a solution from scratch using software development tools without the Low Code constraints.",
                    publishPage: true,
                    img: "greenfield-software-development.svg",
                },
            ],
        },
        {
            skipScaffold: false,
            publishPage: true,
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
            publishPage: true,
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
                },                {
                    skipScaffold: true,
                    title: "No Code vs. traditional engineering",
                },
            ]
        },
        {
            skipScaffold: true,
            publishPage: true,
            title: "About",
            
        },
        { title: "Contact", skipTopNav: true, skipScaffold: true},
        {
            title: "FAQ", skipTopNav: true, skipScaffold: true,
        },
        { title: "Privacy Policy", skipTopNav: true, skipScaffold: true, },
        { title: "Cookie Policy", skipTopNav: true, skipScaffold: true, },
        { title: "Submit RFP", skipTopNav: true, skipScaffold: true, },
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
export const topNav: Array<NavLink> = siteMap.map(root => computeUrls(root, "")).filter(v => !v.skipTopNav);
export const siteNav: Array<NavLink> = siteMap.map(root => computeUrls(root, ""));
export const services: NavLink | undefined = siteNav.find(v => v.title === "Services");
export const lowCode: NavLink = siteNav.find(v => v.title === "Low Code");
export const noCode: NavLink  = siteNav.find(v => v.title === "No Code");
