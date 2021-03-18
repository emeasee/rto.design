import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import FullImage from "../../components/sections/FullImage"
import ProjectIntro from "../../components/sections/ProjectIntro"
import TwoImages from "../../components/sections/TwoImages"

function GigfundingPlatform() {
  return (
    <Layout>
      <SEO title="Gigfunding Platform" />
      <ProjectIntro
        title="Gigfunding Platform"
        paragraph1="Gigfunding is a fundraising platform that aims to change the way in which people give to charity while at the same time building stronger communities. When using the platform you can volunteer a skill or look to hire a skill, for example cutting hair. The two people meet up and the money usually used to pay for the job is split between two charities that the individuals choose. In this way, useful jobs are completed, money is raised for charity and people meet others in their community."
        paragraph2="I was brought in to help redesign the logo and to develop a brand system and guidelines that can be applied across multiple touchpoints from print to web and social media. I developed the design concept around the two sides of the brand: volunteers and hirers; people and causes; giving and receiving."
        paragraph3="The chosen logo and the later design pieces are built on this two sided concept: two colours; two typefaces; and two sides of each poster."
        title2="Graphic Design"
        line1="Type"
        line1B="Branding"
        line2="Studio"
        line2B="Freelance"
        line3="Client"
        line3B="<a href='http://www.google.com'>Gigfunding</a>"
        line4="Date"
        line4B="2020"
      />
      <FullImage
        image={"/images/graphic/GD_2020_Gigfunding/GD_Gf_logos.jpg"}
        alt="Gigfunding various logo experiments"
      />
      <FullImage
        image={"/images/graphic/GD_2020_Gigfunding/GD_Gf_guidelines2.jpg"}
        alt="Gigfunding logo specifications"
      />
      <FullImage
        image={"/images/graphic/GD_2020_Gigfunding/GD_Gf_colours.gif"}
        alt=" Gigfunding colour palette"
      />
      <FullImage
        image={"/images/graphic/GD_2020_Gigfunding/GD_Gf_type.jpg"}
        alt="Gigfunding fonts overview"
      />
      <FullImage
        image={"/images/graphic/GD_2020_Gigfunding/GD_Gf_post.gif"}
        alt="Gigfunding posters"
      />
      <FullImage
        image={"/images/graphic/GD_2020_Gigfunding/GD_Gf_photo1.jpg"}
        alt="Gigfunding posters lined on a street wall"
      />
      <TwoImages
        image1={"/images/graphic/GD_2020_Gigfunding/GD_Gf_photo2.jpg"}
        alt="Gigfunding poster on the wall in a London street"
        image2={"/images/graphic/GD_2020_Gigfunding/GD_Gf_photo3.jpg"}
      />
    </Layout>
  )
}

export default GigfundingPlatform
