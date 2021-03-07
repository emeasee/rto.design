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
      <SEO title="Lyrical Lettering" />
      <ProjectIntro
        title="Lyrical Lettering"
        paragraph1="An ongoing self-initiated project where I create lettering and typographic illustrations inspired by the songs, books and movies I love. This project is an opportunity to experiment with different lettering styles and techniques to improve my skills."
        title2="Typography"
        line1="Type"
        line1B="Lettering"
        line2="Client"
        line2B="Self-initiated"
        line3="Date"
        line3B="2019/20"
      />
      <Caption caption="Dune, Frank Herbert" />
      <FullImage
        image={"/images/type/TY_2019_Lyrical/TY_Ly_dune1.png"}
        alt="Same lyric sentence, with side angle"
      />
      <TwoImages
        image1={"/images/type/TY_2019_Lyrical/TY_Ly_dune2.png"}
        alt="He doesn't like it lookin like he looks back"
        image2={"/images/type/TY_2019_Lyrical/TY_Ly_dune3.png"}
      />
      <Caption caption="Elephant, Tame Impala" />
      <TwoImages
        image1={"/images/type/TY_2019_Lyrical/TY_Ly_lookin1.png"}
        alt="He doesn't like it lookin like he looks back"
        image2={"/images/type/TY_2019_Lyrical/TY_Ly_lookin2.png"}
      />
      <FullImage
        image={"/images/type/TY_2019_Lyrical/TY_Ly_lookin3.png"}
        alt="Same lyric sentence, with side angle"
      />
      <Caption caption="Mistaken for Strangers, The National" />
      <FullImage
        image={"/images/type/TY_2019_Lyrical/TY_Ly_adults1.png"}
        alt="Mistaken for Strangers sentence"
      />
      <FullImage
        image={"/images/type/TY_2019_Lyrical/TY_Ly_adults2.png"}
        alt="Mistaken for Strangers sentence 2"
      />
      <FullImage
        image={"/images/type/TY_2019_Lyrical/TY_Ly_adults3.png"}
        alt="Mistaken for Strangers sentence 3"
      />
      <FullImage
        image={"/images/type/TY_2019_Lyrical/TY_Ly_adults4.png"}
        alt="Mistaken for Strangers sentence 4"
      />
    </Layout>
  )
}

export default Lyrical
