const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
});
client.on('message', msg => {
if (msg.content === 'ping') {
msg.reply('Pong!');
		console.log("Command 'ping' used by " + msg.author.username)
}
	var messages = [
		'> HELLLLL YEAHHHHH',
		'> I’ll see you on the yeehaw',
		'> I’m a :sparkles: 32 year old ladyyy :sparkles:',
		'> My dogs are more popular than I am',
		'> Hi, welcome to Me Time.',
		'> Hi my name"s Jenna and I have a basketball game tomorrrrrooowwww :sparkles:',
		'> Who you fightin’?',
		'> I"m Jenna Marbles and your watching Disney Channel',
		'> but NN can also mean yes. nNn means no.',
		'> Just cause I have beard doesn’t mean me a he, I identify as she with a beard',
		'> i’M a viRGoOOoO',
		'> Theres no cure for ugly, but you can make yourself into a human optical illusion',
		'> YEAH!! Pati ka?',
		'> I cant wait to get fat and eat whatever I want',
		'> I wanna be TALLLLLLLLLL',
		'> My hotline is blinging I have to go',
		'> You might as well get some cats and call it quits',
	]
	
	if (msg.content === 'random') {
		var rand = messages[Math.floor(Math.random() * messages.length)];
		msg.channel.send(rand)
		console.log("Command 'random' used by " + msg.author.username)
	}
	if (msg.content === 'list') {
		msg.channel.send(messages)
		console.log("Command 'list' used by " + msg.author.username)
	}
	if (msg.content === 'kill me') {
		msg.reply(':gun:')
		console.log("Command 'kill me' used by " + msg.author.username)
	}

});

client.login('NjQxMDM0MTIwMzEwNTU0NjQ1.XcFqTw.HMFUBoFRumjssgUBpF9GqVZHcOo');
