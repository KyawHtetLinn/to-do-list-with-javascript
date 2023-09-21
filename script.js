
const newTodo = document.getElementById("newTodo");
const todoList = document.getElementById("todoLists");

const addTodo = document.getElementById("addButton");
const todoWarn = document.getElementById("todoWarn");

const searchTodo = document.getElementById("searchTodo");

let TodoList = [];
let TodoText = [];
newTodo.addEventListener("keyup", function(){
    todoWarn.style.visibility = "hidden";
});

addTodo.addEventListener("click",function(){
    // console.log(todoName);
    let node = document.createElement('li');
    // node.style.position = "absolute";
    node.style.margin = "5px";
    node.style.display = "flex";
    node.style.padding = "10px";
    node.style.borderBottom = "1px solid gray";

    let tex = document.createElement('span');
    tex.style.maxWidth = "350px";
    tex.style.overflowWrap = "anywhere";
    
    let icon = document.createElement('span');
    icon.innerHTML = '<i class="fa-solid fa-trash-can fa-sm" style="color: #e40707;" ></i>';
    icon.style.marginLeft = "10px";
    icon.setAttribute("class","lists");

    if(newTodo.value == undefined || newTodo.value.length < 1){
        todoWarn.style.visibility = "visible";
    }
    
    else {
        tex.innerText = newTodo.value;
        node.append(tex,icon);
        todoList.appendChild(node);   
        TodoText.push(newTodo.value);
        TodoList.push(node);
        // console.log(TodoList);
        // console.log(TodoText);
        let rmIc = document.querySelectorAll('i')[document.querySelectorAll('i').length -1];
        newTodo.value = "";
        // console.log(rmIc);
        function arrayRemove(arr, value) {
            return arr.filter(function (geeks) {
                return geeks != value;
            })
        };      
        let rmEv = ()=>{
            TodoText = arrayRemove(TodoText,tex.innerText);
            TodoList = arrayRemove(TodoList,node);
            node.remove();
            // console.log(TodoList);
            // console.log(TodoText);
        };

        rmIc.addEventListener("click",rmEv);

    };

});

searchTodo.addEventListener('keyup',function(){
    function checkText(arr,text){
        idex1 = [];
        idex2 = [];
        for (const [i, values] of arr.entries()) {
            let value = values.toLowerCase().split(" ");
            if(value.includes(text.toLowerCase())){
                idex1.push(i);
            }
            else{
                idex2.push(i)
            }
        };
        return [idex1,idex2];
      };
    let searchTd = searchTodo.value;
    if(searchTd.length > 0){

        let inds = checkText(TodoText,searchTd.toLowerCase());
        // console.log(inds[0]);
        // console.log(ind2);
        // ind = checkText(TodoText,searchTd);
        // if(ind> -1){
        //     // console.log(ind);
        //     searchRes = TodoList[ind];
        //     searchRes.style.color = 'blue';
        //     searchRes.style.fontWeight = 'bold';
        //     searchRes.style.border = '1px solid rgb(194, 189, 189)'
        // }
        // else{
        //     TodoList.forEach((item) =>{
        //         item.style.color = 'black';
        //         item.style.fontWeight = 'normal';
        //         item.style.border = 'none';
        //         item.style.borderBottom = "1px solid gray";
        //     })
        // };
        if(inds[0].length > 0){
            for (const i of inds[0]){
                searchRes = TodoList[i];
                // searchRes.style.backgroundColor = 'lightgray';
                searchRes.style.fontWeight = 'bold';
                // searchRes.style.color = 'dodgerblue';
                // searchRes.style.border = '1px solid rgb(194, 189, 189)'  
            }
            for (const i of inds[1]){
                searchRes = TodoList[i];
                // searchRes.style.visibility = "hidden";
                searchRes.remove();
                // todoList.appendChild(node)
                // searchRes.style.color = 'blue';
                // searchRes.style.fontWeight = 'bold';
                // searchRes.style.border = '1px solid rgb(194, 189, 189)'  
            }
        }
        else{
            // console.log(TodoList);

            TodoList.forEach((item) =>{
                // console.log(item);
                // console.log(todoList);
                item.style.color = 'black';
                item.style.fontWeight = 'normal';
                item.style.border = 'none';
                item.style.borderBottom = "1px solid gray";
                // item.style.visibility = "visible";
                item.style.backgroundColor = "white";
                todoList.appendChild(item);
                
            });
            };
    }
    else{
        TodoList.forEach((item) =>{
            // console.log(item);
            // console.log(todoList);
            item.style.color = 'black';
            item.style.fontWeight = 'normal';
            item.style.border = 'none';
            item.style.borderBottom = "1px solid gray";
            // item.style.visibility = "visible";
            item.style.backgroundColor = "white";
            todoList.appendChild(item);
        })};
    
});

//      ***************       ---     ******    ---    ***************      //

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');

let alertdiv = document.getElementById("alertDiv");
let tododiv = document.getElementById("todoDiv");
let formdiv = document.getElementById("formDiv");
function alert(){
    box1.style.borderBottom = "2px solid blue";
    box1.style.color = "blue";
    box2.style.borderBottom = "none";
    box2.style.color = "black";
    box3.style.borderBottom = "none";
    box3.style.color = "black";

    alertdiv.style.visibility = "visible";
    tododiv.style.visibility = "hidden";
    formdiv.style.visibility = "hidden";

    todoWarn.style.visibility = "hidden";
    nameW.style.visibility = "hidden";
    emailW.style.visibility = "hidden";
    passwordW.style.visibility = "hidden";
}

function todo(){
    box2.style.borderBottom = "2px solid blue";
    box2.style.color = "blue";
    box1.style.borderBottom = "none";
    box1.style.color = "black";
    box3.style.borderBottom = "none";
    box3.style.color = "black";

    alertdiv.style.visibility = "hidden";
    tododiv.style.visibility = "visible";
    formdiv.style.visibility = "hidden";

    nameW.style.visibility = "hidden";
    emailW.style.visibility = "hidden";
    passwordW.style.visibility = "hidden";
}

function form(){
    box3.style.borderBottom = "2px solid blue";
    box3.style.color = "blue";
    box1.style.borderBottom = "none";
    box1.style.color = "black";
    box2.style.borderBottom = "none";
    box2.style.color = "black";

    alertdiv.style.visibility = "hidden";
    tododiv.style.visibility = "hidden";
    formdiv.style.visibility = "visible";

    todoWarn.style.visibility = "hidden";
}

function openDialog(){
    let dialogbox = document.getElementById('dialogbox');
    dialogbox.style.visibility = "visible"
    document.body.style.backgroundColor = "#bfbfbf";
}
function closeDialog(){
    let dialogbox = document.getElementById('dialogbox');
    dialogbox.style.visibility = "hidden"
    document.body.style.backgroundColor = "white";
}

//      ***************       ---     ******    ---    ***************      //

const submit = document.getElementById("submit");
const lname = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const nameW = document.getElementById("nameWarn");
const emailW = document.getElementById("emailWarn");
const passwordW = document.getElementById("passwordWarn");

lname.addEventListener("keyup",(e)=>{
    nameW.style.visibility = "hidden";
})
email.addEventListener("keyup",(e)=>{
    emailW.style.visibility = "hidden";
})
password.addEventListener("keyup",(e)=>{
    passwordW.style.visibility = "hidden";
})

function nand(a, b) {
  return !(a && b)
}

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const lcasePat = /[a-z]/;  
    const numPat = /[\d]/;
    const emailPat = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    const passwordPat = /[0-9a-zA-Z#$%*&]{6,}/;

    if(nand(lcasePat.test(lname.value),numPat.test(lname.value))){
        nameW.style.visibility = "visible";
    }
    if(emailPat.test(email.value) == false){
        emailW.style.visibility = "visible";
    }
    if(passwordPat.test(password.value) == false){
        passwordW.style.visibility = "visible";
    }
})
