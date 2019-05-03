function formValidation() {
    var uname = document.forms["myForm"]["name"].value;
    var uemail = document.forms["myForm"]["email"].value;
    var usubj = document.forms["myForm"]["subject"].value;
    var umessage = document.forms["myForm"]["message"].value;


    //unername*********************************************************************
    //var letters = /^[A-Za-z]+$/;
    if (uname.length < 1) {
        document.getElementById('error-name').innerHTML = " Please Enter Your Name *"
        var Name = document.getElementById('error-name');
        Name.style.color = 'red';
        document.getElementById('name').focus();
        return false;
    }

    //check username if its letters only
    /*var letters = /^[A-Za-z]+$/;
    if (!uname.match(letters)) {
        document.getElementById('error-name').innerHTML = " Please enter letters *"
        var Name = document.getElementById('error-name');
        Name.style.color = 'red';
        document.getElementById('name').focus();
        return false;
    }

    //********************************************************** 
    //***************EMAIL */
    if (uemail.length < 1) {
        document.getElementById('error-email').innerHTML = " Please Enter Your Email *";
        var Mail = document.getElementById('error-email');
        Mail.style.color = 'red';
        document.getElementById('email').focus();
        return false;
    }

    //******************************************************************************************************* */

    if (usubj.length < 1) {
        document.getElementById('error-subject').innerHTML = " Please Enter a subject *";
        var sub = document.getElementById('error-subject');
        sub.style.color = 'red';
        document.getElementById('subject').focus();
        return false;
    }
    if (umessage.length < 1) {
        document.getElementById('error-message').innerHTML = "Message field cannot be blank *";
        var Message = document.getElementById('error-message');
        Message.style.color = 'red';
        document.getElementById('message').focus();
        return false;
    }
    /*  if (name.length < 1 || email.length < 1 || subject.length < 1 || message.length < 1) {
          return false;
      }*/

}