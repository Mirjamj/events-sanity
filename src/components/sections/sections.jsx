import { About } from "./about"
import { Events } from "./events"
import { Hero } from "./hero"
import { Home } from "./home"

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

            case "contentSection":
              return <About key={section._key} headline={section.headline} body={section.body} image={section.image} />

            case "homeSection":
              return <Home key={section._key} headline={section.headline} body={section.body} image={section.image} />

            default: return null
          }
        })
      }
    </div>
  )
}