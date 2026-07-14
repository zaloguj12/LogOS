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