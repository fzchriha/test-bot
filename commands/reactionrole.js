const { Client, Intents, MessageEmbed} = require('discord.js');
const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
module.exports = async function(msg, args){
		const channel = '899083055472476252';

		const broEmoji = ':person_wearing_turban:';
		const sisEmoji = ':woman_with_headscarf:'; 
		const Discord = require('discord.js');

		// const {MessageEmbed} = require('discord.js');
		let exampleEmbed = new Discord.MessageEmbed()
			.setColor('#0099ff')
			.setTitle('Roles')
			.setDescription('Please choose the positions/groups you want to be apart of at interMSA')
			.addFields(
				{ name: 'Regular Roles', value: '🔍 Seeking Work\n 🔌 Networking\n💯 Alumni\n 📢 Events Across MSA\'s \n 📖 Quran Circle\n❓ Tutorials\n🗳️ Polls\n🎮 Games\n📷 Media'},
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Commitee', value: '🎥 Media & Film (for the creative)', inline: true },
				{ name: 'Commitee', value: '🕋 Islamic Focus (for the deen)', inline: true },
				{name: 'Commitee', value: '🌺 Sisters Engagement (for the sisterhood)', inline: true },
			)

		msg.channel.send({ embeds: [exampleEmbed] }).then(embedMessage => {
			embedMessage.react("🔍");
			embedMessage.react("🔌");
			embedMessage.react("💯");
			embedMessage.react("📢");
			embedMessage.react("📖");
			embedMessage.react("❓");
			embedMessage.react("🗳️");
			embedMessage.react("🎮");
			embedMessage.react("📷");
			embedMessage.react("🎥");
			embedMessage.react("🕋");
			embedMessage.react("🌺");
		});
		

		
};



