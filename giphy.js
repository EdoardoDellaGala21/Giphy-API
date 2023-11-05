function sendApiRequest() {
    var userInput = document.getElementById("input").value 
    console.log(userInput)

    var giphyApiKey = "MLcbEtlHladHOPsyANOSHgfD5FFFDDKB"
    var giphyApiURL = "https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key={giphyApiKey)"
}