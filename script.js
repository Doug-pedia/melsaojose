// Site Mel São José - script.js V2.2
const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
btn.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  btn.setAttribute('aria-expanded', aberto);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('aberto');
  btn.setAttribute('aria-expanded', false);
}));
document.getElementById('ano').textContent = new Date().getFullYear();

// Sombra no topo ao rolar
const topo = document.getElementById('topo');
const aoRolar = () => topo.classList.toggle('rolou', window.scrollY > 10);
aoRolar(); window.addEventListener('scroll', aoRolar, {passive:true});

// Filtros de produtos
document.querySelectorAll('.filtro').forEach(f => f.addEventListener('click', () => {
  document.querySelectorAll('.filtro').forEach(x => x.classList.remove('ativo'));
  f.classList.add('ativo');
  const alvo = f.dataset.filtro;
  document.querySelectorAll('#grade-produtos .card').forEach(c => {
    c.hidden = !(alvo === 'todos' || c.dataset.cat === alvo);
  });
}));

// Animação de entrada
const itens = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visivel'); io.unobserve(e.target); }
  }), {threshold: .12});
  itens.forEach(i => io.observe(i));
} else { itens.forEach(i => i.classList.add('visivel')); }
