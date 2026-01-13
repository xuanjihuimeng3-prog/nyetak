// ===== NYETAK PROMPT BUILDER =====

// Elements
const poseRange = document.getElementById("poseRange");
const poseCount = document.getElementById("poseCount");
const generateBtn = document.getElementById("generateBtn");
const outputPrompt = document.getElementById("outputPrompt");
const characterPreset = document.getElementById("characterPreset");
const worldPreset = document.getElementById("worldPreset");

// Update slider value
poseRange.addEventListener("input", () => {
  poseCount.textContent = poseRange.value;
});

// Preset definitions
const CHARACTER_PRESETS = {
  hero: "seorang karakter utama bergaya sinematik, proporsi realistis, detail tinggi, konsisten identitas",
  cartoon: "karakter kartun stylized, bentuk sederhana, ekspresi kuat, outline halus",
  fantasy: "makhluk fantasi epik, detail artistik tinggi, nuansa magis"
};

const WORLD_PRESETS = {
  city: "berada di kota futuristik dengan pencahayaan dramatis",
  nature: "berada di alam terbuka dengan cahaya alami lembut",
  studio: "berada di studio minimal dengan latar bersih"
};

// Generate prompt
generateBtn.addEventListener("click", () => {
  const poses = parseInt(poseRange.value);
  const charText = CHARACTER_PRESETS[characterPreset.value];
  const worldText = WORLD_PRESETS[worldPreset.value];

  let prompt = `Buat ${poses} variasi pose dari satu karakter yang sama.\n\n`;
  prompt += `Karakter:\n${charText} (gambar referensi)\n\n`;
  prompt += `Lingkungan:\n${worldText}\n\n`;
  prompt += `Aturan ketat:\n`;
  prompt += `- Identitas karakter HARUS konsisten\n`;
  prompt += `- Pakaian dan gaya visual tidak berubah\n`;
  prompt += `- Hanya pose dan sudut kamera yang berubah\n`;
  prompt += `- Gaya sinematik, kualitas tinggi\n\n`;
  prompt += `Daftar Pose:\n`;

  for (let i = 1; i <= poses; i++) {
    prompt += `${i}. Pose berbeda, sudut kamera unik, tetap konsisten\n`;
  }

  outputPrompt.value = prompt;
});
