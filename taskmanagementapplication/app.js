const listform=document.querySelector(".taskform")
const alltaskcontainer=document.querySelector(".alltask")
const completedtaskcontainer=document.querySelector(".completedtask")

let btnid=0
listform.addEventListener("submit",(e)=>{
    e.preventDefault()
    let tname=document.querySelector(".taskname").value
    let tdate=document.querySelector(".taskdate").value
    if(tname=="" || tdate==""){
        alert("enter the value. Do not sumbit with empty values !!")
    }
    else{
        

        let taskdiv=document.createElement("div")
        taskdiv.setAttribute("class","task")
        
        // creating 3 div elements
        let taskdivdata=document.createElement("div")
        taskdivdata.setAttribute("class","taskdata")

        let taskdivdeadline=document.createElement("div")
        taskdivdeadline.setAttribute("class","taskdeadline")

        let taskdivcompletebtn=document.createElement("div")
        taskdivcompletebtn.setAttribute("class","completebtn")

        // creating para,para,button which are inside taskdata,taskdeadline,completebtn divs
        let pdata=document.createElement("p").innerText=tname
        let pdeadline=document.createElement("p").innerText=tdate
        let bbutton=document.createElement("button")
        // bbutton.setAttribute("class","completed")
        bbutton.setAttribute("id",`${btnid++}`)
        bbutton.setAttribute("onclick","check(this.id)")
        bbutton.innerHTML="MARK COMPLETE";
        taskdivdata.append(pdata)
        taskdivdeadline.append(pdeadline)
        taskdivcompletebtn.append(bbutton)
        
        taskdiv.append(taskdivdata)
        taskdiv.append(taskdivdeadline)
        taskdiv.append(taskdivcompletebtn)
       
        alltaskcontainer.append(taskdiv)
        
    }
})

const cbutton=document.getElementsByClassName("completebtn")
function check(n){
    completed_task=document.getElementById(`${n}`)
    completed_task.classList.add("completed")
    completedTaskList(completed_task.parentElement.parentElement)
    completed_task.parentElement.parentElement.remove()
}

function completedTaskList(elem){
    let data=elem.querySelector(".taskdata").innerText
    let date=elem.querySelector(".taskdeadline").innerText
    let ctdiv=document.createElement("div")
    ctdiv.setAttribute("class","tcompleted")

    let ctname=document.createElement("div")
    ctname.setAttribute("class","tcname")
    ctname.innerText=data

    let ctdate=document.createElement("div")
    ctdate.setAttribute("class","tcdate")
    ctdate.innerText=date
    ctdiv.append(ctname)
    ctdiv.append(ctdate)
    completedtaskcontainer.append(ctdiv)
}

