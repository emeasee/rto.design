import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import FullImage from "../../components/sections/FullImage"
import ProjectIntro from "../../components/sections/ProjectIntro"
import TwoImages from "../../components/sections/TwoImages"

function YVInfographic() {
  return (
    <Layout>
      <SEO title="Young Vic Infographic Poster" />
      <ProjectIntro
        title="Young Vic Infographic Poster"
        paragraph1="We worked with the Young Vic Theatre in London to produce this infographic poster, tracking the improvements they made to their IT and digital infrastructure, and how this effected the success of the theatre."
        paragraph2="We wanted to create a poster that breaks down a lengthy report and makes it more accessible. We used the folds of the page as a grid to to separate the three development stages of the project. The poster folds down into a small leaflet that can be handed to investors."
        title2="Graphic Design"
        line1="Type"
        line1B="Information Design"
        line2="Client"
        line2B="Young Vic Theatre"
        line3="Date"
        line3B="2019"
        line4="Role"
        line4B="Designer / Illustrator"
        line5="Team"
        line5B="Marisa Gama"
      />
      <FullImage
        image={"/images/graphic/GD_2019_YV poster/GD_Yv_poster.jpg"}
        alt="Photo of The Young Vic infographic printed poster"
      />
      <TwoImages
        image1={"/images/graphic/GD_2019_YV poster/GD_Yv_cover1.png"}
        alt="The Young Vic folded poster covers"
        image2={"/images/graphic/GD_2019_YV poster/GD_Yv_cover2.png"}
      />
      <FullImage
        image={"/images/graphic/GD_2019_YV poster/GD_Yv_stage2.png"}
        alt="The Young Vic infographic poster close up of illustrations"
      />
      <FullImage
        image={"/images/graphic/GD_2019_YV poster/GD_Yv_stage3.png"}
        alt="The Young Vic infographic poster close up of illustrations 2"
      />
    </Layout>
  )
}

export default YVInfographic
