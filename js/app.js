// ===== NYETAK PROMPT BUILDER =====

const poseRange = document.getElementById("poseRange");
const poseCount = document.getElementById("poseCount");
const generateBtn = document.getElementById("generateBtn");
const outputPrompt = document.getElementById("outputPrompt");
const characterPreset = document.getElementById("characterPreset");
const worldPreset = document.getElementById("worldPreset");

poseRange.addEventListener("input", () => {
  poseCount.textContent = poseRange.value;
});

const CHARACTER_PRESETS = {
  hero: "seorang karakter utama bergaya sinematik, detail tinggi, identitas konsisten",
  cartoon: "karakter kartun stylized, bentuk sederhana, ekspresi kuat",
  fantasy: "makhluk fantasi epik, detail artistik tinggi"
};

const WORLD_PRESETS = {
  city: "di kota futuristik dengan pencahayaan dramatis",
  nature: "di alam terbuka dengan cahaya alami",
  studio: "di studio minimal berlatar bersih"
};

generateBtn.addEventListener("click", () => {
  const poses = poseRange.value;
  const charText = CHARACTER_PRESETS[characterPreset.value];
  const worldText = WORLD_PRESETS[worldPreset.value];

  let prompt = `Buat ${poses} pose berbeda dari karakter yang sama.\n\n`;
  prompt += `Karakter:\n${charText} (gambar referensi)\n\n`;
  prompt += `Lingkungan:\n${worldText}\n\n`;
  prompt += `Aturan:\n`;
  prompt += `- Identitas karakter konsisten\n`;
  prompt += `- Pakaian tidak berubah\n`;
  prompt += `- Gaya sinematik\n\n`;
  prompt += `Daftar Pose:\n`;

  for (let i = 1; i <= poses; i++) {
    prompt += `${i}. Pose unik, sudut kamera berbeda\n`;
  }

  outputPrompt.value = prompt;
});
// ===== KIRIM GAMBAR KE VIDEO ENGINE =====
const imageInput = document.getElementById("imageInput");

imageInput.addEventListener("change", () => {
  poseImages.length = 0; // reset
  for (let file of imageInput.files) {
    addPoseImage(file);
  }
  alert(`${poseImages.length} gambar pose siap dibuat video`);
});
