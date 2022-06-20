const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment } = require('./controller');
const {getFortune} = require("./controller");
const {getQuote} = require("./controller");
const {postQuote} = require("./controller");
const {deleteQuote} = require("./controller");

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.get("/api/quote", getQuote);
app.post("/api/quoteInput", postQuote);
app.delete("/api/quoteDelete", deleteQuote);

app.listen(4000, () => console.log("Server running on 4000"));
