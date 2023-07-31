import React from 'react'
import { motion } from 'framer-motion'
import { Center, Flex } from '@chakra-ui/react'

const framerTest = () => {
    return (
        <Center w={"100vw"} h={"100vh"}>
            <Flex
                as={motion.div}
                w={"100px"}
                h={"100px"}
                bgColor={"skyblue"}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 30 }}
                // transition={"2s ease"}
                >
                
            </Flex>
        </Center>
    )
}

export default framerTest