import { AboutController } from "./controllers/AboutController.js";
import { VendingController } from "./controllers/VendingController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";


export const router = [
  {
    path: '',
    controller: HomeController,VendingController,
    view: /*html*/`
    <section class = 'row justify-content-center' id = "animal-list"></section>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]