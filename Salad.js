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
var Endabgabe;
(function (Endabgabe) {
    var Salad = /** @class */ (function (_super) {
        __extends(Salad, _super);
        function Salad() {
            return _super.call(this, "Salat", 100 * Endabgabe.stockFactor, 100 * Endabgabe.stockFactor, 25, 25, 2, 20) || this;
        }
        Salad.showBarMenu = function (_event) {
            var barMenu = document.querySelector("#barMenu");
            barMenu.classList.remove("isHidden");
            var x = _event.clientX;
            var y = _event.clientY;
            barMenu.style.marginLeft = x + 20 + "px";
            barMenu.style.marginTop = y + -50 + "px";
            var ingredientName = document.querySelector("#ingredientName");
            ingredientName.innerHTML = "Salat";
            var percantageDisplay = (this.nBar / this.barSize) * 100;
            console.log(percantageDisplay);
            var ingredientLevel = document.querySelector("#ingredientLevel");
            ingredientLevel.innerHTML = "Füllstand: " + percantageDisplay + "% " + this.nBar + "/" + this.barSize;
            var topIngredient = document.querySelector("#topIngredient");
            topIngredient.addEventListener("click", Salad.placeTopping);
        };
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
            var neededFill = this.barSize - this.nBar;
            var nPreperation = ;
            if (neededFill > this.nStorage) {
                this.nStorage -= this.nStorage;
            }
            else {
                this.nStorage -= neededFill;
            }
            var counter = 20;
            var interval = setInterval(function () {
                console.log(counter);
                counter--;
                progress.style.width = "100px";
                pBar.style.width = (counter / 20) * 100 + "%";
                if (counter < 0) {
                    clearInterval(interval);
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
        Salad.nBar = 25;
        Salad.barSize = 25;
        Salad.nStorage = 100 * Endabgabe.stockFactor;
        Salad.storageSize = 100 * Endabgabe.stockFactor;
        Salad.preperationTime = 20;
        return Salad;
    }(Endabgabe.Ingredient));
    Endabgabe.Salad = Salad;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Salad.js.map