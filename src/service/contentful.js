import {createClient} from 'contentful'
const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'w2fsb14ks2oa',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '1d14b43ce413c0e00e2eed2dc93f514d8de886adeb101a61c273d8a5734988f6'
})
