namespace Abschlussarbeit {
    export class Ingredient {
        static breadArray: string[] = ["Yufka", "Döner"];
        static mainIngridientArray: string[] = ["Normalen", "Hähnchen", "Falafel"];
        static ingredientArray: string[] = ["Salat", "Tomate", "Zwiebeln", "Mais", "Kraut", "Peperoni"];
        static extrasArray: string[] = ["extra scharf", "mit Feta"];
        static clicked: boolean;
        static nBar: number;
        static barSize: number;


        public name: string;
        public storageSize: number;
        public nStorage: number;
        public barSize: number;
        public nBar: number;
        public nUnits: number;
        public preperationTime: number;
        public clicked: boolean;
        
        constructor(_name: string, _storageSize: number, _nStorage: number, _barSize: number, _nBar: number, _nUnits: number, _preperationTime: number) {
            this.name = _name;
            this.storageSize = _storageSize;
            this.barSize = _barSize;
            this.nUnits = _nUnits;
            this.preperationTime = _preperationTime;
            this.nBar = _nBar;
            this.nStorage = _nStorage;
        }

        showBarMenu(_event: MouseEvent): void {
            let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
            barMenu.classList.remove("isHidden");

            let x: number = _event.clientX;
            let y: number = _event.clientY;

            barMenu.style.marginLeft = x + 20 + "px";
            barMenu.style.marginTop = y + -50 + "px";
        
            let ingredientName: HTMLParagraphElement = document.querySelector("#ingredientName")!;
            ingredientName.innerHTML = this.name;

            let percantageDisplay: number = (this.nBar / this.barSize) * 100;

            let ingredientLevel: HTMLParagraphElement = document.querySelector("#ingredientLevel")!;
            ingredientLevel.innerHTML = "Füllstand: " + percantageDisplay + "% " + this.nBar + "/" + this.barSize;

            let topIngredient: HTMLButtonElement = document.querySelector("#topIngredient")!;
            topIngredient.addEventListener("click", Ingredient.placeTopping);

            this.clicked = true;
        }

        placeTopping(): void {

        }

        static showStorageMenu(_event: MouseEvent): void {

        }
        
        static topIngredient(): void {
            
        }

        static prepare(): void {

        }
    }

    
}