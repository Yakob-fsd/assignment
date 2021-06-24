function validateLogin(){
  var password = document.getElementById("exampleInputPassword1").value;

    var username = document.getElementById("exampleInputEmail1").value;
    if (username == "") {
        alert("Please enter the username.");
        event.preventDefault()
    }
    else if (password == "") {
      alert("Please enter the password.");
      event.preventDefault()
   }
   else
   document.getElementById("frm").action = "/login/add";

 
};

/*login valiadtion ends*/

  /*signup validation starts*/

  function validateSignup(){
    var name = document.getElementById("validationCustom01").value;
    let regexp = /^[a-zA-Z\s]+$/;
    var email = document.getElementById("validationCustom02").value;
    let regexp1 = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/ ;
    var uname = document.getElementById("validationCustomUsername").value;
    let regexp2 = /^[a-zA-Z\s]+$/;
    var pw = document.getElementById("validationCustom03").value;
    let regexp3 = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
    var opw = document.getElementById("validationCustom03").value;
    var rePw = document.getElementById("retypePassword").value;
    var phone = document.getElementById("validatePhone").value;
    var regexp4 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (name == "" || name == null)
      alert("Name Cannot be empty");
    else if((regexp.test(name))!= 1)
     { alert("Username should contain alphabets only");
     event.preventDefault()}
    else if(email==""||email== null)
      {alert("Email Id feild is empty")
      event.preventDefault()}
    else if((regexp1.test(email))!=1)
      {alert("Please provid valid mail Id");
      event.preventDefault()}
    else  if (uname == "" || uname == null)
      {alert("Username Cannot be empty");
      event.preventDefault()}
    else if((regexp2.test(uname))!=1)
      {alert("Username should contain alphabets only");
      event.preventDefault()}
    else if(pw==""||pw==null)
      {alert("Please Set a Password");
      event.preventDefault()}
    else if((regexp3.test(pw))!=1)
      {alert("Please Set a strong password according to the instructions");
      event.preventDefault()}
    else if(rePw==""||rePw==null)
      {alert("Please re enter the password");
      event.preventDefault()}
    else if(opw!=rePw)
      {alert("Password re-entry doesnt match");
      event.preventDefault()}
    else if(phone==""||phone==null)
      {alert("Please enter the phone number");
      event.preventDefault()}
    else if((regexp4.test(phone))!=1)
      {alert("Invalid phone number");
      event.preventDefault()}    
      else
    console.log("");
      document.getElementById("frmreg").action="/signup/add";
   }
       
 /*signup validation ends*/

    /*add book validation*/
    function validateAddbook(){
      p=addBookName();
       if(p==true)
      q=addBookAuthor();
       if(q==true)
      r=addBookCat();
       if(r==true)
      alert("Success");
      };

      function addBookName(){
        var name = document.getElementById("exampleFormControlInput1").value;
        if(name==""||name==null){
         alert("Name cannot be empty");
         return false;
        }
        else 
          return true     
       };

       function addBookAuthor(){
        var author = document.getElementById("authorName").value;
        let regexp=/^[a-zA-Z\s]+$/ ;

        if(author==""||author==null){
          alert("Please enter author name");
          return false;
        }
        else if(regexp.test(author))
          return true;
        else{
          alert("Please enter a valid Author name");
          return false;
        }
       };

       function addBookCat(){
        var category = document.getElementById("categoryName").value;
        let regexp=/^[a-zA-Z\s]+$/ ;

        if(category==""||category==null){
          alert("Please enter Category");
          return false;
        }
        else if(regexp.test(category))
          return true;
        else{
          alert("Please enter a valid category");
          return false;
        }
       };

       /*add book validation ends*/



       /*add author validation*/
       function validateAddAuthor(){
        p=addAuthorName();
         if(p==true)
        q=addAuthorWork();
         if(q==true)
        r=addAuthorCat();
         if(r==true)
        alert("Success");
        };
  
        function addAuthorName(){
          var name = document.getElementById("exampleFormControlInput1").value;
          let regexp=/^[a-zA-Z\s]+$/ ;

          if(name==""||name==null){
           alert("Name cannot be empty");
           return false;
          }
          else if(regexp.test(name))
          return true;
        else{
          alert("Please enter a valid Author name");
          return false;
        }   
         };
  
         function addAuthorWork(){
          var work = document.getElementById("workName").value;
  
          if(work==""||work==null){
            alert("Please enter the Book name");
            return false;
          }
          else
           return true;
         };
  
         function addAuthorCat(){
          var category = document.getElementById("authorCategory").value;
          let regexp=/^[a-zA-Z\s]+$/ ;
  
          if(category==""||category==null){
            alert("Please enter Category");
            return false;
          }
          else if(regexp.test(category))
            return true;
          else{
            alert("Please enter a valid category");
            return false;
          }
         };
  
       /*add author validation ends*/
