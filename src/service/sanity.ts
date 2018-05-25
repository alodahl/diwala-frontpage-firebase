import SanityClient from '@sanity/client';

export const sanityClient = SanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: 'jgfkj4nx',
  dataset: 'certificates-dev'
});

export default async function (query: any) {
  return new Promise((resolve, reject) => sanityClient
    .fetch(query)
    .then((data: any) => resolve(data))
    .catch((error: any) => reject(error)));
}
