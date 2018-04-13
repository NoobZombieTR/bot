const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const emoji = message.guild.emojis.first();
bot.on("ready", async () => {

  console.log(`${bot.user.username} adlı bot ${bot.guilds.size} sunucusunda online!`);
  bot.user.setActivity("&yardim - MonsterArmy Bot (AÇIK)", {url: "https://www.twitch.tv/directory/game/Minecraft"});

});
bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
var msg = message.content.toUpperCase();
  var sender = message.author;

  if (sender.id === "429357437641031680"){
  	return;
  }
	
	
	if(cmd === `${prefix}limonbebek`){
	message.channel.send("", {
    file: "http://www.hurriyetaile.com/userfiles/images/animation-1-3.gif" // Or replace with FileOptions object
});
		}
	if(cmd === `${prefix}gaga`){
	message.channel.send("", {
    file: "https://cdn.discordapp.com/attachments/378184627250003969/434437754391101441/DFDF.PNG" // Or replace with FileOptions object
});
		}
if(cmd === `${prefix}kaykay`){
	message.channel.send("", {
    file: "http://4.bp.blogspot.com/-aEeymB073Fc/VF_SFW-5YeI/AAAAAAAAEpM/BFhsVhk_4fI/s1600/paten-gif.gif" // Or replace with FileOptions object
});
	}
			if(cmd === `${prefix}wtf`){
	message.channel.send("", {
    file: "http://2.bp.blogspot.com/-Tx2uKP7qGLQ/USEuj19AXMI/AAAAAAAAAbI/0KI0g5BWhpw/s1600/Uzun%2Bzamand%25C4%25B1r%2Bg%25C3%25B6rmedi%25C4%259Fim%2Barkada%25C5%259F%25C4%25B1mla%2Bskype%25E2%2580%2599ta%2Bg%25C3%25B6r%25C3%25BCnt%25C3%25BCl%25C3%25BC%2Bg%25C3%25B6r%25C3%25BC%25C5%259F%25C3%25BCrken%2Bben.gif" // Or replace with FileOptions object
});
				}
if(cmd === `${prefix}lutfen`){
	message.channel.send("", {
    file: "https://thumbs.gfycat.com/PoliteEveryArabianhorse-max-1mb.gif" // Or replace with FileOptions object
});
	}
if(cmd === `${prefix}oha`){
	message.channel.send("", {
    file: "http://3.bp.blogspot.com/-QrmTa5Qb1b4/VEgJ6wBY0qI/AAAAAAAAKXk/nW4Q-6fMlQA/s1600/hareketli-komik-bebek-dudaklara-bak.gif" // Or replace with FileOptions object
});
	}
if(cmd === `${prefix}guzellik`){
	message.channel.send("", {
    file: "http://www.buyuknet.com/img/pic-komik-gif-6-1428188510-97190099856.gif" // Or replace with FileOptions object
});
	}
if(cmd === `${prefix}bakisma`){
	message.channel.send("", {
    file: "http://d.konyapol.com/other/_14292604371.gif" // Or replace with FileOptions object
});
	}
if(cmd === `${prefix}kedi`){
	message.channel.send("", {
    file: "https://img.webme.com/pic/g/giflerderyasi/komik-gifler%20(9).gif" // Or replace with FileOptions object
});
	}
if(cmd === `${prefix}:*`){
	message.channel.send("", {
    file: "http://www.topukluhaber.com/wp-content/uploads/2015/05/4-166.gif" // Or replace with FileOptions object
});
	}
	
	
	
	
	
	
	
	
	
	
	
	
  if(sender.id === "347047448985862144"){
  message.react(":Monkas:")
if(cmd === `${prefix}ownercommandglobalmessage`){
    let kulad = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kulad) return message.channel.send("Kullanıcı Bulunamıyor!");
    let msgss = args.join(" ").slice(22);

    kulad.sendMessage(msgss)
    return;
  }

  if(cmd === `${prefix}ownercommandban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Kullanıcı Bulunamıyor!!");
    let bReason = args.join(" ").slice(22);

    let banEmbed = new Discord.RichEmbed()
    .setDescription("MNSTRArmy-Ban")
    .setColor(botconfig.pembe)
    .addField("Yasaklanan Kullanıcı:", `${bUser} ID ${bUser.id}`)
    .addField("Yasaklayan Kullanıcı:", `<@${message.author.id}> ID ${message.author.id}`)
    .addField("Yasaklandığı kanal:", message.channel)
    .addField("Zaman:", message.createdAt)
    .addField("Sebep:", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "mnstrarmy-log");
    if(!incidentchannel) return message.channel.send("log Kanalı Bulunamıyor!");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }
  } 
	if(cmd === `${prefix}negro`){
	message.channel.send("", {
    file: "https://pbs.twimg.com/profile_images/704461285535182848/E_mW-3tV_400x400.jpg" // Or replace with FileOptions object
});
	}

					
		
	if(sender.id === "299246697882714115"){
	message.react("👑")
	}
	
	if(message.content === "selam"){
  	message.channel.send(`${message.author} Aleyküm Selam, Hoşgeldin!`)
  }
  if(message.content === "sa"){
  	message.channel.send(`${message.author} Aleyküm Selam, Hoşgeldin!`)
  }
  if(message.content.includes("amk")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes("yarrak")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes("amq")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes("aq")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes("oç")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes("siktir")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes("sik ")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes("am ")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes(" mk")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes("annenin")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes(" amı")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes("yavşak")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes("piç")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes("gavat")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
  if(message.content.includes("orospu")){
  	message.delete()
  	message.channel.send(`${message.author} Yasaklı Kelime! Birdaha yapmaya kalkma...`)
  }
if(cmd === `${prefix}yt`){
  	let helpEmbed1 = new Discord.RichEmbed()
    .setTitle("MonsterYusuf35'in Youtube Kanalı. (Tıklayın)")
    .setColor(botconfig.pembe)
    .setThumbnail("https://yt3.ggpht.com/-Tewef_jnf0s/AAAAAAAAAAI/AAAAAAAAAAA/AT2C2J460fU/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg")
    .setURL("https://www.youtube.com/channel/UCewe_FtSZW0xByo2ZnhyfxA")
    message.channel.send(helpEmbed1);
    return;
  }
	
  if(cmd === `${prefix}yardim`){

    let helpEmbed1 = new Discord.RichEmbed()
    .setTitle("MNSTRArmy Bot Moderasyon Yardım Sayfası")
    .setColor(botconfig.pembe)
    .addField("Yasaklama", "&ban <@kullanıcı adı> <sebep>: Kullanıcıyı sunucudan yasaklar.")
    .addField("Atma", "&kick <@kullanıcı adı> <sebep>: Kullanıcıyı sunucudan atar.")

    let helpEmbed2 = new Discord.RichEmbed()
    .setTitle("MNSTRArmy Bot Kullanıcı Yardım Sayfası")
    .setColor(botconfig.pembe)
    .addField("Şikayet", "&sikayet <@kullanıcı adı> <sebep>: Kullanıcıyı yetkililere şikayet eder.")
    .addField("Bot Hakkında", "&bot: Bot'un hakkında bilgi alırsınız.")
    .addField("Sunucu Hakkında", "&sunucu: Sunucu hakkında bilgi alırsınız.")
    .addField("YouTube Kanalı", "&yt: MonsterYusuf35'in YouTube Kanalı")

    let helpEmbed3 = new Discord.RichEmbed()
    .setTitle("MNSTRArmy Bot Eğlence Yardım Sayfası")
    .setColor(botconfig.pembe)
    .addField("Gifler", "&limonbebek\n&kaykay\n&guzellik\n&bakisma\n&kedi\n&:*\n&wtf\n&lutfen\n&oha")
    message.channel.send(helpEmbed1);
    message.channel.send(helpEmbed2);
    message.channel.send(helpEmbed3);
    return;
  }

  if(cmd === `${prefix}kick`){
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Kullanıcı Bulunamıyor!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bunu yapmak için iznin yok!");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu kullanıcı atılamıyor!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("MNSTRArmy-Kick")
    .setColor(botconfig.pembe)
    .addField("Atılan kullanıcı:", `${kUser} with ID ${kUser.id}`)
    .addField("Atan Kullanıcı:", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Atıldığı kanal:", message.channel)
    .addField("Zaman:", message.createdAt)
    .addField("Sebep:", kReason);

    let kickChannel = message.guild.channels.find(`name`, "mnstrarmy-log");
    if(!kickChannel) return message.channel.send("log Kanalı Bulunamıyor!");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
    return;
  }

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Kullanıcı Bulunamıyor!!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("Yapamazsın...");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Bu kullanıcı atılamaz!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("MNSTRArmy-Ban")
    .setColor(botconfig.pembe)
    .addField("Yasaklanan Kullanıcı:", `${bUser} ID ${bUser.id}`)
    .addField("Yasaklayan Kullanıcı:", `<@${message.author.id}> ID ${message.author.id}`)
    .addField("Yasaklandığı kanal:", message.channel)
    .addField("Zaman:", message.createdAt)
    .addField("Sebep:", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "mnstrarmy-log");
    if(!incidentchannel) return message.channel.send("log Kanalı Bulunamıyor!");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }


  if(cmd === `${prefix}sikayet`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Kullanıcı Bulunamıyor!");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Şikeyetler")
    .setColor(botconfig.pembe)
    .addField("Şikeyet Edilen Kullanıcı:", `${rUser} ID: ${rUser.id}`)
    .addField("Şikayet Eden Kullanıcı:", `${message.author} ID: ${message.author.id}`)
    .addField("Kanal:", message.channel)
    .addField("Zaman:", message.createdAt)
    .addField("Sebep:", rreason);

    let reportschannel = message.guild.channels.find(`name`, "mnstrarmy-log");
    if(!reportschannel) return message.channel.send("log Kanalı Bulunamıyor!");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }




  if(cmd === `${prefix}sunucu`){

    let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Sunucu Hakkında")
    .setColor(botconfig.pembe)
    .setThumbnail(sicon)
    .addField("Sunucu Adı:", message.guild.name)
    .addField("Açılış Tarihi:", message.guild.createdAt)
    .addField("Katldığın Tarih:", message.member.joinedAt)
    .addField("Toplam Kullanıcı:", message.guild.memberCount);

    return message.channel.send(serverembed);
  }



  if(cmd === `${prefix}bot`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Hakkında")
    .setColor(botconfig.pembe)
    .setThumbnail(bicon)
    .addField("Bot İsmi:", bot.user.username)
    .addField("Yapılış Tarihi:", bot.user.createdAt)
    .addField("Geliştirici Ve Kullanıcı Adı: ", "NoobZombie, NoobZombie#5514")
	.addField("Durum:", "BETA IN-DEV")
    return message.channel.send(botembed);
  }

});

bot.login(process.env.BOT_TOKEN);
