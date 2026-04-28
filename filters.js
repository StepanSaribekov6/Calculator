import { transactions } from './storage.js';
import { createTransactionCard } from './cards.js';

export function filterTransactions(filter = 'all'){
    if (filter === 'all'){
        createTransactionCard(transactions);
        return;
    }
    const filteredData =  transactions.filter(item => {
        return item.transactionType === filter 
    });

    createTransactionCard(filteredData);

    }

export function initFilters() {
    const filterType = document.getElementById("filterType");

    if (filterType){
        filterType.addEventListener('change', ()=>{
            console.log(filterType.value);
            filterTransactions(filterType.value)
        });
    }
}