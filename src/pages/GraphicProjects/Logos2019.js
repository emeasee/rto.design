import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ProjectIntro from "../../components/sections/ProjectIntro"
import TwoImages from "../../components/sections/TwoImages"

function Logos2019() {
  return (
    <Layout>
      <SEO title="Logo Projects 2019" />
      <ProjectIntro
        title="Logo Projects 2019"
        paragraph1="Various logo designs and concepts from 2019.  I enjoy the process of producing and developing a wide range of stylistic directions, as you can see below where some logos display multiple versions. The client then gives feedback and we discuss the best way to move forward."
        title2="Graphic Design"
        line1="Type"
        line1B="Logo Design"
        line2="Client"
        line2B="Various"
        line3="Date"
        line3B="2019"
      />
      <TwoImages
        image1={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_1.png"}
        alt="Wild Tame logo fire version"
        image2={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_2.png"}
      />
      <TwoImages
        image1={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_3.png"}
        alt="Wild Tame logo stamp version"
        image2={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_4.png"}
      />
      <TwoImages
        image1={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_5.png"}
        alt="Toot logo teeth version"
        image2={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_6.png"}
      />
      <TwoImages
        image1={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_7.png"}
        alt="Sound logo single wave version"
        image2={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_8.png"}
      />
      <TwoImages
        image1={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_9.png"}
        alt="Sound logo inverted version"
        image2={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_10.png"}
      />
      <TwoImages
        image1={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_11.png"}
        alt="B&B Caribbean Dream Tours logo"
        image2={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_12.png"}
      />
      <TwoImages
        image1={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_13.png"}
        alt="T&L monogram logo with circle of flowers"
        image2={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_14.png"}
      />
      <TwoImages
        image1={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_15.png"}
        alt="T&L monogram logo with simple frame"
        image2={"/images/graphic/GD_2019_Logo projects/GD_Lo_2019_16.png"}
      />
    </Layout>
  )
}

export default Logos2019
