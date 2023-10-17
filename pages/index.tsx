import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ChakraBaseProvider, ChakraProvider } from "@chakra-ui/react";
import { Intro } from "../components/Landing/Intro";
import { Statics } from "../components/Landing/Statics";
import { Hero2} from "../components/Landing/Hero2";
import { Ask } from "../components/Landing/Ask";
import { Top } from "@thirdweb-dev/chains";
/**
 * Landing page with a simple gradient background and a hero asset.
 * Free to customize as you see fit.
 */
const Home: NextPage = () => {
  return (
    <>
      <div style={{ padding: '80px 0px 0px 0px', width: '100%',  alignItems: 'center'}}>

        <Intro />
        <Statics/>
        <Hero2/>
        <Ask/>

      </div>

    </>
  );
};

export default Home;
