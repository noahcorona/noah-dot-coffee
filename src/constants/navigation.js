const navigation = [
    {
        title: "About",
        destination: "/"
    },
    {
        title: "Portfolio",
        destination: "/portfolio",
        submenu: [
            {
                title: "Web",
                destination: "/portfolio#web",
            },
            {
                title: "Mobile Apps",
                destination: "/portfolio#mobile",
            },
            {
                title: "Embedded Systems",
                destination: "/portfolio#embedded",
            },
            {
                title: "Machine Learning",
                destination: "/portfolio#ml",
            },
            {
                title: "Multimedia Processing",
                destination: "/portfolio#media",
            }
        ]
    },
    {
        title: "Resume",
        destination: "/resume"
    },
    {
        title: "Contact",
        destination: "/contact"
    },
];

export default navigation;
