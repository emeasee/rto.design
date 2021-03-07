import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ProjectIntro from "../../components/sections/ProjectIntro"
import FullImage from "../../components/sections/FullImage"
import TwoImages from "../../components/sections/TwoImages"

function BroturesKichijoji() {
  return (
    <Layout>
      <SEO title="Brotures Kichijoji" />
      <ProjectIntro
        title="Brotures Kichijoji"
        paragraph1="I created a Japanese monogram for the fixed gear bike store, Brotures Kichijoji. I was given the three characters and some references of what they were after. I used these to create a base arrangement and from there made a number of stylistic variations."
        paragraph2="The monogram was printed on stickers to be handed out in store and stuck on bikes."
        title2="Typography"
        line1="Type"
        line1B="Lettering"
        line2="Client"
        line2B="Brotures Kichijoji"
        line3="Date"
        line3B="2019"
        line4="Photography"
        line4B="@kageakis"
      />
      <TwoImages
        image1={"/images/type/TY_2019_Brotures/TY_Br_red.png"}
        alt="Brotures Kichijoji sticker in red outline"
        image2={"/images/type/TY_2019_Brotures/TY_Br_photo1.jpg"}
      />
      <TwoImages
        image1={"/images/type/TY_2019_Brotures/TY_Br_stickers.gif"}
        alt="Brotures Kichijoji sticker animation"
        image2={"/images/type/TY_2019_Brotures/TY_Br_yellow.png"}
      />
      <TwoImages
        image1={"/images/type/TY_2019_Brotures/TY_Br_explain1.png"}
        alt="Brotures Kichijoji sticker explanation graph"
        image2={"/images/type/TY_2019_Brotures/TY_Br_explain2.png"}
      />
      <FullImage
        image={"/images/type/TY_2019_Brotures/TY_Br_photo2.jpg"}
        alt="Brotures Kichijoji shop photo"
      />
    </Layout>
  )
}

export default BroturesKichijoji
