var isstatus = document.querySelector("h1")

var addfrnd = document.querySelector("#add")

var check =0
addfrnd.addEventListener("click",function(){
if(check==0){
    isstatus.innerHTML="friends"
    isstatus.style.color="green"
    addfrnd.innerHTML="remove friend"
    check  = 1
}else{
    isstatus.innerHTML="not your friend"
    isstatus.style.color="red"
    addfrnd.innerHTML="add friend"
    check  = 0
}
 
 
 
})
