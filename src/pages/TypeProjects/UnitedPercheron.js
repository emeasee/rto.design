import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ProjectIntro from "../../components/sections/ProjectIntro"
import Caption from "../../components/sections/Caption"
import FullImage from "../../components/sections/FullImage"
import TwoImages from "../../components/sections/TwoImages"

function UnitedPercheron() {
  return (
    <Layout>
      <SEO title="United Percheron" />
      <ProjectIntro
        title="United Percheron"
        paragraph1="This was a branding pitch for a horse registery in the United States. I was invited to pitch and although this design was not selected it was a valuable opportunity to learn about a new style of lettering. This piece is lettered in a victorian early 20th century style, featuring a high degree of detail and ornamentation."
        title2="Typography"
        line1="Type"
        line1B="Lettering"
        line2="Client"
        line2B="United Percheron"
        line3="Date"
        line3B="2019"
      />
      <FullImage
        image={"/images/type/TY_2019_Percheron/TY_Ph_full.jpg"}
        alt="Mistaken for Strangers sentence"
      />
      <FullImage
        image={"/images/type/TY_2019_Percheron/TY_Ph_crop.jpg"}
        alt="Mistaken for Strangers sentence 2"
      />
    </Layout>
  )
}

export default UnitedPercheron
