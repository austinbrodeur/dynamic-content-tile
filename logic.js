document.getElementById("expand-box1").addEventListener("click", function(){ toggleContent("expand-box-content1", "fa-angle-down1"); });


function toggleContent(elementId, arrowId) {
    const toggleElement = document.getElementById(elementId);
    const arrowElement = document.getElementById(arrowId);

    if (toggleElement.classList.contains("content-hidden")) {
        toggleElement.classList.add("content-showing");
        toggleElement.classList.remove("content-hidden");

        arrowElement.classList.remove("content-showing");
        arrowElement.classList.add("content-hidden");
    }
    else {
        toggleElement.classList.remove("content-showing");
        toggleElement.classList.add("content-hidden");

        arrowElement.classList.add("content-showing");
        arrowElement.classList.remove("content-hidden");
    }
}