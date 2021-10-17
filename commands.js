const prefix = '!';
const name = require('./commands/name.js');
const salam = require('./commands/name.js');
const reactionrole = require('./commands/reactionrole.js');
const commands = {reactionrole};
module.exports = async function(msg){

	if(msg.content.startsWith(prefix) && !msg.author.bot){
		let tokens = msg.content.split(" ");
		let command = tokens.shift();
		if(command.charAt(0) === "!"){
			command = command.substring(1);
			commands[command](msg, tokens);
		}
	}
	
};
