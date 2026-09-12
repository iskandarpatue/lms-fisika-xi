// =========================================================
// LMS FISIKA KELAS XI - DAFTAR LENGKAP SISWA (35 SISWA)
// =========================================================
const DAFTAR_SISWA = [
  { no: 1, nama: "Abel Pratama Katili", gender: "Perempuan" },
  { no: 2, nama: "Adeliani Putri R. Agu", gender: "Perempuan" },
  { no: 3, nama: "Anastasya Said", gender: "Perempuan" },
  { no: 4, nama: "Andika Pratama Latoini", gender: "Laki-laki" },
  { no: 5, nama: "Cindra H. Mohamad", gender: "Perempuan" },
  { no: 6, nama: "Dea Ananda Nusi", gender: "Perempuan" },
  { no: 7, nama: "Dhea Ananda Putri Sadapu", gender: "Perempuan" },
  { no: 8, nama: "Dimas Saputra R. Antu", gender: "Laki-laki" },
  { no: 9, nama: "Dwi Rangga B. Yahya", gender: "Laki-laki" },
  { no: 10, nama: "Elsawati M. Alinti", gender: "Perempuan" },
  { no: 11, nama: "Farel Mahmud", gender: "Laki-laki" },
  { no: 12, nama: "Fatmah Igirisa", gender: "Perempuan" },
  { no: 13, nama: "Fauzan R. Rahman", gender: "Laki-laki" },
  { no: 14, nama: "Grelis R. Sapiun", gender: "Perempuan" },
  { no: 15, nama: "Hamzah R. Ibrahim", gender: "Laki-laki" },
  { no: 16, nama: "Ismail H. Mantali", gender: "Laki-laki" },
  { no: 17, nama: "Ismail Usman", gender: "Laki-laki" },
  { no: 18, nama: "Moh. Riski Ahmad", gender: "Laki-laki" },
  { no: 19, nama: "Moh. Rivaldo Arbie", gender: "Laki-laki" },
  { no: 20, nama: "Mohamad Aslammun R. Hemeto", gender: "Laki-laki" },
  { no: 21, nama: "Mohammad Azwar Ahmad", gender: "Laki-laki" },
  { no: 22, nama: "Muhamad Chaidar Ali", gender: "Laki-laki" },
  { no: 23, nama: "Muhamad Syahrul Thalib", gender: "Laki-laki" },
  { no: 24, nama: "Muhamad Husin", gender: "Laki-laki" },
  { no: 25, nama: "Nabila Hemuto", gender: "Perempuan" },
  { no: 26, nama: "Nikita Umar", gender: "Perempuan" },
  { no: 27, nama: "Nuraini A. Yusuf", gender: "Perempuan" },
  { no: 28, nama: "Parel C. Pasilia", gender: "Laki-laki" },
  { no: 29, nama: "Rofik Adrianto Katili", gender: "Laki-laki" },
  { no: 30, nama: "Silva Talib", gender: "Perempuan" },
  { no: 31, nama: "Sulistia Y. Kaharu", gender: "Perempuan" },
  { no: 32, nama: "Syahlan Zulkifli Mamu", gender: "Laki-laki" },
  { no: 33, nama: "Syahril Naha", gender: "Laki-laki" },
  { no: 34, nama: "Ummi Salam M. Toka", gender: "Perempuan" },
  { no: 35, nama: "Valentino E. Karim", gender: "Laki-laki" }
];

let currentRole = 'murid';

// Kredensial Resmi
const USERS = {
  murid: { username: "murid", pass: "mpi2026" },
  guru: { username: "iskandarpatue", pass: "Guru2026", displayName: "Pak Guru Iskandar Patue" }
};

// Inisialisasi Saat Halaman Dimuat
window.addEventListener("DOMContentLoaded", () => {
  isiPilihanMurid();

  // Cek sesi login tersimpan
  const savedSession = localStorage.getItem("lms_physics_session");
  if (savedSession) {
    try {
      const s = JSON.parse(savedSession);
      bukaDasbor(s.role, s.name, s.gender);
    } catch (e) {
      localStorage.removeItem("lms_physics_session");
    }
  }
});

// Masukkan 35 Siswa ke Elemen <select>
function isiPilihanMurid() {
  const selectElem = document.getElementById("select-nama-murid");
  if (!selectElem) return;

  DAFTAR_SISWA.forEach(siswa => {
    const opt = document.createElement("option");
    opt.value = siswa.nama;
    opt.dataset.gender = siswa.gender;
    const kodeGender = siswa.gender === "Laki-laki" ? "L" : "P";
    opt.textContent = `${siswa.no.toString().padStart(2, '0')}. ${siswa.nama} (${kodeGender})`;
    selectElem.appendChild(opt);
  });
}

// Ganti Tab Peran
function setRole(role) {
  currentRole = role;
  const tabMurid = document.getElementById("btn-tab-murid");
  const tabGuru = document.getElementById("btn-tab-guru");
  const userInput = document.getElementById("username");
  const errorBanner = document.getElementById("error-banner");

  if (errorBanner) errorBanner.style.display = "none";
  userInput.value = "";
  document.getElementById("password").value = "";

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

// Logika Validasi Login
function handleLogin(event) {
  event.preventDefault();

  const userClean = document.getElementById("username").value.trim().toLowerCase();
  const passClean = document.getElementById("password").value.trim();
  const errorBanner = document.getElementById("error-banner");

  // 1. Jika Guru / Admin
  if (userClean === USERS.guru.username && passClean === USERS.guru.pass) {
    simpanDanBukaSesi('guru', USERS.guru.displayName, '');
    return;
  }

  // 2. Jika Murid -> Munculkan Jendela Pilih Nama Siswa
  if (userClean === USERS.murid.username && passClean === USERS.murid.pass) {
    if (errorBanner) errorBanner.style.display = "none";
    document.getElementById("login-container").style.display = "none";
    document.getElementById("modal-pilih-siswa").style.display = "flex";
    return;
  }

  // 3. Jika Kredensial Salah
  if (errorBanner) {
    errorBanner.style.display = "block";
    errorBanner.innerHTML = `
      <strong>Gagal Masuk!</strong> Kredensial tidak cocok.<br>
      <small>Periksa username dan password Anda kembali.</small>
    `;
  }
}

// Konfirmasi Pilihan Siswa dari Modal
function konfirmasiNamaSiswa() {
  const selectElem = document.getElementById("select-nama-murid");
  const studentErr = document.getElementById("student-error");
  const selectedName = selectElem.value;

  if (!selectedName) {
    studentErr.style.display = "block";
    return;
  }

  studentErr.style.display = "none";
  const selectedOption = selectElem.options[selectElem.selectedIndex];
  const gender = selectedOption.dataset.gender || "";

  document.getElementById("modal-pilih-siswa").style.display = "none";
  simpanDanBukaSesi('murid', selectedName, gender);
}

// Simpan Sesi
function simpanDanBukaSesi(role, name, gender) {
  const sessionData = { role, name, gender };
  localStorage.setItem("lms_physics_session", JSON.stringify(sessionData));
  bukaDasbor(role, name, gender);
}

// Menampilkan Dasbor
function bukaDasbor(role, name, gender) {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("modal-pilih-siswa").style.display = "none";
  document.getElementById("dashboard-container").style.display = "flex";

  const welcomeText = document.getElementById("welcome-text");
  const roleLabel = document.getElementById("user-role-label");
  const viewMurid = document.getElementById("view-murid");
  const viewGuru = document.getElementById("view-guru");

  if (role === 'guru') {
    welcomeText.innerText = name;
    roleLabel.innerText = "Mode Pendidik • Panel Admin";
    viewGuru.style.display = "block";
    viewMurid.style.display = "none";
  } else {
    welcomeText.innerText = name;
    roleLabel.innerText = "Siswa Kelas XI • Fase F";
    
    // Sambutan personal siswa
    document.getElementById("student-greeting").innerText = `Selamat Datang, ${name}! 🚀`;
    document.getElementById("student-gender-badge").innerText = `Siswa (${gender})`;

    viewMurid.style.display = "block";
    viewGuru.style.display = "none";
  }
}

// Keluar / Logout
function handleLogout() {
  localStorage.removeItem("lms_physics_session");
  
  document.getElementById("dashboard-container").style.display = "none";
  document.getElementById("modal-pilih-siswa").style.display = "none";
  document.getElementById("login-container").style.display = "flex";

  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("select-nama-murid").selectedIndex = 0;
  
  setRole('murid');
}

// Intip Sandi
function togglePasswordVisibility() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}
