function validateForm() {
    console.log ("check1");
    var validity = true;
    var msg = "";
    var x = document.forms["firstForm"]["fullName"].value;
    if (x.indexOf(" ")==-1||x.length<3) {
      msg=msg+"FullName have to contain at least one space!\n";
      console.log ("incorrect fullname");
      validity = false;
    }
    x = document.forms["firstForm"]["pass"].value;
    if (x.length<8) {
      msg=msg+"Password have to contain at least 8 charcters!\n";
      console.log ("incorrect password");
      validity = false;
    }
    x = document.forms["firstForm"]["phone"].value;
    if (x.length>10 || x.length<9 || isNaN(x)) {
      msg=msg+"Phone is between 9 to 10 digits without charcters!\n";
      console.log ("incorrect phone");
      validity = false;
    }
    x = document.getElementsByClassName("form-check-input");
    x = x[0].checked+x[1].checked+x[2].checked+x[3].checked;
    if (x==0){
      msg=msg+"must check one interest!\n";
      console.log ("incorrect interest choose");
      validity = false;
    }
    if (validity==false)
        alert (msg);
    return validity;
};