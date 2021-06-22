const artist = document.getElementById('artist')
const songTitle = document.getElementById('song')
const lyricsbtn = document.getElementById('btn')
const lyrics = document.getElementById('lyrics')
const error = document.getElementById("error")


artist.addEventListener("keyup", function(event){
 
    const value = event.target.value 
  
    if (value.length >=1 && value != " "){
      lyricsbtn.removeAttribute("disabled")
      error.removeAttribute("data-active")
      error.innerText = "Ange både titel och artist"
    } else {
      lyricsbtn.setAttribute("disabled",1)
      error.setAttribute("data-active", "")
      error.innerText = "Du måste ange en artist"
    }
})

lyricsbtn.addEventListener("click", () => {
  
    const inputArtist = artist.value;
    const inputTitle = songTitle.value;


    fetch(`http://ianertson.com:3500/${inputArtist}/${inputTitle}`).then(function(response){
        response.json().then(data => {
        document.getElementById("lyrics").innerText = data[0].lyrics
        })
    })
});