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

## V2.11 — SEO de produtos e IA
- Dados estruturados `Product` (schema.org) para 10 produtos (4 méis, 5 derivados de própolis e o pólen, este a partir da V2.12.3), ligados à organização. Sem preço nem estoque, de propósito: a venda é por WhatsApp e não há preço público; não foram inventados dados.
- `llms.txt` criado na raiz, com resumo da empresa, páginas e contatos.
- `hero.jpg` reduzido de 113 KB para cerca de 80 KB (1200x900 → 1080x810, mesma proporção).
- Versões: index.html V2.11, robots.txt e sitemap.xml V2.11 (script.js e style.css seguem V2.9).

## V2.12 — Fotos da trajetória e da seção "Nossa história"
- `historia-2.jpg`: recorte de jornal da reportagem "Hobby, o mel virou um grande negócio" (marco 2005, com a empresa já em operação; o jornal já fechou, uso autorizado pelo proprietário).
- Marco "Nova sede / Hoje" substituído por três marcos: **Set 2015** (início das obras, `historia-4.jpg`), **Out 2016** (nova sede concluída, `historia-5.jpg`) e **2021** (ampliação, `historia-6.jpg`). O texto "mais de 360 m²" foi mantido no marco de 2021.
- `sobre.jpg`: apicultor abrindo uma caixa de abelhas (foto de out/2016).
- Fotos recortadas em 4:3 e comprimidas (100–250 KB). Alt descritivo e width/height em todas.
- Marco S.I.F agora é **2016** e vem depois da sede nova. Marcos de 2002 (`historia-1.jpg`) e S.I.F (`historia-3.jpg`) seguem sem foto.
- `produto-polen.jpg` adicionada (foto da embalagem de pólen, do site antigo), com `width`/`height` e alt.
- Dados estruturados `Product` do pólen adicionado (V2.12.3).
- Versões: index.html V2.12.3 (script.js e style.css seguem V2.9).

## V2.12.4 — S.I.F junto com a nova sede
- A foto da conclusão da sede (out/2016) é também a foto do S.I.F; os dois marcos viraram um só: **2016 — Nova sede e Inspeção Federal**. O mês do S.I.F não foi informado, por isso o texto diz só "no mesmo ano".
- Removido o marco separado do S.I.F (e a pendência de `historia-3.jpg`). Para voltar a dois marcos, bastaria ter uma foto própria do S.I.F.
- index.html V2.12.4.

## V2.12.5 — Medidas corrigidas
- Antiga fábrica: edícula de três cômodos com **40 m²**. Nova sede (2016): **347,14 m²** de área útil. Ampliação (2021): **242,90 m²**. Total: 347,14 + 242,90 = 590,04 m², escrito no site como "cerca de 590 m²".
- Substitui o "mais de 360 m²" que estava no site (seção Nossa história e marco de 2021).
- index.html V2.12.5.

## V2.12.6 — Imagem de compartilhamento (WhatsApp, redes)
- `og-image.jpg` (montagem antiga, com produtos desatualizados) substituída por `og-image-v2.jpg` (1200x630, 70 KB), feita da foto atual dos produtos.
- O arquivo mudou de nome de propósito: o WhatsApp guarda a prévia pelo endereço da imagem; com nome novo ele busca de novo.
- Adicionado `twitter:image`. Também atualizado o `image` do JSON-LD da organização.
- index.html V2.12.6.

## V2.12.7 — Descrição do site (Google e prévia de links)
- `description` e `og:description`: "Mel puro, própolis e pólen produzidos em Maringá-PR desde 2002, com Inspeção Federal (S.I.F). Para o seu dia a dia, mercados e revendedores." (140 caracteres, cabe inteira na prévia do WhatsApp e no Google).
- Descrição da organização (JSON-LD) ampliada, com o texto mais completo (própolis, pólen, mais de 20 anos).
- index.html V2.12.7.

## V2.12.8 — Removido o `Product` dos dados estruturados
- O Search Console marcou os 10 `Product` como "erro crítico": para o Google, um Product precisa de `offers` (com preço), `review` ou `aggregateRating`. O site não publica preço (a venda é por WhatsApp) e não tem avaliações, e esses dados não podem ser inventados.
- Removidos os 10 `Product`. Ficam `Organization` e `WebSite`, que são válidos. Os produtos continuam visíveis no site em HTML normal.
- Para voltar a ter resultado aprimorado de produto: publicar preço real no site (ou ligar cada produto à página da loja com preço), e então recriar o `Product` com `offers`.
- index.html V2.12.8.

## V2.13 — Palavras-chave no texto (SEO)
- Não existe campo de palavras-chave que o Google use (a tag `meta keywords` é ignorada desde 2009). As palavras entram no texto visível.
- Topo da página: "mel com Inspeção Federal (S.I.F)", "derivados apícolas", "Maringá-PR".
- Produtos: subtítulo cita mel de laranjeira, silvestre, melato, abelha jataí, própolis e pólen apícola.
- Atacado: "fornecedor de mel no atacado, em Maringá-PR e em todo o Paraná".
- Texto alternativo das fotos dos méis com tamanho (igual ao que o JavaScript usa ao trocar de tamanho).
- Sem repetição forçada de palavras. index.html V2.13.

## V2.13.1 — Corrige erro 404 no console (Lighthouse)
- O marco de 2002 apontava para `assets/historia-1.jpg`, que não existe (ainda sem foto): gerava erro 404 no console e mostrava o quadro listrado "Foto de 2002".
- Agora o marco de 2002 não tem imagem nem quadro: o espaço fica vazio no computador (para manter a linha do tempo alinhada) e some no celular. Quando houver uma foto, basta voltar o bloco da foto e salvar como `historia-1.jpg`.
- index.html e style.css V2.13.1 (script.js segue V2.9).

## V2.13.2 — Número no endereço
- Endereço agora: "Estrada Zauna, km 2, (n° 1691) Gleba Ribeirão Sarandi · Maringá-PR · CEP 87047-773", em todo o site: index.html (contato, rodapé e dados estruturados), 404.html, política de privacidade e llms.txt.
- index.html, 404.html, politica-de-privacidade.html e llms.txt em V2.13.2.

## V2.14 — Botão flutuante do WhatsApp com os dois contatos
- Ao tocar no botão abre uma lista com **Douglas (44) 9 9892-2039** e **Vanderlei (44) 9 9816-1841**, nessa ordem, cada um com a mensagem pronta "Olá! Vim pelo site da Mel São José." Fecha tocando fora ou com Esc.
- Sem JavaScript, o botão continua abrindo direto o WhatsApp do Douglas.
- Cada contato tem um círculo com a inicial (V e D). Para colocar a mini foto depois: salvar `assets/contato-vanderlei.jpg` e `assets/contato-douglas.jpg` (quadradas, 120x120 px) e trocar a letra por `<img src="..." alt="Vanderlei" width="44" height="44">` dentro de `.zap-foto`. O CSS já está pronto.
- index.html, style.css e script.js em V2.14.

## V2.14.1 — Ordem dos contatos
- Na lista do botão do WhatsApp, Douglas aparece primeiro e Vanderlei depois. index.html V2.14.1.
