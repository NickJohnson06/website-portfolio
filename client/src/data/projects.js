export const projects = [
    {
        id: 1,
        title: 'CloudSentry',
        description: 'Multi-tenant SaaS platform for tracking product usage, enforcing subscription tiers, and monetizing API services.',
        technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Stripe', 'JWT'],
        category: 'cloud',
        githubUrl: 'https://github.com/NickJohnson06/cloud-sentry',
        // demoUrl: '/videos/cloudsentry-demo.mov', // Local video file
        date: 'Feb 2026 - Present',
        header: 'Designed and engineered a multi tenant SaaS platform enabling secure organization level data isolation, event driven usage tracking, subscription billing automation, and real time analytics visualization.',
        details: [
            'Implemented organization scoped data partitioning and RBAC policies to enforce strict tenant isolation at the database and API layers',
            'Designed and deployed a scalable event ingestion API secured with organization scoped API keys to support high volume usage tracking',
            'Integrated Stripe Webhooks to automate subscription lifecycle management, including plan upgrades, downgrades, and cancellations',
            'Developed analytics dashboards using React and Recharts with server side aggregation to visualize usage trends and revenue metrics',
            'Enforced subscription tier constraints through middleware based rate limiting and usage cap validation'
        ]
    },
    {
        id: 7,
        title: 'CloudShield Lab',
        description: 'Cloud engineering project demonstrating real-world AWS networking, security, and Infrastructure as Code practices.',
        technologies: ['AWS', 'Terraform', 'EC2', 'ALB', 'Linux'],
        category: 'cloud',
        githubUrl: 'https://github.com/NickJohnson06/cloudshield-lab',
        // demoUrl: '/videos/cloudshield-lab-demo.mov',
        date: 'Feb 2026 - Present',
        header: 'Designed and automated a secure, highly available multi-AZ AWS infrastructure using Terraform, private EC2, ALB routing, and least-privilege network controls.',
        details: [
            'Architected a VPC with public and private subnet segmentation across multiple Availability Zones',
            'Provisioned a private EC2 web server with no public IP, accessible only through a public Application Load Balancer',
            'Implemented least privilege security groups and network ACLs to enforce strict inbound and outbound controls',
            'Configured a NAT Gateway and route tables to enable secure outbound internet access for private resources',
            'Automated full infrastructure provisioning using Terraform for consistent, repeatable deployments'
        ]
    },
    {
        id: 6,
        title: 'AWS Cost Optimizer',
        description: 'Cloud-native cost analytics and optimization dashboard built on AWS.',
        technologies: ['AWS', 'Terraform', 'Node.js', 'React', 'SQL'],
        category: 'cloud',
        githubUrl: 'https://github.com/NickJohnson06/aws-cost-optimizer',
        // demoUrl: '/videos/aws-cost-optimizer-demo.mov',
        date: 'Dec 2025 - Present',
        header: 'Cloud-native cost analytics and optimization platform built on AWS to monitor usage, detect anomalies, and provide actionable cost insights.',
        details: [
            'Designed and deployed a serverless architecture using AWS Lambda, API Gateway, RDS (PostgreSQL), S3, CloudFront, and Cognito',
            'Automated infrastructure provisioning using Terraform with reproducible, scalable deployments',
            'Built Node.js backend APIs and a React dashboard to ingest, analyze, and visualize cloud cost data',
            'Implemented an event-driven ingestion pipeline using EventBridge, Lambda, and SQL for cost tracking and anomaly detection'
        ]
    },
    {
        id: 4,
        title: 'Pokédex App',
        description: 'A personal Pokédex app that lets you catch and manage your favorite Pokémon.',
        technologies: ['Flutter', 'Dart', 'REST API', 'SQLite', 'Firebase'],
        category: 'mobile',
        githubUrl: 'https://github.com/NickJohnson06/pokedex',
        // demoUrl: '/videos/pokedex-demo.mov',
        date: 'Oct 2025 - Present',
        header: 'Designed and developed a feature rich Flutter mobile application integrating remote REST APIs, local SQLite persistence, reactive state management, and advanced data visualization.',
        details: [
            'Implemented advanced search, filtering, and sorting logic across name, type, generation, and favorites with dynamic List and Grid rendering',
            'Built a reactive state management system using Provider to handle real time data updates and user driven interactions',
            'Developed interactive stat visualizations using radar charts and bar graphs to analyze Pokémon base attributes',
            'Engineered a gamified achievements engine with tiered badge progression, type mastery tracking, and generation based collection analytics',
            'Optimized performance through efficient API handling, structured caching, and smooth list virtualization for responsive scrolling'
        ]
    },
    {
        id: 2,
        title: 'Beast Mode Fitness',
        description: 'A fitness and social tracking app built with Flutter and Firebase, featuring workout logs, body metrics, challenges, and social feeds.',
        contributors: ['Rishi Raj'],
        technologies: ['Flutter', 'Dart', 'Firebase', 'Provider', 'Cloud Storage'],
        category: 'mobile',
        githubUrl: 'https://github.com/rishitaido/MAD_Project2',
        // demoUrl: '/videos/beast-mode-fitness-demo.mov',
        date: 'Nov 2025 - Dec 2025',
        header: 'Cross-platform Flutter fitness app with Firebase backend, real-time data sync, social feed, leaderboard challenges, and performance analytics.',
        details: [
            'Implemented Firebase Authentication, Firestore, and Cloud Storage to manage users, workouts, posts, challenges, and media uploads',
            'Built comprehensive workout logging system supporting strength and cardio data, including sets, reps, weight, distance, and workout history',
            'Created social features including activity feed, follow system, likes, comments, and community-based fitness challenges with leaderboards',
            'Designed progress tracking dashboard with workout streaks, personal records, body metrics, BMI calculation, and performance visualizations',
            'Integrated real-time data synchronization and state management using Firebase services and Provider for responsive UI updates.'
        ]
    },
    {
        id: 3,
        title: 'RoamLog',
        description: 'A travel journal web app that lets you create and manage your travel plans with AI-powered itinerary recommendations.',
        technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Tailwind CSS', 'Meta AI'],
        category: 'fullstack',
        //demoUrl: '/videos/roamlog-demo.mov',
        githubUrl: 'https://github.com/NickJohnson06/travel-journal',
        date: 'Nov 2025 - Dec 2025',
        header: 'MERN travel planner with CRUD, authentication, protected routes, Tailwind UI, and AI itinerary generation via Llama-3.3-70B (OpenRouter).',
        details: [
            'Architected structured itinerary and journal data models with full CRUD functionality and persistent state management.',
            'Implemented secure JWT based authentication with protected routes and session handling.',
            'Integrated Llama 3.3 70B via OpenRouter to dynamically generate personalized, AI driven travel itineraries.',
            'Developed interactive map visualizations to render geospatial routes and destination data.'
        ]
    },
    {
        id: 5,
        title: 'Vehicle Maintenance Tracker App',
        description: 'A maintenance tracker app to help keep your vehicle maintenance records in one place and up to date.',
        contributors: ['Rishi Raj'],
        technologies: ['Flutter', 'Dart', 'SQLite'],
        category: 'mobile',
        githubUrl: 'https://github.com/rishitaido/VehicleTrackerMAD',
        // demoUrl: '/videos/vehicle-tracker-demo.mov',
        date: 'Oct 2025 - Jan 2026',
        header: 'Flutter mobile app with SQLite-backed maintenance logging, relational schema design, and streamlined UI for tracking vehicle service history and expenses.',
        details: [
            'Implemented a local SQLite database for persistent storage of vehicles, service history, and maintenance schedules',
            'Built maintenance reminder logic based on mileage and service intervals to help users stay current with vehicle care',
            'Designed intuitive UI for adding, editing, and viewing vehicles, service records, and maintenance timelines',
            'Applied clean architecture principles with modular components, data models, and separation of concerns',
            'Implemented full CRUD functionality with validation to ensure accurate and reliable record management'
        ]
    },
]
