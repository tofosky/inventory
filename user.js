let addUserBtn = document.querySelector(".addUserBtn")
let modal = document.querySelector(".modal")
let clos = document.querySelector(".btn-close")
let Images = document.getElementById("image");
let FirstName = document.querySelector("#fn");
let LastName = document.querySelector("#ln");
let UserName = document.querySelector("#un");
let Email = document.querySelector("#email");
let Password = document.querySelector("#psw");
let add = document.querySelector("#add");
let saveChanges = document.querySelector("#saveChanges");
let tb = document.querySelector(".tb");
let contTable = document.querySelector(".contTable");
let modalTitle = document.querySelector(".modal-title");
let hid = document.querySelector("#hid");
let totalUsers = document.querySelector(".totalUsers");
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
Users = [];
Users = JSON.parse(localStorage.getItem("usersInfo"));
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
// let total = Users.length;
// totalUsers.innerHTML = total;
//add a new user
 let text = Images;
//texts = Images.value.replace("C:\\fakepath\\", "");

add.addEventListener("click", (e) =>{
    e.preventDefault();
    if(text.value!="" && FirstName.value!="" && LastName.value!="" && UserName.value!="" && Email.value!="" && Password.value!="" ){
        userObj = {
            Image: text.value.replace("C:\\fakepath\\", ""),
            FirstName:     FirstName.value,
            LastName:      LastName.value,
            UserName:      UserName.value,
            Email   :      Email.value,
            Password:      Password.value
        }
        
        Users.push(userObj)
        localStorage.setItem("usersInfo", JSON.stringify(Users))
        // let total = Users.length;
        // totalUsers.innerHTML = total;
        displayUsers()
        console.log(text.value.replace("C:\\fakepath\\", ""));
        //alert("successfull")
        text.value="", FirstName.value = "", LastName.value = "", Email.value = "" , Password.value = ""  
}else{
        alert("failed")
}
})

//to display usersInformation to the table
displayUsers()
function displayUsers(){
    tb.innerHTML = ""
    for(i=0;i<Users.length;i++){
     tb.innerHTML +=`
          <th scope="row">${i+1}</th>
           <td><img src=./${Users[i].Image} style='width:50px; height:50px'></td>
           <td>${Users[i].FirstName}</td>
           <td>${Users[i].LastName}</td>
           <td>${Users[i].UserName}</td>
           <td>${Users[i].Email}</td>
           <td>${Users[i].Password}</td>
           <td><span><i class="fas fa-pencil-alt btn"  value="EDIT"  onclick='editUsers(${i})'></i> <i class="fas fa-trash btn " style="color:red; background-color:white,"  value="Delete" onclick='deleteUsers(${i})'></i></span></td>
         </tr> 
     `
     contTable.append(tb)  
    } 
}

// to edit a user
function editUsers(user){
    modal.style.display = "block";
    modalTitle.innerHTML = "Edit User"
    saveChanges.style.display = "block";
    add.style.display = "none"
    User = Users[user];
    Image.value = User.Image, FirstName.value = User.FirstName, LastName.value = User.LastName, 
    UserName.value = User.UserName, Email.value = User.Email, Password.value = User.Password
    hid.value = user;  
}

//update a user
function updateUsers(){
    i = document.getElementById("hid").value
    userObj = {
        Image: Image.value,
        FirstName:     FirstName.value,
        LastName:      LastName.value,
        UserName:      UserName.value,
        Email   :      Email.value,
        Password:      Password.value
    }
    Users[i] = userObj
   localStorage.setItem( 'usersInfo', JSON.stringify(Users))
   modal.style.display ="none"
   contTable.style.display = "block"
    displayUsers()
    //alert("updated successfully")
}

//to delite users
function deleteUsers(indexes){
    confirmed = confirm('delete selected item?')
        if(confirmed == true){
            Users.splice(indexes,1)
            localStorage.setItem("usersInfo", JSON.stringify(Users))
            // let total = Users.length;
            // totalUsers.innerHTML = total;
            displayUsers();
           
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