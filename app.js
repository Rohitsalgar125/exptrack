const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./route/userRoute");
const categoryRouter = require("./route/categoryRoute");
const config = require("./config/config");
const budgetRouter = require("./route/budgetRoute");
const groupRouter = require("./route/groupRoute");

app.use(express.json());
app.use(cors({ origin: "*" }));

mongoose.connect(config.MONGODB_URL, {}).then(() => {
  console.log("mongo connected");
}).catch(err => {
  console.log(err);
})

app.use("/", userRouter);
app.use("/category", categoryRouter);
app.use("/budget", budgetRouter);
app.use("/group", groupRouter);
app.listen(config.PORT, () => {
  console.log(`nodejs running ${config.PORT}`);

})
