import { Flex, Center,Text,Image } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import React from 'react'
import Header from './components/header'
import { color } from '@/utils/colorTheme'
import member from '@/lib/member'

const blogContents : NextPage = () => {
    const router = useRouter()
    const [geo,setGeo] = useState([])
    // const [routerID ,setRouterID] = useState<number | null>(1)
    

    useEffect(() => {
        // if(!router.isReady) return;
        const fecthello = async () => {
            const responce = await fetch(`./api/hello`)
            const data = await responce.json()
            setGeo(data.geo.contents)
        }
        fecthello()
    },[])
    // const queryId : any = geo
    // const queryArray : any = [queryId]
    // const queryId : any = geo[router.query.i as unknown as number]
    
    // console.log(router.query.i as unknown as number);
    // console.log(routerID);
    // console.log(geo[router.query.i as unknown as number]);
    // console.log(queryArray);
    
    // console.log(queryId);
    
    return (
        <Center bgColor={color.base} >
            <Header />
            {geo.map((e:any,i:number) => {
                console.log(e)
                console.log(member);
                
                {if (i == router.query.i as unknown as number) {
                    return (
                        <Center position={"relative"} bgColor={color.white} flexDir={"column"} w={"850px"} margin={"200px"}>
                            <Flex w={"100%"}>
                                <Center bgColor={color.main}  margin={"10px 20px"} p={"6px 16px"} borderRadius={"10px"}>
                                    <Text fontWeight={"12px"} color={color.white} >{e.selectAI[0]}</Text>
                                </Center>
                            </Flex>
                            <Center gap={"10px"} flexDir={"column"} marginBottom={"40px"}>
                                <Text fontSize={"18px"}>{ new Date(e.time).toLocaleDateString() }</Text>
                                <Text fontSize={"27px"} fontWeight={"bold"}>{e.title}</Text>
                            </Center>
                            <Image src={e.thumbnail.url} alt="" w={"100%"} h={"500px"} objectFit={"cover"}  />
                            <Center w="650px">
                                <Center w={"650px"} margin={"50px 0 30px"} flexDir={"column"} color={color.white}>
                                    <Flex w={"650px"} alignItems={"center"} bgColor={"#40659D"} padding={"15px 20px"} borderRadius={"10px 10px 0 0 "} gap={"15px"}>
                                        <Center bgImage={'./images/menber/kansyu.png'} bgColor={color.white} bgSize={"cover"} bgPosition={"center"} width={"45px"} height={"45px"} borderRadius={"100%"}></Center>
                                        <Text>{e.lead}</Text>
                                    </Flex>
                                    <Flex w={"650px"} alignItems={"center"} bgColor={"#5C7DAD"} padding={"15px 20px"} borderRadius={"0 0 10px 10px"} gap={"15px"}>
                                        <Center bgImage={'./images/menber/kansyu.png'} bgColor={color.white} bgSize={"cover"} bgPosition={"center"} width={"45px"} height={"45px"} borderRadius={"100%"}></Center>
                                        <Text>{e.mainContent}</Text>
                                    </Flex>
                                </Center>
                            </Center>
                        </Center>
                    )
                }}
            })}
            {/* {geo.map((e:any,i:number) => {
                console.log(e)
                
                return(
                    <div>
                        <p>{e.id}</p>
                        <img src={e.thumbnail.url} alt="" />
                    </div>
                )
            })} */}
        </Center>
    )
}

export default blogContents