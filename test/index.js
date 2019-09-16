var assert = require("assert");
var logic = require("../logic");
var requests = require("../requests");

describe("Application Logic", function() {
  describe("Faulty user Id", function() {
    before(function() {
      this.badUserId = "1234567";
      this.badConversationID = "123098";
    });

    it("should fail when userId is not passed", function(done) {
      logic.startConversation().catch(err => {
        assert.equal(err.response.status, 500);
        done();
      });
    });

    it("should fail when wrong userId is passed", function(done) {
      logic.startConversation(this.badUserId).catch(err => {
        assert.equal(err.response.status, 400);
        done();
      });
    });

    it("should fail to get messages from chatbot", function(done) {
      requests.getMessages(this.badConversationID).catch(err => {
        assert.equal(err.response.status, 404);
        done();
      });
    });
  });

  describe("Correct User Id", function() {
    before(function(done) {
      const user = {
        name: "Caleb Mbakwe",
        email: "caleboau2012@gmail.com"
      };
      requests.register(user).then(user => {
        this.userId = user.user_id;
        done();
      });
    });

    it("should not fail when correct userId is passed", function(done) {
      requests.startConversation(this.userId).then(response => {
        this.conversationId = response.conversation_id;
        assert.equal(isNaN(response.conversation_id), false);
        done();
      });
    });

    it("should successfully get messages from chatbot", function(done) {
      requests.getMessages(this.conversationId).then(response => {
        assert.equal(response.messages.length, 2);
        done();
      });
    });
  });
});
