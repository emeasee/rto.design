import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import FullImage from "../../components/sections/FullImage"
import ProjectIntro from "../../components/sections/ProjectIntro"

function WildTame() {
  return (
    <Layout>
      <SEO title="Wild Tame Rebrand" />
      <ProjectIntro
        title="Wild Tame Rebrand"
        paragraph1="Wild Tame is a creative agency based in Tokyo Japan, the work they produce is a balance of technical expertise and wild creativity, working in both English and Japanese. We wanted to create a brand identity that communicated and celebrated this duality and diversity while also speaking to the balance of cultural differences."
        paragraph2="I developed a number of logo concepts based on the duality and contrast between English and Japanese culture, drawing on inspiration from calligraphic brush typography and hanko signature stamps. The final logo design combines the concepts of “wild” and “tame”, with cultural typographic concepts of Japanese brush calligraphy and western sans serif type. The visual reference to the “brush” was then taken and expanded to create a set of stationary and digital assets used in the website."
        paragraph3="A key concept on the website was the idea of using English and Japanese side by side. This approach reflects the practices of the studio who work with both languages together on a daily basis. More than just translation, the work involves cultural understanding and communication, helping both international and Japanese clients."
        title2="Graphic Design"
        line1="Type"
        line1B="Branding"
        line2="Client"
        line2B="Wild Tame"
        line3="Date"
        line3B="2019"
        line4="Role"
        line4B="Lead Designer"
        line5="Team"
        line5B="Marisa Gama"
      />
      <FullImage
        image={"/images/graphic/GD_2019_Wild Tame/GD_Wt_header.jpg"}
        alt="Wild Tame logo display on photo"
      />
      <FullImage
        image={"/images/graphic/GD_2019_Wild Tame/GD_Wt_logos.png"}
        alt="Wild Tame various logos exploration"
      />
      <FullImage
        image={"/images/graphic/GD_2019_Wild Tame/GD_Wt_business_cards.png"}
        alt="Wild Tame business cards"
      />
      <FullImage
        image={"/images/graphic/GD_2019_Wild Tame/GD_Wt_web1.jpg"}
        alt="Wild Tame desktop and mobile website screenshots"
      />
      <FullImage
        image={"/images/graphic/GD_2019_Wild Tame/GD_Wt_web2.png"}
        alt="Wild Tame website icons and contact page"
      />
    </Layout>
  )
}

export default WildTame
