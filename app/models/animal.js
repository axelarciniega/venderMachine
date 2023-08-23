

export class Animal{
    constructor(name, price, picture){
        this.name = name
        this.price = price
        this.picture = picture
    }

    get ListTemplate(){
        return `<div class = 'col-4'>
        <h3>${this.name}</h3>
        <h3>${this.price}</h3>
        <img src = "${this.picture}" class = "img"/>
        </div>
        `
    }

    get MoneyTemplate(){
        return `
        <div>
        <p id = "money-list"></p>
        </div>
        `
    }







}