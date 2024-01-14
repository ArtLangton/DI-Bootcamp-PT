let bankAmount = 1000;
const VATPercentage = 17;
const expenses = ["+200", "-100", "+146", "+167", "-2900"];
const calculateVAT = (amount) => {
    const VAT = (amount * VATPercentage) / 100;
    return amount + VAT;
};

const expensesWithVAT = expenses.map((expense) => calculateVAT(parseFloat(expense)));
expensesWithVAT.forEach((expense) => {
    bankAmount += expense;
});


console.log(`Your bank account standing at the end of the month is: ${bankAmount}`);