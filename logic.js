document.getElementById("expand-box1").addEventListener("click", function(){ toggleContent("expand-box-content1", "expand-arrow1"); });
document.getElementById("flip-container").addEventListener("click", function() { flipCard() });

function toggleContent(elementId, arrowId) {
    const toggleElement = document.getElementById(elementId);
    const arrowElement = document.getElementById(arrowId);

    if (toggleElement.classList.contains("content-hidden")) {
        toggleElement.classList.add("content-showing");
        toggleElement.classList.remove("content-hidden");

        arrowElement.classList.remove("fa-angle-down");
        arrowElement.classList.add("fa-angle-up");
    }
    else {
        toggleElement.classList.remove("content-showing");
        toggleElement.classList.add("content-hidden");

        arrowElement.classList.remove("fa-angle-up");
        arrowElement.classList.add("fa-angle-down");
    }
}

function flipCard() {
    document.getElementById("flip-container").classList.toggle("flip");
}