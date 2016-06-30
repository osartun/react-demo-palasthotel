const express = require("express");

const app = express();

app.use("/", express.static(__dirname + "/demo"));

app.listen(5000, () => {
	console.log("Example app listening on port 5000");
});