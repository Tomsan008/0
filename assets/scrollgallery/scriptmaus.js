document.addEventListener('mousemove', (event) => {
  const smoke = document.createElement('div');
  smoke.className = 'smoke';
  smoke.style.left = `${event.clientX}px`;
  smoke.style.top = `${event.clientY}px`;

  document.body.appendChild(smoke);

  setTimeout(() => {
    smoke.remove();
  }, 2000);
});