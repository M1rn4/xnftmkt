'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react'

export function Hero2() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={5} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}
            >
              XmartLiving,
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              invierte seguro!
            </Text>{' '}
          </Heading>
          <Text
            fontSize={{ base: 'md', lg: 'lg' }}
            color={'gray.500'}
            textAlign={'justify'}
          >
            Invertir en un inmueble tokenizado con XMART es más que una
            inversión, es una oportunidad para un futuro más saludable y
            próspero. Nuestra visión de Wellness Real Estate impulsa cada
            proyecto que emprendemos, y eso se traduce en casas inteligentes
            diseñadas para mejorar tu bienestar. Al unirte a XMART, te
            conviertes en parte de una comunidad de inversores que valoran la
            innovación y la inclusión financiera. Además, puedes disfrutar de
            ingresos pasivos mientras contribuyes al crecimiento de proyectos
            exclusivos en ubicaciones de ensueño en toda América Latina.
            Descubre por qué la tokenización de inmuebles con XMART es la
            elección inteligente para un futuro más saludable y próspero.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
            >
              Conoce más
            </Button>
            {/* <Button rounded={'full'}>How It Works</Button> */}
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          // alt={'Login Image'}
          // objectFit={'cover'}
          marginLeft={'-20%'}
          width={'95%'}
          backgroundImage={`url(${'./D2.jpg'})`}
          backgroundSize={'cover'}
          backgroundPosition={'center center'}
        />
      </Flex>
    </Stack>
  )
}
