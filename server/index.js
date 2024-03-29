const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const stripe = require("stripe")(process.env.STRIPE);
const userRouter = require("./routes/user");

const app = express();

//middlewares
app.use(cors());
app.use(bodyParser.json());

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGOURI);
  console.log("db connected");
}

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRouter.router);

app.post("/payments/create", async (req, res) => {
  console.log(req.query.total);
  const amount = req?.query?.total;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(404).send(error);
  }
});

const port = 8080;
app.listen(port, () => {
  console.log(`server started on ${port}`);
});
