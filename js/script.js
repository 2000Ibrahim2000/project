let menutoggle = document.querySelector(".toggle-menu");
menutoggle.onclick = function() {
    menutoggle.classList.toggle('active');
}

let item = document.querySelectorAll(".item");
item.forEach(item => {
    item.onclick = function() {
        item.classList.toggle('open');
    }
})

let mainTitle = document.querySelector(".main-title");
window.onscroll = function() {
    // console.log(this.scrollY);
    if (this.scrollY >= 250) {
        mainTitle.classList.add("show");
    } else {
        mainTitle.classList.remove("show");
    }
};
