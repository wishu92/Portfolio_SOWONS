const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');

const siteContents = {
  site1: `
    <img src="IMG/atsearch기획서.png" alt="At Search 기획서 이미지" style="width:100%; height:auto;">
    <a href="https://wishu92.github.io/At_search/" target="_blank" class="visit-site-button"> At Search site </a>
  `,
  site2: `
    <img src="IMG/FurnitureLab기획서.png" alt="Furniture Lab 기획서 이미지" style="width:100%; height:auto;">
    <a href="https://wishu92.github.io/Furniture_Lab/" target="_blank" class="visit-site-button"> Furniture Lab site </a>
  `
};

function openModal(siteKey) {
  modalBody.innerHTML = siteContents[siteKey];
  modal.style.display = 'flex';
}

function closeModal() {
  modal.style.display = 'none';
}