


function reserver(){
    var nom = document.getElementById("nom").value
    var prenom = document.getElementById("prenom").value 
    var email = document.getElementById("email").value

    var hotel = document.getElementById("hotel").value
    var dateA = document.getElementById("dateA").value
    var dateB = document.getElementById("dateB").value

    if (nom == "" || prenom == "" || email == "" || hotel == "" || dateA == "" || dateB == ""){
        alert("Veuillez remplir tous les champs")
    }
    else{
        alert("bonjour " + nom + " " + prenom + "\nvous avez reservez un sejour a l'hotel " + hotel + "\ndu " + dateA + " au " + dateB )
    }
}
