import { Text } from '@chakra-ui/react'
import { NextComponentType } from 'next'
import { useEffect, useState } from "react"

import React from 'react'
import Header from './components/header'

interface propsType {
    text:string
}

const contentsList : any = (props : propsType) => {
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
    
    console.log(geo);

    return (
        <>
            <Header />
            <Text>{props.text}</Text>
            <Text as={"h2"}>鼻くそ</Text>
        </>
    )
}

export default contentsList