

const { emoji, map } = require("../gamedata.js");

module.exports = {
    name: "roulette",
    description: "",
    execute(client, prefix, userID, firstArg) {
        var id;
        if (firstArg) {
            if (firstArg.length != 16) return { embed: { description: "Invalid ID" } }
            id = firstArg;
            var section = map.grid[id[14]].section;
            var location = map[section][id[15]];
        } else {
            const rClass = [probRng(emoji.rarity.length), rnd(emoji.class.length)]
            const rGauntlet = {
                rarity: probRng(emoji.rarity.length),
                "1": getGauntlet(),
                "2": getGauntlet()
            }

            const rRunes = {
                rarity: probRng(emoji.rarity.length),
                "1": rnd(emoji.rune.length),
                "2": rnd(emoji.rune.length)
            }

            const rPotions = {
                "1": rnd(emoji.heal.length),
                "2": rnd(emoji.heal.length),
                "3": rnd(emoji.heal.length)
            }
            const rTalents = getTalents()
            function getGauntlet() {
                var random = rnd(emoji.gauntlet.length);
                return (random == rClass[1] ? getGauntlet() : random)
            }
            function getTalents() {
                var t = {
                    mind: rnd(emoji.talent.mind.length),
                    body: rnd(emoji.talent.body.length),
                    spirit: rnd(emoji.talent.spirit.length)
                }
                const talentCosts = emoji.talent.mind[t.mind].cost + emoji.talent.body[t.body].cost + emoji.talent.spirit[t.spirit].cost;
                if (talentCosts > 7 || talentCosts < 3 ) return getTalents() //Recursion
                else return t

            }
            var location = "none";
            var locationData = {}
            function getLocation() {
                locationData.grid = rnd(map.grid.length);
                const coordinate = map.grid[locationData.grid].section
                locationData.location = rnd(map[coordinate].length);
                location = map[coordinate][locationData.location];
            }
            getLocation()
            id = "" + rClass[0] + rClass[1] + rGauntlet.rarity + rGauntlet[1] + rGauntlet[2] + rTalents.mind + rTalents.body + rTalents.spirit + rRunes.rarity + rRunes[1] + rRunes[2] + rPotions[1] + rPotions[2] + rPotions[3] + locationData.grid + locationData.location + " ";
        }

        return {
            embed: {
                title: "ROULETTE",
                description: "<@" + userID + ">\nOnly use the randomly chosen items below in your next Spellbreak match.\nOf course you can also ignore certain restrictions like rarity or drop location.\nUse `/rules` for more indepth information.",
                color: rnd(16777216),
                fields: [
                    {
                        name: "CLASS",
                        value: emoji.rarity[id[0]] + " - " + emoji.class[id[1]],
                        inline: true
                    },
                    {
                        name: "OFFHAND",
                        value: emoji.rarity[id[2]] + " - " + emoji.gauntlet[id[3]] + " " + emoji.gauntlet[id[4]],
                        inline: true
                    },
                    {
                        name: "TALENTS",
                        value: emoji.talent.mind[id[5]].name + " " + emoji.talent.body[id[6]].name + " " + emoji.talent.spirit[id[7]].name + "⠀",
                        inline: true
                    },
                    {
                        name: "RUNES",
                        value: emoji.rarity[id[8]] + " - " + emoji.rune[id[9]] + " " + emoji.rune[id[10]],
                        inline: true
                    },
                    {
                        name: "DROP LOCATION",
                        value: map.grid[id[14]].emoji + " - " + location,
                        inline: true
                    },
                    {
                        name: "CONSUMABLES",
                        value: emoji.heal[id[11]] + " " + emoji.heal[id[12]] + " " + emoji.heal[id[13]] + "⠀",
                        inline: true
                    }
                ],
                footer: {
                    text: id
                }
            }
        }


        function rnd(max) {
            min = 0;
            max = max - 1;
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function probRng(length) {
            var arr = probGen(length);
            var max = arr.length - 1;
            min = 0;
            max = Math.floor(max);
            return arr[Math.floor(Math.random() * (max - min + 1)) + min];
        }

        function probGen(length) {
            var arr = [];
            var rn = length;
            while (rn > 0) {
                for (var i = 0; i < rn; i++) {
                    arr.push(length - rn);
                }
                rn = rn - 1;
            }
            return arr;
        }
    }
}

