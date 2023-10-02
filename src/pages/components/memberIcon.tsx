import { Center , Image } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { color } from '@/utils/colorTheme'

interface propsType {
    image:any,
}

const memberIcon = (props:propsType) => {

    const [memberImage,setMemberImage] = useState("")



    useEffect(() => {
        if (props.image == "かんしゅ〜") {
            setMemberImage("./images/menber/kansyu.png")
        }else if(props.image == "ほんの"){
            setMemberImage("./images/menber/honno.png")
        }else if(props.image == "りょ〜"){
            setMemberImage("./images/menber/ryo.png")
        }else if(props.image == "じろ〜"){
            setMemberImage("./images/menber/jiro.png")
        }else if(props.image == "うおちゃん"){
            setMemberImage("./images/menber/uo.png")
        }else if(props.image == "ケイシ"){
            setMemberImage("./images/menber/keisi.png")
        }else if(props.image == "む〜さん"){
            setMemberImage("./images/menber/musan.png")
        }
    },[])
    

    return (
        <Center w={"45px"} h={"45px"} overflow={"hidden"} borderRadius={"100px"} border={` 3px solid ${color.accentYellow}`}>
            <Image src={memberImage} alt={""} />
        </Center>
    )
}

export default memberIcon