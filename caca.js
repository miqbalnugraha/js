var caca = {
    name : "caca",
    berat : 45,
    tinggi : 155,
    hobby : ["Nonton", "Makan"],

    sebutkanHobby : function() {
        console.log("Hobby Caca :");
        for (var i = 0; i < this.hobby.length; i++){
            console.log(i+1 + ". " + this.hobby[i]);
        }
    }
}

caca.sebutkanHobby();