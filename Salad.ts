namespace Endabgabe {
    export class Salad extends Ingredient {

        static nBar: number = 25;
        static barSize: number = 25;
        static nStorage: number = 100 * stockFactor;
        static storageSize: number = 100 * stockFactor;
        static preperationTime: number = 20;

                
        constructor() {
            super("Salat", 100 * stockFactor, 100 * stockFactor, 25, 25, 2, 20);
        }

        static showBarMenu(_event: MouseEvent): void {
            let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
            barMenu.classList.remove("isHidden");

            let x: number = _event.clientX;
            let y: number = _event.clientY;

            barMenu.style.marginLeft = x + 20 + "px";
            barMenu.style.marginTop = y + -50 + "px";
        
            let ingredientName: HTMLParagraphElement = document.querySelector("#ingredientName")!;
            ingredientName.innerHTML = "Salat";

            let percantageDisplay: number = (this.nBar / this.barSize) * 100;
            console.log(percantageDisplay);

            let ingredientLevel: HTMLParagraphElement = document.querySelector("#ingredientLevel")!;
            ingredientLevel.innerHTML = "Füllstand: " + percantageDisplay + "% " + this.nBar + "/" + this.barSize;

            let topIngredient: HTMLButtonElement = document.querySelector("#topIngredient")!;
            topIngredient.addEventListener("click", Salad.placeTopping);
        }

        static showStorageMenu(_event: MouseEvent): void {
            let storageMenu: HTMLDivElement = document.querySelector("#storageMenu")!;
            storageMenu.classList.remove("isHidden");

            let x: number = _event.clientX;
            let y: number = _event.clientY;

            storageMenu.style.marginLeft = x + 20 + "px";
            storageMenu.style.marginTop = y + -50 + "px";

            let ingredientNameStorage: HTMLParagraphElement = document.querySelector("#ingredientNameStorage")!;
            ingredientNameStorage.innerHTML = "Salat";

            let percentageDisplayStorage: number = (this.nStorage / this.storageSize) * 100;
            console.log(percentageDisplayStorage);

            let ingredientLevelStorage: HTMLParagraphElement = document.querySelector("#ingredientLevelStorage")!;
            ingredientLevelStorage.innerHTML = "Auf Lager: " + percentageDisplayStorage + "% " + this.nStorage + "/" + this.storageSize;

            let prepareBtn: HTMLButtonElement = document.querySelector("#prepare")!;
            if (this.nStorage == 0) {
                prepareBtn.classList.add("isHidden");
            }
            prepareBtn.addEventListener("click", Salad.prepare);
        }

        static placeTopping(): void {

        }
        
        static prepare(): void {

            let storageMenu: HTMLDivElement = document.querySelector("#storageMenu")!;
            let prepareBtn: HTMLButtonElement = document.querySelector("#prepare")!;
            prepareBtn.classList.add("isHidden");

            let progress: HTMLDivElement = document.createElement("div");
            progress.id = "progress";
            storageMenu.appendChild(progress);

            let pBar: HTMLDivElement = document.createElement("div");
            pBar.id = "pBar";
            progress.appendChild(pBar); 

            let neededFill: number = this.barSize - this.nBar;
            let nPreperation: number = 

            if (neededFill > this.nStorage) {
                this.nStorage -= this.nStorage;
            } else {
                this.nStorage -= neededFill;
            }
            
            let counter: number = 20;

            const interval: number = setInterval(function(): void {
                console.log(counter);
                counter--;

                progress.style.width = "100px";
                pBar.style.width = (counter / 20) * 100 + "%";

                if (counter < 0) {
                    clearInterval(interval);

                    pBar.classList.add("isHidden");
                    progress.classList.add("isHidden");
                    let fillBar: HTMLButtonElement = document.createElement("button");
                    fillBar.id = "fillBar";
                    storageMenu.appendChild(fillBar);
                    fillBar.innerText = "Theke füllen";
                    fillBar.addEventListener("click", Salad.fillBar);
                
                }
            },                                   1000);          

        }

        static fillBar(): void {
            

        }
    }    
}