const gamePlace = document.getElementById("gamePlace")

// gamePlace.innerHTML = 'text';

const icons = [ '♠', '♣', '♢','♡'];
const Grid = [];
const row = 8;
const col = 8;

function addDataAtribute(){
    let not_active = document.getElementsByClassName("not_active");
    let count = 0;
    for(let x = 0; x< col; x++){
        for(let y = 0 ; y < row; y++){
            not_active[count].setAttribute("x", x);
            not_active[count].setAttribute("y", y);
            count++
        }
        if(count >not_active.length){
            break;
        }
    }
}

function createGrid(){
    for(let x = 0; x< col; x++){
        Grid[x] = [];
        for(let y = 0 ; y < row; y++){
            let ran = Math.floor(Math.random()*4) ;
            Grid[x].push(icons[ran]);
            let addItem = "<div class='not_active'>"+icons[ran] +"</div>";
            gamePlace.innerHTML += addItem;
        }
    }
}

function test(){
    let not_active = document.getElementsByClassName("not_active");
    for(let i=0; not_active.length > i; i++){
        not_active[i].addEventListener("mouseover", function(e){
            let arrayAtribute = [];
            let coordinates; 
            e.target.classList.add("active");
            let x = e.target.getAttribute('x');
            let y = e.target.getAttribute('y');
            arrayAtribute.push({'x': x, 'y': y });
            look(arrayAtribute);
        });

        not_active[i].addEventListener("mouseout", function(e){
            for(let i=0;not_active.length>i;i++ ){
                if(not_active[i].classList.contains('active')){
                    not_active[i].classList.remove("active");
                }
            }
        });
    }
}

function look(arrayAtribute){
    let testAray = arrayAtribute;
    let finish = false;
    let count = 0;
    let oneTime = 1; 
    while(!finish){
        count = 0;
        for(let i = 0; testAray.length > i; i++ ){
            let len = arrayAtribute.length; // длинна массива
            let dX = testAray[i].x;// коордената по икс
            let dY = testAray[i].y;// коордената по игрык
            let elemGetTop, elemGetLeft, elemGetBottom, elemGetRight;// переменние которые нужно проверить
            let elemGet = document 
                .querySelector("[x="+"'"+dX+"']["+"y="+"'"+dY+"'"+"]");// елемент над которым находится мышь
                if(dX > 0){
                    let dXT = +dX-1;
                    elemGetTop = document
                    .querySelector("[x="+"'"+dXT+"']["+"y="+"'"+dY+"'"+"]");
                    if(elemGetTop.innerHTML == elemGet.innerHTML){
                        testClassName(elemGetTop,testAray, count);
                    }
                }
                if(dY > 0){
                   let dYL = +dY-1;
                    elemGetLeft = document
                    .querySelector("[x="+"'"+dX+"']["+"y="+"'"+dYL+"'"+"]");
                    if(elemGetLeft.innerHTML == elemGet.innerHTML){                
                        testClassName(elemGetLeft,testAray, count);
                    }
                }
                if(dX<col-1){
                    let dXB = +dX+1;
                    elemGetBottom = document
                    .querySelector("[x="+"'"+dXB+"']["+"y="+"'"+dY+"'"+"]");
                    if(elemGetBottom.innerHTML == elemGet.innerHTML){
                        testClassName(elemGetBottom,testAray, count);
                    } 
                }
                if(dY<row-1){
                    let dYR = +dY+1;
                    elemGetRight = document
                    .querySelector("[x="+"'"+dX+"']["+"y="+"'"+dYR+"'"+"]");
                    if(elemGetRight.innerHTML == elemGet.innerHTML){
                        testClassName(elemGetRight,testAray, count);
                    }  
                }
                elemGet.addEventListener("click", function(){
                    let not_active = document.getElementsByClassName("not_active");
                    for(let i=0;not_active.length>i;i++ ){
                        if(not_active[i].classList.contains('active')){
                            not_active[i].classList.add("delete");
                            not_active[i].innerHTML = " ";
                        }
                    }
                });
            }
        if(count == 0){  
            if(oneTime == 0){
                finish = true;
            }
            oneTime = oneTime - 1;
        }
    };
}

function testClassName(item,testAray,count){
    if(! item.classList.contains('active')){
        item.classList.add("active");
        let x = item.getAttribute('x');
        let y = item.getAttribute('y');
        testAray.push({'x': x, 'y': y });
        count++;// добавим елемент в массив для перепроверки
        return testAray, count;
    }
};
createGrid();
test();
addDataAtribute();

