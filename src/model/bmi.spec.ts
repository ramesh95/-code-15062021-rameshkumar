import * as mocha from 'mocha';
import * as chai from 'chai';
import * as UUID from 'uuid'
import { BMIInfoModel } from './bmi'
const expect = chai.expect;
var mongoose = require('mongoose');

let testModel: BMIInfoModel = new BMIInfoModel();
describe('Image test cases', function () {

    before(async function () {
        console.log("******BEGIN Tests*******");

    });

    after(async function () {
        console.log("******END Tests*******");
    });

    it('Connect', function (done) {
        this.timeout(5000);
        const uri = "mongodb+srv://rameshbishwas:Ramesh7250607210@projectcluster-svwva.mongodb.net/mydb?retryWrites=ture";
        mongoose.connect(uri, { useNewUrlParser: true, }).then(async () => {
            console.log("conected")
            done();
        }).catch((err: any) => {
            console.log(err);
            done(err);

        });
    });

    it('define schema', function (done) {
        this.timeout(5000);
        let model = new BMIInfoModel();
        testModel = model;
        let promise = model.defineSchema()
        promise.then(() => {
            done();
        })
            .catch(err => {
                done(err);
            });
    });

    it('Insert Data', function (done) {
        this.timeout(5000);
        let promise = testModel.insertData( "male", "170", "80", 43, "overWeight", "very High");
        promise.then((t) => {
            console.log(t);
            
            done();
        })
            .catch(err => {
                done(err);
            });
    });
});
