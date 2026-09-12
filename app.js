// =========================================================
// BASIS DATA PEMBELAJARAN FISIKA FASE F KELAS XI (DEEP LEARNING)
// =========================================================
const DATABASE_TP = [
  {
    id: 0,
    kode: "TP 1.1",
    nama: "Gerak dan Gaya",
    judul: "TP 1.1: Hubungan Gerak dan Gaya serta Rekayasa Struktur",
    cp: "Menganalisis hubungan gerak dan gaya serta pemanfaatannya untuk menjelaskan fenomena alam, desain, atau rekayasa struktur.",
    materi: `
      <h4>1. Eksplorasi Fenomena: Ketahanan Struktur terhadap Dinamika Beban</h4>
      <p>Pernahkah kamu melihat jembatan gantung yang kokoh saat dilalui ratusan kendaraan bermuatan berat, atau gedung pencakar langit yang tetap berdiri tegak saat diguncang gempa? Semua karya rekayasa struktur tersebut dibangun di atas pemahaman mendalam tentang perpaduan <strong>Hukum Gerak Newton</strong> dan <strong>keseimbangan gaya statis/dinamis</strong>.</p>
      <div class="context-box">
        <strong>Prinsip Inti Mendalam:</strong> Agar struktur berada dalam keseimbangan statis diam, resultan gaya harus nol ($\\Sigma F = 0$) dan resultan torsi nol ($\\Sigma \\tau = 0$). Ketika struktur menerima beban dinamis percepatan ($a$), berlaku Hukum II Newton ($\\Sigma F = m \\cdot a$). Struktur dirancang mendisipasi energi tersebut tanpa patah.
      </div>
      <h4>2. Analisis Gaya Normal, Gesek, dan Inersia pada Desain Transportasi</h4>
      <p>Pada tikungan sirkuit balap atau jalan tol layang, kemiringan sudut $\\theta$ (<em>banked turn</em>) memanfaatkan komponen gaya normal ($N \\sin \\theta$) untuk menyediakan gaya sentripetal pembelok tanpa bergantung pada gaya gesekan ban semata.</p>
    `,
    videoEmbed: "https://www.youtube-nocookie.com/embed/j-zczJXSxnw",
    game: {
      judul: "Misi 1: Penyelamatan Jembatan Gantung dari Beban Kritis",
      deskripsi: "Sebuah truk bermassa 20 ton mogok di tengah bentang jembatan saat angin kencang berhembus 5.000 N. Sebagai insinyur struktur, tindakan fisis manakah yang paling tepat untuk mencegah kabel baja putus?",
      opsi: [
        { teks: "A. Menambah kecepatan hembusan angin agar frekuensi alami kabel berubah.", benar: false, alasan: "Salah. Ini justru meningkatkan beban lateral dan risiko osilasi resonansi runtuh." },
        { teks: "B. Memperbesar sudut kemiringan kabel penyangga utama terhadap tiang agar tegangan kabel berkurang dan mendistribusikan beban ke pondasi angkur.", benar: true, alasan: "Tepat Sekali! Komponen vertikal tegangan kabel penahan T = W / (2 sin θ). Distribusi beban ke angkur pondasi menjadi lebih aman." },
        { teks: "C. Mengurangi massa tumpuan pondasi jembatan menjadi setengahnya.", benar: false, alasan: "Salah. Pondasi membutuhkan inersia massa yang besar untuk mengunci struktur tanah." }
      ]
    },
    lkm: {
      title: "LKM 1: Investigasi Gaya dan Gerak pada Benda Bergerak",
      guide: "Buka simulator PhET Forces and Motion. Ubah nilai Applied Force dan amati percepatan saat massa digandakan.",
      phetUrl: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html",
      q1: "1. Catat nilai percepatan (a) saat massa 50 kg dan gaya 100 N dibanding saat massa 100 kg:",
      q2: "2. Bagaimana pengaruh gaya gesek statis dan kinetis terhadap percepatan gerak benda?",
      q3: "3. Jelaskan bagaimana prinsip ini diterapkan dalam merancang sistem pengereman kendaraan berat!"
    },
    defaultLinkUjian: "https://forms.gle/"
  },
  {
    id: 1,
    kode: "TP 2.1",
    nama: "Hukum Fluida",
    judul: "TP 2.1: Penerapan Hukum Fluida dalam Karya Kehidupan Sehari-hari",
    cp: "Membuat karya yang menunjukkan penerapan hukum fluida dalam kehidupan sehari-hari.",
    materi: `
      <h4>1. Eksplorasi Fenomena: Dongkrak Hidrolik hingga Aerodinamika</h4>
      <p>Mengapa montir mobil dapat mengangkat beban seberat 2 ton hanya dengan menginjak tuas kecil dongkrak hidrolik? Mengapa sayap pesawat terbang mampu menghasilkan gaya angkat masif?</p>
      <div class="context-box">
        <strong>Prinsip Inti Mendalam:</strong><br>
        • <strong>Hukum Pascal:</strong> Tekanan fluida tertutup diteruskan sama besar ($P_1 = P_2 \\rightarrow F_1/A_1 = F_2/A_2$). Luas penampang yang besar melipatgandakan gaya keluaran.<br>
        • <strong>Asas Kontinuitas & Bernoulli:</strong> $A_1 v_1 = A_2 v_2$. Di bagian aliran fluida yang lebih cepat, tekanannya justru menurun, menciptakan gaya angkat aerodinamika.
      </div>
    `,
    videoEmbed: "https://www.youtube-nocookie.com/embed/UJ3-Zm1wbIQ",
    game: {
      judul: "Misi 2: Operasi Menyelam Kapal Selam Riset Bahari",
      deskripsi: "Untuk menyelidiki terumbu karang di kedalaman 50 meter secara melayang stabil (keseimbangan netral), langkah fisis apakah yang harus diambil oleh operator katup tangki?",
      opsi: [
        { teks: "A. Mengisi tangki ballast hingga massa jenis rata-rata kapal tepat sama dengan massa jenis air laut sekitarnya.", benar: true, alasan: "Hebat! Sesuai Hukum Archimedes, saat ρ_kapal = ρ_fluida, Gaya Apung tepat mengimbangi Berat kapal, membuatnya melayang stabil." },
        { teks: "B. Membuang seluruh air keluar dari tangki ballast.", benar: false, alasan: "Salah. Membuang air akan membuat kapal terapung kembali ke permukaan." },
        { teks: "C. Memperbesar luas kemudi sayap tanpa menyentuh tangki ballast.", benar: false, alasan: "Salah. Kemudi hanya mengatur orientasi laju, bukan gaya apung statis." }
      ]
    },
    lkm: {
      title: "LKM 2: Eksperimen Tekanan Fluida dan Massa Jenis",
      guide: "Buka simulator PhET Under Pressure. Pindahkan sensor tekanan pada variasi kedalaman dan jenis fluida.",
      phetUrl: "https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_all.html",
      q1: "1. Catat tekanan pada kedalaman 1 m, 2 m, dan 3 m di dalam air murni:",
      q2: "2. Apa yang terjadi pada nilai tekanan hidrostatik jika fluida diganti dengan cairan madu pada kedalaman yang sama?",
      q3: "3. Jelaskan bagaimana prinsip bejana berhubungan dimanfaatkan pada desain bendungan air!"
    },
    defaultLinkUjian: "https://forms.gle/"
  },
  {
    id: 2,
    kode: "TP 3.1",
    nama: "Kalor & Termodinamika",
    judul: "TP 3.1: Kalor, Termodinamika, dan Analisis Perubahan Iklim Global",
    cp: "Menganalisis konsep kalor dan termodinamika serta penerapannya untuk mengidentifikasi fenomena perubahan iklim.",
    materi: `
      <h4>1. Eksplorasi Fenomena: Ketidakseimbangan Neraca Termal Bumi</h4>
      <p>Bumi adalah sistem termodinamika raksasa. Radiasi surya diserap dan dilepaskan kembali sebagai inframerah. Emisi gas rumah kaca berlebih memerangkap panas ini di atmosfer.</p>
      <div class="context-box">
        <strong>Analisis Termodinamika Perubahan Iklim:</strong><br>
        • <strong>Hukum I Termodinamika ($\\Delta U = Q - W$):</strong> Kelebihan kalor radiasi matahari meningkatkan energi dalam atmosfer dan samudra secara eksponensial.<br>
        • <strong>Efisiensi Mesin Termal (Hukum II):</strong> Mesin industri melepaskan kalor sisa ($Q_L$) yang mempercepat kenaikan suhu global.
      </div>
    `,
    videoEmbed: "https://www.youtube-nocookie.com/embed/oJAbATJCugs",
    game: {
      judul: "Misi 3: Strategi Mitigasi Emisi Termal Pabrik Hijau",
      deskripsi: "Pembangkit listrik uap bekerja di antara suhu 600 K dan 300 K. Langkah termodinamika manakah yang paling bijak untuk menekan polusi panas perairan sekitar?",
      opsi: [
        { teks: "A. Membuang air kondensasi panas langsung ke danau.", benar: false, alasan: "Salah. Ini merusak ekosistem akuatik." },
        { teks: "B. Memanfaatkan kalor buangan untuk sistem kogenerasi dan menaikkan efisiensi mesin termal.", benar: true, alasan: "Sempurna! Menurut Hukum II Termodinamika, kogenerasi mendaur ulang kalor sisa sehingga mengurangi pembuangan panas ke lingkungan bebas." },
        { teks: "C. Menurunkan suhu reservoir panas agar sama dengan suhu danau.", benar: false, alasan: "Salah. Jika suhu sama, efisiensi mesin menjadi nol." }
      ]
    },
    lkm: {
      title: "LKM 3: Simulasi Efek Rumah Kaca dan Keseimbangan Radiasi",
      guide: "Buka simulator PhET Greenhouse Effect. Uji konsentrasi gas rumah kaca pada zaman es, 1750, dan hari ini.",
      phetUrl: "https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_all.html",
      q1: "1. Berapakah perkiraan suhu permukaan bumi jika tidak ada gas rumah kaca sama sekali di atmosfer?",
      q2: "2. Bagaimana interaksi partikel gas metana dan CO2 saat menyerap foton inframerah?",
      q3: "3. Tuliskan rekomendasi solusi konkrit untuk menekan pemanasan lokal di lingkungan sekolahmu!"
    },
    defaultLinkUjian: "https://forms.gle/"
  },
  {
    id: 3,
    kode: "TP 4.1",
    nama: "Gejala Gelombang",
    judul: "TP 4.1: Menganalisis Gejala Gelombang dalam Teknologi dan Kehidupan",
    cp: "Menganalisis gejala gelombang dan penerapannya dalam kehidupan sehari-hari.",
    materi: `
      <h4>1. Eksplorasi Fenomena: Gelombang sebagai Pembawa Informasi</h4>
      <p>Bagaimana jaringan Wi-Fi mengirimkan sinyal video tanpa kabel? Bagaimana dokter memantau detak jantung janin menggunakan USG?</p>
      <div class="context-box">
        <strong>Gejala Karakteristik Gelombang:</strong><br>
        • <strong>Refleksi & Refraksi:</strong> Gelombang memantul pada bidang batas dan berbelok saat melintasi medium berkecepatan berbeda ($n_1 \\sin \\theta_1 = n_2 \\sin \\theta_2$).<br>
        • <strong>Interferensi:</strong> Perpaduan dua gelombang yang saling menguatkan atau meniadakan.<br>
        • <strong>Efek Doppler:</strong> Pergeseran frekuensi bunyi akibat gerak relatif sumber dan pendengar.
      </div>
    `,
    videoEmbed: "https://www.youtube-nocookie.com/embed/edeb3pZ-mhk",
    game: {
      judul: "Misi 4: Kalibrasi Sonar Kapal Peneliti Palung Laut",
      deskripsi: "Sebuah kapal menembakkan pulsa ultrasonik berkecepatan 1.500 m/s di air laut. Pantulan gema diterima kembali setelah 4 detik. Berapakah kedalaman palung tersebut?",
      opsi: [
        { teks: "A. 6.000 meter tanpa dispersi sedikit pun.", benar: false, alasan: "Salah. 4 detik adalah waktu tempuh bolak-balik." },
        { teks: "B. 3.000 meter; gelombang memantul karena perbedaan massa jenis batas dasar laut.", benar: true, alasan: "Tepat! Kedalaman s = (v · t) / 2 = (1500 · 4) / 2 = 3.000 meter." },
        { teks: "C. 1.500 meter di bawah kapal.", benar: false, alasan: "Salah perhitungan waktu." }
      ]
    },
    lkm: {
      title: "LKM 4: Eksperimen Cepat Rambat dan Interferensi Gelombang",
      guide: "Buka simulator PhET Wave on a String. Atur ke mode Oscillate dan variasikan frekuensi serta tegangan tali.",
      phetUrl: "https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_all.html",
      q1: "1. Catat panjang gelombang (λ) saat frekuensi 1.0 Hz dibanding saat 2.0 Hz pada tegangan konstan:",
      q2: "2. Bagaimana pengaruh tegangan tali (Tension) terhadap cepat rambat gelombang?",
      q3: "3. Jelaskan bagaimana fenomena resonansi gelombang bunyi dimanfaatkan pada alat musik akustik!"
    },
    defaultLinkUjian: "https://forms.gle/"
  }
];

// DATA 35 PESERTA DIDIK LENGKAP
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
let currentTPIndex = 0;
let currentTPFormatifIndex = 0;
let currentTPPetaIndex = 0;
let currentUploadedMapBase64 = "";

const USERS = {
  murid: { username: "murid", pass: "mpi2026" },
  guru: { username: "iskandarpatue", pass: "Guru2026", displayName: "Pak Guru Iskandar Patue" }
};

window.addEventListener("DOMContentLoaded", () => {
  isiPilihanMurid();
  muatLinkSumatif();

  const saved = localStorage.getItem("lms_physics_session");
  if (saved) {
    try {
      const s = JSON.parse(saved);
      bukaDasbor(s.role, s.name);
    } catch (e) {
      localStorage.removeItem("lms_physics_session");
    }
  }
});

function isiPilihanMurid() {
  const sel = document.getElementById("select-nama-murid");
  if (!sel) return;
  DAFTAR_SISWA.forEach(s => {
    const opt = document.createElement("option");
    opt.value = s.nama;
    const g = s.gender === "Laki-laki" ? "L" : "P";
    opt.textContent = `${s.no.toString().padStart(2, '0')}. ${s.nama} (${g})`;
    sel.appendChild(opt);
  });
}

function setRole(role) {
  currentRole = role;
  const tabM = document.getElementById("btn-tab-murid");
  const tabG = document.getElementById("btn-tab-guru");
  const userInput = document.getElementById("username");
  userInput.value = "";
  document.getElementById("password").value = "";

  if (role === 'murid') {
    tabM.classList.add("active");
    tabG.classList.remove("active");
    userInput.placeholder = "Ketik: murid";
  } else {
    tabG.classList.add("active");
    tabM.classList.remove("active");
    userInput.placeholder = "Ketik: IskandarPatue";
  }
}

function handleLogin(e) {
  e.preventDefault();
  const u = document.getElementById("username").value.trim().toLowerCase();
  const p = document.getElementById("password").value.trim();
  const err = document.getElementById("error-banner");

  if (u === USERS.guru.username && p === USERS.guru.pass) {
    simpanDanBukaSesi('guru', USERS.guru.displayName);
    return;
  }
  if (u === USERS.murid.username && p === USERS.murid.pass) {
    if (err) err.style.display = "none";
    document.getElementById("login-container").style.display = "none";
    document.getElementById("modal-pilih-siswa").style.display = "flex";
    return;
  }
  if (err) {
    err.style.display = "block";
    err.innerText = "Kredensial salah! Periksa username dan password.";
  }
}

function konfirmasiNamaSiswa() {
  const sel = document.getElementById("select-nama-murid");
  const nama = sel.value;
  if (!nama) {
    document.getElementById("student-error").style.display = "block";
    return;
  }
  document.getElementById("modal-pilih-siswa").style.display = "none";
  simpanDanBukaSesi('murid', nama);
}

function simpanDanBukaSesi(role, name) {
  localStorage.setItem("lms_physics_session", JSON.stringify({ role, name }));
  bukaDasbor(role, name);
}

function bukaDasbor(role, name) {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("modal-pilih-siswa").style.display = "none";
  document.getElementById("dashboard-container").style.display = "flex";
  document.getElementById("welcome-text").innerText = name;

  if (role === 'guru') {
    document.getElementById("user-role-label").innerText = "Mode Pendidik • Panel Admin";
    document.getElementById("view-guru").style.display = "block";
    document.getElementById("view-murid").style.display = "none";
    
    // Buka tab tabel pertama guru
    pindahTabGuru('lkm');
    renderAdminLinks();
  } else {
    document.getElementById("user-role-label").innerText = "Siswa Kelas XI • Fase F";
    document.getElementById("student-greeting").innerText = `Selamat Datang, ${name}! ⚡`;
    document.getElementById("view-murid").style.display = "block";
    document.getElementById("view-guru").style.display = "none";

    pilihTP(0);
    pilihTPFormatif(0);
    pilihTPPeta(0);
    renderSumatifCards();
    isiDropdownTemanSebaya(name);
  }
}

function handleLogout() {
  localStorage.removeItem("lms_physics_session");
  document.getElementById("dashboard-container").style.display = "none";
  document.getElementById("modal-pilih-siswa").style.display = "none";
  document.getElementById("login-container").style.display = "flex";
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  setRole('murid');
}

function togglePasswordVisibility() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}

// =========================================================
// NAVIGASI 5 MENU UTAMA MURID
// =========================================================
function pindahMenuMurid(menu) {
  const menus = ['materi', 'formatif', 'sumatif', 'peta', 'penilaian'];
  menus.forEach(m => {
    const btn = document.getElementById(`tab-menu-${m}`);
    const panel = document.getElementById(`panel-${m}`);
    if (btn) btn.classList.toggle("active", m === menu);
    if (panel) panel.style.display = (m === menu) ? "block" : "none";
  });
}

function pilihTP(index) {
  currentTPIndex = index;
  const pills = document.querySelectorAll("#panel-materi .tp-pill");
  pills.forEach((p, idx) => p.classList.toggle("active", idx === index));

  const data = DATABASE_TP[index];
  document.getElementById("materi-badge").innerText = data.kode;
  document.getElementById("materi-judul").innerText = data.judul;
  document.getElementById("materi-cp").innerText = `Tujuan Pembelajaran: ${data.cp}`;
  document.getElementById("materi-konten").innerHTML = data.materi;
  document.getElementById("materi-video-frame").src = data.videoEmbed;
}

function pilihTPFormatif(index) {
  currentTPFormatifIndex = index;
  const pills = document.querySelectorAll("#panel-formatif .tp-pill");
  pills.forEach((p, idx) => p.classList.toggle("active", idx === index));

  const data = DATABASE_TP[index];
  document.getElementById("game-title").innerText = data.game.judul;
  document.getElementById("game-desc").innerText = data.game.deskripsi;
  const optionsBox = document.getElementById("game-options-box");
  optionsBox.innerHTML = "";
  document.getElementById("game-result-box").style.display = "none";

  data.game.opsi.forEach(opt => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerText = opt.teks;
    btn.onclick = () => verifikasiJawabanGame(opt);
    optionsBox.appendChild(btn);
  });

  document.getElementById("lkm-title").innerText = data.lkm.title;
  document.getElementById("lkm-guide").innerText = data.lkm.guide;
  document.getElementById("lkm-phet-frame").src = data.lkm.phetUrl;
  document.getElementById("label-lkm-q1").innerText = data.lkm.q1;
  document.getElementById("label-lkm-q2").innerText = data.lkm.q2;
  document.getElementById("label-lkm-q3").innerText = data.lkm.q3;
  document.getElementById("lkm-input-1").value = "";
  document.getElementById("lkm-input-2").value = "";
  document.getElementById("lkm-input-3").value = "";
  document.getElementById("lkm-saved-alert").style.display = "none";
}

function gantiModeFormatif(mode) {
  document.getElementById("btn-mode-game").classList.toggle("active", mode === 'game');
  document.getElementById("btn-mode-lkm").classList.toggle("active", mode === 'lkm');
  document.getElementById("box-game-formatif").style.display = mode === 'game' ? "block" : "none";
  document.getElementById("box-lkm-formatif").style.display = mode === 'lkm' ? "block" : "none";
}

function verifikasiJawabanGame(pilihan) {
  const resBox = document.getElementById("game-result-box");
  resBox.style.display = "block";
  if (pilihan.benar) {
    resBox.style.background = "rgba(16, 185, 129, 0.15)";
    resBox.style.border = "1px solid rgba(16, 185, 129, 0.4)";
    resBox.style.color = "#6ee7b7";
    resBox.innerHTML = `<strong>MISI BERHASIL! 🎖️</strong><br>${pilihan.alasan}`;
  } else {
    resBox.style.background = "rgba(244, 63, 94, 0.15)";
    resBox.style.border = "1px solid rgba(244, 63, 94, 0.4)";
    resBox.style.color = "#fda4af";
    resBox.innerHTML = `<strong>ANALISIS KURANG TEPAT! ⚠️</strong><br>${pilihan.alasan}`;
  }
}

function simpanLKM(e) {
  e.preventDefault();
  const session = JSON.parse(localStorage.getItem("lms_physics_session") || "{}");
  const siswaNama = session.name || "Siswa";
  const tpKode = DATABASE_TP[currentTPFormatifIndex].kode;

  const dataLKM = {
    siswa: siswaNama,
    tp: tpKode,
    q1: document.getElementById("lkm-input-1").value,
    q2: document.getElementById("lkm-input-2").value,
    q3: document.getElementById("lkm-input-3").value,
    waktu: new Date().toLocaleString()
  };
  localStorage.setItem(`lkm_${tpKode}_${siswaNama}`, JSON.stringify(dataLKM));
  document.getElementById("lkm-saved-alert").style.display = "block";
}

function muatLinkSumatif() {
  const savedLinks = localStorage.getItem("lms_sumatif_links");
  if (savedLinks) {
    try {
      const links = JSON.parse(savedLinks);
      DATABASE_TP.forEach((tp, idx) => { if (links[idx]) tp.defaultLinkUjian = links[idx]; });
    } catch (e) {}
  }
}

function renderSumatifCards() {
  const container = document.getElementById("sumatif-cards-container");
  if (!container) return;
  container.innerHTML = "";
  DATABASE_TP.forEach(tp => {
    const card = document.createElement("div");
    card.className = "sumatif-card";
    card.innerHTML = `
      <div>
        <span class="module-badge">${tp.kode}</span>
        <h4>Asesmen Sumatif: ${tp.nama}</h4>
        <p>${tp.cp}</p>
      </div>
      <a href="${tp.defaultLinkUjian}" target="_blank" class="link-box-btn">Buka Link Soal Ujian ↗</a>
    `;
    container.appendChild(card);
  });
}

function pilihTPPeta(index) {
  currentTPPetaIndex = index;
  const pills = document.querySelectorAll("#panel-peta .tp-pill");
  pills.forEach((p, idx) => p.classList.toggle("active", idx === index));

  const tp = DATABASE_TP[index];
  document.getElementById("peta-badge").innerText = tp.kode;
  document.getElementById("peta-title").innerText = `Peta Konsep: ${tp.nama}`;
  document.getElementById("peta-saved-status").style.display = "none";

  const session = JSON.parse(localStorage.getItem("lms_physics_session") || "{}");
  const savedMap = localStorage.getItem(`peta_${tp.kode}_${session.name}`);
  const previewImg = document.getElementById("peta-preview-img");

  if (savedMap) {
    try {
      const m = JSON.parse(savedMap);
      document.getElementById("peta-text-utama").value = m.utama || "";
      document.getElementById("peta-text-cabang").value = m.cabang || "";
      document.getElementById("peta-text-kesulitan").value = m.kesulitan || "";
      if (m.gambar) {
        previewImg.src = m.gambar;
        previewImg.style.display = "block";
      } else {
        previewImg.style.display = "none";
      }
    } catch (e) {}
  } else {
    document.getElementById("peta-text-utama").value = "";
    document.getElementById("peta-text-cabang").value = "";
    document.getElementById("peta-text-kesulitan").value = "";
    previewImg.style.display = "none";
    currentUploadedMapBase64 = "";
  }
}

function handleImageUploadPeta(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    currentUploadedMapBase64 = e.target.result;
    const preview = document.getElementById("peta-preview-img");
    preview.src = currentUploadedMapBase64;
    preview.style.display = "block";
  };
  reader.readAsDataURL(file);
}

function simpanPetaKonsep() {
  const session = JSON.parse(localStorage.getItem("lms_physics_session") || "{}");
  const siswaNama = session.name || "Siswa";
  const tp = DATABASE_TP[currentTPPetaIndex].kode;

  const dataPeta = {
    siswa: siswaNama,
    tp: tp,
    utama: document.getElementById("peta-text-utama").value,
    cabang: document.getElementById("peta-text-cabang").value,
    kesulitan: document.getElementById("peta-text-kesulitan").value,
    gambar: currentUploadedMapBase64,
    waktu: new Date().toLocaleString()
  };

  localStorage.setItem(`peta_${tp}_${siswaNama}`, JSON.stringify(dataPeta));
  const statusEl = document.getElementById("peta-saved-status");
  statusEl.style.display = "inline";
  setTimeout(() => { statusEl.style.display = "none"; }, 4000);
}

function gantiSubPenilaian(sub) {
  document.getElementById("btn-eval-diri").classList.toggle("active", sub === 'diri');
  document.getElementById("btn-eval-teman").classList.toggle("active", sub === 'teman');
  document.getElementById("sub-penilaian-diri").style.display = (sub === 'diri') ? "block" : "none";
  document.getElementById("sub-penilaian-teman").style.display = (sub === 'teman') ? "block" : "none";
}

function isiDropdownTemanSebaya(currentSiswaNama) {
  const sel = document.getElementById("select-teman-dinilai");
  if (!sel) return;
  sel.innerHTML = '<option value="" disabled selected>-- Pilih salah satu dari 35 teman --</option>';

  DAFTAR_SISWA.forEach(s => {
    if (s.nama !== currentSiswaNama) {
      const opt = document.createElement("option");
      opt.value = s.nama;
      opt.textContent = `${s.no.toString().padStart(2, '0')}. ${s.nama}`;
      sel.appendChild(opt);
    }
  });
}

function simpanPenilaianDiri(e) {
  e.preventDefault();
  const session = JSON.parse(localStorage.getItem("lms_physics_session") || "{}");
  const siswaNama = session.name || "Siswa";

  const dataSelf = {
    siswa: siswaNama,
    dipahami: document.getElementById("eval-diri-a").value,
    belumDipahami: document.getElementById("eval-diri-b").value,
    rencanaTindakan: document.getElementById("eval-diri-c").value,
    waktu: new Date().toLocaleString()
  };

  localStorage.setItem(`eval_diri_${siswaNama}`, JSON.stringify(dataSelf));
  const alertEl = document.getElementById("eval-diri-alert");
  alertEl.style.display = "block";
  setTimeout(() => { alertEl.style.display = "none"; }, 4000);
}

function simpanPenilaianTeman(e) {
  e.preventDefault();
  const session = JSON.parse(localStorage.getItem("lms_physics_session") || "{}");
  const penilaiNama = session.name || "Siswa";
  const temanDinilai = document.getElementById("select-teman-dinilai").value;
  const tpPilihan = document.getElementById("select-tp-teman").value;

  const ind1 = document.querySelector('input[name="peer_ind_1"]:checked')?.value || "0";
  const ind2 = document.querySelector('input[name="peer_ind_2"]:checked')?.value || "0";
  const ind3 = document.querySelector('input[name="peer_ind_3"]:checked')?.value || "0";
  const ind4 = document.querySelector('input[name="peer_ind_4"]:checked')?.value || "0";
  const catatan = document.getElementById("peer-notes").value;

  const dataPeer = {
    penilai: penilaiNama,
    yangDinilai: temanDinilai,
    tp: tpPilihan,
    skor: {
      penguasaanKonsep: ind1,
      investigasiLab: ind2,
      kolaborasiDiskusi: ind3,
      sikapSolutif: ind4
    },
    catatan: catatan,
    waktu: new Date().toLocaleString()
  };

  localStorage.setItem(`eval_peer_${temanDinilai}_oleh_${penilaiNama}`, JSON.stringify(dataPeer));
  const alertEl = document.getElementById("eval-teman-alert");
  alertEl.style.display = "block";
  e.target.reset();
  setTimeout(() => { alertEl.style.display = "none"; }, 4000);
}

// =========================================================
// LOGIKA DASBOR GURU / ADMIN & PANEL REKAPITULASI
// =========================================================
function pindahTabGuru(tab) {
  const tabs = ['lkm', 'peta', 'eval-diri', 'eval-teman', 'links'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-guru-${t}`);
    const panel = document.getElementById(`panel-guru-${t}`);
    if (btn) btn.classList.toggle("active", t === tab);
    if (panel) panel.style.display = (t === tab) ? "block" : "none";
  });

  if (tab === 'lkm') renderTabelGuruLKM();
  if (tab === 'peta') renderTabelGuruPeta();
  if (tab === 'eval-diri') renderTabelGuruEvalDiri();
  if (tab === 'eval-teman') renderTabelGuruEvalTeman();
}

// 1. REKAP LKM
function renderTabelGuruLKM() {
  const tbody = document.getElementById("tabel-lkm-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  DAFTAR_SISWA.forEach(s => {
    const tr = document.createElement("tr");
    const kodeGender = s.gender === "Laki-laki" ? "L" : "P";

    let colHTML = `
      <td style="color:var(--cyan-neon); font-weight:700;">${s.no}</td>
      <td style="font-weight:600;">${s.nama}</td>
      <td><span style="opacity:0.75;">${kodeGender}</span></td>
    `;

    // Cek status 4 TP
    const tps = ['TP 1.1', 'TP 2.1', 'TP 3.1', 'TP 4.1'];
    tps.forEach(tp => {
      const itemKey = `lkm_${tp}_${s.nama}`;
      const dataStr = localStorage.getItem(itemKey);
      if (dataStr) {
        colHTML += `
          <td>
            <span class="status-badge badge-done">✓ Selesai</span>
            <button class="btn-action-view" style="margin-left:6px;" onclick="bukaModalDetailLKM('${tp}', '${s.nama}')">Tinjau</button>
          </td>
        `;
      } else {
        colHTML += `<td><span class="status-badge badge-undone">- Belum</span></td>`;
      }
    });

    tr.innerHTML = colHTML;
    tbody.appendChild(tr);
  });
}

function bukaModalDetailLKM(tp, nama) {
  const dataStr = localStorage.getItem(`lkm_${tp}_${nama}`);
  if (!dataStr) return;
  const d = JSON.parse(dataStr);

  document.getElementById("modal-detail-badge").innerText = `LEMBAR KERJA: ${tp}`;
  document.getElementById("modal-detail-title").innerText = `Hasil Investigasi LKM ${tp}`;
  document.getElementById("modal-detail-subtitle").innerText = `Peserta Didik: ${nama} • Waktu: ${d.waktu || '-'}`;

  document.getElementById("modal-detail-body").innerHTML = `
    <div style="margin-bottom:14px; background:rgba(6,11,20,0.6); padding:12px; border-radius:6px; border:1px solid var(--card-border);">
      <strong style="color:var(--cyan-neon);">1. Pengamatan Variabel Bebas & Terikat:</strong>
      <p style="margin-top:6px; color:#f8fafc;">${d.q1 || '-'}</p>
    </div>
    <div style="margin-bottom:14px; background:rgba(6,11,20,0.6); padding:12px; border-radius:6px; border:1px solid var(--card-border);">
      <strong style="color:var(--cyan-neon);">2. Analisis Hubungan Konseptual:</strong>
      <p style="margin-top:6px; color:#f8fafc;">${d.q2 || '-'}</p>
    </div>
    <div style="background:rgba(6,11,20,0.6); padding:12px; border-radius:6px; border:1px solid var(--card-border);">
      <strong style="color:var(--cyan-neon);">3. Kesimpulan Akhir & Solusi Desain/Rekayasa:</strong>
      <p style="margin-top:6px; color:#f8fafc;">${d.q3 || '-'}</p>
    </div>
  `;

  document.getElementById("modal-guru-detail").style.display = "flex";
}

// 2. REKAP PETA KONSEP
function renderTabelGuruPeta() {
  const tbody = document.getElementById("tabel-peta-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  DAFTAR_SISWA.forEach(s => {
    // Cari apakah ada peta konsep yang pernah dikirim di salah satu TP
    let found = null;
    let foundTP = "";
    const tps = ['TP 1.1', 'TP 2.1', 'TP 3.1', 'TP 4.1'];
    for (let tp of tps) {
      const dataStr = localStorage.getItem(`peta_${tp}_${s.nama}`);
      if (dataStr) {
        found = JSON.parse(dataStr);
        foundTP = tp;
        break;
      }
    }

    const tr = document.createElement("tr");
    if (found) {
      const lampiranHTML = found.gambar 
        ? `<span class="status-badge badge-done">Ada Gambar</span>` 
        : `<span style="opacity:0.6;">Teks Saja</span>`;
      
      tr.innerHTML = `
        <td style="color:var(--cyan-neon); font-weight:700;">${s.no}</td>
        <td style="font-weight:600;">${s.nama}</td>
        <td><span class="status-badge badge-done">${foundTP}</span></td>
        <td>${found.utama || '-'}</td>
        <td style="color:#fcd34d; font-weight:600;">${found.kesulitan ? '⚠️ ' + found.kesulitan : '-'}</td>
        <td>${lampiranHTML}</td>
        <td><button class="btn-action-view" onclick="bukaModalDetailPeta('${foundTP}', '${s.nama}')">Tinjau Detail</button></td>
      `;
    } else {
      tr.innerHTML = `
        <td style="color:var(--cyan-neon); font-weight:700;">${s.no}</td>
        <td style="font-weight:600;">${s.nama}</td>
        <td><span class="status-badge badge-undone">-</span></td>
        <td><span style="opacity:0.5;">Belum mengirim</span></td>
        <td><span style="opacity:0.5;">-</span></td>
        <td>-</td>
        <td>-</td>
      `;
    }
    tbody.appendChild(tr);
  });
}

function bukaModalDetailPeta(tp, nama) {
  const dataStr = localStorage.getItem(`peta_${tp}_${nama}`);
  if (!dataStr) return;
  const d = JSON.parse(dataStr);

  document.getElementById("modal-detail-badge").innerText = `PETA KONSEP: ${tp}`;
  document.getElementById("modal-detail-title").innerText = `Analisis Peta Konsep: ${d.utama || '-'}`;
  document.getElementById("modal-detail-subtitle").innerText = `Peserta Didik: ${nama} • Waktu: ${d.waktu || '-'}`;

  let gambarHTML = "";
  if (d.gambar) {
    gambarHTML = `
      <div style="margin-top:14px; text-align:center;">
        <strong style="color:var(--cyan-neon); display:block; margin-bottom:8px;">Foto/Sketsa Peta Konsep:</strong>
        <img src="${d.gambar}" style="max-width:100%; max-height:280px; border-radius:8px; border:1px solid var(--card-border);" alt="Peta Konsep Siswa">
      </div>
    `;
  }

  document.getElementById("modal-detail-body").innerHTML = `
    <div style="margin-bottom:12px; background:rgba(6,11,20,0.6); padding:12px; border-radius:6px; border:1px solid var(--card-border);">
      <strong style="color:var(--cyan-neon);">Cabang & Hubungan Relasi Konseptual:</strong>
      <pre style="white-space:pre-wrap; font-family:'Plus Jakarta Sans'; color:#f8fafc; margin-top:6px;">${d.cabang || '-'}</pre>
    </div>
    <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.4); padding:12px; border-radius:6px;">
      <strong style="color:#fbbf24;">Materi yang Dirasa Masih Sulit (Perhatian Guru):</strong>
      <p style="margin-top:4px; color:#fef3c7;">${d.kesulitan || 'Tidak ada kendala yang dilaporkan.'}</p>
    </div>
    ${gambarHTML}
  `;

  document.getElementById("modal-guru-detail").style.display = "flex";
}

// 3. REKAP PENILAIAN DIRI
function renderTabelGuruEvalDiri() {
  const tbody = document.getElementById("tabel-eval-diri-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  DAFTAR_SISWA.forEach(s => {
    const dataStr = localStorage.getItem(`eval_diri_${s.nama}`);
    const tr = document.createElement("tr");

    if (dataStr) {
      const d = JSON.parse(dataStr);
      tr.innerHTML = `
        <td style="color:var(--cyan-neon); font-weight:700;">${s.no}</td>
        <td style="font-weight:600;">${s.nama}</td>
        <td><span class="status-badge badge-done">✓ Sudah Refleksi</span></td>
        <td style="max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${d.dipahami || '-'}</td>
        <td style="max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; color:#fcd34d;">${d.belumDipahami || '-'}</td>
        <td style="max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; color:#6ee7b7;">${d.rencanaTindakan || '-'}</td>
        <td style="font-size:0.8rem; opacity:0.8;">${d.waktu || '-'}</td>
      `;
    } else {
      tr.innerHTML = `
        <td style="color:var(--cyan-neon); font-weight:700;">${s.no}</td>
        <td style="font-weight:600;">${s.nama}</td>
        <td><span class="status-badge badge-undone">- Belum</span></td>
        <td style="opacity:0.4;">-</td>
        <td style="opacity:0.4;">-</td>
        <td style="opacity:0.4;">-</td>
        <td style="opacity:0.4;">-</td>
      `;
    }
    tbody.appendChild(tr);
  });
}

// 4. REKAP PENILAIAN TEMAN
function renderTabelGuruEvalTeman() {
  const tbody = document.getElementById("tabel-eval-teman-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  let listPeer = [];
  // Pindai seluruh key di localStorage yang diawali eval_peer_
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("eval_peer_")) {
      try {
        const item = JSON.parse(localStorage.getItem(key));
        listPeer.push(item);
      } catch (e) {}
    }
  }

  if (listPeer.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; opacity:0.6; padding:24px;">Belum ada data penilaian antar teman yang masuk.</td></tr>`;
    return;
  }

  listPeer.forEach((p, idx) => {
    const tr = document.createElement("tr");
    const skor = p.skor || {};
    const rata = ((Number(skor.penguasaanKonsep||0) + Number(skor.investigasiLab||0) + Number(skor.kolaborasiDiskusi||0) + Number(skor.sikapSolutif||0)) / 4).toFixed(1);

    tr.innerHTML = `
      <td style="color:var(--cyan-neon); font-weight:700;">${idx + 1}</td>
      <td style="font-weight:600;">${p.penilai || '-'}</td>
      <td style="color:#38bdf8; font-weight:600;">${p.yangDinilai || '-'}</td>
      <td><span class="status-badge badge-done">${p.tp || '-'}</span></td>
      <td style="font-weight:700; color:#fbbf24;">⭐ ${rata} / 4.0</td>
      <td style="font-style:italic;">"${p.catatan || '-'}"</td>
      <td style="font-size:0.8rem; opacity:0.8;">${p.waktu || '-'}</td>
    `;
    tbody.appendChild(tr);
  });
}

function tutupModalDetailGuru() {
  document.getElementById("modal-guru-detail").style.display = "none";
}

// Fitur Pencarian / Filter Tabel Instan
function filterTabel(tbodyId, keyword) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  const rows = tbody.getElementsByTagName("tr");
  const cleanKey = keyword.toLowerCase();

  for (let row of rows) {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(cleanKey) ? "" : "none";
  }
}

// EKSPOR DATA KE FORMAT CSV (EXCEL-READY UTF-8)
function eksporDataKeCSV(tipe) {
  let csvContent = "\uFEFF"; // UTF-8 BOM agar terbaca rapi di Microsoft Excel
  let filename = `rekap_lms_${tipe}_${new Date().toISOString().slice(0,10)}.csv`;

  if (tipe === 'lkm') {
    csvContent += "No,Nama Siswa,Gender,TP 1.1,TP 2.1,TP 3.1,TP 4.1\n";
    DAFTAR_SISWA.forEach(s => {
      const statusTP1 = localStorage.getItem(`lkm_TP 1.1_${s.nama}`) ? "Selesai" : "Belum";
      const statusTP2 = localStorage.getItem(`lkm_TP 2.1_${s.nama}`) ? "Selesai" : "Belum";
      const statusTP3 = localStorage.getItem(`lkm_TP 3.1_${s.nama}`) ? "Selesai" : "Belum";
      const statusTP4 = localStorage.getItem(`lkm_TP 4.1_${s.nama}`) ? "Selesai" : "Belum";
      csvContent += `"${s.no}","${s.nama}","${s.gender}","${statusTP1}","${statusTP2}","${statusTP3}","${statusTP4}"\n`;
    });
  } else if (tipe === 'eval_diri') {
    csvContent += "No,Nama Siswa,Materi Dipahami,Materi Belum Dipahami,Rencana Tindak Lanjut,Waktu\n";
    DAFTAR_SISWA.forEach(s => {
      const data = localStorage.getItem(`eval_diri_${s.nama}`);
      if (data) {
        const d = JSON.parse(data);
        csvContent += `"${s.no}","${s.nama}","${(d.dipahami||'').replace(/"/g, '""')}","${(d.belumDipahami||'').replace(/"/g, '""')}","${(d.rencanaTindakan||'').replace(/"/g, '""')}","${d.waktu||''}"\n`;
      } else {
        csvContent += `"${s.no}","${s.nama}","Belum Mengisi","Belum Mengisi","Belum Mengisi","-"\n`;
      }
    });
  } else if (tipe === 'peta') {
    csvContent += "No,Nama Siswa,TP,Konsep Utama,Materi yang Masih Sulit,Ada Gambar,Waktu\n";
    DAFTAR_SISWA.forEach(s => {
      let found = null;
      let foundTP = "";
      for (let tp of ['TP 1.1', 'TP 2.1', 'TP 3.1', 'TP 4.1']) {
        const d = localStorage.getItem(`peta_${tp}_${s.nama}`);
        if (d) { found = JSON.parse(d); foundTP = tp; break; }
      }
      if (found) {
        csvContent += `"${s.no}","${s.nama}","${foundTP}","${(found.utama||'').replace(/"/g, '""')}","${(found.kesulitan||'').replace(/"/g, '""')}","${found.gambar ? 'Ya' : 'Tidak'}","${found.waktu||''}"\n`;
      } else {
        csvContent += `"${s.no}","${s.nama}","-","Belum Mengirim","-","Tidak","-"\n`;
      }
    });
  } else if (tipe === 'eval_teman') {
    csvContent += "No,Siswa Penilai,Teman yang Dinilai,TP,Rata-rata Skor,Catatan Rekan,Waktu\n";
    let count = 1;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("eval_peer_")) {
        try {
          const p = JSON.parse(localStorage.getItem(key));
          const skor = p.skor || {};
          const rata = ((Number(skor.penguasaanKonsep||0) + Number(skor.investigasiLab||0) + Number(skor.kolaborasiDiskusi||0) + Number(skor.sikapSolutif||0)) / 4).toFixed(1);
          csvContent += `"${count++}","${p.penilai}","${p.yangDinilai}","${p.tp}","${rata}","${(p.catatan||'').replace(/"/g, '""')}","${p.waktu}"\n`;
        } catch (e) {}
      }
    }
  }

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// FITUR PENGISI DATA SIMULASI (MEMUDAHKAN GURU MENGUJI COBA TABEL LANGSUNG)
function isiContohDataSimulasi() {
  // Simulasi LKM untuk Abel Pratama Katili & Dimas Saputra
  localStorage.setItem("lkm_TP 1.1_Abel Pratama Katili", JSON.stringify({
    siswa: "Abel Pratama Katili", tp: "TP 1.1",
    q1: "Saat beban 50 kg dan gaya 100 N, a = 2.0 m/s². Saat beban dinaikkan 100 kg dengan gaya sama, a turun menjadi 1.0 m/s² (berbanding terbalik).",
    q2: "Gaya gesek statis menahan benda sampai gaya dorong melampaui fs_max, setelah bergerak gaya kinetis konstan melawan arah gerak.",
    q3: "Pada rem kendaraan berat, luas kampas rem dan koefisien gesek dioptimalkan untuk menghasilkan gaya deselerasi yang aman.",
    waktu: new Date().toLocaleString()
  }));

  localStorage.setItem("lkm_TP 2.1_Abel Pratama Katili", JSON.stringify({
    siswa: "Abel Pratama Katili", tp: "TP 2.1",
    q1: "Kedalaman 1m = 109 kPa, kedalaman 2m = 119 kPa, kedalaman 3m = 129 kPa. Tekanan naik linier tiap bertambah kedalaman.",
    q2: "Fluida yang lebih rapat (madu) menghasilkan tekanan hidrostatik yang jauh lebih tajam kenaikannya dibanding air.",
    q3: "Dinding dasar bendungan dibuat tebal melebar ke bawah untuk menahan tekanan hidrostatik dasar yang sangat besar.",
    waktu: new Date().toLocaleString()
  }));

  // Simulasi Peta Konsep Dimas Saputra
  localStorage.setItem("peta_TP 1.1_Dimas Saputra R. Antu", JSON.stringify({
    siswa: "Dimas Saputra R. Antu", tp: "TP 1.1",
    utama: "Hukum Gerak Newton & Stabilitas Struktur Bangunan",
    cabang: "• Hukum I (Inersia) -> Ketahanan gempa gedung\n• Hukum II (F=m·a) -> Beban dinamis terpaan angin\n• Hukum III (Aksi-Reaksi) -> Tegangan kabel penahan jembatan",
    kesulitan: "Menghitung komponen vektor sudut kemiringan pada jalan menikung (banked turn).",
    gambar: "",
    waktu: new Date().toLocaleString()
  }));

  // Simulasi Penilaian Diri Adeliani Putri
  localStorage.setItem("eval_diri_Adeliani Putri R. Agu", JSON.stringify({
    siswa: "Adeliani Putri R. Agu",
    dipahami: "Saya sudah sangat memahami prinsip Hukum Pascal pada dongkrak hidrolik dan bagaimana gaya kecil bisa dilipatgandakan dengan memperbesar luas penampang kedua.",
    belumDipahami: "Penurunan persamaan kontinuitas dan Asas Bernoulli saat fluida mengalir di pipa yang memiliki elevasi ketinggian berbeda.",
    rencanaTindakan: "Saya akan mengulang simulasi PhET Fluid Flow dan bertanya pada Pak Guru Iskandar di sesi pendampingan.",
    waktu: new Date().toLocaleString()
  }));

  // Simulasi Penilaian Teman
  localStorage.setItem("eval_peer_Moh. Riski Ahmad_oleh_Andika Pratama Latoini", JSON.stringify({
    penilai: "Andika Pratama Latoini",
    yangDinilai: "Moh. Riski Ahmad",
    tp: "TP 1.1",
    skor: { penguasaanKonsep: "4", investigasiLab: "4", kolaborasiDiskusi: "3", sikapSolutif: "4" },
    catatan: "Riski sangat hebat saat mengutak-atik simulasi PhET Forces and Motion, analisanya sangat cepat dan jelas!",
    waktu: new Date().toLocaleString()
  }));

  alert("✓ Data simulasi berhasil dimasukkan! Panel rekapitulasi akan segera disegarkan.");
  renderTabelGuruLKM();
  renderTabelGuruPeta();
  renderTabelGuruEvalDiri();
  renderTabelGuruEvalTeman();
}

// PANEL ADMIN: KELOLA TAUTAN SUMATIF
function renderAdminLinks() {
  const container = document.getElementById("admin-links-manager");
  if (!container) return;
  container.innerHTML = "";

  DATABASE_TP.forEach((tp, idx) => {
    const row = document.createElement("div");
    row.style.background = "rgba(6, 11, 20, 0.6)";
    row.style.padding = "14px";
    row.style.borderRadius = "8px";
    row.innerHTML = `
      <div style="font-weight:700; color:#38bdf8; margin-bottom:6px;">${tp.kode}: Asesmen ${tp.nama}</div>
      <div class="admin-link-input">
        <input type="url" id="link-input-${idx}" value="${tp.defaultLinkUjian}" placeholder="Tempel URL Google Form / Quizizz...">
        <button onclick="simpanLinkUjian(${idx})">Simpan Tautan</button>
      </div>
    `;
    container.appendChild(row);
  });
}

function simpanLinkUjian(index) {
  const input = document.getElementById(`link-input-${index}`);
  DATABASE_TP[index].defaultLinkUjian = input.value.trim();

  const links = DATABASE_TP.map(t => t.defaultLinkUjian);
  localStorage.setItem("lms_sumatif_links", JSON.stringify(links));
  alert(`✓ Tautan Asesmen ${DATABASE_TP[index].kode} berhasil diperbarui!`);
}
