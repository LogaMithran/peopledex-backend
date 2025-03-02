import passport from "passport";
import GoogleStrategy from "passport-google-oauth2";
import {Request} from "express"

passport
    .use(new GoogleStrategy.Strategy({
            clientID: "76074385460-1i0g7c1g2a3vbpc48qks0408o79d9m7i.apps.googleusercontent.com",
            clientSecret: "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",
            callbackURL: "http://localhost:3000/auth/google/callback",
            passReqToCallback: true
        }, function (request: Request, accessToken: string, refreshToken: string, profile: any, done: any) {
            console.log("access", accessToken)
            console.log("eeee", refreshToken)
            return done(null, profile);
        }
    ));

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user: any, done) {
    done(null, user);
});

