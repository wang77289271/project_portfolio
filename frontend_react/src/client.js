import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
  projectId: process.env.REACT_APP__SANITY_PROJECT_ID,
  dataset: 'project_portfolio',
  apiVersion: '2024-02-11',
  useCdn: true,
  token: process.env.REACT_APP__SANITY_PROJECT_TOKEN,
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)
