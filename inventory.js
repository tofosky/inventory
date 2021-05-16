let addUserBtn = document.querySelector(".addUserBtn")
let modal = document.querySelector(".modal")
let clos = document.querySelector(".btn-close")
let Item = document.querySelector("#item");
let Desc = document.querySelector("#desc");
let Unit = document.querySelector("#unit");
let Quantity = document.querySelector("#qu");
let Cost = document.querySelector("#cost");
let inventoryValue = document.querySelector("#iv");
let add = document.querySelector("#add");
let saveChanges = document.querySelector("#saveChanges");
let tb = document.querySelector(".tb");
let contTable = document.querySelector(".contTable");
let modalTitle = document.querySelector(".modal-title");
let hid = document.querySelector("#hid");
let totalUsers = document.querySelector(".totalUsers");
let totalInventory = document.querySelector(".totalInventory");
let side = document.querySelector(".side");
let closeBtn = document.querySelector(".closeBtn");
let dropdownToggle = document.querySelector(".dropdown-toggle") ;
let dropdownMenu = document.querySelector(".dropdown-menu");
// user form to display
addUserBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("clicked");
    if(modal.style.display === "none"){
        modal.style.display = "block"
    }else{
        modal.style.display = "block"
    }
})


// user form to close
clos.addEventListener("click", (e) =>{
    e.preventDefault();
    modal.style.display ="none"
})

closeBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    modal.style.display ="none"
})

// Array of User
Inventory = [];
Inventory = JSON.parse(localStorage.getItem("inventoryInfo"));
admin = JSON.parse(localStorage.getItem('adminDetails'))

welcomeUser()
function welcomeUser(){
    for(k=0;k<admin.length;k++){
    dropdownToggle.innerHTML = admin[k].username
}
}
dropdownToggle.addEventListener("click", (e) =>{
    e.preventDefault()
    if(dropdownMenu.classList.toggle("dropdown-menu")){
        dropdownMenu.style.display = "block"

    }else{dropdownMenu.style.display = "none"}
})
// let total = Inventory.length;
// totalInventory.innerHTML = total;
//add a new user
add.addEventListener("click", (e) =>{
    e.preventDefault();
    if(Item.value!="" && Desc.value!="" && Unit.value!="" && Quantity.value!="" && Cost.value!="" &&  inventoryValue.value!="" ){
        inventoryObj = {
            item:                Item.value,
            desc:                Desc.value,
            unit:                Unit.value,
            quantity:            Quantity.value,
            cost   :             Cost.value,
            inventoryvalue:      inventoryValue.value
        }
        Inventory.push(inventoryObj)
        console.log(Inventory);
        localStorage.setItem("inventoryInfo", JSON.stringify(Inventory))
        // let total = Inventory.length;
        // totalInventory.innerHTML = total;
        displayInventory()
        alert("successfull")
        //errorsMsg()
        Item.value="", Desc.value = "", Unit.value = "", Quantity.value = "" , Cost.value = ""  
}else{
        //errorMsg()
        alert("dailed")
}
})

//to display inventoey Information to the table
displayInventory()
function displayInventory(){
    tb.innerHTML = ""
    for(i=0;i<Inventory.length;i++){
     tb.innerHTML +=`
        
          <th scope="row">${i+1}</th>
           <td><img src=${Inventory[i].item} style='width:50px; height:50px'></td>
           <td>${Inventory[i].desc}</td>
           <td>${Inventory[i].unit}</td>
           <td>${Inventory[i].quantity}</td>
           <td>${Inventory[i].cost}</td>
           <td>${Inventory[i].inventoryvalue}</td>
           <td><span><i class="fas fa-pencil-alt btn"  value="EDIT"  onclick='editInventory(${i})'></i> <i class="fas fa-trash btn " style="color:red; background-color:white,"  value="Delete" onclick='deleteInventory(${i})'></i></span></td>
         </tr> 
     `
     contTable.append(tb)  
    } 
}

// to edit a user
function editInventory(inventory){
    modal.style.display = "block";
    modalTitle.innerHTML = "Edit Inventory"
    saveChanges.style.display = "block";
    add.style.display = "none"
    Invent = Inventory[inventory];
    Item.value = Invent.item, Desc.value = Invent.desc, Unit.value = Invent.unit, 
    Quantity.value = Invent.quantity, Cost.value = Invent.cost, inventoryValue.value = Invent.inventoryvalue
    hid.value = inventory;  
}

//update a user
function updateInventory(){
    i = document.getElementById("hid").value
    inventoryObj = {
        item:                Item.value,
        desc:                Desc.value,
        unit:                Unit.value,
        quantity:            Quantity.value,
        cost   :             Cost.value,
        inventoryvalue:      inventoryValue.value
    }
    Inventory[i] = inventoryObj
    localStorage.setItem("inventoryInfo", JSON.stringify(Inventory))
   modal.style.display ="none"
   contTable.style.display = "block"
    displayInventory()
}

//to delite users
function deleteInventory(indexes){
    confirmed = confirm('delete selected item?')
        if(confirmed == true){
            Inventory.splice(indexes,1)
            localStorage.setItem("inventoryInfo", JSON.stringify(Inventory))
            // let total = Inventory.length;
            // totalInventory.innerHTML = total;
            displayInventory();
           
        }
}
    
function openNav() {
    side.style.display = "block"
    side.style.width = "250px";
  }
  
  function closeNav() {
      side.style.display = "none"
    side.style.width = "0";
  }

  

  function errorsMsg(){
    if(Item.value ==="" && Desc.value ==="" && Unit.value ==="" && Quantity.value ==="" && Cost.value ==="" &&  inventoryValue.value ===""){
        error.style.display = "block";
        errorMsg.innerHTML = "oops!!!";
    }else{
         success.style.display = "block"
         successMsg.innerHTML = "created successfully";
    }
}