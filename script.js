// สไลด์ภาพหน้าแรก: เปลี่ยนภาพอัตโนมัติทุก 3 วินาที
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide-image");
  const dots = document.querySelectorAll(".dot");
  if (!slides.length) return;

  let current = 0;
  function showSlide(index) {
    slides.forEach((img, i) => img.style.display = i === index ? "block" : "none");
    dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
    current = index;
  }
  dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));
  showSlide(0);
  setInterval(() => showSlide((current + 1) % slides.length), 3000);
});

// ฟอร์มตัวอย่าง ไม่ได้เชื่อมต่อฐานข้อมูลจริง
function demoLogin(event) {
  event.preventDefault();
  alert("นี่เป็นหน้าสาธิตการเข้าสู่ระบบ ยังไม่ได้เชื่อมต่อฐานข้อมูล");
}