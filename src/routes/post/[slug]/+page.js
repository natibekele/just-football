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

	const data = await client.fetch(
		`*[_type == "post" && slug.current == "${slug}"]{
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
}`)

	if (data) {
		return {
			post: data[0]
		}
	}
	return {
		status: 500,
		body: new Error("Internal Server Error")
	}
}