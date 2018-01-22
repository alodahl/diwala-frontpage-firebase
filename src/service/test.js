import request from 'request-promise'
import Bacon from 'baconjs';

export default function(dispatch, action) {
  try {
    const newsRequest = request('https://jsonplaceholder.typicode.com/posts/1')
    const baconobj = Bacon.fromPromise(newsRequest)
    console.log(baconobj)
    baconobj.onValue(stream => {
      console.log(stream)
      console.log(action())
      dispatch(action())

    })
  } catch(e) {
    console.log(e)
    console.log("CATCCHED")
  }

  return new Promise((resolve, reject) =>{
    resolve()
  })
}
