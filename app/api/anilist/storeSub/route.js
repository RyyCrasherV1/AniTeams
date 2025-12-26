let data;
try {
  const raw = someVariable; // data asli, bisa dari fetch atau file
  if (!raw || raw === "") {
    console.error("Data kosong atau undefined");
    data = {}; // fallback supaya build tidak gagal
  } else {
    data = JSON.parse(raw);
  }
} catch (err) {
  console.error("JSON parse error:", err);
  data = {}; // fallback
}
