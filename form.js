import { transactions } from './storage.js';
import { saveTransaction } from './transactions.js';
import { calculateStats } from './stats.js';
import { createTransactionCard } from './cards.js';
import { calculateBalance } from './balance.js';

export function initTransactionForm() {
    const addTransaction = document.getElementById("addTransaction")

    if (addTransaction){
        addTransaction.addEventListener('submit', (e)=>{
        e.preventDefault();
        const formData = new FormData(addTransaction);
        const sum = formData.get('number');
        const transactionType = formData.get('transactionType');
        const categoryIncome = formData.get('categoryIncome');
        const categoryExpense = formData.get('categoryExpense');
        const categoriesType = transactionType === 'income'
            ? categoryIncome
            : categoryExpense;
        const date = formData.get('date');
        const comment = formData.get('comment');

        saveTransaction({
            sum,
            transactionType, 
            categoriesType,
            date,
            comment
        });

        alert("Транзакция добавлена");
        addTransaction.reset();
        calculateStats(); 
        createTransactionCard(transactions);
        calculateBalance();
        });
    }
}