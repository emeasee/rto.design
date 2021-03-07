import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ProjectIntro from "../../components/sections/ProjectIntro"
import FullImage from "../../components/sections/FullImage"
import TwoImages from "../../components/sections/TwoImages"

function AppliedCard() {
  return (
    <Layout>
      <SEO title="Applied Wayfinding Card" />
      <ProjectIntro
        title="Applied Wayfinding Card"
        paragraph1="In preparation for the studio moving I was tasked with designing a notice card to be sent to our clients. It was a fun little project experimenting with isometric illustration and lettering."
        title2="Typography"
        line1="Type"
        line1B="Lettering / Editorial"
        line2="Studio"
        line2B="Applied Wayfinding"
        line3="Date"
        line3B="2017"
      />
      <TwoImages
        image1={"/images/type/TY_2017_Applied/TY_Ap_O.png"}
        alt="Applied Wayfinding building illustrations close up"
        image2={"/images/type/TY_2017_Applied/TY_Ap_V.png"}
      />
      <FullImage
        image={"/images/type/TY_2017_Applied/TY_Ap_full.png"}
        alt="Applied Wayfinding card with illustrated message"
      />
      <FullImage
        image={"/images/type/TY_2017_Applied/TY_Ap_layers.gif"}
        alt="Applied Wayfinding card with illustrated message animation"
      />
      <FullImage
        image={"/images/type/TY_2017_Applied/TY_Ap_cards.jpg"}
        alt="Image of the final printed cards"
      />
    </Layout>
  )
}

export default AppliedCard
