var Abschlussarbeit;
(function (Abschlussarbeit) {
    var Ingredient = /** @class */ (function () {
        function Ingredient(_name, _storageSize, _nStorage, _barSize, _nBar, _nUnits, _preperationTime) {
            this.name = _name;
            this.storageSize = _storageSize;
            this.barSize = _barSize;
            this.nUnits = _nUnits;
            this.preperationTime = _preperationTime;
            this.nBar = _nBar;
            this.nStorage = _nStorage;
        }
        Ingredient.prototype.showBarMenu = function (_event) {
            var barMenu = document.querySelector("#barMenu");
            barMenu.classList.remove("isHidden");
            var x = _event.clientX;
            var y = _event.clientY;
            barMenu.style.marginLeft = x + 20 + "px";
            barMenu.style.marginTop = y + -50 + "px";
            var ingredientName = document.querySelector("#ingredientName");
            ingredientName.innerHTML = this.name;
            var percantageDisplay = (this.nBar / this.barSize) * 100;
            var ingredientLevel = document.querySelector("#ingredientLevel");
            ingredientLevel.innerHTML = "Füllstand: " + percantageDisplay + "% " + this.nBar + "/" + this.barSize;
            var topIngredient = document.querySelector("#topIngredient");
            topIngredient.addEventListener("click", Ingredient.placeTopping);
            this.clicked = true;
        };
        Ingredient.prototype.placeTopping = function () {
        };
        Ingredient.showStorageMenu = function (_event) {
        };
        Ingredient.topIngredient = function () {
        };
        Ingredient.prepare = function () {
        };
        Ingredient.breadArray = ["Yufka", "Döner"];
        Ingredient.mainIngridientArray = ["Normalen", "Hähnchen", "Falafel"];
        Ingredient.ingredientArray = ["Salat", "Tomate", "Zwiebeln", "Mais", "Kraut", "Peperoni"];
        Ingredient.extrasArray = ["extra scharf", "mit Feta"];
        return Ingredient;
    }());
    Abschlussarbeit.Ingredient = Ingredient;
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=Ingrediens.js.map