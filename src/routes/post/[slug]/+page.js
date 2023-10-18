//
// POST PAGE...
//
//
import { createClient } from "@sanity/client"

const client = createClient({
  projectId: "ti1pgsqv",
  dataset: "production",
  apiVersion: "2021-10-21",
  useCdn: false
})


export async function load({ params }) {
  const { slug } = params;

  const queries = [
    `
      *[_type == "post" && slug.current == "${slug}"]{
        category,
        publishDate,
        content[]{
          ...,
          _type == "image" => {
            ...,
            "url":asset->url
          }
        },
        title,
        subtitle,
        slug,
        "imageUrl":heroImage.asset->url
    }`,
    `
      *[_type == "post" && slug.current != "${slug}"] | order(_createdAt desc)[0...4]{
      _id,
      category,
      publishDate,
      title,
      subtitle,
      slug,
      "imageUrl":heroImage.asset->url
      }
    `
  ]

  const data = await Promise.all([client.fetch(queries[0]), client.fetch(queries[1])])

  if (data) {
    const post = data.find(arr => arr.length === 1)[0];
    const suggestedPosts = data.find(arr => arr.length != 1);

    return {
      post,
      suggestedPosts
    }
  }
  return {
    status: 500,
    body: new Error("Internal Server Error")
  }
}