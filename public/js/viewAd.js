const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
firestore.settings(settings);


// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker
//         .register('./service-worker.js')
//         .then(function () { console.log('Service Worker Registered'); });
// }

let adAdderId = localStorage.getItem("adAdderId");
let adToView = localStorage.getItem('adToView');
let catsToView = localStorage.getItem("catsToView");
console.log(adToView, catsToView)

let data;


firestore.collection(catsToView).doc(adToView).get()
    .then(function (snapshot) {
        console.log(snapshot.data());
        data = snapshot.data();
        localStorage.setItem("adAdderId",data.adAdderId)

       var image = document.getElementById("images");
       image.setAttribute("src", data.imgs[0]);
        
        // image.innerHTML = data.imgs;

        let Title = document.getElementById("Title");
        Title.innerHTML = data.Title;

        let city = document.getElementById("city");
        city.innerHTML = data.Phone;

       

        let price = document.getElementById("price");
        price.innerHTML = `Rs.${data.price}`





        let description = document.getElementById("dis");
        description.innerHTML = data.Description;
    })










function chat() {
    window.location = "chatt.html";
}



let searches = ["Property For Sell", "Property For Rent", "Cars", "Bikes", "Electronics", "Mobiles", "Jobs", "Services", "Business", "Furniture", "Animals", "Books", "Fashion", "Kids"];

// let adId = "";
// firebase.firestore().collection("searches").get()
// .then((doc)=>{
//     console.log(doc.id);
//     adId = doc.id;
// })

// firbase.firestore().collection('searches').get()
// .then((doc) => {
//     doc.forEach


// })

function adFav(){

    if (localStorage.getItem("fav") == null) {
        localStorage.setItem("fav", "[]");
      }

      var fav = JSON.parse(localStorage.getItem("fav"));


for (var j = 0; j < searches.length; j++) {
    firebase.firestore().collection(searches[j]).get()
        .then(function (doc) {
            doc.forEach(element => {
                console.log(element.id)
                var element1 = element.data();
                // console.log(element.id);
                if (adToView == element.id) {
                    fav.push(element1)

                    localStorage.setItem("fav", JSON.stringify(fav));
                    console.log(element.data().imgs)

                    var req = new Request(element.data().imgs, { mode: "no-cors" });
                    fetch(req).then(res => {
                      caches.open('olx').then(cache => {
                        console.log("Stored");
              
                        return cache.put(req, res).then(() => {
        
                        })
                      })
                    })
                        
                }
            })  
})
}
}
