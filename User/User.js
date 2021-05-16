
let btnProduct = document.querySelector(".btnProduct");
let modal = document.querySelector(".modal")
let clos = document.querySelector(".btn-close")
let image = document.querySelector("#image");
let names = document.querySelector("#name");
let description = document.querySelector("#description");
let price = document.querySelector("#price");
let add = document.querySelector("#add");
let tb = document.querySelector(".tb");
let contTable = document.querySelector(".contTable");
let modalTitle = document.querySelector(".modal-title");
let hid = document.querySelector("#hid");
let totalProduct = document.querySelector(".totalProducts");
let side = document.querySelector(".side");
let closeBtn = document.querySelector(".closeBtn")
let successMsg = document.querySelector("#successMsg");
let errorMsg = document.querySelector("#errorMsg");
let sucess = document.querySelector("#success");
let error = document.querySelector("#error");
let dropdownToggle = document.querySelector(".dropdown-toggle") ;
let dropdownMenu = document.querySelector(".dropdown-menu");
let saveChanges = document.querySelector("#saveChanges");
btnProduct.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("clicked");
    if(modal.style.display === "none"){
        modal.style.display = "block"
    }else{
        modal.style.display = "block"
    }
})

clos.addEventListener("click", (e) =>{
       e.preventDefault();
       modal.style.display ="none"
})

closeBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    modal.style.display ="none"
})

let products = [];
 products = JSON.parse(localStorage.getItem("ProductsInfo"));
 user = JSON.parse(localStorage.getItem('userDetails'))
 welcomeUser()
function welcomeUser(){
    for(k=0;k<user.length;k++){
    dropdownToggle.innerHTML = user[k].username
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
 

add.addEventListener("click", (e) =>{
     e.preventDefault();
     if(image.value!="" && names.value!="" && description.value!="" && price.value!=""){
         productsObj = {
             Image: image.value,
             Names: names.value,
             Description: description.value,
             Price      : price.value
         }
         products.push(productsObj)
         localStorage.setItem("ProductsInfo", JSON.stringify(products))
         displayProducts()
         errorsMsg()
         image.value="", names.value = "", description.value = "", price.value = ""   
}else{
         errorsMsg();
}
})
displayProducts()
function displayProducts(){
    tb.innerHTML = ""
    for(i=0;i<products.length;i++){
     tb.innerHTML +=`
        
          <th scope="row">${i+1}</th>
           <td><img src=${products[i].Image} style='width:50px; height:7opx'></td>
           <td>${products[i].Names}</td>
           <td>${products[i].Description}</td>
           <td>${products[i].Price}</td>
           <td><span><i class="fas fa-pencil-alt btn  value="EDIT" onclick='editProducts(${i})' "></i></span></td>
         </tr> 
     `
     contTable.append(tb)  
    } 
}

function editProducts(productss){
    modal.style.display = "block";
    modalTitle.innerHTML = "Edit Product"
    saveChanges.style.display = "block";
    add.style.display = "none";
    Produ = products[productss];
    image.value = Produ.Image, names.value = Produ.Names, description.value = Produ.Description, price.value = Produ.Price
    hid.value = productss;
}

function updateProducts(){
    i = document.getElementById("hid").value
    productsObj = {
        Image: image.value,
        Names: names.value,
        Description: description.value,
        Price      : price.value
    }
    products[i] = productsObj
    localStorage.setItem("ProductsInfo", JSON.stringify(products))
   modal.style.display ="none"
   contTable.style.display = "block"
    displayProducts()
}

function deleteProducts(indexes){
    confirmed = confirm('delete selected item?')
        if(confirmed == true){
            products.splice(indexes,1)
            localStorage.setItem("ProductsInfo", JSON.stringify(products))
          
            displayProducts()
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
    if(image.value ==="" && names.value ==="" && description.value ==="" && price.value ===""){
        error.style.display = "block";
        errorMsg.innerHTML = "oops!!!";
    }else{
         success.style.display = "block"
         successMsg.innerHTML = "created successfully";
    }
}

// function errorMsg(){

// }
