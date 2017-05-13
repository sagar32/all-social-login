// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '784618161705606', // your App ID
        'clientSecret'    : 'ca8ae059b7d38dc127a8ab8ca3cd85bb', // your App Secret
        'callbackURL'     : 'https://login-using-facebook.herokuapp.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : '3P2h1Cc7Y7G5MGaN8bhePSYiw',
        'consumerSecret'     : 'lH8H1DRzdcu0klJVLJLElSU6JKfZZXOBRDncnYnzCbpVmhLAzu',
        'callbackURL'        : 'https://login-using-facebook.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : 'your-secret-clientID-here',
        'clientSecret'     : 'your-client-secret-here',
        'callbackURL'      : 'https://login-using-facebook.herokuapp.com/auth/google/callback'
    }

};
