import { BMIEndpoints } from "../resource/bmi"
import express = require('express')
var bodyParser = require('body-parser');
var app = express();
var router = express.Router()
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
router.post('/bmiCalculate', async (req, res) => {
    try {
        let bmiEndpoints = new BMIEndpoints();
        let results = await bmiEndpoints.BMICalculate(req.body);
        res.send({
            results: results,
            status: 200
        });

    } catch (error) {
        throw error
    }
});
module.exports = router;