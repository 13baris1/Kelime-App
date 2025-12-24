
const sections = [
  { id: 1, name: "Bölüm 1" },
  { id: 2, name: "Bölüm 2" },
  { id: 3, name: "Bölüm 3" }
];

const sectionContainer = document.getElementById("sectionContainer");

sections.forEach(section => {
  const btn = document.createElement("button");
  btn.className = "section-box";
  btn.innerText = section.name;
  btn.onclick = () => selectSection(section.id);
  sectionContainer.appendChild(btn);
});

function selectSection(id) {
  document.querySelectorAll(".section-box").forEach(b => {
    b.classList.remove("active");
  });
  event.target.classList.add("active");
  window.selectedSection = id;
}
