let windows = [];

function enter() {
    const welcontent = document.getElementById("welContent");
    const maincontent = document.getElementById("mainContent")

    maincontent.style.display = "block";
    maincontent.style.opacity = "0";

    setTimeout(() => {
        welcontent.style.opacity = "0";
        maincontent.style.opacity = "1";
    }, 10);

    setTimeout(() => {
        welcontent.style.display = "none";
    }, 500);
}

let openedApps = [];


function openApp(id){

    let app=document.getElementById(id);


    if(!openedApps.includes(app)){
        openedApps.push(app);
    }


    app.style.display="block";


    renderWindows();


    focusWindow(app);
}



function closeApp(id){

    let app=document.getElementById(id);


    app.style.display="none";


    openedApps =
        openedApps.filter(x=>x!==app);


    renderWindows();
}



function renderWindows() {
    let workspace=document.getElementById("workspace");
    workspace.innerHTML = "";
    openedApps.forEach(app => {
        workspace.appendChild(app);
    });

    if (openedApps.length === 1) {
        openedApps[0].style.width = "100%";
    }
    else if (openedApps.length >= 2) {
        openedApps.forEach((app, index) => {
            if (index === 0) {
                app.style.width = "35%";
            }
            else {
                app.style.width = "65%";
            }
        });
    }
}

function focusWindow(app) {
    document.querySelectorAll(".appWindow").forEach(w => w.classList.remove("active"));
    app.classList.add("active");
}

document.addEventListener("click", e => {
    let win = e.target.closest(".appWindow");
    if (win)
        focusWindow(win);
});

function focusWindow(app) {
    document.querySelectorAll(".appWindow").forEach(w => w.classList.remove("active"));
    app.classList.add("active");
    app.style.order = windows.indexOf(app);
}