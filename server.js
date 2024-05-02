import express from "express";
import { Vonage } from "@vonage/server-sdk";

const app = express();
const port = 3000;
app.use(express.json());

const obj = {
  name: "Taha",
  Age: 23,
  DOB: "2000-10-01",
};

// Example route to trigger OTP sending
app.get("/", async (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
