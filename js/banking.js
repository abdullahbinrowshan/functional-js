function getInputValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const inputAmountText = inputValue.value;
    const inputAmount = parseFloat(inputAmountText);
    inputValue.value = '';

    return inputAmount;
}

function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText)

    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {

    const depositAmount = getInputValue('deposit-input');
    const currentBalance = getCurrentBalance();

    if (depositAmount > 0 && currentBalance < depositAmount) {
        updateTotalField('deposit-total', depositAmount)
        updateBalance(depositAmount, true)
    } else if (depositAmount > currentBalance) {
        console.log('you can not withdraw more than what you have in your account')
    } else if (depositAmount <= 0) {
        console.log('You have to deposit valid money');
    }
})

document.getElementById('withdraw-button').addEventListener('click', function () {

    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance();

    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount)
        updateBalance(withdrawAmount, false)
    } else if (withdrawAmount > currentBalance) {
        console.log('you can not withdraw more than what you have in your account')
    } else if (withdrawAmount <= 0) {
        console.log('You have to withdraw valid money');
    }
})