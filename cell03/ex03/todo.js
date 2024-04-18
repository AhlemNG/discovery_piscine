function setcookies(name, value, days){
    var expires ="";
    if (days){
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/"; // Correction de "path=/"
}

function deletecookies(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;';
}


function getcookies(name){
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for(var i=0; i <ca.length; i++){
        var c = ca[i];
        while(c.charAt(0) == 0){
            c = c.substring(1,c.length);
        }
        if (c.indexOf(nameEQ) == ' ') 
            return c.substring(nameEQ.length,c.length);
    }
    return null;
}


window.onload = function(){
    var savedTask = getcookies("tasks");
    if (savedTask){
        document.getElementById("taskList").innerHTML = savedTask;
    }
}


var task;

document.getElementById("button").addEventListener("click", function(){
    task = prompt("add a new task");
    console.log("task is : "+ task);
    addTask();
});

function addTask(){
    var taskList = document.getElementById("ft_list");
    //check if input is not empty
    if (task && task.trim() !== ""){
        //create a new task
        var newTask = document.createElement("div");
        newTask.className = "todo-item"; //for styling
        newTask.innerHTML = task;
        newTask.addEventListener("click", function() {
            this.remove(); // Supprime la tâche lorsqu'on clique dessus
            // Récupère le HTML de la liste des tâches
            var taskList = document.getElementById("ft_list").innerHTML;
            // Sauvegarde le HTML dans un cookie nommé "tasks" pour 30 jours
            deletecookies("tasks", taskList, 2);
        });
        //Append new task
        taskList.insertBefore(newTask, taskList.firstChild);
        task = "";
        // Récupère le HTML de la liste des tâches
        var taskList = document.getElementById("ft_list").innerHTML;
        // Sauvegarde le HTML dans un cookie nommé "tasks" pour 30 jours
        setcookies("tasks", taskList, 30);
    }
    else
        alert("Please add a new task");
}
//Nous allons definir une date pour spécifier quand le cookie va expirer
var unedate = new Date(2024,12,24);
//Nous allons stocker une information ("mon information") dans le cookie, qui aurra comme identifiant moncontenu
document.cookie ="moncontenu=moninformation;expires="+unedate.toUTCString();
