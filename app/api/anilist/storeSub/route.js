import fs from "fs";
import path from "path";

// Contoh fungsi untuk membaca data, sesuaikan dengan projectmu
async function getStoreSubData() {
  try {
    // Misal membaca file JSON lokal
    const filePath = path.join(process.cwd(), "data", "storeSub.json");
    if (!fs.existsSync(filePath)) {
      console.warn("File storeSub.json tidak ditemukan, menggunakan default empty object");
      return {};
    }

    const raw = fs.readFileSync(filePath, "utf-8");

    if (!raw || raw.trim() === "") {
      console.warn("File kosong, menggunakan default empty object");
      return {};
    }

    return JSON.parse(raw);
  } catch (err) {
    console.error("Gagal parse JSON:", err);
    return {}; // fallback agar build tidak gagal
  }
}

export async function GET(req) {
  const data = await getStoreSubData();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
