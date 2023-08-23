import { AppState } from "../AppState.js"
import { animalsService } from "../services/AnimalsService.js"
import { setHTML } from "../utils/Writer.js"






export class VendingController{
    constructor(){
        console.log('time to party')
        this.drawAnimalList()
        this.drawMoney()
    }

    drawAnimalList(){
        const animals = AppState.animals
        let listContent = ''
        animals.forEach(a => listContent += a.ListTemplate)
        setHTML('animal-list', listContent)
    }

    makingMoney(){
        // console.log('making money')
        animalsService.collectingMoney()
    }

    drawMoney(){
        AppState.totalMoney
        setHTML('money-list')
    }








}