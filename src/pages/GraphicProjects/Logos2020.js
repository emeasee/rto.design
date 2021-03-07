import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ProjectIntro from "../../components/sections/ProjectIntro"
import TwoImages from "../../components/sections/TwoImages"

function Logos2020() {
  return (
    <Layout>
      <SEO title="Logo Projects 2020" />
      <ProjectIntro
        title="Logo Projects 2020"
        paragraph1="2020 was pretty chaotic at times, but in between the chaos I managed to work on a few fun logo design and branding projects. I'm currently working on the web designs for Golden Goose Media and Gigfunding also has a separate page discussing the project in more detail."
        title2="Graphic Design"
        line1="Type"
        line1B="Logo Design"
        line2="Client"
        line2B="Various"
        line3="Date"
        line3B="2020"
      />
      <TwoImages
        image1={"/images/graphic/GD_2020_Logo projects/GD_Lo_2020_1.png"}
        alt="Golden Goose Media logo"
        image2={"/images/graphic/GD_2020_Logo projects/GD_Lo_2020_2.png"}
      />
      <TwoImages
        image1={"/images/graphic/GD_2020_Logo projects/GD_Lo_2020_3.png"}
        alt="Michelle Maden logo outlined"
        image2={"/images/graphic/GD_2020_Logo projects/GD_Lo_2020_4.png"}
      />
      <TwoImages
        image1={"/images/graphic/GD_2020_Logo projects/GD_Lo_2020_5.png"}
        alt="Michelle Maden logo with single wave"
        image2={"/images/graphic/GD_2020_Logo projects/GD_Lo_2020_6.png"}
      />
      <TwoImages
        image1={"/images/graphic/GD_2020_Logo projects/GD_Lo_2020_7.png"}
        alt="Gigfunding logo final version"
        image2={"/images/graphic/GD_2020_Logo projects/GD_Lo_2020_8.png"}
      />
      <TwoImages
        image1={"/images/graphic/GD_2020_Logo projects/GD_Lo_2020_9.png"}
        alt="Gigfunding logo version 3"
        image2={"/images/graphic/GD_2020_Logo projects/GD_Lo_2020_10.png"}
      />
    </Layout>
  )
}

export default Logos2020
