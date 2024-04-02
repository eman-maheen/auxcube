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
    topNav?: boolean;
};

// FIXME: Update the placeholder content with correct one (snippet/subtitle) -

export const siteMap: NavLink[] =
    [
        { title: "Home",  skipScaffold: true, publishPage: true, topNav: true},
        { title: "Services",  skipScaffold: true, publishPage: true, topNav: true },
        { title: "Skills",  skipScaffold: true, publishPage: true, topNav: true },
        { title: "Partners",  skipScaffold: true, publishPage: true, topNav: true  },
        { title: "Case Studies",  skipScaffold: true, publishPage: true, topNav: true  },
        { title: "About",  skipScaffold: true, publishPage: true, topNav: true  },
        { title: "Contact",  skipScaffold: true, publishPage: true, topNav: true },
     
        {
            skipScaffold: true,
            publishPage: false,
            title: "Quick Links",
            snippet: "Explore faster...",
            children: [
                {
                    skipScaffold: true,
                    title: "Skills",
                    subtitle: "Unlock Your Potential",
                    snippet: "Discover our diverse range of skills to propel your projects forward and achieve your goals with confidence.",
                    publishPage: true
                },
                 {
                    skipScaffold: true,
                    title: "Services",
                    subtitle: "Tailored Solutions for Your Success",
                    snippet: "Explore our comprehensive services designed to meet your unique needs and exceed your expectations, every step of the way.",
                    publishPage: true
                },
                 {
                    skipScaffold: true,
                    title: "Build My Team",
                    subtitle: "Forge a Winning Team",
                    snippet: "Empower your projects with our expertly curated teams, dedicated to driving success and innovation in every endeavor.",
                    publishPage: true
                },
                 {
                    skipScaffold: true,
                    title: "Career",
                    subtitle: "Shape Your Future with Us",
                    snippet: "Join a dynamic and supportive environment where your talents are valued, and your career aspirations are realized.",
                    publishPage: true
                },
                 {
                    skipScaffold: true,
                    title: "About",
                    subtitle: "Discover Our Story",
                    snippet: "Learn more about our journey, values, and commitment to excellence in delivering exceptional solutions to our clients and partners.",
                    publishPage: true
                }
            ],
        },
        {
            skipScaffold: true,
            publishPage: false,
            title: "Legal",
            snippet: "Stay Informed...",
            children: [
                {
                    skipScaffold: true,
                    title: "Privacy Policy",
                    subtitle: "Your Privacy, Our Priority",
                    snippet: "Learn about how we handle your personal information and ensure your privacy is protected every step of the way.",
                    publishPage: true
                },
                {
                    skipScaffold: true,
                    title: "Cookie Policy",
                    subtitle: "Understanding Cookies",
                    snippet: "Discover how cookies enhance your browsing experience and how we use them responsibly to improve our services.",
                    publishPage: true
                },
                {
                    skipScaffold: true,
                    title: "Refund Policy",
                    subtitle: "Our Commitment to Satisfaction",
                    snippet: "Find out about our refund policy and how we strive to ensure your satisfaction with our products and services.",
                    publishPage: true
                }
            ],
        },
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
export const topNav: Array<NavLink> = siteNav.filter(v => v.topNav);
export const quickLinks: NavLink | undefined = siteNav.find(v => v.title === "Quick Links");
export const legalLinks: NavLink | undefined = siteNav.find(v => v.title === "Legal");
