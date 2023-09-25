import { categoryType } from "@/types/categoryType";

const category : categoryType = {
    ArrayList : [
        {
            name : "場所",
            child : [
                "大阪",
                "京都",
                "兵庫",
            ]
        },
        {
            name : "食べ物",
            child : [
                "チェーン店",
                "食べ放題",
                "食べ歩き",
                "安い",
            ]
        },
        {
            name : "アクティビティ",
            child : [
                "ショッピング",
                "テーマパーク",
                "レジャー",
            ]
        },
        {
            name : "その他",
            child : [
                "車移動",
                "電車移動",
            ]
        },
    ]
}

export default {category}