import { Flex,Text } from '@chakra-ui/react'
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
        </>
    )
}

export default blogContents