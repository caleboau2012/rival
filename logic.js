const { prompt } = require("inquirer");
const requests = require("./requests");
const converse = require("./conversation");

/** This triggers the registration process
 *  It prompts the use to enter a name and an email address
 */
const register = () => {
  const questions = [
    {
      type: "input",
      name: "name",
      message: "Enter your full name ..."
    },
    {
      type: "input",
      name: "email",
      message: "Enter email address ..."
    }
  ];

  console.log("starting registration process");
  prompt(questions)
    .then(answers => {
      requests.register(answers).then(user => {
        console.log(user);
        return user;
      });
    })
    .catch(console.error);
};

/** This starts the conversation with the chatbot
 *  Once triggered with a valid userId, the fun begins and doesn't end till the chatbot signals there are no more chats
 *  See flow chat for more details
 *
 * @param {*} userId - user id received from registration
 */
const startConversation = userId => {
  console.log("starting conversation");
  return requests
    .startConversation(userId)
    .then(response => {
      console.log(response);
      converse(response.conversation_id);
    })
    .catch(err => {
      console.log(
        "Failed to start conversation. Something must be off with your userID"
      );
      // returning here so this can be utilised during tests
      return Promise.reject(err);
    });
};

module.exports = {
  register,
  startConversation
};
