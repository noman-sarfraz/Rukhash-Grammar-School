require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// connectDB
const connectDB = require("./db/connect");
const authenticateUser = require("./middleware/authentication");

// import routes
const authRoutes = require("./routes/auth.js");
const studentRoutes = require("./routes/students");
const teacherRoutes = require("./routes/teachers");
const adminRoutes = require("./routes/admins");

// error handler
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

const cors = require("cors");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("rukhash api");
});

app.get("/b/ITZH", (req, res) => {
  res.status(200).json({
    status: "True",
    data: {
      timelines: [1, 2, 44, 555, 0, 0],
      masks: ["Are", "Are", "you", "HIGH", "you", "HIGH"],
      action_plan: {
        operation: "FOO",
        sub_operations: {
          Are: "BAR",
          you: "FOX",
          HIGH: "BAR",
        },
      },
    },
  });
});

app.use("/api/v1/", authRoutes);
app.use("/api/v1/students", authenticateUser, studentRoutes); //
app.use("/api/v1/teachers", authenticateUser, teacherRoutes); //
app.use("/api/v1/admins", authenticateUser, adminRoutes); //

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
