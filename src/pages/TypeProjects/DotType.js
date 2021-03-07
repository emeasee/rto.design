import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ProjectIntro from "../../components/sections/ProjectIntro"
import FullImage from "../../components/sections/FullImage"
import TwoImages from "../../components/sections/TwoImages"

function DotType() {
  return (
    <Layout>
      <SEO title="Dot Type" />
      <ProjectIntro
        title="Dot Type"
        paragraph1="During my MA in Contemporary Typographic Media I was interested in moire patterns and illusions and I focused on the concept of communicating multiple messages in a single piece."
        paragraph2="During my studies the outcome of the project was a series of screen printed posters demonstrating the concept and a hand made book delivering two hidden messages when viewed through a pair of vintage 3D glasses (one red, one blue). I have since expanded the concept, creating a usable typeface where you can create your own illusions.​​​​​​​"
        paragraph3="The typeface was created using Roboto Mono as a base and modified using a technique I developed during my studies based on my research into moire patterns and illusions."
        title2="Typography"
        line1="Type"
        line1B="Lettering / Type Design"
        line2="Client"
        line2B="University Project"
        line3="Date"
        line3B="2014 + 2020"
      />
      <FullImage
        image={"/images/type/TY_2014_dots/TY_Dt_title.png"}
        alt="Dot Type title"
      />
      <TwoImages
        image1={"/images/type/TY_2014_dots/TY_Dt_abc_reg.png"}
        alt="Dot Type alphabet"
        image2={"/images/type/TY_2014_dots/TY_Dt_regular_italic.gif"}
      />
      <TwoImages
        image1={"/images/type/TY_2014_dots/TY_Dt_weights.png"}
        alt="Dot Type weights"
        image2={"/images/type/TY_2014_dots/TY_Dt_abc_italic.png"}
      />
      <FullImage
        image={"/images/type/TY_2014_dots/TY_Dt_push_pull.gif"}
        alt="Push Pull animated gif"
      />
      <FullImage
        image={"/images/type/TY_2014_dots/TY_Dt_uni_framed.jpg"}
        alt="A B Poster"
      />
      <FullImage
        image={"/images/type/TY_2014_dots/TY_Dt_uni_book.jpg"}
        alt="Illusion book project using Dot Type"
      />
    </Layout>
  )
}

export default DotType
