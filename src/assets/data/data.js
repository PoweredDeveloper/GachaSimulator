export const characters = {
    unique: {
        "scissors": {
            id: "scissors",
            name: "Scissors",
            rarity: 6,
            dmg: 10.1
        }
    },
    legendary: {
        "laccelott": {
            id: "laccelott",
            name: "Laccelott",
            description: "Это мужчина крепкого телосложения лет 54-х одет в тяжелую броню, носит ковбойскую шляпу.",
            rarity: 5,
            dmg: 3.8,
            hp: 35
        },
        "viollera_siqvel": {
            id: "viollera_siqvel",
            name : "Viollera Siqvel",
            rarity: 5,
            dmg: 8.9,
            hp: 18,
            additional: {
                mana: 20
            }
        },
        "kassandra": {
            id: "kassandra",
            name: "kassandra",
            description: "Высокая женщина 37 лет, выглядит моложе своего возраста( лет на 25). Имеет хорошие формы. Обладает чарующей, мраморной красотой. Одета в чёрную облегающую водолазку с глубоким декольте и чёрную юбку из исскуственной кожи выше колена, на ногах высокие глянцевые ботфорты. Чёрные, длинные, непослушные волосы, спокойное, холодное и слегка насмешливое выражение лица, родинка под губой справа. ",
            rarity: 5,
            dmg: 7.0,
            hp: 13,
            additional: {
                mana: 5,
                voice: 4,
                features: "Приятный, нежный голос, всегда холодные руки, постоянные психогенные головные боли. Нарциссизм."
            }
        }
    },
    epic: {
        "siciya": {
            id: "siciya",
            name: "Siciya",
            rarity: 4,
            dmg: 6.8,
            hp: 10
        }
    },
    rare: {
        "solar": {
            id: "solar",
            name: "Solar",
            description: "Худощавый парень 17 лет. Одет в белую накидку со знаком ковенанта солнца. Под накидкой лёгкий ватник. бегает без обуви в синих носках с кртиной 'Лунная ночь' Вангога. на голове капюшон. Лицо скрыто субстанцией аки туман.",
            rarity: 3,
            dmg: 9.0,
            hp: 5
        },
    }
}

export const chances = {
    unique: 0.7,
    legendary: 2.4,
    epic: 5.1,
    rare: 10.3,
    trash: 81.5
}

export const guarantees = {
    unique: 240,
    legendary: 120,
    epic: 60,
    rare: 30
}