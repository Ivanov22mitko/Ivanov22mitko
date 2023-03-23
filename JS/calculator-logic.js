function validateForm() {
  let age = document.forms["myform"]["age"].value;
  let height = document.forms["myform"]["height"].value;
  let weight = document.forms["myform"]["weight"].value;
  let sex = document.forms["myform"]["sex"].value;
  let activity = document.forms["myform"]["activity"].value;
    if (age < 1 || age > 100 || height < 1 || height > 400 || weight < 1 || weight > 300 || sex == "" || activity == "") {
      alert("Всички полета трябва да съдържат коректни данни.");
      return false;
    } 
    else {
      return true;
    }
};

function calculateCalories() {
  if (validateForm()) 
  {
      let height = document.forms["myform"]["height"].value;
      let weight = document.forms["myform"]["weight"].value;
      let age = document.forms["myform"]["age"].value;
      let sex = document.forms["myform"]["sex"].value;
      let activity = document.forms["myform"]["activity"].value;
      var cal = 0;      

      if (sex == "male")
      {
            cal = (66 + (13.7 * weight) + (5 * height) - (6.8 * age))*Number(activity);
      }
      else
      {
            cal = (655 + (9.6 * weight) + (1.8 * height) - (4.7 * age))*Number(activity);
      }
  
       document.getElementById("calories").innerHTML = cal;    
  }  
}