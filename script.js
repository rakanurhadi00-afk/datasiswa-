
function doPost(e) {
  var data = JSON.parse(e.postData.contents);

  var emailTujuan = "rakanurhadi00@gmail.com";

  var pesan =
    "DATA SISWA\n\n" +
    "Nama: " + data.nama + "\n" +
    "Kelas: " + data.kelas + "\n" +
    "Nilai Matematika: " + data.matematika + "\n" +
    "Nilai Bahasa Indonesia: " + data.indonesia + "\n" +
    "Nilai Bahasa Inggris: " + data.inggris + "\n" +
    "Nilai IPS: " + data.ips;

  MailApp.sendEmail(
    emailTujuan,
    "Data Siswa Baru",
    pesan
  );

  return ContentService.createTextOutput("Berhasil");
}

const URL_SCRIPT = "https://script.google.com/macros/s/AKfycby8xZpgf7cGHQFEwD5CkNoThX_D_866r8pRkXM_try8gYdrUQ6NngcvrnX9z0xQ2_g/exec";

document.getElementById("formSiswa").addEventListener("submit", async function(e) {
  e.preventDefault();

  const data = {
    nama: document.getElementById("nama").value,
    kelas: document.getElementById("kelas").value,
    matematika: document.getElementById("matematika").value,
    indonesia: document.getElementById("indonesia").value,
    inggris: document.getElementById("inggris").value,
    ips: document.getElementById("ips").value
  };

  try {
    await fetch(URL_SCRIPT, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data)
    });

    alert("Data sudah dikirim. Periksa Gmail penerima.");
    this.reset();
  } catch (error) {
    alert("Pengiriman gagal. Periksa koneksi dan URL.");
  }
});