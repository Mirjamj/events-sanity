import { Sections } from "@/components/sections/sections"
import { getPageBySlug } from "@/sanity/lib/api"
import { client } from "@/sanity/lib/client"
import { GET_PAGE_QUERY } from "@/sanity/lib/queries"

// This function generates metadata for a given page based on the route params
export const generateMetadata = async ({ params }) => {
  // Destructure 'slug' from the incoming route parameters
  const { slug } = await params

  // Fetch the page data from CMS using the slug
  const pageResult = await client.fetch(GET_PAGE_QUERY, { slug })

  // Return the metadata object 
  return {
    title: pageResult.title,
    description: pageResult.description
  }
}

// Page component responsible for rendering a dynamic page based on the slug
async function SlugPage({ params }) {
  const { slug } = await params

  // Retrieve full page data (including content sections) based on the slug
  const pageResult = await getPageBySlug(slug)

  // Render the page by passing its sections to the Sections component
  return (
    <div>
      <Sections sections={pageResult.sections} />
    </div>
  )
}

export default SlugPage