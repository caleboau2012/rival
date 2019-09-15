const { prompt } = require("inquirer");
const requests = require("./requests");

/** This fetches messages from the bot to display on the console
 * It tracks the end of the conversations with the bot by searching for text with the words 'Thank you'
 *
 * @param {*} ID - conversationId received when the conversationwas started
 */
const converse = conversationID => {
  return requests
    .getMessages(conversationID)
    .then(response => {
      let finished = false;

      response.messages.map(message => {
        console.log(message.text);

        if (message.text.indexOf("Thank you") !== -1) {
          finished = true;
        }
      });

      // response contain's thankyou?
      if (!finished) {
        requestAnswer(prompt, conversationID);
      }
    })
    .catch(console.error);
};

/** This function sends a user's response to the chatbot.
 *  It is part of the recursive process of message exchange with the chatbot
 *  Prompt and conversationID are sent as parameters so
 *  that these dependency are injected rather than forced on this function
 */
const requestAnswer = (prompt, conversationID) => {
  let question = [
    {
      type: "input",
      name: "answer"
    }
  ];

  prompt(question).then(answers => {
    requests
      .sendAnswer(conversationID, answers.answer)
      .then(response => {
        if (response.correct) converse(conversationID);
        else {
          console.log("Wrong answer");
          requestAnswer(prompt, conversationID);
        }
      })
      .catch(console.error);
  });
};

module.exports = converse;
