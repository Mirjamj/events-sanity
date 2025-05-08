import { TextImg } from "./text-img"
import { Events } from "./events"
import { Hero } from "./hero"
import { TextBtn } from "./text-btn"

// Sections component - dynamically renders page sections based on the section type
export const Sections = ({ sections }) => {

  return (
    <div className="space-y-20">
      {
        sections && sections.map(section => {
          switch (section._type) {
            case "heroSection":
              return <Hero key={section._key} headline={section.headline} image={section.image} subtitle={section.subtitle} />

            case "eventsSection":
              return <Events key={section._key} title={section.title} />

            case "textImgBlock":
              return <TextImg key={section._key} headline={section.headline} body={section.body} image={section.image} />

            case "textBlock":
              return <TextBtn key={section._key} headline={section.headline} body={section.body} image={section.image} />

            // Return nothing if section type is unrecognized
            default: return null
          }
        })
      }
    </div>
  )
}
