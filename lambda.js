'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;

const handlers = {
    'LaunchRequest': function () {
        const welcomeMsg = "Welcome.";
        const reprompt = "I didn't get that. Can you repeat that?";
        this.emit(':ask', welcomeMsg, reprompt);
    },
    'GetNextGameIntent': function () {
        const nextGame = "The next game is on Saturday February 3rd, 2018 at 3:00 PM Pacific against U.S.C. Go bruins!";
        const speechReprompt = "Want to hear the results of the last game? Say tell me about the last game.";
        this.emit(':askWithCard', nextGame, speechReprompt, "UCLA Basketball", nextGame);
    },
    'GetLastGameIntent': function () {
        const lastGame = "The last game was on January 27th against Stanford. UCLA won 89 to 73. Awesome!";
        const speechReprompt = "Want to find out about the next game? Say tell me the next game.";
        this.emit(':askWithCard', lastGame, speechReprompt, "UCLA Basketball", lastGame);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = "How can I help you?";
        this.emit(':ask', speechOutput, speechOutput);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Ok. Goodbye.');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Ok. Goodbye.');
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
