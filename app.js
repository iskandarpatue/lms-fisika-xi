// =========================================================
// LMS FISIKA KELAS XI - KURIKULUM MERDEKA (DEEP LEARNING)
// BERKAS UTAMA: app.js (VERSI LENGKAP & UTUH)
// =========================================================

// ---------------------------------------------------------
// 1. BASIS DATA MATERI, IKTP, VIDEO INDONESIA, GAME, LKM, & REMEDIAL/PENGAYAAN
// ---------------------------------------------------------
const DATABASE_TP = [
  {
    id: 0,
    kode: "TP 1.1",
    nama: "Gerak dan Gaya",
    judul: "TP 1.1: Karakteristik Gerak Lurus dan Hukum-Hukum Newton tentang Gaya",
    cp: "Menganalisis hubungan gerak dan gaya serta penerapannya untuk menjelaskan fenomena dalam kehidupan sehari-hari.",
    iktp: [
      "IKTP 1.1.1: Membedakan konsep posisi, jarak tempuh, dan perpindahan dalam gerak lurus satu dimensi.",
      "IKTP 1.1.2: Menganalisis kelajuan rata-rata (skalar), kecepatan rata-rata (vektor), dan percepatan.",
      "IKTP 1.1.3: Mengidentifikasi karakteristik Gerak Lurus Beraturan (GLB) dan Berubah Beraturan (GLBB).",
      "IKTP 1.1.4: Menerapkan Hukum I, II, dan III Newton pada keselamatan berkendara (sabuk pengaman & inersia)."
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
            <td>Besaran Skalar (hanya nilai)</td>
            <td>Besaran Vektor (punya nilai & arah)</td>
          </tr>
          <tr>
            <td><strong>Dasar Hitungan</strong></td>
            <td>Jarak Tempuh total</td>
            <td>Perpindahan kedudukan</td>
          </tr>
          <tr>
            <td><strong>Rumus Singkat</strong></td>
            <td>Kelajuan = Jarak / Waktu (v = s / t)</td>
            <td>Kecepatan = Perpindahan / Waktu (v = Δx / t)</td>
          </tr>
          <tr>
            <td><strong>Alat Ukur</strong></td>
            <td>Speedometer sepeda motor</td>
            <td>GPS Navigation dengan arah mata angin</td>
          </tr>
        </tbody>
      </table>

      <h4>Percepatan (Akselerasi)</h4>
      <p>Percepatan adalah <strong>perubahan kecepatan tiap satuan waktu</strong> (dirumuskan: <strong>a = (v_akhir - v_awal) / waktu</strong>). Saat lampu lalu lintas menyala hijau dan kamu menarik tuas gas motor, motormu mengalami percepatan positif. Sebaliknya, saat kamu menginjak rem menjelang lampu merah, motormu mengalami perlambatan (percepatan negatif).</p>

      <h3>3. Gerak Lurus: GLB dan GLBB</h3>
      <ol>
        <li><strong>Gerak Lurus Beraturan (GLB):</strong> Gerak benda pada lintasan lurus dengan <em>kecepatan yang tetap konstan</em> (tidak ada percepatan, a = 0). Contoh: kereta api yang melaju stabil di jalur rel datar.</li>
        <li><strong>Gerak Lurus Berubah Beraturan (GLBB):</strong> Gerak benda pada lintasan lurus dengan <em>percepatan yang tetap konstan</em> (kecepatannya bertambah atau berkurang secara teratur). Contoh: buah kelapa yang jatuh bebas dari tangkai pohonnya.</li>
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
    // Video Bahasa Indonesia Konsep Kinematika Gerak Lurus SMA
    videoEmbed: "https://www.youtube-nocookie.com/embed/gybugbMsgMw",
    gameType: "misi",
    gameIKTP: [
      {
        iktpId: 0,
        judul: "Misi 1.1.1: Detektif Posisi dan Perpindahan Lapangan",
        deskripsi: "Rafi berlari mengelilingi lapangan sekolah berbentuk persegi panjang (panjang 40 m, lebar 30 m) dari titik A ke B lalu ke C, sehingga menempuh lintasan setengah keliling. Berapakah jarak dan perpindahan kedudukan Rafi?",
        opsi: [
          { teks: "A. Jarak = 70 meter; Perpindahan = 50 meter secara diagonal dari titik A ke C.", benar: true, alasan: "Tepat Sekali! Jarak adalah total panjang lintasan (40 m + 30 m = 70 m). Perpindahan adalah jarak garis lurus terpendek dari A ke C menggunakan dalil Pythagoras: √(40² + 30²) = 50 meter." },
          { teks: "B. Jarak = 50 meter; Perpindahan = 70 meter.", benar: false, alasan: "Keliru. Jarak tidak boleh lebih pendek daripada perpindahan garis lurus." },
          { teks: "C. Jarak = 70 meter; Perpindahan = 0 meter.", benar: false, alasan: "Salah. Perpindahan bernilai nol hanya jika Rafi kembali lagi ke titik awal A." }
        ]
      },
      {
        iktpId: 1,
        judul: "Misi 1.1.2: Membaca Speedometer vs Kecepatan GPS",
        deskripsi: "Saat melintasi jalan tol yang berbelok-belok, jarum speedometer mobil menunjukkan angka stabil 60 km/jam. Apakah kelajuan dan kecepatan mobil tersebut sama?",
        opsi: [
          { teks: "A. Kelajuan mobil tetap (60 km/jam), tetapi kecepatannya terus berubah karena arah geraknya berubah di setiap tikungan.", benar: true, alasan: "Hebat! Kecepatan adalah besaran vektor yang memiliki nilai dan arah. Meski kelajuannya tetap 60 km/jam, jika arah berbelok, maka kecepatannya dianggap berubah." },
          { teks: "B. Kelajuan dan kecepatannya persis sama di setiap saat.", benar: false, alasan: "Kurang tepat. Kecepatan memperhitungkan arah gerak vektor." }
        ]
      },
      {
        iktpId: 2,
        judul: "Misi 1.1.3: Tantangan Balap Karung GLB vs GLBB",
        deskripsi: "Dalam lomba balap karung, atlet A melompat dengan kecepatan konstan 2 m/s dari garis start ke finis, sedangkan atlet B melompat dari keadaan diam dengan percepatan tetap 1 m/s². Siapakah yang melaju dengan gerak GLBB?",
        opsi: [
          { teks: "A. Atlet B, karena kecepatannya terus bertambah secara teratur setiap detik akibat percepatan konstan.", benar: true, alasan: "Sempurna! Ciri utama GLBB adalah adanya percepatan konstan (a) yang menyebabkan kecepatan bertambah teratur." },
          { teks: "B. Atlet A, karena geraknya lurus beraturan.", benar: false, alasan: "Salah. Atlet A bergerak secara GLB (kecepatan konstan, percepatan nol)." }
        ]
      },
      {
        iktpId: 3,
        judul: "Misi 1.1.4: Uji Keselamatan Sabuk Pengaman Mobil",
        deskripsi: "Mobil melaju kencang lalu direm mendadak karena ada kucing melintas. Mengapa tubuh penumpang terhentak keras ke depan?",
        opsi: [
          { teks: "A. Karena tubuh memiliki kelembaman (inersia Hukum I Newton) yang ingin mempertahankan kelajuannya untuk terus melesat maju.", benar: true, alasan: "Tepat Sekali! Sabuk pengaman memberikan gaya penahan ke belakang agar tubuh tidak menghantam kaca depan mobil." },
          { teks: "B. Karena gravitasi bumi mendadak bertambah besar saat mobil direm.", benar: false, alasan: "Salah. Gravitasi bumi selalu tetap konstan ke arah bawah." }
        ]
      }
    ],
    lkm: {
      title: "LKM 1: Eksperimen Gaya Dorong dan Massa pada Gerak Benda",
      guide: "Buka simulator PhET Forces and Motion Basics. Cobalah mendorong kotak kayu dengan variasi gaya dan amati apa yang terjadi pada kecepatannya.",
      phetUrl: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_all.html",
      q1: "1. Ketika kamu mendorong kotak 50 kg dengan gaya 100 N, lalu kamu ganti kotak tersebut menjadi kotak 100 kg dengan gaya dorong yang tetap sama (100 N), apakah kotak kedua melaju lebih cepat atau lebih lambat? Mengapa?",
      q2: "2. Apa yang terjadi pada gerak kotak jika lantai diberi gaya gesek kasar dibanding lantai yang licin tanpa gesekan (es)?",
      q3: "3. Tuliskan 2 contoh penerapan Hukum I atau Hukum III Newton yang pernah kamu alami langsung saat naik sepeda motor atau angkutan umum!"
    },
    remedialIKTP: [
      { iktpIdx: 0, soal: "Seorang siswa berjalan 8 meter ke utara, lalu berbelok 6 meter ke timur selama 5 detik. Hitunglah jarak total, perpindahan, dan kelajuan rata-ratanya!" },
      { iktpIdx: 1, soal: "Jelaskan mengapa angka pada speedometer sepeda motor disebut sebagai pengukur kelajuan, bukan pengukur kecepatan!" },
      { iktpIdx: 2, soal: "Tuliskan perbedaan mendasar antara Gerak Lurus Beraturan (GLB) dan Gerak Lurus Berubah Beraturan (GLBB) beserta contoh peristiwanya!" },
      { iktpIdx: 3, soal: "Jelaskan dengan konsep Hukum I Newton mengapa pengendara sepeda motor wajib mengenakan helm pengaman dengan tali terpasang kencang!" }
    ],
    pengayaanIKTP: [
      { iktpIdx: 0, soal: "Analisis bagaimana sensor navigasi satelit (GPS) memetakan perpindahan posisi kapal di laut lepas menggunakan koordinat bujur dan lintang!" },
      { iktpIdx: 1, soal: "Rancang perhitungan jarak aman pengereman mobil berkecepatan 80 km/jam saat melintasi jalanan basah dengan perlambatan GLBB maksimum 4 m/s²!" },
      { iktpIdx: 2, soal: "Bagaimana teknologi kereta cepat Whoosh mempertahankan laju gerak lurus 350 km/jam secara konstan? Analisis gaya gesek aerodinamika udaranya!" },
      { iktpIdx: 3, soal: "Jelaskan bagaimana zona remuk (crumple zone) pada bagian depan mobil modern dirancang menggunakan prinsip impuls dan Hukum III Newton untuk meredam gaya tumbukan fatal!" }
    ],
    defaultLinkUjian: "https://forms.gle/"
  },
  {
    id: 1,
    kode: "TP 2.1",
    nama: "Hukum Fluida",
    judul: "TP 2.1: Penerapan Hukum Fluida dalam Kehidupan Sehari-hari",
    cp: "Membuat karya yang menunjukkan penerapan hukum fluida dalam kehidupan sehari-hari.",
    iktp: [
      "IKTP 2.1.1: Menganalisis faktor-faktor yang mempengaruhi besarnya tekanan cairan (tekanan hidrostatik P = ρ × g × h).",
      "IKTP 2.1.2: Menerapkan prinsip Hukum Pascal (F₁/A₁ = F₂/A₂) pada cara kerja dongkrak hidrolik dan rem kendaraan.",
      "IKTP 2.1.3: Menjelaskan konsep terapung, melayang, dan tenggelamnya benda berdasarkan Hukum Archimedes.",
      "IKTP 2.1.4: Menganalisis hubungan kelajuan aliran dan perbedaan tekanan fluida pada cara kerja sayap pesawat (Asas Bernoulli)."
    ],
    materi: `
      <h3>1. Tekanan Hidrostatik (Makin Dalam, Makin Tertekan!)</h3>
      <p>Tekanan cairan pada kedalaman tertentu dirumuskan dengan: <strong>P = ρ × g × h</strong>. Semakin dalam kamu menyelam (h membesar) dan semakin rapat cairan (ρ membesar), tekanan yang menekan tubuhmu semakin dahsyat. Itulah alasan dasar bendungan air selalu dibangun sangat tebal di bagian bawahnya.</p>

      <h3>2. Hukum Pascal: Trik Mengangkat Mobil dengan Tenaga Kecil</h3>
      <p>Tekanan cairan di ruang tertutup diteruskan sama besar ke segala arah (<strong>F₁ / A₁ = F₂ / A₂</strong>). Dengan menekan pipa sempit berpenampang kecil, cairan meneruskan tekanan ke pipa besar sehingga gaya dorong keluarannya berlipat ganda ratusan kali lipat.</p>

      <h3>3. Hukum Archimedes & Asas Bernoulli</h3>
      <p>Benda mendapat gaya apung ke atas sebesar berat zat cair yang dipindahkan. Kapal baja terapung karena memiliki lambung berongga udara yang membuat massa jenis rata-ratanya lebih kecil dari air laut. Pada pesawat terbang, udara mengalir lebih cepat di atas sayap melengkung, menurunkan tekanan di bagian atas sehingga sayap terangkat naik (Asas Bernoulli).</p>
    `,
    // Video Bahasa Indonesia Fluida Statis Kelas XI SMA Kurikulum Merdeka
    videoEmbed: "https://www.youtube-nocookie.com/embed/Z50f2KBeGnA",
    gameType: "tts",
    gameIKTP: [
      {
        iktpId: 0,
        judul: "TTS Fluida 1: Misteri Tekanan Hidrostatis",
        petunjukMendatar: "Tekanan zat cair yang bergantung pada massa jenis, gravitasi, dan kedalaman (11 Huruf)",
        kunciMendatar: "HIDROSTATIS",
        petunjukMenurun: "Zat yang memiliki kemampuan untuk mengalir, mencakup cairan dan gas (6 Huruf)",
        kunciMenurun: "FLUIDA"
      },
      {
        iktpId: 1,
        judul: "TTS Fluida 2: Pelipatgandaan Gaya Dongkrak",
        petunjukMendatar: "Hukum fisika yang menyatakan tekanan diteruskan sama besar ke segala arah (6 Huruf)",
        kunciMendatar: "PASCAL",
        petunjukMenurun: "Alat pengangkat mobil yang memanfaatkan tekanan cairan dalam silinder (8 Huruf)",
        kunciMenurun: "HIDROLIK"
      },
      {
        iktpId: 2,
        judul: "TTS Fluida 3: Rahasia Kapal Terapung",
        petunjukMendatar: "Ilmuwan penemu hukum gaya apung ke atas pada benda tercelup (10 Huruf)",
        kunciMendatar: "ARCHIMEDES",
        petunjukMenurun: "Kondisi benda saat massa jenisnya tepat sama dengan massa jenis cairan (7 Huruf)",
        kunciMenurun: "MELAYANG"
      },
      {
        iktpId: 3,
        judul: "TTS Fluida 4: Aerodinamika Pesawat",
        petunjukMendatar: "Asas yang menyatakan tekanan fluida menurun di area berkecepatan tinggi (9 Huruf)",
        kunciMendatar: "BERNOULLI",
        petunjukMenurun: "Bagian pesawat yang menghasilkan gaya angkat berkat perbedaan kelajuan udara (5 Huruf)",
        kunciMenurun: "SAYAP"
      }
    ],
    lkm: {
      title: "LKM 2: Eksperimen Tekanan Air dan Gaya Apung",
      guide: "Buka simulator PhET Under Pressure. Tarik alat pengukur tekanan ke dalam air pada kedalaman 1 meter, 2 meter, dan 3 meter.",
      phetUrl: "https://phet.colorado.edu/sims/html/under-pressure/latest/under-pressure_all.html",
      q1: "1. Berapakah angka tekanan yang ditunjukkan alat ukur saat berada di kedalaman 1 meter dibanding saat kedalaman 3 meter?",
      q2: "2. Jika cairan air diganti dengan cairan madu yang lebih kental dan pekat, apakah tekanannya bertambah besar atau kecil? Mengapa?",
      q3: "3. Jelaskan dengan bahasamu sendiri mengapa kapal feri dari besi bisa mengapung di lautan luas!"
    },
    remedialIKTP: [
      { iktpIdx: 0, soal: "Hitunglah tekanan hidrostatis yang dialami seorang penyelam pada kedalaman 4 meter di dalam air kolam (massa jenis air = 1000 kg/m³, g = 10 m/s²)!" },
      { iktpIdx: 1, soal: "Pada dongkrak hidrolik, piston kecil luasnya 5 cm² ditekan dengan gaya 20 N. Berapakah gaya angkat yang dihasilkan pada piston besar seluas 50 cm²?" },
      { iktpIdx: 2, soal: "Sebutkan dan jelaskan 3 syarat kondisi benda (terapung, melayang, tenggelam) ditinjau dari perbandingan massa jenisnya terhadap cairan!" },
      { iktpIdx: 3, soal: "Mengapa atap rumah dari seng bisa terangkat terbang saat terjadi angin badai puting beliung? Hubungkan dengan Asas Bernoulli!" }
    ],
    pengayaanIKTP: [
      { iktpIdx: 0, soal: "Rancang perhitungan batas kedalaman maksimum kapal selam militer agar dinding lambung bajanya tidak remuk menahan tekanan hidrostatis dasar palung laut!" },
      { iktpIdx: 1, soal: "Analisis sistem kerja rem hidrolik pengereman ganda (ABS) pada kendaraan balap modern!" },
      { iktpIdx: 2, soal: "Rancang miniatur kapal selam sederhana menggunakan botol plastik, sedotan, dan pemberat koin untuk mendemonstrasikan fungsi tangki ballast!" },
      { iktpIdx: 3, soal: "Bagaimana tabung pitot pada moncong pesawat terbang mengukur kelajuan jelajah pesawat di udara menggunakan Asas Bernoulli?" }
    ],
    defaultLinkUjian: "https://forms.gle/"
  },
  {
    id: 2,
    kode: "TP 3.1",
    nama: "Kalor & Termodinamika",
    judul: "TP 3.1: Kalor, Termodinamika, dan Analisis Pemanasan Global",
    cp: "Menganalisis konsep kalor dan termodinamika serta penerapannya untuk mengidentifikasi fenomena perubahan iklim.",
    iktp: [
      "IKTP 3.1.1: Membedakan konsep suhu dan kalor serta tiga mekanisme perpindahan panas (konduksi, konveksi, dan radiasi).",
      "IKTP 3.1.2: Menganalisis Hukum I Termodinamika (ΔU = Q - W) pada pemuaian dan pemampatan gas.",
      "IKTP 3.1.3: Menjelaskan prinsip Hukum II Termodinamika terkait arah alami aliran panas dan efisiensi mesin.",
      "IKTP 3.1.4: Menganalisis peran gas rumah kaca dalam memerangkap radiasi panas bumi yang memicu pemanasan global."
    ],
    materi: `
      <h3>1. Membedakan Suhu dan Kalor</h3>
      <p>Suhu adalah ukuran derajat panas dinginnya benda (°C), sedangkan Kalor adalah energi panas yang berpindah dari benda bersuhu tinggi ke benda bersuhu rendah (Joule). Kalor berpindah lewat Konduksi (hantaran logam padat), Konveksi (aliran zat cair/gas), dan Radiasi (pancaran gelombang tanpa perantara).</p>
      
      <h3>2. Hukum Termodinamika & Efek Rumah Kaca</h3>
      <p>Hukum I Termodinamika (<strong>ΔU = Q - W</strong>) membuktikan bahwa energi panas dapat diubah menjadi kerja mekanis gerak. Namun, Hukum II Termodinamika menegaskan bahwa kalor secara alami hanya mengalir dari suhu tinggi ke rendah. Pada fenomena pemanasan global, gas CO₂ dan metana di atmosfer menahan radiasi inframerah dari bumi, memerangkap panas dan menaikkan suhu global.</p>
    `,
    // Video Bahasa Indonesia Termodinamika SMA Kelas 11
    videoEmbed: "https://www.youtube-nocookie.com/embed/Rwpu81XmijM",
    gameType: "matching",
    gameIKTP: [
      {
        iktpId: 0,
        judul: "Mencocokkan Pasangan: Perpindahan Kalor",
        pasangan: [
          { konsep: "Konduksi", cocok: "Ujung sendok logam panas saat mengaduk teh" },
          { konsep: "Konveksi", cocok: "Terjadinya hembusan angin darat & angin laut" },
          { konsep: "Radiasi", cocok: "Hangatnya panas sinar matahari sampai ke kulit" }
        ]
      },
      {
        iktpId: 1,
        judul: "Mencocokkan Pasangan: Proses Gas Termodinamika",
        pasangan: [
          { konsep: "Isobarik", cocok: "Proses perubahan gas pada tekanan tetap" },
          { konsep: "Isokhorik", cocok: "Volume gas tetap sehingga tidak menghasilkan usaha (W = 0)" },
          { konsep: "Adiabatik", cocok: "Proses sangat cepat tanpa ada kalor masuk/keluar (Q = 0)" }
        ]
      },
      {
        iktpId: 2,
        judul: "Mencocokkan Pasangan: Hukum II Termodinamika",
        pasangan: [
          { konsep: "Arah Alami Kalor", cocok: "Hanya mengalir spontan dari suhu tinggi ke rendah" },
          { konsep: "Siklus Carnot", cocok: "Mesin kalor dengan efisiensi teoritis tertinggi" },
          { konsep: "Kulkas / AC", cocok: "Mesin pendingin yang membutuhkan energi listrik luar" }
        ]
      },
      {
        iktpId: 3,
        judul: "Mencocokkan Pasangan: Pemanasan Global",
        pasangan: [
          { konsep: "Gas Rumah Kaca", cocok: "Molekul CO2 dan Metana yang menyerap inframerah" },
          { konsep: "Efek Albedo", cocok: "Daya pantul radiasi matahari oleh lapisan es salju" },
          { konsep: "Dampak Termal", cocok: "Kenaikan permukaan air laut akibat es kutub mencair" }
        ]
      }
    ],
    lkm: {
      title: "LKM 3: Pengamatan Efek Rumah Kaca",
      guide: "Buka simulator PhET Greenhouse Effect. Amati suhu bumi saat kadar gas rumah kaca dinaikkan dari zaman dahulu ke zaman modern.",
      phetUrl: "https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_all.html",
      q1: "1. Apa yang terjadi pada angka suhu permukaan bumi ketika konsentrasi gas rumah kaca dinaikkan?",
      q2: "2. Bagaimana partikel gas inframerah memantul kembali ke permukaan bumi pada simulasi tersebut?",
      q3: "3. Tuliskan 2 aksi nyata yang bisa kamu dan teman sekelasmu lakukan untuk mengurangi emisi gas rumah kaca di sekolah!"
    },
    remedialIKTP: [
      { iktpIdx: 0, soal: "Sebutkan dan jelaskan 3 cara perpindahan kalor beserta satu contoh nyatanya saat kamu memasak air di dapur!" },
      { iktpIdx: 1, soal: "Sebuah sistem gas menyerap kalor sebesar 500 Joule dan melakukan usaha luar sebesar 200 Joule. Berapakah perubahan energi dalam (ΔU) gas tersebut?" },
      { iktpIdx: 2, soal: "Mengapa tidak mungkin ada mesin kendaraan bermotor yang memiliki efisiensi 100%? Jelaskan berdasarkan Hukum II Termodinamika!" },
      { iktpIdx: 3, soal: "Jelaskan mengapa pemanasan global dapat memicu anomali cuaca ekstrem dan badai tropis di wilayah Indonesia!" }
    ],
    pengayaanIKTP: [
      { iktpIdx: 0, soal: "Analisis bagaimana rancangan termos air panas (dinding kaca perak & ruang hampa) mampu meminimalkan ketiga jenis perpindahan kalor secara bersamaan!" },
      { iktpIdx: 1, soal: "Rancang pemodelan siklus termodinamika pada mesin pembangkit listrik tenaga uap (PLTU) dan cara mendaur ulang kalor buangannya (kogenerasi)!" },
      { iktpIdx: 2, soal: "Analisis konsep entropi alam semesta dan mengapa energi di bumi mengalami degradasi mutu meskipun jumlah total energinya kekal!" },
      { iktpIdx: 3, soal: "Rancang sebuah konsep bangunan sekolah hijau (green building) yang memanfaatkan ventilasi alami dan atap tanaman peneduh untuk mengurangi pulau bahang perkotaan!" }
    ],
    defaultLinkUjian: "https://forms.gle/"
  },
  {
    id: 3,
    kode: "TP 4.1",
    nama: "Gejala Gelombang",
    judul: "TP 4.1: Mengenal Gejala Gelombang dan Bunyi di Sekitar Kita",
    cp: "Menganalisis gejala gelombang dan penerapannya dalam kehidupan sehari-hari.",
    iktp: [
      "IKTP 4.1.1: Membedakan konsep getaran dan gelombang serta jenis gelombang transversal dan longitudinal.",
      "IKTP 4.1.2: Menghitung hubungan cepat rambat gelombang, panjang gelombang, dan frekuensi (v = λ × f).",
      "IKTP 4.1.3: Mengidentifikasi sifat-sifat umum gelombang: pemantulan (refleksi), pembiasan, dan interferensi.",
      "IKTP 4.1.4: Menjelaskan fenomena pergeseran frekuensi bunyi (Efek Doppler) dan resonansi dalam teknologi."
    ],
    materi: `
      <h3>1. Gelombang: Merambatkan Energi Tanpa Memindahkan Materi</h3>
      <p>Gelombang adalah getaran yang merambat. Gelombang Transversal memiliki bukit dan lembah (gelombang air, gelombang tali), sedangkan Gelombang Longitudinal memiliki rapatan dan renggangan (gelombang bunyi di udara).</p>
      
      <h3>2. Rumus Sakti v = λ × f dan Efek Doppler</h3>
      <p>Semua gelombang memenuhi rumus <strong>v = λ × f</strong>. Ketika mobil ambulans melaju mendekat ke arahmu, nadanya terdengar melengking tinggi karena gelombangnya terdesak memadat (Efek Doppler), dan saat menjauh nadanya berubah menjadi lebih berat.</p>
    `,
    // Video Bahasa Indonesia Gelombang Mekanik SMA Kelas 11
    videoEmbed: "https://www.youtube-nocookie.com/embed/ztJXWeC9-H8",
    gameType: "detektif",
    gameIKTP: [
      {
        iktpId: 0,
        judul: "Detektif Gelombang 1: Membedakan Jenis Gelombang",
        kasus: "Kamu melihat perahu nelayan terapung di danau terayun-ayun naik dan turun saat riak gelombang air melewatinya. Jenis gelombang apakah ini?",
        pilihan: [
          { teks: "A. Gelombang Transversal, karena arah getar partikel air tegak lurus dengan arah perambatan riak gelombang.", benar: true },
          { teks: "B. Gelombang Longitudinal, karena arah getarnya searah rambatan.", benar: false }
        ]
      },
      {
        iktpId: 1,
        judul: "Detektif Gelombang 2: Menghitung Cepat Rambat Sonar",
        kasus: "Sebuah pemancar kapal mendeteksi gelombang bunyi di air laut dengan frekuensi 500 Hz dan panjang gelombang 3 meter. Berapakah cepat rambatnya?",
        pilihan: [
          { teks: "A. 1.500 m/s (diperoleh dari v = λ × f = 3 m × 500 Hz)", benar: true },
          { teks: "B. 166,7 m/s (diperoleh dari pembagian)", benar: false }
        ]
      },
      {
        iktpId: 2,
        judul: "Detektif Gelombang 3: Rahasia Earphone Peredam Bising",
        kasus: "Headphone ANC mampu menghilangkan bunyi dengung mesin pesawat di dalam kabin. Sifat gelombang manakah yang dimanfaatkan?",
        pilihan: [
          { teks: "A. Interferensi Destruktif (memancarkan gelombang tandingan yang berlawanan fase 180° sehingga saling meniadakan).", benar: true },
          { teks: "B. Pembiasan gelombang menembus busa earphone.", benar: false }
        ]
      },
      {
        iktpId: 3,
        judul: "Detektif Gelombang 4: Mengapa Sirine Ambulans Melengking?",
        kasus: "Mengapa sirine ambulans yang melaju mendekat terdengar berfrekuensi lebih tinggi?",
        pilihan: [
          { teks: "A. Muka gelombang bunyi di depan mobil terdesak memadat sehingga telinga menerima lebih banyak getaran per detik (Efek Doppler).", benar: true },
          { teks: "B. Pengeras suara ambulans otomatis memutar nada lebih tinggi saat mobil berjalan kencang.", benar: false }
        ]
      }
    ],
    lkm: {
      title: "LKM 4: Eksperimen Getaran dan Frekuensi Gelombang Tali",
      guide: "Buka simulator PhET Wave on a String. Pasang mode 'Oscillate' dan amati bentuk bukit serta lembah gelombangnya.",
      phetUrl: "https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_all.html",
      q1: "1. Ketika kamu menaikkan angka frekuensi (f) menjadi lebih besar, apakah gelombang tali menjadi semakin rapat atau semakin renggang?",
      q2: "2. Bagaimana perbedaan gerak partikel tali (naik-turun) dengan arah rambatan gelombang (maju ke samping)? Jenis gelombang apakah ini?",
      q3: "3. Tuliskan contoh pemanfaatan gelombang bunyi ultrasonik dalam dunia kedokteran yang kamu ketahui!"
    },
    remedialIKTP: [
      { iktpIdx: 0, soal: "Sebutkan perbedaan gelombang transversal dan longitudinal beserta masing-masing 2 contohnya dalam kehidupan nyata!" },
      { iktpIdx: 1, soal: "Sebuah gelombang bunyi merambat di udara dengan panjang gelombang 0,5 meter dan frekuensi 680 Hz. Hitunglah cepat rambat gelombang tersebut!" },
      { iktpIdx: 2, soal: "Jelaskan mengapa suara gema kita terdengar kembali saat berteriak di depan tebing bukit yang tinggi!" },
      { iktpIdx: 3, soal: "Tuliskan rumus Efek Doppler bunyi beserta penjelasan tanda plus-minus untuk pengamat dan sumber bunyi yang saling mendekati!" }
    ],
    pengayaanIKTP: [
      { iktpIdx: 0, soal: "Analisis mengapa gelombang gempa bumi terdiri dari gelombang primer (longitudinal) dan gelombang sekunder (transversal) saat merambat menembus lapisan mantel bumi!" },
      { iktpIdx: 1, soal: "Bagaimana cara kerja teknologi kabel serat optik (fiber optic) mentransmisikan data internet kecepatan cahaya dengan pemantulan sempurna?" },
      { iktpIdx: 2, soal: "Jelaskan prinsip kerja alat USG (Ultrasonografi) medis dalam menghasilkan citra visual bayi dalam kandungan tanpa operasi!" },
      { iktpIdx: 3, soal: "Analisis pemanfaatan fenomena pergeseran Doppler optik (Redshift) yang digunakan astronom untuk membuktikan bahwa alam semesta sedang mengembang!" }
    ],
    defaultLinkUjian: "https://forms.gle/"
  }
];

// ---------------------------------------------------------
// 2. ARSIP MODUL AJAR / RPP
// ---------------------------------------------------------
const DATABASE_MODUL_AJAR = [
  {
    tp: "TP 1.1",
    nama: "Modul Ajar: Gerak dan Gaya (Hukum-Hukum Newton)",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Bernalar Kritis, Mandiri, Bergotong Royong",
    deskripsi: "Pembelajaran mendalam mengidentifikasi konsep posisi, jarak, perpindahan, kelajuan, serta Hukum I, II, dan III Newton pada keselamatan berkendara.",
    sintaks: "1. Orientasi fenomena lari lapangan & berkendara • 2. Simulasi PhET Forces & Motion • 3. Game misi sabuk pengaman • 4. Refleksi metakognitif.",
    driveLink: "https://drive.google.com/"
  },
  {
    tp: "TP 2.1",
    nama: "Modul Ajar: Mekanika Fluida & Penerapannya",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Kreatif, Mandiri, Bernalar Kritis",
    deskripsi: "Penyelidikan tekanan hidrostatik, hukum Pascal pada dongkrak, hukum Archimedes pada kapal, dan asas Bernoulli pada sayap pesawat.",
    sintaks: "1. Fenomena kapal baja terapung • 2. Eksperimen sensor tekanan PhET Under Pressure • 3. Game TTS Fluida • 4. Evaluasi & peer assessment.",
    driveLink: "https://drive.google.com/"
  },
  {
    tp: "TP 3.1",
    nama: "Modul Ajar: Kalor, Termodinamika & Pemanasan Global",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Beriman & Berakhlak Mulia (Peduli Lingkungan), Bernalar Kritis",
    deskripsi: "Menganalisis konsep perpindahan kalor, hukum termodinamika pada gas, dan dampaknya terhadap perubahan iklim global.",
    sintaks: "1. Fenomena panas matahari & suhu bumi • 2. Simulasi radiasi PhET Greenhouse Effect • 3. Game menjodohkan termal • 4. Penilaian diri mandiri.",
    driveLink: "https://drive.google.com/"
  },
  {
    tp: "TP 4.1",
    nama: "Modul Ajar: Gejala Gelombang dan Bunyi",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Bernalar Kritis, Berkebinekaan Global",
    deskripsi: "Menganalisis besaran fisis gelombang, sifat pemantulan bunyi sonar, pembiasan, dan efek Doppler sirine ambulans.",
    sintaks: "1. Gelombang air dan sirine jalan • 2. Eksperimen PhET Wave on a String • 3. Game detektif gelombang • 4. Asesmen sumatif & refleksi.",
    driveLink: "https://drive.google.com/"
  }
];

// ---------------------------------------------------------
// 3. DAFTAR 35 SISWA
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
let currentSubGameIKTPIndex = 0;
let selectedMatchingKonsep = null;
let currentUploadedMapBase64 = "";

// ---------------------------------------------------------
// 4. INISIALISASI SAAT HALAMAN DIMUAT
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
    perbaruiPilihanIKTPPeta(0);
    perbaruiIKTPEvalDiri(0);
    perbaruiIKTPEvalTeman(0);
    perbaruiIKTPRemedial(0);
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

// MENU 1: MATERI & IKTP
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

// MENU 2: FORMATIF (VARIASI GAME PER TP & PER IKTP)
function pilihTPFormatif(index) {
  currentTPFormatifIndex = index;
  const pills = document.querySelectorAll("#panel-formatif .tp-pill");
  pills.forEach((p, idx) => p.classList.toggle("active", idx === index));

  const data = DATABASE_TP[index];

  // Muat Selector IKTP untuk Game
  const selIKTP = document.getElementById("game-iktp-selector");
  selIKTP.innerHTML = "";
  data.iktp.forEach((ind, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = `IKTP ${idx + 1}`;
    selIKTP.appendChild(opt);
  });

  gantiSubGameIKTP(0);

  // Muat LKM PhET
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

function gantiSubGameIKTP(iktpIdx) {
  currentSubGameIKTPIndex = parseInt(iktpIdx);
  const data = DATABASE_TP[currentTPFormatifIndex];
  const area = document.getElementById("game-dynamic-area");
  const resBox = document.getElementById("game-result-box");
  resBox.style.display = "none";

  // VARIASI GAME 1: MISI SKENARIO (TP 1.1)
  if (data.gameType === "misi") {
    document.getElementById("game-badge-type").innerText = "MISI SKENARIO FISIKA";
    const sub = data.gameIKTP[currentSubGameIKTPIndex] || data.gameIKTP[0];
    document.getElementById("game-title").innerText = sub.judul;
    document.getElementById("game-desc").innerText = sub.deskripsi;

    area.innerHTML = "";
    const optBox = document.createElement("div");
    optBox.className = "game-options";
    sub.opsi.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerText = opt.teks;
      btn.onclick = () => verifikasiJawabanGameMisi(opt);
      optBox.appendChild(btn);
    });
    area.appendChild(optBox);
  }

  // VARIASI GAME 2: TEKA-TEKI SILANG (TTS) INTERAKTIF (TP 2.1)
  else if (data.gameType === "tts") {
    document.getElementById("game-badge-type").innerText = "TEKA-TEKI SILANG (TTS) FLUIDA";
    const sub = data.gameIKTP[currentSubGameIKTPIndex] || data.gameIKTP[0];
    document.getElementById("game-title").innerText = sub.judul;
    document.getElementById("game-desc").innerText = "Isi jawaban teka-teki silang mendatar dan menurun di bawah ini dengan huruf kapital:";

    area.innerHTML = `
      <div class="tts-clue-item">
        <strong>➡️ Mendatar:</strong> ${sub.petunjukMendatar}
        <div style="margin-top:8px;">
          <input type="text" id="tts-input-mendatar" placeholder="Ketik kata mendatar..." style="text-transform:uppercase; font-weight:700; padding:8px 12px; border:1.5px solid #cbd5e1; border-radius:6px; width:100%; max-width:320px;">
        </div>
      </div>
      <div class="tts-clue-item">
        <strong>⬇️ Menurun:</strong> ${sub.petunjukMenurun}
        <div style="margin-top:8px;">
          <input type="text" id="tts-input-menurun" placeholder="Ketik kata menurun..." style="text-transform:uppercase; font-weight:700; padding:8px 12px; border:1.5px solid #cbd5e1; border-radius:6px; width:100%; max-width:320px;">
        </div>
      </div>
      <button class="btn-primary-futuristic" style="width:auto; padding:10px 22px; margin-top:8px;" onclick="verifikasiTTS('${sub.kunciMendatar}', '${sub.kunciMenurun}')">Periksa Jawaban TTS 🧩</button>
    `;
  }

  // VARIASI GAME 3: MENJODOHKAN (MATCHING GAME) (TP 3.1)
  else if (data.gameType === "matching") {
    document.getElementById("game-badge-type").innerText = "GAME MENJODOHKAN KONSEP TERMAL";
    const sub = data.gameIKTP[currentSubGameIKTPIndex] || data.gameIKTP[0];
    document.getElementById("game-title").innerText = sub.judul;
    document.getElementById("game-desc").innerText = "Klik salah satu Kartu Konsep (kiri), lalu klik pasangannya yang tepat di Kartu Pasangan (kanan):";

    selectedMatchingKonsep = null;
    let html = `
      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px; margin-top:10px;">
        <div style="display:flex; flex-direction:column; gap:10px;">
          <strong style="color:var(--blue-deep);">Kartu Konsep:</strong>
    `;
    sub.pasangan.forEach((p, idx) => {
      html += `<div class="matching-card" id="match-konsep-${idx}" onclick="pilihKartuKonsep(${idx}, '${p.konsep}')">🔹 ${p.konsep}</div>`;
    });
    html += `</div><div style="display:flex; flex-direction:column; gap:10px;"><strong style="color:var(--blue-deep);">Kartu Pasangan:</strong>`;
    
    // Acak pasangan kanan
    const acak = [...sub.pasangan].sort(() => Math.random() - 0.5);
    acak.forEach((p, idx) => {
      html += `<div class="matching-card" id="match-target-${idx}" onclick="cocokkanKartuTarget(${idx}, '${p.konsep}')">🔸 ${p.cocok}</div>`;
    });
    html += `</div></div>`;
    area.innerHTML = html;
  }

  // VARIASI GAME 4: DETEKTIF GELOMBANG (TP 4.1)
  else if (data.gameType === "detektif") {
    document.getElementById("game-badge-type").innerText = "DETEKTIF GELOMBANG & BUNYI";
    const sub = data.gameIKTP[currentSubGameIKTPIndex] || data.gameIKTP[0];
    document.getElementById("game-title").innerText = sub.judul;
    document.getElementById("game-desc").innerText = `Kasus Investigasi: "${sub.kasus}"`;

    area.innerHTML = "";
    const optBox = document.createElement("div");
    optBox.className = "game-options";
    sub.pilihan.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerText = opt.teks;
      btn.onclick = () => verifikasiDetektif(opt);
      optBox.appendChild(btn);
    });
    area.appendChild(optBox);
  }
}

// Logika Validasi Game
function verifikasiJawabanGameMisi(pilihan) {
  const resBox = document.getElementById("game-result-box");
  resBox.style.display = "block";
  if (pilihan.benar) {
    resBox.style.background = "#ecfdf5"; resBox.style.border = "1.5px solid #a7f3d0"; resBox.style.color = "#065f46";
    resBox.innerHTML = `<strong>MISI BERHASIL! 🎖️</strong><br>${pilihan.alasan}`;
  } else {
    resBox.style.background = "#fff1f2"; resBox.style.border = "1.5px solid #fecdd3"; resBox.style.color = "#9f1239";
    resBox.innerHTML = `<strong>ANALISIS KURANG TEPAT! ⚠️</strong><br>${pilihan.alasan}`;
  }
}

function verifikasiTTS(kunciMendatar, kunciMenurun) {
  const inMendatar = (document.getElementById("tts-input-mendatar").value || "").trim().toUpperCase();
  const inMenurun = (document.getElementById("tts-input-menurun").value || "").trim().toUpperCase();
  const resBox = document.getElementById("game-result-box");
  resBox.style.display = "block";

  if (inMendatar === kunciMendatar && inMenurun === kunciMenurun) {
    resBox.style.background = "#ecfdf5"; resBox.style.border = "1.5px solid #a7f3d0"; resBox.style.color = "#065f46";
    resBox.innerHTML = `<strong>LUAR BIASA! JAWABAN TTS SEMPURNA! 🧩🎉</strong><br>Mendatar: <em>${kunciMendatar}</em> | Menurun: <em>${kunciMenurun}</em>. Pemahaman konsep fluidamu sangat hebat!`;
  } else {
    resBox.style.background = "#fff1f2"; resBox.style.border = "1.5px solid #fecdd3"; resBox.style.color = "#9f1239";
    resBox.innerHTML = `<strong>MASIH ADA KATA YANG KELIRU! ⚠️</strong><br>Periksa kembali ejaan huruf dan petunjuk fisikanya ya.`;
  }
}

function pilihKartuKonsep(idx, konsepNama) {
  document.querySelectorAll("[id^='match-konsep-']").forEach(c => c.classList.remove("selected"));
  const el = document.getElementById(`match-konsep-${idx}`);
  if (el.classList.contains("matched")) return;
  el.classList.add("selected");
  selectedMatchingKonsep = { idx, nama: konsepNama };
}

function cocokkanKartuTarget(idx, targetKonsepNama) {
  if (!selectedMatchingKonsep) {
    alert("Klik kartu konsep di sebelah kiri terlebih dahulu!");
    return;
  }
  const targetEl = document.getElementById(`match-target-${idx}`);
  const resBox = document.getElementById("game-result-box");
  resBox.style.display = "block";

  if (selectedMatchingKonsep.nama === targetKonsepNama) {
    targetEl.classList.add("matched");
    document.getElementById(`match-konsep-${selectedMatchingKonsep.idx}`).classList.add("matched");
    document.getElementById(`match-konsep-${selectedMatchingKonsep.idx}`).classList.remove("selected");
    selectedMatchingKonsep = null;

    resBox.style.background = "#ecfdf5"; resBox.style.border = "1.5px solid #a7f3d0"; resBox.style.color = "#065f46";
    resBox.innerHTML = `<strong>PASANGAN COCOK! 🎯</strong><br>Konsep <em>${targetKonsepNama}</em> berhasil kamu pasangkan dengan tepat!`;
  } else {
    resBox.style.background = "#fff1f2"; resBox.style.border = "1.5px solid #fecdd3"; resBox.style.color = "#9f1239";
    resBox.innerHTML = `<strong>PASANGAN KURANG COCOK! ⚠️</strong><br>Coba telaah kembali definisi konsep tersebut.`;
  }
}

function verifikasiDetektif(pilihan) {
  const resBox = document.getElementById("game-result-box");
  resBox.style.display = "block";
  if (pilihan.benar) {
    resBox.style.background = "#ecfdf5"; resBox.style.border = "1.5px solid #a7f3d0"; resBox.style.color = "#065f46";
    resBox.innerHTML = `<strong>ANALISIS DETEKTIF TEPAT! 🔍🎉</strong><br>Kamu berhasil memecahkan fenomena fisika gelombang ini dengan nalar kritis!`;
  } else {
    resBox.style.background = "#fff1f2"; resBox.style.border = "1.5px solid #fecdd3"; resBox.style.color = "#9f1239";
    resBox.innerHTML = `<strong>PETUNJUK KURANG COCOK! ⚠️</strong><br>Perhatikan kembali jenis arah getar dan perambatan gelombangnya.`;
  }
}

function gantiModeFormatif(mode) {
  document.getElementById("btn-mode-game").classList.toggle("active", mode === 'game');
  document.getElementById("btn-mode-lkm").classList.toggle("active", mode === 'lkm');
  document.getElementById("box-game-formatif").style.display = mode === 'game' ? "block" : "none";
  document.getElementById("box-lkm-formatif").style.display = mode === 'lkm' ? "block" : "none";
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

// MENU 4: PETA KONSEP (DENGAN SELECTOR TP & IKTP)
function perbaruiPilihanIKTPPeta(tpIndex) {
  const data = DATABASE_TP[tpIndex];
  const selIKTP = document.getElementById("peta-iktp-selector");
  selIKTP.innerHTML = "";
  data.iktp.forEach((ind, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = ind;
    selIKTP.appendChild(opt);
  });
  muatPetaKonsepTersimpan();
}

function muatPetaKonsepTersimpan() {
  const tpIdx = document.getElementById("peta-tp-selector").value;
  const iktpIdx = document.getElementById("peta-iktp-selector").value;
  const tpKode = DATABASE_TP[tpIdx].kode;

  const session = JSON.parse(localStorage.getItem("lms_physics_session") || "{}");
  const sName = session.name || "Siswa";

  const saved = localStorage.getItem(`peta_${tpKode}_IKTP${iktpIdx}_${sName}`);
  const previewImg = document.getElementById("peta-preview-img");

  if (saved) {
    try {
      const m = JSON.parse(saved);
      document.getElementById("peta-text-utama").value = m.utama || "";
      document.getElementById("peta-text-cabang").value = m.cabang || "";
      document.getElementById("peta-text-kesulitan").value = m.kesulitan || "";
      if (m.gambar) { previewImg.src = m.gambar; previewImg.style.display = "block"; }
      else { previewImg.style.display = "none"; }
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
  const sName = session.name || "Siswa";
  const tpIdx = document.getElementById("peta-tp-selector").value;
  const iktpIdx = document.getElementById("peta-iktp-selector").value;
  const tpKode = DATABASE_TP[tpIdx].kode;

  const dataPeta = {
    siswa: sName,
    tp: tpKode,
    iktp: `IKTP ${parseInt(iktpIdx) + 1}`,
    utama: document.getElementById("peta-text-utama").value,
    cabang: document.getElementById("peta-text-cabang").value,
    kesulitan: document.getElementById("peta-text-kesulitan").value,
    gambar: currentUploadedMapBase64,
    waktu: new Date().toLocaleString()
  };

  localStorage.setItem(`peta_${tpKode}_IKTP${iktpIdx}_${sName}`, JSON.stringify(dataPeta));
  localStorage.setItem(`peta_terakhir_${sName}`, JSON.stringify(dataPeta));

  const statusEl = document.getElementById("peta-saved-status");
  statusEl.style.display = "inline";
  setTimeout(() => { statusEl.style.display = "none"; }, 4000);
}

// MENU 5: PENILAIAN DIRI & TEMAN (DENGAN TP & IKTP)
function gantiSubPenilaian(sub) {
  document.getElementById("btn-eval-diri").classList.toggle("active", sub === 'diri');
  document.getElementById("btn-eval-teman").classList.toggle("active", sub === 'teman');
  document.getElementById("sub-penilaian-diri").style.display = (sub === 'diri') ? "block" : "none";
  document.getElementById("sub-penilaian-teman").style.display = (sub === 'teman') ? "block" : "none";
}

function perbaruiIKTPEvalDiri(tpIdx) {
  const sel = document.getElementById("eval-diri-iktp-select");
  sel.innerHTML = "";
  DATABASE_TP[tpIdx].iktp.forEach((ind, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = ind;
    sel.appendChild(opt);
  });
}

function perbaruiIKTPEvalTeman(tpIdx) {
  const sel = document.getElementById("select-iktp-teman");
  sel.innerHTML = "";
  DATABASE_TP[tpIdx].iktp.forEach((ind, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = ind;
    sel.appendChild(opt);
  });
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
  const tpIdx = document.getElementById("eval-diri-tp-select").value;
  const iktpIdx = document.getElementById("eval-diri-iktp-select").value;

  const dataSelf = {
    siswa: siswaNama,
    tp: DATABASE_TP[tpIdx].kode,
    iktp: `IKTP ${parseInt(iktpIdx) + 1}`,
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
  const tpIdx = document.getElementById("select-tp-teman").value;
  const iktpIdx = document.getElementById("select-iktp-teman").value;

  const ind1 = document.querySelector('input[name="peer_ind_1"]:checked')?.value || "0";
  const ind2 = document.querySelector('input[name="peer_ind_2"]:checked')?.value || "0";
  const ind3 = document.querySelector('input[name="peer_ind_3"]:checked')?.value || "0";
  const ind4 = document.querySelector('input[name="peer_ind_4"]:checked')?.value || "0";
  const catatan = document.getElementById("peer-notes").value;

  const dataPeer = {
    penilai: penilaiNama,
    yangDinilai: temanDinilai,
    tp: DATABASE_TP[tpIdx].kode,
    iktp: `IKTP ${parseInt(iktpIdx) + 1}`,
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

  if (!tanggal) { alert("Tentukan tanggal presensi!"); return; }

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

// MENU 7: REMEDIAL & PENGAYAAN (DENGAN TP & IKTP)
function perbaruiIKTPRemedial(tpIdx) {
  const sel = document.getElementById("remedial-iktp-selector");
  sel.innerHTML = "";
  DATABASE_TP[tpIdx].iktp.forEach((ind, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = ind;
    sel.appendChild(opt);
  });
  muatSoalRemedialPengayaan();
}

function muatSoalRemedialPengayaan() {
  const tpIdx = document.getElementById("remedial-tp-selector").value;
  const iktpIdx = document.getElementById("remedial-iktp-selector").value;
  const data = DATABASE_TP[tpIdx];

  const remItem = data.remedialIKTP[iktpIdx] || data.remedialIKTP[0];
  const pengItem = data.pengayaanIKTP[iktpIdx] || data.pengayaanIKTP[0];

  document.getElementById("remedial-desc").innerText = `Fokus Pemulihan Konsep (${data.kode}): ${data.iktp[iktpIdx]}`;
  document.getElementById("label-remedial-soal").innerText = `Soal Remedial: ${remItem.soal}`;

  document.getElementById("pengayaan-desc").innerText = `Fokus Tantangan Riset (${data.kode}): ${data.iktp[iktpIdx]}`;
  document.getElementById("label-pengayaan-soal").innerText = `Tantangan HOTS: ${pengItem.soal}`;

  const session = JSON.parse(localStorage.getItem("lms_physics_session") || "{}");
  const sName = session.name || "Siswa";

  const savedRem = localStorage.getItem(`remedial_${data.kode}_IKTP${iktpIdx}_${sName}`);
  const savedPeng = localStorage.getItem(`pengayaan_${data.kode}_IKTP${iktpIdx}_${sName}`);

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
  const tpIdx = document.getElementById("remedial-tp-selector").value;
  const iktpIdx = document.getElementById("remedial-iktp-selector").value;
  const tpKode = DATABASE_TP[tpIdx].kode;

  const data = { siswa: sName, tp: tpKode, iktp: `IKTP ${parseInt(iktpIdx) + 1}`, tipe: "Remedial", jawaban: ans, waktu: new Date().toLocaleString() };
  localStorage.setItem(`remedial_${tpKode}_IKTP${iktpIdx}_${sName}`, JSON.stringify(data));
  localStorage.setItem(`remedial_terakhir_${sName}`, JSON.stringify(data));
  
  const alertEl = document.getElementById("remedial-alert");
  alertEl.style.display = "block";
  setTimeout(() => { alertEl.style.display = "none"; }, 4000);
}

function simpanJawabanPengayaan() {
  const ans = document.getElementById("pengayaan-input-ans").value.trim();
  if (!ans) { alert("Tuliskan gagasan analisismu terlebih dahulu!"); return; }

  const session = JSON.parse(localStorage.getItem("lms_physics_session") || "{}");
  const sName = session.name || "Siswa";
  const tpIdx = document.getElementById("remedial-tp-selector").value;
  const iktpIdx = document.getElementById("remedial-iktp-selector").value;
  const tpKode = DATABASE_TP[tpIdx].kode;

  const data = { siswa: sName, tp: tpKode, iktp: `IKTP ${parseInt(iktpIdx) + 1}`, tipe: "Pengayaan", jawaban: ans, waktu: new Date().toLocaleString() };
  localStorage.setItem(`pengayaan_${tpKode}_IKTP${iktpIdx}_${sName}`, JSON.stringify(data));
  localStorage.setItem(`pengayaan_terakhir_${sName}`, JSON.stringify(data));

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
  
  const userMsgEl = document.createElement("div");
  userMsgEl.className = "ai-msg ai-msg-user";
  userMsgEl.innerText = userText;
  container.appendChild(userMsgEl);

  input.value = "";
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    const botMsgEl = document.createElement("div");
    botMsgEl.className = "ai-msg ai-msg-bot";
    botMsgEl.innerHTML = `<strong>Tutor AI:</strong> ${hasilkanJawabanAIFisika(userText)}`;
    container.appendChild(botMsgEl);
    container.scrollTop = container.scrollHeight;
  }, 500);
}

function hasilkanJawabanAIFisika(pertanyaan) {
  const q = pertanyaan.toLowerCase();

  // TP 1.1: Gerak & Gaya
  if (q.includes("jarak") && q.includes("perpindahan")) {
    return "Pertanyaan bagus! <strong>Jarak</strong> adalah panjang seluruh lintasan yang kamu tempuh (besaran skalar, selalu bernilai positif). Sedangkan <strong>Perpindahan</strong> adalah selisih garis lurus dari titik awal ke titik akhir (besaran vektor, punya arah). Kalau kamu lari keliling lapangan 400 meter dan balik ke garis start, jarakmu 400 meter, tetapi perpindahanmu = 0 meter!";
  }
  if (q.includes("kelajuan") || q.includes("kecepatan")) {
    return "Rumus praktisnya: <strong>Kelajuan = Jarak / Waktu (v = s / t)</strong> yang terbaca di speedometer motor. Sedangkan <strong>Kecepatan = Perpindahan / Waktu</strong> yang memiliki arah gerak (misal 50 km/jam ke arah timur).";
  }
  if (q.includes("inersia") || q.includes("sabuk") || q.includes("helm") || q.includes("hukum 1") || q.includes("hukum i")) {
    return "Itu adalah prinsip <strong>Hukum I Newton (Inersia / Kelembaman: ∑F = 0)</strong>! Benda secara alami mempertahankan keadaannya. Saat mobil mendadak direm, badan kita ingin terus melaju ke depan. Sabuk pengaman memberikan gaya penahan ke belakang agar kita tidak membentur setir atau kaca!";
  }
  if (q.includes("hukum 2") || q.includes("hukum ii") || q.includes("f = m")) {
    return "Hukum II Newton dirumuskan <strong>F = m × a</strong>. Artinya percepatan (a) sebanding dengan gaya dorong (F), namun berbanding terbalik dengan massa benda (m). Mendorong motor yang berat butuh gaya jauh lebih besar dibanding mendorong sepeda ringan.";
  }
  if (q.includes("aksi") || q.includes("hukum 3") || q.includes("hukum iii")) {
    return "Hukum III Newton: <strong>F_aksi = -F_reaksi</strong>. Setiap ada gaya dorong, selalu ada gaya dorong balik yang sama besar tetapi berlawanan arah pada benda yang berbeda. Contoh: saat kamu mendayung perahu, dayung mendorong air ke belakang, dan air mendorong perahu melaju ke depan!";
  }

  // TP 2.1: Fluida
  if (q.includes("pascal") || q.includes("dongkrak")) {
    return "Hukum Pascal menyatakan tekanan cairan pada ruang tertutup diteruskan sama besar (<strong>F₁ / A₁ = F₂ / A₂</strong>). Gaya kecil pada pipa sempit mampu menghasilkan gaya angkat raksasa pada pipa besar dongkrak mobil!";
  }
  if (q.includes("archimedes") || q.includes("kapal") || q.includes("apung") || q.includes("tenggelam")) {
    return "Berdasarkan Hukum Archimedes, benda mendapat gaya apung sebesar berat zat cair yang dipindahkan. Kapal feri baja bisa terapung karena memiliki rongga udara lambung yang luas, membuat massa jenis total kapal lebih kecil dari air laut!";
  }
  if (q.includes("bernoulli") || q.includes("pesawat")) {
    return "Asas Bernoulli menyatakan: di mana kelajuan fluida mengalir lebih cepat, tekanannya justru menurun. Sayap pesawat dibuat melengkung di atas agar udara mengalir lebih kencang di bagian atas, menghasilkan tekanan rendah di atas dan gaya angkat ke atas!";
  }

  // TP 3.1: Termodinamika & Kalor
  if (q.includes("kalor") || q.includes("panas") || q.includes("suhu")) {
    return "Suhu adalah ukuran derajat panas benda (°C), sedangkan Kalor adalah energi panas yang berpindah dari suhu tinggi ke rendah (Joule). Kalor berpindah lewat Konduksi (logam), Konveksi (aliran cairan/udara), dan Radiasi (sinar matahari).";
  }
  if (q.includes("rumah kaca") || q.includes("pemanasan global") || q.includes("iklim")) {
    return "Gas rumah kaca (CO₂ dan metana) bertindak seperti kaca tebal di atmosfer bumi. Gas ini membiarkan cahaya matahari masuk, tetapi menjebak dan memantulkan kembali radiasi inframerah panas bumi, sehingga energi dalam atmosfer (Hukum I Termo: ΔU = Q - W) terus meningkat.";
  }

  // TP 4.1: Gelombang
  if (q.includes("gelombang") || q.includes("doppler") || q.includes("sonar") || q.includes("bunyi")) {
    return "Semua gelombang merambatkan energi tanpa memindahkan zat perantaranya dan terikat rumus <strong>v = λ × f</strong>. Efek Doppler terjadi saat sumber bunyi (misal sirine ambulans) melaju mendekatimu sehingga panjang gelombangnya termampatkan dan frekuensinya terdengar melengking tinggi!";
  }

  return "Pertanyaan fisika yang sangat menarik! Dalam pembelajaran mendalam fisika Fase F, coba perhatikan variabel besaran yang terlibat (apa yang berubah dan apa akibatnya). Kamu juga bisa menguji konsep ini secara langsung di simulator PhET pada menu nomor 2!";
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

// 1. REKAP PRESENSI TERSINKRON
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

// 2. JURNAL HARIAN GURU
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

// 3. ARSIP MODUL AJAR
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

// 4. REKAP REMEDIAL & PENGAYAAN GURU
function renderTabelGuruRemedial() {
  const tbody = document.getElementById("tabel-guru-remedial-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  DAFTAR_SISWA.forEach(s => {
    let r = localStorage.getItem(`remedial_terakhir_${s.nama}`);
    let p = localStorage.getItem(`pengayaan_terakhir_${s.nama}`);

    const remData = r ? JSON.parse(r) : null;
    const pengData = p ? JSON.parse(p) : null;

    const tr = document.createElement("tr");
    const remStatus = remData ? `<span class="status-badge badge-izin">✓ ${remData.tp} (${remData.iktp})</span>` : `<span class="status-badge badge-undone">-</span>`;
    const pengStatus = pengData ? `<span class="status-badge badge-done">✓ ${pengData.tp} (${pengData.iktp})</span>` : `<span class="status-badge badge-undone">-</span>`;
    const waktu = (remData ? remData.waktu : (pengData ? pengData.waktu : "-"));
    const tpInfo = (remData ? `${remData.tp} • ${remData.iktp}` : (pengData ? `${pengData.tp} • ${pengData.iktp}` : "-"));

    tr.innerHTML = `
      <td style="color:#0284c7; font-weight:700;">${s.no}</td>
      <td style="font-weight:600;">${s.nama}</td>
      <td><span class="status-badge badge-done">${tpInfo}</span></td>
      <td>${remStatus}</td>
      <td>${pengStatus}</td>
      <td style="font-size:0.8rem; color:#64748b;">${waktu}</td>
      <td>
        ${(remData || pengData) ? `<button class="btn-action-view" onclick="bukaModalDetailRemedialGuru('${s.nama}')">Tinjau Respon</button>` : '-'}
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function bukaModalDetailRemedialGuru(nama) {
  const rStr = localStorage.getItem(`remedial_terakhir_${nama}`);
  const pStr = localStorage.getItem(`pengayaan_terakhir_${nama}`);

  const r = rStr ? JSON.parse(rStr) : null;
  const p = pStr ? JSON.parse(pStr) : null;

  document.getElementById("modal-detail-badge").innerText = `REMEDIAL & PENGAYAAN TERAKHIR`;
  document.getElementById("modal-detail-title").innerText = `Hasil Evaluasi: ${nama}`;
  document.getElementById("modal-detail-subtitle").innerText = `Waktu: ${r ? r.waktu : (p ? p.waktu : '-')}`;

  document.getElementById("modal-detail-body").innerHTML = `
    <div style="margin-bottom:14px; background:#fffbeb; padding:14px; border-radius:8px; border:1px solid #fde68a;">
      <strong style="color:#92400e;">Jawaban Remedial (${r ? r.tp + ' ' + r.iktp : '-'}):</strong>
      <p style="margin-top:6px; color:#78350f;">${r ? r.jawaban : 'Belum mengumpulkan remedial.'}</p>
    </div>
    <div style="background:#ecfdf5; padding:14px; border-radius:8px; border:1px solid #a7f3d0;">
      <strong style="color:#065f46;">Jawaban Pengayaan (${p ? p.tp + ' ' + p.iktp : '-'}):</strong>
      <p style="margin-top:6px; color:#047857;">${p ? p.jawaban : 'Belum mengumpulkan pengayaan.'}</p>
    </div>
  `;
  document.getElementById("modal-guru-detail").style.display = "flex";
}

// 5. ASISTEN GURU AI
function jalankanGeneratorGuruAI(jenis) {
  const outBox = document.getElementById("guru-ai-output-box");
  outBox.innerText = "Sedang merancang instrumen cerdas... Mohon tunggu sebentar 🤖";

  setTimeout(() => {
    if (jenis === 'soal_remedial') {
      outBox.innerText = `RANCANGAN SOAL REMEDIAL KONSEPTUAL (TP 1.1: GERAK DAN GAYA)\n=======================================================\n\n1. Soal Posisi & Jarak (IKTP 1.1.1):\n   Rafi berjalan 10 meter ke utara, lalu berbelok 4 meter ke selatan dalam waktu 7 detik. Hitung jarak total, perpindahan, dan kelajuan rata-ratanya!\n   *Kunci Konsep:* Jarak = 10 + 4 = 14 meter. Perpindahan = 10 - 4 = 6 meter ke utara. Kelajuan = 14 / 7 = 2 m/s.\n\n2. Soal Hukum I Newton (IKTP 1.1.4):\n   Mengapa saat bus kota direm mendadak, tubuh penumpang terlempar ke arah depan? Jelaskan berdasarkan sifat kelembaman benda!\n   *Kunci Konsep:* Sifat inersia tubuh yang ingin terus mempertahankan kelajuan majunya saat bus berhenti.\n\n3. Soal Hukum II Newton (IKTP 1.1.3):\n   Sebuah balok bermassa 5 kg didorong dengan gaya F = 25 N di atas lantai licin. Hitung percepatan balok tersebut!\n   *Kunci Konsep:* a = F / m = 25 / 5 = 5 m/s².`;
    } else if (jenis === 'ide_pengayaan') {
      outBox.innerText = `RANCANGAN STUDI KASUS PENGAYAAN HOTS (TP 1.1 S/D 4.1)\n=======================================================\n\nStudi Kasus 1: Desain Jalur Darurat Rem Blong (Emergency Escape Ramp)\nJelaskan bagaimana para insinyur merancang tanjakan darurat berlapis kerikil kasar di sisi jalan turunan curam untuk menghentikan truk tronton rem blong dengan memanfaatkan Hukum II Newton dan gaya gesek kinetik!\n\nStudi Kasus 2: Penerapan Asas Bernoulli pada Karburator & Desain Formula 1\nBagaimana sayap belakang (rear wing) mobil balap F1 menghasilkan gaya tekan ke bawah (downforce) agar mobil tidak melayang saat menikung pada kecepatan 300 km/jam?`;
    } else if (jenis === 'ide_apersepsi') {
      outBox.innerText = `IDE APERSEPSI PEMBELAJARAN MENDALAM (MINDFUL LEARNING)\n=======================================================\n\n1. Memantik Nalar Gerak (TP 1.1):\n   Minta dua murid berlari dari pintu kelas ke papan tulis dan kembali lagi ke pintu. Tanyakan ke kelas: "Berapa jarak yang ditempuh kawanmu? Mengapa perpindahannya sama dengan nol?"\n\n2. Demonstrasi Telur Terapung (TP 2.1):\n   Masukkan sebutir telur ke gelas air tawar (telur tenggelam). Lalu tambahkan 3 sendok garam dapur dan aduk hingga telur terangkat melayang. Ajak murid mendiskusikan perubahan massa jenis cairan menurut Hukum Archimedes!`;
    } else if (jenis === 'draf_jurnal') {
      outBox.innerText = `DRAF REFLEKSI JURNAL MENGAJAR GURU (KURIKULUM MERDEKA)\n=======================================================\n\nAktivitas Terlaksana:\nPembelajaran mendalam telah dilaksanakan dengan mengaitkan konsep inersia dan sabuk pengaman kendaraan. Murid melakukan eksperimen interaktif PhET Forces and Motion Basics secara mandiri untuk membuktikan perbandingan terbalik antara massa dan percepatan (a = F/m).\n\nRefleksi & Catatan Pengajar:\nSebagian besar murid (sekitar 85%) sudah tuntas memahami perbedaan jarak dan perpindahan. Sekitar 5 murid masih memerlukan penguatan dalam menguraikan arah vektor gaya gesek statis. Rekomendasi pertemuan berikutnya adalah memberikan penguatan pada klinik remedial dan mengoptimalkan tutor sebaya.`;
    }
  }, 400);
}

function salinTeksOutputAI() {
  const text = document.getElementById("guru-ai-output-box").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("✓ Teks rancangan AI berhasil disalin ke papan klip!");
  });
}

// 6. REKAP LKM
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

// 7. REKAP PETA KONSEP
function renderTabelGuruPeta() {
  const tbody = document.getElementById("tabel-peta-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  DAFTAR_SISWA.forEach(s => {
    let saved = localStorage.getItem(`peta_terakhir_${s.nama}`);
    const found = saved ? JSON.parse(saved) : null;

    const tr = document.createElement("tr");
    if (found) {
      const lampiranHTML = found.gambar ? `<span class="status-badge badge-done">Ada Gambar</span>` : `<span style="opacity:0.6;">Teks Saja</span>`;
      tr.innerHTML = `
        <td style="color:#0284c7; font-weight:700;">${s.no}</td>
        <td style="font-weight:600;">${s.nama}</td>
        <td><span class="status-badge badge-done">${found.tp} (${found.iktp || 'IKTP 1'})</span></td>
        <td>${found.utama || '-'}</td>
        <td style="color:#b45309; font-weight:700;">${found.kesulitan ? '⚠️ ' + found.kesulitan : '-'}</td>
        <td>${lampiranHTML}</td>
        <td><button class="btn-action-view" onclick="bukaModalDetailPeta('${found.tp}', '${s.nama}')">Tinjau</button></td>
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
  let saved = localStorage.getItem(`peta_terakhir_${nama}`);
  if (!saved) return;
  const d = JSON.parse(saved);

  document.getElementById("modal-detail-badge").innerText = `PETA KONSEP: ${d.tp} • ${d.iktp || 'IKTP 1'}`;
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

// 8. REKAP EVALUASI
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
        <td><span class="status-badge badge-done">${d.tp || 'TP 1.1'} (${d.iktp || 'IKTP 1'})</span></td>
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
      <td><span class="status-badge badge-done">${p.tp || '-'} (${p.iktp || 'IKTP 1'})</span></td>
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

// 9. KELOLA TAUTAN SUMATIF
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
// 10. EKSPOR DATA KE CSV (EXCEL UTF-8)
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
    csv += "No,Nama Siswa,TP,IKTP,Materi Dipahami,Materi Belum Dipahami,Rencana Tindak Lanjut,Waktu\n";
    DAFTAR_SISWA.forEach(s => {
      const data = localStorage.getItem(`eval_diri_${s.nama}`);
      if (data) {
        const d = JSON.parse(data);
        csv += `"${s.no}","${s.nama}","${d.tp || 'TP 1.1'}","${d.iktp || 'IKTP 1'}","${(d.dipahami||'').replace(/"/g, '""')}","${(d.belumDipahami||'').replace(/"/g, '""')}","${(d.rencanaTindakan||'').replace(/"/g, '""')}","${d.waktu||''}"\n`;
      } else {
        csv += `"${s.no}","${s.nama}","-","-","Belum Mengisi","Belum Mengisi","Belum Mengisi","-"\n`;
      }
    });
    unduhFileBlob(csv, `rekap_eval_diri_${dateStr}.csv`);
  } else if (tipe === 'eval_teman') {
    csv += "No,Siswa Penilai,Teman yang Dinilai,TP,IKTP,Rata-rata Skor,Catatan Rekan,Waktu\n";
    let count = 1;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith("eval_peer_")) {
        try {
          const p = JSON.parse(localStorage.getItem(key));
          const skor = p.skor || {};
          const rata = ((Number(skor.penguasaanKonsep||0) + Number(skor.investigasiLab||0) + Number(skor.kolaborasiDiskusi||0) + Number(skor.sikapSolutif||0)) / 4).toFixed(1);
          csv += `"${count++}","${p.penilai}","${p.yangDinilai}","${p.tp}","${p.iktp || 'IKTP 1'}","${rata}","${(p.catatan||'').replace(/"/g, '""')}","${p.waktu}"\n`;
        } catch (e) {}
      }
    }
    unduhFileBlob(csv, `rekap_eval_teman_${dateStr}.csv`);
  } else if (tipe === 'peta') {
    csv += "No,Nama Siswa,TP,IKTP,Konsep Utama,Materi yang Masih Sulit,Ada Gambar,Waktu\n";
    DAFTAR_SISWA.forEach(s => {
      let saved = localStorage.getItem(`peta_terakhir_${s.nama}`);
      if (saved) {
        const found = JSON.parse(saved);
        csv += `"${s.no}","${s.nama}","${found.tp}","${found.iktp || 'IKTP 1'}","${(found.utama||'').replace(/"/g, '""')}","${(found.kesulitan||'').replace(/"/g, '""')}","${found.gambar ? 'Ya' : 'Tidak'}","${found.waktu||''}"\n`;
      } else {
        csv += `"${s.no}","${s.nama}","-","-","-","Belum Mengirim","Tidak","-"\n`;
      }
    });
    unduhFileBlob(csv, `rekap_peta_konsep_${dateStr}.csv`);
  } else if (tipe === 'remedial') {
    csv += "No,Nama Siswa,TP & IKTP,Jawaban Remedial,Jawaban Pengayaan,Waktu\n";
    DAFTAR_SISWA.forEach(s => {
      let r = localStorage.getItem(`remedial_terakhir_${s.nama}`);
      let p = localStorage.getItem(`pengayaan_terakhir_${s.nama}`);
      const remData = r ? JSON.parse(r) : null;
      const pengData = p ? JSON.parse(p) : null;

      const tpIktp = remData ? `${remData.tp} ${remData.iktp}` : (pengData ? `${pengData.tp} ${pengData.iktp}` : "-");
      const remAns = remData ? (remData.jawaban || '').replace(/"/g, '""') : "-";
      const pengAns = pengData ? (pengData.jawaban || '').replace(/"/g, '""') : "-";
      const w = remData ? remData.waktu : (pengData ? pengData.waktu : "-");

      csv += `"${s.no}","${s.nama}","${tpIktp}","${remAns}","${pengAns}","${w}"\n`;
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

// ---------------------------------------------------------
// 11. DATA SIMULASI UJI COBA CEPAT
// ---------------------------------------------------------
function isiContohDataSimulasi() {
  const today = new Date().toISOString().slice(0, 10);
  
  const mockPresensi = [
    { siswa: "Abel Pratama Katili", tanggal: today, status: "Hadir", keterangan: "Hadir di lab fisika", waktu: "07:15" },
    { siswa: "Adeliani Putri R. Agu", tanggal: today, status: "Hadir", keterangan: "Siap belajar", waktu: "07:20" },
    { siswa: "Andika Pratama Latoini", tanggal: today, status: "Izin", keterangan: "Dispensasi OSIS", waktu: "07:30" },
    { siswa: "Dimas Saputra R. Antu", tanggal: today, status: "Hadir", keterangan: "Hadir tepat waktu", waktu: "07:10" },
    { siswa: "Dea Ananda Nusi", tanggal: today, status: "Sakit", keterangan: "Demam berobat", waktu: "06:45" },
    { siswa: "Moh. Riski Ahmad", tanggal: today, status: "Hadir", keterangan: "Siap eksperimen PhET", waktu: "07:18" }
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

  // Simulasi Remedial Dimas Saputra (IKTP 1.1.1)
  const remDimas = {
    siswa: "Dimas Saputra R. Antu", tp: "TP 1.1", iktp: "IKTP 1", tipe: "Remedial",
    jawaban: "Jarak total = 8 m + 6 m = 14 m. Perpindahan = √(8² + 6²) = 10 meter ke timur laut. Kelajuan = 14 m / 5 s = 2,8 m/s.",
    waktu: new Date().toLocaleString()
  };
  localStorage.setItem(`remedial_TP 1.1_IKTP0_Dimas Saputra R. Antu`, JSON.stringify(remDimas));
  localStorage.setItem(`remedial_terakhir_Dimas Saputra R. Antu`, JSON.stringify(remDimas));

  // Simulasi Peta Konsep Dimas Saputra (IKTP 1.1.1)
  const petaDimas = {
    siswa: "Dimas Saputra R. Antu", tp: "TP 1.1", iktp: "IKTP 1",
    utama: "Konsep Posisi, Jarak, dan Perpindahan",
    cabang: "• Jarak (Skalar) --panjang lintasan total\n• Perpindahan (Vektor) --selisih posisi awal dan akhir\n• Kelajuan (v = s / t) --terbaca di speedometer",
    kesulitan: "Membedakan perpindahan saat lintasan berbentuk lingkaran berputar.",
    gambar: "",
    waktu: new Date().toLocaleString()
  };
  localStorage.setItem(`peta_TP 1.1_IKTP0_Dimas Saputra R. Antu`, JSON.stringify(petaDimas));
  localStorage.setItem(`peta_terakhir_Dimas Saputra R. Antu`, JSON.stringify(petaDimas));

  // Simulasi Penilaian Diri Adeliani Putri
  localStorage.setItem("eval_diri_Adeliani Putri R. Agu", JSON.stringify({
    siswa: "Adeliani Putri R. Agu", tp: "TP 1.1", iktp: "IKTP 4",
    dipahami: "Saya sudah sangat memahami konsep inersia Hukum I Newton dan mengapa kita wajib menggunakan sabuk pengaman saat naik mobil.",
    belumDipahami: "Perhitungan gaya aksi-reaksi tali yang bergerak miring.",
    rencanaTindakan: "Saya akan mengulang simulasi PhET dan bertanya pada Pak Guru Iskandar.",
    waktu: new Date().toLocaleString()
  }));

  alert("✓ Data simulasi lengkap berhasil dimasukkan!");
  renderTabelGuruPresensi();
  renderTabelGuruJurnal();
  renderTabelGuruLKM();
  renderTabelGuruPeta();
  renderTabelGuruEvalDiri();
  renderTabelGuruEvalTeman();
  renderTabelGuruRemedial();
}
