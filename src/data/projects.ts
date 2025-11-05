const PROJECTS: {
  name: string
  description: string
  previewImage: string
  repoUrl?: string
  liveLink?: string
}[] = [
  {
    name: 'Real Estate Private Equity Dashboard',
    description: 'Admin tool to manage REPE portfolio/client data',
    previewImage: '',
    liveLink: ''
  },
  {
    name: 'Utah Gov AI',
    description:
      'Hackathon project with the goal of facilitating citizen engagement with Utah government bills',
    previewImage: 'utah-gov-ai.webp',
    repoUrl: 'https://github.com/nookworth/gov-ai-ui',
  },
  {
    name: 'Travelpass.com Onboarding Flow',
    description:
      'Played a key role in developing the onboarding flow, particularly steps 2, 3, and 8',
    liveLink: 'https://www.travelpass.com/onboarding',
    previewImage: '/guides-showcase-portfolio.webp',
  },
  {
    name: 'HexType',
    description: 'Speech-to-text transcription app for the AI era',
    liveLink: 'https://imgur.com/a/transcribing-app-demo-e2lyLg3',
    previewImage: 'tapp-hero-image.webp',
  },
]

export default PROJECTS
