'use client'

import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactElement } from 'react'

import { TfiMapAlt } from 'react-icons/tfi'
import { FaMoneyBillTrendUp } from 'react-icons/fa6'

import { GiTreehouse, GiChaingun } from 'react-icons/gi'

import { RiBillLine } from 'react-icons/ri'

import { BsFillRocketTakeoffFill } from 'react-icons/bs'
interface CardProps {
  heading: string
  description: string
  icon: ReactElement
  href: string
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        {/* <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button> */}
      </Stack>
    </Box>
  )
}

export function Statics() {
  return (
    <Box p={20}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
          XmartLiving
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          La Revolución del Wellness Real Estate
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={
              'Pioneros en Proyectos Wellness Real Estate en Latinoamérica'
            }
            icon={
              <Icon
                as={BsFillRocketTakeoffFill}
                w={10}
                h={10}
                color={'black'}
              />
            }
            description={
              ': Lideramos el camino en la creación de espacios de vida que mejoran tu bienestar físico, mental y espiritual.'
            }
            href={'#'}
          />
          <Card
            heading={'Inversión Democrática'}
            icon={
              <Icon as={FaMoneyBillTrendUp} w={10} h={10} color={'black'} />
            }
            description={
              'Abre las puertas de la inversión inmobiliaria a todos, desde pequeños inversores hasta propietarios de casas completas.'
            }
            href={'#'}
          />
          <Card
            heading={'Casas Inteligentes para una Vida Saludable'}
            icon={<Icon as={GiTreehouse} w={10} h={10} color={'black'} />}
            description={
              'Nuestras propiedades están equipadas con tecnología de vanguardia para mejorar tu salud y calidad de vida.'
            }
            href={'#'}
          />
          <Card
            heading={'Tokenización'}
            icon={<Icon as={GiChaingun} w={10} h={10} color={'black'} />}
            description={
              'Tu Entrada al Mercado Inmobiliario": Conviértete en propietario de un porcentaje de proyectos inmobiliarios exclusivos.'
            }
            href={'#'}
          />
          <Card
            heading={'Gana Ingresos Pasivos'}
            icon={<Icon as={RiBillLine} w={10} h={10} color={'black'} />}
            description={
              'Obtén regalías de alquileres y ventas de propiedades tokenizadas.'
            }
            href={'#'}
          />
          <Card
            heading={'Ubicaciones Exclusivas'}
            icon={<Icon as={TfiMapAlt} w={10} h={10} color={'black'} />}
            description={
              'Descubre nuestras propiedades en lugares con climas perfectos y sol durante todo el año en América Latina.'
            }
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
  )
}
