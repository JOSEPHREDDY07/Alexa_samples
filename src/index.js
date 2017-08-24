'use strict';
var Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.  
//Make sure to enclose your value in quotes, like this: var APP_ID = "amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1";
var APP_ID = undefined;

var SKILL_NAME = "BMC Facts";
var GET_FACT_MESSAGE = "Here's your fact: ";
var HELP_MESSAGE = "You can say tell me a Benjamin moore fact, or, you can say exit... What can I help you with?";
var HELP_REPROMPT = "What can I help you with?";
var STOP_MESSAGE = "Goodbye!";

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
var data = [
    "Benjamin Moore Paintsis an American company that produces paint. It is owned by Berkshire Hathaway. Founded in 1883.",
    "The Moore Brothers founded the company in Brooklyn, New York and now It is based in Montvale, New Jersey",
    "Benjamin Moore Paints Ranked 1 in Customer Satisfaction by J.D. Power and Associates in 2011 & 2012.",
    "Regal,Aura,Natura,MoorGard,Ben,Arborcoat,Ultra Spec,Insl-X,Corotech are major products of Benjamin moore paints.",
    "Benjamin Moore produces the highest-quality paints and finishes in the industry, and deliver them to independent retail locations",
    "Today, Benjamin Moore is the 128-year-old company and one of the largest paint makers in North America, with 7 plants, 22 distribution facilities, and roughly 4,000 independent retailers.",
    "Berkshire Hathaway, a company led by billionaire Warren Buffett, acquired Benjamin Moore",
    "Today, Benjamin Moore & Co, a Berkshire Hathaway company, is a high-performing, innovative manufacturer",
    "BENJAMIN MOORE INTRODUCES ULTRA SPEC SCUFF-X AS THE INDUSTRY'S FIRST SCUFF-RESISTANT PAINT",
    "Benjamin Moore Industry Leader Introduces 75 New Colors and First-Ever Soft Touch Matte Finish.",
    "BENJAMIN MOORE REVEALS “SHADOW” AS ITS COLOR OF THE YEAR 2017."
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.  
//=========================================================================================================================================
exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        var factArr = data;
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];
        var speechOutput = GET_FACT_MESSAGE + randomFact;
        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = HELP_MESSAGE;
        var reprompt = HELP_REPROMPT;
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', STOP_MESSAGE);
    }
};
