var Abschlussarbeit;
(function (Abschlussarbeit) {
    window.addEventListener("load", handleLoad);
    console.log("Start");
    var human = [];
    Abschlussarbeit.employees = [];
    for (var index = 0; index < Abschlussarbeit.employees.length; index++) {
        Abschlussarbeit.anyEmployee = Abschlussarbeit.employees[index];
    }
    Abschlussarbeit.ingredients = [];
    var customers = [];
    var nEmployees;
    var nCustomer;
    var timeCustomer;
    var stockCapacity;
    var background;
    Abschlussarbeit.gametime = 0;
    Abschlussarbeit.movePoint = new Abschlussarbeit.Vector(0, 0);
    function handleLoad(_event) {
        var form = document.querySelector("#form");
        form.addEventListener("change", handleChange);
        var startBtn = document.querySelector("#startBtn");
        startBtn.addEventListener("click", createCanvas);
    }
    function handleChange(_event) {
        stockCapacity = document.querySelector('input[name="stockCapacity"]:checked').value;
        console.log(stockCapacity);
        if (stockCapacity == "high") {
            Abschlussarbeit.stockFactor = 1.2;
        }
        else if (stockCapacity == "low") {
            Abschlussarbeit.stockFactor = 0.8;
        }
        else if (stockCapacity == "medium") {
            Abschlussarbeit.stockFactor = 1.0;
        }
        console.log(Abschlussarbeit.stockFactor);
        nEmployees = Number(document.querySelector("#nEmployees").value);
        timeCustomer = Number(document.querySelector("#nCustomers").value);
        console.log(timeCustomer);
        /* window.setInterval(createCustomer, timeCustomer * 100);
        console.log(nCustomer); */
    }
    function createCanvas() {
        var form = document.getElementById("form");
        form.classList.add("isHidden");
        var mainContainer = document.getElementById("mainContainer");
        mainContainer.classList.remove("isHidden");
        var canvas = document.querySelector("canvas");
        Abschlussarbeit.crc2 = canvas.getContext("2d");
        var barContainer = document.querySelectorAll(".bar");
        for (var _i = 0, barContainer_1 = barContainer; _i < barContainer_1.length; _i++) {
            var i = barContainer_1[_i];
            i.addEventListener("click", callBarMenu);
        }
        var storageContainer = document.querySelectorAll(".storage");
        for (var _a = 0, storageContainer_1 = storageContainer; _a < storageContainer_1.length; _a++) {
            var i = storageContainer_1[_a];
            i.addEventListener("click", callStorageMenu);
        }
        canvas.addEventListener("click", hideMenus);
        canvas.addEventListener("click", detectClick);
        Abschlussarbeit.drawShop();
        background = Abschlussarbeit.crc2.getImageData(0, 0, Abschlussarbeit.crc2.canvas.width, Abschlussarbeit.crc2.canvas.height);
        createEmployees(nEmployees);
        console.log(nEmployees);
        createCustomer(timeCustomer);
        /* let firstCustomer: Customer = new Customer (0);
        customers.push(firstCustomer); */
        // console.log(timeCustomer);
        // window.setInterval(createCustomer, timeCustomer);
        // console.log(nCustomer);
        var salad = new Abschlussarbeit.Ingredient("Salat", 100 * Abschlussarbeit.stockFactor, 100 * Abschlussarbeit.stockFactor, 25, 25, 2, 20, 350, 150, 150, 150);
        var onion = new Abschlussarbeit.Ingredient("Zwiebeln", 70 * Abschlussarbeit.stockFactor, 70 * Abschlussarbeit.stockFactor, 15, 15, 0.5, 30, 350, 180, 150, 180);
        var corn = new Abschlussarbeit.Ingredient("Mais", 1000 * Abschlussarbeit.stockFactor, 1000 * Abschlussarbeit.stockFactor, 300, 300, 30, 5, 350, 210, 150, 210);
        var tomato = new Abschlussarbeit.Ingredient("Tomate", 50 * Abschlussarbeit.stockFactor, 50 * Abschlussarbeit.stockFactor, 15, 15, 0.5, 15, 350, 240, 150, 240);
        var kraut = new Abschlussarbeit.Ingredient("Kraut", 150 * Abschlussarbeit.stockFactor, 150 * Abschlussarbeit.stockFactor, 50, 50, 12.5, 10, 350, 270, 150, 270);
        var peperoni = new Abschlussarbeit.Ingredient("Peperoni", 50 * Abschlussarbeit.stockFactor, 50 * Abschlussarbeit.stockFactor, 30, 30, 2, 5, 350, 300, 150, 300);
        Abschlussarbeit.ingredients.push(salad, onion, corn, tomato, kraut, peperoni);
        /* let testEmployee = new Employee(1);
        testEmployee.draw();
        employee.push(testEmployee); */
        window.setInterval(countGametime, 1000);
        window.setInterval(update, 50);
    }
    function createEmployees(_nEmployees) {
        for (var i = 0; i < _nEmployees; i++) {
            var newEmployee = new Abschlussarbeit.Employee(i);
            Abschlussarbeit.employees.push(newEmployee);
        }
    }
    function createCustomer(_nCustomer) {
        for (var i = 0; i < _nCustomer; i++) {
            var newCustomer = new Abschlussarbeit.Customer(i);
            customers.push(newCustomer);
        }
    }
    function callBarMenu(_event) {
        var target = _event.target.id;
        //VS Code meckert, aber es funktioniert
        console.log(target);
        if (target == "salad") {
            Abschlussarbeit.ingredients[0].showBarMenu(_event);
        }
        else if (target == "onion") {
            Abschlussarbeit.ingredients[1].showBarMenu(_event);
        }
        else if (target == "corn") {
            Abschlussarbeit.ingredients[2].showBarMenu(_event);
        }
        else if (target == "tomato") {
            Abschlussarbeit.ingredients[3].showBarMenu(_event);
        }
        else if (target == "kraut") {
            Abschlussarbeit.ingredients[4].showBarMenu(_event);
        }
        else if (target == "peperoni") {
            Abschlussarbeit.ingredients[5].showBarMenu(_event);
        }
    }
    function callStorageMenu(_event) {
        var target = _event.target.id;
        console.log(target);
        if (target == "saladStorage") {
            Abschlussarbeit.ingredients[0].showStorageMenu(_event);
        }
        else if (target == "onionStorage") {
            Abschlussarbeit.ingredients[1].showStorageMenu(_event);
        }
        else if (target == "cornStorage") {
            Abschlussarbeit.ingredients[2].showStorageMenu(_event);
        }
        else if (target == "tomatoStorage") {
            Abschlussarbeit.ingredients[3].showStorageMenu(_event);
        }
        else if (target == "krautStorage") {
            Abschlussarbeit.ingredients[4].showStorageMenu(_event);
        }
        else if (target == "peperoniStorage") {
            Abschlussarbeit.ingredients[5].showStorageMenu(_event);
        }
    }
    function hideMenus(_event) {
        var barMenu = document.querySelector("#barMenu");
        barMenu.classList.add("isHidden");
        var storageMenu = document.querySelector("#storageMenu");
        storageMenu.classList.add("isHidden");
        Abschlussarbeit.Ingredient.clicked = false;
        console.log("ingr " + Abschlussarbeit.Ingredient.clicked);
        var breakBtn = document.querySelector("#breakBtn");
        breakBtn.classList.add("isHidden");
    }
    function detectClick(_event) {
        var xClick = _event.clientX;
        var yClick = _event.clientY;
        //console.log(employee[].getClicked(xClick, yClick));
        console.log();
        for (var _i = 0, employees_1 = Abschlussarbeit.employees; _i < employees_1.length; _i++) {
            var b = employees_1[_i];
            b.getClicked(xClick, yClick);
        }
    }
    function update() {
        Abschlussarbeit.crc2.putImageData(background, 0, 0);
        //employee.draw();
        for (var _i = 0, employees_2 = Abschlussarbeit.employees; _i < employees_2.length; _i++) {
            var a = employees_2[_i];
            a.move(1 / 50);
            //movePoint = new Vector(a.position.x, a.position.y);
            a.draw();
        }
        for (var _a = 0, customers_1 = customers; _a < customers_1.length; _a++) {
            var a = customers_1[_a];
            a.draw();
            a.move(1 / 50);
        }
    }
    function countGametime() {
        Abschlussarbeit.gametime++;
    }
})(Abschlussarbeit || (Abschlussarbeit = {}));
//# sourceMappingURL=main.js.map