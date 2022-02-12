namespace Endabgabe {

    window.addEventListener("load", handleLoad);
    console.log("Start");

    let nEmployees: number;
    let nCustomer: number;
    let stockCapacity: string;
    export let stockFactor: number;
    
    export let crc2: CanvasRenderingContext2D;
    
    let background: ImageData;
   // let stockCapacity: string;

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

        // StockFactor ist noch buggy
        console.log(stockFactor);

        nEmployees = document.querySelector("#nEmployees")!.value;
        console.log(nEmployees);
        // Zuordnung aller Variablen
        
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

        canvas.addEventListener("click", hideBarMenu);

        drawShop();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    

    function drawShop(): void {

        crc2.fillStyle = "HSL(0, 0%, 70%, 1)";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        
        crc2.rect(400, 20, 120, 500);
        crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        crc2.fillRect(400, 20, 120, 500);
        crc2.stroke();
        

        crc2.rect(20, 20, 150, 550);
        crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        crc2.fillRect(20, 20, 150, 550);
        crc2.stroke();

        crc2.rect(170, 20, 230, 100);
        crc2.fillStyle = "HSL(0, 0%, 80%, 1)";
        crc2.fillRect(170, 20, 230, 100);
        crc2.stroke();

        crc2.rect(890, 150, 15, 15);
        crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        crc2.fillRect(890, 150, 15, 15);
        crc2.stroke();

        crc2.rect(890, 225, 15, 15);
        crc2.fillStyle = "HSL(360, 25%, 39%, 1)";
        crc2.fillRect(890, 225, 15, 15);
        crc2.stroke();
        /* crc2.save(),
        crc2.translate(300, 20);
        crc2.beginPath(); */
    }

    function callBarMenu(_event: MouseEvent): void {
        let target: EventTarget = _event!.target!.id!;
        //VS Code meckert, aber es funktioniert
        console.log(target);

        if (target == "salad") {
            Salad.showBarMenu(_event);
        } else {
            
        }
       
    }

    function callStorageMenu(_event: MouseEvent): void {
        
        let target: EventTarget = _event!.target!.id!;
        console.log(target);

        if (target == "saladStorage") {
            Salad.showStorageMenu(_event);
        } else {
            
        }

    }

    function hideBarMenu(_event: MouseEvent): void {
        let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
        barMenu.classList.add("isHidden");
    }




    function handleClick(_event: Event): void {
        /* let barMenu: HTMLDivElement = document.querySelector("#barMenu")!;
        barMenu.classList.add("isHidden"); */
    }
}