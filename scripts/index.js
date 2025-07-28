// Like button functionality
document.addEventListener('DOMContentLoaded', function() {
  const likeButtons = document.querySelectorAll('.card__like-button');
  
  likeButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      const likeIcon = this.querySelector('.card__like-icon');
      const isLiked = likeIcon.classList.contains('liked');
      
      if (isLiked) {
        likeIcon.classList.remove('liked');
        likeIcon.style.filter = 'none';
        likeIcon.alt = 'Like';
      } else {
        likeIcon.classList.add('liked');
        likeIcon.style.filter = 'brightness(0) saturate(100%) invert(13%) sepia(94%) saturate(7151%) hue-rotate(3deg) brightness(90%) contrast(118%)';
        likeIcon.alt = 'Unlike';
      }
    });
  });
});