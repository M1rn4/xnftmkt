'use client'

import { Stack, Flex, Button, Text, VStack, useBreakpointValue } from '@chakra-ui/react'
import { url } from 'inspector';
import Link from "next/link";

export function Intro() {
  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1697560644649-cdec8c2fcecf?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1932)'
      }
      // backgroundImage={`url(${'./img1.jpg'})`} //

      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'center'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Descubre la Tokenización de Inmuebles en el Mundo del Wellness Real Estate con XmartLiving.
          </Text>
          <Stack direction={'row'} >
            <Button
              p={10}
              bg={'black'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'black' }}>
              <Link href="/buy">
                    COMPRA TU PRIMER NFT
              </Link>
            </Button>
{/* 
            <Button
              p={10}
              bg={'black'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'black' }}>
              <Link href="/sell">
                    Vende tu nft
              </Link>
            </Button> */}
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
