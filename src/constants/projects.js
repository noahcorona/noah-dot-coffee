export const projects = [
    {
        year: 2022,
        title: "smlr.org",
        description: "A full-stack MERN app that shortens URLs. " +
            "Has a documented, public API. ",
        stack: [
            "MongoDB",
            "Express",
            "React.JS",
            "Node.JS",
            "HTML",
            "CSS"
        ],
        keywords: [
            "URL Shortener",
            "QR Generation",
            "Public API"
        ],
        demo_link: "https://smlr.org/",
        github_link: "https://github.com/noahcorona/url-shortener",
        media: [
            {
                type: "photo",
                source: '/projects/smlr-dot-org/smlr_dot_org_homepage.png',
                description: "URL Shortening service's landing page. ",
            },
        ],
    },
        {
            year: 2022,
            title: "noah.coffee",
            description: "Personal portfolio website with contact info",
            stack: [
                "Javascript",
                "HTML",
                "CSS"
            ],
            keywords: [
                "React.js",
                "Node.js"
            ],
            demo_link: "https://noah.coffee/",
            github_link: "https://github.com/noahcorona/noah-dot-coffee",
            media: [
                {
                    type: "photo",
                    source: '/projects/noah-dot-coffee/1.png',
                    description: "Landing page",
                },
                {
                    type: "photo",
                    source: '/projects/noah-dot-coffee/2.png',
                    description: "Contact page",
                }
            ],
        },
        {
            year: 2010,
            title: "anoroc.com",
            description: "One of my first ever websites, and a favor" +
                " for my grandparents - the owners of ANOROC, Inc. I built this" +
                " website when I was 10 years old, in 2011. While the" +
                " site is no longer in service, you can still explore the" +
                " site using the Wayback Machine!",
            stack: [
                "HTML",
                "CSS"
            ],
            keywords: [
                "Web design",
                "Sheet metal",
                "Aerospace",
                "Commercial manufacturing"
            ],
            demo_link: "https://web.archive.org/web/20130817061837/http://anoroc.com/index.html",
            media: [
                {
                    type: "photo",
                    source: "/projects/anoroc-dot-com/anoroc_homepage.png",
                    description: "Anoroc homepage (2011)",
                },
                {
                    type: "photo",
                    source: "/projects/anoroc-dot-com/anoroc_about.png",
                    description: "Anoroc 'About us' page (2011)",
                },
                {
                    type: "photo",
                    source: "/projects/anoroc-dot-com/anoroc_contact.png",
                    description: "Anoroc contact page (2011)",
                },
            ],
        },
        {
            title: "CUDA",
            description: "CUDA was the 3rd place winner of the " +
                "2021-2022 UCSB E.C.E. Capstone " +
                "program. The project goal was to " +
                "produce fast and inexpensive " +
                "medical tests that users can trust. " +
                "The CUDA Reader is a portable device " +
                "capable of detecting COVID-19 as " +
                "well as aiding in the detection of " +
                "trauma-induced coagulopathy. The " +
                "CUDA Reader’s companion, a cross-platform " +
                "mobile app, allows users to " +
                "monitor nearby devices and store " +
                "results in the cloud.",
            stack: [
                "Javascript",
                "React Native",
                "Firebase Realtime Database",
                "Bluetooth Low Energy",
                "Serial Protocols"
            ],
            keywords: [
                "Medical",
                "Electrochemical sensing",
                "Cross-platform",
            ],
            github_link: "https://github.com/AptitudeCapstone/CUDA",
            media: [
                {
                    type: "video",
                    source: "https://user-images.githubusercontent.com/25698069/180273048-2b10df13-f372-4fe7-acd8-6ecb7d3206be.mp4",
                    description: "Demo video",
                },
            ],
        },
        {
            title: "Geo-tagged Social Media",
            description: "Socialize by uploading, commenting, and " +
                "rating geo-tagged photo posts",
            stack: [
                "Javascript"
            ],
            keywords: [
                "React Native",
                "Cross-platform",
                "Google Maps API",
                "Geolocation",
            ],
            github_link: "https://github.com/noahcorona/ucsb-cs184-final-project-app",
            media: [
                {
                    type: "photo",
                    source: "/projects/geotag-social/geotag_social_authentication.png",
                    description: "Authentication screen",
                },
                {
                    type: "photo",
                    source: "/projects/geotag-social/geotag_social_map.png",
                    description: "Map view and post previews screen",
                },
                {
                    type: "photo",
                    source: "/projects/geotag-social/geotag_social_capture_photo.png",
                    description: "Map view and post previews screen",
                },
                {
                    type: "photo",
                    source: "/projects/geotag-social/geotag_social_post_photo.png",
                    description: "Map view and post previews screen",
                },
                {
                    type: "photo",
                    source: "/projects/geotag-social/geotag_social_edit_account.png",
                    description: "Account settings screen",
                },
            ],
        },
        {
            title: "Thermocouple Monitor",
            description: "Receives Bluetooth Low Energy updates from an " +
                "esp32 microcontroller and displays the current temperature " +
                "for the user.",
            stack: [
                "Swift"
            ],
            keywords: [
                "iOS",
                "Thermocouple",
                "Bluetooth Low Energy",
                "esp32"],
            github_link: "https://example.com",
            media: [
                {
                    type: "photo",
                    source: '/projects/reflow-oven/mobile_app_running.jpg',
                    description: "Mobile app screenshot, taken when the app is actively monitoring a nearby thermocouple via an esp32",
                },
                {
                    type: "photo",
                    source: '/projects/reflow-oven/thermocouple_demo.jpg',
                    description: "Mobile app screenshot, taken when the app is actively monitoring a nearby thermocouple via an esp32",
                },
                {
                    type: "video",
                    source: '/projects/reflow-oven/thermocouple_demo_video.m4v',
                    description: "An example setup for the thermocouple: a " +
                        "toaster oven lined with heat-reflective tape",
                },
            ],
        },
        {
            title: "Receipt Scanner",
            description: "Scans receipts, performing OCR to aid in the process of " +
                "organizing business expenses. Allows the user to easily export a " +
                "PDF of collections of their receipts with customizable information.",
            stack: [
                "Swift"
            ],
            keywords: [
                "iOS",
                "Computer vision",
                "Optical character recognition"],
            github_link: "https://example.com",
            media: [
                {
                    type: "video",
                    source: '/projects/receipt-scanner/receipt_scanner_demo_video.m4v',
                    description: "Demo video 1",
                },
                {
                    type: "video",
                    source: '/projects/receipt-scanner/receipt_scanner_demo_video_2.m4v',
                    description: "Demo video 2",
                },
                {
                    type: "video",
                    source: '/projects/receipt-scanner/receipt_scanner_demo_video_3.m4v',
                    description: "Demo video 3",
                },
                {
                    type: "video",
                    source: '/projects/receipt-scanner/receipt_scanner_demo_video_4.m4v',
                    description: "Demo video 4",
                },
                {
                    type: "photo",
                    source: '/projects/receipt-scanner/receipt_scanner_dev_screenshot.jpg',
                    description: "Mobile app screenshot, taken when the app is actively monitoring a nearby thermocouple via an esp32",
                },
            ],
        },
        {
            title: "CUDA",
            description: "CUDA was the 3rd place winner of the " +
                "2021-2022 UCSB E.C.E. Capstone " +
                "program. The project goal was to " +
                "produce fast and inexpensive " +
                "medical tests that users can trust. " +
                "The CUDA Reader is a portable device " +
                "capable of detecting COVID-19 as " +
                "well as aiding in the detection of " +
                "trauma-induced coagulopathy. The " +
                "device uses a Raspberry Pi to " +
                "interface with a variety of components, " +
                "such as a microcontroller and real-time clock. " +
                "Bluetooth Low Energy is used to communicate " +
                "the necessary data to nearby devices running the " +
                "companion CUDA mobile app. This code is private, as it " +
                "contains proprietary information belonging to " +
                "Aptitude Medical Systems, Inc.",
            stack: [
                "Python"
            ],
            keywords: [
                "Raspberry Pi",
                "Electrochemical measurement",
                "Bluetooth Low Energy"
            ],
            demo_link: "https://example.com",
            github_link: "https://example.com",
            microcontrollers: [
                "esp32",
            ],
            media: [
                {
                    type: "photo",
                    source: "/projects/CUDA/reader.jpeg",
                    description: "CUDA Reader and collector",
                },
            ],
        },
        {
            title: "Solar Battery Charger with Active Tracking",
            description: "Personal portfolio and contact website",
            stack: [
                "Javascript"
            ],
            keywords: [
                "React.js",
                "Node.js",
                "servo",
                "3D printing",
                "18650",
            ],
            microcontrollers: [
                "esp32",
            ],
            demo_link: "https://example.com",
            github_link: "https://example.com",
            media: [
                {
                    type: "photo",
                    source: '/projects/solar-tracking-charger/solar_tracker_printed.jpg',
                    description: "Custom housing CAD model (assembled)",
                },
                {
                    type: "photo",
                    source: '/projects/solar-tracking-charger/solar_tracker_model_exploded.jpg',
                    description: "Custom housing CAD model (exploded)",
                },
                {
                    type: "photo",
                    source: '/projects/solar-tracking-charger/solar_tracker_model_assembled.jpg',
                    description: "3D printed housing",
                },
                {
                    type: "video",
                    source: '/projects/solar-tracking-charger/solar_tracker.m4v',
                    description: "3D printed housing",
                },
                {
                    type: "video",
                    source: '/projects/solar-tracking-charger/solar_tracker_2.m4v',
                    description: "3D printed housing",
                },
            ],
        },
        {
            title: "Thermocouple BLE Transceiver",
            description: "Thermocouple sensor application that also acts as a " +
                "GATT server, advertising temperature data over Bluetooth " +
                "Low Energy",
            stack: [
                "C++"
            ],
            keywords: [
                "esp32",
                "Thermocouple",
                "Bluetooth Low Energy",
            ],
            microcontrollers: [
                "esp32",
            ],
            media: [
                {
                    type: "photo",
                    source: '/projects/reflow-oven/mobile_app_running.jpg',
                    description: "Mobile app screenshot, taken when the app is actively monitoring a nearby thermocouple via an esp32",
                },
                {
                    type: "photo",
                    source: '/projects/reflow-oven/thermocouple_demo.jpg',
                    description: "Mobile app screenshot, taken when the app is actively monitoring a nearby thermocouple via an esp32",
                },
                {
                    type: "video",
                    source: '/projects/reflow-oven/thermocouple_demo_video.m4v',
                    description: "An example setup for the thermocouple: a " +
                        "toaster oven lined with heat-reflective tape",
                },
            ],
        },
        {
            title: "Guitar Tuner",
            description: "",
            stack: [
                "C++"
            ],
            keywords: [
                "Audio processing",
                "Fast Fourier transforms",
                "LCD programming",
                "Embedded UI design"
            ],
            microcontrollers: [
                "STM32",
            ],
            demo_link: "https://example.com",
            github_link: "https://example.com",
            media: [
                {
                    type: "photo",
                    source: "https://picsum.photos/200/300",
                    description: "Random image",
                },
            ],
        },
        {
            title: "Pacman Agent",
            description: "",
            stack: [
                "Python", "scikit-learn"
            ],
            keywords: [
                "Game",
                "Rational Agents",
            ],
            github_link: "https://example.com",
            media: [

            ],
        },
        {
            title: "Fashion Classifier",
            description: "",
            stack: [
                "Python",
                "scikit-learn",
            ],
            keywords: [
                "MNIST",
                "Classification",
                "Fashion",
            ],
            demo_link: "https://colab.research.google.com/github/noahcorona/ucsb-165b-fashion-classifier/blob/main/hw4.ipynb",
            github_link: "https://github.com/noahcorona/ucsb-165b-fashion-classifier",
            media: [
            ],
        },
        {
            title: "Linear Classifier",
            description: "",
            stack: [
                "Python",
            ],
            keywords: [
                "Classification",
                "MatPlotLib",
                "ML Algorithms"
            ],
            demo_link: "https://colab.research.google.com/github/noahcorona/ucsb-cs165b-linear-classifier/blob/main/hw2.ipynb",
            github_link: "https://github.com/noahcorona/ucsb-cs165b-linear-classifier",
            media: [
            ],
        },
        {
            title: "Naive Bayes Classifier",
            description: "",
            stack: [
                "Python",
                "SciKit-learn",
            ],
            keywords: [
                "Classification",
            ],
            github_link: "https://github.com/noahcorona/ucsb-cs165b-naive-bayes-classifier",
            media: [
            ],
        },
        {
            title: "Tempo Estimator",
            description: "",
            stack: [
                "Python",
            ],
            keywords: [
                "Audio processing",
                "Feature analysis",
                "Short-time Fourier Transform",
                "Novelty function",
                "Tempo estimation",
            ],
            demo_link: "https://colab.research.google.com/github/noahcorona/ucsb-ece160-tempo-estimation/blob/main/Mini_Project_2.ipynb",
            github_link: "https://github.com/noahcorona/ucsb-ece160-tempo-estimation",
            media: [
                {
                    type: "photo",
                    source: "/projects/tempo-estimation/tempo_estimation_tempogram.png",
                    description: "Tempogram for two 20-second audio " +
                        "clips, in units of beats per minute vs. seconds",
                },
            ],
        },
        {
            title: "Main-Tie-Main Power Transfer Controller",
            description: "",
            stack: [
                "Ladder Logic",
                "C#"
            ],
            keywords: [
                "Programmable logic controller",
                "Human-machine interface",
                "Power controls",
            ],
            media: [
                {
                    type: "photo",
                    source: "/projects/main-tie-main/main_tie_main_enclosure_face.jpg",
                    description: "The face of the unit's enclosure: the control panel",
                },
                {
                    type: "photo",
                    source: "/projects/main-tie-main/main_tie_main_enclosure_open.jpg",
                    description: "The enclosure with the internal wiring visible",
                },
            ],
        },
        {
            title: "Pump Monitor and Control System",
            description: "",
            stack: [
                "Ladder Logic",
                "C#"
            ],
            keywords: [
                "Programmable logic controller",
                "Human-machine interface",
                "Data collection",
                "Histogram",
                "Alarms"
            ],
            media: [
                {
                    type: "photo",
                    source: "/projects/fluid-tech/fluid_tech_authorization.png",
                    description: "The authorization page of the control panel user interface",
                },
                {
                    type: "photo",
                    source: "/projects/fluid-tech/fluid_tech_alarms.png",
                    description: "The alarms page of the control panel user interface (1 of 2)",
                },
                {
                    type: "photo",
                    source: "/projects/fluid-tech/fluid_tech_alarms_2.png",
                    description: "The alarms page of the control panel user interface (2 of 2)",
                },
                {
                    type: "photo",
                    source: "/projects/fluid-tech/fluid_tech_options.png",
                    description: "The options page of the control panel user interface",
                },
            ],
        },
    ]
