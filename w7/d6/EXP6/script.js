
const bankAmount = 5000; // Initial amount in the account

const vatPercentage = 0.17; // 17%

let expenses = ["+200", "-100", "+146", "+167", "-2900"];

const calculateVAT = (amount) => {
    return amount * vatPercentage;
};

expenses = expenses.map((expense) => {
    const parsedExpense = parseInt(expense);
    if (parsedExpense > 0) {
 
        return `+${parsedExpense + calculateVAT(parsedExpense)}`;
    } else {
        return `${parsedExpense + calculateVAT(parsedExpense)}`;
    }
});

