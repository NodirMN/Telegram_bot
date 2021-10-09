const TelegramBot = require('node-telegram-bot-api');
const token = '2052387980:AAFfqeAMQFUJEWdJRKGigdACeLk9ouCc3F0';

const bot = new TelegramBot(token, {
    polling: true
});

let resultsData = [
    {
        type:'article',
        id: 1,
        title: "Lorem ipsum dolor ",
        description: " neque dolore perferendis eius natus non, nemo rerum.",
        thumb_url: "https://i.pinimg.com/564x/40/c5/ab/40c5ab58803941150bc40e146873a198.jpg",
        input_message_content:{
            message_text: ". Debitis quam aut minus repudiandae soluta maiores quas eligendi fugiat et sit cupiditate numquam, neque dolore perferendis eius natus non, nemo rerum."
        }
    },
    {
        type:'article',
        id: 2,
        title: "Lorem ipsum dolor ",
        description: " adipisicing elit. Debitis quam aut minus repudiandae soluta maiores quas eligendi fugiat et sit cupiditate numquam, neque dolore perferendis eius natus non, nemo rerum.",
        thumb_url: "https://i.pinimg.com/236x/79/e0/b6/79e0b6a03217628bfa38a9dba189d7b5.jpg",
        input_message_content:{
            message_text: "consectetur adipisicing elit. Debitis quam aut minus repudiandae soluta maiores quas eligendi fugiat et sit cupiditate numquam, neque dolore perferendis eius natus non, nemo rerum."
        }
    },
    {
        type:'article',
        id: 3,
        title: "Lorem ipsum dolor ",
        description: " sit amet consectetur elit. Debitis quam aut minus repudiandae soluta maiores quas eligendi fugiat et sit cupiditate numquam, neque dolore perferendis eius natus non, nemo rerum.",
        thumb_url: "https://i.pinimg.com/564x/ca/94/e8/ca94e86597adb583fc6bd52bc93f9ee6.jpg",
        input_message_content:{
            message_text: " ipsum dolor sit amet consectetur elit. Debitis quam aut minus repudiandae soluta maiores quas eligendi fugiat et sit cupiditate numquam, neque dolore perferendis eius natus non, nemo rerum."
        }
    },
    
]
bot.on('inline_query',query =>{
    let results = resultsData.filter(r => {
        return r.title.indexOf(query.query) !==-1 || r.description.indexOf(query.query) !==-1
    })
    bot.answerInlineQuery(query.id,results,{
        cache_time: 0,
    })
})




