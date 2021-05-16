
let totalProduct = document.querySelector(".totalProducts");
let totalUsers = document.querySelector(".totalUsers");
let totalInventory = document.querySelector(".totalInventory");
let side = document.querySelector(".side");
let successMsg = document.querySelector("#successMsg");
let errorMsg = document.querySelector("#errorMsg");
let sucess = document.querySelector("#success");
let error = document.querySelector("#error");
let dropdownToggle = document.querySelector(".dropdown-toggle") ;
let dropdownMenu = document.querySelector(".dropdown-menu");
let errorBtn = document.querySelector(".errorBtn");


let products = [];
 products = JSON.parse(localStorage.getItem("ProductsInfo"));

 // data from user in local storage
 Users = JSON.parse(localStorage.getItem("usersInfo"));
   let totals = Users.length;
         totalUsers.innerHTML = totals;

         //data from inventory
         Inventory = JSON.parse(localStorage.getItem("inventoryInfo"));
         let totalss = Inventory.length;
         totalInventory.innerHTML = totalss;
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

 let total = products.length;
 totalProduct.innerHTML = total;
 



  function errorsMsg(){
    if(image.value ==="" && names.value ==="" && description.value ==="" && price.value ===""){
        error.style.display = "block";
        errorMsg.innerHTML = "oops!!!";
        errorBtn.innerHTML = "okay"
    }else{
         success.style.display = "block"
         successMsg.innerHTML = "created successfully";
    }
}


