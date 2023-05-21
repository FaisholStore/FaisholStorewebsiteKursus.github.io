function submitForm() {
   var name = document.getElementById("name").value;
   var email = document.getElementById("email").value;
   var password = document.getElementById("password").value;
   var confirmPassword = document.getElementById("confirm-password").value;
 
   if (password !== confirmPassword) {
     alert("Password and Confirm Password do not match!");
     return false;
   }
 
   var formData = {
     name: name,
     email: email,
     password: password
   };
 
   axios.post("https://script.google.com/macros/s/AKfycbynGaQAzm7XSoQd5LRmRG9W1hcmeDWL00R92Q8aR7Uzr5UT4UM9s8dOVIPt2OvSbgc/exec", formData)
     .then(function(response) {
       alert("Data has been submitted successfully!");
       document.getElementById("registrationForm").reset();
     })
     .catch(function(error) {
       alert("An error occurred while submitting the form.");
       console.log(error);
     });
 
   return false;
 }

  function zoomImage(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("zoomedImage");
    modal.style.display = "block";
    modalImg.src = img.src;
  
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      modal.style.display = "none";
    };
  }