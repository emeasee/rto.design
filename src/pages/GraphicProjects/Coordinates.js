import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import FullImage from "../../components/sections/FullImage"
import ProjectIntro from "../../components/sections/ProjectIntro"
import TwoImages from "../../components/sections/TwoImages"

function Coordinates() {
  return (
    <Layout>
      <SEO title="Coordinates Exhibition" />
      <ProjectIntro
        title="Coordinates Exhibition"
        paragraph1="As part of the London Design Festival 2015, Ground Floor Space hosted an exhibition of A1 screenprints by London design studios and artists. Applied was asked to contribute and I was tasked with the map design. It was an interesting challenge in taking highly detailed data and simplifying it into just three coloured layers."
        paragraph2="I designed two posters and a limited number were screen printed with metallic ink and sold in support of the homeless charity Streets of London."
        authors="Design Direction: Tim Fendley. Design: Rossouw Oosthuizen, Ellie Baker, George Sidaoui."
        title2="Graphic Design"
        line1="Type"
        line1B="Map Design"
        line2="Client"
        line2B="Ground Floor Space"
        line3="Date"
        line3B="2015"
        line4="Role"
        line4B="Designer"
        line5="Mentions"
        line5B="Ground Floor Space"
        line6B="It's Nice That"
      />
      <FullImage
        image={"/images/graphic/GD_2015_Coordinates/GD_Co_frame_light.jpg"}
        alt="London villages map light version on a frame"
      />
      <TwoImages
        image1={"/images/graphic/GD_2015_Coordinates/GD_Co_detail_light.png"}
        alt="London villages map closer crop 1"
        image2={"/images/graphic/GD_2015_Coordinates/GD_Co_detail_dark.png"}
      />
      <FullImage
        image={"/images/graphic/GD_2015_Coordinates/GD_Co_frame_dark.jpg"}
        alt="London villages map dark version on a frame"
      />
      <FullImage
        image={"/images/graphic/GD_2015_Coordinates/GD_Co_options.gif"}
        alt="London villages map layered animation"
      />
      <FullImage
        image={"/images/graphic/GD_2015_Coordinates/GD_Co_photo1.jpg"}
        alt="Photo of the exhibition space"
      />
    </Layout>
  )
}

export default Coordinates
