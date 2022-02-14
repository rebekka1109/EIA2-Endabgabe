var Abschlussarbeit;
(function (Abschlussarbeit) {
    var Ingredient = /** @class */ (function () {
        function Ingredient(_name, _storageSize, _nStorage, _barSize, _nBar, _nUnits, _preperationTime, _barPositionX, _barPositionY, _storagePositionX, _storagePositionY) {
            this.name = _name;
            this.storageSize = _storageSize;
            this.barSize = _barSize;
            this.nUnits = _nUnits;
            this.preperationTime = _preperationTime;
            this.nBar = _nBar;
            this.nStorage = _nStorage;
            this.barPositionX = _barPositionX;
            this.barPositionY = _barPositionY;
            this.storagePositionX = _storagePositionX;
            this.storagePositionY = _storagePositionY;
            console.log(this.storagePositionX);
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
            ingredientLevel.innerHTML = "Füllstand: " + percantageDisplay + "% " + "</br>" + this.nBar + "/" + this.barSize;
            var topIngredient = document.querySelector("#topIngredient");
            topIngredient.addEventListener("click", this.placeTopping);
            this.clicked = true;
        };
        Ingredient.prototype.placeTopping = function () {
            //movePoint = new Vector (this.barPositionX, this.barPositionY);
        };
        Ingredient.prototype.showStorageMenu = function (_event) {
            var storageMenu = document.querySelector("#storageMenu");
            storageMenu.classList.remove("isHidden");
            var x = _event.clientX;
            var y = _event.clientY;
            storageMenu.style.marginLeft = x + 20 + "px";
            storageMenu.style.marginTop = y + -50 + "px";
            var ingredientNameStorage = document.querySelector("#ingredientNameStorage");
            ingredientNameStorage.innerHTML = this.name;
            var percentageDisplayStorage = (this.nStorage / this.storageSize) * 100;
            console.log(percentageDisplayStorage);
            var ingredientLevelStorage = document.querySelector("#ingredientLevelStorage");
            ingredientLevelStorage.innerHTML = "Auf Lager: " + percentageDisplayStorage + "% " + this.nStorage + "/" + this.storageSize;
            var prepareBtn = document.querySelector("#prepare");
            console.log(Abschlussarbeit.employees[0].selected);
            if (this.nStorage == 0 || Abschlussarbeit.employees[0].selected == false) {
                prepareBtn.classList.add("isHidden");
            }
            else if (Abschlussarbeit.employees[0].selected == true) {
                prepareBtn.classList.remove("isHidden");
                prepareBtn.addEventListener("click", this.prepare);
            }
            var orderBtn = document.querySelector("#orderBtn");
            if (this.nStorage == this.storageSize || Abschlussarbeit.employees[0].selected == false) {
                orderBtn.classList.add("isHidden");
            }
            else if (Abschlussarbeit.employees[0].selected == true) {
                orderBtn.classList.remove("isHidden");
            }
            else
                orderBtn.addEventListener("click", this.orderIngredients);
        };
        Ingredient.topIngredient = function () {
        };
        Ingredient.prototype.prepare = function () {
            //movePoint = new Vector (this.storagePositionX, this.storagePositionY);
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
            console.log(this.storagePositionX, this.storagePositionY);
            Abschlussarbeit.employees[0].moveTo(this.storagePositionX, this.storagePositionY, 1 / 50);
            var counter = this.preperationTime;
            var assistenceNum = this.preperationTime;
            console.log(counter, assistenceNum);
            var interval = setInterval(function () {
                console.log(counter);
                counter--;
                progress.style.width = "100px";
                pBar.style.width = (counter / assistenceNum) * 100 + "%";
                if (counter < 0) {
                    clearInterval(interval);
                    Abschlussarbeit.Employee.busy = false;
                    pBar.classList.add("isHidden");
                    progress.classList.add("isHidden");
                    var fillBar = document.createElement("button");
                    fillBar.id = "fillBar";
                    storageMenu.appendChild(fillBar);
                    fillBar.innerText = "Theke füllen";
                    fillBar.addEventListener("click", Ingredient.fillBar);
                }
            }, 1000);
        };
        Ingredient.prototype.orderIngredients = function () {
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
        Ingredient.fillBar = function () {
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