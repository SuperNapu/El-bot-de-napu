const botconfig = require("./botconfig.json");
const Discord = require("Discord.js");

const bot = new Discord.Client({disableEveryone: true});

var i;
var longitudString;
var broVar;


bot.on("ready", async () =>
  {
    console.log(`${bot.user.username} is online, bro`);
    bot.user.setPresence({ status: 'online', game: { name: 'teto' } });

  });

bot.on("message", async message =>
  {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return message.channel.send("me tenes podrido.");   //Si le hablas por privado

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    if(cmd === `${prefix}Ricardo,`)
      {

        if(message.member.user.tag === "Sofía#4280")  //Sofía#4280  Napu el judio#4803
          broVar = "bre";
        else
          broVar = "bro";

        console.log(message.member.user.tag, "es", broVar);


        longitudString = message.content.length;
        console.log("Longitud del mensaje de [", message.member.user.tag, "] es:", longitudString);

        if(message.content[longitudString-1] === '?')   //respuesta a preguntas
        {
          console.log("Es una pregunta :D");


          if(message.content === ".Ricardo, debo alabar al pato?")
          {
            if(broVar === "bre")
              return message.channel.send("Si, siempre bre");
            else
              return message.channel.send("Si, siempre bro");
          }


          i = Math.random() * 2;
          i = Math.floor(i);
          console.log("Numero aleatorio generado:", i);

          if(i===0)//SI
          {
            if(broVar === "bre")
              return message.channel.send("Si bre");
            else
              return message.channel.send("Si bro");
          }

          if(i===1)//NO
          {

            i = Math.random() * 2;
            i = Math.floor(i);

            if(i===0)//--NO
            {
              if(broVar === "bre")
                return message.channel.send("No bre");
              else
                return message.channel.send("No bro");
            }

            if(i===1)//--NOCREO
            {
              if(broVar === "bre")
                return message.channel.send("No creo bre");
              else
                return message.channel.send("No creo bro");
            }
          }
        }


        if(broVar === "bre")
          return message.channel.send("Solo respondo preguntas, lo siento bre");
        else
          return message.channel.send("Solo respondo preguntas, lo siento bro");

      }
    })

bot.login(botconfig.token);
