const { NlpManager } = require('node-nlp');
const readline = require('readline');

const manager = new NlpManager({ languages: ['en'], forceNER: true });

// Training data for NLP
manager.addDocument( 'en', 'goodbye for now', 'greetings.bye');
manager.addDocument( 'en', 'bye bye take care', 'greetings.bye');
manager.addDocument( 'en', 'okay see you later', 'greetings.bye');
manager.addDocument( 'en', 'bye for now', 'greetings.bye');
manager.addDocument( 'en', 'i must go', 'greetings.bye');
manager.addDocument( 'en', 'hello', 'greetings.hello');
manager.addDocument( 'en', 'hi', 'greetings.hello');
manager.addDocument( 'en', 'howdy', 'greetings.hello');
manager.addDocument( 'en', 'how are you?', 'greetings.how_are_you');
manager.addDocument( 'en', 'what\'s up?', 'greetings.how_are_you');
manager.addDocument( 'en', 'good morning', 'greetings.good_morning');
manager.addDocument( 'en', 'good afternoon', 'greetings.good_afternoon');
manager.addDocument( 'en', 'good evening', 'greetings.good_evening');
manager.addDocument( 'en', 'how\'s your day going?', 'greetings.how_day_going');
manager.addDocument( 'en', 'what\'s new?', 'greetings.whats_new');
manager.addDocument( 'en', 'how was your weekend?', 'greetings.how_weekend');
manager.addDocument( 'en', 'what are you doing?', 'greetings.what_doing');
manager.addDocument( 'en', 'nice to meet you', 'greetings.nice_to_meet_you');
manager.addDocument( 'en', 'how\'s everything?', 'greetings.how_everything');
manager.addDocument( 'en', 'long time no see', 'greetings.long_time_no_see');
manager.addDocument( 'en', 'what have you been up to?', 'greetings.what_up_to' );
manager.addDocument( 'en', 'What is programming?', 'programming.intro');
manager.addDocument( 'en', 'Can you explain programming?', 'programming.intro');
manager.addDocument( 'en', 'Tell me about programming', 'programming.intro');
manager.addDocument( 'en', 'What is JavaScript?', 'programming.language');
manager.addDocument( 'en', 'Tell me about Python', 'programming.language');
manager.addDocument( 'en', 'Explain Java to me', 'programming.language');
manager.addDocument( 'en', 'What is HTML?', 'programming.language');
manager.addDocument( 'en', 'What is CSS?', 'programming.language' );
manager.addDocument( 'en', 'I love you', 'love.express');
manager.addDocument( 'en', 'I have feelings for you', 'love.express');
manager.addDocument( 'en', 'You mean everything to me', 'love.express');
manager.addDocument( 'en', 'You are my everything', 'love.express');
manager.addDocument( 'en', 'You make me happy', 'love.compliment');
manager.addDocument( 'en', 'You are beautiful', 'love.compliment');
manager.addDocument( 'en', 'You are amazing', 'love.compliment');
manager.addDocument( 'en', 'You are perfect', 'love.compliment');
manager.addDocument( 'en', 'I cherish our moments together', 'love.compliment');
manager.addDocument( 'en', 'I appreciate you', 'love.compliment' );
manager.addDocument( 'en', 'I miss you', 'love.miss' );
manager.addDocument( 'en', 'who are you', 'agent.identity' );
manager.addDocument( 'en', 'what is your name', 'agent.identity' );
manager.addDocument( 'en', 'what can you do', 'agent.introduction' );
manager.addDocument( 'en', 'what are your abilities', 'agent.introduction' );
manager.addDocument( 'en', 'what are you', 'agent.introduction' );
manager.addDocument( 'en', 'what do you do', 'agent.introduction' );
manager.addDocument( 'en', 'what are you capable of', 'agent.introduction' );
manager.addDocument( 'en', 'what are your skills', 'agent.introduction' );
manager.addDocument( 'en', 'what do you know', 'agent.introduction' );
manager.addDocument( 'en', 'what information do you have', 'agent.introduction' );
manager.addDocument( 'en', 'what are you made of', 'agent.introduction' );
manager.addDocument( 'en', 'what are you made from', 'agent.introduction' );
manager.addDocument( 'en', 'who created you', 'agent.creator' );
manager.addDocument( 'en', 'who made you', 'agent.creator' );
manager.addDocument( 'en', 'who is your creator', 'agent.creator' );
manager.addDocument( 'en', 'who is your developer', 'agent.creator' );
manager.addDocument( 'en', 'who is your designer', 'agent.creator' );
manager.addDocument( 'en', 'who is your programmer', 'agent.creator' );
manager.addDocument( 'en', 'who is your master', 'agent.creator' );
manager.addDocument( 'en', 'who is your father', 'agent.creator' );
manager.addDocument( 'en', 'who is your maker', 'agent.creator' );
manager.addDocument( 'en', 'who is your architect', 'agent.creator' );
manager.addDocument( 'en', 'what is love', 'love.definition' );
manager.addDocument( 'en', 'define love', 'love.definition' );
manager.addDocument( 'en', 'what does love mean', 'love.definition' );
manager.addDocument( 'en', 'what is the meaning of love', 'love.definition' );
manager.addDocument( 'en', 'what is the definition of love', 'love.definition' );
manager.addDocument( 'en', 'hahaha', 'greetings.laugh' );
manager.addDocument( 'en', 'haha', 'greetings.laugh' );
manager.addDocument( 'en', 'lol', 'greetings.laugh' );
manager.addDocument( 'en', 'hehe', 'greetings.laugh' );
manager.addDocument( 'en', 'hehehe', 'greetings.laugh' );
manager.addDocument( 'en', 'hehehehe', 'greetings.laugh' );
manager.addDocument( 'en', 'hehehehehe', 'greetings.laugh' );
manager.addDocument( 'en', 'hehehehehehe', 'greetings.laugh' );
manager.addDocument( 'en', 'can you give me some advice?', 'advice');
manager.addDocument( 'en', 'what should I do?', 'advice');
manager.addDocument( 'en', 'I need your advice', 'advice');
manager.addDocument( 'en', 'help me out', 'advice');
manager.addDocument( 'en', 'give me some tips', 'advice' );
manager.addDocument( 'en', 'tell me something interesting', 'interesting' );
manager.addDocument( 'en', 'what is matter', 'interesting' );
manager.addDocument( 'en', 'tell me a fun fact', 'interesting' );
manager.addDocument( 'en', 'tell me a joke', 'joke' );
manager.addDocument( 'en', 'tell me something cool', 'interesting' );
manager.addDocument( 'en', 'tell me something fascinating', 'joke' );






// Responses for NLP
manager.addAnswer( 'en', 'greetings.bye', 'Till next time');
manager.addAnswer( 'en', 'greetings.bye', 'see you soon!');
manager.addAnswer( 'en', 'greetings.hello', 'Hey there!');
manager.addAnswer( 'en', 'greetings.hello', 'Greetings!');
manager.addAnswer( 'en', 'greetings.how_are_you', 'I\'m doing well, thank you for asking!');
manager.addAnswer( 'en', 'greetings.good_morning', 'Good morning! Have a great day!');
manager.addAnswer( 'en', 'greetings.good_afternoon', 'Good afternoon! How can I assist you today?');
manager.addAnswer( 'en', 'greetings.good_evening', 'Good evening! How was your day?');
manager.addAnswer( 'en', 'greetings.how_day_going', 'It\'s going well, thanks! How about yours?');
manager.addAnswer( 'en', 'greetings.whats_new', 'Not much, just enjoying the day.');
manager.addAnswer( 'en', 'greetings.how_weekend', 'It was great, thanks for asking!');
manager.addAnswer( 'en', 'greetings.what_doing', 'Just here, ready to assist you.');
manager.addAnswer( 'en', 'greetings.nice_to_meet_you', 'Nice to meet you too!');
manager.addAnswer( 'en', 'greetings.how_everything', 'Everything is going smoothly.');
manager.addAnswer( 'en', 'greetings.long_time_no_see', 'Yes, it has been a while!');
manager.addAnswer( 'en', 'greetings.what_up_to', 'Not much, just keeping busy.' );
manager.addAnswer( 'en', 'programming.intro', 'Programming is the process of creating instructions that a computer can execute.');
manager.addAnswer( 'en', 'programming.intro', 'Programming involves writing code to solve problems and perform tasks.');
manager.addAnswer( 'en', 'programming.language', 'JavaScript is a popular programming language used for web development.');
manager.addAnswer( 'en', 'programming.language', 'Python is a versatile programming language known for its simplicity and readability.');
manager.addAnswer( 'en', 'programming.language', 'Java is a widely-used programming language known for its portability and security features.');
manager.addAnswer( 'en', 'programming.language', 'HTML is a markup language used for creating web pages.');
manager.addAnswer( 'en', 'programming.language', 'CSS is a style sheet language used for styling web pages.' );
manager.addAnswer( 'en', 'love.express', 'I love you too!');
manager.addAnswer( 'en', 'love.express', 'You have a special place in my heart.');
manager.addAnswer( 'en', 'love.express', 'I feel the same way about you.');
manager.addAnswer( 'en', 'love.compliment', 'Thank you, you make me happy too.');
manager.addAnswer( 'en', 'love.compliment', 'You are so sweet!');
manager.addAnswer( 'en', 'love.compliment', 'You always know how to make me smile.');
manager.addAnswer( 'en', 'love.compliment', 'You are perfect to me.');
manager.addAnswer( 'en', 'love.compliment', `I'm grateful to have you in my life.` );
manager.addAnswer( 'en', 'love.miss', 'I miss you too!' );
manager.addAnswer( 'en', 'agent.identity', 'I am a chatbot named "Siao" designed to assist you.' );
manager.addAnswer( 'en', 'agent.identity', '"Siao" here to help you.' );
manager.addAnswer( 'en', 'agent.introduction', 'I can provide information, answer questions, and chat with you.' );
manager.addAnswer( 'en', 'agent.introduction', 'I am capable of answering questions and engaging in conversation.' );
manager.addAnswer( 'en', 'agent.introduction', 'I am a chatbot designed to assist you with various tasks.' );
manager.addAnswer( 'en', 'agent.introduction', 'I am here to help you with any questions or tasks you may have.' );
manager.addAnswer( 'en', 'agent.introduction', 'I am a virtual assistant that can help you with a variety of tasks.' );
manager.addAnswer( 'en', 'agent.introduction', 'I am a chatbot named "Siao" designed to provide information and answer questions.' );
manager.addAnswer( 'en', 'agent.introduction', 'I am here to assist you with any questions or tasks you may have.' );
manager.addAnswer( 'en', 'agent.introduction', 'I am a virtual assistant named "Siao" to help you with any questions or tasks.' );
manager.addAnswer( 'en', 'agent.introduction', 'I am a chatbot named "Siao" designed to provide information and assistance.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik a web and mobile app developer.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik a software developer.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik a programmer.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik a software engineer.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik a web developer.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik a full-stack developer.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik a front-end developer.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik a back-end developer.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik a software architect.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik a software designer.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik a 3rd year student.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik an Information Technology student.' );
manager.addAnswer( 'en', 'agent.creator', 'I was created by Marvin Quillo Saik a Software Development student.' );
manager.addAnswer( 'en', 'love.definition', 'Love is a complex set of emotions, behaviors, and beliefs associated with strong feelings of affection, protectiveness, warmth, and respect for another person.' );
manager.addAnswer( 'en', 'love.definition', 'Love is a deep, tender, ineffable feeling of affection and solicitude toward a person.' );
manager.addAnswer( 'en', 'love.definition', 'Love is a feeling of warm personal attachment or deep affection, as for a parent, child, or friend.' );
manager.addAnswer( 'en', 'love.definition', 'Love is an intense feeling of deep affection.' );
manager.addAnswer( 'en', 'love.definition', 'Love is a strong positive emotion of regard and affection.' );
manager.addAnswer( 'en', 'greetings.laugh', 'I\'m glad I could make you laugh!' );
manager.addAnswer( 'en', 'greetings.laugh', 'I love to make people laugh!' );
manager.addAnswer( 'en', 'greetings.laugh', 'Laughter is the best medicine!' );
manager.addAnswer( 'en', 'greetings.laugh', 'I\'m here to bring joy to your day!' );
manager.addAnswer( 'en', 'greetings.laugh', 'I\'m glad you found that funny!' );
manager.addAnswer( 'en', 'advice', 'Sure, what do you need advice on?');
manager.addAnswer( 'en', 'advice', 'I\'m here to help. What\'s on your mind?');
manager.addAnswer( 'en', 'advice', 'Of course, feel free to ask me anything.' );
manager.addAnswer( 'en', 'advice', 'Everything happens for a reason' );
manager.addAnswer( 'en', 'advice', 'I\'m happy to offer some advice. What\'s the matter?');
manager.addAnswer( 'en', 'advice', 'Sure thing! Just let me know what you need advice on.' );
manager.addAnswer( 'en', 'advice', 'Trust your instincts.');
manager.addAnswer( 'en', 'advice', 'Take one step at a time.');
manager.addAnswer( 'en', 'advice', 'Stay positive and keep moving forward.');
manager.addAnswer( 'en', 'advice', 'Listen to your heart.');
manager.addAnswer( 'en', 'advice', 'Don\'t be afraid to ask for help when you need it.');
manager.addAnswer( 'en', 'advice', 'Focus on what you can control.');
manager.addAnswer( 'en', 'advice', 'Believe in yourself.');
manager.addAnswer( 'en', 'advice', 'Embrace change and see it as an opportunity for growth.');
manager.addAnswer( 'en', 'advice', 'Learn from your mistakes and keep improving.');
manager.addAnswer( 'en', 'advice', 'Stay patient and persistent; good things take time.' );
manager.addAnswer( 'en', 'advice', 'Trust your instincts and follow your heart.');
manager.addAnswer( 'en', 'advice', 'Take one step at a time and don\'t overwhelm yourself.');
manager.addAnswer( 'en', 'advice', 'Always be kind to yourself and others.');
manager.addAnswer( 'en', 'advice', 'Learn from your mistakes; they are opportunities for growth.');
manager.addAnswer( 'en', 'advice', 'Stay true to your values, even when it\'s difficult.');
manager.addAnswer( 'en', 'advice', 'Believe in yourself, even when others doubt you.');
manager.addAnswer( 'en', 'advice', 'Focus on what you can control and let go of what you can\'t.');
manager.addAnswer( 'en', 'advice', 'Embrace change; it leads to new opportunities and growth.');
manager.addAnswer( 'en', 'advice', 'Practice gratitude daily; it shifts your perspective.');
manager.addAnswer( 'en', 'advice', 'Don\'t be afraid to ask for help when you need it.');
manager.addAnswer( 'en', 'interesting', 'Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!' );
manager.addAnswer( 'en', 'interesting', 'The shortest war in history lasted only 38 minutes! It was between Britain and Zanzibar on August 27, 1896.' );
manager.addAnswer( 'en', 'interesting', 'The Eiffel Tower can be 15 cm taller during the summer, due to the expansion of the iron on hot days.' );
manager.addAnswer( 'en', 'interesting', 'The first oranges weren’t orange! The original oranges from Southeast Asia were a tangerine-pomelo hybrid, and they were actually green.' );
manager.addAnswer( 'en', 'interesting', 'The unicorn is the national animal of Scotland.' );
manager.addAnswer( 'en', 'interesting', 'The first computer virus was created in 1983 and was called the Elk Cloner.' );
manager.addAnswer( 'en', 'interesting', 'The first email was sent by Ray Tomlinson to himself in 1971.' );
manager.addAnswer( 'en', 'interesting', 'The first domain name ever registered was Symbolics.com.' );
manager.addAnswer( 'en', 'interesting', 'The first website was created at CERN by Tim Berners-Lee on August 6, 1991.' );
manager.addAnswer( 'en', 'interesting', 'The first webcam was created at the University Of Cambridge to monitor the Trojan coffee pot.' );
manager.addAnswer( 'en', 'interesting', 'The first text message was sent in 1992.' );
manager.addAnswer( 'en', 'interesting', 'The first mobile phone call was made by Martin Cooper in 1973.' );
manager.addAnswer( 'en', 'interesting', 'The first SMS was sent in 1992.' );
manager.addAnswer( 'en', 'interesting', 'The first item sold on eBay was a broken laser pointer.' );
manager.addAnswer( 'en', 'interesting', 'The first YouTube video was uploaded on April 23, 2005.' );
manager.addAnswer( 'en', 'interesting', 'The first tweet was sent by Jack Dorsey on March 21, 2006.' );
manager.addAnswer( 'en', 'interesting', 'Matter is anything that has mass and takes up space.' );
manager.addAnswer( 'en', 'interesting', 'Matter is made up of atoms and molecules.' );
manager.addAnswer( 'en', 'interesting', 'Matter can exist in different states, such as solid, liquid, and gas.' );
manager.addAnswer( 'en', 'interesting', 'Matter is composed of elements, which are made up of atoms.' );
manager.addAnswer( 'en', 'joke', `Why don't scientists trust atoms? Because they make up everything!` );
manager.addAnswer( 'en', 'joke', 'What do you call an alligator in a vest? An investigator!' );
manager.addAnswer( 'en', 'joke', 'Why did the scarecrow win an award? Because he was outstanding in his field!' );
manager.addAnswer( 'en', 'joke', 'What do you call a fake noodle? An impasta!' );
manager.addAnswer( 'en', 'joke', 'Why did the math book look sad? Because it had too many problems!' );







const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function chat() {
  while (true) {
    const userInput = await askUser("User: ");
    if (userInput.toLowerCase() === "bye") {
      const goodbyeMessages = [
        "Till next time!",
        "See you later!",
        "Goodbye for now!",
        "Take care!",
        "Farewell!",
        "Catch you later!",
        "Adios!",
        "Bye-bye!",
        "Until we meet again!",
        "So long!",
        "Goodbye!",
        "Cheerio!"
        ];

        const randomGoodbye = goodbyeMessages[Math.floor(Math.random() * goodbyeMessages.length)];

        console.log("Siao:", randomGoodbye);
      break;
    }
    const nlpResponse = await manager.process('en', userInput);
    if (nlpResponse.answer) {
      console.log("Siao:", nlpResponse.answer);
    } else {
      console.log("Siao: I'm sorry, I didn't understand that.");
    }
  }
  rl.close();
}

function askUser(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, resolve);
  });
}

(async () => {
  await manager.train({}, false); 
  console.log("Siao: Hi there! Type 'bye' to end the conversation.");
  await chat();
})();
