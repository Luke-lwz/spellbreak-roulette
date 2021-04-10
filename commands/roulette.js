const fn = require("../functions.js");

const { gauntlets, emoji, map } = require("../gamedata.js");

module.exports = {
    name: "roulette",
    description: "",
    execute(client, prefix, userID, firstArg) {
        if (firstArg) { // With reproduction code
            if (firstArg.length != 16) return { embed: { description: "Invalid ID" } }
            const id = firstArg;
            var section = map.grid[id[14]].section;
            var location = map[section][id[15]];
            return {
                embed: {
                    title: "ROULETTE",
                    description: "<@" + userID + ">\nOnly use the randomly chosen items below in your next Spellbreak match.\nOf course you can also ignore certain restrictions like rarity or drop location.",
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

        } else {
            const klasse = [probRng(emoji.rarity.length), rnd(emoji.class.length)]
            const handschuh = {
                rarity: probRng(emoji.rarity.length),
                "1": getGauntlet(),
                "2": getGauntlet()
            }

            const runen = {
                rarity: probRng(emoji.rarity.length),
                "1": rnd(emoji.rune.length),
                "2": rnd(emoji.rune.length)
            }

            const heilung = {
                "1": rnd(emoji.heal.length),
                "2": rnd(emoji.heal.length),
                "3": rnd(emoji.heal.length)
            }
            const talente = getTalents()
            function getGauntlet() {
                var random = rnd(emoji.gauntlet.length);
                return (random == klasse[1] ? getGauntlet() : random)
            }
            function getTalents() {
                var t = {
                    mind: rnd(emoji.talent.mind.length),
                    body: rnd(emoji.talent.body.length),
                    spirit: rnd(emoji.talent.spirit.length)
                }
                if (emoji.talent.mind[t.mind].cost + emoji.talent.body[t.body].cost + emoji.talent.spirit[t.spirit].cost > 7) return getTalents()
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
            const id = "" + klasse[0] + klasse[1] + handschuh.rarity + handschuh[1] + handschuh[2] + talente.mind + talente.body + talente.spirit + runen.rarity + runen[1] + runen[2] + heilung[1] + heilung[2] + heilung[3] + locationData.grid + locationData.location + " ";
            return {
                embed: {
                    title: "ROULETTE",
                    description: "<@" + userID + ">\nOnly use the randomly chosen items below in your next Spellbreak match.\nOf course you can also ignore certain restrictions like rarity or drop location.",
                    color: rnd(16777216),
                    fields: [
                        {
                            name: "CLASS",
                            value: emoji.rarity[klasse[0]] + " - " + emoji.class[klasse[1]],
                            inline: true
                        },
                        {
                            name: "OFFHAND",
                            value: emoji.rarity[handschuh.rarity] + " - " + emoji.gauntlet[handschuh[1]] + " " + emoji.gauntlet[handschuh[2]],
                            inline: true
                        },
                        {
                            name: "TALENTS",
                            value: emoji.talent.mind[talente.mind].name + " " + emoji.talent.body[talente.body].name + " " + emoji.talent.spirit[talente.spirit].name + "⠀",
                            inline: true
                        },
                        {
                            name: "RUNES",
                            value: emoji.rarity[runen.rarity] + " - " + emoji.rune[runen[1]] + " " + emoji.rune[runen[2]],
                            inline: true
                        },
                        {
                            name: "DROP LOCATION",
                            value: map.grid[locationData.grid].emoji + " - " + location,
                            inline: true
                        },
                        {
                            name: "CONSUMABLES",
                            value: emoji.heal[heilung[1]] + " " + emoji.heal[heilung[2]] + " " + emoji.heal[heilung[3]] + "⠀",
                            inline: true
                        }
                    ],
                    footer: {
                        text: id
                    }
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
            var max = arr.length;
            min = 0;
            max = max - 1;
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

