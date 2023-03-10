// Code written by: 
// Powered Developer <https://github.com/PoweredDeveloper>
// (Istomin Mikhail) Check my profile for more info.
// MIT LICENSE
 
// Главная дата проекта, все данные тут.

// Персонажи
export const characters = {
    unique: {
        "helric": {
            id: "helric",
            name: "Helric",
            description: "Лысый гном королевских кровей с огромным животом и лысой головой. Носит с собой шипастый щит который полностью закрывает его.",
            rarity: 6,
            dmg: 2,
            hp: 40,
            additional: {
                features: "На короткое время поглощает 90% принимающего чистого урона"
            }
        },
        "rayton": {
            id: "rayton",
            name: "Rayton",
            rarity: 6,
            dmg: 9,
            hp: 31,
            additional: {
                features: "Очень медленный танк, зато боевая мощь - ух! "
            }
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
            name: "Kassandra",
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
        },
        "milina": {
            id: "milina",
            name: "Milina",
            rarity: 4,
            dmg: 9,
            hp: 21,
            additional: {
                buffs: "При убийстве врага её ярость повышается на 3% ( макс. 15%),  увеличивая её скорость атаки и передвижения на 40 секунд.",
                features: "Милая горничная с маленькой дальностью атаки."
            }
        },
        "joshiro": {
            id: "joshiro",
            name: "Joshiro",
            rarity: 4,
            dmg: 11,
            hp: 5
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
        "mana_yoshikawa": {
            id: "mana_yoshikawa",
            name: "Mana Yoshikawa",
            description: "Невысокая, милая девушка 19 лет. Шелковистые длинные волосы пшеничного оттенка, собранные в высокий хвост. На шее красная лента. Одета в традиционную юкату нежно- персикового цвета, с рисунками цветов сакуры. На спине большой бант , на уровне талии. Милое личико, большие глаза, лёгкий румянец, продолговатые эльфийские уши. Очень робкая и безобидная девушка.",
            rarity: 3,
            dmg: 3,
            hp: 20,
            additional: {
                mana: 10,
                features: "Является воплощением истинной любви к жизни и к окружающему миру. Коллекционирует фантики от леденцов. На губе продолговатый шрам, полученный в процессе оказания помощи бездомной кошке."
            }
        },
        "gotari": {
            id: "gotari",
            name: "Gotari",
            rarity: 3,
            dmg: 7,
            hp: 12
        },
        "shitaru": {
            id: "shitaru",
            name: "Shitaru",
            rarity: 3,
            dmg: 6.5,
            hp: 14
        },
        "kokoro": {
            id: "kokoro",
            name: "Kokoro",
            rarity: 3,
            dmg: 7,
            hp: 10
        },
    }
}

// Шансы
export const chances = {
    unique: 0.7,
    legendary: 2.4,
    epic: 5.1,
    rare: 10.3,
    trash: 81.5
}

// Hard Pity
export const guarantees = {
    unique: 240,
    legendary: 120,
    epic: 60,
    rare: 30
}

// Sodt Pity
export const softPitys = {
    unique: [200, 0.1],
    legendary: [100, 0.2]
}