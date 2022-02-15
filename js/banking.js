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

document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue('deposit-input');

    updateTotalField('deposit-total', depositAmount)


    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input')

   updateTotalField('withdraw-total', withdrawAmount)

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
})