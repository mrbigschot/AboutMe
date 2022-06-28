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