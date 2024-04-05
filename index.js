// currency convertornn
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.92,
    INR: 74.57,
    GBP: 0.76,
    PKR: 277
};
let UserAnswer = await inquirer.prompt([{
        name: 'convertfrom',
        type: 'list',
        message: 'Select from currency :',
        choices: ['PKR', 'USD', 'EUR', 'GBP', 'INR']
    },
    {
        name: 'convertto',
        type: 'list',
        message: 'Select a currency to which you want to convert ',
        choices: ['PKR', 'USD', 'EUR', 'GBP', 'INR']
    },
    {
        name: 'useramount',
        type: 'number',
        message: 'Kindly enter your amount'
    }]);
let fromAmount = currency[UserAnswer.convertfrom];
let toAmount = currency[UserAnswer.convertto];
let amount = UserAnswer.useramount;
let baseAmount = amount / fromAmount;
let convertedAmount = baseAmount * toAmount;
console.log(convertedAmount);
