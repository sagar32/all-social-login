// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '784618161705606', // your App ID
        'clientSecret'    : 'ca8ae059b7d38dc127a8ab8ca3cd85bb', // your App Secret
        'callbackURL'     : 'https://login-using-facebook.herokuapp.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'BOG2ZvjwWzAUrAkRjE9B796Hj',
        'consumerSecret'     : 'ok0V9uVhyuW0rrFC71uQKKhcO79qSWJI5bs3qFMOYMYmfPeKPv',
        'callbackURL'        : 'https://login-using-facebook.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '780596204536-4lu9f244j4oo9bmtd9nvm4b4ivq2n242.apps.googleusercontent.com',
        'clientSecret'     : 'Ieb7bXM3eYXz14YkWpKibWPl',
        'callbackURL'      : 'https://login-using-facebook.herokuapp.com/auth/google/callback'
    }

};
