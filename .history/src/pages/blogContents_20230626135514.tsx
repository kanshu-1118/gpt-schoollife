import { Flex,Text,Box,Image } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useState } from "react"
import React from 'react'
import Header from './components/header'
import Home from '.'

const blogContents : NextPage = (props) => {

    console.log(props);
    
    return (
        <>
            <Flex>
                <Header />
            </Flex>

            {/* 記事タイトル */}
            <Text></Text>

            {/* 日時 */}
            <Text></Text>

            {/* アイキャッチ画像 */}
            <Image></Image>

        </>
    )
}

export default blogContents