import { Flex,Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import Header from './components/header'

const blogContents : NextPage = () => {
    return (
        <Flex>
            <Header />
            <Text as={"h2"}>鼻くそ</Text>
        </Flex>
    )
}

export default blogContents