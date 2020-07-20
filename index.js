const Telegraf = require('telegraf');
const BOT_TOKEN = '1228682549:AAFPBxpN9t1gvEV5rmjmJJQJRyzWwQ9X9OY';
const bot = new Telegraf(BOT_TOKEN);

bot.launch()
    .then( result =>
        console.log('Бот стартанул'))
    .catch( error => 
        console.log('Ошибка'));

bot.start(ctx =>
    ctx.reply('Отправь мне сообщение и я перешлю его тебе'));

bot.help(ctx => 
    ctx.reply('По всем вопросам пишите автору @artemybeautiful'));

bot.on('message', ctx => 
    ctx.telegram.sendCopy(ctx.chat.id, ctx.message));
