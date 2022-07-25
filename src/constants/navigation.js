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
                title: "Mobile",
                destination: "/portfolio#mobile",
            },
            {
                title: "Embedded Systems",
                destination: "/portfolio#embedded",
            },
            {
                title: "Machine Learning",
                destination: "/portfolio#ml",
            }
        ]
    },
    {
        title: "Contact",
        destination: "/contact"
    },
];

export default navigation;
