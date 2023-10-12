'use client'
import { ConnectWallet, useAddress, metamaskWallet, magicLink, ThirdwebProvider} from "@thirdweb-dev/react";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

interface Props {
  children: React.ReactNode
}

const Links = ['PROPIEDADES', 'JOIN DISCORD', 'HELP']

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}


/**
 * Navigation bar that shows up on all pages.
 * Rendered in _app.tsx file above the page content.
 */
export function Navbar() {
  const address = useAddress();

  return (

    <div className={styles.navContainer}>

      <nav className={styles.nav}>

      <div className={styles.navRight}>

  
          <div className={styles.navConnect}>
            <ConnectWallet theme="dark" btnTitle="Connect Wallet" />

          </div>
          {address && (
            <Link className={styles.link} href={`/profile/${address}`}>
              <Image
                className={styles.profileImage}
                src="/user-icon.png"
                width={42}
                height={42}
                alt="Profile"
              />
            </Link>
          )}
          <div className={styles.navMiddle}>
            <Link href="/buy" className={styles.link}>
              PROPIEDADES
            </Link>
            <Link href="/#" className={styles.link}>
              JOIN DISCORD
            </Link>
            <Link href="/help" className={styles.link}>
              HELP
            </Link>
          </div>
        </div>

        <div className={styles.navLeft}>
   
           <Link href="/" className={`${styles.homeLink} ${styles.navLeft}`}>
            <Image
              src="./../logo.png"
              width={70}
              height={70}
              alt="Logo"
            />
          </Link>
        </div>

        
      </nav>
      
    </div>

  );
}
