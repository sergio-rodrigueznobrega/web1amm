document.addEventListener('DOMContentLoaded', () => {
  const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'orange'];
  let index = 0;

  const icon = document.querySelector('.alumno1');

  icon.addEventListener('mousemove', () => {
    icon.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
  });
});
