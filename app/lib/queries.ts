import groq from 'groq';

import { POSTS_LIMIT } from '@/app/lib/constants';
const postFields = `
  _id,
  title,
  "slug": slug.current,
  "date": _updatedAt,
  "excerpt": array::join(string::split((pt::text(body[_type == "block"][0...1])), "")[0..256], "") + "...",
  coverImage {
    asset,
    alt,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "lqip": asset->metadata.lqip
  },
  "tags": tags[] -> {
    _id,
    title,
    "slug": slug.current
  },
`;

const snippetFields = groq`
  _id,
  title,
  description,
  iconTitle,
  "slug": slug.current,
`;

export const searchPostsQuery = groq`
*[_type == "post" && title match $queryString] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = groq`
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    body[] {
      ...,
      markDefs[] {
        ...,
        // _type == "imageWithAlt" => {
        //   "slug": @.reference->slug.current,
        //   "type": @.reference->_type,
        //   "title": @.reference->title
        // },
        _type == "internalLink" => {
          "slug": @.reference->slug.current,
          "type": @.reference->_type,
          "title": @.reference->title
        },
      }
    },
    "readingTime": round(length(pt::text(content)) / 5 / 180 ),
    "headings": body[length(style) == 2 && string::startsWith(style, "h")],

    ${postFields}
  }
}`;

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const tagRelatedPosts = groq`
*[_type == "tag" && slug.current == $slug] {
  title,
  description,
  "posts":  *[_type == 'post' && references(^._id)] {
    ${postFields}
  } [0...${POSTS_LIMIT}]  | order(_updatedAt desc)
}[0]
`;

export const allSnippetsQuery = groq`
*[_type == "snippet"] | order(date desc, _updatedAt desc) {
  ${snippetFields}
}`;

export const snippetQuery = groq`
{
  "snippet": *[_type == "snippet" && slug.current == $slug] | order(_updatedAt desc) [0] {
    body,
    ${snippetFields}
  }
}`;

export const snippetSlugsQuery = groq`
*[_type == "snippet" && defined(slug.current)][].slug.current
`;

export const tagSlugsQuery = groq`
*[_type == "tag" && defined(slug.current)][].slug.current
`;

export const postUpdatedQuery = groq`*[_type == "post" && _id == $id].slug.current`;
