require('dotenv').config()
const { Client, MessageAttachment } = require('discord.js')
const client = new Client()
const fetch = require('node-fetch')

const token = process.env.token

client.login(token);

let date = new Date()
let day = date.getDay()

var userList = [];
const fetchUsers = (arr) => {

    for (let i = 0; i < arr.length; i++) {
        client.users.fetch(arr[i])
            .then(data => {
                userList.push(data);
                return userList
            })
            .catch(err => { console.log(err) })
    }
    return userList
}

// fetchUsers(['193451327949504512', '151863991352819712'])


client.on('ready', () => {
    var testChannel = client.channels.cache.find(channel => channel.name === 'general')
    console.log(`Bot is in ${testChannel}`)

})

client.on('message', async message => {
    try {
        // const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        const file = new MessageAttachment('https://i.pinimg.com/236x/b5/98/a1/b598a12a1d6b2921edecd0fea5089cc7.jpg')
        message.author.send(file).catch(err => console.log(err));
    }
    catch (err) {
        console.log(err)
    }
})
