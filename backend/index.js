const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");
const authRouter = require("./routes/auth");

const app = express();

app.use(
  cookieSession({
    name: "session",
    keys: ["rickAndMorty"],
    maxAge: 24 * 60 * 60 * 100,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRouter);

app.listen("5000", () => {
  console.log("Server is running");
});
