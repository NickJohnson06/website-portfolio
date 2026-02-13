export const projects = [
    {
        id: 1,
        title: 'CloudSentry',
        description: 'Multi-tenant SaaS platform for tracking product usage, enforcing subscription tiers, and monetizing API services.',
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT'],
        category: 'cloud',
        githubUrl: 'https://github.com/NickJohnson06/cloud-sentry',
        // demoUrl: '/videos/cloudsentry-demo.mov', // Local video file
        date: 'Feb 2026 - Present',
        details: [
            'Architected a multi-tenant SaaS platform with strict organization-level data isolation and role-based access control (RBAC)',
            'Designed and deployed a scalable event ingestion API secured with organization-scoped API keys to support high-volume usage tracking',
            'Integrated Stripe Webhooks to automate subscription lifecycle management, including plan upgrades, downgrades, and cancellations',
            'Developed analytics dashboards using React and Recharts with server-side aggregation to visualize usage trends and revenue metrics',
            'Enforced subscription-tier constraints through middleware-based rate limiting and usage cap validation'
        ]
    },
    {
        id: 2,
        title: 'Beast Mode Fitness',
        description: 'A social fitness app to connect with friends and share your fitness journey.',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        category: 'mobile',
        githubUrl: 'https://github.com/rishitaido/MAD_Project2',
        // demoUrl: '/videos/beast-mode-fitness-demo.mov',
        date: 'Nov 2025 - Dec 2025',
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
        demoUrl: '/videos/roamlog-demo.mov',
        githubUrl: 'https://github.com/NickJohnson06/travel-journal',
        date: 'Nov 2025 - Dec 2025',
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
        githubUrl: 'https://github.com/NickJohnson06/pokedex',
        // demoUrl: '/videos/pokedex-demo.mov',
        date: 'Oct 2025 - Present',
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
        githubUrl: 'https://github.com/rishitaido/VehicleTrackerMAD',
        // demoUrl: '/videos/vehicle-tracker-demo.mov',
        date: 'Oct 2025 - Jan 2026',
        details: [
            'Developed a local-first mobile application for tracking vehicle maintenance history',
            'Implemented SQLite database for reliable offline data persistence',
            'Created features for scheduling reminders and tracking service intervals',
            'Designed reports and charts to visualize maintenance costs over time',
            'Built a clean, utilitarian interface focused on ease of data entry'
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
        details: [
            'Architected a high-level event-driven system: EventBridge → Cost ingestion Lambda → Postgres → API Lambda → React → CloudFront',
            'Implemented Infrastructure as Code (IaC) using Terraform for reproducible deployments',
            'Developed a cost ingestion pipeline and dashboard MVP for real-time analytics',
            'Designed the backend using Node.js and Postgres for scalable data processing',
            'Currently building the recommendations engine and SQL-based anomaly detection'
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
        details: [
            'Designed and deployed a secure, multi-AZ AWS VPC with public/private subnet segmentation',
            'Provisioned an EC2 web server in a private subnet, reachable only via an internal Application Load Balancer',
            'Implemented strict security groups and network ACLs for least-privilege access control',
            'Configured a NAT Gateway to allow secure outbound internet access for private resources',
            'Automated the entire infrastructure provisioning using Terraform for consistent, repeatable deployments'
        ]
    },
]
