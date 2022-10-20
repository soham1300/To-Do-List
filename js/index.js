var count=0;
function addTask()
{
    if(document.querySelector(".inputTask").value==""){
    }
    else
    { 
        document.querySelector(".noTask").style.display="none";
        document.querySelector(".onTask").style.display="block";
        document.querySelector(".remainingTaskList").innerHTML+=`<div id="div${count}" class="p-1 rounded d-flex justify-content-between"><i class="fa fa-check" style="font-size:27px" onclick="compTask(${count})"></i><h5 class="container-fluid" id="input${count}"> ${document.querySelector(".inputTask").value}</h5><i class="fa-solid fa-trash-can" style="font-size:27px" onclick="remove(${count})"></i></div>`;
        document.querySelector(".inputTask").value="";
        count++;
    }
    
}
function remove(num)
{
    document.getElementById("div"+num).remove();
    check();
}
function compTask(num)
{
    document.querySelector(".completeTaskList").innerHTML+=`<div id="div${num}" class="p-1 rounded d-flex justify-content-between"><i class="fa fa-close" style="font-size:27px" onclick="notComp(${num})"></i>
    <h5 class="container-fluid text-decoration-line-through" id="input${num}">${document.getElementById("input"+num).innerText}</h5><i class="fa-solid fa-trash-can" style="font-size:27px" onclick="remove(${num})"></i></div>`;
    remove(num);
}
function notComp(num)
{
    document.querySelector(".remainingTaskList").innerHTML+=`<div id="div${count}" class="p-1 rounded d-flex justify-content-between"><i class="fa fa-check" style="font-size:27px" onclick="compTask(${count})"></i><h5 class="container-fluid" id="input${count}"> ${document.getElementById("input"+num).innerText}</h5><i class="fa-solid fa-trash-can" style="font-size:27px" onclick="remove(${count})"></i></div>`;
    remove(num);
    count++;
}
function check()
{
    if(document.querySelector(".remainingTaskList").innerHTML=="" && document.querySelector(".completeTaskList").innerHTML=="")
    {
        document.querySelector(".noTask").style.display="block";
        document.querySelector(".onTask").style.display="none";
    }
}
function aTask()
{
    document.querySelector(".hName").innerText="All Tasks";
    document.querySelector(".remainingTask").style.display="block";
    document.querySelector(".completeTask").style.display="block";
    document.querySelector(".completeTask").style.height="235px";
    document.querySelector(".remainingTask").style.height="235px";
    document.querySelector(".nav1").style.backgroundColor="rgb(0, 0, 0,0.4)";
    document.querySelector(".nav2").style.backgroundColor="transparent";
    document.querySelector(".nav3").style.backgroundColor="transparent";
}
function rTask()
{
    document.querySelector(".hName").innerText="Remaining Tasks";
    document.querySelector(".completeTask").style.display="none";
    document.querySelector(".remainingTask").style.height="470px";
    document.querySelector(".remainingTask").style.display="block";
    document.querySelector(".nav1").style.backgroundColor="transparent";
    document.querySelector(".nav2").style.backgroundColor="rgb(0, 0, 0,0.4)";
    document.querySelector(".nav3").style.backgroundColor="transparent";
}
function cTask()
{
    document.querySelector(".hName").innerText="Completed Tasks";
    document.querySelector(".remainingTask").style.display="none";
    document.querySelector(".completeTask").style.height="470px";
    document.querySelector(".completeTask").style.display="block";
    document.querySelector(".nav1").style.backgroundColor="transparent";
    document.querySelector(".nav2").style.backgroundColor="transparent";
    document.querySelector(".nav3").style.backgroundColor="rgb(0, 0, 0,0.4)";
}