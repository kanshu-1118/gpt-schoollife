import React from 'react'
import { Flex,Center, Image, Text, useStatStyles, styled } from '@chakra-ui/react'
import Link from 'next/link'
import { color } from '@/utils/colorTheme'
import TagTemp from './tagTemp'

const footer = () => {
    return (
        <Flex w={"100vw"} p={"45px 200px 120px"} flexDir={"column"} gap={"44px"} borderTop={`8px solid ${color.main}`} marginTop={"270px"}>
            <Text fontSize={"42px"} color={color.main} fontWeight={"bold"}>GPTボーイズ</Text>
            <Flex as={"ul"} fontSize={"18px"} gap={"88px"}>
                <Flex as={"li"} flexDir={"column"} fontWeight={"bold"} gap={"14px"}>概要
                    <Flex as={"ul"} flexDir={"column"} fontSize={"14px"} gap={"8px"} fontWeight={"medium"}>
                        <Flex as={"li"} >GPTボーイズとは</Flex>
                        <Flex as={"li"} >メンバー紹介</Flex>
                        <Flex as={"li"} >Chat-GPTについて</Flex>
                    </Flex>
                </Flex>
                <Flex as={"li"} flexDir={"column"} fontWeight={"bold"} gap={"14px"}>カテゴリ
                    <Flex as={"ul"} flexDir={"column"} fontSize={"14px"} gap={"8px"} fontWeight={"medium"}>
                        <Flex as={"li"} >GPTでやってみた</Flex>
                        <Flex as={"li"} >CHAT-GPTの記録</Flex>
                    </Flex>
                </Flex>
                <Flex as={"li"} flexDir={"column"} fontWeight={"bold"} gap={"14px"}>タグ
                    <Flex as={"ul"} fontSize={"14px"} flexWrap={"wrap"} gap={"14px"} fontWeight={"medium"}>
                        <TagTemp name='大阪' color={color.main} link='#' />
                        <TagTemp name='大阪' color={color.main} link='#' />
                        <TagTemp name='大阪' color={color.main} link='#' />
                        <TagTemp name='大阪' color={color.main} link='#' />
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default footer