import React from "react"
import Layout from "../../components/layout/layout"
import SEO from "../../components/layout/seo"
import ProjectIntro from "../../components/sections/ProjectIntro"
import Caption from "../../components/sections/Caption"
import FullImage from "../../components/sections/FullImage"

function RecruitReport() {
  return (
    <Layout>
      <SEO title="Recruit Annual Report" />
      <ProjectIntro
        title="Recruit Annual Report"
        paragraph1="I worked with Wild Tame to design the 2019 and 2020 annual report for Recruit Group. For the 2019 report we were collaborating with Japanese and English design studios. I created the English report, taking stylistic cues from the Japanese version while trying to create something unique and interesting."
        paragraph2="For 2020, due to the positive feedback from the previous year we were asked to design both the English and Japanese documents from start to finish. This gave us more design freedom and ability to control the quality across both documents. Due to the global health situation, the 2020 report was slightly different to the previous year, it was a more stripped back digital only version named InsideOut 2020. The design was based on the 2019 report, but adapted to suit the new format."
        title2="Graphic Design"
        line1="Type"
        line1B="Editorial"
        line2="Studio"
        line2B="Wild Tame"
        line3="Client"
        line3B="Recruit Holdings"
        line4="Date"
        line4B="2019/20"
        line5="Role"
        line5B="Lead Designer"
      />
      <Caption caption="2019 Annual Report" />
      <FullImage
        image={"/images/graphic/GD_2019_Recruit/GD_Rh_2019_book1.jpg"}
        alt="Recruit Annual Report 2019 cover and page layout"
      />
      <FullImage
        image={"/images/graphic/GD_2019_Recruit/GD_Rh_2019_book2.jpg"}
        alt="Recruit Annual Report 2019 infographics overview"
      />
      <FullImage
        image={"/images/graphic/GD_2019_Recruit/GD_Rh_2020_icons.jpg"}
        alt="Recruit Annual Report 2019 iconset overview"
      />
      <Caption caption="InsideOut 2020" />
      <FullImage
        image={"/images/graphic/GD_2019_Recruit/GD_Rh_2020_cover.jpg"}
        alt="Recruit InsideOut 2020 report cover"
      />
      <FullImage
        image={"/images/graphic/GD_2019_Recruit/GD_Rh_2020_multiple.jpg"}
        alt="Recruit InsideOut 2020 various pages overview"
      />
      <FullImage
        image={"/images/graphic/GD_2019_Recruit/GD_Rh_2020_ceo.jpg"}
        alt="Recruit InsideOut 2020 Message from CEO spread"
      />
      <FullImage
        image={"/images/graphic/GD_2019_Recruit/GD_Rh_2020_en-ja.jpg"}
        alt="Recruit InsideOut 2020 various spreads overview"
      />
      <FullImage
        image={"/images/graphic/GD_2019_Recruit/GD_Rh_2020_grids.jpg"}
        alt="Recruit InsideOut 2020 grid overview"
      />
    </Layout>
  )
}

export default RecruitReport
