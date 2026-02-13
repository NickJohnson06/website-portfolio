export const projects = [
    {
        id: 1,
        title: 'CloudSentry',
        description: 'An AWS serverless application that tracks expenses and provides insights into your AWS usage.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        category: 'cloud',
        image: 'https://via.placeholder.com/400x250?text=CloudSentry',
        liveUrl: 'https://cloudsentry-nickjohnson06.vercel.app/',
        githubUrl: 'https://github.com/NickJohnson06/cloudsentry',
        demoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder video
        date: 'Jan 2024 - Present',
        details: [
            'Architected a serverless AWS application to track cloud expenses and provide usage insights',
            'Implemented real-time data processing using AWS Lambda and API Gateway',
            'Designed a responsive React frontend with interactive data visualization charts',
            'Integrated Stripe for secure payment processing and subscription management',
            'Utilized MongoDB for scalable data storage of user expenses and usage logs'
        ]
    },
    {
        id: 2,
        title: 'Social Fitness App',
        description: 'A social fitness app to connect with friends and share your fitness journey.',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        category: 'mobile',
        image: 'https://via.placeholder.com/400x250?text=Social+Fitness+App',
        liveUrl: 'https://social-fitness-nickjohnson06.vercel.app/',
        githubUrl: 'https://github.com/rishitaido/MAD_Project2',
        date: 'Aug 2023 - Dec 2023',
        details: [
            'Developed a cross-platform mobile application using Flutter and Dart',
            'Implemented real-time social features including friend connections and activity feeds using Firebase',
            'Created a comprehensive fitness tracking system with workout logging and progress visualization',
            'Designed a clean, intuitive UI/UX focusing on user engagement and community building',
            'Integrated Google Maps API for route tracking and location-based features'
        ]
    },
    {
        id: 3,
        title: 'RoamLog',
        description: 'A travel journal web app that lets you create and manage your travel plans with AI-powered itinerary recommendations.',
        technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Meta AI'],
        category: 'fullstack',
        image: 'images/RoamLog-Thumbnail.png',
        liveUrl: 'https://travel-journal-nickjohnson06.vercel.app/',
        demoUrl: 'https://www.youtube.com/watch?v=Tq8FWYFWnmI',
        githubUrl: 'https://github.com/NickJohnson06/travel-journal',
        date: 'May 2023 - Aug 2023',
        details: [
            'Built a full-stack MERN application for managing travel itineraries and journals',
            'Integrated Meta AI to generate personalized travel recommendations and itinerary suggestions',
            'Implemented secure user authentication and authorization using JWT',
            'Utilized specialized interactive maps for visualizing travel routes and destinations',
            'Deployed application using Vercel for frontend and specialized hosting for backend services'
        ]
    },
    {
        id: 4,
        title: 'Pokedex App',
        description: 'A personal pokedex app that lets you catch and manage your favorite pokemon.',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        category: 'mobile',
        image: 'https://via.placeholder.com/400x250?text=Pokedex+App',
        liveUrl: 'https://pokedex-nickjohnson06.vercel.app/',
        githubUrl: 'https://github.com/NickJohnson06/pokedex',
        date: 'Jan 2023 - May 2023',
        details: [
            'Created an immersive Pokedex application using Flutter with smooth animations',
            'Integrated the PokeAPI to fetch and display detailed Pokemon data in real-time',
            'Implemented a "catch" mechanic and team management system using local storage',
            'Designed a responsive UI that adapts to different device screen sizes',
            'Optimized performance for smooth scrolling and data loading'
        ]
    },
    {
        id: 5,
        title: 'Vehicle Maintenance Tracker App',
        description: 'A maintenance tracker app to help keep your vehicle maintenance records in one place and up to date.',
        technologies: ['Flutter', 'Dart', 'SQLite'],
        category: 'mobile',
        image: 'https://via.placeholder.com/400x250?text=Vehicle+Maintenance+Tracker+App',
        liveUrl: 'https://vehicle-maintenance-tracker-nickjohnson06.vercel.app/',
        githubUrl: 'https://github.com/rishitaido/VehicleTrackerMAD',
        date: 'Aug 2022 - Dec 2022',
        details: [
            'Developed a local-first mobile application for tracking vehicle maintenance history',
            'Implemented SQLite database for reliable offline data persistence',
            'Created features for scheduling reminders and tracking service intervals',
            'Designed reports and charts to visualize maintenance costs over time',
            'Built a clean, utilitarian interface focused on ease of data entry'
        ]
    },
]
