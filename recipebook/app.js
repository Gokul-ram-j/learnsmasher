const formdata=document.querySelector(".recipeform")
const list=document.querySelector(".recipelist")
let btnid=0
formdata.addEventListener("submit",(e)=>{
    
    e.preventDefault()
    let rname=document.querySelector(".recipename").value
    let ringredient=document.querySelector(".recipeingredients").value
    let rprocedure=document.querySelector(".recipeprocedure").value
    if(rname=="" ||ringredient=="" || rprocedure==""){
        alert("do not submit the form with empty values")
    }
    else{
        let recipediv=document.createElement("div")
        recipediv.setAttribute("class","recipe")

        let hdiv=document.createElement("h2")
        hdiv.innerHTML=rname
        recipediv.append(hdiv)

        let ingredientdiv=document.createElement("div")
        ingredientdiv.setAttribute("class","recipeingredients")
        let ingredienth3=document.createElement("h3")
        ingredienth3.innerHTML="INGREDIENT"
        let ingredientp=document.createElement("p")
        ingredientp.innerHTML=ringredient
        ingredientdiv.append(ingredienth3)
        ingredientdiv.append(ingredientp)
        recipediv.append(ingredientdiv)

        let procedurediv=document.createElement("div")
        procedurediv.setAttribute("class","recipeprocedure")
        let procedureh3=document.createElement("h3")
        procedureh3.innerHTML="PROCEDURE"
        let procedurep=document.createElement("p")
        procedurep.innerHTML=rprocedure
        procedurediv.append(procedureh3)
        procedurediv.append(procedurep)
        recipediv.append(procedurediv)
        
        let dbutton=document.createElement("button")
        dbutton.setAttribute("class","deletebtn")
        dbutton.setAttribute("id",`${btnid++}`)
        dbutton.setAttribute("onclick","remove(this)")
        recipediv.append(dbutton)
    
        list.append(recipediv)

    }


})

function remove(elem){
    elem.parentElement.remove()
}
