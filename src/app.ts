const Express = require("express");
const app = Express();
const dotenv = require("dotenv");
dotenv.config();
const router = require("./router/bmi");
import * as mongoose from 'mongoose';
app.use('/', router)
const uri = "mongodb+srv://rameshbishwas:Ramesh7250607210@projectcluster-svwva.mongodb.net/mydb?retryWrites=ture";

mongoose.connect(uri, {useNewUrlParser: true,}).then(async () => {
    console.log("conected");
}).catch((e) => {
    console.log(e); 
});


const port = 3000;

app.listen(port, () => console.log(`server started on port ${port}`))

module.exports = app