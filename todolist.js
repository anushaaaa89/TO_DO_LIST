const input = document.getElementById("input");
const data = document.getElementById("data");
const add=document.getElementById("add");
const reset=document.getElementById("reset");
input.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (input.value === "") {
        alert("Please enter a task");
    } else {
        data.innerHTML += "• " + input.value + "<br>";
        input.value = "";
    }
}
add.addEventListener("click",addTask);
reset.addEventListener("click",function(){
    data.innerHTML="";
})

