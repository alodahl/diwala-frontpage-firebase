import Bacon from 'baconjs';
import testz from '../service/test';

export default function getNews(action) {
  console.log(this)
  console.log(action)
  return testz(this, action)
}
