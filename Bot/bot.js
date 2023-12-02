const { Telegraf } = require("telegraf");
const TOKEN = "6785362022:AAGjP55HEi_VeY1HDJVIGMTPwW4wMnQg6G4";
const bot = new Telegraf(TOKEN);

const web_link = "https://celebrated-torte-184681.netlify.app/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))) @nameorder )", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
