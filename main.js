import { transactions } from './storage.js';
import { stats, calculateStats } from './stats.js';
import { createTransactionCard } from './cards.js';
import { calculateBalance } from './balance.js';
import { initFilters } from './filters.js';
import { initTransactionForm } from './form.js';

initTransactionForm();
initFilters();

calculateStats();
console.log(stats);

createTransactionCard(transactions);
calculateBalance();