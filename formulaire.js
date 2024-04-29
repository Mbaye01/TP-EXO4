
document.getElementById("formulaire").addEventListener("submit", function (e) {
  //alert('envoiyer')
  e.preventDefault();
  let nom = document.getElementById("nom").value;
  let email = document.getElementById("email").value;
  let obj = document.getElementById("objet").value;
  let mss = document.getElementById("message").value;

  if (nom === "" || email === "" || obj === "" || mss === "") {
    alert("Veuillez remplir l'ensemble des champs");
  } else {
    console.log("Nom:", nom);
    console.log("email:", email);
    console.log("objet:", obj);
    console.log("message:", mss);
  }
});

//alert('envoiyer')
