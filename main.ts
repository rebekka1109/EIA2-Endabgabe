namespace Abschlussarbeit {

    window.addEventListener("load", handleLoad);
    console.log("Start");

    let human: Human[] = [];
    export let employees: Employee[] = [];
    export let anyEmployee: Employee; 
    for (let index: number  = 0; index < employees.length; index++) {
            anyEmployee = employees[index];           
        }

    export let ingredients: Ingredient[] = [];
    let customers: Customer[] = [];

    let nEmployees: number;
    let nCustomer: number;
    let timeCustomer: number;

    let stockCapacity: string;
    export let stockFactor: number;
    
    export let crc2: CanvasRenderingContext2D;
    
    let background: ImageData;

    export let gametime: number = 0;

    export let movePoint: Vector = new Vector (0, 0);
    export let movePointX: number;
    export let movePointY: number;

    function handleLoad(_event: Event): void {

        let form: HTMLDivElement = document.querySelector("#form")!;
        form.addEventListener("change", handleChange);

        let startBtn: HTMLButtonElement = document.querySelector("#startBtn")!;
        startBtn.addEventListener("click", createCanvas);
    }

    function handleChange(_event: Event): void {
        stockCapacity = document.querySelector('input[name="stockCapacity"]:checked')!.value;
        console.log(stockCapacity);

        if (stockCapacity == "high") {
            stockFactor = 1.2;
        } else if (stockCapacity == "low") {
            stockFactor = 0.8;
        } else if (stockCapacity == "medium") {
            stockFactor = 1.0;
        }

        console.log(stockFactor);

        nEmployees = Number(document.querySelector("#nEmployees")!.value);
        timeCustomer = Number(document.querySelector("#nCustomers")!.value);
        console.log(timeCustomer);

        
        /* window.setInterval(createCustomer, timeCustomer * 100);
        console.log(nCustomer); */

    }
    
    function createCanvas(): void {
        let form: HTMLFormElement = <HTMLFormElement> document.getElementById("form");
        form.classList.add("isHidden");

        let mainContainer: HTMLDivElement = <HTMLDivElement> document.getElementById("mainContainer");
        mainContainer.classList.remove("isHidden");

        let canvas: HTMLCanvasElement = document.querySelector("canvas")!;
        crc2 = canvas.getContext("2d")!;

        let barContainer: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".bar")!;
        for (let i of barContainer) {
            i.addEventListener("click", callBarMenu);
        }

        let storageContainer: NodeListOf<HTMLSpanElement> = document.querySelectorAll(".storage")!;
        for (let i of storageContainer) {
            i.addEventListener("click", callStorageMenu);
        }

        canvas.addEventListener("click", hideMenus);
        canvas.addEventListener("click", detectClick);
        
        drawShop();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

        createEmployees(nEmployees);
        console.log(nEmployees);

        createCustomer(timeCustomer);

        /* let firstCustomer: Customer = new Customer (0);
        customers.push(firstCustomer); */
        // console.log(timeCustomer);
        // window.setInterval(createCustomer, timeCustomer);
        // console.log(nCustomer);

        let salad: Ingredient = new Ingredient("Salat", 100 * stockFactor, 100 * stockFactor, 25, 25, 2, 20, 350, 150, 150, 150);
        let onion: Ingredient = new Ingredient("Zwiebeln", 70 * stockFactor, 70 * stockFactor, 15, 15, 0.5, 30, 350, 180, 150, 180);
        let corn: Ingredient = new Ingredient("Mais", 1000 * stockFactor, 1000 * stockFactor, 300, 300, 30, 5, 350, 210, 150, 210);
        let tomato: Ingredient = new Ingredient("Tomate", 50 * stockFactor, 50 * stockFactor, 15, 15, 0.5, 15, 350, 240, 150, 240);
        let kraut: Ingredient = new Ingredient("Kraut", 150 * stockFactor, 150 * stockFactor, 50, 50, 12.5, 10, 350, 270, 150, 270);
        let peperoni: Ingredient = new Ingredient("Peperoni", 50 * stockFactor, 50 * stockFactor, 30, 30, 2, 5, 350, 300, 150, 300);

        ingredients.push(salad, onion, corn, tomato, kraut, peperoni);

        /* let testEmployee = new Employee(1);
        testEmployee.draw();
        employee.push(testEmployee); */
        window.setInterval(countGametime, 1000);

        window.setInterval(update, 50);
    }

    function createEmployees(_nEmployees: number): void {
        for (let i: number = 0; i < _nEmployees; i++) {
            let newEmployee: Employee = new Employee (i);
            employees.push(newEmployee);
        }
    }

    function createCustomer (_nCustomer: number): void {
        for (let i: number = 0; i < _nCustomer; i++) {
            let newCustomer: Customer = new Customer (i);
            customers.push(newCustomer);
        }
    }
    function callBarMenu(_event: MouseEvent): void {
        let target: EventTarget = _event!.target!.id!;
        //VS Code meckert, aber es funktioniert
        console.log(target);

        if (target == "salad") {
            ingredients[0].showBarMenu(_event);
        } else if (target == "onion") {
            ingredients[1].showBarMenu(_event);
        } else if (target == "corn") {
            ingredients[2].showBarMenu(_event);
        } else if (target == "tomato") {
            ingredients[3].showBarMenu(_event);
        } else if (target == "kraut") {
            ingredients[4].showBarMenu(_event);
        } else if (target == "peperoni") {
            ingredients[5].showBarMenu(_event);
        } 
    }

    function callStorageMenu(_event: MouseEvent): void {
        let target: EventTarget = _event!.target!.id!;
        console.log(target);

        if (target == "saladStorage") {
            ingredients[0].showStorageMenu(_event);
        } else if (target == "onionStorage") {
            ingredients[1].showStorageMenu(_event);
        } else if (target == "cornStorage") {
            ingredients[2].showStorageMenu(_event);
        } else if (target == "tomatoStorage") {
            ingredients[3].showStorageMenu(_event);
        } else if (target == "krautStorage") {
            ingredients[4].showStorageMenu(_event);
        } else if (target == "peperoniStorage") {
            ingredients[5].showStorageMenu(_event);
        } 

    }

    function hideMenus(_event: MouseEvent): void {
        let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
        barMenu.classList.add("isHidden");

        let storageMenu: HTMLDivElement = document.querySelector("#storageMenu")!;
        storageMenu.classList.add("isHidden");

        Ingredient.clicked = false;
        console.log("ingr " + Ingredient.clicked);  

        let breakBtn: HTMLButtonElement = document.querySelector("#breakBtn")!;
        breakBtn.classList.add("isHidden");
    }

 
    function detectClick(_event: MouseEvent): void {
        let xClick: number = _event.clientX;
        let yClick: number = _event.clientY;
        //console.log(employee[].getClicked(xClick, yClick));
        console.log(
        for (let b of employees) {
            b.getClicked(xClick, yClick);
        }
            

    }

    function update(): void {
        crc2.putImageData(background, 0, 0);
        //employee.draw();

        for (let a of employees) {
            a.move(1 / 50);
            //movePoint = new Vector(a.position.x, a.position.y);
            a.draw(); 
        }

        for (let a of customers) {
            a.draw();
            a.move(1 / 50);
        }
    }

    function countGametime(): void {
            gametime++;
    }

    
}