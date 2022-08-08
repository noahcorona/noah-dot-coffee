export const projects = [
    {
        year: 2022,
        title: "smlr.org",
        description: "A full-stack app that shortens URLs and " +
            "generates QR codes. Also provides a free, documented API. ",
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
            description: "One of my first ever projects - a website for a sheet metal manufacturing company named Anoroc, and owned by my grandparents. The website remained in service for years and is visible on the WayBack Machine.",
            stack: [
                "HTML",
                "CSS"
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
            year: 2022,
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
                "Python",
                "JavaScript",
                "React Native",
                "Firebase",
                "Bluetooth Low Energy",
                "I2C",
                "SPI"
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
            year: 2021,
            title: "Geo-tagged Social Media",
            description: "Socialize by uploading, commenting, and " +
                "rating geo-tagged photo posts",
            stack: [
                "Javascript",
                "React Native",
                "Google Maps API"
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
            year: 2020,
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
            year: 2018,
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
            year: 2020,
            title: "Solar Battery Charger with Active Tracking",
            description: "Personal portfolio and contact website",
            stack: [
                "Javascript",
                "React JS",
                "STM32"
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
            year: 2020,
            title: "Thermocouple BLE Transceiver",
            description: "Thermocouple sensor application that also acts as a " +
                "GATT server, advertising temperature data over Bluetooth " +
                "Low Energy",
            stack: [
                "C++",
                "esp32",
                "Bluetooth Low Energy"
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
            year: 2020,
            title: "Guitar Tuner",
            description: "",
            stack: [
                "C++",
                "STM32",
                "LCD via SPI",
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
            year: 2021,
            title: "Pacman Agent",
            description: "A rational agent for the common game PacMan. " +
                "Based on a homework assignment. ",
            stack: [
                "Python",
                "scikit-learn"
            ],
            github_link: "https://example.com",
            media: [

            ],
        },
        {
            year: 2021,
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
            year: 2021,
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
            year: 2021,
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
            year: 2022,
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
            year: 2019,
            title: "Main-Tie-Main Power Transfer Controller",
            description: "",
            stack: [
                "Ladder Logic",
                "Schneider combined PLC/HMI"
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
            year: 2017,
            title: "Pump Monitor and Control System",
            description: "Data collection Histogram Alarms",
            stack: [
                "Ladder Logic",
                "C#",
                "PLC & HMI",
                "Modbus"
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
