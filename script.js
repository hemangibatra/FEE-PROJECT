function getBio() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("bio-text").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "bio.txt", true);
    xhttp.send();
}
