const PROJECTS: {
  name: string
  description: string
  previewImage: string
  repoUrl?: string
  liveLink?: string
}[] = [
  {
    name: 'Travelpass.com Onboarding Flow',
    description:
      'Played a key role in developing the onboarding flow, particularly steps 2, 3, and 8',
    liveLink: 'https://www.travelpass.com/onboarding',
    previewImage: '/guides-showcase-portfolio.webp',
  },
  {
    name: 'TPG Developer Portal',
    description:
      'A command-line tool to streamline the code deployment process at Travelpass Group',
    previewImage: 'portal.webp',
    repoUrl: 'https://github.com/nookworth/dev-portal-v2-cli',
  },
  {
    name: 'HexType',
    description: 'Speech-to-text transcription app for the AI era',
    liveLink: 'https://imgur.com/a/transcribing-app-demo-e2lyLg3',
    previewImage: 'tapp-hero-image.webp',
  },
]

export default PROJECTS
