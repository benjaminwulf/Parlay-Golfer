// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '720066388330070', // your App ID
        'clientSecret'    : 'f4eb6cb9c66ad22536e3c3e7261ecafb', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields'   : ['id', 'email', 'name'] // For requesting permissions from Facebook API

    },

    'twitterAuth' : {
        'consumerKey'        : 'AbpnUPWSkUB4Bxt10y3Q4Ubz4',
        'consumerSecret'     : 'lDZeZ0T8Ks87cYGxoGXOzTRKdpjV27jFj0gf0HOGRLA8m3kPCx',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '329869566323-8oabr1493jedkajusfpo99360k8bearu.apps.googleusercontent.com',
        'clientSecret'     : 'ihQYEkYlUN4YT5tInsjiY9T5',
        'callbackURL'      : 'http://localhost:8080/auth/google/callback'
    }

};
