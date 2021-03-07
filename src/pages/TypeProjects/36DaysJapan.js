import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ProjectIntro from "../../components/sections/ProjectIntro"
import FullImage from "../../components/sections/FullImage"
import TwoImages from "../../components/sections/TwoImages"

function Japan() {
  return (
    <Layout>
      <SEO title="36 Days of Type: Japan" />
      <ProjectIntro
        title="36 Days of Type: Japan"
        paragraph1="I was living in Japan for a year and during this time I participated in 36 days of type. It was a lot of work but also a lot of fun coming up with ideas for each of the letters."
        paragraph2="Each letter was created in one day based on the theme of Japan. After the project was completed I put together a poster with all the letter illustrations. Check out my instagram for more details on what each of the illustrations represent."
        title2="Typography"
        line1="Type"
        line1B="Lettering"
        line2="Client"
        line2B="Self-initiated"
        line3="Date"
        line3B="2019"
      />
      <TwoImages
        image1={"/images/type/TY_2019_Japan A-Z/TY_Az_poster.jpg"}
        alt="Japan A-Z poster mockup"
        image2={"/images/type/TY_2019_Japan A-Z/TY_Az_poster_z.jpg"}
      />
      <TwoImages
        image1={"/images/type/TY_2019_Japan A-Z/TY_Az_A.png"}
        alt="A for Anime"
        image2={"/images/type/TY_2019_Japan A-Z/TY_Az_B.jpg"}
      />
      <TwoImages
        image1={"/images/type/TY_2019_Japan A-Z/TY_Az_C.png"}
        alt="C for Cherry Blossom"
        image2={"/images/type/TY_2019_Japan A-Z/TY_Az_D.png"}
      />
      <TwoImages
        image1={"/images/type/TY_2019_Japan A-Z/TY_Az_E.png"}
        alt="E for Emperor"
        image2={"/images/type/TY_2019_Japan A-Z/TY_Az_F.png"}
      />
      <FullImage
        image={"/images/type/TY_2019_Japan A-Z/TY_Az_G.png"}
        alt="G for Gueisha"
      />
      <TwoImages
        image1={"/images/type/TY_2019_Japan A-Z/TY_Az_H.png"}
        alt="H for Hokkaido"
        image2={"/images/type/TY_2019_Japan A-Z/TY_Az_I.png"}
      />
      <TwoImages
        image1={"/images/type/TY_2019_Japan A-Z/TY_Az_J.png"}
        alt="J for Judo"
        image2={"/images/type/TY_2019_Japan A-Z/TY_Az_K.png"}
      />
      <FullImage
        image={"/images/type/TY_2019_Japan A-Z/TY_Az_L.png"}
        alt="L for Lake Biwa"
      />
      <TwoImages
        image1={"/images/type/TY_2019_Japan A-Z/TY_Az_M.png"}
        alt="M for Momiji"
        image2={"/images/type/TY_2019_Japan A-Z/TY_Az_N.jpg"}
      />
      <TwoImages
        image1={"/images/type/TY_2019_Japan A-Z/TY_Az_O.png"}
        alt="O for Onsen"
        image2={"/images/type/TY_2019_Japan A-Z/TY_Az_P.png"}
      />
      <TwoImages
        image1={"/images/type/TY_2019_Japan A-Z/TY_Az_Q.png"}
        alt="Q for Queue"
        image2={"/images/type/TY_2019_Japan A-Z/TY_Az_R.png"}
      />
      <FullImage
        image={"/images/type/TY_2019_Japan A-Z/TY_Az_S.png"}
        alt="S for Samurai"
      />
      <TwoImages
        image1={"/images/type/TY_2019_Japan A-Z/TY_Az_T.png"}
        alt="T for Tori Gate"
        image2={"/images/type/TY_2019_Japan A-Z/TY_Az_U.png"}
      />
      <TwoImages
        image1={"/images/type/TY_2019_Japan A-Z/TY_Az_V.jpg"}
        alt="V for Vending Machine"
        image2={"/images/type/TY_2019_Japan A-Z/TY_Az_W.png"}
      />
      <TwoImages
        image1={"/images/type/TY_2019_Japan A-Z/TY_Az_X.png"}
        alt="X for XL Sumo"
        image2={"/images/type/TY_2019_Japan A-Z/TY_Az_Y.jpg"}
      />
      <FullImage
        image={"/images/type/TY_2019_Japan A-Z/TY_Az_Z.png"}
        alt="Z for Zen Garden"
      />
    </Layout>
  )
}

export default Japan
