window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        2000 
    )
});


document.querySelectorAll("#close, #ok").forEach(function(elem) {
    elem.addEventListener("click", function() {
      document.querySelector(".popup").style.display = "none";
    });
  });

function FormEll() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    if (!emailRegex.test(email)) {
        alert("Hibás email formátum!");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Hibás jelszó formátum!");
        return false;
    }
    return true;
}