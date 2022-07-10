const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
  
passport.serializeUser((user , done) => {
    done(null , user);
})
passport.deserializeUser(function(user, done) {
    done(null, user);
});
  
passport.use(new GoogleStrategy({
    clientID:"507199952697-dl139amkt01mk4jjn7qgvpdh37mtfk67.apps.googleusercontent.com", // Your Credentials here.
    clientSecret:"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", // Your Credentials here.
    callbackURL:"http://localhost:4000/auth/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));