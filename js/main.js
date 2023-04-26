//Example fetch using pokemonapi.co
// API zCqY9bMgztIgheNAjZx0JNy5kHkchKU46GdKbd1H
// API For earth images
//https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY
// API from Mars rovers curiosity, opportunity and spirit
// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
// Astronomy picture of the day
// https://api.nasa.gov/planetary/apod?api_key=zCqY9bMgztIgheNAjZx0JNy5kHkchKU46GdKbd1H
/* <!--copyright:
date:
explanation:
hdurl: "https://apod.nasa.gov/apod/image/2304/MoonArc_zanarello_1365.jpg"
media_type: "image"
title: "The Moon through the Arc de Triomphe"
url: "https://apod.nasa.gov/apod/image/2304/MoonArc_zanarello_960.jpg"-->
 */

const APIKey = 'zCqY9bMgztIgheNAjZx0JNy5kHkchKU46GdKbd1H'
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const picDate = document.querySelector('input').value
  const url = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${APIKey}&date=${picDate}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
/*        document.querySelector("h2").innerText = data.title
        let media = data.media_type
        let copyright = ''
        let dateArr = data.date.split("-")
        let datePub = `${dateArr[1]}/${dateArr[2]}/${dateArr[0]}`
          if (data.copyright == null && data.copyright == undefined) {
          copyright = "Public Domain"
        } else {
          copyright = data.copyright
        }
        document.querySelector("#copyright").innerHTML = copyright
        document.querySelector("#datePub").innerHTML = datePub
        document.querySelector("p").innerHTML = data.explanation
        if (media === 'video') {
          document.querySelector("#image").style.display = "none"
          document.querySelector("#video").style.display = "block"
          document.querySelector("#video").src = data.url
        } else {
          document.querySelector("#video").style.display = "none"
          document.querySelector("#image").style.display = "block"
          document.querySelector("#image").src = data.url
        } */
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

