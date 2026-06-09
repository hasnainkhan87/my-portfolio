// All portfolio data in one place — easy to update

export const personal = {
  name: 'Mohammad Hasnain Khan',
  tagline: 'Building software, leading communities, and exploring the future of Generative AI.',
  roles: ['Computer Science Student', 'Student Leader', 'Software Developer', 'GenAI Explorer'],
  email: 'hasnainkhan8704@gmail.com',
  github: 'https://github.com/hasnainkhan87',
  linkedin: 'https://www.linkedin.com/in/hasnaink87',
  resume: '/resume.pdf',
  university: 'NMAM Institute of Technology',
  location: 'Nitte, Karnataka',
}

export const stats = [
  { value: '9.1', label: 'CGPA' },
  { value: 'ACM', label: 'Secretary' },
  { value: '3rd', label: 'HackLoop S04' },
  { value: '100+', label: 'Event Participants' },
]

export const journey = [
  {
    year: '2021',
    title: 'Class X — 94%',
    org: 'City Montessori School, Lucknow',
    description: 'Laid a strong academic foundation with consistent excellence across all subjects.',
    type: 'education',
  },
  {
    year: '2023',
    title: 'Class XII — 95%',
    org: 'City Montessori School, Lucknow',
    description: 'Graduated with distinction, setting the stage for a Computer Science journey.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'B.Tech Computer Science',
    org: 'NMAM Institute of Technology',
    description: 'Began B.Tech CSE at NMAMIT, Nitte. Currently maintaining a CGPA of 9.1.',
    type: 'education',
  },
  {
    year: '2024',
    title: 'Joined ACM Student Chapter',
    org: 'ACM NMAMIT',
    description: 'Became part of the ACM student chapter, the hub of technical culture at NMAMIT.',
    type: 'community',
  },
  {
    year: '2024',
    title: 'Core Member — Wiki Club Tech',
    org: 'WikiClub Tech India',
    description: 'Joined WikiClub Tech as a core member, contributing to open knowledge and tech outreach.',
    type: 'community',
  },
  {
    year: '2025',
    title: 'Event Manager — ACM',
    org: 'ACM NMAMIT',
    description: 'Led Code Auction 2.0 — a high-energy coding + fun event with 100+ participants and a significant prize pool.',
    type: 'leadership',
  },
  {
    year: '2025',
    title: '3rd Place — HackLoop S04',
    org: 'NMAMIT Internal Hackathon',
    description: 'Built MolecuLens, an AI-powered molecular visualization platform, securing 3rd place.',
    type: 'achievement',
  },
  {
    year: '2025',
    title: 'Sakura Exchange Program',
    org: 'Ritsumeikan University, Japan',
    description: 'Part of the management team hosting students from Ritsumeikan University, Japan — a cultural and academic bridge.',
    type: 'achievement',
  },
  {
    year: '2025',
    title: 'Secretary — ACM',
    org: 'ACM NMAMIT',
    description: 'Elected Secretary of the ACM student chapter, leading the technical community at NMAMIT.',
    type: 'leadership',
  },
]

export const projects = [
  {
    title: 'MolecuLens',
    subtitle: 'AI-Powered Molecular Visualization Platform',
    description: 'A full-stack platform that generates and visualizes 3D molecular structures from natural language prompts. Built for HackLoop S04, winning 3rd place.',
    tech: ['React', 'Django', 'Three.js', 'RDKit', 'Python'],
    highlights: ['3D molecular visualization', 'Text-to-structure AI pipeline', 'Interactive model explorer'],
    github: 'https://github.com/hasnainkhan87/Hackathon-Project-2025',
    demo: null,
    featured: true,
  },
  {
    title: 'Municipal Complaint System',
    subtitle: 'Civic Tech — Role-Based Management Platform',
    description: 'A complaint management system for municipal corporations with separate portals for citizens, admins, and officers. Features automated email notifications.',
    tech: ['React', 'Node.js', 'Express.js', 'SQLite', 'EmailJS'],
    highlights: ['Role-based access control', 'Citizen & admin dashboards', 'Automated notifications'],
    github: 'https://github.com/hasnainkhan87',
    demo: null,
    featured: false,
  },
  {
    title: 'Placement Prep Hub',
    subtitle: 'Interactive Interview Preparation Platform',
    description: 'A comprehensive placement preparation platform with quizzes, progress tracking, bookmarking, and interview prep modules built for fellow students.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    highlights: ['Quiz engine with tracking', 'Progress dashboard', 'Interview prep modules'],
    github: 'https://github.com/hasnainkhan87',
    demo: null,
    featured: false,
  },
]

export const leadership = [
  {
    org: 'ACM Student Chapter',
    role: 'Event Manager → Secretary',
    image: 'acm-event-head',
    image2: 'acm-tech-event',
    description: 'Rose from Event Manager to Secretary of ACM NMAMIT. Organized Finite Loop — a coding + fun event with 100+ participants — and multiple technical events across semesters.',
    size: 'large',
    tag: 'Technical Community',
  },
  {
    org: 'WikiClub Tech India',
    role: 'Core Member & Event Coordinator',
    image: 'opensource-talk',
    image2: 'wiki-anniversary',
    description: 'Core member leading workshops, open-source talks, and WikiClub Tech\'s 25th anniversary celebrations. Wore the WikiClub jersey with pride.',
    size: 'medium',
    tag: 'Open Source',
  },
  {
    org: 'Public Speaking & Emcee',
    role: 'Stage Host & Speaker',
    image: 'nss-pitchathon',
    description: 'Hosted the NSS IT Wing Pitch-a-thon and other stage events, bringing energy and structure to technical presentations.',
    size: 'medium',
    tag: 'Communication',
  },
  {
    org: 'Sakura Exchange Program',
    role: 'Management Team',
    image: 'sakura-exchange',
    description: 'Part of the core management team for the Sakura Science Exchange, hosting students from Ritsumeikan University, Japan at NMAMIT.',
    size: 'small',
    tag: 'International',
  },
  {
    org: 'NSS',
    role: 'Volunteer',
    description: 'Active volunteer contributing to national service and community outreach initiatives through the National Service Scheme.',
    size: 'small',
    tag: 'Social Impact',
  },
]

export const skills = [
  {
    category: 'Programming Languages',
    items: ['Java', 'Python', 'JavaScript', 'C'],
  },
  {
    category: 'Web Development',
    items: ['React.js', 'Node.js', 'Express.js', 'HTML', 'CSS'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'REST APIs', 'EmailJS', 'Vite'],
  },
  {
    category: 'AI & Emerging Tech',
    items: ['Generative AI', 'Prompt Engineering', 'Gemini API', 'Django', 'RDKit', 'Three.js'],
  },
]

export const achievements = [
  {
    title: 'HackLoop S04 — 3rd Place',
    org: 'NMAM Institute of Technology',
    year: '2025',
    description: 'Built MolecuLens, an AI-powered molecular visualization platform, competing against the best student teams at NMAMIT.',
    type: 'hackathon',
  },
  {
    title: 'Smart India Hackathon',
    org: 'Government of India',
    year: '2024',
    description: 'Qualified the initial round of India\'s largest hackathon, a national-level recognition of technical problem-solving.',
    type: 'hackathon',
  },
  {
    title: 'Open Source Contributions',
    org: 'GitHub',
    year: '2024–25',
    description: 'Active contributor to open-source projects, sharing code and collaborating with developers globally.',
    type: 'opensource',
  },
  {
    title: 'Microsoft Azure Cloud Fundamentals',
    org: 'Microsoft',
    year: '2024',
    description: 'Certified in Azure cloud fundamentals, demonstrating understanding of cloud architecture and services.',
    type: 'certification',
  },
  {
    title: 'Spring Boot Development',
    org: 'Infosys Springboard',
    year: '2024',
    description: 'Completed backend development certification covering Spring Boot framework and enterprise Java patterns.',
    type: 'certification',
  },
  {
    title: 'Python for Everybody',
    org: 'University of Michigan — Coursera',
    year: '2024',
    description: 'Completed the Python specialization from University of Michigan, building a strong foundation in Python programming.',
    type: 'certification',
  },
]
