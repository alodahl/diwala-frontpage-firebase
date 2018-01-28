import SanityClient from '@sanity/client';


const client = SanityClient({
  // Find your project ID and dataset in `sanity.json` in your studio project
  projectId: 'jgfkj4nx',
  dataset: 'production'
});

export default async function (query, render, renderError) {
  return client
    .fetch(query)
    .then(render)
    .catch(renderError);
}