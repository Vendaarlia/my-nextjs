import Image from "next/image";
import { Inter } from "next/font/google";

import  Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
   <Head>
    <title>VENDAARLIA</title>
    <meta name="description" content="vendaarlia portofolio" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <link rel="icon" href="favicon.ico" type="image/x-icon" />
  </Head>
   <div>
    <Hero />
    <About />
    <Skills />
    <Projects />
    <Contact />
   </div>
   </>
  );
}
