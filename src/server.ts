import express from 'express';
import morgan from 'morgan';
import AuthRouter from "./routers/auth.router";
import HealthRouter from "./routers/health.router";
import session from "express-session";
import passport from "passport"
import "./config/auth"
import UserRouter from "./routers/users.router";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON and log requests
app.use(express.json());
app.use(morgan('dev'));
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: "PEOPLE_DEX"
}))
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send('<a href="/auth/google"> Login with google </a>')
})
// Register routes using the imported function
app.use(`/health`, HealthRouter)
app.use(`/auth`, AuthRouter)
app.use(`/users`, UserRouter)

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
