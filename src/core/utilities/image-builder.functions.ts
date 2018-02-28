import { client } from '../../service/sanity';
import imageUrlBuilder from '@sanity/image-url';

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:

interface UrlFor {
  url: () => string;
  width: (size: number) => UrlFor;
}
export function urlFor(source: any): UrlFor {
  return builder.image(source);
}

export function getViewportWidth(): number {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
}
