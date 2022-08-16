export const projects = [
  {
    year: 2022,
    wasFor: 'Personal project',
    types: [
      'web',
    ],
    title: 'smlr.org',
    description: 'A full-stack URL shortening app. Also ' +
        'generates QR codes and provides a free, documented API. ',
    stack: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
    ],
    demo_link: 'https://smlr.org/',
    github_link: 'https://github.com/noahcorona/url-shortener',
    media: [
      {
        type: 'photo',
        source: '/projects/smlr-dot-org/smlr_dot_org_homepage.png',
        description: 'URL Shortening service\'s landing page.',
      },
    ],
  },
  {
    year: 2022,
    wasFor: 'Personal project',
    types: [
      'web',
    ],
    title: 'noah.coffee',
    description: 'A responsive personal website with a portfolio, ' +
        'contact form, and resume link.',
    stack: [
      'Javascript',
      'TypeScript',
      'React.js',
    ],
    demo_link: 'https://noah.coffee/',
    github_link: 'https://github.com/noahcorona/noah-dot-coffee',
    media: [
      {
        type: 'photo',
        source: '/projects/noah-dot-coffee/1.png',
        description: 'Landing page',
      },
      {
        type: 'photo',
        source: '/projects/noah-dot-coffee/2.png',
        description: 'Contact page',
      },
    ],
  },
  {
    year: 2010,
    wasFor: 'Anoroc Precision Sheet Metal, Inc.',
    types: [
      'web',
    ],
    title: 'anoroc.com',
    description: 'A static website for a sheet metal manufacturing ' +
        'company. The website remained in service for years and ' +
        'is archived on the WayBack Machine.',
    stack: [
      'HTML',
      'CSS',
    ],
    demo_link: 'https://web.archive.org/web/20130817061837/' +
        'http://anoroc.com/index.html',
    media: [
      {
        type: 'photo',
        source: '/projects/anoroc-dot-com/anoroc_homepage.png',
        description: 'Anoroc homepage (2011)',
      },
      {
        type: 'photo',
        source: '/projects/anoroc-dot-com/anoroc_about.png',
        description: 'Anoroc \'About us\' page (2011)',
      },
      {
        type: 'photo',
        source: '/projects/anoroc-dot-com/anoroc_contact.png',
        description: 'Anoroc contact page (2011)',
      },
    ],
  },
  {
    year: 2022,
    wasFor: 'Aptitude Medical Systems / UCSB Capstone',
    types: [
      'mobile',
      'embedded',
    ],
    title: 'CUDA',
    description: 'The CUDA Reader is a portable device ' +
                'capable of detecting COVID-19 as ' +
                'well as aiding in the detection of ' +
                'trauma-induced coagulopathy.',
    stack: [
      'Python',
      'JavaScript',
      'React Native',
      'Firebase',
      'Bluetooth',
      'I2C',
      'SPI',
    ],
    github_link: 'https://github.com/AptitudeCapstone/CUDA',
    media: [
      {
        type: 'video',
        source: 'https://user-images.githubusercontent.com/' +
            '25698069/180273048-2b10df13-f372-4fe7-acd8-6ecb7d3206be.mp4',
        description: 'Demo video',
      },
    ],
  },
  {
    year: 2021,
    wasFor: 'Academic project',
    types: [
      'mobile',
    ],
    title: 'Geo-tagged Social Media',
    description: 'Socialize by uploading, commenting, and ' +
                'rating geo-tagged photo posts',
    stack: [
      'Javascript',
      'React Native',
      'Google Maps API',
    ],
    github_link: 'https://github.com/noahcorona/ucsb-cs184-final-project-app',
    media: [
      {
        type: 'photo',
        source: '/projects/geotag-social/geotag_social_authentication.png',
        description: 'Authentication screen',
      },
      {
        type: 'photo',
        source: '/projects/geotag-social/geotag_social_map.png',
        description: 'Map view and post previews screen',
      },
      {
        type: 'photo',
        source: '/projects/geotag-social/geotag_social_capture_photo.png',
        description: 'Map view and post previews screen',
      },
      {
        type: 'photo',
        source: '/projects/geotag-social/geotag_social_post_photo.png',
        description: 'Map view and post previews screen',
      },
      {
        type: 'photo',
        source: '/projects/geotag-social/geotag_social_edit_account.png',
        description: 'Account settings screen',
      },
    ],
  },
  {
    year: 2018,
    wasFor: 'Personal project',
    types: [
      'mobile',
    ],
    title: 'Receipt Scanner',
    description: 'Scans receipts, performing OCR to aid in the process of ' +
                'organizing business expenses. Allows the user to ' +
                'easily export a PDF of collections of their receipts ' +
                'with customizable information.',
    stack: [
      'Swift',
    ],
    media: [
      {
        type: 'video',
        source: '/projects/receipt-scanner/receipt_scanner_demo_video_4.m4v',
        description: 'A demo of the receipt scanner adding a receipt to ' +
            'a group. At the end, a PDF is generated with the receipts ' +
            'in the new group. In this instance, OCR and automatic text ' +
            'recognition were not enabled.',
      },
      {
        type: 'photo',
        source: '/projects/receipt-scanner/receipt_scanner_dev_screenshot.jpg',
        description: 'A screenshot of the mobile app that shows one stage of ' +
            'the pre-processing. This screen is not usually visible to the ' +
            'user.',
      },
    ],
  },
  {
    year: 2020,
    wasFor: 'Academic project',
    types: [
      'embedded',
    ],
    title: 'Active Tracking USB Solar Charger',
    description: 'An 18650 solar battery charger with a 2.0A USB output. ' +
        'Actively tracks the brightest light source in view and adjusts the ' +
        'panels using two 180 degree servo motors.',
    stack: [
      'STM32',
    ],
    github_link: 'https://example.com',
    media: [
      {
        type: 'photo',
        source: '/projects/solar-tracking-charger/solar_tracker_printed.jpg',
        description: 'Custom housing CAD model (assembled)',
      },
      {
        type: 'photo',
        source: '/projects/solar-tracking-charger/' +
            'solar_tracker_model_exploded.jpg',
        description: 'Custom housing CAD model (exploded)',
      },
      {
        type: 'photo',
        source: '/projects/solar-tracking-charger/' +
            'solar_tracker_model_assembled.jpg',
        description: '3D printed housing',
      },
      {
        type: 'video',
        source: '/projects/solar-tracking-charger/' +
            'solar_tracker.m4v',
        description: '3D printed housing',
      },
      {
        type: 'video',
        source: '/projects/solar-tracking-charger/' +
            'solar_tracker_2.m4v',
        description: '3D printed housing',
      },
    ],
  },
  {
    year: 2020,
    wasFor: 'Personal project',
    types: [
      'embedded',
      'mobile',
    ],
    title: 'Thermocouple Transmitter with Mobile Receiver App',
    description: 'An esp32 application acts as a GATT server, ' +
                'advertising temperature data over Bluetooth ' +
                'Low Energy. An iOS application receives updates' +
                ' and displays the temperature to the user. ',
    stack: [
      'C++',
      'Swift',
      'esp32',
      'Bluetooth',
    ],
    media: [
      {
        type: 'photo',
        source: '/projects/reflow-oven/mobile_app_running.jpg',
        description: 'Mobile app screenshot, taken when the ' +
            'app is actively monitoring a nearby thermocouple via an esp32',
      },
      {
        type: 'photo',
        source: '/projects/reflow-oven/thermocouple_demo.jpg',
        description: 'Mobile app screenshot, taken when the ' +
            'app is actively monitoring a nearby thermocouple via an esp32',
      },
      {
        type: 'video',
        source: '/projects/reflow-oven/thermocouple_demo_video.m4v',
        description: 'An example setup for the thermocouple: a ' +
                        'toaster oven lined with heat-reflective tape',
      },
    ],
  },
  {
    year: 2020,
    wasFor: 'Academic project',
    types: [
      'embedded',
    ],
    title: 'Chromatic Tuner',
    description: 'A chromatic tuner built using Fourier transforms ' +
        'running on an Artix-7 FPGA board. Outputs nearest note on LCD using ' +
        'the SPI serial protocol, as well as error in cents.',
    stack: [
      'C',
      'FPGA',
      'LCD via SPI',
    ],
    github_link: 'https://github.com/noahcorona/FPGA-chromatic-tuner',
    media: [
      {
        type: 'photo',
        source: '/projects/chromatic-tuner/gif-fpga-chromatic-tuner.gif',
        description: 'Tuner identifying a note being played from ' +
            'an iPhone using earbuds. The error (in cents) is ' +
            'displayed on a the green and red bar.',
      },
    ],
  },
  {
    year: 2021,
    wasFor: 'Academic project',
    types: [
      'ml',
    ],
    title: 'Pacman Agent',
    description: 'A rational agent for the common game PacMan. ' +
                'Based on a homework assignment. ',
    stack: [
      'Python',
      'SciKit Learn',
    ],
    github_link: 'https://example.com',
    media: [

    ],
  },
  {
    year: 2021,
    wasFor: 'Academic project',
    types: [
      'ml',
    ],
    title: 'Fashion Classifier',
    description: 'A classifier that predicts clothing article type. ' +
        'The model is built using SciKit Learn and trained using ' +
        'the MNIST Fashion dataset. MNIST fashion items. ',
    stack: [
      'Python',
      'SciKit Learn',
    ],
    demo_link: 'https://colab.research.google.com/github/noahcorona/ucsb-165b-fashion-classifier/blob/main/hw4.ipynb',
    github_link: 'https://github.com/noahcorona/ucsb-165b-fashion-classifier',
    media: [
    ],
  },
  {
    year: 2021,
    wasFor: 'Academic project',
    types: [
      'ml',
    ],
    title: 'Linear Classifier',
    description: 'A basic linear classifier implementation in Python ' +
        'using no external libraries.',
    stack: [
      'Python',
    ],
    demo_link: 'https://colab.research.google.com/github/noahcorona/ucsb-cs165b-linear-classifier/blob/main/hw2.ipynb',
    github_link: 'https://github.com/noahcorona/ucsb-cs165b-linear-classifier',
    media: [
    ],
  },
  {
    year: 2021,
    wasFor: 'Academic project',
    types: [
      'ml',
    ],
    title: 'Naive Bayes Classifier',
    description: 'An implementation of a Naive Bayes Classifier using the ' +
        'SciKit Learn library.',
    stack: [
      'Python',
      'SciKit-learn',
    ],
    keywords: [
      'Classification',
    ],
    github_link: 'https://github.com/noahcorona/ucsb-cs165b-naive-bayes-classifier',
    media: [
    ],
  },
  {
    year: 2022,
    wasFor: 'Academic project',
    types: [
      'ml',
    ],
    title: 'Tempo Estimator',
    description: 'A tempo estimator implemented in Python, using' +
        'a novelty function and the short-time Fourier transform. ' +
        'Predicts the beats per minute (BPM) of audio samples. ',
    stack: [
      'Python',
      'Essentia',
    ],
    demo_link: 'https://colab.research.google.com/github/noahcorona/ucsb-ece160-tempo-estimation/blob/main/Mini_Project_2.ipynb',
    github_link: 'https://github.com/noahcorona/ucsb-ece160-tempo-estimation',
    media: [
      {
        type: 'photo',
        source: '/projects/tempo-estimation/tempo_estimation_tempogram.png',
        description: 'Tempogram for two 20-second audio ' +
                        'clips, in units of beats per minute vs. seconds',
      },
    ],
  },
  {
    year: 2019,
    wasFor: 'Powercon Engineering Inc.',
    types: [
      'plc-hmi',
    ],
    title: 'Main-Tie-Main Power Transfer Controller',
    description: 'A main-tie-main scheme for power transfer. ' +
        'This project uses Schneider technology to implement ' +
        'a power transfer controller with a user-friendly touch' +
        ' screen interface.',
    stack: [
      'Ladder Logic',
      'Schneider Magelis PLC/HMI',
    ],
    media: [
      {
        type: 'photo',
        source: '/projects/main-tie-main/main_tie_main_enclosure_face.jpg',
        description: 'The face of the unit\'s enclosure: the control panel',
      },
      {
        type: 'photo',
        source: '/projects/main-tie-main/main_tie_main_enclosure_open.jpg',
        description: 'The enclosure with the internal wiring visible',
      },
    ],
  },
  {
    year: 2018,
    wasFor: 'Powercon Engineering Inc.',
    types: [
      'plc-hmi',
    ],
    title: 'Pump Monitor & Control System',
    description: 'A program to collect data, control alarm states, and ' +
        'allow for viewing of historical data for a pump system.',
    stack: [
      'Ladder Logic',
      'C#',
      'SQL',
      'PLC & HMI',
      'Modbus',
    ],
    media: [
      {
        type: 'photo',
        source: '/projects/fluid-tech/fluid_tech_authorization.png',
        description: 'The authorization page of the control panel ' +
            'user interface',
      },
      {
        type: 'photo',
        source: '/projects/fluid-tech/fluid_tech_alarms.png',
        description: 'The alarms page of the control panel user ' +
            'interface',
      },
      {
        type: 'photo',
        source: '/projects/fluid-tech/fluid_tech_options.png',
        description: 'The options page of the control panel user interface',
      },
    ],
  },
];
