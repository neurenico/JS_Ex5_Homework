function common() {
    const products = [];
    const a = new BankProducts();
    const btnBank = document.querySelector('.bankside__btn');
    const btnCustomer = document.querySelector('.customer__btn');

    function bankAction() {
        a.putOfProduct(products);
    }

    function customerAcrion() {
        a.calculateOfDeposit(products);
    }
    
    btnBank.addEventListener('click', bankAction);
    btnCustomer.addEventListener('click', customerAcrion);

}

class BankProducts {
    constructor(name, percent, capitalizationTerm) {
        this.name = name;
        this.percent = percent;
        this.capitalizationTerm = capitalizationTerm;
    }

    putOfProduct(arr) {
        let name = document.querySelector('.bankside__input-name').value,
        percent = document.querySelector('.bankside__input-percent').value,
        capitalizationTerm = document.querySelector('.bankside__input-capitalization').value;
        arr.push(new BankProducts(name, percent, capitalizationTerm));
        this.contentOfProduct(name, percent, capitalizationTerm);
        return arr;
    }

    contentOfProduct(name, percent, capitalizationTerm) {
        let content = `<p>Name of depodit: ${name}</p><p>Percent of deposit: ${percent} %</p><p>Capitalization term: ${capitalizationTerm} month(s)</p>`;
        let contentForCustomer = `${name}`;
        if (name && percent && capitalizationTerm) {
            this.createProduct(content);
            this.putProductToCustomerList(contentForCustomer);
        } else {
            if (!name) {
                alert('Name of product is empty');
            }
            if (!percent) {
                alert('Base percentage is empty');
            }
            if (!capitalizationTerm) {
                alert('Term of capitalization is empty');
            }
        }
    }

    createProduct(content) {
        let productItem = document.createElement('div');
        let bankList = document.querySelector('.bankside__list');
        productItem.className = 'bankside__item item';
        productItem.innerHTML = content;
        bankList.append(productItem);
    }

    putProductToCustomerList(content) {
        let option = document.createElement('option');
        let customerSelect = document.querySelector('.customer__input-name');
        option.innerHTML = content;
        customerSelect.append(option);
    }

    getInfoOfDeposit() {
        return {
            name: document.querySelector('.customer__input-name').value,
            summ: document.querySelector('.customer__input-summ').value,
            term: document.querySelector('.customer__input-term').value
        };
    }

    calculateOfDeposit(arr) {
        let customerInfo = this.getInfoOfDeposit();
        for (let i = 0; i < arr.length; i++) {
            if (customerInfo.name === arr[i].name) {
                let finalAmount = (customerInfo.summ * Math.pow((1 + (arr[i].percent * arr[i].capitalizationTerm / (100 * 12))), customerInfo.term / arr[i].capitalizationTerm)).toFixed(2);
                let earnedPercent = (finalAmount - customerInfo.summ).toFixed(2);
                if (customerInfo.summ && customerInfo.term) {
                    this.putCustomerProduct(
                        `<p>Name of depodit: ${arr[i].name}</p>
                        <p>Initial deposit amount: ${customerInfo.summ} $</p>
                        <p>Term: ${customerInfo.term} month(s)</p>
                        <p>Earned percent: ${earnedPercent} $</p> 
                        </p>
                        <p>Final amount: ${finalAmount} $</p>`
                    );
                } else {
                    if (!customerInfo.summ) {
                        alert('Your summ is not entered');
                    }
                    if (!customerInfo.term) {
                        alert('Your term is not entered');
                    }
                }
            }
        }
    }

    putCustomerProduct(content) {
        let deposit = document.createElement('div');
        let customerList = document.querySelector('.customer__list');
        deposit.className = 'customer__item item';
        deposit.innerHTML = content;
        customerList.append(deposit);
    }
}

common();









