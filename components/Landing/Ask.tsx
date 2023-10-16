'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
  Heading
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export  function Ask() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
		
      <Container>
	  <Heading as="h2" size="xl" mt={6} mb={2}>
        Preguntas frecuentes
      </Heading >
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">a.  ¿Qué es XMART?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
              XMART es una innovadora empresa inmobiliaria que se especializa en proyectos de bienestar real estate. Nuestra misión es crear espacios de vida funcionales e inteligentes que mejoren la salud y el bienestar de nuestros propietarios. Somos pioneros en el concepto de WELNESS REAL STATE en Latinoamérica, ofreciendo propiedades que van más allá de lo tradicional y se centran en tu calidad de vida.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">b. ¿Cómo funciona la tokenización?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
			  La tokenización es un proceso en el cual un activo físico, como una propiedad inmobiliaria, se divide en tokens digitales que representan la propiedad. En XMART, utilizamos la tecnología blockchain para tokenizar inmuebles. Los inversores pueden comprar estos tokens, lo que les da una participación en la propiedad. La tokenización permite a pequeños inversores acceder al mercado inmobiliario y recibir ingresos por alquileres y ventas.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">c. ¿Cómo es el proceso para invertir?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
			  El proceso para invertir en XMART es simple y transparente. Primero, selecciona el proyecto en el que deseas invertir. Luego, compra tokens que representen una parte de esa propiedad. Esto se puede hacer a través de nuestra plataforma en línea. Una vez que eres un inversor, puedes seguir de cerca el rendimiento de tu inversión y recibir ingresos de alquileres o ventas.
              </Text>
            </AccordionPanel>			
          </AccordionItem>
		  <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">d.  ¿Cómo puedo obtener ingresos?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
			  Puedes obtener ingresos de dos formas al invertir en XMART. En primer lugar, recibirás regalías proporcionales a tu participación en la propiedad por los ingresos generados por alquileres y ventas. En segundo lugar, si adquieres tokens, tienes la opción de utilizar la propiedad por días como un sistema de tiempo compartido, lo que también puede generar ingresos.
              </Text>
            </AccordionPanel>			
          </AccordionItem>
		  <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">e. ¿Qué me entregan al invertir?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
			  Al invertir en XMART, obtendrás una participación en el proyecto inmobiliario que seleccionaste. Esta participación se representa en forma de tokens digitales que son tuyos. Además de la inversión, también tendrás acceso a servicios exclusivos, como el uso compartido de la propiedad y la telemedicina en nuestras casas inteligentes.
              </Text>
            </AccordionPanel>			
          </AccordionItem>
		  <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="md">f.  ¿Puedo vender mi token o NFT?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text color="gray.600">
			  Sí, puedes vender tus tokens o NFT en mercados secundarios. La tokenización te proporciona la flexibilidad de comprar y vender tus participaciones en el mercado libre según tus necesidades. Esto te permite liquidar tu inversión o diversificar tu cartera cuando lo desees. Ten en cuenta que los detalles específicos pueden variar según la legislación local y las regulaciones.
              </Text>
            </AccordionPanel>			
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}