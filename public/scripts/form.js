function phonenumber(inputtxt)
{
  if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(inputtxt))
     {
	   return true;
	 }
   else
     {
	   alert("You have entered an invalid Phone Number");
	   return false;
     }
}

function ValidateEmail(mail) 
{
 if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
};