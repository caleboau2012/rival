#!/usr/bin/env node

const program = require("commander");
const package = require("./package");

const { register, startConversation } = require("./logic");

program.version(package.version).description(package.description);

program
  .command("register")
  .alias("r")
  .description("Register a User")
  .action(() => {
    register();
  });

program
  .command("start <userId>")
  .alias("s")
  .description("Start the conversation")
  .action(userId => startConversation(userId));

program.parse(process.argv);
