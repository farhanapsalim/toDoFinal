
function ajax()
{
//creating an XHR object
var xhttp=new XMLHttpRequest();
//event listner
xhttp.onreadystatechange=function()
{
//condition
if(this.readyState==4 && this.status==200)
{
//document.getElementById("demo").innerHTML=this.responseText;
var response=JSON.parse(this.responseText);
//console.log(response);  
var output="";
var checkedd=null;                            
for(var i=0;i<response.length;i++)
{
output+='<li style="list-style-type:none;margin-left:100px;font-size:20px;color:white"><input type="checkbox" style="width:20px;height:20px" id="checkbox1"/>'+response[i].title+'</li>';

   checkedd=response[i].completed;
   //console.log(checkedd);

   if(response[i].completed==true)
   {
      
    output+='<li style="list-style-type:none;margin-left:100px;font-size:20px;color:white"><input type="checkbox" style="width:20px;height:20px;background-color:rgb(12, 12, 106);" style="background-color:rgb(12, 12, 106);" checked disabled id="checkbox1"/>'+response[i].title+'</li>';

   }

 
}
document.getElementById("demo").innerHTML=output;


var count = 0;
            console.log(count);
            $(document).ready(function() {


                console.log(count);

                $("#demo").on("change",
                    ":checkbox",
                    function() {

                        var status = this.checked;
                        var promise = new Promise(function(resolve, reject) {

                          
                            if (status === true) {
                               
                                count++;

                            }
                            if (status === false) {
                                count--;
                            }

                            console.log(count);
                            if (count == 5) {
                                console.log(count);
                                resolve();
                            }

                        });
                        promise.then(function() {
                            setTimeout(() => {
                                alert("Congrats ,you have completed 5 tasks");
                            }, 250);

                        });


                    });
               

            })
}
}
//xhttp.open("GET","ajax.txt",true);
xhttp.open("GET","http://jsonplaceholder.typicode.com/todos",true);
xhttp.send();
}


