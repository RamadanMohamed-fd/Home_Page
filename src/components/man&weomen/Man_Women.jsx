import React from 'react'
import WM_Section from "./MW_Section"
const Man_Women = () => {
  const arts="/threeImage/1.Arts.jpg";
  const handicrafts="/threeImage/2.Handicrafts.jpg";
  const handlooms="/threeImage/3.Handlooms.jpg";
  return (
    <section className=" flex justify-center items-center gap-3   max-lg:p-2 max-lg:flex-wrap p-10 pt-0 bg-white">
      <WM_Section src_image={arts} alt={"Man_Image"} title="Mesmeric Arts Collection" off="Brushstrokes of a Rich Culture"/>
      <WM_Section src_image={handicrafts} alt={"Man_Image"} title="Exquisite Handicrafts Collection" off="Crafted with Love, Shaped by Tradition"/>
      <WM_Section src_image={handlooms} alt={"Man_Image"} title="Intricate Handlooms Collection" off="India’s Heritage Thread by Thread
"/>
  


     
    </section>
  )
}

export default Man_Women