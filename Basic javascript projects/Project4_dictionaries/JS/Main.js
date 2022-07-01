function my_Dictionary() {
    var animal = {
        species:"Dog",
        color:"Black",
        Breed:"Pitbull",
        age:5,
        sound:"Bark!"
    };
    delete animal.sound;
    document.getElementById("Dictionary").innerHTML = animal.sound;
}