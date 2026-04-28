import { transactions } from './storage.js';

export let stats = {
    totalIncome: 0,
    totalExpense: 0,
    balance: 0,
    incomePercent: 0,
    expensePercent: 0,
    byCategory: {}
};

export function calculateStats() {
    stats.totalIncome = 0;
    stats.totalExpense = 0;
    stats.byCategory = {};

    transactions.forEach(item => {
        const sum = Number(item.sum);

        if (item.transactionType === 'income') {
            stats.totalIncome += sum;
        } else if (item.transactionType === 'expense') {
            stats.totalExpense += sum;
        }

        if (!stats.byCategory[item.categoriesType]) {
            stats.byCategory[item.categoriesType] = 0;
        }
        
        stats.byCategory[item.categoriesType] += sum;
    });

    stats.balance = stats.totalIncome - stats.totalExpense;
    const total = stats.totalIncome + stats.totalExpense;

    if (total > 0) {
        stats.incomePercent = Math.round((stats.totalIncome / total) * 100);
        stats.expensePercent = Math.round((stats.totalExpense / total) * 100);
    } else {
        stats.incomePercent = 0;
        stats.expensePercent = 0;
    }
};