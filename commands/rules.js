module.exports = {
    name: "rules",
    description: "",
    execute() {
        return {
            embed: {
                title: "RULES",
                description: "The official ruleset of Spellbreak Roulette.\nOf course you can change the rules to your desire.",
                color: 14725163, //14695746
                fields: [
                    {
                        name: "INTENDED RULES",
                        value: `After using the \`roulette\` command, you'll see a message with a lot of information. Let's go through it all:\n
                        • Only use items, that are shown in the message.\n
                        • If some items appear multiple times, you can **count them as one item**.\n
                        • Some items have colored squares infront of them, these indicate which **rarity** an item needs to have, for you to use it (e.g. If the rarity for your class is set to epic, then u can only use an epic class gauntlet. You can't use any rarity below/above epic).\n
                        • If a portal doesn't spawn near enough to your **drop location**, **walk** to the chosen location (don't pick up any items, until you've arrived).\n
                        • In case you dont have a certain **talent unlocked**, just use another one in the same "cost category", or reroll.\n
                        • When you're playing as a team, please **talk to your teammates** about the rules you'll be using.`
                    }
                ]
            }
        }
    }
}