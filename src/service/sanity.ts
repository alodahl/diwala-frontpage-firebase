import SanityClient from '@sanity/client';

export const client = SanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: 'jgfkj4nx',
  dataset: 'production'
});

export default async function (query: any) {
  return new Promise((resolve, reject) => client
    .fetch(query)
    .then((data: any) => resolve(data))
    .catch((error: any) => reject(error)));
}
