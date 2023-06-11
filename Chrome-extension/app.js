let myLeads = []
const inputEl = document.getElementById('input-el')
const inputbtn = document.getElementById('input-btn')
const ulEl = document.getElementById('ul-el')
const deleteBtn = document.getElementById('delete-btn')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById('tab-btn')

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    renderLead()
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads" , JSON.stringify(myLeads))
        renderLead(myLeads)
    })
    //console.log(tabs[0].url)
    
})

function renderLead(){
    let listItem = ""
    for(let i = 0; i <myLeads.length; i++){
        // listItem += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        listItem += `
            <li>
                <a target = '_blank' href = '${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItem
}

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    renderLead()

})

inputbtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))

    renderLead()
    console.log(localStorage.getItem("myLeads"))
})


