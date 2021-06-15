import * as mocha from 'mocha';
import * as chai from 'chai';
import * as UUID from 'uuid'
import { BMIEndpoints } from './bmi'
const expect = chai.expect;
var mongoose = require('mongoose');

let testModel: BMIEndpoints = new BMIEndpoints();

let data = [{
	"Gender": "Male",
	"HeightCm": 171,
	"WeightKg": 96
}, {
	"Gender": "Male",
	"HeightCm": 161,
	"WeightKg": 85
}, {
	"Gender": "Male",
	"HeightCm": 180,
	"WeightKg": 77
}, {
	"Gender": "Female",
	"HeightCm": 166,
	"WeightKg": 62
}, {
	"Gender": "Female",
	"HeightCm": 150,
	"WeightKg": 70
}, {
	"Gender": "Female",
	"HeightCm": 167,
	"WeightKg": 82
}]
describe('controller cases', function () {

    before(async function () {
        console.log("******BEGIN Tests*******");

    });

    after(async function () {
        console.log("******END Tests*******");
    });

    it('Connect', function (done) {
        this.timeout(0);
        const uri = "mongodb+srv://rameshbishwas:Ramesh7250607210@projectcluster-svwva.mongodb.net/mydb?retryWrites=ture";
        mongoose.connect(uri, { useNewUrlParser: true, }).then(async () => {
            console.log("conected")
            done();
        }).catch((err: any) => {
            console.log(err);
            done(err);

        });
    });


    it('bmi data', function (done) {
        this.timeout(0);
        let promise = testModel.BMICalculate(data)
        promise.then((t) => {
            console.log(t);
            
            done();
        })
            .catch(err => {
                done(err);
            });
    });
});
