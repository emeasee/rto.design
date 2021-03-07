import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ProjectIntro from "../../components/sections/ProjectIntro"
import FullImage from "../../components/sections/FullImage"
import TwoImages from "../../components/sections/TwoImages"

function ContinuousLetters() {
  return (
    <Layout>
      <SEO title="Continuous non-overlapping letters" />
      <ProjectIntro
        title="Continuous non-overlapping letters"
        paragraph1="During the first lockdown of 2020 I decided to make my first typeface. I’ve always loved and worked with typography and letters but this was the first time I put my skills and experience together to make a typeface. It was a huge learning process which raised more questions than it answered, but I really enjoyed it."
        paragraph2="The concept of Continuous is simple, can I create an alphabet of letters and numbers where each letter is made of a single, non-overlapping stroke. Some letters were more challenging than others and I created some pretty wild glyphs, but I am pretty happy with the outcome of the project so far."
        paragraph3="I have created one weight of Continuous, displayed below, which will be available for download soon. I will be continuing to develop Continuous into multiple weights in the future, along with other new type projects."
        title2="Typography"
        line1="Type"
        line1B="Type Design"
        line2="Client"
        line2B="Self-initiated"
        line3="Date"
        line3B="2020"
      />
      <FullImage
        image={"/images/type/TY_2020_Continuous/TY_Ct_title_wide.png"}
        alt="Continuous non-overlapping letters written with the typeface"
      />
      <TwoImages
        image1={"/images/type/TY_2020_Continuous/TY_Ct_letters.gif"}
        alt="Animated Continuous letters"
        image2={"/images/type/TY_2020_Continuous/TY_Ct_grid_y.png"}
      />
      <TwoImages
        image1={"/images/type/TY_2020_Continuous/TY_Ct_grid_perc.png"}
        alt="Letters with grid construction"
        image2={"/images/type/TY_2020_Continuous/TY_Ct_numbers.gif"}
      />
      <FullImage
        image={"/images/type/TY_2020_Continuous/TY_Ct_full.png"}
        alt="Whole alphabet"
      />
      <FullImage
        image={"/images/type/TY_2020_Continuous/TY_Ct_liga.png"}
        alt="Typeface ligatures"
      />
    </Layout>
  )
}

export default ContinuousLetters
