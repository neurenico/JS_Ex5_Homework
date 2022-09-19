/* ДЗ 5:
Банк - актор, который может создавать банковские продукты
Пользователь - актор, который может воспользоваться банковским продуктом
Продукт - банковский продукт, олицетворяющий условия по вкладу
Вклад - реализация по отношению к деньгам пользователя, условий на основе выбранного банковского продукта

Нужно написать функционал для банкаа и пользователя.
Банк должен иметь возможность создавать новый банковский продукт(вклад) на основе следующих данных:
    - %-ая ставка
    - срок капитализации вклада(количество месяцев)
Пользователь банка должен иметь возможность воспользоваться банковским продуктом:
    - выбор продукта
    - выбор суммы
    - выбор периода
    доп.условия
    - выбор второго продукта(возможно такого же) с дальнейшим повторением действий

Подсказка 1: Несмотря на то, что ставка и капитализация для продуктов разные, методика расчета одна и та же для всего, это может позволить создать базовый класс/объект продукт, от которого будут наследоваться вклады созданные бухгалтером.
Подсказка 2: Пользователь вызывает функцию с названием вклада, суммой и периодом и получает правильный расчет по этому вкладу. */


/* вопросы:
1) возможно ли создание массива в классе, содержащего объекты с данными о продукте и где наследуемый класс может выполнять определенный функционал в отношении имеющихся данным
2) возможность создания экземпляров класса через функцию и их вывод либо как отдельная переменная со своими аргументами либо в массив
3) вводить данные в класс через вложенную функцию, но при этом повторно не определять переменные там*/

const products = {};

class BankProducts {
    constructor(name, percent, capitalizationTerm, sum, time) {
        this.name = name;
        this.percent = percent;
        this.capitalizationTerm = capitalizationTerm;
        this.sum = sum;
        this.time = time;
    }

    putOfProduct(name, percent, capitalizationTerm) {
        this.name = name;
        this.percent = percent;
        this.capitalizationTerm = capitalizationTerm;

        for (let i = Object.keys(products).length; i <= Object.keys(products).length;) {
            if (!products.i) {
                products[i + 1] = {'Name': name, 'Percent rate': percent, 'Capitalization term': capitalizationTerm};
            } else {
                products[i / 4 + 1] = {'Name': name, 'Percent rate': percent, 'Capitalization term': capitalizationTerm};
            }
            break;
        }
        return products;
    }

    calculationProduct(name, sum, time) {
        this.name = name;
        this.sum = sum;
        this.time = time;

        for (let i = 1; i <= Object.keys(products).length; i++) {
            if (products[i]['Name'] === this.name) {
                return console.log(`Deposit - ${products[i]['Name']}\nPercent of the Deposit was - ` + createProduct.calc(this.sum, this.time, products[i]['Percent rate'], products[i]['Capitalization term']) + `\nThe total amount was - ` + Number(createProduct.calc(this.sum, this.time, products[i]['Percent rate'], products[i]['Capitalization term']) + this.sum));
            }
        }
        return console.log(`You've entered wrong name of deposit`);
    }

    calc(sum, time, percent, capTerm) {
        return (sum * time * percent / (capTerm * 100));
    }
}

const createProduct = new BankProducts();

createProduct.putOfProduct('хуткi', 5, 3);
createProduct.putOfProduct('пачварны', 3, 12);
createProduct.putOfProduct('найтутэйшы', 30, 12);
createProduct.putOfProduct('каугасны', 12, 36);

createProduct.calculationProduct('пачварны', 10000, 12);
createProduct.calculationProduct('каугасны', 10000, 12);
















