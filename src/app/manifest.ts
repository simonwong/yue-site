import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Simon Wong\'s Blog',
    short_name: 'Simon Wong\'s Blog',
    description: 'Simon Wong\'s Blog, short sentences',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
