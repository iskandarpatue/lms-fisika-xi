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
      <p>Pernahkah kamu melihat jembatan gantung yang kokoh saat dilalui ratusan kendaraan bermuatan berat, atau gedung pencakar langit yang tetap berdiri tegak saat diguncang angin kencang dan gempa tektonik? Semua karya rekayasa struktur tersebut dibangun di atas pemahaman mendalam tentang perpaduan <strong>Hukum Gerak Newton</strong> dan <strong>keseimbangan gaya statis/dinamis</strong>.</p>
      <div class="context-box">
        <strong>Prinsip Inti Mendalam:</strong> Agar struktur berada dalam keseimbangan statis, resultan gaya harus nol ($\\Sigma F = 0$) dan resultan torsi nol ($\\Sigma \\tau = 0$). Ketika struktur menerima beban dinamis percepatan ($a$), berlaku Hukum II Newton ($\\Sigma F = m \\cdot a$). Struktur dirancang mendisipasi energi tersebut melalui fleksibilitas elastis.
      </div>
      <h4>2. Analisis Gaya Normal, Gesek, dan Inersia pada Desain Transportasi</h4>
      <p>Pada tikungan jalan tol atau sirkuit balap, kemiringan jalan dirancang sudut $\\theta$ (<em>banked turn</em>) agar komponen gaya normal ($N \\sin \\theta$) menyediakan gaya sentripetal pembelok tanpa bergantung pada gaya gesekan ban semata.</p>
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
        • <strong>Asas Kontinuitas & Bernoulli:</strong> $A_1 v_1 = A_2 v_2$. Di bagian aliran fluida yang lebih cepat, tekanannya justru menurun, menciptakan daya hisap atau gaya angkat aerodinamika.
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
      <p>Bumi adalah sistem termodinamika raksasa. Radiasi surya berfrekuensi tinggi diserap, lalu dilepaskan sebagai radiasi inframerah panjang. Emisi gas rumah kaca memerangkap panas ini di troposfer.</p>
      <div class="context-box">
        <strong>Analisis Termodinamika Perubahan Iklim:</strong><br>
        • <strong>Hukum I Termodinamika ($\\Delta U = Q - W$):</strong> Kelebihan kalor radiasi matahari yang terperangkap meningkatkan energi dalam atmosfer dan samudra secara eksponensial.<br>
        • <strong>Efisiensi Mesin Termal (Hukum II):</strong> Mesin berbahan bakar fosil menghasilkan kalor sisa buangan ($Q_L$) yang mempercepat entropi dan polusi termal global.
      </div>
    `,
    videoEmbed: "https://www.youtube-nocookie.com/embed/oJAbATJCugs",
    game: {
      judul: "Misi 3: Strategi Mitigasi Emisi Termal Pabrik Hijau",
      deskripsi: "Pembangkit listrik uap bekerja di antara suhu 600 K dan 300 K. Langkah termodinamika manakah yang paling bijak untuk menekan polusi panas perairan sekitar?",
      opsi: [
        { teks: "A. Membuang air kondensasi panas langsung ke ekosistem danau.", benar: false, alasan: "Salah. Ini merusak keseimbangan hayati perairan." },
        { teks: "B. Memanfaatkan kalor buangan untuk sistem kogenerasi distilasi dan menaikkan efisiensi mesin termal.", benar: true, alasan: "Sempurna! Menurut Hukum II Termodinamika, kogenerasi mendaur ulang kalor sisa sehingga mengurangi pembuangan panas ke atmosfer bebas." },
        { teks: "C. Menurunkan suhu reservoir panas agar sama dengan suhu danau.", benar: false, alasan: "Salah. Jika suhu sama, efisiensi mesin menjadi nol." }
      ]
    },
    lkm: {
      title: "LKM 3: Simulasi Efek Rumah Kaca dan Keseimbangan Radiasi",
      guide: "Buka simulator PhET Greenhouse Effect. Uji konsentrasi gas rumah kaca pada zaman es, 1750, dan zaman modern.",
      phetUrl: "https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_all.html",
      q1: "1. Berapakah perkiraan suhu permukaan bumi jika tidak ada gas rumah kaca sama sekali di atmosfer?",
      q2: "2. Bagaimana interaksi partikel gas metana dan CO2 saat menyerap foton inframerah?",
      q3: "3. Tuliskan rekomendasi solusi konkrit untuk menekan pulau bahang termal (urban heat island) di lingkunganmu!"
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
        • <strong>Interferensi:</strong> Perpaduan dua gelombang yang memperkuat atau meniadakan (dipakai pada headphone peredam bising aktif).<br>
        • <strong>Efek Doppler:</strong> Pergeseran frekuensi bunyi akibat gerak relatif sumber dan pendengar.
      </div>
    `,
    videoEmbed: "https://www.youtube-nocookie.com/embed/edeb3pZ-mhk",
    game: {
      judul: "Misi 4: Kalibrasi Sonar Kapal Peneliti Palung Laut",
      deskripsi: "Sebuah kapal menembakkan pulsa ultrasonik berkecepatan 1.500 m/s di air laut. Pantulan gema diterima kembali setelah 4 detik. Berapakah kedalaman palung tersebut?",
      opsi: [
        { teks: "A. 6.000 meter tanpa dispersi sedikit pun.", benar: false, alasan: "Salah. 4 detik adalah waktu tempuh bolak-balik (pergi dan pulang)." },
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

// DATA 35 SISWA
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

// MENU 1: MATERI
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

// MENU 2: FORMATIF
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
  const tpNama = DATABASE_TP[currentTPFormatifIndex].kode;

  const dataLKM = {
    siswa: siswaNama,
    tp: tpNama,
    q1: document.getElementById("lkm-input-1").value,
    q2: document.getElementById("lkm-input-2").value,
    q3: document.getElementById("lkm-input-3").value,
    waktu: new Date().toLocaleString()
  };
  localStorage.setItem(`lkm_${tpNama}_${siswaNama}`, JSON.stringify(dataLKM));
  document.getElementById("lkm-saved-alert").style.display = "block";
}

// MENU 3: SUMATIF
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

// MENU 4: PETA KONSEP
function pilihTPPeta(index) {
  currentTPPetaIndex = index;
  const pills = document.querySelectorAll("#panel-peta .tp-pill");
  pills.forEach((p, idx) => p.classList.toggle("active", idx === index));

  const tp = DATABASE_TP[index];
  document.getElementById("peta-badge").innerText = tp.kode;
  document.getElementById("peta-title").innerText = `Peta Konsep: ${tp.nama}`;
  document.getElementById("peta-saved-status").style.display = "none";

  // Muat data peta konsep tersimpan jika ada
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

// MENU 5: PENILAIAN DIRI & ANTAR TEMAN
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
    // Sembunyikan nama diri sendiri dari daftar teman yang dinilai
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
