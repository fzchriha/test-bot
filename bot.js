const { Client, Intents, MessageEmbed} = require('discord.js');

const Discord = require('discord.js');
require('dotenv').config();
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});

const fs = require('fs');

client.login(process.env.BOT_TOKEN);

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file=> file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.on('ready', readyDiscord);

function readyDiscord(){
	console.log('yay!');
}

const commandHandler = require("./commands");

client.on("message", commandHandler);

// create roles based on reaction -- should be in reactionrole.js but doesn't seem to work

client.on('messageReactionAdd', async (reaction, user) => {
	const alumni = reaction.message.guild.roles.cache.find(role => role.name === "alumni");
	const network = reaction.message.guild.roles.cache.find(role => role.name === "networking");
	// When a reaction is received, check if the structure is partial
	if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message:', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}

	// Now the message has been cached and is fully available
	console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
	// The reaction is now also fully available and the properties will be reflected accurately:
	console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
	if(reaction.emoji.name == '💯'){
		reaction.message.guild.members.cache.get(user.id).roles.add(alumni);
	}
	if(reaction.emoji.name == '🔌'){
		reaction.message.guild.members.cache.get(user.id).roles.add(network);
	}
});

client.on('messageReactionRemove', async (reaction, user) => {
	const alumni = reaction.message.guild.roles.cache.find(role => role.name === "alumni");
	const network = reaction.message.guild.roles.cache.find(role => role.name === "networking");
	// When a reaction is received, check if the structure is partial
	if (reaction.partial) {
		// If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
		try {
			await reaction.fetch();
		} catch (error) {
			console.error('Something went wrong when fetching the message:', error);
			// Return as `reaction.message.author` may be undefined/null
			return;
		}
	}

	// Now the message has been cached and is fully available
	console.log(`${reaction.message.author}'s message "${reaction.message.content}" gained a reaction!`);
	// The reaction is now also fully available and the properties will be reflected accurately:
	console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
	if(reaction.emoji.name == '💯'){
		reaction.message.guild.members.cache.get(user.id).roles.remove(alumni);
	}
	if(reaction.emoji.name == '🔌'){
		reaction.message.guild.members.cache.get(user.id).roles.remove(network);
	}
});