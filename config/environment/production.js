// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : process.env.fbClientID, // your App ID
        'clientSecret'    : process.env.fbClientSecret, // your App Secret
        'callbackURL'     : process.env.fbCallbackURL,
        'profileURL'      : process.env.fbProfileURL,
        'profileFields'   : process.env.fbProfileFields // For requesting permissions from Facebook API

    },

    'twitterAuth' : {
        'consumerKey'        : process.env.twitterConsumerKey,
        'consumerSecret'     : process.env.twitterConsumerSecret,
        'callbackURL'        : process.env.twitterCallbackURL
    },

    'googleAuth' : {
        'clientID'         : process.env.googleClientID,
        'clientSecret'     : process.env.googleClientSecret,
        'callbackURL'      : process.env.googleCallbackURL
    }

};
