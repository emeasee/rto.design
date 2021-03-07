import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import FullImage from "../../components/sections/FullImage"
import ProjectIntro from "../../components/sections/ProjectIntro"
import TwoImages from "../../components/sections/TwoImages"

function LondonCycle() {
  return (
    <Layout>
      <SEO title="London Cycle Wayfinding" />
      <ProjectIntro
        title="London Cycle Wayfinding"
        paragraph1="As part of Transport for London’s Mini-Holland projects, Applied was approached to work with two London boroughs, Waltham Forest and Enfield. The aim was to build a cycle network and wayfinding system to create a more positive experience for cyclists and pedestrians in London’s outer boroughs. This project would serve as a pilot for further rollout in the city."
        paragraph2="We tried to think about the cycling experience throughout London and what interventions can be introduced to support more enjoyable, seamless journeys. I was involved from the start of both projects, doing on-the-bike research, interviews and presenting our findings. I created concept designs for signage and mapping and finally documented these in the Masterplan documents featuring maps, diagrams and illustrations to explain our findings."
        authors="Design Direction: Ben Acornley. Design: Rossouw Oosthuizen, George Sidaoui. Planning: Richard Simon."
        title2="Graphic Design"
        line1="Type"
        line1B="Wayfinding / Editorial"
        line2="Studio"
        line2B="Applied Wayfinding"
        line3="Client"
        line3B="Transport for London"
        line4="Date"
        line4B="2016"
        line5="Role"
        line5B="Designer"
      />
      <FullImage
        image={"/images/graphic/GD_2016_TFL_cycling/GD_Cy_book1.jpg"}
        alt="Cycle Wayfinding Masterplan book cover and pages"
      />
      <FullImage
        image={"/images/graphic/GD_2016_TFL_cycling/GD_Cy_photo1.jpg"}
        alt="Photo of Cycle Wayfinding signage on a cycle lane"
      />
      <TwoImages
        image1={"/images/graphic/GD_2016_TFL_cycling/GD_Cy_book_cover.jpg"}
        alt="Illustrated map of the cycle lane"
        image2={"/images/graphic/GD_2016_TFL_cycling/GD_Cy_book3.jpg"}
      />
      <FullImage
        image={"/images/graphic/GD_2016_TFL_cycling/GD_Cy_book2.jpg"}
        alt="Enfield Wayfinding Masterplan cover and pages"
      />
      <FullImage
        image={"/images/graphic/GD_2016_TFL_cycling/GD_Cy_signs.jpg"}
        alt="Cycle Wayfinding Masterplan all signage overview"
      />
      <FullImage
        image={"/images/graphic/GD_2016_TFL_cycling/GD_Cy_map.jpg"}
        alt="Cycle Wayfinding map close up"
      />
    </Layout>
  )
}

export default LondonCycle
