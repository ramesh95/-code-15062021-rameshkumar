import { BMIInfoModel } from "../model/bmi"

export class BMIEndpoints {

  public async BMICalculate(
    data: any
  ) {
    try {
      let overweightCount = 0
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let bmi = element.WeightKg/(element.HeightCm /100);
        data[index].bmi = bmi
        let bmiCategory : any
        let healthRisk: any
        if (bmi <18.4) {
          bmiCategory = "Underweight",
          healthRisk = "Malnutrition Risk"
        } else if(bmi >= 18.5 && bmi <= 24.9){
          bmiCategory = "Normal Weight",
          healthRisk = "Low Risk"
        }  else if(bmi >= 25 && bmi <= 29.9){
          bmiCategory = "Overweight",
          healthRisk = "Enhanced Risk",
          overweightCount = overweightCount+1
        } else if(bmi >= 30 && bmi <= 34.9){
          bmiCategory = "Moderately obese",
          healthRisk = "Medium Risk"
        } else if(bmi >= 35 && bmi <= 39.9){
          bmiCategory = "Severely obese",
          healthRisk = "High Risk"
        } else if(bmi > 40){
          bmiCategory = "Very severely obese",
          healthRisk = "Very High Risk"

        }
         data[index].bmiCategory = bmiCategory,
         data[index].healthRisk = healthRisk
         let bmiInfoModel = new BMIInfoModel()
      await bmiInfoModel.defineSchema()
      await bmiInfoModel.insertData(data[index].Gender, data[index].HeightCm, data[index].WeightKg, bmi, bmiCategory, healthRisk)
      }
      return {data, overweightCount}
    } catch (e) {
      throw e;
    }
  }
}
