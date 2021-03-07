import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import FullImage from "../../components/sections/FullImage"
import ProjectIntro from "../../components/sections/ProjectIntro"
import Caption from "../../components/sections/Caption"
import TwoImages from "../../components/sections/TwoImages"

function GoogleWayfinding() {
  return (
    <Layout>
      <SEO title="Google Wayfinding Playbook" />
      <ProjectIntro
        title="Google Wayfinding Playbook"
        paragraph1="For the majority of my final year at Applied I was involved in a wayfinding project for Google. I was involved in UX/UI design of a web based playbook to explain the wayfinding guidelines for Google offices and campus’ around the world. I developed an illustration style for the site which was used as the main tool to visualise our wayfinding strategy."
        paragraph2="Additionally I was involved in icon design for signage and mapping. These icons took stylistic influence from Google Sans, the typeface used in the project, and material design, Google’s design platform."
        authors="Design Direction: Tim Fendley, Design: James Dunford, Rossouw Oosthuizen, Sunghoon Kim, Planning: Richard Simon, Asa Berggren."
        title2="Graphic Design"
        line1="Type"
        line1B="Information Design"
        line2="Studio"
        line2B="Applied Wayfinding"
        line3="Client"
        line3B="Google"
        line4="Date"
        line4B="2018"
        line5="Role"
        line5B="Designer / Illustrator"
        line6="Mentions"
        line6B="designwanted.com"
      />
      <Caption caption="Wayfinding Playbook" />
      <TwoImages
        image1={"/images/graphic/GD_2018_Google/GD_Go_homepage.png"}
        alt="Google Playbook various illustrations assets"
        image2={"/images/graphic/GD_2018_Google/GD_Go_closeups.gif"}
        alt="Google Playbook various illustrations of people"
      />
      <FullImage
        image={"/images/graphic/GD_2018_Google/GD_Go_campus.png"}
        alt="Google campus view 1"
      />
      <TwoImages
        image1={"/images/graphic/GD_2018_Google/GD_Go_interior.png"}
        alt="Google campus room inside view"
        image2={"/images/graphic/GD_2018_Google/GD_Go_building.png"}
      />
      <FullImage
        image={"/images/graphic/GD_2018_Google/GD_Go_planning.png"}
        alt="Google campus buildings overview"
      />
      <FullImage
        image={"/images/graphic/GD_2018_Google/GD_Go_web 1.jpg"}
        alt="Google Playbook website homepage"
      />
      <FullImage
        image={"/images/graphic/GD_2018_Google/GD_Go_web 2.jpg"}
        alt="Google Playbook website landmarks page"
      />
      <Caption caption="Icon Design" />
      <TwoImages
        image1={"/images/graphic/GD_2018_Google/GD_Go_icons_mockup.png"}
        alt="Photo of signage at Google campus"
        image2={"/images/graphic/GD_2018_Google/GD_Go_icons.gif"}
      />
      <FullImage
        image={"/images/graphic/GD_2018_Google/GD_Go_icons_all.png"}
        alt="Google Playbook icon family overview"
      />
    </Layout>
  )
}

export default GoogleWayfinding
