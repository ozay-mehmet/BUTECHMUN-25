document.addEventListener('DOMContentLoaded', function () {
  const letter = document.getElementById('letter');

  letter.addEventListener('mouseover', function () {
    letter.classList.add('open');
  });

  letter.addEventListener('mouseleave', function () {
    letter.classList.remove('open');
  });
});
const timer = document.getElementById("timer");
const eventDate = new Date("2025-05-16T09:00:00").getTime(); 

const countdown = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    clearInterval(countdown);
    timer.innerHTML = "Event has started!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  timer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);