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

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');

    updateTotalField('deposit-total', depositAmount)

    updateBalance(depositAmount, true)
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input')

    updateTotalField('withdraw-total', withdrawAmount)

    updateBalance(withdrawAmount, false)
})