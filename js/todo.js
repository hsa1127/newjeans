const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("#todo-form input");
//form은 submit event를 default로 가져서 새로고침되니까
//그걸 막으려면 prevent.default 사용하기 

const TODOS_KEY = "todos";

let toDos = []; //newTodo생길때마다 저장하는곳.
                    //근데 localStorage는 array를 저장할수없음.


function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){ //event console에 찍어보면 좌표로 어떤 버튼 클릭한건지 확인하거나, target확인
    //console.dir(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    //우리가 클릭한 li의 id랑 다른거 = 안누른거는 toDo에 남겨두고싶다. 
    saveToDos();
}   

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText ="X";
    button.addEventListener("click",deleteToDo); 
    li.appendChild(span); //li태그 안에 span태그 넣고 싶을때 
    li.appendChild(button);
    toDoList.appendChild(li);
    
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;//input의 value를 비우기전에 newTodo에 저장 
    toDoInput.value=""; //input 비우기 
    const newTodoObj = {
        text:newTodo,
        id:Date.now(), //거의 랜덤한 숫자로 id주기
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj); //아까 저장한 값 function으로 부르기 
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

//function sayHello(item){
 //   console.log("this is the turn of", item);
//}

const savedToDos = localStorage.getItem(TODOS_KEY);
//console.log(savedToDos);
if(savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos);
    toDos = parseToDos; //위에 항상 빈 array로 되어있는데 이 코드를 써서 새로고침을해도 localStorage에 저장된값이 화면이랑, localStorage그대로 남아있음. 
    //console.log(parseToDos);
    //parseToDos.forEach((item)=> console.log("this is the turn of", item)) //foreach는 배열의 각각item에 대해 sayHello라는 function을 실행
    parseToDos.forEach(paintToDo);
}
