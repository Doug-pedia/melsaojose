// Site Mel São José - script.js V2.14
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
  document.querySelectorAll('.filtro').forEach(x => { x.classList.remove('ativo'); x.setAttribute('aria-pressed','false'); });
  f.classList.add('ativo'); f.setAttribute('aria-pressed','true');
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

// Galeria dos produtos: tamanho + frente/verso
document.querySelectorAll('.galeria-ctl').forEach(ctl => {
  const card = ctl.closest('.card');
  const img = card.querySelector('.foto-card img');
  const nome = ctl.dataset.nome;
  const tams = [...ctl.querySelectorAll('.g-tam .g-bt')];
  const lados = [...ctl.querySelectorAll('.g-lado .g-bt')];
  let tam = tams.find(b => b.getAttribute('aria-pressed') === 'true') || tams[0];
  let lado = 'f';
  const mostrar = () => {
    const temVerso = !!tam.dataset.v;
    if (!temVerso) lado = 'f';
    const vb = lados.find(b => b.dataset.lado === 'v');
    vb.disabled = !temVerso;
    img.src = tam.dataset[lado];
    img.width = tam.dataset[lado + 'w'];
    img.height = tam.dataset[lado + 'h'];
    img.alt = nome + ', ' + tam.textContent + ' (' + (lado === 'f' ? 'frente' : 'verso') + ')';
    tams.forEach(b => b.setAttribute('aria-pressed', b === tam));
    lados.forEach(b => b.setAttribute('aria-pressed', b.dataset.lado === lado));
  };
  tams.forEach(b => b.addEventListener('click', () => { tam = b; mostrar(); }));
  lados.forEach(b => b.addEventListener('click', () => { if (!b.disabled) { lado = b.dataset.lado; mostrar(); } }));
  ctl.hidden = false;
  mostrar();
});

// Ampliar foto
const dlg = document.getElementById('zoom-dlg');
if (dlg && dlg.showModal) {
  document.querySelectorAll('.zoom').forEach(z => z.addEventListener('click', () => {
    const i = z.querySelector('img');
    const g = dlg.querySelector('img');
    g.src = i.src; g.alt = i.alt;
    dlg.showModal();
  }));
  dlg.addEventListener('click', e => { if (e.target === dlg || e.target.classList.contains('zoom-fechar')) dlg.close(); });
}

// Botão flutuante do WhatsApp: lista com os dois contatos (sem JS, abre direto o Douglas)
const zapBtn = document.querySelector('.zap-flutuante');
const zapLista = document.getElementById('zap-lista');
if (zapBtn && zapLista) {
  const fechar = () => { zapLista.hidden = true; zapBtn.setAttribute('aria-expanded', 'false'); };
  zapBtn.addEventListener('click', e => {
    e.preventDefault();
    const abrir = zapLista.hidden;
    zapLista.hidden = !abrir;
    zapBtn.setAttribute('aria-expanded', String(abrir));
  });
  document.addEventListener('click', e => { if (!zapLista.hidden && !e.target.closest('.zap-caixa')) fechar(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !zapLista.hidden) { fechar(); zapBtn.focus(); } });
}
