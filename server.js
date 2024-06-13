const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const Pizza = require("./models/pizzaModel");
const Quiz = require("./models/quizModel");
const Schoolcode = require("./models/schoolcodeModel");
const Subject = require("./models/studentModel");
const Difficulty = require("./models/difficultyModel");
const Classs = require("./models/classsModel");
const db = require("./db");
const cors = require("cors");

const pizzasRoute = require("./routes/pizzasRoute");
const quizsRoute = require("./routes/quizsRoute");
const userRoute = require("./routes/userRoute");
const schoolcodesRoute = require("./routes/schoolcodesRoute");
const subjectsRoute = require("./routes/subjectsRoute");
const difficultysRoute = require("./routes/difficultysRoute");
const classssRoute = require("./routes/classssRoute");

//--------------------------------------------------------------------
var path = require("path");
var logger = require("morgan");
var bodyParser = require("body-parser");
var createError = require("http-errors");
var cookieParser = require("cookie-parser");
//++++++++++++++++++++++++++++++++++++++++++
var indexRouter = require("./routes/index");
//------------------------------------------------------------

const app = express();
app.use(cors());
//------------------------------------------------------------------------------

//++++++++++++++++++++++++++++++++++++++++++
// view engine setup
//++++++++++++++++++++++++++++++++++++++++++
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
//++++++++++++++++++++++++++++++++++++++++++
app.use(logger("dev"));
//app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: false,
//   })
// );

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//++++++++++++++++++++++++++++++++++++++++++

//--------------------------------------------------------------------------------
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);

app.use(express.json());

// Routes
app.use("/api/quizs/", quizsRoute);
app.use("/api/schoolcodes/", schoolcodesRoute);
app.use("/api/subjects", subjectsRoute);
app.use("/api/difficultys", difficultysRoute);
app.use("/api/classss", classssRoute);

app.use("/api/pizzas/", pizzasRoute);

app.use("/api/users/", userRoute);

//----------------------------------------------------------------
app.use("/paybutton", indexRouter);

//++++++++++++++++++++++++++++++++++++++++++
//-----------------------------------------------------------------------------------
if (process.env.NODE_ENV == "production") {
  app.use(express.static(path.resolve(__dirname, "./client", "build")));

  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "./client", "build", "index.html"));
  });
}
//------------------------------------------------------------------------------
// catch 404 and forward to error handler
//++++++++++++++++++++++++++++++++++++++++++
app.use(function (req, res, next) {
  next(createError(404));
});
//++++++++++++++++++++++++++++++++++++++++++
// error handler
//++++++++++++++++++++++++++++++++++++++++++
app.use(function (err, req, res, next) {
  //++++++++++++++++++++++++++++++++++++++++++
  // set locals, only providing error in development
  //++++++++++++++++++++++++++++++++++++++++++
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  //++++++++++++++++++++++++++++++++++++++++++
  // render the error page
  //++++++++++++++++++++++++++++++++++++++++++
  res.status(err.status || 500);
  res.render("error");
});
//-----------------------------------------------------------------

app.get("/", (req, res) => {
  res.send("Server Working " + PORT);
});

// Connection
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server running in port: " + PORT);
});
//----------------------------------------------------------------------------------------------------------------------
/////////////////////////////////////////////////////////////////////////////////////////
// const express = require("express");
// const bodyParser = require("body-parser");
// const dotenv = require("dotenv");
// dotenv.config();
// const db = require("./db");
// const cors = require("cors");

// var path = require("path");
// var logger = require("morgan");
// //var bodyParser = require("body-parser");
// var createError = require("http-errors");
// var cookieParser = require("cookie-parser");

// const pizzasRoute = require("./routes/pizzasRoute");
// const quizsRoute = require("./routes/quizsRoute");
// const userRoute = require("./routes/userRoute");
// const schoolcodesRoute = require("./routes/schoolcodesRoute");
// const indexRouter = require("./routes/index");

// const app = express();
// app.use(cors({ origin: "*" }));

// // Increase limit for file uploads
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
// app.use(express.json());

// // Routes

// app.use("/api/schoolcodes/", schoolcodesRoute);
// app.use("/api/pizzas/", pizzasRoute);
// app.use("/api/quizs/", quizsRoute);
// app.use("/api/users/", userRoute);

// // Additional Route

// app.use("/paybutton", indexRouter);

// app.use(express.static(path.join(__dirname, "./client", "build")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "./client", "build", "index.html"));
// });

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log("Server running on port: " + PORT);
// });
