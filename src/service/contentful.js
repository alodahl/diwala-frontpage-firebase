import { createClient } from 'contentful'

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'ct5tdherok1m',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '7a09bbe2d4ae34f2ae9742e2c40587eb0cc87e2e3dd25936da47f8bcf3081217'
})

export const pullNews = async (dispatch, action) => {
  try {
    const newsRespons = await client.getEntries({'content_type':'2wKn6yEnZewu2SCCkus4as'})
    dispatch(action(newsRespons.items))
  } catch(e) {
    console.log(e)
    console.log("CATCCHED")
  }
}

export const pullTeam  = async (dispatch, action) => {
  try {
    const teamRespons = await client.getEntries({'content_type':'1kUEViTN4EmGiEaaeC6ouY'})
    dispatch(action(teamRespons.items))
  } catch(e) {
    console.log(e)
    console.log("CATCCHED")
  }
}

export const pullPartners  = async (dispatch, action) => {
  try {
    const partnerRespons = await client.getEntries({'content_type':'5KMiN6YPvi42icqAUQMCQe'})
    dispatch(action(partnerRespons.items))
  } catch(e) {
    console.log(e)
    console.log("CATCCHED")
  }
}
