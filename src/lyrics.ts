interface lyric {
    kan: string
    rom: string
    eng: string
    time: number
}

const globalOffset = {
    text: -200
}

const time = (m:number, s:number, ms:number) => ((m * 60000 + s * 1000 + ms)+globalOffset.text)

export const lyrics: lyric[] = [
    {
        kan: "結束バンド - あのバンド",
        rom: "Kessoku Band - Ano Bando",
        eng: "Kessoku Band - That Band",
        time: time(0, 0, 0)
    }, {
        kan: "",
        rom: "",
        eng: "",
        time: time(0, 4, 0)
    }, {
        kan: "",
        rom: "Made by Nelertile",
        eng: "Based on framework by Vlusky",
        time: time(0, 8, 0)
    }, {
        kan: "",
        rom: "",
        eng: "",
        time: time(0, 12, 0)
    }, {
        kan: "あのバンドの歌がわたしには",
        rom: "ano bando no uta ga watashi ni wa",
        eng: "That band's songs sound to me",
        time: time(0, 14, 0)
    }, {
        kan: "甲高く響く笑い声に聞こえる",
        rom: "kandakaku hibiku waraigoe ni kikoeru",
        eng: "like shrill laughter all around",
        time: time(0, 19, 0)
    }, {
        kan: "あのバンドの歌がわたしには",
        rom: "ano bando no uta ga watashi ni wa",
        eng: "That band's songs sound to me",
        time: time(0, 24, 500)
    },{
        kan: "つんざく踏切の音みたい",
        rom: "Tsunzaku fumikiri no oto mitai",
        eng: "like the piercing clang of railway crossing",
        time: time(0,29,500)
    }, {
        kan: "",
        rom: "",
        eng: "",
        time: time(0, 34, 500)
    }, {
        kan: "背中を押すなよ",
        rom: "Senaka wo osuna yo",
        eng: "don't push me forward",
        time: time(0, 36, 0)
    }, {
        kan: "もうそこに列車が来る",
        rom: "Mou soko ni ressha ga kuru",
        eng: "there's a train coming",
        time: time(0, 41, 0)
    }, {
        kan: "目を閉じる、暗闇に差す後光",
        rom: "Me wo tojiru kurayami ni sasu gokou",
        eng: "i close my eyes, there's a halo in the darkness",
        time: time(0, 44, 0)
    }, {
        kan: "耳塞ぐ、確かに刻む鼓動",
        rom: "Mimi fusagu, tashika ni kizamu kodou",
        eng: "i cover my ears, there's a steady beating pulse within",
        time: time(0, 49, 0)
    }, {
        kan: "胸の奥、身を揺らす心臓",
        rom: "Mune no oku, mi wo yurasu shinzou",
        eng: "deep in my chest, my heart makes my body sway",
        time: time(0, 54, 0)
    }, {
        kan: "ほかに何も聴きたくない",
        rom: "Hoka ni nanmo kikitakunai",
        eng: "i don't want to hear anything else",
        time: time(0, 59, 0)
    }, {
        kan: "わたしが放つ音以外",
        rom: "Watashi ga hanatsu oto igai",
        eng: "nothing but the sounds i'm making",
        time: time(1, 2, 0)
    }, {
        kan: "",
        rom: "",
        eng: "",
        time: time(1, 5, 0)
    }
]