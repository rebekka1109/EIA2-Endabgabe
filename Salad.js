var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Abschlussarbeit;
(function (Abschlussarbeit) {
    var Salad = /** @class */ (function (_super) {
        __extends(Salad, _super);
        function Salad() {
            var _this = _super.call(this, "Salat", 100 * Abschlussarbeit.stockFactor, 100 * Abschlussarbeit.stockFactor, 25, 25, 2, 20) || this;
            Salad.clicked = false;
            return _this;
        }
        /* static showBarMenu(_event: MouseEvent): void {
            let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
            barMenu.classList.remove("isHidden");
            let x: number = _event.clientX;
            let y: number = _event.clientY;
            barMenu.style.marginLeft = x + 20 + "px";
            barMenu.style.marginTop = y + -50 + "px";
        
            let ingredientName: HTMLParagraphElement = document.querySelector("#ingredientName")!;
            ingredientName.innerHTML = "Salat";
            let percantageDisplay: number = (this.nBar / this.barSize) * 100;
            //console.log(percantageDisplay);
            let ingredientLevel: HTMLParagraphElement = document.querySelector("#ingredientLevel")!;
            ingredientLevel.innerHTML = "Füllstand: " + percantageDisplay + "% " + this.nBar + "/" + this.barSize;
            let topIngredient: HTMLButtonElement = document.querySelector("#topIngredient")!;
            topIngredient.addEventListener("click", Salad.placeTopping);
            
            Salad.clicked = true;
            console.log("salat" + this.clicked);
        } */
        Salad.showStorageMenu = function (_event) {
            var storageMenu = document.querySelector("#storageMenu");
            storageMenu.classList.remove("isHidden");
            var x = _event.clientX;
            var y = _event.clientY;
            storageMenu.style.marginLeft = x + 20 + "px";
            storageMenu.style.marginTop = y + -50 + "px";
            var ingredientNameStorage = document.querySelector("#ingredientNameStorage");
            ingredientNameStorage.innerHTML = "Salat";
            var percentageDisplayStorage = (this.nStorage / this.storageSize) * 100;
            console.log(percentageDisplayStorage);
            var ingredientLevelStorage = document.querySelector("#ingredientLevelStorage");
            ingredientLevelStorage.innerHTML = "Auf Lager: " + percentageDisplayStorage + "% " + this.nStorage + "/" + this.storageSize;
            var prepareBtn = document.querySelector("#prepare");
            if (this.nStorage == 0) {
                prepareBtn.classList.add("isHidden");
            }
            prepareBtn.addEventListener("click", Salad.prepare);
            var orderBtn = document.querySelector("#orderBtn");
            if (this.nStorage == this.storageSize) {
                orderBtn.classList.add("isHidden");
            }
            orderBtn.addEventListener("click", Salad.orderIngredients);
        };
        Salad.placeTopping = function () {
        };
        Salad.prepare = function () {
            var storageMenu = document.querySelector("#storageMenu");
            var prepareBtn = document.querySelector("#prepare");
            prepareBtn.classList.add("isHidden");
            var progress = document.createElement("div");
            progress.id = "progress";
            storageMenu.appendChild(progress);
            var pBar = document.createElement("div");
            pBar.id = "pBar";
            progress.appendChild(pBar);
            var neededFillAmount = this.barSize - this.nBar;
            //let nPreperation: number = 
            if (neededFillAmount > this.nStorage) {
                this.nStorage -= this.nStorage;
            }
            else {
                this.nStorage -= neededFillAmount;
            }
            Abschlussarbeit.Employee.busy = true;
            var counter = 20;
            var interval = setInterval(function () {
                console.log(counter);
                counter--;
                progress.style.width = "100px";
                pBar.style.width = (counter / 20) * 100 + "%";
                if (counter < 0) {
                    clearInterval(interval);
                    Abschlussarbeit.Employee.busy = false;
                    pBar.classList.add("isHidden");
                    progress.classList.add("isHidden");
                    var fillBar = document.createElement("button");
                    fillBar.id = "fillBar";
                    storageMenu.appendChild(fillBar);
                    fillBar.innerText = "Theke füllen";
                    fillBar.addEventListener("click", Salad.fillBar);
                }
            }, 1000);
        };
        Salad.fillBar = function () {
        };
        Salad.orderIngredients = function () {
            var _this = this;
            var storageMenu = document.querySelector("#storageMenu");
            var orderBtn = document.querySelector("#orderBtn");
            orderBtn.classList.add("isHidden");
            var progress = document.createElement("div");
            progress.id = "progress2";
            storageMenu.appendChild(progress);
            var pBar = document.createElement("div");
            pBar.id = "pBar2";
            progress.appendChild(pBar);
            var orderDuration = 50;
            var counter = orderDuration;
            var interval = setInterval(function () {
                //Pfeilfunktion genutzt, da sonst kein Zugriff auf this.XY möglich
                console.log(counter);
                counter--;
                progress.style.width = "100px";
                pBar.style.width = (counter / 50) * 100 + "%";
                if (counter < 0) {
                    clearInterval(interval);
                    pBar.classList.add("isHidden");
                    progress.classList.add("isHidden");
                    _this.nStorage = _this.storageSize;
                }
            }, 1000);
        };
        Salad.nBar = 25;
        Salad.barSize = 25;
        Salad.nStorage = 100 * Abschlussarbeit.stockFactor;
        Salad.storageSize = 100 * Abschlussarbeit.stockFactor;
        Salad.preperationTime = 20;
        return Salad;
    }(Abschlussarbeit.Ingredient));
    Abschlussarbeit.Salad = Salad;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Salad.js.map