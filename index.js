let adminUsername = document.querySelector("#adminUsername");
let adminPassword = document.querySelector("#adminPassword");
let errorText = document.querySelector(".errorText");
let loginBtn = document.querySelector(".loginBtn");
let username = "Taofik01";
let password = "1111";
let adminData = []
loginBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    if(adminUsername.value === username && adminPassword.value === password){
        adminObject = {
            username : adminUsername.value,
            password : adminPassword.value
        }
        adminData.push(adminObject);
        localStorage.setItem("adminDetails", JSON.stringify(adminData))
        window.location.assign("file:///C:/Users/ADEMOLA/Documents/js%20project/inventory%20system%20management/Dashboard.html")
    }else{
        errorMessage()
       // alert("access denied")
    }

})

function errorMessage(){
      errorText.innerHTML = "login failed";
      errorText.style.color = "red";
}