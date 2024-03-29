const data = {
    emoji: {
        spellbreak: "<:Spellbreak:759907485783556126>",
        rarity: [":white_large_square:", ":green_square:", ":blue_square:", ":purple_square:", ":yellow_square:"],
        class: ["<:Pyromancer:1143956363563778059>", "<:Toxicologist:1143956368815050872>", "<:Stoneshaper:1143956366701117510>", "<:Tempest:1143956376926826658>", "<:Frostborn:1143956373638488188>", "<:Conduit:1143956371767840892>"],
        gauntlet: ["<:Fire:1143956290830344255>", "<:Toxic:1143956299252514897>", "<:Stone:1143956297608343663>", "<:Wind:1143956300649222154>", "<:Frost:1143956293988659299>", "<:Lightning:1143956295389548634>"],
        rune: ["<:Springstep:819944090317619240>", "<:Dash:819944089944326184>", "<:Invisibility:819944089696337981>", "<:Invisibility:819944089696337981>", "<:Shadowstep:819944089763708950>", "<:WolfsBlood:819944090073563167>", "<:Featherfall:819944089901465610>", "<:Flight:819944089738149899>", "<:Teleport:819944089843531777>", "<:Chronomaster:819944089628835901>"],
        heal: ["<:Small_HP:819945161512976394>", "<:HP:754121008935469177>", "<:Large_HP:754121009136795698>", "<:Small_Shard:819945161508913162>", "<:Shard:754121009186996294>", "<:Large_Shard:754121008692199454>", "<:Safeguard:819945161239822368>", "<:Large_Safeguard:819945161416900618>", "<:Knowledge:819945161232482346>"],
        talent: {
            mind: [{name: "<:none:830147099604549633>", cost: 0}, { name: "<:Intelligent:830137798630703174>", cost: 1 }, { name: "<:Curious:830137798354010142>", cost: 2 }, { name: "<:Spellslinger:830137797607686185>", cost: 2 }, { name: "<:Tracking:830137797469536306>", cost: 3 }, { name: "<:Hardened:830137798765314060>", cost: 3 }, { name: "<:Runic_Fluency:830137797448564817>", cost: 4 }, { name: "<:Rebirth:830137797883986020>", cost: 4 }],
            body: [{name: "<:none:830147099604549633>", cost: 0}, { name: "<:Tough:830139783899643914>", cost: 1 }, { name: "<:Dexterity:830139782079184896>", cost: 2 }, { name: "<:Wellspring:830139785385476127>", cost: 2 }, { name: "<:Fellowship:830139785565700106>", cost: 3 }, { name: "<:Vigor:830139781182783488>", cost: 3 }, { name: "<:Ambidextrous:830139780775673856>", cost: 4 }, { name: "<:Athletic:830139782260588544>", cost: 4 }],
            spirit: [{name: "<:none:830147099604549633>", cost: 0}, { name: "<:Mystical:830140174221574214>", cost: 1 }, { name: "<:Vampiric:830140174029553717>", cost: 2 }, { name: "<:Thirsty:830140172367691826>", cost: 2 }, { name: "<:Fortitude:830140171734351932>", cost: 3 }, { name: "<:Inspired:830140175010365450>", cost: 3 }, { name: "<:Foresight:830140171457527819>", cost: 4 }, { name: "<:Gilded:830140172162826251>", cost: 4 }]
        } 
    },
    map: {
        grid: [{ section: "0:0", alt: "top-left", emoji: ":arrow_upper_left:" }, { section: "0:1", alt: "top-mid", emoji: ":arrow_up:" }, { section: "0:2", alt: "top-right", emoji: ":arrow_upper_right:" }, { section: "1:0", alt: "mid-left", emoji: ":arrow_left:" }, { section: "1:1", alt: "mid-mid", emoji: ":record_button:" }, { section: "1:2", alt: "mid-right", emoji: ":arrow_right:" }, { section: "2:0", alt: "bottom-left", emoji: ":arrow_lower_left:" }, { section: "2:1", alt: "bottom-mid", emoji: ":arrow_down:" }, { section: "2:2", alt: "bottom-right", emoji: ":arrow_lower_right:" }],
        "0:0": ["Northfall Village", "Lux Vault", "Banehelm Keep", "Vitalvein", "Verdon Estate"],
        "0:1": ["Dustpool Hold", "Gritfeld"],
        "0:2": ["Fever Ridge", "Northmarch Pass", "Lowland Outpost", "Fever Break"],
        "1:0": ["Shadowgrace Forest", "Edgewall Gate", "Arena of Elders", "Westmar", "Fernfall Garrison", "Zealot's Keep"],
        "1:1": ["Witgrave", "Halcyon Pass", "Halcyon Cathedral", "Fort Halcyon", "Wayfarer's Market"],
        "1:2": ["Sawtooth Mountain", "Ruby Grove", "Forgotten Cloister", "Evenguard Summit", "Halcyon Reach"],
        "2:0": ["Zealot's Keep", "Hope's End", "Choirbank Sanctum"],
        "2:1": ["Choirbank Sanctum", "Hymnwood Ruins", "Timberrend"],
        "2:2": ["Mossburn", "Castle Bogmore"]
    }
}

module.exports = data;