// =========================================================
// BASIS DATA PEMBELAJARAN FISIKA FASE F KELAS XI (DEEP LEARNING)
// DENGAN IKTP & MATERI RAMAH SISWA SMA (KONTEKSTUAL & JELAS)
// =========================================================
const DATABASE_TP = [
  {
    id: 0,
    kode: "TP 1.1",
    nama: "Gerak dan Gaya",
    judul: "TP 1.1: Hubungan Gerak dan Gaya dalam Kehidupan Sehari-hari (Hukum Newton)",
    cp: "Menganalisis hubungan gerak dan gaya serta penerapannya untuk menjelaskan fenomena dalam kehidupan sehari-hari.",
    iktp: [
      "Menjelaskan sifat kelembaman (inersia) benda dan penerapan Hukum I Newton saat berkendara.",
      "Menganalisis hubungan antara gaya total, massa, dan percepatan (Hukum II Newton: F = m × a) dalam aktivitas sehari-hari.",
      "Mengidentifikasi pasangan gaya aksi-reaksi (Hukum III Newton) serta ciri-cirinya pada berbagai peristiwa gerak.",
      "Menjelaskan pentingnya penerapan konsep Hukum Newton pada fitur keselamatan transportasi (sabuk pengaman dan helm)."
    ],
    materi: `
      <h3>1. Yuk, Kenalan dengan Gaya dan Gerak!</h3>
      <p>Pernahkah kamu memikirkan hal-hal sederhana ini saat beraktivitas?</p>
      <ul>
        <li>Mengapa saat kamu dibonceng sepeda motor dan temanmu tiba-tiba tancap gas mendadak, badanmu otomatis terhentak ke belakang?</li>
        <li>Mengapa mendorong gerobak belanja yang kosong terasa jauh lebih ringan dan cepat bergerak dibanding mendorong gerobak yang penuh muatan beras?</li>
        <li>Mengapa telapak tanganmu terasa sakit saat memukul meja dengan keras, padahal mejanya diam?</li>
      </ul>
      <p>Semua peristiwa di atas bukanlah kebetulan gaib, melainkan contoh nyata dari <strong>Hukum-Hukum Newton tentang Gerak</strong> yang dirumuskan oleh ilmuwan terkenal, Sir Isaac Newton. Ada 3 hukum utama yang wajib kamu pahami.</p>

      <div class="context-box">
        <strong>Kunci Pemahaman:</strong> Gaya adalah tarikan atau dorongan yang dapat menyebabkan benda diam menjadi bergerak, benda bergerak menjadi berhenti, atau mengubah arah dan kecepatan gerak benda.
      </div>

      <h3>2. Hukum I Newton: Hukum Kelembaman (Inersia)</h3>
      <p>Hukum I Newton berbunyi: <em>"Jika tidak ada gaya luar yang bekerja pada suatu benda (atau resultan gayanya sama dengan nol), maka benda yang diam akan tetap diam, dan benda yang sedang bergerak lurus akan terus bergerak dengan kecepatan tetap."</em></p>
      
      <div style="text-align:center; padding: 12px; background:rgba(6,11,20,0.6); border-radius:8px; margin: 12px 0; border: 1px solid rgba(56,189,248,0.3);">
        <span style="font-size:1.3rem; font-weight:700; color:#38bdf8;">Rumus: ∑F = 0</span><br>
        <small style="color:#94a3b8;">(Dibaca: Total penjumlahan seluruh gaya sama dengan nol)</small>
      </div>

      <h4>Apa itu Kelembaman (Inersia)?</h4>
      <p>Kelembaman adalah <strong>sifat "malas" suatu benda untuk mengubah keadaannya</strong>. Benda cenderung mempertahankan kondisinya saat ini:</p>
      <ul>
        <li><strong>Saat mobil direm mendadak:</strong> Badanmu awalnya bergerak maju bersama mobil. Saat mobil berhenti mendadak, tubuhmu "ingin tetap maju", sehingga kamu terlempar ke depan. Inilah alasan utama mengapa kita <strong>wajib memakai sabuk pengaman (seatbelt)</strong> agar tubuh kita tertahan dan tidak menabrak kaca depan mobil.</li>
        <li><strong>Saat motor digas mendadak:</strong> Tubuhmu awalnya diam. Saat motor melesat maju, tubuhmu "ingin tetap diam", sehingga kamu terasa terhentak ke belakang.</li>
      </ul>

      <h3>3. Hukum II Newton: Hubungan Gaya, Massa, dan Percepatan</h3>
      <p>Jika Hukum I membahas saat gaya totalnya nol, Hukum II membahas <strong>bagaimana jika gaya totalnya TIDAK nol</strong>. Benda pasti akan mengalami perubahan kecepatan atau <strong>percepatan</strong>.</p>
      
      <div style="text-align:center; padding: 14px; background:rgba(6,11,20,0.6); border-radius:8px; margin: 12px 0; border: 1px solid rgba(56,189,248,0.3);">
        <span style="font-size:1.4rem; font-weight:700; color:#38bdf8;">F = m × a &nbsp; atau &nbsp; a = F / m</span><br>
        <p style="margin-top:6px; font-size:0.88rem; color:#cbd5e1;">
          <strong>F</strong> = Gaya total yang mendorong/menarik (satuan: Newton atau N)<br>
          <strong>m</strong> = Massa benda (satuan: kilogram atau kg)<br>
          <strong>a</strong> = Percepatan atau laju penambahan kecepatan (satuan: m/s²)
        </p>
      </div>

      <h4>Dua Aturan Emas Hukum II Newton:</h4>
      <ol>
        <li><strong>Semakin besar gaya (F), semakin cepat benda melaju (a bertambah besar):</strong> Menendang bola dengan tenaga kuat membuat bola melesat jauh lebih kencang dibanding menendang pelan.</li>
        <li><strong>Semakin berat massa benda (m), semakin lambat percepatannya (a mengecil):</strong> Jika kamu mendorong sepeda motor mogok sendirian, jalannya lambat. Tapi jika didorong bersama 3 orang temanmu (gaya F bertambah besar), motor akan bergerak lebih cepat. Menendang bola sepak jauh lebih mudah daripada menendang batu besar bermassa 50 kg dengan gaya yang sama!</li>
      </ol>

      <h3>4. Hukum III Newton: Hukum Aksi - Reaksi</h3>
      <p>Hukum III Newton berbunyi: <em>"Ketika suatu benda memberikan gaya pada benda kedua (gaya aksi), maka benda kedua tersebut akan memberikan gaya yang sama besar namun berlawanan arah kepada benda pertama (gaya reaksi)."</em></p>

      <div style="text-align:center; padding: 12px; background:rgba(6,11,20,0.6); border-radius:8px; margin: 12px 0; border: 1px solid rgba(56,189,248,0.3);">
        <span style="font-size:1.3rem; font-weight:700; color:#38bdf8;">F_aksi = - F_reaksi</span><br>
        <small style="color:#94a3b8;">(Tanda minus artinya arah gayanya berlawanan arah)</small>
      </div>

      <h4>Contoh Seru Hukum Aksi-Reaksi di Sekitar Kita:</h4>
      <ul>
        <li><strong>Saat Mendayung Sampan/Perahu:</strong> Dayung mendorong air ke belakang (Aksi), dan air mendorong perahu bergerak maju ke depan (Reaksi).</li>
        <li><strong>Saat Kamu Berjalan Kaki:</strong> Kakimu menjejak dan mendorong lantai tanah ke arah belakang (Aksi), dan lantai tanah mendorong sepatumu melangkah ke depan (Reaksi). Jika lantainya sangat licin (tanpa gesekan), kamu tidak bisa berjalan karena tidak ada gaya reaksi dorong balik!</li>
        <li><strong>Berenang di Kolam:</strong> Tanganmu mengayuh mendorong air ke belakang, air mendorong tubuhmu meluncur ke depan.</li>
      </ul>

      <div class="deep-summary-box">
        <strong>💡 Ciri Mutlak Pasangan Aksi - Reaksi:</strong><br>
        1. Besarnya selalu sama.<br>
        2. Arahnya selalu bertolak belakang.<br>
        3. <em>Bekerja pada 2 benda yang berbeda</em> (Dayung mendorong air, air mendorong perahu). Karena bekerja pada benda berbeda, gaya aksi-reaksi tidak saling meniadakan!
      </div>

      <h3>5. Tabel Rangkuman Sederhana Hukum Newton</h3>
      <table class="article-table">
        <thead>
          <tr>
            <th>Hukum</th>
            <th>Rumus Singkat</th>
            <th>Inti Maknanya</th>
            <th>Contoh Paling Mudah</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Hukum I</strong></td>
            <td>∑F = 0</td>
            <td>Benda punya sifat kelembaman (mempertahankan posisinya).</td>
            <td>Tubuh terdorong ke depan saat mobil direm mendadak.</td>
          </tr>
          <tr>
            <td><strong>Hukum II</strong></td>
            <td>F = m × a</td>
            <td>Gaya memicu percepatan; massa yang berat menghambat laju.</td>
            <td>Mendorong motor sendirian vs mendorong beramai-ramai.</td>
          </tr>
          <tr>
            <td><strong>Hukum III</strong></td>
            <td>F_aksi = -F_reaksi</td>
            <td>Setiap ada dorongan, selalu ada dorongan balik yang berlawanan.</td>
            <td>Mendayung air ke belakang membuat perahu maju ke depan.</td>
          </tr>
        </tbody>
      </table>

      <div class="misconception-box">
        <strong>⚠️ Jangan Salah Paham Lagi:</strong><br>
        Banyak murid mengira benda yang sedang diam itu sama sekali "tidak memiliki gaya". Itu salah! Benda diam (misalnya buku di atas mejau) tetap ditarik oleh gaya berat gravitasi bumi ke bawah, tetapi ditahan oleh gaya normal meja ke atas. Karena gayanya seimbang (∑F = 0), maka buku tersebut tetap diam tenang di meja.
      </div>
    `,
    videoEmbed: "https://www.youtube-nocookie.com/embed/j-zczJXSxnw",
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
      <p>Fluida adalah istilah fisika untuk <strong>zat yang bisa mengalir</strong>, yaitu zat cair (air, minyak, sirup) dan gas (udara). Dalam kehidupan sehari-hari, fluida memiliki sifat-sifat luar biasa yang sering kita manfaatkan.</p>

      <h3>2. Tekanan Hidrostatik (Makin Dalam, Makin Tertekan!)</h3>
      <p>Pernahkah telingamu terasa agak sakit atau berdenging saat menyelam ke dasar kolam renang yang dalam? Hal itu terjadi karena adanya <strong>Tekanan Hidrostatik</strong>.</p>
      
      <div style="text-align:center; padding: 12px; background:rgba(6,11,20,0.6); border-radius:8px; margin: 12px 0; border: 1px solid rgba(56,189,248,0.3);">
        <span style="font-size:1.3rem; font-weight:700; color:#38bdf8;">Rumus: P = ρ × g × h</span><br>
        <p style="margin-top:6px; font-size:0.86rem; color:#cbd5e1;">
          <strong>P</strong> = Tekanan hidrostatik (Pascal atau N/m²)<br>
          <strong>ρ</strong> (rho) = Massa jenis zat cair (kg/m³)<br>
          <strong>g</strong> = Percepatan gravitasi bumi (sekitar 9,8 atau 10 m/s²)<br>
          <strong>h</strong> = Kedalaman air diukur dari permukaan (meter)
        </p>
      </div>

      <p><strong>Intinya sederhana:</strong> Semakin dalam posisi kamu menyelam (h makin besar), semakin banyak tumpukan air di atas tubuhmu yang menekan ke bawah. Inilah sebabnya mengapa dinding dasar bendungan waduk selalu dibuat sangat tebal di bagian bawah agar tidak jebol menahan tekanan air dasar waduk.</p>

      <h3>3. Hukum Pascal: Trik Mengangkat Mobil dengan Tenaga Kecil</h3>
      <p>Di tempat cuci mobil, kamu pasti pernah melihat mobil seberat 2 ton bisa terangkat tinggi ke atas hanya dengan dongkrak hidrolik. Rahasianya adalah <strong>Hukum Pascal</strong>: <em>Tekanan yang diberikan pada cairan di ruang tertutup akan diteruskan sama besar ke seluruh bagian cairan tersebut.</em></p>

      <div style="text-align:center; padding: 12px; background:rgba(6,11,20,0.6); border-radius:8px; margin: 12px 0; border: 1px solid rgba(56,189,248,0.3);">
        <span style="font-size:1.3rem; font-weight:700; color:#38bdf8;">Rumus: F₁ / A₁ = F₂ / A₂</span><br>
        <small style="color:#94a3b8;">F = Gaya tekan (Newton), A = Luas penampang pipa (m²)</small>
      </div>
      <p>Dengan menekan pipa sempit yang kecil (A₁), cairan minyak meneruskan tekanan tersebut ke pipa luas yang besar (A₂). Hasilnya, gaya dorong di pipa besar (F₂) berlipat ganda ratusan kali lipat hingga mampu mengangkat mobil dengan sangat mudah!</p>

      <h3>4. Hukum Archimedes: Terapung, Melayang, atau Tenggelam?</h3>
      <p>Mengapa batu kecil langsung tenggelam, tetapi kapal pesiar raksasa yang terbuat dari baja puluhan ribu ton bisa mengapung di lautan?</p>
      <p>Menurut Hukum Archimedes: <em>Benda yang dicelupkan ke dalam air akan mendapat gaya dorong ke atas (Gaya Apung) sebesar berat air yang dipindahkan oleh benda tersebut.</em></p>
      <ul>
        <li><strong>Terapung:</strong> Jika massa jenis rata-rata benda lebih kecil dari air. Kapal baja terapung karena di bagian dalam lambung kapal terdapat rongga udara yang sangat luas, sehingga massa jenis total kapal menjadi lebih ringan dari air laut.</li>
        <li><strong>Melayang:</strong> Jika massa jenis benda sama persis dengan air (seperti kapal selam yang mengisi tangki pemberatnya dengan air separuh).</li>
        <li><strong>Tenggelam:</strong> Jika massa jenis benda lebih berat dari air (seperti batu atau paku).</li>
      </ul>

      <h3>5. Asas Bernoulli: Mengapa Pesawat Terbang Bisa Melayang?</h3>
      <p>Asas Bernoulli menyatakan: <strong>Di mana aliran udara mengalir lebih kencang, di situ tekanannya justru menjadi lebih rendah.</strong></p>
      <p>Sayap pesawat terbang dirancang melengkung di bagian atas dan datar di bagian bawah. Udara yang mengalir di atas sayap meluncur lebih cepat dibanding udara di bawah sayap. Akibatnya, tekanan udara di atas sayap turun, dan tekanan udara tinggi di bawah sayap mendorong pesawat terangkat naik ke angkasa!</p>
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
      <h3>1. Apa Beda Suhu dan Kalor?</h3>
      <p>Sering kali kita menyamakan suhu dan kalor, padahal keduanya berbeda:</p>
      <ul>
        <li><strong>Suhu:</strong> Derajat panas atau dinginnya suatu benda yang diukur dengan termometer (satuan: °C atau Kelvin).</li>
        <li><strong>Kalor:</strong> Bentuk <em>energi panas</em> yang berpindah dari benda bersuhu tinggi ke benda yang bersuhu lebih rendah (satuan: Joule atau Kalori).</li>
      </ul>

      <h3>2. Tiga Cara Kalor Berpindah di Sekitar Kita</h3>
      <ol>
        <li><strong>Konduksi (Lewat Rambatan Zat Padat):</strong> Ujung sendok logam akan terasa panas saat ujung lainnya dimasukkan ke dalam gelas air teh panas. Panas merambat lewat benturan atom logam tanpa zat perantaranya berpindah.</li>
        <li><strong>Konveksi (Lewat Aliran Cairan atau Gas):</strong> Saat kamu memasak air, air di bagian bawah yang panas akan naik ke atas, dan air dingin turun ke bawah menciptakan sirkulasi aliran. Terjadinya angin darat dan angin laut juga karena konveksi udara!</li>
        <li><strong>Radiasi (Pancaran Tanpa Perantara):</strong> Hangatnya sinar matahari yang sampai ke kulit kita melintasi jutaan kilometer ruang angkasa yang hampa udara.</li>
      </ol>

      <h3>3. Hukum Termodinamika: Energi Panas Menjadi Gerak</h3>
      <p>Termodinamika adalah ilmu fisika yang mempelajari bagaimana <strong>panas (kalor) dapat diubah menjadi kerja gerak (usaha)</strong>.</p>
      
      <h4>A. Hukum I Termodinamika (Energi itu Kekal):</h4>
      <div style="text-align:center; padding: 12px; background:rgba(6,11,20,0.6); border-radius:8px; margin: 12px 0; border: 1px solid rgba(56,189,248,0.3);">
        <span style="font-size:1.3rem; font-weight:700; color:#38bdf8;">Rumus: ΔU = Q - W</span><br>
        <p style="margin-top:6px; font-size:0.86rem; color:#cbd5e1;">
          <strong>ΔU</strong> = Perubahan energi dalam gas (berhubungan dengan perubahan suhu gas)<br>
          <strong>Q</strong> = Kalor yang diserap atau dilepas gas<br>
          <strong>W</strong> = Usaha/kerja gerak yang dilakukan gas (misal mendorong piston mesin)
        </p>
      </div>

      <h4>B. Hukum II Termodinamika (Arah Aliran Panas):</h4>
      <p>Panas secara alami hanya akan mengalir dari <strong>benda bersuhu tinggi ke benda bersuhu rendah</strong>. Kalor tidak bisa mengalir spontan ke arah sebaliknya tanpa bantuan mesin luar (contohnya kulkas butuh aliran listrik agar bisa memompa panas keluar dari ruangan dingin kulkas).</p>

      <h3>4. Mengapa Terjadi Pemanasan Global (Global Warming)?</h3>
      <p>Bumi kita menerima radiasi panas cahaya matahari setiap hari. Sebagian panas ini diserap tanah dan lautan, lalu dipantulkan kembali ke luar angkasa dalam bentuk radiasi inframerah.</p>
      <p>Namun, asap kendaraan bermotor, pabrik industri, dan kebakaran hutan melepaskan gas-gas seperti <strong>Karbon Dioksida (CO₂) dan Metana (CH₄)</strong> secara berlebihan ke udara. Gas-gas ini bertindak seperti kaca tebal di langit: <em>mereka membiarkan panas matahari masuk, tetapi menjebak dan menahan panas pantulan keluar</em>. Akibatnya, suhu rata-rata permukaan bumi terus meningkat, mencairkan es kutub dan memicu cuaca ekstrem yang sulit diprediksi.</p>
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
      <h3>1. Apa itu Gelombang?</h3>
      <p>Coba kamu lemparkan kerikil ke atas air kolam yang tenang. Kamu akan melihat lingkaran riak gelombang merambat menjauhi titik jatuhnya kerikil. Uniknya, sehelai daun kering yang mengapung di atas air hanya bergerak <strong>naik dan turun di tempat</strong>, tidak ikut tersapu hanyut bersama gelombang!</p>
      
      <div class="context-box">
        <strong>Intisari Nalar Gelombang:</strong> Gelombang adalah <strong>getaran yang merambat dan memindahkan energi dari satu tempat ke tempat lain tanpa memindahkan zat perantaranya secara permanen</strong>.
      </div>

      <h3>2. Dua Jenis Gelombang Berdasarkan Arah Getarnya</h3>
      <ol>
        <li><strong>Gelombang Transversal (Arah getar tegak lurus arah rambat):</strong> Bentuknya memiliki <em>bukit dan lembah</em>. Contohnya: gelombang pada tali yang digerakkan naik-turun, gelombang air, dan gelombang cahaya.</li>
        <li><strong>Gelombang Longitudinal (Arah getar searah arah rambat):</strong> Bentuknya memiliki <em>rapatan dan renggangan</em>. Contoh paling nyata adalah <strong>gelombang bunyi</strong> yang kita dengar setiap hari dan gelombang pegas (slinki).</li>
      </ol>

      <h3>3. Rumus Sakti Cepat Rambat Gelombang</h3>
      <p>Semua gelombang yang merambat terikat pada satu rumus sederhana yang sangat mudah dihafal:</p>
      
      <div style="text-align:center; padding: 12px; background:rgba(6,11,20,0.6); border-radius:8px; margin: 12px 0; border: 1px solid rgba(56,189,248,0.3);">
        <span style="font-size:1.4rem; font-weight:700; color:#38bdf8;">v = λ × f</span><br>
        <p style="margin-top:6px; font-size:0.86rem; color:#cbd5e1;">
          <strong>v</strong> = Cepat rambat gelombang (satuan: meter per detik atau m/s)<br>
          <strong>λ</strong> (lambda) = Panjang satu gelombang penuh (satuan: meter atau m)<br>
          <strong>f</strong> = Frekuensi atau banyaknya getaran tiap detik (satuan: Hertz atau Hz)
        </p>
      </div>

      <h3>4. Sifat-Sifat Keren Gelombang</h3>
      <ul>
        <li><strong>Refleksi (Pemantulan):</strong> Gelombang memantul saat menabrak dinding batas keras. Contohnya suara gemamu yang terdengar kembali saat berteriak di dalam gua atau di dekat tebing bukit.</li>
        <li><strong>Refraksi (Pembiasan):</strong> Gelombang berbelok saat memasuki medium yang berbeda kerapatannya. Contohnya tongkat yang tampak patah atau bengkok saat dimasukkan ke dalam baskom air jernih.</li>
        <li><strong>Interferensi (Perpaduan Dua Gelombang):</strong> Jika puncak bertemu puncak, suaranya menjadi semakin keras (saling menguatkan). Jika puncak bertemu lembah, suaranya saling meniadakan (dipakai pada teknologi earphone peredam bising canggih / *Noise Cancelling*).</li>
      </ul>

      <h3>5. Efek Doppler: Misteri Suara Sirine Ambulans</h3>
      <p>Pernahkah kamu berada di pinggir jalan raya saat mobil ambulans lewat? Saat ambulans melaju mendekatimu, nada sirinenya terdengar <strong>melengking tinggi</strong>. Begitu ambulans tepat lewat dan menjauhimu, nadanya mendadak berubah menjadi <strong>lebih rendah dan berat</strong>.</p>
      <p>Fenomena ini disebut <strong>Efek Doppler</strong>. Saat mobil ambulans bergerak mendekati telingamu, gelombang bunyi di depan mobil terdesak memadat (panjang gelombangnya memendek), sehingga frekuensi bunyi yang tertangkap oleh telingamu menjadi lebih rapat dan terdengar melengking tinggi.</p>
    `,
    videoEmbed: "https://www.youtube-nocookie.com/embed/edeb3pZ-mhk",
    game: {
      judul: "Misi 4: Mengukur Kedalaman Laut dengan Sonar",
      deskripsi: "Sebuah kapal nelayan menembakkan pulsa gelombang bunyi sonar ke dasar laut dengan cepat rambat 1.500 m/s di air laut. Bunyi pantulan gema dari dasar laut diterima kembali oleh kapal setelah 2 detik. Berapakah kedalaman laut tersebut?",
      opsi: [
        { teks: "A. 1.500 meter di bawah permukaan laut.", benar: true, alasan: "Hebat dan Sangat Tepat! Waktu 2 detik adalah waktu bolak-balik (pergi menabrak dasar lalu memantul kembali). Waktu satu arah adalah 1 detik. Kedalaman = Cepat rambat × waktu = 1.500 m/s × 1 s = 1.500 meter." },
        { teks: "B. 3.000 meter di bawah permukaan laut.", benar: false, alasan: "Salah. Ingat bahwa waktu 2 detik adalah waktu tempuh bolak-balik bunyi, sehingga harus dibagi dua." },
        { teks: "C. 750 meter di bawah permukaan laut.", benar: false, alasan: "Salah dalam pembagian nilai cepat rambat." }
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
    defaultLinkUjian: "https://forms.gle/"
  }
];

// ARSIP MODUL AJAR / RPP
const DATABASE_MODUL_AJAR = [
  {
    tp: "TP 1.1",
    nama: "Modul Ajar: Gerak dan Gaya (Hukum-Hukum Newton)",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Bernalar Kritis, Mandiri, Bergotong Royong",
    deskripsi: "Pembelajaran mendalam untuk mengidentifikasi Hukum I, II, dan III Newton serta penerapannya pada fenomena gerak sehari-hari dan keselamatan berkendara.",
    sintaks: "1. Orientasi fenomena berkendara motor & mobil • 2. Investigasi PhET Forces and Motion Basics • 3. Misi analisis sabuk pengaman • 4. Refleksi metakognitif.",
    driveLink: "https://drive.google.com/"
  },
  {
    tp: "TP 2.1",
    nama: "Modul Ajar: Mekanika Fluida & Penerapannya",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Kreatif, Mandiri, Bernalar Kritis",
    deskripsi: "Penyelidikan tekanan hidrostatik, hukum Pascal pada dongkrak, hukum Archimedes pada kapal, dan asas Bernoulli pada sayap pesawat.",
    sintaks: "1. Studi fenomena kapal baja terapung • 2. Eksperimen sensor tekanan PhET Under Pressure • 3. Game misi penyelaman kapal selam • 4. Evaluasi & peer assessment.",
    driveLink: "https://drive.google.com/"
  },
  {
    tp: "TP 3.1",
    nama: "Modul Ajar: Kalor, Termodinamika & Pemanasan Global",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Beriman & Berakhlak Mulia (Peduli Lingkungan), Bernalar Kritis",
    deskripsi: "Menganalisis konsep perpindahan kalor, hukum termodinamika pada gas, dan dampaknya terhadap perubahan iklim global.",
    sintaks: "1. Analisis fenomena panas matahari & suhu bumi • 2. Simulasi radiasi PhET Greenhouse Effect • 3. Diskusi mitigasi emisi gas rumah kaca • 4. Penilaian diri mandiri.",
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
    document.getElementById("presensi-nama-display").value = name;
    document.getElementById("view-murid").style.display = "block";
    document.getElementById("view-guru").style.display = "none";

    pilihTP(0);
    pilihTPFormatif(0);
    pilihTPPeta(0);
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

// =========================================================
// NAVIGASI 6 MENU UTAMA MURID
// =========================================================
function pindahMenuMurid(menu) {
  const menus = ['materi', 'formatif', 'sumatif', 'peta', 'penilaian', 'presensi'];
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
      <td style="color:var(--cyan-neon); font-weight:600;">${r.tanggal}</td>
      <td><span class="status-badge ${badgeClass}">${r.status}</span></td>
      <td>${r.keterangan || '-'}</td>
      <td style="opacity:0.8;">${r.waktu}</td>
    `;
    tbody.appendChild(tr);
  });
}

// =========================================================
// PANEL GURU (7 SUB-TAB)
// =========================================================
function pindahTabGuru(tab) {
  const tabs = ['kehadiran', 'jurnal', 'modul', 'lkm', 'peta', 'eval', 'links'];
  tabs.forEach(t => {
    const btn = document.getElementById(`tab-guru-${t}`);
    const panel = document.getElementById(`panel-guru-${t}`);
    if (btn) btn.classList.toggle("active", t === tab);
    if (panel) panel.style.display = (t === tab) ? "block" : "none";
  });

  if (tab === 'kehadiran') renderTabelGuruPresensi();
  if (tab === 'jurnal') renderTabelGuruJurnal();
  if (tab === 'modul') renderModulAjarCards();
  if (tab === 'lkm') renderTabelGuruLKM();
  if (tab === 'peta') renderTabelGuruPeta();
  if (tab === 'eval') {
    renderTabelGuruEvalDiri();
    renderTabelGuruEvalTeman();
  }
}

function renderTabelGuruPresensi() {
  const tbody = document.getElementById("tabel-guru-presensi-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  const tanggalFilter = document.getElementById("guru-presensi-tanggal").value || new Date().toISOString().slice(0, 10);
  const listPresensi = JSON.parse(localStorage.getItem("lms_presensi_records") || "[]");

  let countHadir = 0;
  let countIzin = 0;
  let countSakit = 0;
  let countAlpa = 0;

  DAFTAR_SISWA.forEach(s => {
    const tr = document.createElement("tr");
    const kodeG = s.gender === "Laki-laki" ? "L" : "P";
    const record = listPresensi.find(p => p.siswa === s.nama && p.tanggal === tanggalFilter);

    let statusHTML = "";
    let ketHTML = "-";
    let waktuHTML = "-";

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
      <td style="color:var(--cyan-neon); font-weight:700;">${s.no}</td>
      <td style="font-weight:600;">${s.nama}</td>
      <td><span style="opacity:0.75;">${kodeG}</span></td>
      <td>${statusHTML}</td>
      <td style="font-size:0.84rem; max-width:200px; overflow:hidden; text-overflow:ellipsis;">${ketHTML}</td>
      <td style="font-size:0.82rem; opacity:0.8;">${waktuHTML}</td>
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

function simpanJurnalGuru(e) {
  e.preventDefault();
  const tanggal = document.getElementById("jurnal-tanggal").value;
  const jam = document.getElementById("jurnal-jam").value.trim();
  const tp = document.getElementById("jurnal-tp").value;
  const aktivitas = document.getElementById("jurnal-aktivitas").value.trim();
  const catatan = document.getElementById("jurnal-catatan").value.trim();

  const listJurnal = JSON.parse(localStorage.getItem("lms_jurnal_guru") || "[]");
  const newJurnal = {
    id: Date.now(),
    tanggal, jam, tp, aktivitas, catatan,
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
      <td style="color:var(--cyan-neon); font-weight:700; white-space:nowrap;">${j.tanggal}</td>
      <td style="white-space:nowrap;">${j.jam}</td>
      <td><span class="status-badge badge-done">${j.tp}</span></td>
      <td style="max-width:260px; font-size:0.85rem; line-height:1.5;">${j.aktivitas}</td>
      <td style="max-width:240px; font-size:0.85rem; color:#fcd34d;">${j.catatan}</td>
      <td style="white-space:nowrap;">
        <button class="btn-action-view" onclick="bukaModalDetailJurnal(${j.id})">Tinjau</button>
        <button class="btn-action-view" style="border-color:#f43f5e; color:#fda4af; margin-left:4px;" onclick="hapusJurnal(${j.id})">Hapus</button>
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
    <div style="margin-bottom:14px; background:rgba(6,11,20,0.6); padding:12px; border-radius:6px; border:1px solid var(--card-border);">
      <strong style="color:var(--cyan-neon);">Aktivitas Pembelajaran Mendalam (Deep Learning):</strong>
      <p style="margin-top:6px; color:#f8fafc; white-space:pre-wrap;">${j.aktivitas}</p>
    </div>
    <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.4); padding:12px; border-radius:6px;">
      <strong style="color:#fbbf24;">Refleksi Guru & Catatan Siswa:</strong>
      <p style="margin-top:6px; color:#fef3c7; white-space:pre-wrap;">${j.catatan}</p>
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
        <div style="font-size:0.82rem; color:var(--cyan-neon); margin:6px 0;">Alokasi: ${m.alokasi}</div>
        <p style="font-size:0.86rem; color:var(--text-muted); line-height:1.5; margin-bottom:10px;">${m.deskripsi}</p>
        <div style="font-size:0.78rem; color:#a7f3d0;"><strong>Profil Pancasila:</strong> ${m.profil}</div>
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
    <div style="margin-bottom:12px; background:rgba(6,11,20,0.6); padding:12px; border-radius:6px; border:1px solid var(--card-border);">
      <strong style="color:var(--cyan-neon);">Dimensi Profil Pelajar Pancasila:</strong>
      <p style="margin-top:4px;">${m.profil}</p>
    </div>
    <div style="margin-bottom:12px; background:rgba(6,11,20,0.6); padding:12px; border-radius:6px; border:1px solid var(--card-border);">
      <strong style="color:var(--cyan-neon);">Deskripsi & Pemahaman Bermakna:</strong>
      <p style="margin-top:4px;">${m.deskripsi}</p>
    </div>
    <div style="margin-bottom:14px; background:rgba(14,165,233,0.1); padding:12px; border-radius:6px; border:1px solid rgba(56,189,248,0.3);">
      <strong style="color:#38bdf8;">Alur Sintaks Pembelajaran Mendalam (Deep Learning):</strong>
      <p style="margin-top:6px; white-space:pre-wrap;">${m.sintaks}</p>
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

function renderTabelGuruPeta() {
  const tbody = document.getElementById("tabel-peta-body");
  if (!tbody) return;
  tbody.innerHTML = "";

  DAFTAR_SISWA.forEach(s => {
    let found = null;
    let foundTP = "";
    for (let tp of ['TP 1.1', 'TP 2.1', 'TP 3.1', 'TP 4.1']) {
      const dataStr = localStorage.getItem(`peta_${tp}_${s.nama}`);
      if (dataStr) {
        found = JSON.parse(dataStr);
        foundTP = tp;
        break;
      }
    }

    const tr = document.createElement("tr");
    if (found) {
      const lampiranHTML = found.gambar ? `<span class="status-badge badge-done">Ada Gambar</span>` : `<span style="opacity:0.6;">Teks Saja</span>`;
      tr.innerHTML = `
        <td style="color:var(--cyan-neon); font-weight:700;">${s.no}</td>
        <td style="font-weight:600;">${s.nama}</td>
        <td><span class="status-badge badge-done">${foundTP}</span></td>
        <td>${found.utama || '-'}</td>
        <td style="color:#fcd34d; font-weight:600;">${found.kesulitan ? '⚠️ ' + found.kesulitan : '-'}</td>
        <td>${lampiranHTML}</td>
        <td><button class="btn-action-view" onclick="bukaModalDetailPeta('${foundTP}', '${s.nama}')">Tinjau</button></td>
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
        <strong style="color:var(--cyan-neon); display:block; margin-bottom:8px;">Foto/Sketsa Peta Konsep Siswa:</strong>
        <img src="${d.gambar}" style="max-width:100%; max-height:280px; border-radius:8px; border:1px solid var(--card-border);" alt="Peta Konsep">
      </div>
    `;
  }

  document.getElementById("modal-detail-body").innerHTML = `
    <div style="margin-bottom:12px; background:rgba(6,11,20,0.6); padding:12px; border-radius:6px; border:1px solid var(--card-border);">
      <strong style="color:var(--cyan-neon);">Cabang & Hubungan Relasi Konseptual:</strong>
      <pre style="white-space:pre-wrap; font-family:'Plus Jakarta Sans'; color:#f8fafc; margin-top:6px;">${d.cabang || '-'}</pre>
    </div>
    <div style="background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.4); padding:12px; border-radius:6px;">
      <strong style="color:#fbbf24;">Materi yang Masih Sulit (Perhatian Guru):</strong>
      <p style="margin-top:4px; color:#fef3c7;">${d.kesulitan || 'Tidak ada kendala yang dilaporkan.'}</p>
    </div>
    ${gambarHTML}
  `;
  document.getElementById("modal-guru-detail").style.display = "flex";
}

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

function filterTabel(tbodyId, keyword) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;
  const rows = tbody.getElementsByTagName("tr");
  const cleanKey = keyword.toLowerCase();

  for (let row of rows) {
    row.style.display = row.textContent.toLowerCase().includes(cleanKey) ? "" : "none";
  }
}

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
      let found = null;
      let foundTP = "";
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
      aktivitas: "Orientasi fenomena inersia saat naik motor mendadak direm. Siswa mengeksplorasi simulator PhET Forces and Motion Basics secara mandiri untuk membuktikan F = m x a.",
      catatan: "Siswa sangat antusias saat simulasi gerak dan gaya. Analisis Hukum I dan II Newton sudah dikuasai dengan baik oleh mayoritas siswa.",
      waktuInput: new Date().toLocaleString()
    }
  ];
  localStorage.setItem("lms_jurnal_guru", JSON.stringify(mockJurnal));

  alert("✓ Data simulasi (Presensi hari ini & Jurnal Mengajar) berhasil disuntikkan!");
  renderTabelGuruPresensi();
  renderTabelGuruJurnal();
}

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
