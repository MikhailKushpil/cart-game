const gamePlace = document.getElementById("gamePlace")

// gamePlace.innerHTML = 'text';

const icons = [ '♠', '♣', '♢','♡'];
const Grid = [];
const row = 4;
const col = 4;


function addDataAtribute(){
    let grey = document.getElementsByClassName("grey");
    let count = 0;
    for(let x = 0; x< 4; x++){
        for(let y = 0 ; y < 4; y++){
            grey[count].setAttribute("x", x);
            grey[count].setAttribute("y", y);
            count++
        }
        if(count > grey.length){
            break;
        }
    }
}

function createGrid(){
    for(let x = 0; x< 4; x++){
        Grid[x] = [];
        for(let y = 0 ; y < 4; y++){
            let ran = Math.floor(Math.random()*4) ;
            Grid[x].push(icons[ran]);
            let addItem = "<div class='grey'>"+icons[ran] +"</div>";
            gamePlace.innerHTML += addItem;
        }
    }
}

function test(){
    let grey = document.getElementsByClassName("grey");
    for(let i=0; grey.length > i; i++){
        grey[i].addEventListener("mouseover", function(e){
            let arrayAtribute = [];
            let coordinates; 
            e.target.classList.add("green");
            let x = e.target.getAttribute('x');
            let y = e.target.getAttribute('y');
            arrayAtribute.push({'x': x, 'y': y });
            look(arrayAtribute);
        });

        grey[i].addEventListener("mouseout", function(e){
            
            for(let i=0;grey.length>i;i++ ){
                if(grey[i].classList.contains('green')){
                    grey[i].classList.remove("green");
                }
            }
        });  
    }
}

function look(arrayAtribute){
    let testAray = arrayAtribute;
    console.log(testAray);
    let finish = false;
    let count = 0; 
    while(!finish){
        count = 0;
        for(let i = 0; testAray.length > i; i++ ){
            let len = arrayAtribute.length; // длинна массива
            let dX = arrayAtribute[len-1].x;// коордената по икс
            let dY = arrayAtribute[len-1].y;// коордената по игрык
            console.log(dX,dY);
            let elemGetTop, elemGetLeft, elemGetBottom, elemGetRight;// переменние которые нужно проверить
            let elemGet = document 
                .querySelector("[x="+"'"+dX+"']["+"y="+"'"+dY+"'"+"]");// елемент над которым находится мышь
                if(dX > 0){
                    let dXT = +dX-1;
                    elemGetTop = document
                    .querySelector("[x="+"'"+dXT+"']["+"y="+"'"+dY+"'"+"]");
                    if(elemGetTop.innerHTML == elemGet.innerHTML){
                        if(!elemGetTop.classList.contains('green')){
                            elemGetTop.classList.add("green");
                            let x = elemGetTop.getAttribute('x');
                            let y = elemGetTop.getAttribute('y');
                            testAray.push({'x': x, 'y': y });
                            count++;// добавим елемент в массив для перепроверки
                        }
                    }
                }
                if(dY > 0){
                   let dYL = +dY-1;
                    elemGetLeft = document
                    .querySelector("[x="+"'"+dX+"']["+"y="+"'"+dYL+"'"+"]");
                    if(elemGetLeft.innerHTML == elemGet.innerHTML){
                        if(!elemGetLeft.classList.contains('green')){
                            elemGetLeft.classList.add("green");
                            let x = elemGetLeft.getAttribute('x');
                            let y = elemGetLeft.getAttribute('y');
                            testAray.push({'x': x, 'y': y });
                            count++;// добавим елемент в массив для перепроверки
                        }
                    }
                }
                if(dX<3){
                    let dXB = +dX+1;
                    elemGetBottom = document
                    .querySelector("[x="+"'"+dXB+"']["+"y="+"'"+dY+"'"+"]");
                    if(elemGetBottom.innerHTML == elemGet.innerHTML){
                        if(! elemGetBottom.classList.contains('green')){
                            elemGetBottom.classList.add("green");
                            let x = elemGetBottom.getAttribute('x');
                            let y = elemGetBottom.getAttribute('y');
                            testAray.push({'x': x, 'y': y });
                            count++;// добавим елемент в массив для перепроверки
                        }
                    } 
                }
                if(dY<3){
                    let dYR = +dY+1;
                    elemGetRight = document
                    .querySelector("[x="+"'"+dX+"']["+"y="+"'"+dYR+"'"+"]");
                    if(elemGetRight.innerHTML == elemGet.innerHTML){
                        if(! elemGetRight.classList.contains('green')){
                            elemGetRight.classList.add("green");
                            let x = elemGetRight.getAttribute('x');
                            let y = elemGetRight.getAttribute('y');
                            testAray.push({'x': x, 'y': y });
                            count++;// добавим елемент в массив для перепроверки
                        }
                    }  
                }
                }
        console.log(count + " count");
        if(count == 0){
            finish = true;
        }
    };
}

createGrid();
test();
addDataAtribute();

