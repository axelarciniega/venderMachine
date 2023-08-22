import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"





export class VendingController{
    constructor(){
        console.log('time to party')
    }

    drawAnimalList(){
        const animals = AppState.animals
        let listContent = ''
        animals.forEach(a => listContent += a.ListTemplate)
        setHTML('animal-list', listContent)
    }











}