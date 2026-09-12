// ==========================================
// LMS FISIKA KELAS XI - LOGIKA AUTENTIKASI
// ==========================================

let currentRole = 'murid';

// Kredensial Resmi LMS
const USERS = {
  murid: {
    username: "murid",
    pass: "mpi2026",
    displayName: "Murid Fisika XI",
    roleLabel: "Portal Siswa • Belajar Mandiri"
  },
  guru: {
    username: "iskandarpatue", // Disimpan huruf kecil untuk pencocokan case-insensitive
    pass: "Guru2026",
    displayName: "Pak Guru Iskandar Patue",
    roleLabel: "Panel Pendidik / Admin"
  }
};

// Cek Sesi Tersimpan Saat Memuat Web
window.addEventListener("DOMContentLoaded", () => {
  const savedSession = localStorage.getItem("lms_physics_session");
  if (savedSession) {
    try {
      const session = JSON.parse(savedSession);
      bukaDasbor(session.role, session.name, session.roleLabel);
    } catch (e) {
      localStorage.removeItem("lms_physics_session");
    }
  }
});

// Pergantian Tab Peran Secara Manual
function setRole(role) {
  currentRole = role;
  
  const tabMurid = document.getElementById("btn-tab-murid");
  const tabGuru = document.getElementById("btn-tab-guru");
  const userInput = document.getElementById("username");
  const passInput = document.getElementById("password");
  const errorBanner = document.getElementById("error-banner");

  if (errorBanner) errorBanner.style.display = "none";
  userInput.value = "";
  passInput.value = "";

  if (role === 'murid') {
    tabMurid.classList.add("active");
    tabGuru.classList.remove("active");
    userInput.placeholder = "Ketik: murid";
  } else {
    tabGuru.classList.add("active");
    tabMurid.classList.remove("active");
    userInput.placeholder = "Ketik: IskandarPatue";
  }
}

// Logika Validasi Login Pintar (Smart Login)
function handleLogin(event) {
  event.preventDefault();

  const userField = document.getElementById("username").value.trim();
  const passField = document.getElementById("password").value.trim();
  const errorBanner = document.getElementById("error-banner");

  const inputUserClean = userField.toLowerCase();

  // 1. Cek Apakah Kredensial Cocok untuk Guru / Admin
  if (inputUserClean === USERS.guru.username && passField === USERS.guru.pass) {
    simpanDanBukaSesi('guru', USERS.guru.displayName, USERS.guru.roleLabel);
    return;
  }

  // 2. Cek Apakah Kredensial Cocok untuk Murid
  if (inputUserClean === USERS.murid.username && passField === USERS.murid.pass) {
    simpanDanBukaSesi('murid', USERS.murid.displayName, USERS.murid.roleLabel);
    return;
  }

  // 3. Jika Tidak Ada yang Cocok
  if (errorBanner) {
    errorBanner.style.display = "block";
    errorBanner.innerHTML = `
      <strong>Gagal Masuk!</strong> Kredensial tidak cocok.<br>
      <small style="opacity: 0.85;">Periksa kembali username dan kata sandi Anda.</small>
    `;
  }
}

// Simpan Sesi ke LocalStorage
function simpanDanBukaSesi(role, name, roleLabel) {
  const sessionData = { role, name, roleLabel };
  localStorage.setItem("lms_physics_session", JSON.stringify(sessionData));
  bukaDasbor(role, name, roleLabel);
}

// Menampilkan Dasbor Sesuai Peran
function bukaDasbor(role, name, roleLabel) {
  const loginContainer = document.getElementById("login-container");
  const dashContainer = document.getElementById("dashboard-container");
  const welcomeText = document.getElementById("welcome-text");
  const roleLabelElem = document.getElementById("user-role-label");
  const viewMurid = document.getElementById("view-murid");
  const viewGuru = document.getElementById("view-guru");

  loginContainer.style.display = "none";
  dashContainer.style.display = "flex";

  welcomeText.innerText = name;
  roleLabelElem.innerText = roleLabel;

  if (role === 'guru') {
    viewGuru.style.display = "block";
    viewMurid.style.display = "none";
  } else {
    viewMurid.style.display = "block";
    viewGuru.style.display = "none";
  }
}

// Keluar / Logout Sesi
function handleLogout() {
  localStorage.removeItem("lms_physics_session");
  localStorage.removeItem("lms_user_session"); // Menghapus sisa session versi lama jika ada

  document.getElementById("dashboard-container").style.display = "none";
  document.getElementById("login-container").style.display = "flex";

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";

  const errorBanner = document.getElementById("error-banner");
  if (errorBanner) errorBanner.style.display = "none";

  // Kembalikan ke tab default
  setRole('murid');
}

// Intip Kata Sandi (Show/Hide Password)
function togglePasswordVisibility() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}