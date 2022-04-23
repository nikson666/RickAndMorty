const passport = require("passport");

const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

// google 
const GOOGLE_CLIENT_ID =
  "609075620991-mtttmp5d6u86hiavb50aig44djt1jr97.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

// facebook
const FACEBOOK_CLIENT_ID = "1913899028804039";
const FACEBOOK_CLIENT_SECRET = "015f075d611509e316f617ba14263fe1";
  
passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_CLIENT_ID,
      clientSecret: FACEBOOK_CLIENT_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
