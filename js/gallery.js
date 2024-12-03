function addPhotoToCarousel(event) {
  event.preventDefault();

  const title = document.getElementById("photoTitle").value;
  const description = document.getElementById("photoDescription").value;
  const fileInput = document.getElementById("photoFile");
  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const indicators = document.querySelector(".carousel-indicators");
      const newIndicatorIndex = indicators.children.length;
      const newIndicator = document.createElement("li");
      newIndicator.setAttribute("data-target", "#myCarousel");
      newIndicator.setAttribute("data-slide-to", newIndicatorIndex);
      indicators.appendChild(newIndicator);

      const carouselInner = document.querySelector(".carousel-inner");
      const newItem = document.createElement("div");
      newItem.className = "carousel-item";

      const img = document.createElement("img");
      img.src = e.target.result;
      img.alt = title;

      const caption = document.createElement("div");
      caption.className = "carousel-caption d-none d-md-block";
      caption.innerHTML = `
        <h5>${title}</h5>
        <p>${description}</p>
      `;

      newItem.appendChild(img);
      newItem.appendChild(caption);
      carouselInner.appendChild(newItem);

      document.getElementById("photoForm").reset();

      alert("Zdjęcie zostało dodane do galerii!");
    };

    reader.readAsDataURL(file);
  }
}

const dropZone = document.getElementById("photoFile");

dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZone.classList.add("dragover");
});

dropZone.addEventListener("dragleave", () => {
  dropZone.classList.remove("dragover");
});

dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropZone.classList.remove("dragover");
  const files = e.dataTransfer.files;
  if (files.length > 0) {
    dropZone.files = files;
    const fileName = files[0].name;
    dropZone.nextElementSibling.textContent = fileName;
  }
});
