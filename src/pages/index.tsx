// import { Inter } from 'next/font/google'
import { Box,Button,Center,Flex,Img,Text,Image } from "@chakra-ui/react"
import Link from "next/link"
import { useEffect, useState } from "react"
import Header from "./components/header"
import ContentsList from "./contentsList"



export default function Home() {

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
      <Box w='100vw'>
        {/* <Flex h="60vh" bgColor={"skyblue"}>
          <Text as="h1" fontSize={"60px"}>GPT-BOYS</Text>
        </Flex> */}

        <Header />
        <Flex gap={'200px'} flexFlow={'column'}>
