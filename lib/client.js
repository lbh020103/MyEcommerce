import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 'b4vjja77',
    dataset: 'production',
    apiVersion: '2023-02-20',
    useCdn: true,
    ignoreBrowserTokenWarning: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);