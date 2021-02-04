((d) => {

    let collapsible = d.getElementsByClassName("footer-menu")[0];


    collapsible.addEventListener('click', () => {
        let content = collapsible.nextElementSibling;
        if(content.style.display === "none"){
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    })

})(document)