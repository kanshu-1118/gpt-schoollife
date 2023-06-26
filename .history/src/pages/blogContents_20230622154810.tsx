import { Flex,Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect, useState } from "react"
import React from 'react'
import Header from './components/header'

const blogContents : NextPage = () => {

    const [geo,setGeo] = useState([])
    const [contentsID,setContentsID] = useState()
    
    useEffect(() => {
    const fecthello = async () => {
        const responce = await fetch(`./api/hello`)
        const data = await responce.json()
        setGeo(data.geo.contents)
    }
    fecthello()
    },[])


    return (
        <Flex>
            <Header />
        </Flex>
    )
}

export default blogContents