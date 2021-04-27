const { prefix, token, id } = require('./config.json') //config file with token
const atBot = "<@!" + id + ">"

//Discord.js
const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });
////////////

//Advanced command handler
const fs = require("fs");
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'))
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command)
}
//////////////////////////


client.once("ready", async () => {
    console.log("online")
    client.user.setPresence({
        status: 'available',
        activity: {
            name: '/roulette',
            type: 'LISTENING'
        }
    })


    client.api.applications(client.user.id).commands.post({
        data: {
            name: "info",
            description: "Info about the bot"
        }
    }).catch(console.error)

    client.api.applications(client.user.id).commands.post({
        data: {
            name: "rules",
            description: "The official rule-set for Spellbreak Roulette"
        }
    }).catch(console.error)

    client.api.applications(client.user.id).commands.post({
        data: {
            name: "roulette",
            description: "Will give you randomized instructions to follow in your next Spellbreak match",
            options: [
                {
                    name: "id",
                    description: "Reproduction ID of a roulette",
                    type: 3,
                    required: false
                }
            ]
        }
    }).catch(console.error)

})

const { emoji, map } = require("./gamedata.js");

client.on("message", async message => {
    if (message.author.bot || !message.guild || message.guild.id == "550024406995435531") return;
    if (!message.content.startsWith(prefix) && !message.content.startsWith(atBot)) return; //if message doesn't start with prefix then return
    var args;
    if (message.content.startsWith(prefix)) {
        args = message.content.slice(prefix.length).split(/ +/)
    } else if (message.content.startsWith(atBot)) {
        args = message.content.slice(atBot.length).split(/ +/)
    }
    if (args[0] === "") {
        args.shift()
    }
    if (args[0] === undefined) return;
    const command = args.shift().toLowerCase();
    switch (command) {
        case "help":
            client.users.fetch("462630374028214311").then(me => {
                message.channel.send({
                    content: "If the messages are not displayed properly, go to settings and turn on `LINK PREVIEW`",
                    embed: {
                        title: "HELP",
                        description: "Type `/roulette` and follow the instructions.\nTry `/info` for more information.",
                        color: 3901635
                    }
                })

            })
            break;
        case "info":
        case "i":
            message.channel.send(client.commands.get("info").execute(prefix))
            break;
        case "commands":
        case "cmd":
        case "command":
            message.channel.send({
                embed: {
                    title: "COMMANDS",
                    description: "`" + prefix + "roulette`\n`" + prefix + "help`\n`" + prefix + "info`"
                }
            })
            break;
        case "roulette":
        case "r":
        case "rnd":
            const msg = await client.commands.get("roulette").execute(client, prefix, message.author.id, args[0])
            message.channel.send(msg)
            break;
        case "rules":
            message.channel.send(client.commands.get("rules").execute())
            break;

    }

})


client.ws.on('INTERACTION_CREATE', async interaction => {
    const command = interaction.data.name.toLowerCase();
    var args = interaction.data.options;
    if (!args) args = [];

    switch (command) {
        case "roulette":
            var firstArg = undefined;
            if (args[0]) firstArg = args[0].value;
            const embed = await client.commands.get("roulette").execute(client, prefix, interaction.member.user.id, firstArg)
            slashSend(interaction, await createAPIMessage(interaction, embed))
            break;
        case "info":
            slashSend(interaction, await createAPIMessage(interaction, client.commands.get("info").execute(prefix)))
            break
        case "rules":
            slashSend(interaction, await createAPIMessage(interaction, client.commands.get("rules").execute()))
            break;
    }


});


function slashSend(interaction, data) {
    client.api.interactions(interaction.id, interaction.token).callback.post({
        data: {
            type: 4,
            data: data
        }
    });
}

async function createAPIMessage(interaction, content) {
    const apiMessage = await Discord.APIMessage.create(client.channels.resolve(interaction.channel_id), content)
        .resolveData()
        .resolveFiles();

    return { ...apiMessage.data, files: apiMessage.files };
}






client.login(token)