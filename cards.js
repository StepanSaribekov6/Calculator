export function createTransactionCard(data){
        const container = document.getElementsByClassName("container");
        
        if(!container[0]) return;

        container[0].innerHTML = '';

        data.forEach(element => {
            const typeClass = element.transactionType === 'income'
            ? 'income'
            : 'expense';

            container[0].innerHTML += `
                 <div class="card ${typeClass}">
                    <p>Сумма транзакции: ${element.sum}</p>
                    <p>Дата транзакции: ${element.date}</p>
                    <p>Категория транзакции: ${element.categoriesType}</p>
                    <p>Тип транзакции: ${element.transactionType}</p>
                    <p>Комментарий: ${element.comment}</p>
                </div>
                `;
        });
}