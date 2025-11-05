const PROJECTS: {
  name: string
  blurb: string
  previewImage: string
  role: string
  stack: string[]
  story: string
  repoUrl?: string
  liveLink?: string
}[] = [
  // {
  //   name: 'REPE Dashboard',
  //   blurb: 'Admin tool to view and manage client data',
  //   role: 'Project lead',
  //   stack: [
  //     'React',
  //     'TypeScript',
  //     'Tailwind CSS',
  //     'REST',
  //     'Prisma',
  //     'PostgreSQL',
  //   ],
  //   story:
  //     'As project lead, I spearheaded the development of an internal admin dashboard for managing our client accounts, where each client is a real estate private equity firm. The primary challenge was streamlining the onboarding process for new REPE clients and providing efficient management of database objects associated with their accounts—including users, properties, portfolios, and related entities. I architected a full-stack solution using React and TypeScript on the frontend with Prisma and PostgreSQL powering the backend. The dashboard dramatically reduced client onboarding time from days to hours and gave our team centralized control over client configurations, making it easy to manage the complex relationships between users, properties, portfolios, and more across multiple REPE firms.',
  //   previewImage: '',
  //   liveLink: '',
  // },
  {
    name: 'Utah Gov AI',
    blurb:
      'Hackathon project to facilitate citizen engagement with Utah government bills',
    role: 'Solo developer',
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Python',
      'FastAPI',
      'LangChain',
      'TiDB Serverless',
      'Fly.io',
    ],
    story:
      'During a hackathon focused on the TiDB Serverless platform, I built an AI-powered app to make Utah government legislation more accessible to everyday citizens. The challenge was to transform dense legal language into understandable summaries and enable natural language queries about bills. I developed a full-stack solution combining a React frontend with a Python FastAPI backend that leverages LangChain for AI capabilities and TiDB Serverless for vector storage. Users can select a bill and engage in a conversational chat to ask questions like "How does this affect housing costs?" or "What are the main provisions?" and receive clear, contextualized answers, dramatically lowering the barrier to civic participation and helping citizens stay informed about legislation that impacts their lives.',
    previewImage: 'utah-gov-ai.webp',
    repoUrl: 'https://github.com/nookworth/gov-ai-ui',
    liveLink: 'https://utah-gov-ai.vercel.app',
  },
  {
    name: 'Travelpass.com Onboarding Flow',
    blurb: 'Polished user onboarding journey',
    role: 'Frontend team member',
    stack: ['React', 'TypeScript', 'ApolloGraphQL', 'HTML5', 'UnoCSS'],
    story:
      'As part of the frontend team at Travelpass, I contributed to redesigning the user onboarding experience to increase conversion rates and reduce drop-off. Working closely with designers and the product team, I helped implement a streamlined multi-step onboarding process using React and TypeScript, integrated with our GraphQL API through Apollo Client. The new flow features progressive disclosure of information, real-time validation, and smooth animations that guide users through account creation and initial setup. Post-launch metrics showed a significant improvement in completion rates and user satisfaction scores.',
    liveLink: 'https://www.travelpass.com/onboarding',
    previewImage: '/guides-showcase-portfolio.webp',
  },
  {
    name: 'HexType',
    blurb: 'Speech-to-text transcription app for the AI era',
    role: 'Solo developer',
    stack: ['Electron', 'TypeScript', 'HTML5', 'Tailwind CSS', 'Deepgram'],
    story:
      "As a former educational transcriber, I witnessed firsthand the outdated UI, sparse quality-of-life features, and poor reader experience of the industry's legacy software. This became my most ambitious project: HexType, a desktop transcription app that combines the speed of AI with the sensitivity and capacity for nuance of a human transcriber. Built using web technologies in the Electron framework, HexType addresses both the threat AI poses to transcribers' livelihoods and the opportunity to modernize a stagnant industry. The app features an enriched experience for both transcribers and readers, with real-time AI-powered transcription that augments rather than replaces human expertise. I'm currently migrating from web API calls to a local instance of OpenAI's Whisper model, ensuring privacy and offline capability while maintaining the quality that professional transcription demands.",
    previewImage: 'tapp-hero-image.webp',
    repoUrl: 'https://imgur.com/a/transcribing-app-demo-e2lyLg3',
  },
]

export default PROJECTS
