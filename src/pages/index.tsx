import { Box, Center, Flex, Text } from "@chakra-ui/react";
// import { useState } from "react";
import { Duplex } from "stream"
import { useState, useEffect } from 'react';


export default function Home() {
  const [text,setText] = useState("")
  const [hello,sethello] = useState([]);
  const [keyword,setKeyword] = useState("守口")

  useEffect(() => {
    const params ={
      keyword : keyword
    }
    const query = new URLSearchParams(params)
    const fetchhello = async () => {
      const response = await fetch(`/api/hello`);
      const data = await response.json();
      sethello(data);
      console.log(data);
    };
    fetchhello();
  }, [keyword])

  const clickevent = () => {
    setKeyword(text)
 }
  console.log(hello);

  // return (
  //   <>
  //   {hello.map((e:any,i:any) =>{
  //     return(
  //     <Box>
  //       <Text>店番{e.id}</Text>
  //     </Box>
  //     )
  //   })}
  //   </>
  // )
}