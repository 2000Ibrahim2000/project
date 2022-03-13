let menutoggle = document.querySelector(".toggle-menu");
menutoggle.onclick = function() {
    menutoggle.classList.toggle('active')
}
let mainTitle = document.querySelector(".main-title");
window.onscroll = function() {
    // console.log(this.scrollY);
    if (this.scrollY >= 250) {
        mainTitle.classList.add("show");
    } else {
        mainTitle.classList.remove("show");
    }
};
