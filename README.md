# Rival Technologies Assessment

## Pre-requisites

- npm
- NodeJS

## Set up instructions

- `cd` to the directory of your choice

- `git clone https://github.com/caleboau2012/rival`

- `cd rival`

- `npm i`

## Usage

If all goes well with the setup, then you are good to go.
You can see the version info on the commandline by entering
`node index.js --version`.

Alternatively, if you give the index.js file executable permissions then you can skip the node command. Here's how:

- `chmod +x index.js`
- `index.js --version`

You can see a guide of how to use the application by entering
`node index.js --help`

You will find that you need to firstly register and then chat using the given userId.
That is

- `node index.js register` (you'll be given a userid)
- `node index.js start <userId>` (enter the given userid)

Chat away...

## Tests

Some small tests have been written to give an idea of how this solution can be tested. Run the tests with `npm test`

## TODO

- **Increase test coverage:** Not all functions and behaviours have been tested in the given test suite. This needs to change.
- **Mocks and Stubs:** To write more tests, it would be beneficial to mock or stub the inquirer (prompt) and the http calls
- **Break solution up into smaller components:** There are intertwined dependencies that should be decoupled in this solution.
- **HTTP2 support:** I observed that the base url provided supports http2. This should be taken advantage of to ensure a persistent connection as this would be helpful in a production environment.

## NOTES

Find more notes here:

https://docs.google.com/document/d/1Zx3Ggn7CPvZWw9-s66RZRzP7fIEX4eGiLSWQ6iDuuSo/edit?usp=sharing
