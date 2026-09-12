// =========================================================
// LMS FISIKA KELAS XI - KURIKULUM MERDEKA (DEEP LEARNING)
// BERKAS UTAMA: app.js (LENGKAP DENGAN KINEMATIKA, REMEDIAL/PENGAYAAN & AI)
// =========================================================

// ---------------------------------------------------------
// 1. BASIS DATA MATERI, IKTP, VIDEO, GAME, LKM, & REMEDIAL/PENGAYAAN
// ---------------------------------------------------------
const DATABASE_TP = [
  {
    id: 0,
    kode: "TP 1.1",
    nama: "Gerak dan Gaya",
    judul: "TP 1.1: Karakteristik Gerak Lurus dan Hukum-Hukum Newton tentang Gaya",
    cp: "Menganalisis hubungan gerak dan gaya serta penerapannya untuk menjelaskan fenomena dalam kehidupan sehari-hari.",
    iktp: [
      "Membedakan konsep posisi, jarak tempuh, dan perpindahan dalam gerak lurus satu dimensi.",
      "Menganalisis perbedaan kelajuan rata-rata (skalar) dan kecepatan rata-rata (vektor) serta konsep percepatan.",
      "Mengidentifikasi karakteristik Gerak Lurus Beraturan (GLB) dan Gerak Lurus Berubah Beraturan (GLBB).",
      "Menerapkan Hukum I, II, dan III Newton untuk menganalisis fenomena kelembaman, percepatan benda, dan gaya aksi-reaksi."
    ],
    materi: `
      <h3>1. Menjelajah Konsep Gerak: Posisi, Jarak, dan Perpindahan</h3>
      <p>Setiap hari kita pasti bergerak: berjalan ke sekolah, mengayuh sepeda, atau naik sepeda motor. Tapi, apakah kamu tahu bahwa dalam fisika, kata <strong>jarak</strong> dan <strong>perpindahan</strong> memiliki makna yang sangat berbeda?</p>
      
      <h4>A. Posisi (Kedudukan)</h4>
      <p>Posisi adalah letak suatu benda pada suatu waktu tertentu terhadap suatu titik acuan yang disepakati bersama. Contoh: "Saya berada 5 meter di sebelah utara tiang bendera sekolah." (Tiang bendera adalah titik acuannya).</p>

      <h4>B. Jarak vs Perpindahan</h4>
      <ul>
        <li><strong>Jarak (Besaran Skalar):</strong> Panjang seluruh lintasan yang ditempuh oleh benda tanpa mempedulikan arah. Jarak nilainya selalu positif.</li>
        <li><strong>Perpindahan (Besaran Vektor):</strong> Perubahan kedudukan benda diukur dari <em>posisi awal langsung ke posisi akhir</em>, dengan memperhitungkan arah geraknya.</li>
      </ul>

      <div class="context-box">
        <strong>Contoh Sangat Nyata di Lapangan Sekolah:</strong><br>
        Bayangkan kamu berlari mengelilingi lintasan lapangan sepak bola sejauh 1 putaran penuh (panjang lintasan 400 meter) hingga kembali lagi ke titik awal start.
        <ul>
          <li><strong>Jarak tempuhmu</strong> = 400 meter (karena kakimu menempuh lintasan 400 meter).</li>
          <li><strong>Perpindahanmu</strong> = <strong>0 meter!</strong> Mengapa nol? Karena posisi akhirmu sama persis dengan posisi awalmu saat start.</li>
        </ul>
      </div>

      <h3>2. Kelajuan vs Kecepatan dan Percepatan</h3>
      <p>Sama halnya dengan jarak dan perpindahan, fisika membedakan kelajuan dan kecepatan:</p>
      
      <table class="article-table">
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Kelajuan (Speed)</th>
            <th>Kecepatan (Velocity)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Jenis Besaran</strong></td>
            <td>Besaran Skalar (hanya punya nilai)</td>
            <td>Besaran Vektor (punya nilai dan arah)</td>
          </tr>
          <tr>
            <td><strong>Dasar Perhitungan</strong></td>
            <td>Berdasarkan Jarak Tempuh total</td>
            <td>Berdasarkan Perpindahan kedudukan</td>
          </tr>
          <tr>
            <td><strong>Rumus Singkat</strong></td>
            <td>Kelajuan = Jarak / Waktu (v = s / t)</td>
            <td>Kecepatan = Perpindahan / Waktu (v = Δx / t)</td>
          </tr>
          <tr>
            <td><strong>Alat Ukur</strong></td>
            <td>Speedometer sepeda motor / mobil</td>
            <td>GPS Navigation dengan indikator arah</td>
          </tr>
        </tbody>
      </table>

      <h4>Percepatan (Akselerasi)</h4>
      <p>Percepatan adalah <strong>perubahan kecepatan tiap satuan waktu</strong> (dirumuskan: <strong>a = (v_akhir - v_awal) / waktu</strong>). Saat lampu lalu lintas menyala hijau dan kamu menarik tuas gas motor, motormu mengalami percepatan positif. Sebaliknya, saat kamu menginjak rem menjelang lampu merah, motormu mengalami perlambatan (percepatan negatif).</p>

      <h3>3. Gerak Lurus: GLB dan GLBB</h3>
      <ol>
        <li><strong>Gerak Lurus Beraturan (GLB):</strong> Gerak benda pada lintasan lurus dengan <em>kecepatan yang tetap konstan</em> (tidak ada percepatan, a = 0). Contoh: kereta api yang melaju stabil di jalur rel datar bebas hambatan.</li>
        <li><strong>Gerak Lurus Berubah Beraturan (GLBB):</strong> Gerak benda pada lintasan lurus dengan <em>percepatan yang tetap konstan</em> (kecepatannya bertambah atau berkurang secara teratur). Contoh: buah mangga yang jatuh bebas dari tangkai pohonnya ditarik gravitasi bumi.</li>
      </ol>

      <h3>4. Dinamika Gerak: Tiga Hukum Newton tentang Gaya</h3>
      <p>Setelah memahami bagaimana benda bergerak, sekarang kita pelajari <strong>penyebab benda bisa bergerak</strong>, yaitu Gaya (Hukum Newton):</p>
      
      <h4>A. Hukum I Newton (Kelembaman / Inersia): ∑F = 0</h4>
      <p>Benda memiliki sifat alami "malas" untuk mengubah keadaannya. Benda yang diam akan tetap diam, dan benda yang bergerak akan terus meluncur lurus jika tidak ada gaya luar yang mengganggunya. Contoh: tubuhmu terlempar ke depan saat mobil direm mendadak (karena tubuhmu ingin mempertahankan gerak majunya).</p>

      <h4>B. Hukum II Newton: F = m × a</h4>
      <p>Gaya yang diberikan pada benda akan menghasilkan percepatan. Semakin besar gaya dorong (F), semakin cepat benda melaju. Tetapi semakin berat massa benda (m), benda semakin lambat bertambah kecepatannya. Mendorong motor mogok sendirian terasa lambat, namun jika didorong bersama 3 orang teman, motor meluncur lebih cepat!</p>

      <h4>C. Hukum III Newton (Aksi - Reaksi): F_aksi = -F_reaksi</h4>
      <p>Ketika kamu memberikan dorongan pada suatu benda, benda itu akan memberikan dorongan balik yang sama besar tetapi berlawanan arah. Contoh: saat kamu mendayung perahu, dayung mendorong air ke belakang (Aksi), dan air mendorong perahu melaju ke depan (Reaksi).</p>
    `,
    // Video Pembelajaran Bahasa Indonesia tentang Gerak Lurus, Jarak, dan Perpindahan
    videoEmbed: "https://www.youtube-nocookie.com/embed/gybugbMsgMw",
    game: {
      judul: "Misi 1: Uji Keselamatan Sabuk Pengaman Mobil (Seatbelt Safety)",
      deskripsi: "Sebuah mobil melaju dengan kecepatan 60 km/jam. Tiba-tiba di depannya ada kucing melintas sehingga sopir menginjak rem mendadak hingga mobil berhenti total. Berdasarkan Hukum Newton, mengapa sabuk pengaman (seatbelt) sangat penting bagi keselamatan penumpang?",
      opsi: [
        { teks: "A. Sabuk pengaman menahan tubuh penumpang yang ingin terus bergerak maju akibat sifat kelembaman (Hukum I Newton).", benar: true, alasan: "Hebat dan Tepat Sekali! Saat mobil berhenti mendadak, tubuh penumpang memiliki sifat inersia (kelembaman) yang cenderung mempertahankan kelajuannya untuk melesat maju. Sabuk pengaman memberikan gaya penahan ke belakang agar penumpang tidak membentur setir atau kaca mobil." },
        { teks: "B. Sabuk pengaman menghilangkan gaya gravitasi bumi sehingga tubuh penumpang melayang.", benar: false, alasan: "Salah. Gaya gravitasi bumi tetap ada dan menarik penumpang ke bawah, bukan dihilangkan." },
        { teks: "C. Sabuk pengaman membuat massa tubuh penumpang menjadi nol.", benar: false, alasan: "Salah. Massa tubuh penumpang tetap konstan dan tidak pernah berubah menjadi nol." }
      ]
    },
    lkm: {
      title: "LKM 1: Eksperimen Gaya Dorong dan Massa pada Gerak Benda",
      guide: "Buka simulator PhET Forces and Motion Basics. Cobalah mendorong kotak kayu dengan variasi gaya dan amati apa yang terjadi pada kecepatannya.",
      phetUrl: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html",
      q1: "1. Ketika kamu mendorong kotak 50 kg dengan gaya 100 N, lalu kamu ganti kotak tersebut menjadi kotak 100 kg dengan gaya dorong yang tetap sama (100 N), apakah kotak kedua melaju lebih cepat atau lebih lambat? Mengapa?",
      q2: "2. Apa yang terjadi pada gerak kotak jika lantai diberi gaya gesek kasar dibanding lantai yang licin tanpa gesekan (es)?",
      q3: "3. Tuliskan 2 contoh penerapan Hukum I atau Hukum III Newton yang pernah kamu alami langsung saat naik sepeda motor atau angkutan umum!"
    },
    remedial: {
      desc: "Pelajari kembali konsep perbedaan mendasar antara jarak (panjang seluruh lintasan) dan perpindahan (selisih posisi akhir terhadap posisi awal), serta rumus dasar v = s / t.",
      soal: "Seorang anak berjalan 6 meter ke timur, kemudian berbalik arah berjalan 2 meter ke barat selama 4 detik. Hitunglah jarak total yang ditempuh, perpindahan anak tersebut, dan kelajuan rata-ratanya!"
    },
    pengayaan: {
      desc: "Tantangan analisis teknologi pengereman darurat pintar (Autonomous Emergency Braking) pada kendaraan listrik modern berbasis sensor jarak dan perlambatan GLBB.",
      soal: "Bagaimana sistem sensor radar mobil mendeteksi laju perlambatan mobil di depannya agar sistem rem otomatis dapat menghentikan kendaraan tepat sebelum terjadi benturan? Hubungkan dengan persamaan GLBB v² = v₀² + 2as!"
    },
    defaultLinkUjian: "https://forms.gle/"
  },
  {
    id: 1,
    kode: "TP 2.1",
    nama: "Hukum Fluida",
    judul: "TP 2.1: Penerapan Hukum Fluida dalam Kehidupan Sehari-hari",
    cp: "Membuat karya yang menunjukkan penerapan hukum fluida dalam kehidupan sehari-hari.",
    iktp: [
      "Menganalisis faktor-faktor yang mempengaruhi besarnya tekanan cairan (tekanan hidrostatik) pada kedalaman air.",
      "Menerapkan prinsip Hukum Pascal pada cara kerja dongkrak hidrolik dan rem cakram kendaraan.",
      "Menjelaskan konsep terapung, melayang, dan tenggelamnya benda berdasarkan Hukum Archimedes.",
      "Menganalisis hubungan kelajuan aliran dan perbedaan tekanan fluida pada cara kerja sayap pesawat (Asas Bernoulli)."
    ],
    materi: `
      <h3>1. Apa itu Fluida?</h3>
      <p>Fluida adalah zat yang bisa mengalir, yaitu zat cair dan gas. Fluida memiliki sifat-sifat menakjubkan yang sering kita jumpai di kehidupan sehari-hari.</p>

      <h3>2. Tekanan Hidrostatik (P = ρ × g × h)</h3>
      <p>Semakin dalam kamu menyelam di kolam renang, semakin besar tekanan air yang menekan tubuh dan gendang telingamu. Tekanan ini disebut <strong>Tekanan Hidrostatik</strong>. Inilah alasan dinding dasar bendungan air selalu dibangun sangat tebal di bagian bawah untuk menahan dorongan air yang luar biasa besar.</p>

      <h3>3. Hukum Pascal: Mengangkat Mobil dengan Tuas Kecil</h3>
      <p>Tekanan cairan pada bejana tertutup diteruskan sama besar ke segala arah (<strong>F₁ / A₁ = F₂ / A₂</strong>). Dengan menginjak pipa kecil berpenampang sempit (A₁), cairan minyak meneruskan tekanan ke pipa besar (A₂) sehingga menghasilkan gaya dorong (F₂) yang sanggup mengangkat mobil seberat 2 ton!</p>

      <h3>4. Hukum Archimedes & Asas Bernoulli</h3>
      <p>Kapal baja mengapung karena memiliki lambung berongga udara yang luas, sehingga massa jenis totalnya lebih kecil dari air laut. Sementara pesawat terbang terangkat ke angkasa berkat Asas Bernoulli: udara meluncur lebih cepat di atas sayap lengkung, menciptakan tekanan rendah di bagian atas dan gaya dorong ke atas.</p>
    `,
    videoEmbed: "https://www.youtube-nocookie.com/embed/UJ3-Zm1wbIQ",
    game: {
      judul: "Misi 2: Mengatur Tangki Kapal Selam Menyelam",
      deskripsi: "Kapal selam sedang berada di permukaan laut. Agar kapal selam dapat menyelam dan melayang dengan tenang di kedalaman 30 meter untuk memantau terumbu karang, apa yang harus dilakukan kapten kapal?",
      opsi: [
        { teks: "A. Mengisi tangki pemberat dengan air laut secukupnya hingga massa jenis total kapal sama dengan massa jenis air laut di sekitarnya.", benar: true, alasan: "Tepat Sekali! Sesuai Hukum Archimedes, saat massa jenis rata-rata kapal sama dengan air laut, gaya apung ke atas seimbang dengan berat kapal, sehingga kapal selam melayang sempurna." },
        { teks: "B. Membuang semua air keluar dari tangki kapal selam sampai kosong.", benar: false, alasan: "Salah. Jika air dibuang, kapal selam akan menjadi ringan dan mengapung kembali ke permukaan." },
        { teks: "C. Mematikan mesin kapal agar kapal jatuh ke dasar laut.", benar: false, alasan: "Salah. Mematikan mesin tanpa mengatur tangki ballast tidak menjamin kapal melayang di kedalaman yang tepat." }
      ]
    },
    lkm: {
      title: "LKM 2: Eksperimen Tekanan Air dan Gaya Apung",
      guide: "Buka simulator PhET Under Pressure. Tarik alat pengukur tekanan ke dalam air pada kedalaman 1 meter, 2 meter, dan 3 meter.",
      phetUrl: "https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_all.html",
      q1: "1. Berapakah angka tekanan yang ditunjukkan alat ukur saat berada di kedalaman 1 meter dibanding saat kedalaman 3 meter?",
      q2: "2. Jika cairan air diganti dengan cairan madu yang lebih kental dan pekat, apakah tekanannya bertambah besar atau kecil? Mengapa?",
      q3: "3. Jelaskan dengan bahasamu sendiri mengapa kapal feri dari besi bisa mengapung di lautan luas!"
    },
    remedial: {
      desc: "Ulangi pemahaman rumus tekanan hidrostatik P = ρ × g × h dan syarat benda terapung, melayang, dan tenggelam.",
      soal: "Hitung tekanan hidrostatik yang dialami penyelam pada kedalaman 5 meter di bawah permukaan danau air tawar (massa jenis air = 1000 kg/m³, gravitasi = 10 m/s²)!"
    },
    pengayaan: {
      desc: "Investigasi desain miniatur kapal selam berbasis mikrokontroler atau cara kerja hidrometer digital pengukur kemurnian cairan.",
      soal: "Rancang sketsa atau alur kerja sebuah alat ukur massa jenis zat cair sederhana (hidrometer) menggunakan sedotan plastik, plastisin penyeimbang, dan skala milimeter!"
    },
    defaultLinkUjian: "https://forms.gle/"
  },
  {
    id: 2,
    kode: "TP 3.1",
    nama: "Kalor & Termodinamika",
    judul: "TP 3.1: Kalor, Termodinamika, dan Analisis Pemanasan Global",
    cp: "Menganalisis konsep kalor dan termodinamika serta penerapannya untuk mengidentifikasi fenomena perubahan iklim.",
    iktp: [
      "Menjelaskan perbedaan suhu dan kalor serta tiga cara perpindahan panas (konduksi, konveksi, dan radiasi).",
      "Menganalisis Hukum I Termodinamika (kekekalan energi panas menjadi kerja mekanik) dalam sistem gas.",
      "Menjelaskan prinsip Hukum II Termodinamika bahwa panas mengalir alami dari benda panas ke benda dingin.",
      "Menganalisis pengaruh perangkap radiasi panas matahari oleh gas rumah kaca terhadap fenomena perubahan iklim global."
    ],
    materi: `
      <h3>1. Membedakan Suhu dan Kalor</h3>
      <p>Suhu adalah ukuran derajat panas dinginnya benda (°C), sedangkan Kalor adalah energi panas yang berpindah dari benda panas ke dingin (Joule). Kalor berpindah melalui Konduksi (rambatan logam), Konveksi (aliran zat cair/gas), dan Radiasi (pancaran sinar matahari).</p>
      
      <h3>2. Hukum Termodinamika & Efek Rumah Kaca</h3>
      <p>Hukum I Termodinamika (<strong>ΔU = Q - W</strong>) membuktikan energi panas bisa diubah menjadi kerja mekanik. Pada fenomena pemanasan global, gas CO₂ dan metana di atmosfer memerangkap radiasi inframerah dari permukaan bumi, sehingga neraca panas planet meningkat drastis.</p>
    `,
    videoEmbed: "https://www.youtube-nocookie.com/embed/oJAbATJCugs",
    game: {
      judul: "Misi 3: Mengurangi Suhu Panas Ruang Kelas",
      deskripsi: "Saat siang hari yang terik, ruang kelas terasa sangat panas menyengat karena atap seng menyerap radiasi matahari. Berdasarkan konsep perpindahan kalor, langkah manakah yang paling efektif dan ramah lingkungan untuk menyejukkan kelas?",
      opsi: [
        { teks: "A. Menanam pohon peneduh rindang di samping jendela kelas dan memasang ventilasi udara silang (cross-ventilation).", benar: true, alasan: "Benar Sekali! Pohon menghalangi radiasi sinar matahari langsung, dan ventilasi silang memperlancar konveksi aliran udara panas keluar ruangan digantikan udara sejuk." },
        { teks: "B. Mengecat dinding kelas dengan warna hitam legam.", benar: false, alasan: "Salah. Warna hitam justru menyerap radiasi panas paling banyak dan membuat ruangan semakin panas." },
        { teks: "C. Menutup rapat semua jendela dan ventilasi sepanjang siang.", benar: false, alasan: "Salah. Udara panas akan terperangkap di dalam ruangan tanpa sirkulasi konveksi." }
      ]
    },
    lkm: {
      title: "LKM 3: Pengamatan Efek Rumah Kaca",
      guide: "Buka simulator PhET Greenhouse Effect. Amati suhu bumi saat kadar gas rumah kaca dinaikkan dari zaman dahulu ke zaman modern.",
      phetUrl: "https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_all.html",
      q1: "1. Apa yang terjadi pada angka suhu permukaan bumi ketika konsentrasi gas rumah kaca dinaikkan?",
      q2: "2. Bagaimana partikel gas inframerah memantul kembali ke permukaan bumi pada simulasi tersebut?",
      q3: "3. Tuliskan 2 aksi nyata yang bisa kamu dan teman sekelasmu lakukan untuk mengurangi emisi gas rumah kaca di sekolah!"
    },
    remedial: {
      desc: "Kaji ulang 3 cara perpindahan kalor dalam kehidupan sehari-hari (konduksi pada alat dapur, konveksi pada cerobong, radiasi matahari).",
      soal: "Berikan masing-masing satu contoh peristiwa konduksi, konveksi, dan radiasi yang terjadi saat kamu memasak mie instan dengan panci di atas kompor gas!"
    },
    pengayaan: {
      desc: "Analisis rancangan pendingin pasif bangunan ramah lingkungan (passive cooling system) tanpa menggunakan AC listrik.",
      soal: "Jelaskan bagaimana konsep menara angin tradisional dan material insulasi atap dapat menurunkan suhu dalam ruangan secara alami berdasarkan prinsip termodinamika!"
    },
    defaultLinkUjian: "https://forms.gle/"
  },
  {
    id: 3,
    kode: "TP 4.1",
    nama: "Gejala Gelombang",
    judul: "TP 4.1: Mengenal Gejala Gelombang dan Bunyi di Sekitar Kita",
    cp: "Menganalisis gejala gelombang dan penerapannya dalam kehidupan sehari-hari.",
    iktp: [
      "Membedakan konsep getaran dan gelombang serta jenis gelombang transversal dan longitudinal.",
      "Menghitung hubungan cepat rambat gelombang, panjang gelombang, dan frekuensi (v = λ × f).",
      "Mengidentifikasi sifat-sifat umum gelombang: pemantulan (refleksi), pembiasan (refraksi), dan penggabungan (interferensi).",
      "Menjelaskan fenomena pergeseran frekuensi bunyi (Efek Doppler) saat sirine ambulans mendekat dan menjauh."
    ],
    materi: `
      <h3>1. Gelombang: Merambatkan Energi Tanpa Memindahkan Materi</h3>
      <p>Gelombang adalah getaran yang merambat. Gelombang Transversal memiliki bukit dan lembah (gelombang air, tali), sedangkan Gelombang Longitudinal memiliki rapatan dan renggangan (gelombang bunyi).</p>
      
      <h3>2. Rumus v = λ × f dan Fenomena Efek Doppler</h3>
      <p>Semua gelombang terikat persamaan <strong>v = λ × f</strong>. Ketika mobil ambulans membunyikan sirine dan melaju mendekat ke arahmu, nadanya terdengar melengking tinggi karena gelombangnya terdesak memadat (Efek Doppler).</p>
    `,
    videoEmbed: "https://www.youtube-nocookie.com/embed/edeb3pZ-mhk",
    game: {
      judul: "Misi 4: Mengukur Kedalaman Laut dengan Sonar",
      deskripsi: "Sebuah kapal nelayan menembakkan pulsa gelombang bunyi sonar ke dasar laut dengan cepat rambat 1.500 m/s di air laut. Bunyi pantulan gema dari dasar laut diterima kembali oleh kapal setelah 2 detik. Berapakah kedalaman laut tersebut?",
      opsi: [
        { teks: "A. 1.500 meter di bawah permukaan laut.", benar: true, alasan: "Hebat dan Sangat Tepat! Waktu 2 detik adalah waktu bolak-balik. Waktu tempuh satu arah adalah 1 detik. Kedalaman = 1.500 m/s × 1 s = 1.500 meter." },
        { teks: "B. 3.000 meter di bawah permukaan laut.", benar: false, alasan: "Salah. Waktu tempuh bolak-balik harus dibagi dua." },
        { teks: "C. 750 meter di bawah permukaan laut.", benar: false, alasan: "Salah perhitungan waktu tempuh." }
      ]
    },
    lkm: {
      title: "LKM 4: Eksperimen Getaran dan Frekuensi Gelombang Tali",
      guide: "Buka simulator PhET Wave on a String. Pasang mode 'Oscillate' dan amati bentuk bukit serta lembah gelombangnya.",
      phetUrl: "https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_all.html",
      q1: "1. Ketika kamu menaikkan angka frekuensi (f) menjadi lebih besar, apakah gelombang tali menjadi semakin rapat atau semakin renggang?",
      q2: "2. Bagaimana perbedaan gerak partikel tali (naik-turun) dengan arah rambatan gelombang (maju ke samping)? Jenis gelombang apakah ini?",
      q3: "3. Tuliskan contoh pemanfaatan gelombang bunyi ultrasonik dalam dunia kedokteran yang kamu ketahui!"
    },
    remedial: {
      desc: "Ulangi perhitungan cepat rambat gelombang v = λ × f dan pemahaman frekuensi f = n / t.",
      soal: "Sebuah gelombang air laut memiliki panjang gelombang 12 meter dan frekuensi 0,5 Hz. Berapakah cepat rambat gelombang tersebut?"
    },
    pengayaan: {
      desc: "Analisis teknologi gelombang seismik untuk deteksi dini gempa dan tsunami di wilayah pesisir Indonesia.",
      soal: "Mengapa gelombang primer (P-wave) selalu terdeteksi lebih dulu di stasiun seismometer dibanding gelombang sekunder (S-wave)? Bagaimana jeda waktu keduanya digunakan untuk menentukan pusat gempa?"
    },
    defaultLinkUjian: "https://forms.gle/"
  }
];

// ---------------------------------------------------------
// 2. ARSIP MODUL AJAR / RPP GURU
// ---------------------------------------------------------
const DATABASE_MODUL_AJAR = [
  {
    tp: "TP 1.1",
    nama: "Modul Ajar: Gerak dan Gaya (Hukum-Hukum Newton)",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Bernalar Kritis, Mandiri, Bergotong Royong",
    deskripsi: "Pembelajaran mendalam mengidentifikasi konsep jarak, perpindahan, kecepatan, serta Hukum I, II, dan III Newton pada keselamatan berkendara.",
    sintaks: "1. Orientasi fenomena lari di lapangan & naik motor • 2. Simulasi PhET Forces & Motion • 3. Analisis sabuk pengaman • 4. Refleksi metakognitif.",
    driveLink: "https://drive.google.com/"
  },
  {
    tp: "TP 2.1",
    nama: "Modul Ajar: Mekanika Fluida & Penerapannya",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Kreatif, Mandiri, Bernalar Kritis",
    deskripsi: "Penyelidikan tekanan hidrostatik, hukum Pascal pada dongkrak, hukum Archimedes pada kapal, dan asas Bernoulli pada sayap pesawat.",
    sintaks: "1. Studi fenomena kapal baja terapung • 2. Eksperimen sensor tekanan PhET Under Pressure • 3. Game misi kapal selam • 4. Evaluasi & peer assessment.",
    driveLink: "https://drive.google.com/"
  },
  {
    tp: "TP 3.1",
    nama: "Modul Ajar: Kalor, Termodinamika & Pemanasan Global",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Beriman & Berakhlak Mulia (Peduli Lingkungan), Bernalar Kritis",
    deskripsi: "Menganalisis konsep perpindahan kalor, hukum termodinamika pada gas, dan dampaknya terhadap perubahan iklim global.",
    sintaks: "1. Analisis fenomena panas matahari & suhu bumi • 2. Simulasi radiasi PhET Greenhouse Effect • 3. Diskusi mitigasi emisi • 4. Penilaian diri mandiri.",
    driveLink: "https://drive.google.com/"
  },
  {
    tp: "TP 4.1",
    nama: "Modul Ajar: Gejala Gelombang dan Bunyi",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Bernalar Kritis, Berkebinekaan Global",
    deskripsi: "Menganalisis besaran fisis gelombang, sifat pemantulan bunyi sonar, pembiasan, dan efek Doppler sirine ambulans.",
    sintaks: "1. Pengamatan gelombang air dan sirine jalan • 2. Eksperimen PhET Wave on a String • 3. Misi sonar kedalaman laut • 4. Asesmen sumatif & refleksi.",
    driveLink: "https://drive.google.com/"
  }
];

// ---------------------------------------------------------
// 3. DAFTAR 35 SISWA LENGKAP
// ---------------------------------------------------------
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

const USERS = {
  murid: { username: "murid", pass: "mpi2026" },
  guru: { username: "iskandarpatue", pass: "Guru2026", displayName: "Pak Guru Iskandar Patue" }
};

let currentRole = 'murid';
let currentTPIndex = 0;
let currentTPFormatifIndex = 0;
let currentTPPetaIndex = 0;
let currentTPRemedialIndex = 0;
let currentUploadedMapBase64 = "";

// ---------------------------------------------------------
// 4. INISIALISASI
// ---------------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  isiPilihanMurid();
  muatLinkSumatif();
  muatLinkModulAjar();

  const today = new Date().toISOString().slice(0, 10);
  const pDate = document.getElementById("presensi-tanggal-input");
  const gDate = document.getElementById("guru-presensi-tanggal");
  const jDate = document.getElementById("jurnal-tanggal");
  if (pDate) pDate.value = today;
  if (gDate) gDate.value = today;
  if (jDate) jDate.value = today;

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
    
    pindahTabGuru('kehadiran');
    renderAdminLinks();
    renderModulAjarCards();
  } else {
    document.getElementById("user-role-label").innerText = "Siswa Kelas XI • Fase F";
    document.getElementById("student-greeting").innerText = `Selamat Datang, ${name}! ⚡`;
    const pDisplay = document.getElementById("presensi-nama-display");
    if (pDisplay) pDisplay.value = name;
    
    document.getElementById("view-murid").style.display = "block";
    document.getElementById("view-guru").style.display = "none";

    pilihTP(0);
    pilihTPFormatif(0);
    pilihTPPeta(0);
    pilihTPRemedial(0);
    renderSumatifCards();
    isiDropdownTemanSebaya(name);
    muatRiwayatPresensiSiswa(name);
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

// ---------------------------------------------------------
// 5. NAVIGASI 8 MENU MURID
// ---------------------------------------------------------
function pindahMenuMurid(menu) {
  const menus = ['materi', 'formatif', 'sumatif', 'peta', 'penilaian', 'presensi', 'remedial', 'ai'];
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

  const iktpListElem = document.getElementById("materi-iktp-list");
  iktpListElem.innerHTML = "";
  if (data.iktp && data.iktp.length > 0) {
    data.iktp.forEach(ind => {
      const li = document.createElement("li");
      li.className = "iktp-item";
      li.innerHTML = `<span class="iktp-check">✓</span> <span>${ind}</span>`;
      iktpListElem.appendChild(li);
    });
  }

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
    resBox.style.background = "#ecfdf5";
    resBox.style.border = "1.5px solid #a7f3d0";
    resBox.style.color = "#065f46";
    resBox.innerHTML = `<strong>MISI BERHASIL! 🎖️</strong><br>${pilihan.alasan}`;
  } else {
    resBox.style.background = "#fff1f2";
    resBox.style.border = "1.5px solid #fecdd3";
    resBox.style.color = "#9f1239";
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
        <p style="color:#475569; font-size:0.88rem; line-height:1.5;">${tp.cp}</p>
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

// MENU 5: PENILAIAN
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
    skor: { penguasaanKonsep: ind1, investigasiLab: ind2, kolaborasiDiskusi: ind3, sikapSolutif: ind4 },
    catatan: catatan,
    waktu: new Date().toLocaleString()
  };

  localStorage.setItem(`eval_peer_${temanDinilai}_oleh_${penilaiNama}`, JSON.stringify(dataPeer));
  const alertEl = document.getElementById("eval-teman-alert");
  alertEl.style.display = "block";
  e.target.reset();
  setTimeout(() => { alertEl.style.display = "none"; }, 4000);
}

// MENU 6: PRESENSI
function simpanPresensiMurid(e) {
  e.preventDefault();
  const session = JSON.parse(localStorage.getItem("lms_physics_session") || "{}");
  const siswaNama = session.name || "Siswa";
  const tanggal = document.getElementById("presensi-tanggal-input").value;
  const status = document.querySelector('input[name="status_kehadiran"]:checked')?.value || "Hadir";
  const ket = document.getElementById("presensi-keterangan").value.trim();

  if (!tanggal) {
    alert("Silakan tentukan tanggal presensi!");
    return;
  }

  let listPresensi = JSON.parse(localStorage.getItem("lms_presensi_records") || "[]");
  listPresensi = listPresensi.filter(p => !(p.siswa === siswaNama && p.tanggal === tanggal));

  const newRecord = {
    siswa: siswaNama,
    tanggal: tanggal,
    status: status,
    keterangan: ket || "Hadir tepat waktu",
    waktu: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };
  listPresensi.push(newRecord);
  localStorage.setItem("lms_presensi_records", JSON.stringify(listPresensi));

  const alertBox = document.getElementById("presensi-alert");
  alertBox.style.display = "block";
  setTimeout(() => { alertBox.style.display = "none"; }, 4000);

  muatRiwayatPresensiSiswa(siswaNama);
}

function muatRiwayatPresensiSiswa(siswaNama) {
  const tbody = document.getElementById("tabel-presensi-siswa-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const listPresensi = JSON.parse(localStorage.getItem("lms_presensi_records") || "[]");
  const riwayat = listPresensi.filter(p => p.siswa === siswaNama).reverse();

  if (riwayat.length === 0) {
    tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; opacity:0.6; padding:16px;">Belum ada riwayat kehadiran tercatat.</td></tr>`;
    return;
  }

  riwayat.forEach(r => {
    const tr = document.createElement("tr");
    let badgeClass = "badge-done";
    if (r.status === "Izin") badgeClass = "badge-izin";
    if (r.status === "Sakit") badgeClass = "badge-sakit";

    tr.innerHTML = `
      <td style="color:#0284c7; font-weight:700;">${r.tanggal}</td>
      <td><span class="status-badge ${badgeClass}">${r.status}</span></td>
      <td>${r.keterangan || '-'}</td>
      <td style="color:#64748b;">${r.waktu}</td>
    `;
    tbody.appendChild(tr);
  });
}

// MENU 7: REMEDIAL & PENGAYAAN MURID
function pilihTPRemedial(index) {
  currentTPRemedialIndex = index;
  const pills = document.querySelectorAll("#panel-remedial .tp-pill");
  pills.forEach((p, idx) => p.classList.toggle("active", idx === index));

  const data = DATABASE_TP[index];
  document.getElementById("remedial-title").innerText = `Remedial & Pengayaan: ${data.nama}`;
  document.getElementById("remedial-desc").innerText = data.remedial.desc;
  document.getElementById("label-remedial-soal").innerText = `Soal Pemulihan Konsep (${data.kode}): ${data.remedial.soal}`;
  
  document.getElementById("pengayaan-desc").innerText = data.pengayaan.desc;
  document.getElementById("label-pengayaan-soal").innerText = `Tantangan Riset (${data.kode}): ${data.pengayaan.soal}`;

  // Muat data tersimpan jika ada
  const session = JSON.parse(localStorage.getItem("lms_physics_session") || "{}");
  const sName = session.name || "Siswa";
  const savedRem = localStorage.getItem(`remedial_${data.kode}_${sName}`);
  const savedPeng = localStorage.getItem(`pengayaan_${data.kode}_${sName}`);

  document.getElementById("remedial-input-ans").value = savedRem ? JSON.parse(savedRem).jawaban : "";
  document.getElementById("pengayaan-input-ans").value = savedPeng ? JSON.parse(savedPeng).jawaban : "";
  document.getElementById("remedial-alert").style.display = "none";
  document.getElementById("pengayaan-alert").style.display = "none";
}

function simpanJawabanRemedial() {
  const ans = document.getElementById("remedial-input-ans").value.trim();
  if (!ans) { alert("Tuliskan jawaban perbaikan konsepmu terlebih dahulu!"); return; }

  const session = JSON.parse(localStorage.getItem("lms_physics_session") || "{}");
  const sName = session.name || "Siswa";
  const tpKode = DATABASE_TP[currentTPRemedialIndex].kode;

  const data = { siswa: sName, tp: tpKode, tipe: "Remedial", jawaban: ans, waktu: new Date().toLocaleString() };
  localStorage.setItem(`remedial_${tpKode}_${sName}`, JSON.stringify(data));
  
  const alertEl = document.getElementById("remedial-alert");
  alertEl.style.display = "block";
  setTimeout(() => { alertEl.style.display = "none"; }, 4000);
}

function simpanJawabanPengayaan() {
  const ans = document.getElementById("pengayaan-input-ans").value.trim();
  if (!ans) { alert("Tuliskan gagasan analisismu terlebih dahulu!"); return; }

  const session = JSON.parse(localStorage.getItem("lms_physics_session") || "{}");
  const sName = session.name || "Siswa";
  const tpKode = DATABASE_TP[currentTPRemedialIndex].kode;

  const data = { siswa: sName, tp: tpKode, tipe: "Pengayaan", jawaban: ans, waktu: new Date().toLocaleString() };
  localStorage.setItem(`pengayaan_${tpKode}_${sName}`, JSON.stringify(data));

  const alertEl = document.getElementById("pengayaan-alert");
  alertEl.style.display = "block";
  setTimeout(() => { alertEl.style.display = "none"; }, 4000);
}

// MENU 8: TUTOR FISIKA AI MURID
function tanyaAIPrompt(teks) {
  document.getElementById("ai-user-input").value = teks;
  handleKirimPesanAI(new Event('submit'));
}

function handleKirimPesanAI(e) {
  e.preventDefault();
  const input = document.getElementById("ai-user-input");
  const userText = input.value.trim();
  if (!userText) return;

  const container = document.getElementById("ai-messages-container");
  
  // Tampilkan pesan murid
  const userMsgEl = document.createElement("div");
  userMsgEl.className = "ai-msg ai-msg-user";
  userMsgEl.innerText = userText;
  container.appendChild(userMsgEl);

  input.value = "";
  container.scrollTop = container.scrollHeight;

  // Simulasi respons cerdas Tutor Fisika AI
  setTimeout(() => {
    const botMsgEl = document.createElement("div");
    botMsgEl.className = "ai-msg ai-msg-bot";
    botMsgEl.innerHTML = `<strong>Tutor AI:</strong> ${hasilkanJawabanAIFisika(userText)}`;
    container.appendChild(botMsgEl);
    container.scrollTop = container.scrollHeight;
  }, 600);
}

function hasilkanJawabanAIFisika(pertanyaan) {
  const q = pertanyaan.toLowerCase();

  if (q.includes("jarak") && q.includes("perpindahan")) {
    return "Pertanyaan bagus! <strong>Jarak</strong> adalah panjang seluruh jalan yang kamu tempuh (skalar, selalu positif). Sedangkan <strong>Perpindahan</strong> adalah selisih lurus dari titik start ke titik finis (vektor, punya arah). Kalau kamu lari keliling lapangan 400 m lalu kembali ke posisi awal, jarakmu 400 m, tapi perpindahanmu = 0 meter!";
  }
  if (q.includes("kelajuan") || q.includes("kecepatan")) {
    return "Ingat rumus praktisnya: <strong>Kelajuan = Jarak / Waktu</strong> (angka di speedometer motor). Sedangkan <strong>Kecepatan = Perpindahan / Waktu</strong> (harus ada arahnya, misal 40 km/jam ke arah utara).";
  }
  if (q.includes("inersia") || q.includes("sabuk") || q.includes("helm") || q.includes("hukum 1") || q.includes("hukum i")) {
    return "Itu adalah <strong>Hukum I Newton (Inersia/Kelembaman)</strong>! Tubuh kita cenderung mempertahankan posisi geraknya. Saat mobil direm mendadak, badan ingin tetap melesat maju. Sabuk pengaman diciptakan untuk memberi gaya penahan agar kita tidak membentur kaca!";
  }
  if (q.includes("hukum 2") || q.includes("hukum ii") || q.includes("f = m")) {
    return "Hukum II Newton menyatakan <strong>F = m × a</strong>. Artinya gaya dorong sebanding dengan percepatan, tetapi berbanding terbalik dengan massa. Benda yang berat (massa besar) butuh gaya dorong jauh lebih besar agar bisa melesat cepat.";
  }
  if (q.includes("aksi") || q.includes("hukum 3") || q.includes("hukum iii")) {
    return "Hukum III Newton: <strong>F_aksi = -F_reaksi</strong>. Setiap ada dorongan, selalu ada dorongan balik yang sama besar tapi berlawanan arah. Contohnya saat kamu mendayung: dayung mendorong air ke belakang, air mendorong perahu meluncur ke depan!";
  }
  if (q.includes("archimedes") || q.includes("kapal") || q.includes("apung")) {
    return "Hukum Archimedes menyatakan benda mendapat gaya apung sebesar berat zat cair yang dipindahkan. Kapal baja terapung karena rongga udara lambungnya sangat besar, sehingga massa jenis total kapal lebih kecil dari air laut!";
  }
  if (q.includes("pascal") || q.includes("dongkrak")) {
    return "Hukum Pascal: Tekanan cairan di ruang tertutup diteruskan sama besar (<strong>F₁/A₁ = F₂/A₂</strong>). Gaya kecil pada pipa sempit menghasilkan gaya angkat raksasa pada pipa besar dongkrak mobil!";
  }
  if (q.includes("kalor") || q.includes("panas") || q.includes("rumah kaca")) {
    return "Kalor adalah energi panas yang berpindah dari suhu tinggi ke rendah. Pada efek rumah kaca, gas CO₂ dan metana menahan pantulan radiasi inframerah dari bumi sehingga panas terperangkap dan menaikkan suhu bumi.";
  }
  if (q.includes("gelombang") || q.includes("doppler") || q.includes("sonar")) {
    return "Gelombang memindahkan energi tanpa memindahkan zat perantara (<strong>v = λ × f</strong>). Efek Doppler terjadi saat sumber bunyi bergerak mendekat sehingga gelombangnya termampatkan dan terdengar lebih melengking.";
  }

  return "Penjelasan menarik! Dalam pembelajaran mendalam fisika, cobalah perhatikan variabel besaran yang terlibat (apa yang diubah, apa yang diukur). Apakah kamu ingin menguji fenomena ini di simulator laboratorium virtual PhET pada menu nomor 2?";
}

// ---------------------------------------------------------
// 6. LOGIKA DASBOR GURU (9 SUB-TAB)
// ---------------------------------------------------------
function pindahTabGuru(tab) {
  const tabs = ['kehadiran', 'jurnal', 'modul', 'remedial', 'ai', 'lkm', 'peta', 'eval', 'links'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-guru-${t}`);
    const panel = document.getElementById(`panel-guru-${t}`);
    if (btn) btn.classList.toggle("active", t === tab);
    if (panel) panel.style.display = (t === tab) ? "block" : "none";
  });

  if (tab === 'kehadiran') renderTabelGuruPresensi();
  if (tab === 'jurnal') renderTabelGuruJurnal();
  if (tab === 'modul') renderModulAjarCards();
  if (tab === 'remedial') renderTabelGuruRemedial();
  if (tab === 'lkm') renderTabelGuruLKM();
  if (tab === 'peta') renderTabelGuruPeta();
  if (tab === 'eval') {
    renderTabelGuruEvalDiri();
    renderTabelGuruEvalTeman();
  }
}

// REKAP KEHADIRAN MURID
function renderTabelGuruPresensi() {
  const tbody = document.getElementById("tabel-guru-presensi-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const tanggalFilter = document.getElementById("guru-presensi-tanggal").value || new Date().toISOString().slice(0, 10);
  const listPresensi = JSON.parse(localStorage.getItem("lms_presensi_records") || "[]");

  let countHadir = 0, countIzin = 0, countSakit = 0, countAlpa = 0;

  DAFTAR_SISWA.forEach(s => {
    const tr = document.createElement("tr");
    const kodeG = s.gender === "Laki-laki" ? "L" : "P";
    const record = listPresensi.find(p => p.siswa === s.nama && p.tanggal === tanggalFilter);

    let statusHTML = "", ketHTML = "-", waktuHTML = "-";

    if (record) {
      if (record.status === "Hadir") { countHadir++; statusHTML = `<span class="status-badge badge-done">🟢 Hadir</span>`; }
      else if (record.status === "Izin") { countIzin++; statusHTML = `<span class="status-badge badge-izin">🟡 Izin</span>`; }
      else if (record.status === "Sakit") { countSakit++; statusHTML = `<span class="status-badge badge-sakit">🔴 Sakit</span>`; }
      ketHTML = record.keterangan || "-";
      waktuHTML = record.waktu || "-";
    } else {
      countAlpa++;
      statusHTML = `<span class="status-badge badge-undone">⚪ Belum Konfirmasi</span>`;
    }

    tr.innerHTML = `
      <td style="color:#0284c7; font-weight:700;">${s.no}</td>
      <td style="font-weight:600;">${s.nama}</td>
      <td><span style="opacity:0.75;">${kodeG}</span></td>
      <td>${statusHTML}</td>
      <td style="font-size:0.86rem; max-width:200px; overflow:hidden; text-overflow:ellipsis;">${ketHTML}</td>
      <td style="font-size:0.84rem; color:#64748b;">${waktuHTML}</td>
      <td><button class="btn-action-view" onclick="ubahManualPresensi('${s.nama}', '${tanggalFilter}')">Ubah</button></td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("stat-hadir-count").innerText = countHadir;
  document.getElementById("stat-izin-count").innerText = countIzin;
  document.getElementById("stat-sakit-count").innerText = countSakit;
  document.getElementById("stat-alpa-count").innerText = countAlpa;
}

function ubahManualPresensi(namaSiswa, tanggal) {
  const opsi = prompt(`Pilih status kehadiran untuk ${namaSiswa} pada tanggal ${tanggal}:\nKetik: Hadir / Izin / Sakit / Alpa`, "Hadir");
  if (!opsi) return;

  const clean = opsi.trim();
  let listPresensi = JSON.parse(localStorage.getItem("lms_presensi_records") || "[]");
  listPresensi = listPresensi.filter(p => !(p.siswa === namaSiswa && p.tanggal === tanggal));

  if (["Hadir", "Izin", "Sakit"].includes(clean)) {
    listPresensi.push({
      siswa: namaSiswa,
      tanggal: tanggal,
      status: clean,
      keterangan: "Diverifikasi Manual oleh Guru",
      waktu: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
  }
  localStorage.setItem("lms_presensi_records", JSON.stringify(listPresensi));
  renderTabelGuruPresensi();
}

// JURNAL HARIAN GURU
function simpanJurnalGuru(e) {
  e.preventDefault();
  const tanggal = document.getElementById("jurnal-tanggal").value;
  const jam = document.getElementById("jurnal-jam").value.trim();
  const tp = document.getElementById("jurnal-tp").value;
  const aktivitas = document.getElementById("jurnal-aktivitas").value.trim();
  const catatan = document.getElementById("jurnal-catatan").value.trim();

  const listJurnal = JSON.parse(localStorage.getItem("lms_jurnal_guru") || "[]");
  const newJurnal = {
    id: Date.now(), tanggal, jam, tp, aktivitas, catatan,
    waktuInput: new Date().toLocaleString()
  };

  listJurnal.unshift(newJurnal);
  localStorage.setItem("lms_jurnal_guru", JSON.stringify(listJurnal));

  alert("✓ Lembar Jurnal Mengajar Berhasil Disimpan!");
  e.target.reset();
  document.getElementById("jurnal-tanggal").value = new Date().toISOString().slice(0, 10);
  renderTabelGuruJurnal();
}

function renderTabelGuruJurnal() {
  const tbody = document.getElementById("tabel-guru-jurnal-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const listJurnal = JSON.parse(localStorage.getItem("lms_jurnal_guru") || "[]");
  if (listJurnal.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; opacity:0.6; padding:20px;">Belum ada rekaman jurnal mengajar. Silakan isi form di atas.</td></tr>`;
    return;
  }

  listJurnal.forEach(j => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td style="color:#0284c7; font-weight:700; white-space:nowrap;">${j.tanggal}</td>
      <td style="white-space:nowrap;">${j.jam}</td>
      <td><span class="status-badge badge-done">${j.tp}</span></td>
      <td style="max-width:260px; font-size:0.86rem; line-height:1.5;">${j.aktivitas}</td>
      <td style="max-width:240px; font-size:0.86rem; color:#b45309;">${j.catatan}</td>
      <td style="white-space:nowrap;">
        <button class="btn-action-view" onclick="bukaModalDetailJurnal(${j.id})">Tinjau</button>
        <button class="btn-action-view" style="border-color:#fca5a5; color:#e11d48; margin-left:4px;" onclick="hapusJurnal(${j.id})">Hapus</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function bukaModalDetailJurnal(id) {
  const listJurnal = JSON.parse(localStorage.getItem("lms_jurnal_guru") || "[]");
  const j = listJurnal.find(item => item.id === id);
  if (!j) return;

  document.getElementById("modal-detail-badge").innerText = "JURNAL HARIAN GURU";
  document.getElementById("modal-detail-title").innerText = `${j.tp} • ${j.tanggal}`;
  document.getElementById("modal-detail-subtitle").innerText = `Alokasi Waktu: ${j.jam}`;

  document.getElementById("modal-detail-body").innerHTML = `
    <div style="margin-bottom:14px; background:#f0f9ff; padding:14px; border-radius:8px; border:1.5px solid #bae6fd;">
      <strong style="color:#0369a1;">Aktivitas Pembelajaran Mendalam:</strong>
      <p style="margin-top:6px; color:#1e293b; white-space:pre-wrap;">${j.aktivitas}</p>
    </div>
    <div style="background:#fffbeb; border:1.5px solid #fde68a; padding:14px; border-radius:8px;">
      <strong style="color:#b45309;">Refleksi Guru & Catatan Kelas:</strong>
      <p style="margin-top:6px; color:#78350f; white-space:pre-wrap;">${j.catatan}</p>
    </div>
  `;
  document.getElementById("modal-guru-detail").style.display = "flex";
}

function hapusJurnal(id) {
  if (!confirm("Apakah Anda yakin ingin menghapus lembar jurnal ini?")) return;
  let listJurnal = JSON.parse(localStorage.getItem("lms_jurnal_guru") || "[]");
  listJurnal = listJurnal.filter(j => j.id !== id);
  localStorage.setItem("lms_jurnal_guru", JSON.stringify(listJurnal));
  renderTabelGuruJurnal();
}

// ARSIP MODUL AJAR
function muatLinkModulAjar() {
  const saved = localStorage.getItem("lms_modul_links");
  if (saved) {
    try {
      const links = JSON.parse(saved);
      DATABASE_MODUL_AJAR.forEach((m, idx) => { if (links[idx]) m.driveLink = links[idx]; });
    } catch (e) {}
  }
}

function renderModulAjarCards() {
  const container = document.getElementById("rpp-cards-container");
  if (!container) return;
  container.innerHTML = "";

  DATABASE_MODUL_AJAR.forEach((m, idx) => {
    const card = document.createElement("div");
    card.className = "rpp-card";
    card.innerHTML = `
      <div>
        <span class="module-badge">${m.tp}</span>
        <h4>${m.nama}</h4>
        <div style="font-size:0.82rem; color:#0284c7; font-weight:600; margin:6px 0;">Alokasi: ${m.alokasi}</div>
        <p style="font-size:0.86rem; color:#475569; line-height:1.5; margin-bottom:10px;">${m.deskripsi}</p>
        <div style="font-size:0.8rem; color:#059669;"><strong>Profil Pancasila:</strong> ${m.profil}</div>
      </div>
      <div style="display:flex; flex-direction:column; gap:8px; margin-top:12px;">
        <button class="btn-action-view" style="padding:9px; text-align:center;" onclick="bukaModalDetailModul(${idx})">
          📄 Lihat Struktur Lengkap RPP
        </button>
        <div class="admin-link-input" style="margin-top:4px;">
          <input type="url" id="modul-link-${idx}" value="${m.driveLink}" placeholder="Tautan Google Drive Modul Ajar...">
          <button onclick="simpanLinkModul(${idx})">Simpan</button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

function bukaModalDetailModul(idx) {
  const m = DATABASE_MODUL_AJAR[idx];
  document.getElementById("modal-detail-badge").innerText = "MODUL AJAR KURIKULUM MERDEKA";
  document.getElementById("modal-detail-title").innerText = m.nama;
  document.getElementById("modal-detail-subtitle").innerText = `Fase F • Kelas XI • Alokasi Waktu: ${m.alokasi}`;

  document.getElementById("modal-detail-body").innerHTML = `
    <div style="margin-bottom:12px; background:#f0f9ff; padding:12px; border-radius:6px; border:1px solid #bae6fd;">
      <strong style="color:#0369a1;">Dimensi Profil Pelajar Pancasila:</strong>
      <p style="margin-top:4px; color:#1e293b;">${m.profil}</p>
    </div>
    <div style="margin-bottom:12px; background:#f0f9ff; padding:12px; border-radius:6px; border:1px solid #bae6fd;">
      <strong style="color:#0369a1;">Deskripsi Pembelajaran Mendalam:</strong>
      <p style="margin-top:4px; color:#1e293b;">${m.deskripsi}</p>
    </div>
    <div style="margin-bottom:14px; background:#ecfdf5; padding:12px; border-radius:6px; border:1px solid #a7f3d0;">
      <strong style="color:#065f46;">Alur Sintaks Pembelajaran:</strong>
      <p style="margin-top:6px; color:#1e293b; white-space:pre-wrap;">${m.sintaks}</p>
    </div>
    <a href="${m.driveLink}" target="_blank" class="link-box-btn" style="width:100%; text-align:center;">
      Buka Berkas Lengkap di Google Drive ↗
    </a>
  `;
  document.getElementById("modal-guru-detail").style.display = "flex";
}

function simpanLinkModul(idx) {
  const input = document.getElementById(`modul-link-${idx}`);
  DATABASE_MODUL_AJAR[idx].driveLink = input.value.trim();
  const links = DATABASE_MODUL_AJAR.map(m => m.driveLink);
  localStorage.setItem("lms_modul_links", JSON.stringify(links));
  alert(`✓ Tautan Berkas Modul Ajar ${DATABASE_MODUL_AJAR[idx].tp} berhasil diperbarui!`);
}

// REKAP REMEDIAL & PENGAYAAN GURU
function renderTabelGuruRemedial() {
  const tbody = document.getElementById("tabel-guru-remedial-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  DAFTAR_SISWA.forEach(s => {
    let remData = null, pengData = null, tpActive = "TP 1.1";
    for (let tp of ['TP 1.1', 'TP 2.1', 'TP 3.1', 'TP 4.1']) {
      const r = localStorage.getItem(`remedial_${tp}_${s.nama}`);
      const p = localStorage.getItem(`pengayaan_${tp}_${s.nama}`);
      if (r || p) {
        if (r) remData = JSON.parse(r);
        if (p) pengData = JSON.parse(p);
        tpActive = tp;
        break;
      }
    }

    const tr = document.createElement("tr");
    const remStatus = remData ? `<span class="status-badge badge-izin">✓ Terkirim</span>` : `<span class="status-badge badge-undone">-</span>`;
    const pengStatus = pengData ? `<span class="status-badge badge-done">✓ Terkirim</span>` : `<span class="status-badge badge-undone">-</span>`;
    const waktu = (remData ? remData.waktu : (pengData ? pengData.waktu : "-"));

    tr.innerHTML = `
      <td style="color:#0284c7; font-weight:700;">${s.no}</td>
      <td style="font-weight:600;">${s.nama}</td>
      <td><span class="status-badge badge-done">${tpActive}</span></td>
      <td>${remStatus}</td>
      <td>${pengStatus}</td>
      <td style="font-size:0.8rem; color:#64748b;">${waktu}</td>
      <td>
        ${(remData || pengData) ? `<button class="btn-action-view" onclick="bukaModalDetailRemedialGuru('${s.nama}', '${tpActive}')">Tinjau Respon</button>` : '-'}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function bukaModalDetailRemedialGuru(nama, tp) {
  const rStr = localStorage.getItem(`remedial_${tp}_${nama}`);
  const pStr = localStorage.getItem(`pengayaan_${tp}_${nama}`);

  const r = rStr ? JSON.parse(rStr) : null;
  const p = pStr ? JSON.parse(pStr) : null;

  document.getElementById("modal-detail-badge").innerText = `REMEDIAL & PENGAYAAN: ${tp}`;
  document.getElementById("modal-detail-title").innerText = `Hasil Evaluasi: ${nama}`;
  document.getElementById("modal-detail-subtitle").innerText = `Fokus Materi: ${tp}`;

  document.getElementById("modal-detail-body").innerHTML = `
    <div style="margin-bottom:14px; background:#fffbeb; padding:14px; border-radius:8px; border:1px solid #fde68a;">
      <strong style="color:#b45309;">Jawaban Remedial (Pemulihan Konsep):</strong>
      <p style="margin-top:6px; color:#78350f;">${r ? r.jawaban : 'Belum mengumpulkan remedial.'}</p>
    </div>
    <div style="background:#ecfdf5; padding:14px; border-radius:8px; border:1px solid #a7f3d0;">
      <strong style="color:#065f46;">Jawaban Pengayaan (Eksplorasi Tingkat Lanjut):</strong>
      <p style="margin-top:6px; color:#047857;">${p ? p.jawaban : 'Belum mengumpulkan pengayaan.'}</p>
    </div>
  `;
  document.getElementById("modal-guru-detail").style.display = "flex";
}

// ASISTEN GURU AI
function jalankanGeneratorGuruAI(jenis) {
  const outBox = document.getElementById("guru-ai-output-box");
  outBox.innerText = "Sedang merancang materi cerdas... Mohon tunggu sebentar 🤖";

  setTimeout(() => {
    if (jenis === 'soal_remedial') {
      outBox.innerText = `RANCANGAN SOAL REMEDIAL KONSEPTUAL (TP 1.1: GERAK DAN GAYA)\n=======================================================\n\n1. Soal Pemahaman Posisi & Jarak:\n   Rafi bersepeda sejauh 300 meter ke barat, lalu berhenti di warung dan berbalik arah 100 meter ke timur. Hitung jarak total yang ditempuh Rafi dan perpindahan kedudukannya dari rumah!\n   *Kunci Konsep:* Jarak = 300 + 100 = 400 m; Perpindahan = 300 - 100 = 200 m ke barat.\n\n2. Soal Hukum I Newton (Inersia):\n   Mengapa pengendara sepeda motor wajib mengencangkan tali pengikat helm pengaman dengan benar? Hubungkan dengan kecenderungan gerak kepala saat terjadi benturan mendadak!\n   *Kunci Konsep:* Mencegah helm terlepas akibat sifat inersia kepala yang terus melaju saat motor terhenti seketika.\n\n3. Soal Hukum II Newton:\n   Sebuah troli kosong bermassa 10 kg didorong dengan gaya 40 N. Berapakah percepatannya? Jika troli diisi barang 30 kg (massa total 40 kg), berapakah percepatannya sekarang?\n   *Kunci Konsep:* a₁ = 40/10 = 4 m/s²; a₂ = 40/40 = 1 m/s².`;
    } else if (jenis === 'ide_pengayaan') {
      outBox.innerText = `RANCANGAN STUDI KASUS PENGAYAAN HOTS (TP 1.1 & TEKNOLOGI)\n=======================================================\n\nStudi Kasus 1: Perancangan Jalur Darurat Rem Blong (Emergency Escape Ramp)\nTruk bermuatan logistik sering mengalami kegagalan rem mekanis saat melintasi jalan turunan curam. Jelaskan bagaimana para insinyur merancang tanjakan darurat berlapis pasir kasar di pinggir jalan raya dengan memanfaatkan Hukum II Newton dan gaya gesek untuk menghentikan laju truk tanpa menimbulkan korban jiwa!\n\nStudi Kasus 2: Penerapan Giroskop pada Wahana Antariksa\nDi ruang hampa udara yang bebas gesekan, bagaimana satelit komunikasi atau roket antariksa memutar arah haluannya menggunakan roda inersia (reaction wheel) berdasarkan Hukum III Newton?`;
    } else if (jenis === 'ide_apersepsi') {
      outBox.innerText = `IDE APERSEPSI PEMBELAJARAN MENDALAM (MINDFUL LEARNING)\n=======================================================\n\n1. Skenario Tantangan Awal (Memantik Nalar):\n   Minta dua murid maju ke depan. Satu murid membawa tas kosong, satu murid membawa tas penuh tumpukan 10 buku tebal. Minta keduanya berjalan cepat lalu berhenti mendadak saat guru bertepuk tangan. Tanyakan kepada kelas: "Siapa yang paling sulit berhenti tepat di garis batas? Mengapa massa yang lebih besar lebih sulit dihentikan?"\n\n2. Pertanyaan Pemantik Bermakna:\n   "Pernahkah kalian melihat sopir truk menjaga jarak sangat jauh dari kendaraan di depannya? Apakah truk bermuatan 20 ton bisa berhenti mendadak seperti sepeda motor matic?"`;
    } else if (jenis === 'draf_jurnal') {
      outBox.innerText = `DRAF REFLEKSI JURNAL MENGAJAR GURU (KURIKULUM MERDEKA)\n=======================================================\n\nAktivitas Terlaksana:\nPembelajaran mendalam telah dilaksanakan dengan mengaitkan konsep inersia dan sabuk pengaman kendaraan. Murid melakukan eksperimen interaktif PhET Forces and Motion Basics untuk membuktikan perbandingan terbalik antara massa dan percepatan (a = F/m).\n\nRefleksi & Catatan Pengajar:\nSebagian besar murid (sekitar 85%) sudah tuntas memahami perbedaan jarak dan perpindahan. Sekitar 5 murid masih memerlukan penguatan dalam menguraikan arah vektor gaya gesek statis. Rekomendasi pertemuan berikutnya adalah memberikan penguatan pada klinik remedial dan mengoptimalkan tutor sebaya.`;
    }
  }, 500);
}

function salinTeksOutputAI() {
  const text = document.getElementById("guru-ai-output-box").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("✓ Teks rancangan AI berhasil disalin ke papan klip!");
  });
}

// REKAP LKM
function renderTabelGuruLKM() {
  const tbody = document.getElementById("tabel-lkm-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  DAFTAR_SISWA.forEach(s => {
    const tr = document.createElement("tr");
    const kodeGender = s.gender === "Laki-laki" ? "L" : "P";
    let colHTML = `
      <td style="color:#0284c7; font-weight:700;">${s.no}</td>
      <td style="font-weight:600;">${s.nama}</td>
      <td><span style="opacity:0.75;">${kodeGender}</span></td>
    `;

    const tps = ['TP 1.1', 'TP 2.1', 'TP 3.1', 'TP 4.1'];
    tps.forEach(tp => {
      const itemKey = `lkm_${tp}_${s.nama}`;
      const dataStr = localStorage.getItem(itemKey);
      if (dataStr) {
        colHTML += `
          <td>
            <span class="status-badge badge-done">✓ Selesai</span>
            <button class="btn-action-view" style="margin-left:4px;" onclick="bukaModalDetailLKM('${tp}', '${s.nama}')">Tinjau</button>
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
    <div style="margin-bottom:14px; background:#f0f9ff; padding:14px; border-radius:8px; border:1.5px solid #bae6fd;">
      <strong style="color:#0369a1;">1. Pengamatan Variabel Bebas & Terikat:</strong>
      <p style="margin-top:6px; color:#1e293b;">${d.q1 || '-'}</p>
    </div>
    <div style="margin-bottom:14px; background:#f0f9ff; padding:14px; border-radius:8px; border:1.5px solid #bae6fd;">
      <strong style="color:#0369a1;">2. Analisis Hubungan Konseptual:</strong>
      <p style="margin-top:6px; color:#1e293b;">${d.q2 || '-'}</p>
    </div>
    <div style="background:#f0f9ff; padding:14px; border-radius:8px; border:1.5px solid #bae6fd;">
      <strong style="color:#0369a1;">3. Kesimpulan Akhir & Contoh Nyata:</strong>
      <p style="margin-top:6px; color:#1e293b;">${d.q3 || '-'}</p>
    </div>
  `;
  document.getElementById("modal-guru-detail").style.display = "flex";
}

// REKAP PETA KONSEP
function renderTabelGuruPeta() {
  const tbody = document.getElementById("tabel-peta-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  DAFTAR_SISWA.forEach(s => {
    let found = null, foundTP = "";
    for (let tp of ['TP 1.1', 'TP 2.1', 'TP 3.1', 'TP 4.1']) {
      const dataStr = localStorage.getItem(`peta_${tp}_${s.nama}`);
      if (dataStr) { found = JSON.parse(dataStr); foundTP = tp; break; }
    }

    const tr = document.createElement("tr");
    if (found) {
      const lampiranHTML = found.gambar ? `<span class="status-badge badge-done">Ada Gambar</span>` : `<span style="opacity:0.6;">Teks Saja</span>`;
      tr.innerHTML = `
        <td style="color:#0284c7; font-weight:700;">${s.no}</td>
        <td style="font-weight:600;">${s.nama}</td>
        <td><span class="status-badge badge-done">${foundTP}</span></td>
        <td>${found.utama || '-'}</td>
        <td style="color:#b45309; font-weight:700;">${found.kesulitan ? '⚠️ ' + found.kesulitan : '-'}</td>
        <td>${lampiranHTML}</td>
        <td><button class="btn-action-view" onclick="bukaModalDetailPeta('${foundTP}', '${s.nama}')">Tinjau</button></td>
      `;
    } else {
      tr.innerHTML = `
        <td style="color:#0284c7; font-weight:700;">${s.no}</td>
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
        <strong style="color:#0369a1; display:block; margin-bottom:8px;">Foto/Sketsa Peta Konsep Siswa:</strong>
        <img src="${d.gambar}" style="max-width:100%; max-height:280px; border-radius:8px; border:1.5px solid #bae6fd;" alt="Peta Konsep">
      </div>
    `;
  }

  document.getElementById("modal-detail-body").innerHTML = `
    <div style="margin-bottom:12px; background:#f0f9ff; padding:14px; border-radius:8px; border:1.5px solid #bae6fd;">
      <strong style="color:#0369a1;">Cabang & Hubungan Relasi Konseptual:</strong>
      <pre style="white-space:pre-wrap; font-family:'Plus Jakarta Sans'; color:#1e293b; margin-top:6px;">${d.cabang || '-'}</pre>
    </div>
    <div style="background:#fffbeb; border:1.5px solid #fde68a; padding:14px; border-radius:8px;">
      <strong style="color:#b45309;">Materi yang Masih Sulit (Perhatian Guru):</strong>
      <p style="margin-top:4px; color:#78350f;">${d.kesulitan || 'Tidak ada kendala yang dilaporkan.'}</p>
    </div>
    ${gambarHTML}
  `;
  document.getElementById("modal-guru-detail").style.display = "flex";
}

// REKAP EVALUASI
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
        <td style="color:#0284c7; font-weight:700;">${s.no}</td>
        <td style="font-weight:600;">${s.nama}</td>
        <td><span class="status-badge badge-done">✓ Sudah Refleksi</span></td>
        <td style="max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${d.dipahami || '-'}</td>
        <td style="max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; color:#b45309;">${d.belumDipahami || '-'}</td>
        <td style="max-width:200px; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; color:#059669;">${d.rencanaTindakan || '-'}</td>
        <td style="font-size:0.8rem; color:#64748b;">${d.waktu || '-'}</td>
      `;
    } else {
      tr.innerHTML = `
        <td style="color:#0284c7; font-weight:700;">${s.no}</td>
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

function renderTabelGuruEvalTeman() {
  const tbody = document.getElementById("tabel-eval-teman-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  let listPeer = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith("eval_peer_")) {
      try { listPeer.push(JSON.parse(localStorage.getItem(key))); } catch (e) {}
    }
  }

  if (listPeer.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; opacity:0.6; padding:20px;">Belum ada data penilaian antar teman.</td></tr>`;
    return;
  }

  listPeer.forEach((p, idx) => {
    const tr = document.createElement("tr");
    const skor = p.skor || {};
    const rata = ((Number(skor.penguasaanKonsep||0) + Number(skor.investigasiLab||0) + Number(skor.kolaborasiDiskusi||0) + Number(skor.sikapSolutif||0)) / 4).toFixed(1);

    tr.innerHTML = `
      <td style="color:#0284c7; font-weight:700;">${idx + 1}</td>
      <td style="font-weight:600;">${p.penilai || '-'}</td>
      <td style="color:#0284c7; font-weight:600;">${p.yangDinilai || '-'}</td>
      <td><span class="status-badge badge-done">${p.tp || '-'}</span></td>
      <td style="font-weight:700; color:#b45309;">⭐ ${rata} / 4.0</td>
      <td style="font-style:italic;">"${p.catatan || '-'}"</td>
      <td style="font-size:0.8rem; color:#64748b;">${p.waktu || '-'}</td>
    `;
    tbody.appendChild(tr);
  });
}

function tutupModalDetailGuru() {
  document.getElementById("modal-guru-detail").style.display = "none";
}

function filterTabel(tbodyId, keyword) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  const rows = tbody.getElementsByTagName("tr");
  const cleanKey = keyword.toLowerCase();

  for (let row of rows) {
    row.style.display = row.textContent.toLowerCase().includes(cleanKey) ? "" : "none";
  }
}

// 7. KELOLA TAUTAN SUMATIF
function renderAdminLinks() {
  const container = document.getElementById("admin-links-manager");
  if (!container) return;
  container.innerHTML = "";

  DATABASE_TP.forEach((tp, idx) => {
    const row = document.createElement("div");
    row.style.background = "#f8fafc";
    row.style.border = "1.5px solid #bae6fd";
    row.style.padding = "14px";
    row.style.borderRadius = "8px";
    row.innerHTML = `
      <div style="font-weight:700; color:#0369a1; margin-bottom:6px;">${tp.kode}: Asesmen ${tp.nama}</div>
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

// ---------------------------------------------------------
// 8. EKSPOR DATA KE FORMAT CSV (EXCEL UTF-8)
// ---------------------------------------------------------
function eksporDataKeCSV(tipe) {
  let csv = "\uFEFF";
  const dateStr = new Date().toISOString().slice(0,10);

  if (tipe === 'presensi') {
    const tgl = document.getElementById("guru-presensi-tanggal").value || dateStr;
    csv += `No,Nama Siswa,Gender,Tanggal,Status,Keterangan,Waktu\n`;
    const listPresensi = JSON.parse(localStorage.getItem("lms_presensi_records") || "[]");

    DAFTAR_SISWA.forEach(s => {
      const r = listPresensi.find(p => p.siswa === s.nama && p.tanggal === tgl);
      const st = r ? r.status : "Belum Konfirmasi";
      const ket = r ? (r.keterangan || '').replace(/"/g, '""') : "-";
      const w = r ? r.waktu : "-";
      csv += `"${s.no}","${s.nama}","${s.gender}","${tgl}","${st}","${ket}","${w}"\n`;
    });
    unduhFileBlob(csv, `rekap_presensi_${tgl}.csv`);
  } else if (tipe === 'jurnal') {
    csv += `Tanggal,Jam Ke,TP,Aktivitas,Refleksi Guru,Waktu Input\n`;
    const listJurnal = JSON.parse(localStorage.getItem("lms_jurnal_guru") || "[]");
    listJurnal.forEach(j => {
      csv += `"${j.tanggal}","${j.jam}","${j.tp}","${(j.aktivitas||'').replace(/"/g, '""')}","${(j.catatan||'').replace(/"/g, '""')}","${j.waktuInput}"\n`;
    });
    unduhFileBlob(csv, `rekap_jurnal_guru_${dateStr}.csv`);
  } else if (tipe === 'lkm') {
    csv += "No,Nama Siswa,Gender,TP 1.1,TP 2.1,TP 3.1,TP 4.1\n";
    DAFTAR_SISWA.forEach(s => {
      const st1 = localStorage.getItem(`lkm_TP 1.1_${s.nama}`) ? "Selesai" : "Belum";
      const st2 = localStorage.getItem(`lkm_TP 2.1_${s.nama}`) ? "Selesai" : "Belum";
      const st3 = localStorage.getItem(`lkm_TP 3.1_${s.nama}`) ? "Selesai" : "Belum";
      const st4 = localStorage.getItem(`lkm_TP 4.1_${s.nama}`) ? "Selesai" : "Belum";
      csv += `"${s.no}","${s.nama}","${s.gender}","${st1}","${st2}","${st3}","${st4}"\n`;
    });
    unduhFileBlob(csv, `rekap_lkm_${dateStr}.csv`);
  } else if (tipe === 'eval_diri') {
    csv += "No,Nama Siswa,Materi Dipahami,Materi Belum Dipahami,Rencana Tindak Lanjut,Waktu\n";
    DAFTAR_SISWA.forEach(s => {
      const data = localStorage.getItem(`eval_diri_${s.nama}`);
      if (data) {
        const d = JSON.parse(data);
        csv += `"${s.no}","${s.nama}","${(d.dipahami||'').replace(/"/g, '""')}","${(d.belumDipahami||'').replace(/"/g, '""')}","${(d.rencanaTindakan||'').replace(/"/g, '""')}","${d.waktu||''}"\n`;
      } else {
        csv += `"${s.no}","${s.nama}","Belum Mengisi","Belum Mengisi","Belum Mengisi","-"\n`;
      }
    });
    unduhFileBlob(csv, `rekap_eval_diri_${dateStr}.csv`);
  } else if (tipe === 'eval_teman') {
    csv += "No,Siswa Penilai,Teman yang Dinilai,TP,Rata-rata Skor,Catatan Rekan,Waktu\n";
    let count = 1;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("eval_peer_")) {
        try {
          const p = JSON.parse(localStorage.getItem(key));
          const skor = p.skor || {};
          const rata = ((Number(skor.penguasaanKonsep||0) + Number(skor.investigasiLab||0) + Number(skor.kolaborasiDiskusi||0) + Number(skor.sikapSolutif||0)) / 4).toFixed(1);
          csv += `"${count++}","${p.penilai}","${p.yangDinilai}","${p.tp}","${rata}","${(p.catatan||'').replace(/"/g, '""')}","${p.waktu}"\n`;
        } catch (e) {}
      }
    }
    unduhFileBlob(csv, `rekap_eval_teman_${dateStr}.csv`);
  } else if (tipe === 'peta') {
    csv += "No,Nama Siswa,TP,Konsep Utama,Materi yang Masih Sulit,Ada Gambar,Waktu\n";
    DAFTAR_SISWA.forEach(s => {
      let found = null, foundTP = "";
      for (let tp of ['TP 1.1', 'TP 2.1', 'TP 3.1', 'TP 4.1']) {
        const d = localStorage.getItem(`peta_${tp}_${s.nama}`);
        if (d) { found = JSON.parse(d); foundTP = tp; break; }
      }
      if (found) {
        csv += `"${s.no}","${s.nama}","${foundTP}","${(found.utama||'').replace(/"/g, '""')}","${(found.kesulitan||'').replace(/"/g, '""')}","${found.gambar ? 'Ya' : 'Tidak'}","${found.waktu||''}"\n`;
      } else {
        csv += `"${s.no}","${s.nama}","-","Belum Mengirim","-","Tidak","-"\n`;
      }
    });
    unduhFileBlob(csv, `rekap_peta_konsep_${dateStr}.csv`);
  } else if (tipe === 'remedial') {
    csv += "No,Nama Siswa,TP,Jawaban Remedial,Jawaban Pengayaan,Waktu\n";
    DAFTAR_SISWA.forEach(s => {
      let r = null, p = null, tpActive = "TP 1.1";
      for (let tp of ['TP 1.1', 'TP 2.1', 'TP 3.1', 'TP 4.1']) {
        const rStr = localStorage.getItem(`remedial_${tp}_${s.nama}`);
        const pStr = localStorage.getItem(`pengayaan_${tp}_${s.nama}`);
        if (rStr || pStr) {
          if (rStr) r = JSON.parse(rStr);
          if (pStr) p = JSON.parse(pStr);
          tpActive = tp;
          break;
        }
      }
      csv += `"${s.no}","${s.nama}","${tpActive}","${r ? (r.jawaban||'').replace(/"/g, '""') : '-'}","${p ? (p.jawaban||'').replace(/"/g, '""') : '-'}","${r ? r.waktu : (p ? p.waktu : '-')}"\n`;
    });
    unduhFileBlob(csv, `rekap_remedial_pengayaan_${dateStr}.csv`);
  }
}

function unduhFileBlob(content, filename) {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// DATA SIMULASI UJI COBA CEPAT
function isiContohDataSimulasi() {
  const today = new Date().toISOString().slice(0, 10);
  
  const mockPresensi = [
    { siswa: "Abel Pratama Katili", tanggal: today, status: "Hadir", keterangan: "Hadir di lab komputer", waktu: "07:15" },
    { siswa: "Adeliani Putri R. Agu", tanggal: today, status: "Hadir", keterangan: "Siap belajar", waktu: "07:20" },
    { siswa: "Andika Pratama Latoini", tanggal: today, status: "Izin", keterangan: "Dispensasi OSIS", waktu: "07:30" },
    { siswa: "Dimas Saputra R. Antu", tanggal: today, status: "Hadir", keterangan: "Hadir tepat waktu", waktu: "07:10" },
    { siswa: "Dea Ananda Nusi", tanggal: today, status: "Sakit", keterangan: "Demam berobat", waktu: "06:45" },
    { siswa: "Moh. Riski Ahmad", tanggal: today, status: "Hadir", keterangan: "Siap eksplorasi simulasi", waktu: "07:18" }
  ];
  localStorage.setItem("lms_presensi_records", JSON.stringify(mockPresensi));

  const mockJurnal = [
    {
      id: 101,
      tanggal: today,
      jam: "Jam ke 1 - 3 (3 x 45 Menit)",
      tp: "TP 1.1",
      aktivitas: "Eksplorasi konsep jarak vs perpindahan serta Hukum Newton tentang gerak. Murid mencoba simulasi PhET Forces and Motion Basics secara mandiri dan berdiskusi.",
      catatan: "Siswa sangat antusias. Mayoritas murid telah memahami perbedaan jarak dan perpindahan melalui analogi lari di lapangan.",
      waktuInput: new Date().toLocaleString()
    }
  ];
  localStorage.setItem("lms_jurnal_guru", JSON.stringify(mockJurnal));

  // Simulasi Respon Remedial Dimas Saputra
  localStorage.setItem("remedial_TP 1.1_Dimas Saputra R. Antu", JSON.stringify({
    siswa: "Dimas Saputra R. Antu",
    tp: "TP 1.1",
    tipe: "Remedial",
    jawaban: "Jarak total = 6 meter + 2 meter = 8 meter. Perpindahan = 6 meter - 2 meter = 4 meter ke arah timur. Kelajuan rata-rata = Jarak / Waktu = 8 m / 4 s = 2 m/s.",
    waktu: new Date().toLocaleString()
  }));

  alert("✓ Data simulasi berhasil dimasukkan!");
  renderTabelGuruPresensi();
  renderTabelGuruJurnal();
  renderTabelGuruLKM();
  renderTabelGuruPeta();
  renderTabelGuruEvalDiri();
  renderTabelGuruEvalTeman();
  renderTabelGuruRemedial();
}
