# Site Mel São José — V2

## Imagens (pasta `assets/`)
Coloque estes arquivos (nomes exatos). Enquanto não existirem, aparece um espaço dourado no lugar:
- `logo.png` — logo (também usada como ícone da aba)
- `hero.jpg` — foto principal do topo
- `sobre.jpg` — foto da empresa/produção
- `produto-silvestre.jpg` — Mel Silvestre
- `produto-laranjeira.jpg` — Mel de Flor de Laranjeira
- `produto-melato.jpg`, `produto-polen.jpg`
- `produto-propolis-marrom.jpg`, `produto-propolis-verde.jpg`, `produto-propolis-aquoso.jpg`

Dica: fotos com até ~300 KB cada deixam o site rápido.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub e envie todos os arquivos desta pasta para a raiz.
2. Em **Settings → Pages**, escolha **Deploy from a branch → main → / (root)**.
3. O site ficará em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## Domínio próprio
1. O arquivo `CNAME` já está pronto (`melsaojose.com.br`). Em **Settings → Pages → Custom domain**, confirme `melsaojose.com.br` e salve.
2. No Registro.br (Editar zona / DNS), crie:
   - 4 registros **A** no domínio raiz (`melsaojose.com.br`) → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` → registro **CNAME** apontando para `SEU-USUARIO.github.io`
   - Se o DNS do Registro.br estiver em modo "Servidores do Registro.br", use a opção "Configurar zona DNS"; se usa outros nameservers, crie lá.
3. Quando o DNS propagar, marque **Enforce HTTPS**.

## Para ajustar
- Link da Shopee: procure `TROCAR` em `index.html`.
- Textos de "Sobre" e dos produtos: edite direto em `index.html`.
- Cores: variáveis no topo de `style.css`.

## Fotos já incluídas
As fotos dos produtos e a do topo (`hero.jpg`) foram recortadas do catálogo e têm resolução limitada. Quando tiver as fotos originais, é só substituir os arquivos de mesmo nome em `assets/`.

## Fotos da trajetória (linha do tempo)
Coloque em `assets/` (formato horizontal 4:3 fica melhor, ~1200x900 px):
- `historia-1.jpg` — 2002, o começo
- `historia-2.jpg` — 2005, o apiário cresce
- `historia-3.jpg` — conquista do S.I.F
- `historia-4.jpg` — sede atual
Para adicionar mais marcos, copie um bloco `<div class="marco reveal">` em `index.html` (seção `#trajetoria`).

## V2.2 — SEO base, privacidade e 404
- `robots.txt` e `sitemap.xml` (domínio `https://melsaojose.com.br/`). Se criar novas páginas, adicione-as ao sitemap com a data real de alteração.
- Canonical, Open Graph e JSON-LD (Organization + WebSite) em `index.html`. Se mudar telefone, e-mail ou endereço, atualize também o JSON-LD.
- `politica-de-privacidade.html` (linkada no rodapé) e `404.html`.
- `assets/og-image.jpg`: prévia ao compartilhar o link. Gerada a partir do `hero.jpg`; troque por uma imagem final 1200x630 quando tiver as fotos.
- Se um dia incluir Google Analytics, pixel ou formulários, atualize a Política de Privacidade.

## V2.3 — Desempenho e acessibilidade
- Fontes do Google carregadas sem bloquear a renderização (`display=swap`, só os pesos usados).
- Imagens com largura/altura e carregamento preguiçoso; `hero.jpg` otimizada (960x720).
- Filtros de produtos com `aria-pressed` (sem `role` inválido). Ícone da aba provisório (emoji) até a logo chegar.
- Regras para novas fotos: JPG até ~120 KB cada, largura máxima 1000 px para fotos grandes (topo/trajetória) e 600 px para produtos.
- Erros 404 no console do navegador vêm das fotos que ainda não foram enviadas (sobre, trajetória, pólen, logo) e somem quando elas forem adicionadas.
- "Ciclos de vida de cache" do Lighthouse não dá para alterar no GitHub Pages (o cache é de 10 min). Seria preciso um CDN, como o Cloudflare.


## V2.4 — Fotos originais dos produtos
- Substituídas as fotos recortadas do catálogo pelas fotos originais: Mel Silvestre (1 kg), Flor da Laranjeira (1 kg), Melato de Cana (500 g), Jataí (200 g) e Extrato Aquoso de Própolis.
- Imagens recortadas automaticamente (sem margem branca), redimensionadas para 640 px de altura e comprimidas (~30–45 KB cada).
- Também trocados: própolis marrom, própolis verde (caixas), spray (2 sabores) e composto (2 potes de 280 g). Pólen e logo seguem pendentes.


## V2.5 — Nova imagem do topo (hero)
- `assets/hero.jpg` refeita (1200x900) com as fotos originais: Mel Silvestre, Flor da Laranjeira, Melato e Extrato Aquoso de Própolis (sem álcool), sobre o fundo dourado do site.


## V2.6 — Localização
- O card de endereço em Contato agora abre a ficha da empresa no Google Maps (Mel São José), em vez de uma busca pelo endereço.

## V2.7 — Logo
- Logo oficial adicionada em `assets/logo.png` (360 px de largura, 13 KB) e exibida no topo ao lado do nome, nas páginas inicial, de privacidade e 404.
- Ícone da aba (`assets/favicon.png`, 256x256) agora usa a logo, no lugar do emoji provisório.
- Altura da logo no cabeçalho de 44 para 52 px, para ficar legível.

## V2.8 — Fotos do Melato e da Própolis Verde
- Atualizadas `produto-melato.jpg` (frente) e `produto-propolis-verde.jpg` (frasco + caixa).
- Adicionada `produto-melato-verso.jpg` (verso, com tabela nutricional), guardada para uma futura galeria; ainda não é exibida no site.

## V2.9 — Galeria por tamanho, com frente e verso
- Cards do Mel Silvestre (250 g, 350 g, 500 g, 1 kg, 5 kg), Flor de Laranjeira (250 g, 500 g, 1 kg), Melato (500 g) e Jataí (200 g) agora têm botões de **tamanho** e de **Frente / Verso**.
- Clicar na foto abre uma janela com a imagem ampliada (versos em 1100 px de altura, para ler a tabela nutricional). Fecha no × ou clicando fora.
- Fotos carregam só quando o visitante clica (lazy); o balde de 5 kg não tem verso (botão desativado).
- Nome dos arquivos: `produto-tamanho-lado.jpg` (ex.: `silvestre-250-verso.jpg`). Sem JavaScript, o card mostra a foto padrão normalmente.
- Removidos os arquivos antigos `produto-silvestre/laranjeira/jatai/melato(.verso).jpg`, substituídos pelos novos.
- Não há foto do verso do 5 kg nem do Silvestre 1 kg em pote.

## V2.10 — Hero com o Melato novo
- `hero.jpg` refeito com a foto atual do Mel de Melato (tampa vermelha), mantendo Silvestre 1 kg, Flor de Laranjeira 1 kg e Extrato Aquoso de Própolis (113 KB).

## V2.12 — Fotos da trajetória e da seção "Nossa história"
- `historia-1.jpg`: recorte de jornal da reportagem "Hobby, o mel virou um grande negócio" (marco 2002).
- Marco "Nova sede / Hoje" substituído por três marcos: **Set 2015** (início das obras, `historia-4.jpg`), **Out 2016** (nova sede concluída, `historia-5.jpg`) e **2021** (ampliação, `historia-6.jpg`). O texto "mais de 360 m²" foi mantido no marco de 2021.
- `sobre.jpg`: apicultor abrindo uma caixa de abelhas (foto de out/2016).
- Fotos recortadas em 4:3 e comprimidas (100–250 KB). Alt descritivo e width/height em todas.
- Marcos de 2005 e S.I.F seguem sem foto (`historia-2.jpg` e `historia-3.jpg` pendentes).
- Versões: index.html V2.12 (script.js e style.css seguem V2.9).
