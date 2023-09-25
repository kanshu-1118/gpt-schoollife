import { snsType } from "@/types/snsType";
import { color } from "@/utils/colorTheme";

const member : snsType = {
    ArrayList : [
        {
            name : "Youtube",
            img : "snsmv.jpg",
            btn:"Youtubeチャンネルへ",
            color:"#F56D6D",
            link:"#",
            linkbtn:"./images/linkImgRed.svg",
        },
        {
            name : "Tiktok",
            img : "snsmv.jpg",
            btn:"Tiktokチャンネルへ",
            color:color.accentGreen,
            link:"#",
            linkbtn:"./images/linkImgGreen.svg",
        },
    ]
}

export default {member}