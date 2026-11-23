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
