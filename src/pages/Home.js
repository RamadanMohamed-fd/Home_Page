import Head from "next/head"
import { useState,useEffect } from "react"
import { MdKeyboardDoubleArrowUp } from "react-icons/md"
import Navbar from "@/components/Navbar/Navbar"
import FirstHead from "@/components/Navbar/temp/FirstHead"
import Hero from "@/components/Banner/Hero"
import Man_Women from "@/components/man&weomen/Man_Women"
import Footer_s from "@/components/Footer_s"
import CartProvider from "@/store/CartProvider"
import News from "@/components/news/News"
import Service from "@/components/Service/Service"
import dynamic from 'next/dynamic'
const DynamicTop = dynamic(() => import("@/components/top_collection/TopCollection"), {
  ssr:false,
  loading: () => <p>Loading...</p>,
});
const DynamicArts = dynamic(() => import("@/components/Mesmeric Arts/MesmericArts"), {
  ssr:false,
  loading: () => <p>Loading...</p>,
});
const DynamicHandicrafts = dynamic(() => import("@/components/Exquisite Handicrafts/ExquisiteHandicrafts"), {
  ssr:false,
  loading: () => <p>Loading...</p>,
});
const DynamicHandlooms = dynamic(() => import("@/components/Intricate Handlooms/IntricateHandlooms"), {
  ssr:false,
  loading: () => <p>Loading...</p>,
});
const DynamicSpecialProduc = dynamic(() => import("@/components/SpecialProduc/SpecialProduc"), {
  ssr:false,
  loading: () => <p>Loading...</p>,
});
const DynamicInstagram = dynamic(() => import("@/components/Instagram/Instagram"), {
  ssr:false,
  loading: () => <p>Loading...</p>,
});
const DynamicIcons = dynamic(() => import("@/components/Icons"), {
  ssr:false,
  loading: () => <p>Loading...</p>,
});
const Home = () => {
   
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  // Top Collection Data
  return (
   <CartProvider>
     <div >
      <Head
        title="Home"
        description="Shop all available models only at the ACME. Worldwide Shipping. Secure Payment."
      />
     {/* First Header */}
     <FirstHead/>
      <div>
      <Navbar />
      </div>
      {/* Hero Slider */}
        <Hero/>
      {/* man&women */}
      <Man_Women/>

      {/* Top Collection */}
        <DynamicTop/>
      {/* MesmericArts */}
      <DynamicArts/>
      {/* Exquisite Handicrafts */}
        <DynamicHandicrafts/>
        <DynamicHandlooms/>
      {/* services */}
        <Service/>
        <DynamicSpecialProduc/>
        <DynamicInstagram/>
        <DynamicIcons/>
      <News/>
      <Footer_s/>
      {offset >=800&& <a href="#" className=" bg-[var(--color-default)] opacity-80 fixed bottom-10 right-4 text-2xl text-slate-50 animate-bounce flex justify-center items-center z-[1000] w-12 h-12 rounded-full"><MdKeyboardDoubleArrowUp/></a>
}
    </div>
   </CartProvider>
  )
}

Home.getLayout = (page) => {
 
  return { page }
}

export default Home
