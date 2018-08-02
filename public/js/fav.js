var fav = JSON.parse(localStorage.getItem("fav"));

var mainDiv = document.getElementById("main");

 for (var j = 0; j < fav.length; j++) {

    var image = document.getElementById("images");
    image.setAttribute("src", fav[j].imgs[0]);

     let Title = document.getElementById("Title");
     Title.innerHTML = fav[j].Title;

     let city = document.getElementById("city");
     city.innerHTML = fav[j].Phone;

    

     let price = document.getElementById("price");
     price.innerHTML = `Rs.${fav[j].price}`





     let description = document.getElementById("dis");
     description.innerHTML = fav[j].Description;




//      let description = document.getElementById("dis");
//      description.innerHTML = fav[j].Description;

//      mainDiv.appendChild(image)
     
//      mainDiv.appendChild(city)
//      mainDiv.appendChild(price)
//      mainDiv.appendChild(description)
}