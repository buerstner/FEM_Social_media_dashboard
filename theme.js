let theme_switch = document.querySelector("#switch"); 
theme_switch.addEventListener("change", e => {
    theme_switch.checked ? set_light_theme() : set_dark_theme();
});

const set_dark_theme = function() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "hsl(230, 17%, 14%)";
    body.style.color = "hsl(228, 34%, 66%)";

    document.querySelectorAll(".followers-box, .today-box, #overlay").forEach(element => {
        element.style.backgroundColor = "hsl(228, 28%, 20%)";
    });
     
    document.querySelectorAll(".number, .bottom-row>span, #grid-container h1").forEach(element => {
        element.style.color = "#fff"
    });

    document.querySelector("#grid-container h2").style.color = "#fff";

    let switch_box = document.querySelector("#switch-box");
    switch_box.style.backgroundImage = "linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%))";
    switch_box.style.backgroundColor = "none";
    switch_box.lastElementChild.style.backgroundColor = "hsl(228, 28%, 20%)";

    document.querySelectorAll("#overlay:hover, .followers-box:hover, .today-box:hover").forEach(element => {
        element.style.backgroundColor = "hsl(228, 17%, 20%)";
    });

};

const set_light_theme = function() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "hsl(0, 0%, 100%)";
    body.style.color = "hsl(228, 12%, 44%)";
    
    document.querySelectorAll(".followers-box, .today-box, #overlay").forEach(element => {
        element.style.backgroundColor = "hsl(227, 47%, 96%)";
    });

    document.querySelectorAll(".number, .bottom-row>span, #grid-container h1").forEach(element => {
        element.style.color = "hsl(230, 17%, 14%)"
    });

    document.querySelector("#grid-container h2").style.color = "hsl(228, 12%, 44%)"; 

    let switch_box = document.querySelector("#switch-box");
    switch_box.style.backgroundImage = "none";
    switch_box.style.backgroundColor = "hsl(230, 22%, 74%)";
    switch_box.lastElementChild.style.backgroundColor = "hsl(225, 100%, 98%)";

    document.querySelectorAll("#overlay:hover, .followers-box:hover, .today-box:hover").forEach(element => {
        element.style.backgroundColor = "hsl(227, 70%, 96%)";
    });
};
