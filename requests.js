const axios = require("axios");
const BASE_URL =
  "https://us-central1-rival-chatbot-challenge.cloudfunctions.net";

const register = user =>
  axios
    .post(`${BASE_URL}/challenge-register`, user)
    .then(response => response.data);

const startConversation = userId =>
  axios
    .post(`${BASE_URL}/challenge-conversation`, {
      user_id: userId
    })
    .then(response => response.data);

const getMessages = conversationId =>
  axios
    .get(`${BASE_URL}/challenge-behaviour/${conversationId}`)
    .then(response => response.data);

const sendAnswer = (conversationId, answer) =>
  axios
    .post(`${BASE_URL}/challenge-behaviour/${conversationId}`, {
      content: answer
    })
    .then(response => response.data);

module.exports = {
  register,
  startConversation,
  getMessages,
  sendAnswer
};
