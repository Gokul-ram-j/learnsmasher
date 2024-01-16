const form=document.querySelector("form")
const alltransaction=document.querySelector("#alltransaction")
let listOfTransactionIncome=[]
let listOfTransactionExpense=[]
let dincome=document.querySelector(".incomedisplay")
let dexpense=document.querySelector(".expensedisplay")
let dtotal=document.querySelector(".totaldisplay")

let cincome=0
let cexpense=0
let ctotal=0
dincome.innerHTML=cincome
dexpense.innerHTML=cexpense
dtotal.innerHTML=ctotal


form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let type=document.querySelector("input[name=choice]:checked")
    let name=document.querySelector("#tname").value
    let amount =document.querySelector("#tamount").value    
    let date =document.querySelector("#tdate").value    
    let description =document.querySelector("#tdescription").value  
    
    if(type=="" || name=="" || amount=="" || date=="" || description==""){
        alert("dont sumbit the form with empty values")
    }
    else{
        let tdiv=document.createElement("div")
        tdiv.setAttribute("class","transaction")
    
        // img div
        let imgrep=document.createElement("div")
        if(type.id=="income"){
            imgrep.setAttribute("class","income")
            imgrep.setAttribute("id","income")
        }
        else{
            imgrep.setAttribute("class","expense")
            imgrep.setAttribute("id","expense")
        }
    
        let content=document.createElement("div")
        content.setAttribute("class","content")
    
        // elements within content div
        let h2=document.createElement("h2")
        h2.innerHTML=name
    
        let h4=document.createElement("h4")
        h4.innerHTML=date
    
        let p=document.createElement("p")
        p.innerHTML=description
    
        // adding h2,h4,p to content div
        content.append(h2)
        content.append(h4)
        content.append(p)
    
        // amount div
        let amt=document.createElement("div")
        let h1=document.createElement("h1")
        h1.innerHTML=amount
        amt.append(h1)
    
        let dbtn=document.createElement("button")
        dbtn.setAttribute("class","deletebtn")
        dbtn.innerHTML="X"
        dbtn.setAttribute("onclick","removeelem(this)")
    
        tdiv.append(imgrep)
        tdiv.append(content)
        tdiv.append(amt)
        tdiv.append(dbtn)
        alltransaction.append(tdiv)


    }

    amount=parseInt(amount)
    if(type.id=="income"){
        cincome+=amount
        ctotal+=amount
        listOfTransactionIncome.push([name,amount])
    }
    else{
        cexpense+=amount
        ctotal-=amount
        listOfTransactionExpense.push([name,amount])
    }
    console.log(listOfTransactionExpense,listOfTransactionIncome)
    show()
    google.charts.setOnLoadCallback(drawChart);



})

function show(){
    dincome.innerHTML=cincome
    dexpense.innerHTML=cexpense
    dtotal.innerHTML=ctotal
}

function removeelem(elem){
        elem.parentElement.remove()
        let removeName=elem.parentElement.querySelector("h2").innerHTML
        let removeamount=elem.parentElement.querySelector("h1").innerHTML
        let type=elem.parentElement.querySelector("div").id
        if(type=="income"){
            for(i=0;i<listOfTransactionIncome.length;i++){

                    if(listOfTransactionIncome[i][0]== removeName && listOfTransactionIncome[i][1]==removeamount){
                        console.log(i)
                        listOfTransactionIncome.splice(i,1)
                        google.charts.setOnLoadCallback(drawChart);
                        ctotal-=removeamount
                        cincome-=removeamount
                    }
                }
        }
        else{
            for(i=0;i<listOfTransactionExpense.length;i++){

                if(listOfTransactionExpense[i][0]== removeName && listOfTransactionExpense[i][1]==removeamount){
                    console.log(i)
                    listOfTransactionExpense.splice(i,1)
                    google.charts.setOnLoadCallback(drawChart);
                    ctotal+=parseInt(removeamount)
                    cexpense-=removeamount

                }
            }
        }

        show()
        
    
}

// graph implementation

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


function drawChart() {

    var data1 = new google.visualization.DataTable();
    data1.addColumn('string', 'Type');
    data1.addColumn('number', 'Amount');
    data1.addRows(listOfTransactionIncome);

    var data2 = new google.visualization.DataTable();
    data2.addColumn('string', 'Type');
    data2.addColumn('number', 'Amount');
    data2.addRows(listOfTransactionExpense);

    var options1 = {'title':'How Much I Earned/INCOME',
                     'width':600,
                     'height':500};
    var options2 = {'title':'How Much I Spend/EXPENSE',
                     'width':600,
                     'height':500};

    var chart1 = new google.visualization.PieChart(document.getElementById('piechart1'));
    var chart2 = new google.visualization.PieChart(document.getElementById('piechart2'));

    chart1.draw(data1,options1);
    chart2.draw(data2,options2);
}