import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ProjectIntro from "../../components/sections/ProjectIntro"
import FullImage from "../../components/sections/FullImage"
import TwoImages from "../../components/sections/TwoImages"

function Ajoto() {
  return (
    <Layout>
      <SEO title="AJOTO" />
      <ProjectIntro
        title="AJOTO"
        paragraph1="I was asked by AJOTO to create postcards that they could use at events and exhibitions such as Design Junction during the London Design Festival 2015 where they exhibited."
        paragraph2="AJOTO primarily designs and produces high-end pens and men’s accessories. I created four postcards in different styles, the idea being that visitors can pick up a card, try the pen on the back and take the card with them to remember the brand and product."
        title2="Typography"
        line1="Type"
        line1B="Lettering / Editorial"
        line2="Client"
        line2B="AJOTO"
        line3="Date"
        line3B="2013"
      />
      <FullImage
        image={"/images/type/TY_2013_AJOTO/TY_Aj_full.jpg"}
        alt="AJOTO all four cards design overview"
      />
      <FullImage
        image={"/images/type/TY_2013_AJOTO/TY_Aj_all.gif"}
        alt="AJOTO all four cards design overview"
      />
      <FullImage
        image={"/images/type/TY_2013_AJOTO/TY_Aj_photo1.jpg"}
        alt="Photo of people writting with AJOTO pens on the cards at an event"
      />
      <FullImage
        image={"/images/type/TY_2013_AJOTO/TY_Aj_photo2.jpg"}
        alt="Photo of the cards on a wall with messages handwritten by customers"
      />
    </Layout>
  )
}

export default Ajoto
