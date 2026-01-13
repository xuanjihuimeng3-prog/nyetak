// ===== NYETAK VIDEO MAKER (FLIPBOOK STYLE) =====

// Pastikan FFmpeg tersedia
const { createFFmpeg, fetchFile } = FFmpeg;
const ffmpeg = createFFmpeg({ log: false });

let poseImages = [];

// Simpan gambar pose (manual dulu)
function addPoseImage(file) {
  poseImages.push(file);
}

// Buat video dari kumpulan gambar
async function makeVideoFromImages() {
  if (poseImages.length < 3) {
    alert("Minimal 3 gambar pose untuk membuat video.");
    return;
  }

  if (!ffmpeg.isLoaded()) {
    await ffmpeg.load({
      coreURL: "https://unpkg.com/@ffmpeg/core@0.12.6/dist/ffmpeg-core.js"
    });
  }

  // Masukkan gambar ke FFmpeg
  for (let i = 0; i < poseImages.length; i++) {
    ffmpeg.FS(
      "writeFile",
      `img${i}.png`,
      await fetchFile(poseImages[i])
    );
  }

  // Jalankan FFmpeg (8 FPS)
  await ffmpeg.run(
    "-framerate", "8",
    "-i", "img%d.png",
    "-c:v", "libx264",
    "-pix_fmt", "yuv420p",
    "output.mp4"
  );

  const data = ffmpeg.FS("readFile", "output.mp4");
  const videoBlob = new Blob([data.buffer], { type: "video/mp4" });
  const videoURL = URL.createObjectURL(videoBlob);

  const video = document.getElementById("resultVideo");
  video.src = videoURL;
  video.style.display = "block";
}

// Hubungkan tombol
document.getElementById("makeVideoBtn").addEventListener("click", () => {
  makeVideoFromImages();
});
