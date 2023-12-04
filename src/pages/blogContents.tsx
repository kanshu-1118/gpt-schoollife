import { Flex, Center,Text,Image } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useEffect,useState,useRef } from 'react'
import { useRouter } from 'next/router'
import React from 'react'
import Header from './components/header'
import { color } from '@/utils/colorTheme'
import member from '@/lib/member'
import MemberIcon from './components/memberIcon'
import snsbutton from '@/lib/snsbutton'
import SnsButton from './components/snsButton'
import sns from '@/lib/sns'
import SnsContents from './components/snsContents'



const blogContents : NextPage = () => {
    const elm = useRef<HTMLDivElement>(null);
    const router = useRouter()
    const [geo,setGeo] = useState([])
    const [contWidth,setContwidth] = useState("650px")
    const [askHeight,setAskHeight] = useState(true)
    const snsArray = sns.member.ArrayList
    const snsBtnArray = snsbutton.snsbutton.ArrayList

    useEffect(() => {
        const fecthello = async () => {
            const responce = await fetch(`./api/hello`)
            const data = await responce.json()
            setGeo(data.geo.contents)
        }
        fecthello()
        const clientHeight = elm?.current?.clientHeight;
        console.log(clientHeight);
        console.log(JSON.stringify(elm?.current?.getBoundingClientRect()));
    },[elm])
    
    return (
        <Center bgColor={color.base} >
            <Header />
            {geo.map((e:any,i:number) => {
                console.log(e)
                
                {if (i == router.query.i as unknown as number) {
                    return (
                        <Center position={"relative"} bgColor={color.white} flexDir={"column"} w={"850px"} margin={"200px"}>
                            <Flex w={"100%"}>
                                <Center bgColor={color.main}  margin={"10px 20px"} p={"6px 16px"} borderRadius={"10px"}>
                                    {/* <Text fontWeight={"12px"} color={color.white} >{e.aiType[0]}</Text> */}
                                </Center>
                            </Flex>
                            <Center gap={"10px"} flexDir={"column"} marginBottom={"40px"}>
                                <Text fontSize={"18px"}>{ new Date(e.time).toLocaleDateString() }</Text>
                                <Text fontSize={"27px"} fontWeight={"bold"}>{e.title}</Text>
                            </Center>
                            <Image src={e.thumbnail.url} alt="" w={"100%"} h={"500px"} objectFit={"cover"}  />
                            <Center w={contWidth}>
                                <Center w={contWidth} margin={"50px 0 30px"} flexDir={"column"} color={color.white}>
                                    <Flex w={contWidth} alignItems={"center"} bgColor={"#40659D"} padding={"15px 20px"} borderRadius={"10px 10px 0 0 "} gap={"15px"}>
                                        <Center bgImage={'./images/menber/kansyu.png'} bgColor={color.white} bgSize={"cover"} bgPosition={"center"} width={"45px"} height={"45px"} borderRadius={"100%"}></Center>
                                        <Text width={"549px"} flexWrap={"wrap"}>{e.askForAi}</Text>
                                    </Flex>
                                    <Flex flexDir={"column"}>
                                        <Flex w={contWidth} ref={elm} maxHeight={askHeight ? "100px" : "200vh" } transition={"1s ease"} bgColor={"#5C7DAD"} padding={"15px 20px"} gap={"15px"}>
                                            <Center bgImage={'./images/menber/kansyu.png'} bgColor={color.white} bgSize={"cover"} bgPosition={"center"} width={"45px"} height={"45px"} borderRadius={"100%"}></Center>
                                            <Text width={"549px"} flexWrap={"wrap"}>{e.aiAnswer}</Text>
                                        </Flex>
                                        <Center bgColor={"#5C7DAD"} padding={"15px 20px 15px"} borderRadius={"0 0 10px 10px"} onClick={() => setAskHeight(askHeight => !askHeight)}>
                                            <Image src='./images/downIcon.svg' w={"30px"} alt='' transform={askHeight ? "" : "rotateX(180deg)"} />
                                        </Center>
                                    </Flex>
                                </Center>
                            </Center>
                            <Flex w={contWidth} flexDir={"column"} gap={"8px"}>
                                <Flex alignItems={"center"} gap={"10px"}>
                                    <Image src='./images/distance.svg' alt='' />
                                    <Text fontSize={"14px"}>{e.place}</Text>
                                </Flex>
                                <Flex alignItems={"center"} gap={"10px"}>
                                    <Image src='./images/currency_yen.svg' alt='' />
                                    <Text fontSize={"14px"}>{e.money}</Text>
                                </Flex>
                                <Flex alignItems={"center"} gap={"10px"}>
                                    <Image src='./images/groups.svg' alt='' />
                                    <Text fontSize={"14px"}>{e.joinMember.length}人</Text>
                                </Flex>
                            </Flex>
                            <Flex flexDir={"column"} gap={"16px"} marginTop={"32px"} fontSize={"18px"} w={contWidth}>
                                <Text>参加メンバー</Text>
                                <Flex gap={"30px"}>
                                    {e.joinMember?.map((e:string,i:number) => {
                                        
                                        return(
                                            <Center flexDir={"column"}>
                                                <MemberIcon image={e} />
                                                <Text fontSize={"12px"}>{e}</Text>
                                            </Center>
                                        )
                                    })}
                                </Flex>
                            </Flex>
                            <Center w={contWidth}>
                                <Text fontWeight={"bold"} fontSize={"16px"}>目次</Text>
                            </Center>
                            <Flex flexDir={"column"} className='contHtml' w={contWidth} dangerouslySetInnerHTML={{__html : e.content}} />
                            <Center w={contWidth} margin={"100px 0"} flexDir={"column"} gap={"20px"} padding={"70px 0"} borderTop={`5px solid ${color.main}`} borderBottom={`5px solid ${color.main}`}>
                                <Text fontSize={"18px"} fontWeight={"bold"} color={color.black}>よろしければシェアよろしくお願いいたします!</Text>
                                <Flex gap={"16px"}>
                                    {snsBtnArray.map((e,i) => {
                                        return(
                                        <SnsButton name={e.name} icon={e.icon} color={e.color} link={e.link} linkbtn={e.linkbtn} />
                                        )
                                    })}
                                </Flex>
                            </Center>
                            <Center flexDir={"column"} gap={"36px"}>
                                <Text fontSize={"18px"} fontWeight={"bold"} color={color.main}>Youtube・TikTokに動画も投稿しています！</Text>
                                <Flex gap={"100px"}>
                                {
                                    snsArray.map((e,i) => {
                                    return(
                                        <SnsContents name={e.name} color={e.color} img={e.img} btn={e.btn} linkbtn={e.linkbtn} link={e.link}/>
                                    )
                                    })
                                }
                                </Flex>
                            </Center>
                            <Center margin={"90px 0"} flexDir={"column"} gap={"20px"}>
                                <Text fontWeight={"bold"} fontSize={"16px"}>タグ</Text>
                                <Center w={contWidth} flexWrap={"wrap"} gap={"8px"}>
                                    {e.tag?.map((e:any,i:number) => {
                                        return(
                                            <Center  padding={"10px 26px"} bgColor={color.accentGreen} borderRadius={"5px"}><Text color={color.base} fontWeight={"bold"} fontSize={"14px"}>{e}</Text></Center>
                                        )
                                    })}
                                </Center>
                            </Center>
                            <Center gap={"80px"}>
                                <Text fontWeight={"bold"} fontSize={"24px"} color={color.main}>関連記事</Text>
                            </Center>
                        </Center>
                    )
                }}
            })}
        </Center>
    )
}

export default blogContents