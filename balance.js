import { transactions } from './storage.js'

export function calculateBalance() {
let balance = 0;

    transactions.forEach(item => {
        const amount = Number(item.sum);

        if (item.transactionType === 'income'){
            balance += amount;
        } else if (item.transactionType === 'expense'){
            balance -= amount; 
        }
    });
    
    const balanceElement = document.getElementById("balance");

    if (balanceElement){
        balanceElement.innerHTML = `Баланс: ${balance}`;
    }
}