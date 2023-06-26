import { Flex,Text,Box,Img,Link } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useState } from "react"
import React from 'react'
import Header from './components/header'
import { useRouter } from 'next/router'

const blogContents : NextPage = () => {

    const router = useRouter()

    console.log(router.query.thumbnail);
    


    return (
        <>
            <Flex>
                <Header />
            </Flex>

            {/* 記事タイトル */}
            <Text w={"1000px"} h={"auto"} margin={"0 auto"}>{router.query.title}</Text>

            {/* 日時 */}
            <Text w={"1000px"} h={"auto"} margin={"0 auto"}>{router.query.time}</Text>

            {/* アイキャッチ画像 */}
            <Img w={"1000px"} h={"auto"} margin={"0 auto"} src={"router.query.thumbnail"} ></Img>

            {/* 参加メンバー */}
            <Box w={"1000px"} h={"auto"} margin={"0 auto"}>
                <Text>参加メンバー</Text>
                <Flex>
                    <Box>
                        <Img></Img>
                        <Text></Text>
                    </Box>
                    <Box>
                        <Img></Img>
                        <Text></Text>
                    </Box>
                    <Box>
                        <Img></Img>
                        <Text></Text>
                    </Box>
                </Flex>
            </Box>

            {/* リード文・導入部分 */}
            <Text w={"1000px"} h={"auto"} margin={"0 auto"}></Text>

            {/* 目次 */}
            <Text w={"1000px"} h={"auto"} margin={"0 auto"}></Text>

            {/* 記事本文(一旦保留) */}
            <Box w={"1000px"} h={"auto"} margin={"0 auto"}></Box>

            {/* 記事まとめ */}
            <Box w={"1000px"} h={"auto"} margin={"0 auto"}>
                <Text></Text>
                <Text></Text>
            </Box>

            {/* Movie&SNS */}
            <Box w={"1000px"} h={"auto"} margin={"0 auto"}>
                <Text></Text>
                <Text></Text>
                <Flex>
                    <Link></Link>
                    <Link></Link>
                    <Link></Link>
                </Flex>
            </Box>

            {/* 関連記事 */}
            <Box w={"1000px"} h={"auto"} margin={"0 auto"}>
            </Box>
        </>
    )
}

export default blogContents