import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ProjectIntro from "../../components/sections/ProjectIntro"
import Caption from "../../components/sections/Caption"
import FullImage from "../../components/sections/FullImage"
import TwoImages from "../../components/sections/TwoImages"

function Lyrical() {
  return (
    <Layout>
      <SEO title="Spring Awakening Poster" />
      <ProjectIntro
        title="Spring Awakening Poster"
        paragraph1="I designed a poster for a theatre performance of Spring Awakening. The piece was a contemporary take on the classic play with a heavy emphasis on the dark and moody elements of the story. They wanted the poster to reflect this, while also hinting at materials used as part of the stage design. I designed a number of options and the final poster was used to advertise the play outside the theatre and online."
        title2="Typography"
        line1="Type"
        line1B="Poster Design"
        line2="Client"
        line2B="Young Vic Theatre"
        line3="Date"
        line3B="2018"
        line3="Photography"
        line3B="Leon Puplett"
      />
      <FullImage
        image={"/images/type/TY_2018_YV Poster/TY_Yv_posters.jpg"}
        alt="Set of all four posters designed side by side"
      />
      <TwoImages
        image1={"/images/type/TY_2018_YV Poster/TY_Yv_type.jpg"}
        alt="Main poster layout"
        image2={"/images/type/TY_2018_YV Poster/TY_Yv_photo1.jpg"}
      />
      <FullImage
        image={"/images/type/TY_2018_YV Poster/TY_Yv_photo2.jpg"}
        alt="Same lyric sentence, with side angle"
      />
    </Layout>
  )
}

export default Lyrical
