// TINJAUAN DETAIL LKM DENGAN TEMA CERAH
function bukaModalDetailLKM(tp, nama) {
  const dataStr = localStorage.getItem(`lkm_${tp}_${nama}`);
  if (!dataStr) return;
  const d = JSON.parse(dataStr);

  document.getElementById("modal-detail-badge").innerText = `LEMBAR KERJA: ${tp}`;
  document.getElementById("modal-detail-title").innerText = `Hasil Investigasi LKM ${tp}`;
  document.getElementById("modal-detail-subtitle").innerText = `Peserta Didik: ${nama} • Waktu: ${d.waktu || '-'}`;

  document.getElementById("modal-detail-body").innerHTML = `
    <div style="margin-bottom:14px; background:#f0f9ff; padding:14px; border-radius:8px; border:1px solid #bae6fd;">
      <strong style="color:#0369a1;">1. Pengamatan Variabel Bebas & Terikat:</strong>
      <p style="margin-top:6px; color:#1e293b;">${d.q1 || '-'}</p>
    </div>
    <div style="margin-bottom:14px; background:#f0f9ff; padding:14px; border-radius:8px; border:1px solid #bae6fd;">
      <strong style="color:#0369a1;">2. Analisis Hubungan Konseptual:</strong>
      <p style="margin-top:6px; color:#1e293b;">${d.q2 || '-'}</p>
    </div>
    <div style="background:#f0f9ff; padding:14px; border-radius:8px; border:1px solid #bae6fd;">
      <strong style="color:#0369a1;">3. Kesimpulan Akhir & Contoh Nyata:</strong>
      <p style="margin-top:6px; color:#1e293b;">${d.q3 || '-'}</p>
    </div>
  `;
  document.getElementById("modal-guru-detail").style.display = "flex";
}

// TINJAUAN DETAIL PETA KONSEP DENGAN TEMA CERAH
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
        <img src="${d.gambar}" style="max-width:100%; max-height:280px; border-radius:8px; border:1px solid #bae6fd;" alt="Peta Konsep">
      </div>
    `;
  }

  document.getElementById("modal-detail-body").innerHTML = `
    <div style="margin-bottom:12px; background:#f0f9ff; padding:14px; border-radius:8px; border:1px solid #bae6fd;">
      <strong style="color:#0369a1;">Cabang & Hubungan Relasi Konseptual:</strong>
      <pre style="white-space:pre-wrap; font-family:'Plus Jakarta Sans'; color:#1e293b; margin-top:6px;">${d.cabang || '-'}</pre>
    </div>
    <div style="background:#fffbeb; border:1px solid #fde68a; padding:14px; border-radius:8px;">
      <strong style="color:#b45309;">Materi yang Masih Sulit (Perhatian Guru):</strong>
      <p style="margin-top:4px; color:#78350f;">${d.kesulitan || 'Tidak ada kendala yang dilaporkan.'}</p>
    </div>
    ${gambarHTML}
  `;
  document.getElementById("modal-guru-detail").style.display = "flex";
}

// PANEL KELOLA TAUTAN SUMATIF CERAH
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
