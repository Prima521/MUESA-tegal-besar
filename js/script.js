// =========================================================
// 1. DATA PRODUK / POSTER
// =========================================================

const posterData = {
  1: {
    title: "Tas Daur Ulang",
    category: "Produk Kreatif",
    description:
      "Tas Daur Ulang merupakan salah satu produk kreatif dari Bank Sampah Tegal Besar yang memanfaatkan bahan bekas menjadi barang yang dapat digunakan kembali dan memiliki nilai ekonomi.",
    poster: "assets/poster/Poster-produk11.jpeg",
  },

  2: {
    title: "Lilin Aroma Terapi",
    category: "Produk Kreatif",
    description:
      "Lilin Aroma Terapi merupakan salah satu produk kreatif Bank Sampah Tegal Besar yang dibuat melalui pemanfaatan bahan bekas menjadi produk yang memiliki nilai guna serta membantu mengurangi limbah lingkungan.",
    poster: "assets/poster/poster-produk2.jpg",
  },

  3: {
    title: "Sabun EkoEnzim",
    category: "Produk Kreatif",
    description:
      "Sabun EkoEnzim merupakan produk ramah lingkungan yang memanfaatkan ekoenzim sebagai bahan pengolahan, sehingga memiliki nilai guna sekaligus membantu mengurangi limbah organik.",
    poster: "assets/poster/poster-produk3.jpg",
  },

  4: {
    title: "Tempat Tisu Daur Ulang",
    category: "Dekorasi",
    description:
      "Tempat Tisu Daur Ulang merupakan produk kerajinan yang dibuat dengan memanfaatkan kembali bahan bekas yang sudah tidak digunakan. Produk ini diolah menjadi tempat tisu yang menarik, bermanfaat, dan memiliki nilai guna sekaligus membantu mengurangi limbah lingkungan.",
    poster: "assets/poster/poster-produk4.jpg",
  },

  5: {
    title: "Drop Box",
    category: "Produk Rumah Tangga",
    description:
      "Drop Box merupakan produk rumah tangga yang dibuat dengan memanfaatkan material bekas menjadi barang yang dapat digunakan kembali untuk berbagai kebutuhan sehari-hari serta membantu mengurangi jumlah sampah.",
    poster: "assets/poster/poster-produk5.jpg",
  },

  6: {
    title: "Air Lindih",
    category: "Produk Kreatif",
    description:
      "Air Lindih merupakan cairan yang dihasilkan dari proses penguraian bahan organik dalam pengelolaan sampah. Cairan ini dapat dimanfaatkan sebagai salah satu produk hasil pengolahan limbah organik sehingga memiliki nilai guna serta membantu mendukung pengelolaan sampah yang lebih ramah lingkungan.",
    poster: "assets/poster/poster-produk6.jpg",
  },

  7: {
    title: "Vas Bunga Daur Ulang",
    category: "Produk Kreatif",
    description:
      "Vas Bunga Daur Ulang merupakan salah satu produk kreatif yang dibuat dengan memanfaatkan material bekas dan mengolahnya kembali menjadi barang yang berguna, dapat digunakan kembali, serta memiliki nilai ekonomi.",
    poster: "assets/poster/poster-produk10.jpg",
  },

  8: {
    title: "Gantungan Kunci Daur Ulang",
    category: "Produk Kreatif",
    description:
      "Gantungan Kunci Daur Ulang merupakan produk kreatif yang dibuat dengan memanfaatkan material bekas dan mengolahnya kembali menjadi barang yang dapat digunakan kembali serta memiliki nilai guna.",
    poster: "assets/poster/poster-produk7.png",
  },

  9: {
    title: "Magnet Kulkas Daur Ulang",
    category: "Produk Kreatif",
    description:
      "Magnet Kulkas Daur Ulang merupakan produk kreatif yang dibuat dengan memanfaatkan material bekas dan mengolahnya kembali menjadi barang yang dapat digunakan sebagai hiasan serta memiliki nilai guna.",
    poster: "assets/poster/poster-produk8.jpg",
  },
};

// =========================================================
// 2. MODAL DETAIL PRODUK
// =========================================================

function openModal(title, image, description, poster, pdf) {
  const modal = document.getElementById("productModal");

  // Jika modal tidak tersedia
  if (!modal) {
    return;
  }

  // -------------------------
  // Judul
  // -------------------------

  const modalTitle = document.getElementById("modalTitle");

  if (modalTitle) {
    modalTitle.textContent = title;
  }

  // -------------------------
  // Gambar
  // -------------------------

  const modalImage = document.getElementById("modalImage");

  if (modalImage) {
    modalImage.src = image;
    modalImage.alt = title;
  }

  // -------------------------
  // Deskripsi
  // -------------------------

  const modalDescription = document.getElementById("modalDescription");

  if (modalDescription) {
    modalDescription.innerHTML = "";

    const paragraph = document.createElement("p");
    paragraph.textContent = description;

    modalDescription.appendChild(paragraph);
  }

  // -------------------------
  // Link Poster
  // -------------------------

  const modalPoster = document.getElementById("modalPoster");

  if (modalPoster && poster) {
    modalPoster.href = poster;
  }

  // -------------------------
  // Tampilkan Modal
  // -------------------------

  modal.classList.add("show");
  document.body.classList.add("modal-open");
}

// =========================================================
// 3. TUTUP MODAL
// =========================================================

function closeModal() {
  const modal = document.getElementById("productModal");

  if (!modal) {
    return;
  }

  modal.classList.remove("show");
  document.body.classList.remove("modal-open");
}

// =========================================================
// 4. PENCARIAN PRODUK
// =========================================================

function initProductSearch() {
  const searchInput = document.getElementById("searchProduct");

  // Bukan halaman katalog
  if (!searchInput) {
    return;
  }

  const products = document.querySelectorAll(".product-card");
  const emptyProduct = document.getElementById("emptyProduct");

  searchInput.addEventListener("input", function () {
    const keyword = searchInput.value.toLowerCase().trim();

    let totalFound = 0;

    products.forEach(function (product) {
      const productName = (product.dataset.name || "").toLowerCase();

      const productContent = product.textContent.toLowerCase();

      const isMatch =
        productName.includes(keyword) || productContent.includes(keyword);

      if (isMatch) {
        product.style.display = "";
        totalFound++;
      } else {
        product.style.display = "none";
      }
    });

    // -------------------------
    // Produk Tidak Ditemukan
    // -------------------------

    if (emptyProduct) {
      emptyProduct.style.display = totalFound === 0 ? "block" : "none";
    }
  });
}

// =========================================================
// 5. HALAMAN POSTER
// =========================================================

function initPosterPage() {
  const posterImage = document.getElementById("posterImage");

  // Bukan halaman poster
  if (!posterImage) {
    return;
  }

  // -------------------------
  // Ambil ID dari URL
  // -------------------------

  const urlParams = new URLSearchParams(window.location.search);

  const productId = urlParams.get("id");

  // Ambil data produk
  const product = posterData[productId];

  // -------------------------
  // Produk Ditemukan
  // -------------------------

  if (product) {
    const posterTitle = document.getElementById("posterTitle");

    const posterDescription = document.getElementById("posterDescription");

    const posterCategory = document.getElementById("posterCategory");

    const openPoster = document.getElementById("openPoster");

    const downloadPoster = document.getElementById("downloadPoster");

    if (downloadPoster) {
      downloadPoster.href = product.poster;
      downloadPoster.download = product.title + ".jpg";
    }

    // Judul
    if (posterTitle) {
      posterTitle.textContent = product.title;
    }

    // Deskripsi
    if (posterDescription) {
      posterDescription.textContent = product.description;
    }

    // Kategori
    if (posterCategory) {
      posterCategory.textContent = product.category;
    }

    // Gambar
    posterImage.src = product.poster;
    posterImage.alt = `Poster ${product.title}`;

    // Buka poster penuh
    if (openPoster) {
      openPoster.href = product.poster;
    }

    // Title browser
    document.title = `${product.title} | Bank Sampah Tegal Besar`;

    return;
  }

  // -------------------------
  // Produk Tidak Ditemukan
  // -------------------------

  const posterTitle = document.getElementById("posterTitle");

  const posterDescription = document.getElementById("posterDescription");

  const openPoster = document.getElementById("openPoster");

  if (posterTitle) {
    posterTitle.textContent = "Poster Tidak Ditemukan";
  }

  if (posterDescription) {
    posterDescription.textContent =
      "Poster produk yang Anda cari tidak tersedia.";
  }

  // Sembunyikan gambar
  posterImage.style.display = "none";

  // Sembunyikan tombol
  if (openPoster) {
    openPoster.style.display = "none";
  }
}

// =========================================================
// 6. ERROR GAMBAR
// =========================================================

function initImageErrorHandler() {
  const images = document.querySelectorAll("img");

  images.forEach(function (image) {
    image.addEventListener("error", function () {
      console.warn("Gambar tidak ditemukan:", image.src);
    });
  });
}

// =========================================================
// 7. HAMBURGER MENU
// =========================================================

function initHamburgerMenu() {
  const menuToggle = document.getElementById("menuToggle");

  const navMenu = document.getElementById("navMenu");

  // Elemen tidak tersedia
  if (!menuToggle || !navMenu) {
    return;
  }

  // -------------------------
  // Buka / Tutup Menu
  // -------------------------

  menuToggle.addEventListener("click", function () {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("show");

    const isOpen = navMenu.classList.contains("show");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // -------------------------
  // Tutup Setelah Menu Dipilih
  // -------------------------

  const navLinks = navMenu.querySelectorAll("a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("show");

      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // -------------------------
  // Reset Ketika Desktop
  // -------------------------

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("show");

      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// =========================================================
// 8. ACTIVE NAVBAR BERDASARKAN SCROLL
// =========================================================

function initActiveNavbar() {
  const sections = document.querySelectorAll("#beranda, #tentang");

  const navSectionLinks = document.querySelectorAll(".nav-link");

  // Tidak ada section atau navbar
  if (!sections.length || !navSectionLinks.length) {
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) {
          return;
        }

        const currentSection = entry.target.id;

        // -------------------------
        // Hapus Active
        // -------------------------

        navSectionLinks.forEach(function (link) {
          link.classList.remove("active");
        });

        // -------------------------
        // Tambahkan Active
        // -------------------------

        const activeLink = document.querySelector(
          `.nav-link[href="#${currentSection}"]`,
        );

        if (activeLink) {
          activeLink.classList.add("active");
        }
      });
    },
    {
      threshold: 0.4,
    },
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
}

// =========================================================
// 9. QR CODE
// =========================================================

function initQRCode() {
  const qrContainer = document.getElementById("qrcode");

  // Tidak ada QR Code di halaman
  if (!qrContainer) {
    return;
  }

  // Pastikan library QRCode tersedia
  if (typeof QRCode === "undefined") {
    console.warn("Library QRCode belum dimuat.");

    return;
  }

  // URL halaman katalog
  const urlKatalog = new URL("katalog.html", window.location.href).href;

  // Bersihkan QR sebelumnya
  qrContainer.innerHTML = "";

  // Buat QR Code
  new QRCode(qrContainer, {
    text: urlKatalog,
    width: 200,
    height: 200,
    colorDark: "#092817",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H,
  });
}

// =========================================================
// 10. EVENT ESC UNTUK MODAL
// =========================================================

function initModalKeyboard() {
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

// =========================================================
// 11. INISIALISASI SEMUA FITUR
// =========================================================

document.addEventListener("DOMContentLoaded", function () {
  initProductSearch();
  initPosterPage();
  initImageErrorHandler();
  initHamburgerMenu();
  initActiveNavbar();
  initQRCode();
  initModalKeyboard();
});
