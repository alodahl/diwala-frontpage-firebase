import { createClient } from 'contentful'
import request from 'request-promise'

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'ct5tdherok1m',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '7a09bbe2d4ae34f2ae9742e2c40587eb0cc87e2e3dd25936da47f8bcf3081217'
})

export default async function(dispatch, action) {
  try {
    const newsRespons = await client.getEntries({'content_type':'2wKn6yEnZewu2SCCkus4as'})
    dispatch(action(newsRespons.items))
  } catch(e) {
    console.log(e)
    console.log("CATCCHED")
  }
}
