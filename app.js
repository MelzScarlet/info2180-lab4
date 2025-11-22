document.getElementById("searchBtn").addEventListener("click", function () {
    
    let userInput = document.getElementById("searchInput").value.trim();

    userInput = userInput.replace(/[^a-zA-Z0-9 ]/g, "");

    let url = "superheroes.php?query=" + encodeURIComponent(userInput);

    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById("result").innerHTML = data;
        })
        .catch(err => {
            document.getElementById("result").innerHTML = "Error fetching data.";
        });

});

