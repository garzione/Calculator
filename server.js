const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", function(request,response) {
	console.log(__dirname);
	response.sendFile(__dirname + "/index.html");

});

app.post("/", function(request,response){
	var num1 = Number(request.body.weight);
	var num2 = Number(request.body.height);
	var result = num1 / Math.pow(num2,2);
	response.send("The result is: "+ result);
});


app.listen(3000,function(){
	console.log("Server started on port 3000");
});
