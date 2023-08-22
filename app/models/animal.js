

export class Animal{
    constructor(name, price, picture){
        this.name = name
        this.price = price
        this.picture = picture
    }

    get ListTemplate(){
        return `<p>${this.picture}</p>`
    }







}