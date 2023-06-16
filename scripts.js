function swapContent(nextID) {
    var activeBlock = document.querySelector(".content-block.active");
    if (activeBlock && activeBlock.id === nextID) return;

    var contentBlocks = document.querySelectorAll(".content-block");
    for (var ii = 0; ii < contentBlocks.length; ii++) {
        var block = contentBlocks[ii];
        if (block.classList.contains ("active")) block.classList.remove("active");
    }

    document.getElementById("spinner").classList.add("active");
    window.location = "#spinner";

    setTimeout(function () {
        if (document.getElementById(nextID)) {
            document.getElementById("spinner").classList.remove("active");
            document.getElementById(nextID).classList.add("active");
            window.location = "#" + nextID;
        }
    }, 1500);
}

function filterSkills() {
    document.getElementById("skillset").classList.remove("show_all");
    document.getElementById("skillset").classList.remove("show_language");
    document.getElementById("skillset").classList.remove("show_tech");
    document.getElementById("skillset").classList.remove("show_other");
    if (document.getElementById("skillset_filter_all").checked) {
        document.getElementById("skillset").classList.add("show_all");
    } else if (document.getElementById("skillset_filter_language").checked) {
        document.getElementById("skillset").classList.add("show_language");        
    } else if (document.getElementById("skillset_filter_tech").checked) {
        document.getElementById("skillset").classList.add("show_tech");        
    } else if (document.getElementById("skillset_filter_other").checked) {
        document.getElementById("skillset").classList.add("show_other");       
    }
}