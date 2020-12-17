window.onload = function() {
    var showImage = document.getElementById("showImage");
    var hideImage = document.getElementById("hideImage");

    showImage.onclick = function() {
        document.getElementById("x").style.display = "block";
        
        return false;
    }
    hideImage.onclick = function() {
        document.getElementById("x").style.display = "none";
        
        return false;
    }

}

