
let data;

try {
  const raw = await getDataSomehow(); // misal fetch atau readFile
  if (!raw) {
    console.error("Data kosong atau undefined");
    data = {}; // default object supaya build tidak gagal
  } else {
    data = JSON.parse(raw);
  }
} catch (err) {
  console.error("JSON parse error:", err);
  data = {}; // fallback agar build tidak gagal
}

return new Response(JSON.stringify(data), { status: 200 });
