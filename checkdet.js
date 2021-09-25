console.log("here");

        function validate() {
    console.log("entered into validate");
            var username = document.getElementById("username").value;
            var password = document.getElementById("password").value;



            if (username == null || username == "") {
                alert("Please enter the username.");
                return false;

            }
            if (password == null || password == "") {
                alert("Please enter the password.");
                return false;
            }

             if(username=="admin" && password=="12345")
           {
    alert("login successfull");
    redirect();
    return true;
 
                }
                if(username!="admin" || password!="12345")
                {
         alert("incorrect login details");
      
                     }

   
            
                        
        } 

function redirect()
{
        console.log("redirect");
    window.location.href="main.html";
}
//validate(redirect);



