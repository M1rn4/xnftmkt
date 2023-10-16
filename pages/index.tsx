import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import { Intro } from "../components/Landing/Intro";
import { Statics } from "../components/Landing/Statics";
import { Hero } from "../components/Landing/Hero";
import { Ask } from "../components/Landing/Ask";
/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <ChakraProvider>
      <Intro />
      <Statics/>
      <Hero/>
      <Ask/>
    </ChakraProvider>
  );
};

export default Home;
