document.querySelector("#login").addEventListener("click", function(){
    username = document.querySelector("#username").value;
    password = document.querySelector("#password").value;
    if(username == "aleksandar.jovanovic.104.21" && password == "65TnnGw") {
        console.log("success");
        document.querySelector(".error").classList.add("hide");
        window.location.href = "predmeti.html";
    } else {
        console.log("error");
        document.querySelector(".error").classList.remove("hide");
    }
})
