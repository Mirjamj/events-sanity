import { Sections } from "@/components/sections/sections"
import { getPageBySlug } from "@/sanity/lib/api"
import { client } from "@/sanity/lib/client"
import { GET_PAGE_QUERY } from "@/sanity/lib/queries"

export const generateMetadata = async ({ params }) => {
  const { slug } = await params

  const pageResult = await client.fetch(GET_PAGE_QUERY, { slug })

  return {
    title: pageResult.title,
    description: pageResult.description
  }
}

async function SlugPage({ params }) {

  const { slug } = await params

  const pageResult = await getPageBySlug(slug)

  return (
    <div>
      <Sections sections={pageResult.sections} />
    </div>
  )
}

export default SlugPage