module.exports = {
    name: "info",
    description: "",
    execute(prefix) {
        return {
            embed: {
                title: "INFO",
                description: "Prefix: `" + prefix + "` or `/`\nThis is a Bot, that presents random restrictions to Spellbreak matches. Try it by using `/roulette`. Use `/rules` to see all the rules.\nThe bot was created by <@462630374028214311> for his german Spellbreak community and is now public (and translated).",
                fields: [
                    {
                        name: "GOOD TO KNOW",
                        value: "- You can reproduce any random combination by simply adding the code of said combination after the command: `!roulette 2524433022034543`.\n- Instead of using `" + prefix + "roulette`, you can just use `" + prefix + "r`.\n- Offhand gauntlets will never have the same magical element as the class.\n- Talent combinations won't ever exceed the maximum cost (7).\nThe arrow infront of the landing spot, roughly indicates its location on the map.\nThere are `9,755,263,856,250` possible loadout combinations."
                    },
                    {
                        name: "HOW IT WORKS",
                        value: "There's obviously a lot of rng going on but there are some differences between certain elements. Here are the chances of every element:\n`CLASS` ~ `16,6%`\n`GAUNTLETS` ~ `20%`\n`RUNES` ~ `11,1%`\n`CONSUMABLES` ~ `11,1`\n`TALENTS` ~ `14,3%`\n`DROP LOCATION` ~ `3%`\n\nRaritys work a bit different:\n`COMMON` ~ `33,3%`\n`UNCOMMON` ~ `26,7%`\n`RARE` ~ `20%`\n`EPIC` ~ `13.3%`\n`LEGENDARY` ~ `6.7%`\n\n(Every single slot will get rng seperately)."
                    },
                    {
                        name: "INVITE",
                        value: "[here](https://discord.com/oauth2/authorize?client_id=830456313845907517&permissions=2147994688&scope=applications.commands%20bot)"
                    }
                ],
                footer: {
                    text: "I hope you enjoy this bot \:)"
                },
                color: 16645629
            }
        }
    }
}