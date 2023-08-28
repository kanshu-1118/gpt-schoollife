import React from 'react'
import { Flex,Center, Image, Text, useStatStyles, styled } from '@chakra-ui/react'
import Link from 'next/link'
import { color } from '@/utils/colorTheme'

const footer = () => {
    return (
        <Flex w={"100vw"} p={"45px 200px 0"} borderTop={`8px solid ${color.main}`} marginTop={"270px"}>
            <Text fontSize={"42px"} color={color.main} fontWeight={"bold"}>GPTボーイズ</Text>
            <Flex>
                
            </Flex>
        </Flex>
    )
}

export default footer