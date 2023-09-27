//
// INDEX/HOME PAGE
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
	const data = await client.fetch(`*[_type == "post"]| order(_createdAt desc){
		...,
		"imageUrl":heroImage.asset->url
	}`)

	if (data) {
		return {
			posts: data
		}
	}
	return {
		status: 500,
		body: new Error("Internal Server Error")
	}
}