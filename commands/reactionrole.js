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
				{ name: 'Regular Roles', value: 'š Seeking Work\n š Networking\nšÆ Alumni\n š¢ Events Across MSA\'s \n š Quran Circle\nā Tutorials\nš³ļø Polls\nš® Games\nš· Media'},
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Commitee', value: 'š„ Media & Film (for the creative)', inline: true },
				{ name: 'Commitee', value: 'š Islamic Focus (for the deen)', inline: true },
				{name: 'Commitee', value: 'šŗ Sisters Engagement (for the sisterhood)', inline: true },
			)

		msg.channel.send({ embeds: [exampleEmbed] }).then(embedMessage => {
			embedMessage.react("š");
			embedMessage.react("š");
			embedMessage.react("šÆ");
			embedMessage.react("š¢");
			embedMessage.react("š");
			embedMessage.react("ā");
			embedMessage.react("š³ļø");
			embedMessage.react("š®");
			embedMessage.react("š·");
			embedMessage.react("š„");
			embedMessage.react("š");
			embedMessage.react("šŗ");
		});
		

		
};



