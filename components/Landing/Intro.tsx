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
        'url(https://images.unsplash.com/photo-1695852450305-dca6e74f0916?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'
      }
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
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  )
}
