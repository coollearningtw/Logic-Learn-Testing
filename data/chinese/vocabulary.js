/**
 * 樂知學｜第二代學習平台
 * 國文｜字詞與成語題庫
 *
 * 注意：
 * - 本檔案只負責保存題目資料。
 * - 不處理畫面。
 * - 不處理答題邏輯。
 * - 不處理選項排列。
 *
 * 題目資料格式：
 *
 * {
 *     id: "唯一題目編號",
 *     type: "multiple-choice",
 *     category: "題目分類",
 *     question: "題目內容",
 *     options: [
 *         {
 *             id: "選項唯一編號",
 *             text: "選項文字"
 *         }
 *     ],
 *     answer: "正確選項的 id",
 *     explanation: "答案解析",
 *     difficulty: 1,
 *     tags: []
 * }
 */


/* =========================================================
   國文｜字詞與成語
   ========================================================= */

window.ChineseVocabularyQuestions = [

    {
        id: "chinese-vocabulary-0001",

        type: "multiple-choice",

        category: "成語",

        question:
            "「按部就班」最適合用來形容下列哪一種情況？",

        options: [
            {
                id: "a",
                text: "做事按照一定的順序逐步進行"
            },
            {
                id: "b",
                text: "遇到困難時立即改變原本的計畫"
            },
            {
                id: "c",
                text: "做事情完全依照自己的喜好"
            },
            {
                id: "d",
                text: "為了追求速度而省略必要步驟"
            }
        ],

        answer: "a",

        explanation:
            "「按部就班」指按照一定的條理、步驟來做事，因此適合用來形容有條理地逐步完成事情。",

        difficulty: 1,

        tags: [
            "成語",
            "詞義"
        ]
    },


    {
        id: "chinese-vocabulary-0002",

        type: "multiple-choice",

        category: "成語",

        question:
            "下列哪一個成語最適合形容「彼此的力量或能力不相上下」？",

        options: [
            {
                id: "a",
                text: "旗鼓相當"
            },
            {
                id: "b",
                text: "一蹴可幾"
            },
            {
                id: "c",
                text: "望塵莫及"
            },
            {
                id: "d",
                text: "差強人意"
            }
        ],

        answer: "a",

        explanation:
            "「旗鼓相當」比喻雙方力量或能力相當，彼此不相上下。",

        difficulty: 1,

        tags: [
            "成語",
            "詞義"
        ]
    },


    {
        id: "chinese-vocabulary-0003",

        type: "multiple-choice",

        category: "成語",

        question:
            "小明第一次參加演講比賽，雖然事前十分緊張，但上台後仍然表現得很自然。下列哪一個成語最適合形容他的表現？",

        options: [
            {
                id: "a",
                text: "從容不迫"
            },
            {
                id: "b",
                text: "張皇失措"
            },
            {
                id: "c",
                text: "瞠目結舌"
            },
            {
                id: "d",
                text: "坐立不安"
            }
        ],

        answer: "a",

        explanation:
            "「從容不迫」形容態度鎮定，不慌不忙。題目中的小明雖然事前緊張，但上台後表現自然，因此適合使用這個成語。",

        difficulty: 1,

        tags: [
            "成語",
            "情境應用"
        ]
    },


    {
        id: "chinese-vocabulary-0004",

        type: "multiple-choice",

        category: "字詞",

        question:
            "「斟酌」一詞最接近下列哪一個意思？",

        options: [
            {
                id: "a",
                text: "反覆考慮、權衡"
            },
            {
                id: "b",
                text: "快速完成"
            },
            {
                id: "c",
                text: "大聲爭辯"
            },
            {
                id: "d",
                text: "完全拒絕"
            }
        ],

        answer: "a",

        explanation:
            "「斟酌」常用來表示反覆考慮、權衡得失。例如：「這件事情還需要仔細斟酌。」",

        difficulty: 1,

        tags: [
            "字詞",
            "詞義"
        ]
    },


    {
        id: "chinese-vocabulary-0005",

        type: "multiple-choice",

        category: "字詞",

        question:
            "下列哪一個詞語最適合用來形容「心情受到安慰而得到平靜」？",

        options: [
            {
                id: "a",
                text: "慰藉"
            },
            {
                id: "b",
                text: "遲疑"
            },
            {
                id: "c",
                text: "喧囂"
            },
            {
                id: "d",
                text: "拘謹"
            }
        ],

        answer: "a",

        explanation:
            "「慰藉」指安慰、撫慰，使人的心情得到安慰。例如：「朋友的陪伴給了他很大的慰藉。」",

        difficulty: 1,

        tags: [
            "字詞",
            "詞義"
        ]
    },


    {
        id: "chinese-vocabulary-0006",

        type: "multiple-choice",

        category: "成語",

        question:
            "老師提醒大家，學習需要長時間累積，不能期待短時間內就看到所有成果。下列哪一個成語最符合這個意思？",

        options: [
            {
                id: "a",
                text: "水到渠成"
            },
            {
                id: "b",
                text: "一曝十寒"
            },
            {
                id: "c",
                text: "曇花一現"
            },
            {
                id: "d",
                text: "急功近利"
            }
        ],

        answer: "a",

        explanation:
            "「水到渠成」比喻條件成熟後，事情自然會成功。題目強調學習需要持續累積，當條件逐漸成熟後才能看到成果，因此符合此意。",

        difficulty: 2,

        tags: [
            "成語",
            "情境應用"
        ]
    },


    {
        id: "chinese-vocabulary-0007",

        type: "multiple-choice",

        category: "成語",

        question:
            "下列哪一個成語可以用來形容「原本平靜的心情突然受到驚嚇而慌亂」？",

        options: [
            {
                id: "a",
                text: "心驚膽戰"
            },
            {
                id: "b",
                text: "心平氣和"
            },
            {
                id: "c",
                text: "神采奕奕"
            },
            {
                id: "d",
                text: "悠然自得"
            }
        ],

        answer: "a",

        explanation:
            "「心驚膽戰」形容十分害怕、恐懼。題目描述受到驚嚇後的慌亂與害怕，因此符合此成語的意思。",

        difficulty: 1,

        tags: [
            "成語",
            "情緒"
        ]
    },


    {
        id: "chinese-vocabulary-0008",

        type: "multiple-choice",

        category: "字詞",

        question:
            "「踴躍」一詞最適合用在哪一種情況？",

        options: [
            {
                id: "a",
                text: "大家積極主動地參加活動"
            },
            {
                id: "b",
                text: "大家安靜地等待結果"
            },
            {
                id: "c",
                text: "大家因為疲倦而停止工作"
            },
            {
                id: "d",
                text: "大家對事情完全沒有興趣"
            }
        ],

        answer: "a",

        explanation:
            "「踴躍」表示積極、熱烈地參加或投入某件事情，例如「同學踴躍報名參加比賽」。",

        difficulty: 1,

        tags: [
            "字詞",
            "用法"
        ]
    },


    {
        id: "chinese-vocabulary-0009",

        type: "multiple-choice",

        category: "成語",

        question:
            "小華做報告前先蒐集資料，再整理重點，最後才開始撰寫內容。這種做法最適合用哪一個成語形容？",

        options: [
            {
                id: "a",
                text: "未雨綢繆"
            },
            {
                id: "b",
                text: "臨渴掘井"
            },
            {
                id: "c",
                text: "得過且過"
            },
            {
                id: "d",
                text: "草率從事"
            }
        ],

        answer: "a",

        explanation:
            "「未雨綢繆」比喻事先做好準備，以防患於未然。小華在寫報告前先蒐集並整理資料，正是事先準備的做法。",

        difficulty: 2,

        tags: [
            "成語",
            "情境應用"
        ]
    },


    {
        id: "chinese-vocabulary-0010",

        type: "multiple-choice",

        category: "字詞",

        question:
            "下列哪一句使用「嶄新」最恰當？",

        options: [
            {
                id: "a",
                text: "他買了一本嶄新的筆記本。"
            },
            {
                id: "b",
                text: "這道題目嶄新地很困難。"
            },
            {
                id: "c",
                text: "他的心情嶄新地緊張。"
            },
            {
                id: "d",
                text: "大家嶄新地討論這個問題。"
            }
        ],

        answer: "a",

        explanation:
            "「嶄新」表示非常新、全新的意思，通常用來形容事物。選項 A 的「嶄新的筆記本」使用正確。",

        difficulty: 1,

        tags: [
            "字詞",
            "用法"
        ]
    }

];