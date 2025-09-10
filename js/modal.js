// Modal functionality for work highlights
document.addEventListener('DOMContentLoaded', function() {
  // Create modal elements
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center hidden bg-black bg-opacity-80 modal-backdrop';
  modal.id = 'imageModal';
  
  const modalContent = document.createElement('div');
  modalContent.className = 'relative max-w-4xl mx-auto p-4';
  
  const modalImage = document.createElement('img');
  modalImage.className = 'max-h-[90vh] max-w-full zoom-in';
  modalImage.id = 'modalImage';
  
  const closeButton = document.createElement('button');
  closeButton.className = 'absolute top-2 right-2 text-white bg-green-600 rounded-full w-10 h-10 flex items-center justify-center';
  closeButton.innerHTML = '&times;';
  closeButton.addEventListener('click', function() {
    modal.classList.add('hidden');
  });
  
  modalContent.appendChild(modalImage);
  modalContent.appendChild(closeButton);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);
  
  // Close modal when clicking outside the image
  modal.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.classList.add('hidden');
    }
  });
  
  // Add click event to all work highlight images
  const workImages = document.querySelectorAll('#experience .aspect-square.cursor-pointer img');
  workImages.forEach(function(img) {
    img.addEventListener('click', function() {
      const imgSrc = this.getAttribute('src');
      modalImage.setAttribute('src', imgSrc);
      modal.classList.remove('hidden');
    });
  });

  // Handle keyboard events (Escape to close)
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      modal.classList.add('hidden');
    }
  });
});
