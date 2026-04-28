export let transactions = JSON.parse(localStorage.getItem('transactions')) || [];

export function saveTransactions() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}