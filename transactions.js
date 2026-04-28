import { transactions, saveTransactions } from './storage.js';

export function saveTransaction(transactionData) {
    const transaction = {
        id: Date.now(),
        sum: Number(transactionData.sum),
        transactionType: transactionData.transactionType,
        categoriesType: transactionData.categoriesType,
        date: transactionData.date,
        comment: transactionData.comment
    };

    transactions.push(transaction);
    saveTransactions();
}