// =========================================================
// BASIS DATA PEMBELAJARAN FISIKA FASE F KELAS XI (DEEP LEARNING)
// DENGAN INDIKATOR KETERCAPAIAN TUJUAN PEMBELAJARAN (IKTP)
// =========================================================
const DATABASE_TP = [
  {
    id: 0,
    kode: "TP 1.1",
    nama: "Gerak dan Gaya",
    judul: "TP 1.1: Hubungan Gerak dan Gaya serta Rekayasa Struktur",
    cp: "Menganalisis hubungan gerak dan gaya serta pemanfaatannya untuk menjelaskan fenomena alam, desain, atau rekayasa struktur.",
    iktp: [
      "Mengidentifikasi pengaruh resultan gaya terhadap karakteristik gerak benda berdasarkan Hukum I, II, dan III Newton.",
      "Menganalisis diagram gaya bebas (Free Body Diagram) pada struktur jembatan gantung dan gedung bertingkat tahan beban dinamis.",
      "Mengevaluasi pemanfaatan gaya normal, gaya sentripetal, dan gaya gesek pada rekayasa jalan menikung miring (banked turn) serta sistem keselamatan transportasi.",
      "Merumuskan rekomendasi pemecahan masalah rekayasa struktur untuk mencegah kegagalan konstruksi akibat osilasi resonansi dan beban kritis."
    ],
    materi: `
      <h3>1. Orientasi Fenomena: Ketahanan Struktur terhadap Dinamika Beban Riil</h3>
      <p>Pernahkah kamu memperhatikan bagaimana sebuah jembatan gantung raksasa seperti Jembatan Suramadu atau Jembatan Golden Gate mampu menahan ribuan ton beban kendaraan yang melaju serentak di atasnya, sekaligus menahan tiupan angin badai horizontal dari arah samping? Di sisi lain, pada tanggal 7 November 1940, Jembatan Tacoma Narrows di Amerika Serikat runtuh terpelintir hanya karena hembusan angin berkecepatan 68 km/jam. Mengapa satu struktur dapat berdiri kokoh selama berabad-abad sementara struktur lain roboh dalam hitungan jam?</p>
      
      <div class="context-box">
        <strong>Intisari Nalar Fisis:</strong> Perbedaan fundamentalnya terletak pada bagaimana para insinyur memperhitungkan interaksi antara <strong>gaya statis</strong> (berat sendiri struktur dan muatan diam) dengan <strong>gaya dinamis</strong> (angin, percepatan kendaraan, dan gempa bumi). Kehancuran jembatan terjadi bukan semata karena tiupan angin yang kuat, melainkan karena frekuensi pusaran angin cocok dengan frekuensi alami jembatan, memicu fenomena <em>flutter aeroelastis</em> (osilasi resonansi) yang melipatgandakan gaya internal melampaui batas elastisitas baja penyangga.
      </div>

      <h3>2. Konstruksi Konsep Mendalam: Hukum Newton pada Rekayasa Struktur</h3>
      <p>Dalam mekanika teknik bangunan, seluruh prinsip bertumpu pada perpaduan ketiga Hukum Newton yang ditransformasikan ke dalam diagram gaya bebas (<em>Free Body Diagram</em>):</p>
      
      <h4>A. Keseimbangan Statis (Aplikasi Hukum I Newton: $\\Sigma F = 0$ dan $\\Sigma \\tau = 0$)</h4>
      <p>Agar jembatan atau gedung pencakar langit tidak bergeser maupun roboh berputar, resultan gaya translasi dan resultan momen gaya (torsi) di setiap titik simpul sambungan harus tepat bernilai nol:</p>
      <ul>
        <li><strong>Keseimbangan Horizontal:</strong> $\\Sigma F_x = 0$ (Gaya dorong angin harus dinetralisir oleh gaya tumpuan pondasi tanah).</li>
        <li><strong>Keseimbangan Vertikal:</strong> $\\Sigma F_y = 0$ (Total gaya berat jembatan dan muatan $W$ diimbangi oleh komponen vertikal tegangan kabel baja $T_y$).</li>
        <li><strong>Keseimbangan Rotasi:</strong> $\\Sigma \\tau = 0$ (Momen putar beban tidak boleh memicu puntiran pada gelagar lantai).</li>
      </ul>

      <h4>B. Respons Struktur terhadap Beban Dinamis (Hukum II Newton: $\\Sigma F = m \\cdot a$)</h4>
      <p>Ketika gempa bumi mengguncang tanah dengan percepatan $a$, tanah bergerak mendadak, namun puncak gedung cenderung mempertahankan posisi diamnya karena sifat kelembaman massa inersia ($m$). Hal ini menciptakan gaya geser inersia horizontal sebesar $F_{inersia} = m \\cdot a$ yang bekerja pada kolom-kolom penyangga lantai bawah. Semakin besar massa bangunan di lantai atas, semakin masif gaya geser penghancur yang diterimanya.</p>

      <h4>C. Aksi-Reaksi Penopang (Hukum III Newton: $F_{aksi} = -F_{reaksi}$)</h4>
      <p>Kabel baja penopang jembatan menarik tiang pilon ke arah bawah dan dalam, sementara tiang pilon memberikan gaya dorong penahan yang sama besar ke kabel. Gaya angkur tanah menahan gaya tarik kabel utama melalui blok beton pondasi berbobot ratusan ton.</p>

      <table class="article-table">
        <thead>
          <tr>
            <th>Besaran Fisis Rekayasa</th>
            <th>Simbol & Satuan SI</th>
            <th>Makna Fisis pada Struktur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tegangan Tarik Kabel ($T$)</td>
            <td>Newton (N)</td>
            <td>Gaya regang internal yang ditanggung serat kawat baja penopang.</td>
          </tr>
          <tr>
            <td>Gaya Normal Tumpuan ($N$)</td>
            <td>Newton (N)</td>
            <td>Gaya reaksi tegak lurus pondasi tanah menahan bobot bangunan.</td>
          </tr>
          <tr>
            <td>Percepatan Dinamis ($a$)</td>
            <td>m/s²</td>
            <td>Laju perubahan kecepatan tanah akibat getaran gelombang gempa.</td>
          </tr>
          <tr>
            <td>Momen Torsi ($\tau$)</td>
            <td>N·m</td>
            <td>Kecenderungan gaya beban untuk memuntir atau membengkokkan balok.</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Studi Rekayasa Kontekstual: Desain Tikungan Jalan Miring (Banked Road)</h3>
      <p>Mengapa tikungan sirkuit balap atau jalan tol layang selalu dibangun miring dengan sudut $\\theta$ ke arah dalam? Jika jalan dibuat datar, mobil yang berbelok dengan radius lintasan $R$ pada kecepatan tinggi $v$ hanya mengandalkan gaya gesek ban ($f_s = \\mu_s \\cdot N$) untuk menyediakan gaya sentripetal ($F_s = \\frac{m v^2}{R}$). Saat hujan dan jalan licin ($\mu_s$ anjlok), mobil rentan slip dan terpental keluar jalur.</p>
      <p>Dengan memiringkan jalan sebesar sudut $\\theta$, gaya normal ($N$) tidak lagi tegak lurus ke atas, melainkan terurai menjadi dua komponen:</p>
      <ul>
        <li>Komponen Vertikal: $N \\cos \\theta = m \\cdot g$ (mengimbangi berat mobil).</li>
        <li>Komponen Horizontal: $N \\sin \\theta = \\frac{m v^2}{R}$ (menyediakan gaya sentripetal pembelok tanpa butuh gesekan ban).</li>
      </ul>
      <p>Kecepatan aman ideal pada tikungan miring tanpa gesekan dirumuskan: <strong>$v = \\sqrt{R \\cdot g \\cdot \\tan \\theta}$</strong>. Prinsip ini membuktikan bagaimana pemahaman vektor gaya mampu menyelamatkan jutaan nyawa pengendara di jalan raya.</p>

      <div class="misconception-box">
        <strong>⚠️ Miskonsepsi yang Sering Terjadi:</strong><br>
        Banyak siswa mengira bahwa benda yang berada dalam keadaan diam tidak memiliki gaya yang bekerja padanya. <em>Fakta Ilmiah:</em> Benda diam di atas meja tetap menerima gaya berat gravitasi bumi ke bawah dan gaya normal ke atas. Benda diam bukan karena "tidak ada gaya", melainkan karena <strong>resultan seluruh gaya yang bekerja bernilai nol ($\\Sigma F = 0$)</strong>.
      </div>
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
    iktp: [
      "Menganalisis hubungan kedalaman dan massa jenis zat cair terhadap besaran tekanan hidrostatik pada bejana dan bendungan.",
      "Menerapkan prinsip Hukum Pascal dalam melipatgandakan gaya keluaran mekanis pada sistem dongkrak, rem hidrolik, dan alat berat.",
      "Menginvestigasi kondisi benda terapung, melayang, dan tenggelam berdasarkan Hukum Archimedes dan rasio massa jenis rata-rata.",
      "Menganalisis hubungan luas penampang aliran dan kelajuan fluida melalui Asas Kontinuitas serta efek gaya angkat aerodinamika berdasarkan Asas Bernoulli."
    ],
    materi: `
      <h3>1. Orientasi Fenomena: Dari Dongkrak Hidrolik hingga Aerodinamika Sayap</h3>
      <p>Bagaimana mungkin seorang anak remaja dengan berat badan 50 kg mampu mengangkat mobil sedan bermassa 2.000 kg hanya dengan menginjak tuas kecil dongkrak hidrolik? Mengapa sebutir paku besi seberat 5 gram langsung tenggelam ke dasar laut, sedangkan kapal pesiar berbobot 100.000 ton yang dibangun dari pelat baja tebal dapat terapung stabil di permukaan samudera? Dan bagaimana fluida tak kasat mata seperti udara mampu mengangkat pesawat Boeing berpenumpang ratusan orang ke ketinggian 30.000 kaki?</p>
      
      <div class="context-box">
        <strong>Intisari Nalar Fisis:</strong> Fluida (zat yang dapat mengalir, mencakup cairan dan gas) memiliki dua karakter fundamental: saat diam (fluida statis), molekulnya meneruskan tekanan tanpa kompresi signifikan ke seluruh arah. Saat bergerak (fluida dinamis), energi kinetik aliran saling bertukar dengan energi tekanan potensial, menciptakan penurunan tekanan lokal yang menghasilkan daya dorong atau gaya angkat.
      </div>

      <h3>2. Konstruksi Konsep Mendalam: Hukum Fluida Statis</h3>
      
      <h4>A. Tekanan Hidrostatik ($P_h = \\rho \\cdot g \\cdot h$)</h4>
      <p>Setiap lapisan fluida menanggung beban berat lapisan fluida di atasnya. Oleh karena itu, tekanan cairan murni hanya bergantung pada:</p>
      <ul>
        <li>Massa jenis cairan ($\\rho$ dalam kg/m³): Semakin rapat partikel cairan, semakin berat kolom fluida di atas bidang tekan.</li>
        <li>Kedalaman dari permukaan bebas ($h$ dalam meter): Tekanan berbanding lurus linier dengan kedalaman.</li>
      </ul>
      <p><em>Penerapan Rekayasa Bendungan:</em> Inilah alasan dinding dasar bendungan Waduk Jatiluhur atau Cirata selalu dirancang menebal berbentuk trapesium ke bawah, karena tekanan hidrostatik di dasar danau berkali-kali lipat lebih dahsyat dibanding di permukaan.</p>

      <h4>B. Hukum Pascal: Pelipatgandaan Gaya Mekanis ($P_1 = P_2$)</h4>
      <p>Tekanan yang diberikan pada fluida dalam ruang tertutup akan diteruskan secara merata tanpa berkurang ke segala arah dan ke dinding bejana:</p>
      <div style="text-align:center; padding: 12px; background:rgba(6,11,20,0.6); border-radius:6px; margin: 10px 0;">
        <strong>$\\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\cdot \\left(\\frac{A_2}{A_1}\\right)$</strong>
      </div>
      <p>Jika luas piston kedua ($A_2$) dibuat 100 kali lebih besar dibanding piston injak ($A_1$), maka gaya dorong keluaran ($F_2$) otomatis terlipatgandakan 100 kali lipat. Energi kekal karena usaha mekanik tetap sama ($W_1 = W_2$), artinya piston kecil harus ditekan melangkah lebih panjang agar piston besar terangkat beberapa sentimeter.</p>

      <h4>C. Hukum Archimedes & Kondisi Keseimbangan Apung</h4>
      <p>Benda yang dicelupkan sebagian atau seluruhnya ke dalam fluida akan mengalami gaya ke atas (Gaya Apung, $F_A$) yang besarnya tepat sama dengan berat fluida yang dipindahkan oleh volume tercelup benda tersebut: <strong>$F_A = \\rho_f \\cdot V_{tercelup} \\cdot g$</strong>.</p>
      <ul>
        <li><strong>Terapung:</strong> $\\rho_{rata-rata} < \\rho_{fluida} \\implies F_A = W_{total}$. Kapal baja terapung karena memiliki rongga udara lambung yang sangat besar, membuat massa jenis total rata-rata kapal lebih kecil dari air laut.</li>
        <li><strong>Melayang:</strong> $\\rho_{rata-rata} = \\rho_{fluida} \\implies F_A = W_{total}$ di kedalaman berapa pun (prinsip operasional kapal selam saat tangki ballast terisi separuh).</li>
        <li><strong>Tenggelam:</strong> $\\rho_{rata-rata} > \\rho_{fluida} \\implies F_A < W_{total}$ (batu atau paku padat).</li>
      </ul>

      <h3>3. Konstruksi Konsep Mendalam: Fluida Dinamis & Asas Bernoulli</h3>
      <p>Pada aliran fluida ideal (tidak termampatkan dan tanpa viskositas gesekan), berlaku dua hukum kekekalan:</p>
      <ol>
        <li><strong>Persamaan Kontinuitas:</strong> $A_1 \\cdot v_1 = A_2 \\cdot v_2$. Debit aliran air ($Q = A \\cdot v$) selalu konstan. Saat kamu mempersempit ujung selang air dengan jari ($A$ mengecil), laju semprotan air ($v$) otomatis melonjak drastis.</li>
        <li><strong>Asas Bernoulli:</strong> $P + \\frac{1}{2}\\rho v^2 + \\rho g h = \\text{Konstan}$. Di mana kelajuan fluida bertambah tinggi, tekanan fisis zat cair/gas tersebut justru menurun.</li>
      </ol>
      <p><em>Mekanisme Gaya Angkat Sayap Pesawat (Aerofoil):</em> Penampang sayap dirancang melengkung cembung di bagian atas dan mendatar di bagian bawah. Udara yang melintasi bagian atas sayap mengalir lebih cepat ($v_{atas} > v_{bawah}$), akibatnya tekanan udara di atas sayap turun drastis ($P_{atas} < P_{bawah}$). Selisih tekanan inilah yang menciptakan gaya angkat ke atas: <strong>$F_{angkat} = \\frac{1}{2}\\rho (v_{atas}^2 - v_{bawah}^2) \\cdot A_{sayap}$</strong>.</p>

      <div class="misconception-box">
        <strong>⚠️ Miskonsepsi yang Sering Terjadi:</strong><br>
        Banyak yang beranggapan bahwa benda yang lebih berat pasti tenggelam dibanding benda yang lebih ringan. <em>Fakta Ilmiah:</em> Gaya apung tidak ditentukan oleh massa mutlak benda, melainkan oleh <strong>rasio massa jenis (kerapatan massa per satuan volume)</strong>. Batang kayu seberat 500 kg tetap terapung, sementara kelereng 10 gram tenggelam.
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
    iktp: [
      "Membedakan mekanisme perpindahan kalor (konduksi, konveksi, dan radiasi) pada atmosfer, daratan, dan perairan laut.",
      "Menganalisis perubahan energi dalam sistem gas ideal melalui Hukum I Termodinamika pada proses isotermal, isobarik, isokhorik, dan adiabatik.",
      "Mengevaluasi batasan efisiensi mesin termal dan arah aliran kalor spontan berdasarkan Hukum II Termodinamika (Siklus Carnot dan Entropi).",
      "Menghubungkan ketidakseimbangan neraca radiasi termal bumi dan akumulasi emisi gas rumah kaca terhadap dinamika perubahan iklim dan cuaca ekstrem."
    ],
    materi: `
      <h3>1. Orientasi Fenomena: Ketidakseimbangan Neraca Termal Planet Bumi</h3>
      <p>Mengapa saat kamu memompa ban sepeda dengan cepat, ujung laras pompa terasa panas menyengat padahal tidak ada api atau sumber panas di dekatnya? Dan pada skala planet, mengapa kenaikan rata-rata suhu bumi sebesar 1,5°C saja dapat mencairkan miliaran ton gletser kutub, memicu siklon tropis dahsyat, dan menenggelamkan pesisir pantai? Apakah panas bumi bertambah karena energi matahari yang membesar, ataukah karena energi yang masuk terperangkap dan tidak bisa keluar?</p>
      
      <div class="context-box">
        <strong>Intisari Nalar Fisis:</strong> Bumi dan atmosfernya bekerja persis seperti sebuah sistem termodinamika tertutup. Radiasi surya berfrekuensi tinggi (sinar tampak dan ultraviolet) menembus atmosfer tanpa halangan untuk menghangatkan daratan dan lautan. Namun, saat bumi melepaskan kembali energi tersebut sebagai radiasi inframerah gelombang panjang, molekul gas rumah kaca (CO₂, CH₄, N₂O) menyerap dan memancarkannya kembali ke permukaan bumi, mengunci neraca termal dalam perangkap panas permanen.
      </div>

      <h3>2. Konstruksi Konsep Mendalam: Hukum I Termodinamika</h3>
      <p>Hukum Pertama Termodinamika adalah hukum kekekalan energi yang diterapkan pada sistem gas dan fluida termal:</p>
      <div style="text-align:center; padding: 12px; background:rgba(6,11,20,0.6); border-radius:6px; margin: 10px 0;">
        <strong>$\\Delta U = Q - W$</strong>
      </div>
      <ul>
        <li><strong>$\\Delta U$ (Perubahan Energi Dalam):</strong> Mencerminkan perubahan energi kinetik getaran mikroskopis molekul gas (berbanding lurus dengan perubahan suhu mutlak $\\Delta T$).</li>
        <li><strong>$Q$ (Kalor):</strong> Energi termal yang mengalir melintasi batas sistem karena perbedaan suhu (bernilai positif jika kalor masuk ke sistem).</li>
        <li><strong>$W$ (Usaha Mekanik Luar):</strong> Kerja pemuaian/pemampatan gas ($W = P \\cdot \\Delta V$, bernilai positif jika sistem memuai mendorong lingkungan).</li>
      </ul>

      <h4>Empat Proses Termodinamika Khusus:</h4>
      <table class="article-table">
        <thead>
          <tr>
            <th>Jenis Proses</th>
            <th>Karakteristik Fisis</th>
            <th>Bentuk Hukum I Termodinamika</th>
            <th>Aplikasi Nyata</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Isobarik</strong></td>
            <td>Tekanan Tetap ($P = C$)</td>
            <td>$Q = \\Delta U + P \\Delta V$</td>
            <td>Pemanasan air dalam panci terbuka</td>
          </tr>
          <tr>
            <td><strong>Isokhorik</strong></td>
            <td>Volume Tetap ($V = C \\implies W = 0$)</td>
            <td>$Q = \\Delta U$</td>
            <td>Panci presto tertutup rapat</td>
          </tr>
          <tr>
            <td><strong>Isotermal</strong></td>
            <td>Suhu Tetap ($T = C \\implies \\Delta U = 0$)</td>
            <td>$Q = W$</td>
            <td>Ekspansi gas perlahan dalam silinder konduktif</td>
          </tr>
          <tr>
            <td><strong>Adiabatik</strong></td>
            <td>Tanpa Aliran Kalor ($Q = 0$)</td>
            <td>$\\Delta U = -W$</td>
            <td>Kompresi pompa ban mendadak & semprotan aerosol</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Hukum II Termodinamika & Efisiensi Mesin Termal (Siklus Carnot)</h3>
      <p>Hukum Kedua Termodinamika menyatakan bahwa kalor secara spontan hanya mengalir dari benda bersuhu tinggi ke benda bersuhu rendah, dan tidak mungkin ada mesin kalor yang mengubah 100% kalor yang diserap menjadi kerja mekanis tanpa membuang kalor sisa ke lingkungan (Hukum Kelvin-Planck). Efisiensi maksimum teoritis dinyatakan oleh Siklus Carnot:</p>
      <div style="text-align:center; padding: 12px; background:rgba(6,11,20,0.6); border-radius:6px; margin: 10px 0;">
        <strong>$\\eta = 1 - \\frac{T_L}{T_H} = \\frac{T_H - T_L}{T_H} \\times 100\\%$</strong>
      </div>
      <p>Di mana $T_H$ adalah suhu reservoir panas dan $T_L$ adalah suhu lingkungan pembuangan (dalam Kelvin). Artinya, semua kendaraan bermotor dan pembangkit listrik berbahan bakar batubara pasti membuang kalor dalam jumlah masif ($Q_L$) ke udara dan perairan sekitar, meningkatkan entropi (ketidakteraturan) lingkungan secara global.</p>

      <h3>4. Analisis Termodinamika pada Perubahan Iklim Global</h3>
      <p>Ketika konsentrasi gas rumah kaca melonjak melampaui ambang normal, terjadi ketidakseimbangan radiasi termal bumi: laju kalor yang masuk ($Q_{in}$) jauh melampaui laju pelepasan kalor ke antariksa ($Q_{out}$). Akibatnya, energi dalam atmosfer dan samudra ($\Delta U$) terus menanjak tajam.</p>
      <p>Dampaknya adalah pelelehan tudung es kutub yang menurunkan efek <em>albedo</em> (daya pantul sinar matahari oleh salju putih), sehingga daratan gelap menyerap lebih banyak radiasi surya, memicu <em>lingkaran setan umpan balik positif</em> pemanasan global.</p>

      <div class="misconception-box">
        <strong>⚠️ Miskonsepsi yang Sering Terjadi:</strong><br>
        Banyak yang mengira bahwa efek rumah kaca sepenuhnya adalah hal yang buruk. <em>Fakta Ilmiah:</em> Efek rumah kaca alami justru mutlak diperlukan agar bumi layak huni (menjaga suhu rata-rata bumi sekitar 15°C; tanpa efek rumah kaca alami, bumi membeku pada suhu -18°C). Yang membahayakan peradaban adalah <strong>efek rumah kaca berlebih (akselerasi antropogenik)</strong> akibat pembakaran bahan bakar fosil dan deforestasi.
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
    iktp: [
      "Menganalisis besaran-besaran fisis gelombang (amplitudo, frekuensi, periode, panjang gelombang, cepat rambat) serta persamaannya $v = \\lambda \\cdot f$.",
      "Menginvestigasi gejala pemantulan (refleksi), pembiasan (refraksi), difraksi, dan interferensi pada gelombang mekanik dan gelombang bunyi.",
      "Menganalisis pergeseran frekuensi bunyi akibat efek Doppler dan resonansi akustik dalam kehidupan sehari-hari.",
      "Mengevaluasi pemanfaatan prinsip gelombang pada teknologi sonografi (USG medis), radar kelautan, serat optik komunikasi, dan teknologi peredam bising aktif."
    ],
    materi: `
      <h3>1. Orientasi Fenomena: Gelombang sebagai Pengirim Energi Tanpa Memindahkan Materi</h3>
      <p>Ketika kamu melempar sebutir kerikil ke permukaan kolam air yang tenang, kamu melihat lingkaran riak gelombang merambat menjauh dari titik jatuhnya kerikil. Menariknya, sehelai daun kering yang terapung di atas air hanya bergerak naik-turun di tempatnya dan tidak ikut tersapu hanyut ke tepi kolam. Mengapa demikian? Dan bagaimana mungkin suara sirine ambulans yang melaju mendekat terdengar bernada lebih tinggi dibanding saat mobil itu menjauh melintas di depan kita?</p>
      
      <div class="context-box">
        <strong>Intisari Nalar Fisis:</strong> Gelombang pada hakikatnya adalah getaran yang merambat melalui medium (atau ruang hampa untuk gelombang elektromagnetik) yang mentransfer <strong>energi dan momentum</strong> tanpa memindahkan partikel medium secara permanen. Partikel air atau molekul udara hanya berosilasi di sekitar titik setimbangnya.
      </div>

      <h3>2. Konstruksi Konsep Mendalam: Besaran & Karakteristik Gelombang</h3>
      <p>Setiap gelombang periodik diatur oleh hubungan fundamental cepat rambat:</p>
      <div style="text-align:center; padding: 12px; background:rgba(6,11,20,0.6); border-radius:6px; margin: 10px 0;">
        <strong>$v = \\lambda \\cdot f = \\frac{\\lambda}{T}$</strong>
      </div>
      <ul>
        <li><strong>Panjang Gelombang ($\\lambda$ dalam meter):</strong> Jarak antara dua puncak bukit gelombang berurutan atau jarak satu siklus gelombang utuh.</li>
        <li><strong>Frekuensi ($f$ dalam Hertz):</strong> Banyaknya gelombang penuh yang terbentuk dalam satu detik ($f = 1/T$).</li>
        <li><strong>Cepat Rambat ($v$ dalam m/s):</strong> Kelajuan perambatan muka gelombang melintasi ruang, yang nilainya murni ditentukan oleh sifat elastisitas dan inersia medium perantaranya.</li>
      </ul>

      <h4>Perbedaan Gelombang Transversal vs Longitudinal:</h4>
      <table class="article-table">
        <thead>
          <tr>
            <th>Parameter Komparasi</th>
            <th>Gelombang Transversal</th>
            <th>Gelombang Longitudinal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Arah Getar vs Rambat</strong></td>
            <td>Tegak lurus (90°) terhadap arah rambat</td>
            <td>Sejajar (0° / 180°) searah rambatan getaran</td>
          </tr>
          <tr>
            <td><strong>Bentuk Anatomi</strong></td>
            <td>Terdiri dari Bukit dan Lembah</td>
            <td>Terdiri dari Rapatan dan Renggangan</td>
          </tr>
          <tr>
            <td><strong>Contoh Nyata</strong></td>
            <td>Gelombang tali, gelombang permukaan air, cahaya</td>
            <td>Gelombang bunyi di udara, gelombang pegas (slinki), gelombang seismik P</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Gejala-Gejala Karakteristik Gelombang (Sifat Fisis)</h3>
      
      <h4>A. Refleksi (Pemantulan) & Hukum Pemantulan</h4>
      <p>Gelombang memantul saat menabrak bidang batas medium keras dengan sudut datang sama dengan sudut pantul ($\\theta_i = \\theta_r$). Pada ujung terikat, gelombang mengalami pembalikan fase 180°, sedangkan pada ujung bebas terpantul sefase tanpa pembalikan.</p>

      <h4>B. Refraksi (Pembiasan) & Hukum Snellius</h4>
      <p>Ketika gelombang merambat memasuki medium lain yang berbeda kerapatannya, cepat rambatnya berubah ($v_1 \\neq v_2$) sehingga arah rambatannya berbelok: $\\frac{\\sin \\theta_1}{\\sin \\theta_2} = \\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}$. Frekuensi gelombang selalu tetap konstan karena ditentukan oleh sumber getarannya.</p>

      <h4>C. Interferensi: Penguatan & Peniadaan Gelombang</h4>
      <p>Bila dua gelombang koheren (frekuensi dan beda fase konstan) bertemu pada satu titik:</p>
      <ul>
        <li><strong>Interferensi Konstruktif (Saling Menguatkan):</strong> Terjadi saat puncak bertemu puncak, menghasilkan amplitudo gabungan dua kali lipat (bunyi terdengar jauh lebih keras).</li>
        <li><strong>Interferensi Destruktif (Saling Menghilangkan):</strong> Terjadi saat puncak bertemu lembah, menghasilkan amplitudo nol.</li>
      </ul>
      <p><em>Penerapan Teknologi Headphone ANC (Active Noise Cancelling):</em> Mikrofon kecil menangkap gelombang kebisingan mesin pesawat dari luar, lalu sirkuit memproses dan memancarkan gelombang tandingan yang berlawanan fase 180° ke telinga pendengar, sehingga suara dengung mesin hilang seketika karena interferensi destruktif.</p>

      <h4>D. Efek Doppler Bunyi</h4>
      <p>Efek Doppler adalah fenomena pergeseran frekuensi yang didengar oleh pengamat ($f_p$) akibat gerak relatif antara sumber bunyi dan pengamat:</p>
      <div style="text-align:center; padding: 12px; background:rgba(6,11,20,0.6); border-radius:6px; margin: 10px 0;">
        <strong>$f_p = \\left(\\frac{v \\pm v_p}{v \\mp v_s}\\right) f_s$</strong>
      </div>
      <p>Saat ambulans melaju mendekat ($v_s$ bernilai minus), muka gelombang di depan mobil terdesak memadat (panjang gelombang efektif mengecil), sehingga telinga kita menangkap lebih banyak siklus getaran per detik (frekuensi terasa melengking tinggi).</p>

      <div class="misconception-box">
        <strong>⚠️ Miskonsepsi yang Sering Terjadi:</strong><br>
        Banyak siswa mengira bahwa saat volume suara diperkeras (teriakan kencang), bunyi akan merambat lebih cepat sampai ke telinga kawan. <em>Fakta Ilmiah:</em> Cepat rambat bunyi di udara murni ditentukan oleh suhu dan kerapatan medium udara ($v = \\sqrt{\\gamma R T / M}$), bukan oleh amplitudo getaran. Suara bisikan halus dan teriakan kencang merambat dengan kecepatan yang persis sama.
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

// ARSIP MODUL AJAR / RPP
const DATABASE_MODUL_AJAR = [
  {
    tp: "TP 1.1",
    nama: "Modul Ajar: Gerak, Gaya & Rekayasa Struktur",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Bernalar Kritis, Gotong Royong, Kreatif",
    deskripsi: "Pembelajaran mendalam untuk mengidentifikasi distribusi beban statis/dinamis, inersia, dan desain keamanan struktur jembatan/gedung.",
    sintaks: "1. Orientasi fenomena runtuhnya jembatan Tacoma Narrows • 2. Investigasi PhET Forces & Motion • 3. Misi rekayasa pemecahan beban kritis • 4. Refleksi metakognitif.",
    driveLink: "https://drive.google.com/"
  },
  {
    tp: "TP 2.1",
    nama: "Modul Ajar: Mekanika Fluida & Karya Teknologi",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Kreatif, Mandiri, Bernalar Kritis",
    deskripsi: "Pembuatan proyek miniatur hidrolik dan investigasi hukum Archimedes serta Bernoulli pada perancangan kapal selam & pesawat terbang.",
    sintaks: "1. Studi fenomena kapal baja terapung • 2. Eksperimen sensor tekanan PhET Under Pressure • 3. Proyek miniatur pompa hidrolik • 4. Evaluasi produk & peer assessment.",
    driveLink: "https://drive.google.com/"
  },
  {
    tp: "TP 3.1",
    nama: "Modul Ajar: Kalor, Termodinamika & Mitigasi Iklim",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Beriman & Berakhlak Mulia (Peduli Lingkungan), Bernalar Kritis",
    deskripsi: "Menganalisis siklus termodinamika, efisiensi mesin termal, serta keterkaitannya dengan pemanasan global dan pulau bahang perkotaan.",
    sintaks: "1. Analisis anomali suhu kutub • 2. Simulasi radiasi PhET Greenhouse Effect • 3. Perancangan strategi kogenerasi energi hijau • 4. Penilaian diri metakognitif.",
    driveLink: "https://drive.google.com/"
  },
  {
    tp: "TP 4.1",
    nama: "Modul Ajar: Gejala Gelombang & Teknologi Komunikasi",
    alokasi: "5 JP (5 x 45 Menit)",
    profil: "Bernalar Kritis, Berkebinekaan Global",
    deskripsi: "Menganalisis fenomena gelombang mekanik, pemantulan sonar dasar laut, efek Doppler ambulans, dan teknologi ultrasonografi.",
    sintaks: "1. Pengamatan gelombang gempa primer & sekunder • 2. Eksperimen PhET Wave on a String • 3. Misi kalibrasi radar & sonar • 4. Asesmen sumatif & refleksi.",
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

// MEMILIH TP DAN MENAMPILKAN IKTP BESERTA MATERI TERINCI
function pilihTP(index) {
  currentTPIndex = index;
  const pills = document.querySelectorAll("#panel-materi .tp-pill");
  pills.forEach((p, idx) => p.classList.toggle("active", idx === index));

  const data = DATABASE_TP[index];
  document.getElementById("materi-badge").innerText = data.kode;
  document.getElementById("materi-judul").innerText = data.judul;
  document.getElementById("materi-cp").innerText = `Tujuan Pembelajaran: ${data.cp}`;

  // Tampilkan daftar IKTP
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

  // Tampilkan isi kajian materi mendalam
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
      aktivitas: "Orientasi fenomena keruntuhan jembatan akibat resonansi beban. Siswa mengeksplorasi simulator PhET Forces and Motion secara berkelompok dan menganalisis pengaruh massa terhadap akselerasi.",
      catatan: "Siswa sangat antusias saat simulasi PhET. Sebagian kecil siswa masih kesulitan pada penguraian vektor sudut kemiringan jalan raya (banked turn). Perlu penguatan konsep di awal pertemuan berikutnya.",
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
