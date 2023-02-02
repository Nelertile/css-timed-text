interface lyric {
    kan: string
    eng: string
    time: number
}

const globalOffset = {
    text: -200
}

const time = (m:number, s:number, ms:number) => ((m * 60000 + s * 1000 + ms)+globalOffset.text)

export const lyrics: lyric[] = [
    {
        kan: "稲葉曇 - 天泣",
        eng: "Inabakumori - Heaven's Tears",
        time: time(0, 0, 0),
    },{
        kan: "",
        eng: "A small javascript demo",
        time: time(0, 8, 616)
    },{
        kan: "君の声を飲み込まぬよう",
        eng: "As to not accidentally swallow the words of yours,",
        time: time(0, 18, 166),
    },{
        kan: "縛って結んで風任せ",
        eng: "I bind it up, tie it up, and leave it to the wind.",
        time: time(0, 22, 186)
    },{
        kan: "",
        eng: "",
        time: time(0, 25, 152)
    },{
        kan: "濁る薄暮 ひ弱な影は",
        eng: "A turbid dusk, along with its fuzzy shadows",
        time: time(0, 26, 423)
    },{
        kan: "考えちゃいけないけど  あ...",
        eng: "I'm not supposed to think about them, now...",
        time: time(0, 30, 584)
    },{
        kan: "",
        eng: "",
        time: time(0, 33, 420)
    },{
        kan: "あたしを犠牲にする前兆",
        eng: "It’s a premonition for self sacrifice.",
        time: time(0, 34, 202)
    },{
        kan: "明日の天気は快晴に",
        eng: "Tomorrow's weather will be clear",
        time: time(0, 37, 820)
    },{
        kan: "ぐずついちゃダメなの",
        eng: "But I still felt uneasy",
        time: time(0, 39, 928)
    },{
        kan: "絶対に",
        eng: "I swear...",
        time: time(0, 41, 156)
    },{
        kan: "呼吸を手放して",
        eng: "I want to let go of this pulsation",
        time: time(0, 41, 936)
    },{
        kan: "あたしは願っているの",
        eng: "That's my only wish",
        time: time(0, 43, 513)
    },{
        kan: "",
        eng: "",
        time: time(0, 46, 8)
    }
]