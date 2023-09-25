import React from 'react'
import { animate, motion ,isValidMotionProp } from 'framer-motion'
import { Center, Flex, Box,border,Text,chakra,shouldForwardProp, background } from '@chakra-ui/react'

const AnimationBox = chakra(motion.div, {
    shouldForwardProp:(prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const framerTest = () => {

    return (
        <Center w={"100vw"} h={"100vh"}>
            {/* <Flex
                as={motion.div}
                w={"100px"}
                h={"100px"}
                bgColor={"skyblue"}
                // initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                transition={"0.1s ease"}
                whileHover={{
                    scale: 1.1,
                }}
                >
            </Flex> */}

            <AnimationBox
                border="1px solid#000"
                w="100px"
                h="100px"
                borderRadius={"100px"}

                animate={{
                    scale:[0,2,0,2,3,0],
                    rotate:[0,0,0,180,0,0],
                    borderRadius:["0%","0%","50%","50%","0%","0%"],
                    backgroundColor:["#fff","#fff","#000","#000","#000","#000"]
                }}
                transition={{
                    duration: "6",
                    // ease:"",
                    times:"[0,0.2,0.5,0.8,0]",
                    repeat: "Infinity",
                    repeatDelay: "0",
                }}
                // transition={"infinty"}animation={"infinite"}
                >

            </AnimationBox>
        </Center>
    )
}

export default framerTest