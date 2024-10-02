const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Navbar
    nav.classList.toggle('nav-active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });

    // Burger Animation
    burger.classList.toggle('toggle');
});



/*js staf pengajar*/
// Dapatkan elemen modal
var modal = document.getElementById("modal");

// Dapatkan elemen gambar di dalam modal
var modalImg = document.getElementById("imgModal");
var captionText = document.getElementById("caption");

// Dapatkan semua gambar yang bisa diklik
var images = document.querySelectorAll(".clickable-img");

// Tambahkan event listener untuk setiap gambar yang diklik
images.forEach(function(img) {
    img.onclick = function() {
        modal.style.display = "block"; // Tampilkan modal
        modalImg.src = this.src; // Gambar modal sesuai dengan gambar yang diklik
        captionText.innerHTML = this.alt; // Caption berdasarkan alt gambar
    }
});

// Dapatkan tombol close dan tambahkan event listener untuk menutup modal
var closeBtn = document.getElementsByClassName("close")[0];
closeBtn.onclick = function() {
    modal.style.display = "none";
};

// Tutup modal jika pengguna klik di luar gambar
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
