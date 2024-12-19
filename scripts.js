function startup() {
    let urlParams = new URLSearchParams(window.location.search);
    let content = urlParams.get("content");
    if (content) {
        showContent(content);
    } else {
        showContent("about");
    }
}

function showContent(contentID) {
    let contentFound = false;
    let contentBlocks = document.querySelectorAll(".content-block");
    contentBlocks.forEach(function (block) {
        if (block.id === contentID) {
            block.classList.add("active");
            contentFound = true;
        } else if (block.id !== "error") {
            block.parentElement.removeChild(block);
        }
    });
    let errorContent = document.getElementById("error");
    if (contentFound) {
        errorContent.parentElement.removeChild(errorContent);
    } else {
        errorContent.classList.add("active");
    }
}
function swapContent(nextID) {
    let targetUrl = new URL(window.location.href);
    targetUrl.searchParams.delete("content");
    targetUrl.searchParams.append("content", nextID);
    window.location.href = targetUrl;
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

function toggleNavBar() {
    let navBar = document.getElementById("menu");
    navBar.classList.toggle('active');
}
function closeNavBar() {
    let navBar = document.getElementById("menu");
    navBar.classList.remove('active');
}