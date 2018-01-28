import SanityClient from '@sanity/client';

const client = SanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: 'jgfkj4nx',
  dataset: 'production'
});


export default async function (query) {
  return new Promise((resolve, reject) => client
    .fetch(query)
    .then(data => resolve(data))
    .catch(error => reject(error)));
}
