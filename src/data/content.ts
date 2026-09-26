export const profile = {
  name: 'Alec Cumming',
  role: 'Systems Analyst',
  location: 'Vancouver, BC',
  email: 'alecgcumming@gmail.com',
  tagline: "I support and build software for BC's public health system, and develop full-stack web applications independently.",
  bio: [
    "I'm a Systems Analyst at the Provincial Health Services Authority, where I support and improve applications used across British Columbia's public health system. I studied Computer Science at UBC, and independently build full-stack web applications, most recently a golf performance tracker and a set of fantasy hockey analytics tools.",
  ],
  social: [
    { name: 'Email', href: 'mailto:alecgcumming@gmail.com', icon: 'email' },
    { name: 'GitHub', href: 'https://github.com/aleccumming', icon: 'github' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aleccumming', icon: 'linkedin' },
  ],
} as const

export const liveProjects = [
  { name: 'Golf Practice Tracker', href: 'https://golf.alecgcumming.com', label: 'golf.alecgcumming.com' },
  { name: 'Fantasy Hockey Tools', href: 'https://fh-tools.alecgcumming.com', label: 'fh-tools.alecgcumming.com' },
] as const

export type Role = {
  title: string
  years: string
  tech?: string
  bullets: string[]
}

export type Employer = {
  company: string
  years: string
  roles: Role[]
}

export const experience: Employer[] = [
  {
    company: 'Provincial Health Services Authority',
    years: 'September 2023 — Present',
    roles: [
      {
        title: 'Systems Analyst',
        years: 'December 2024 — Present',
        bullets: [
          'Support 7 public health applications (e.g. Milk Bank Management System, Smart Sex Resource) used across all 5 regional health authorities, coordinating stakeholders and vendors to implement enhancements and resolve issues.',
          'Own end-to-end quarterly SQL patching for 2 applications — coordinating maintenance windows, drafting change requests and runbooks, and executing patches with minimal service disruption.',
          'Provide incident response, on-site troubleshooting, and user access provisioning, including a 24/7 on-call rotation covering critical systems outside business hours.',
          'Author IT broadcast messages and downtime communications so healthcare workers across the province get timely notice of planned and unplanned outages.',
        ],
      },
      {
        title: 'Junior Application Programmer Analyst',
        years: 'September 2023 — December 2024',
        tech: 'C#, Visual Basic, SQL Server, SQL Server Management Studio, Azure DevOps',
        bullets: [
          'Took ownership of a CAR-T cell therapy system integration after the initial approach surfaced core design issues mid-project, redesigning the workflow with stakeholders and delivering support for a new clinical cell type over a 3-month rollout.',
          'Participated in biweekly stakeholder meetings to prioritize enhancements and bug fixes, from application logic to UI.',
          'Automated a previously manual weekly data backup process within batch jobs, eliminating an estimated 15+ hours of manual effort annually.',
        ],
      },
    ],
  },
  {
    company: 'Bit Quill Technologies',
    years: 'May 2022 — January 2023',
    roles: [
      {
        title: 'Software Developer 1 — Internship',
        years: 'May 2022 — January 2023',
        tech: 'Java, C++, Amazon Aurora, GitHub Actions',
        bullets: [
          "Developed and maintained Java-based features for the AWS Advanced JDBC Wrapper Driver for Amazon Aurora — an official, AWS-maintained open-source driver (350+ GitHub stars) used across production Aurora and RDS deployments.",
          'Implemented a plugin allowing users to securely connect to Amazon Aurora clusters using AWS Identity and Access Management (IAM).',
          'Authored a detailed user configuration guide for the new IAM Authentication plugin.',
        ],
      },
    ],
  },
]

export const education = {
  school: 'University of British Columbia',
  degree: 'Bachelor of Science, Computer Science',
  years: 'September 2017 — May 2023',
}

export type Project = {
  name: string
  years: string
  summary: string
  stack: string[]
  highlights: string[]
  live?: { href: string; label: string }
  repo?: string
}

export const projects: Project[] = [
  {
    name: 'Golf Practice Tracker',
    years: '2026',
    summary:
      'A mobile-first PWA for logging golf shots and putts, finding miss patterns, and generating targeted practice plans — most golfers practice without ever learning what their misses actually are.',
    live: { href: 'https://golf.alecgcumming.com', label: 'golf.alecgcumming.com' },
    repo: 'https://github.com/aleccumming/golf-practice-app',
    stack: ['React 19', 'TypeScript', 'Vite', 'Express', 'Postgres (Neon)', 'IndexedDB'],
    highlights: [
      'Single-tap shot and putt logging built for one-handed use on the range, with offline entries queued and synced automatically when signal returns.',
      'Pattern detection flags club tendencies, contact quality, and putting break bias from recent shot history.',
      'Flagged patterns generate a practice plan from a 31-drill library, with baseline stats recorded to track improvement over time.',
      'A single Express app runs both locally and as a Vercel serverless function via a shared factory, backed by the Neon serverless Postgres driver.',
    ],
  },
  {
    name: 'Fantasy Hockey Tools',
    years: '2025 — 2026',
    summary:
      'A full-stack web app that helps fantasy hockey managers draft, evaluate players, and make in-season roster decisions using live NHL data — most decisions otherwise come down to gut feel.',
    live: { href: 'https://fh-tools.alecgcumming.com', label: 'fh-tools.alecgcumming.com' },
    repo: 'https://github.com/aleccumming/fantasy-hockey-tools',
    stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS 4', 'Drizzle ORM', 'Postgres (Neon)', 'Auth.js'],
    highlights: [
      'A draft assistant that turns uploaded player rankings into a live cheat sheet, pick suggestions, and schedule-fit analysis.',
      'Players are ranked by C-Score, a composite metric built from underlying stats correlated with fantasy production.',
      "Roster-fit for streaming pickups is solved as a maximum bipartite matching problem (Kuhn's algorithm) to correctly account for daily lineup changes and multi-position eligibility.",
      'A goalie win-probability model uses the log5 method over season, home/road, and recent-form splits, shrunk to avoid early-season noise.',
    ],
  },
  {
    name: 'Golf Tee Time Watcher',
    years: '2026',
    summary:
      'A Discord bot that watches municipal golf course booking platforms and alerts on newly available tee times, which are often gone within minutes.',
    repo: 'https://github.com/aleccumming/tee-time-watcher',
    stack: ['Node.js', 'Discord.js', 'SQLite', 'Claude Code'],
    highlights: [
      'Polls two municipal booking platforms every 3 minutes with per-site fault isolation, so one source failing doesn’t affect the other.',
      'Tracks notification state in SQLite to avoid duplicate alerts.',
      'Found and fixed two silent data-integrity bugs only visible from live data — a duplicate-identity field collision and a precision-loss bug in time-based filtering.',
    ],
  },
  {
    name: 'Personal Task & Documentation Organizer',
    years: '2026',
    summary:
      'A full-stack dashboard centralizing task tracking and documentation for support work across 8+ internal applications, replacing ad hoc spreadsheets and notes.',
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Claude Code'],
    highlights: [
      'Centralizes task tracking and documentation across 8+ internal applications in a single dashboard.',
      'Built on a self-hosted REST API with a lightweight, database-free persistence layer.',
      'Configurable cloud-synced storage gives reliable local backup without external infrastructure.',
    ],
  },
  {
    name: 'Fantasy Hockey Projection Model',
    years: '2025',
    summary: 'A statistical model projecting fantasy hockey stats for 350+ NHL players.',
    stack: ['Google Sheets', 'Apps Script', 'Yahoo Fantasy API'],
    highlights: [
      'Projects key fantasy stats for 350+ players using weighted historical averages.',
      'Used the projections to finish 1st out of 700+ managers in a competitive fantasy hockey league.',
      'A breakout-detection tool integrating the Yahoo Fantasy API to surface undervalued, available players by cross-referencing performance metrics against real-time roster availability.',
    ],
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['TypeScript / JavaScript', 'C#', 'SQL', 'Java', 'Python', 'C++', 'Visual Basic'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Node.js / Express', 'Drizzle ORM', 'JUnit', 'Mocha / Chai', 'Flutter'],
  },
  {
    category: 'Data & Infrastructure',
    items: ['Postgres', 'SQL Server', 'MySQL', 'SQLite', 'Azure', 'AWS', 'Azure DevOps', 'GitHub Actions', 'Vercel'],
  },
  {
    category: 'Ways of Working',
    items: ['System integration', 'Requirements & stakeholder management', 'Incident management', 'CI/CD', 'AI-assisted development (Claude Code)'],
  },
]
