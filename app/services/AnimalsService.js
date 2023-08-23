import { AppState } from "../AppState.js";


class AnimalsService{
    collectingMoney(){
        AppState.totalMoney+=0.25
        console.log(AppState.totalMoney);
    }

}

export const animalsService = new AnimalsService()