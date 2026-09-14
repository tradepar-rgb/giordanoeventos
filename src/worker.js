const SITE_CONTENT = {
  heroImage:
    "/hero-hospitality.png",
  portfolioImage:
    "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=82",
  teamImage:
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=82",
  galleryImages: [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=82",
    "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=1000&q=82",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1000&q=82",
  ],
  clients: ["Feiras", "Congressos", "Coffee break", "Catering", "Corporativo", "Experiencias"],
  services: [
    {
      title: "Recepcao e hospitalidade corporativa",
      text:
        "Equipes treinadas para receber convidados, orientar fluxos, apoiar credenciamento e manter a experiencia fluida durante todo o evento.",
    },
    {
      title: "Feiras, congressos e convencoes",
      text:
        "Planejamento de pontos de contato, suporte em estandes, organizacao de bastidores e acompanhamento de demandas do expositor.",
    },
    {
      title: "Coffee break e apoio de catering",
      text:
        "Apoio operacional para momentos de pausa, recepcao de convidados, reposicao, fluxo de sala e alinhamento com fornecedores de alimentos e bebidas.",
    },
    {
      title: "Coqueteis e lancamentos",
      text:
        "Apoio completo para lancamentos, encontros executivos, congressos, treinamentos, confraternizacoes e acoes institucionais.",
    },
    {
      title: "Curadoria de experiencia",
      text:
        "Desenho de jornadas, padrao de atendimento, fornecedores alinhados e uma presenca que valoriza a marca anfitria.",
    },
    {
      title: "Gestao de campo em todo o Brasil",
      text:
        "Briefing, escala, acompanhamento presencial e leitura de operacao para feiras, exposicoes e eventos empresariais que exigem pontualidade, postura e discricao.",
    },
  ],
  advantages: [
    ["20+", "anos de experiencia aproximada no mercado"],
    ["BR", "atuacao em feiras e exposicoes corporativas em todo o Brasil"],
    ["360", "visao de atendimento, bastidor, convidado e marca"],
  ],
  formats: [
    "Catering corporativo",
    "Coffee break corporativo",
    "Coquetel corporativo",
    "Feiras e congressos",
    "Recepcao VIP",
    "Confraternizacoes empresariais",
  ],
};

const brandName = (env) => env.SITE_NAME || "Giordano Eventos";
const baseUrl = (env) => (env.PUBLIC_BASE_URL || "https://giordanoeventos.com").replace(/\/$/, "");

const navItems = [
  ["/quem-somos", "Quem somos"],
  ["/servicos", "Servicos"],
  ["/portfolio", "Portfolio"],
  ["/clientes", "Clientes"],
  ["/equipe", "Nossa equipe"],
  ["/contato", "Contato"],
];

const pageShell = (env, page) => `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(page.title)} - ${escapeHtml(brandName(env))}</title>
  <meta name="description" content="${escapeAttr(page.description)}">
  <link rel="canonical" href="${escapeAttr(baseUrl(env) + page.path)}">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <style>${styles()}</style>
</head>
<body>
  <header class="site-header">
    <a class="brand" href="/" aria-label="Giordano Eventos">
      <span>G</span>
      <strong>Giordano Eventos</strong>
    </a>
    <nav aria-label="Navegacao principal">
      ${navItems.map(([href, label]) => `<a href="${href}"${page.path === href ? ' aria-current="page"' : ""}>${label}</a>`).join("")}
    </nav>
  </header>

  <main>
    ${page.body}
  </main>
  <footer class="site-footer">
    <div class="footer-brand">
      <a class="brand footer-logo" href="/" aria-label="Giordano Eventos">
        <span>G</span>
        <strong>Giordano Eventos</strong>
      </a>
      <p>Hospitalidade, recepcao, coffee break, apoio de catering e operacao para feiras, congressos e eventos corporativos.</p>
    </div>
    <div class="footer-column">
      <h2>Navegacao</h2>
      ${navItems.map(([href, label]) => `<a href="${href}">${label}</a>`).join("")}
    </div>
    <div class="footer-column">
      <h2>Contato</h2>
      <a href="mailto:contato@giordanoeventos.com">contato@giordanoeventos.com</a>
      <a href="tel:+5511000000000">+55 11 00000-0000</a>
      <span>Base em Sao Paulo. Atuacao em todo o Brasil.</span>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Giordano Eventos. Todos os direitos reservados.</span>
      <span>Excelencia em hospitalidade para feiras e exposicoes em todo o Brasil.</span>
    </div>
  </footer>
</body>
</html>`;

const pages = {
  "/": {
    path: "/",
    title: "Hospitalidade para feiras e eventos corporativos",
    description: "Giordano Eventos oferece hospitalidade, recepcao, coffee break, apoio de catering e operacao para feiras, exposicoes e eventos corporativos em todo o Brasil.",
    body: `
    <section class="hero" aria-label="Giordano Eventos">
      <img src="${SITE_CONTENT.heroImage}" alt="Recepcao elegante em evento corporativo">
      <div class="hero-overlay"></div>
      <div class="hero-copy">
        <p class="eyebrow">Feiras. Exposicoes. Eventos corporativos.</p>
        <h1>Excelencia em <em>hospitalidade</em> para feiras e exposicoes em todo o Brasil.</h1>
        <p>Ha aproximadamente duas decadas, apoiamos marcas, RHs, organizadores e equipes comerciais na criacao de experiencias presenciais com recepcao impecavel, presenca profissional e execucao consistente em diferentes cidades do pais.</p>
      </div>
      <aside class="hero-card">
        <p>Atuacao</p>
        <strong>Recepcao, credenciamento, coffee break, apoio a estandes, orientacao de publico e coordenacao operacional.</strong>
      </aside>
    </section>
    <section class="proof-strip" aria-label="Diferenciais Giordano Eventos">
      ${SITE_CONTENT.advantages.map(proofItem).join("")}
    </section>
    <section class="section market">
      <div class="section-heading">
        <p class="section-kicker">Competitividade nacional</p>
        <h2>Uma presenca mais completa para marcas que nao podem improvisar.</h2>
      </div>
      <div class="market-grid">
        <p>Feiras e exposicoes exigem fornecedores capazes de manter o mesmo padrao em ambientes diferentes, com montagem, fluxo, atendimento e bastidores acontecendo ao mesmo tempo. A Giordano Eventos atua com visual elegante, equipe preparada, operacao organizada e comunicacao objetiva para marcas que precisam receber bem em qualquer praca.</p>
        <div class="format-list">
          ${SITE_CONTENT.formats.map((format) => `<span>${escapeHtml(format)}</span>`).join("")}
        </div>
      </div>
    </section>
    <section class="feature reverse">
      <img src="${SITE_CONTENT.galleryImages[0]}" alt="Mesa de recepcao corporativa com alimentos e bebidas">
      <div>
        <p class="section-kicker">Cuidado em cada ponto</p>
        <h2>Do coffee break ao encerramento, a experiencia precisa parecer simples.</h2>
        <p>Por tras dessa simplicidade existe briefing, escala, orientacao da equipe, leitura de fluxo e atencao aos detalhes que fazem o convidado se sentir bem recebido.</p>
      </div>
    </section>`,
  },
  "/quem-somos": {
    path: "/quem-somos",
    title: "Quem somos",
    description: "Conheca a Giordano Eventos e sua atuacao em feiras, congressos e eventos corporativos.",
    body: `
    <section id="quem-somos" class="section about">
      <div>
        <p class="section-kicker">Quem somos</p>
        <h2>Presenca profissional para marcas que recebem bem.</h2>
      </div>
      <p>A Giordano Eventos atua em feiras, congressos e eventos corporativos com equipes preparadas para representar marcas com postura, clareza e cuidado. Nosso trabalho combina planejamento, treinamento, atendimento e acompanhamento de campo para que a experiencia do convidado aconteca com naturalidade.</p>
    </section>`,
  },
  "/servicos": {
    path: "/servicos",
    title: "Servicos",
    description: "Recepcao, hospitalidade, coffee break, catering corporativo, operacao para feiras e curadoria de experiencia para eventos em todo o Brasil.",
    body: `
    <section id="servicos" class="section services">
      <div class="section-heading">
        <p class="section-kicker">Servicos para todo o Brasil</p>
        <h2>Do primeiro contato ao encerramento do evento.</h2>
        <p>Estruturamos a jornada do convidado e apoiamos a operacao para que recepcao, coffee break, estandes, cerimonial e atendimento trabalhem com o mesmo padrao em feiras, exposicoes e eventos corporativos pelo pais.</p>
      </div>
      <div class="service-grid">
        ${SITE_CONTENT.services.map(serviceCard).join("")}
      </div>
      <div class="process-band">
        <div>
          <span>01</span>
          <strong>Briefing</strong>
          <p>Objetivos, perfil do publico, tom da marca e pontos criticos do evento.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Preparacao</strong>
          <p>Equipe, escala, orientacao, fornecedores, deslocamento e materiais de apoio.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Execucao</strong>
          <p>Presenca no campo, ajustes em tempo real e atendimento com postura.</p>
        </div>
      </div>
    </section>`,
  },
  "/portfolio": {
    path: "/portfolio",
    title: "Portfolio",
    description: "Projetos e formatos de atuacao da Giordano Eventos em feiras e encontros corporativos.",
    body: `
    <section id="portfolio" class="feature">
      <img src="${SITE_CONTENT.portfolioImage}" alt="Evento corporativo com equipe em atendimento">
      <div>
        <p class="section-kicker">Portfolio</p>
        <h2>Operacao discreta, elegante e orientada ao resultado.</h2>
        <p>Atuamos em formatos diversos: feiras de negocios, exposicoes, congressos, acoes promocionais, lancamentos, recepcoes VIP e encontros institucionais. Cada projeto recebe escala, briefing e padrao de atendimento proprios.</p>
      </div>
    </section>
    <section class="gallery-section">
      <div class="section-heading">
        <p class="section-kicker">Galeria</p>
        <h2>Ambientes preparados para receber bem.</h2>
      </div>
      <div class="gallery-grid">
        ${SITE_CONTENT.galleryImages.map((image, index) => `<figure>
          <img src="${image}" alt="Referencia visual de evento corporativo ${index + 1}">
          <figcaption>${escapeHtml(SITE_CONTENT.formats[index + 1] || "Evento corporativo")}</figcaption>
        </figure>`).join("")}
      </div>
    </section>`,
  },
  "/clientes": {
    path: "/clientes",
    title: "Clientes",
    description: "Experiencia da Giordano Eventos para diferentes contextos corporativos.",
    body: `
    <section id="clientes" class="section clients">
      <p class="section-kicker">Clientes</p>
      <h2>Experiencia para diferentes contextos corporativos.</h2>
      <div class="client-strip">
        ${SITE_CONTENT.clients.map((client) => `<span>${escapeHtml(client)}</span>`).join("")}
      </div>
    </section>`,
  },
  "/equipe": {
    path: "/equipe",
    title: "Nossa equipe",
    description: "Conheca a lideranca executiva da Giordano Eventos.",
    body: `
    <section id="equipe" class="team-section">
      <article class="profile-card">
        <div class="profile-copy">
          <p class="profile-index">01 - Lideranca executiva</p>
          <h2>Maria Ruth Giordano</h2>
          <h3>CCO - Chief Customer Officer</h3>
          <p class="profile-role">Diretora Executiva de Clientes</p>
          <p>A frente do relacionamento com clientes, Maria Ruth conduz cada projeto com proximidade, visao estrategica e atencao aos detalhes. Sua atuacao transforma necessidades em solucoes personalizadas, fortalece relacoes de confianca e mantem o padrao de hospitalidade da Giordano Eventos em todas as etapas.</p>
          <div class="profile-grid">
            <div>
              <span>Atuacao</span>
              <p>Experiencia do cliente, relacionamento e direcao estrategica.</p>
            </div>
            <div>
              <span>Experiencia</span>
              <p>Aproximadamente 20 anos no mercado de feiras e eventos.</p>
            </div>
            <div>
              <span>Especialidades</span>
              <p>Atendimento, retencao, hospitalidade e sucesso do cliente.</p>
            </div>
            <div>
              <span>Visao</span>
              <p>Organizacao, etica e relacionamento como base de experiencias memoraveis.</p>
            </div>
          </div>
        </div>
      </article>

      <article class="profile-card with-photo">
        <div class="profile-copy">
          <p class="profile-index">02 - Lideranca executiva</p>
          <h2>Roberta Mansur Sperandio</h2>
          <h3>CXO - Chief Experience Officer</h3>
          <p class="profile-role">Diretora Executiva de Experiencia do Cliente</p>
          <p>Roberta atua na construcao de experiencias consistentes em todos os pontos de contato da marca. Com olhar cuidadoso para a jornada do cliente, integra atendimento, operacao e percepcao de valor para que cada evento seja conduzido com fluidez, profissionalismo e excelencia.</p>
          <div class="profile-grid">
            <div>
              <span>Atuacao</span>
              <p>Experiencia do cliente, jornada da marca e qualidade operacional.</p>
            </div>
            <div>
              <span>Experiencia</span>
              <p>Gestao da experiencia em projetos corporativos e eventos.</p>
            </div>
            <div>
              <span>Especialidades</span>
              <p>Hospitalidade, percepcao de valor e excelencia no atendimento.</p>
            </div>
            <div>
              <span>Visao</span>
              <p>Experiencias bem conduzidas aproximam pessoas e fortalecem marcas.</p>
            </div>
          </div>
        </div>
        <figure class="profile-photo">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=700&q=82" alt="Imagem demonstrativa de lideranca executiva">
          <figcaption>Imagem demonstrativa</figcaption>
        </figure>
      </article>
    </section>`,
  },
  "/contato": {
    path: "/contato",
    title: "Contato",
    description: "Contato da Giordano Eventos.",
    body: `
    <section id="contato" class="contact">
      <div>
        <p class="section-kicker">Contato</p>
        <h2>Fale com a Giordano Eventos.</h2>
        <p>Entre em contato para falar com nossa equipe e conhecer melhor nossa atuacao em feiras, exposicoes, congressos e eventos corporativos em todo o Brasil.</p>
      </div>
      <address>
        <a href="mailto:contato@giordanoeventos.com">contato@giordanoeventos.com</a>
        <a href="tel:+5511000000000">+55 11 00000-0000</a>
        <span>Base em Sao Paulo. Atuacao nacional.</span>
      </address>
    </section>`,
  },
};

const adminShell = (env, error = "") => `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Admin - ${escapeHtml(brandName(env))}</title>
  <meta name="robots" content="noindex, nofollow">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <style>${styles()}${adminStyles()}</style>
</head>
<body>
  <main class="admin">
    <form class="admin-panel" method="post" action="/admin/login">
      <p class="section-kicker">Admin</p>
      <h1>Acesso simples</h1>
      <p>Entre para revisar as paginas publicadas e conferir o que ainda falta ajustar.</p>
      ${error ? `<p class="admin-error">${escapeHtml(error)}</p>` : ""}
      <label>Email
        <input name="email" type="email" autocomplete="username" required>
      </label>
      <label>Senha
        <input name="password" type="password" autocomplete="current-password" required>
      </label>
      <button class="button" type="submit">Entrar</button>
    </form>
  </main>
</body>
</html>`;

const adminDashboard = (env) => `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Admin - ${escapeHtml(brandName(env))}</title>
  <meta name="robots" content="noindex, nofollow">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <style>${styles()}${adminStyles()}</style>
</head>
<body>
  <main class="admin">
    <section class="admin-panel">
      <p class="section-kicker">Admin</p>
      <h1>Revisao do site</h1>
      <p>Acesso liberado. Use os links abaixo para revisar cada pagina recortada.</p>
      <div class="admin-links">
        ${[["/", "Home"], ...navItems].map(([href, label]) => `<a href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join("")}
      </div>
      <a class="button secondary-admin" href="/admin/logout">Sair</a>
    </section>
  </main>
</body>
</html>`;

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/admin/login" && request.method === "POST") {
      const form = await request.formData();
      const email = String(form.get("email") || "").trim().toLowerCase();
      const password = String(form.get("password") || "");
      const expectedEmail = String(env.ADMIN_EMAIL || "").trim().toLowerCase();
      const expectedPassword = String(env.ADMIN_PASSWORD || "");
      if (email === expectedEmail && password === expectedPassword) {
        return new Response(null, {
          status: 302,
          headers: {
            "location": "/admin",
            "set-cookie": "giordano_admin=ok; Path=/admin; HttpOnly; Secure; SameSite=Lax; Max-Age=86400",
          },
        });
      }
      return html(adminShell(env, "Email ou senha invalidos."), 401);
    }

    if (url.pathname === "/admin/logout") {
      return new Response(null, {
        status: 302,
        headers: {
          "location": "/admin",
          "set-cookie": "giordano_admin=; Path=/admin; HttpOnly; Secure; SameSite=Lax; Max-Age=0",
        },
      });
    }

    if (url.pathname === "/admin") {
      const loggedIn = request.headers.get("cookie")?.includes("giordano_admin=ok");
      return html(loggedIn ? adminDashboard(env) : adminShell(env));
    }

    const normalizedPath = url.pathname === "/index.html" ? "/" : url.pathname.replace(/\/$/, "") || "/";
    if (pages[normalizedPath]) {
      return html(pageShell(env, pages[normalizedPath]));
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return html(pageShell(env, pages["/"]), 404);
  },
};

function serviceCard(service) {
  return `<article class="service-card">
    <h3>${escapeHtml(service.title)}</h3>
    <p>${escapeHtml(service.text)}</p>
  </article>`;
}

function proofItem(item) {
  return `<article>
    <strong>${escapeHtml(item[0])}</strong>
    <span>${escapeHtml(item[1])}</span>
  </article>`;
}

function html(body, status = 200) {
  return new Response(body, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value = "") {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function styles() {
  return `
    :root {
      color-scheme: light;
      --ink: #151816;
      --soft-ink: #323a32;
      --cream: #f3f1eb;
      --paper: #fbfaf6;
      --line: #dad4c6;
      --gold: #d9bd79;
      --green: #445640;
      --deep: #0e120f;
    }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    html, body { max-width: 100%; overflow-x: hidden; }
    body {
      margin: 0;
      color: var(--ink);
      background: var(--cream);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      line-height: 1.55;
    }
    a { color: inherit; }
    img { display: block; max-width: 100%; }
    .site-header {
      position: sticky;
      top: 0;
      z-index: 20;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      min-height: 76px;
      padding: 13px clamp(20px, 6vw, 86px);
      border-bottom: 1px solid var(--line);
      background: rgba(251, 250, 246, .94);
      backdrop-filter: blur(16px);
    }
    .brand {
      display: inline-flex;
      align-items: center;
      gap: 14px;
      text-decoration: none;
      white-space: nowrap;
    }
    .brand span {
      display: grid;
      place-items: center;
      width: 40px;
      height: 40px;
      border: 1px solid #c9ad65;
      color: #b89348;
      background: var(--paper);
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.45rem;
      line-height: 1;
    }
    .brand strong {
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.28rem;
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: clamp(14px, 2vw, 26px);
      flex-wrap: wrap;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(.94rem, 1.1vw, 1rem);
      font-weight: 700;
    }
    nav a { text-decoration: none; }
    nav a[aria-current="page"] { color: var(--green); }
    .hero {
      position: relative;
      min-height: min(700px, calc(100vh - 76px));
      overflow: hidden;
      color: #fff;
      background: var(--deep);
    }
    .hero > img {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 64% center;
      filter: saturate(.82) contrast(1.05);
    }
    .hero-overlay {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(90deg, rgba(8, 10, 8, .96) 0%, rgba(8, 10, 8, .78) 34%, rgba(8, 10, 8, .22) 72%, rgba(8, 10, 8, .1) 100%),
        linear-gradient(0deg, rgba(8, 10, 8, .5), rgba(8, 10, 8, .02));
    }
    .hero-copy {
      position: relative;
      z-index: 1;
      max-width: 620px;
      padding: clamp(46px, 6vw, 74px) clamp(22px, 7vw, 92px);
    }
    .eyebrow, .section-kicker {
      margin: 0 0 18px;
      color: var(--gold);
      font-size: .78rem;
      font-weight: 900;
      letter-spacing: .19em;
      text-transform: uppercase;
    }
    h1, h2, h3, p { margin-top: 0; }
    h1 {
      margin-bottom: 26px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(2.85rem, 5.9vw, 5.25rem);
      line-height: .95;
      font-weight: 800;
      letter-spacing: 0;
    }
    h1 em {
      color: var(--gold);
      font-style: italic;
      font-weight: 500;
    }
    h2 {
      margin-bottom: 22px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(2rem, 4.5vw, 3.9rem);
      line-height: 1;
      letter-spacing: 0;
    }
    h3 {
      margin-bottom: 16px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.45rem;
      line-height: 1.08;
    }
    .hero-copy p {
      max-width: 560px;
      color: rgba(255, 255, 255, .82);
      font-size: 1.08rem;
    }
    .hero-card {
      position: absolute;
      right: clamp(22px, 4vw, 64px);
      bottom: clamp(18px, 4vw, 42px);
      z-index: 2;
      width: min(500px, calc(100% - 44px));
      padding: 24px 28px;
      border: 1px solid rgba(255, 255, 255, .22);
      background: rgba(11, 14, 11, .62);
      backdrop-filter: blur(10px);
    }
    .hero-card p {
      margin-bottom: 10px;
      color: var(--gold);
      font-size: .78rem;
      font-weight: 900;
      letter-spacing: .16em;
      text-transform: uppercase;
    }
    .hero-card strong {
      display: block;
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(1.25rem, 1.9vw, 1.75rem);
      line-height: 1.16;
    }
    .proof-strip {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      border-top: 1px solid rgba(255, 255, 255, .12);
      border-bottom: 1px solid var(--line);
      background: #11150f;
      color: #f7f2e8;
    }
    .proof-strip article {
      min-height: 138px;
      display: grid;
      align-content: center;
      gap: 8px;
      padding: 24px clamp(22px, 5vw, 86px);
      border-right: 1px solid rgba(255, 255, 255, .12);
    }
    .proof-strip article:last-child { border-right: 0; }
    .proof-strip strong {
      color: var(--gold);
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(2rem, 4vw, 3.2rem);
      line-height: 1;
    }
    .proof-strip span {
      max-width: 280px;
      color: rgba(247, 242, 232, .72);
      font-size: .95rem;
    }
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 52px;
      padding: 0 24px;
      border: 1px solid var(--green);
      color: #fff;
      background: var(--green);
      font-weight: 850;
      text-decoration: none;
    }
    .button.light {
      border-color: rgba(255, 255, 255, .72);
      color: var(--deep);
      background: #fff;
    }
    .section {
      padding: clamp(58px, 8vw, 104px) clamp(22px, 7vw, 92px);
      border-top: 1px solid var(--line);
      background: var(--cream);
    }
    .about {
      display: grid;
      grid-template-columns: minmax(0, .9fr) minmax(0, 1.05fr);
      gap: clamp(34px, 6vw, 90px);
      align-items: start;
    }
    .about > p, .feature p, .contact p {
      color: #555d54;
      font-size: clamp(1.08rem, 1.5vw, 1.28rem);
    }
    .section-heading {
      max-width: 860px;
      margin-bottom: 34px;
    }
    .section-heading > p:not(.section-kicker) {
      max-width: 760px;
      color: #555d54;
      font-size: 1.08rem;
    }
    .market-grid {
      display: grid;
      grid-template-columns: minmax(0, .95fr) minmax(320px, .75fr);
      gap: clamp(34px, 6vw, 88px);
      align-items: start;
    }
    .market-grid > p {
      max-width: 760px;
      color: #555d54;
      font-size: clamp(1.08rem, 1.5vw, 1.25rem);
    }
    .format-list {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      border-top: 1px solid var(--line);
      border-left: 1px solid var(--line);
      background: var(--paper);
    }
    .format-list span {
      min-height: 72px;
      display: flex;
      align-items: center;
      padding: 18px;
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      color: #1f3c32;
      font-family: Georgia, "Times New Roman", serif;
      font-weight: 800;
    }
    .service-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      border-top: 1px solid var(--line);
      border-left: 1px solid var(--line);
    }
    .service-card {
      min-height: 310px;
      padding: 30px;
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
      background: var(--paper);
    }
    .service-card p { color: #60675f; }
    .process-band {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      margin-top: 34px;
      border-top: 1px solid var(--line);
      border-left: 1px solid var(--line);
      background: var(--paper);
    }
    .process-band div {
      padding: 26px;
      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);
    }
    .process-band span {
      display: block;
      margin-bottom: 12px;
      color: var(--gold);
      font-size: .78rem;
      font-weight: 900;
      letter-spacing: .16em;
    }
    .process-band strong {
      display: block;
      margin-bottom: 8px;
      font-family: Georgia, "Times New Roman", serif;
      font-size: 1.4rem;
      line-height: 1.05;
    }
    .process-band p {
      margin: 0;
      color: #60675f;
    }
    .feature {
      display: grid;
      grid-template-columns: minmax(0, 1.05fr) minmax(0, .95fr);
      min-height: 560px;
      border-top: 1px solid var(--line);
      background: var(--paper);
    }
    .feature.reverse {
      grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
      background: var(--cream);
    }
    .feature.reverse img { order: 2; }
    .feature img {
      width: 100%;
      height: 100%;
      min-height: 460px;
      object-fit: cover;
      filter: saturate(.82) contrast(1.03);
    }
    .feature > div {
      align-self: center;
      padding: clamp(42px, 7vw, 92px);
    }
    .gallery-section {
      padding: clamp(58px, 8vw, 104px) clamp(22px, 7vw, 92px);
      border-top: 1px solid var(--line);
      background: var(--cream);
    }
    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 20px;
    }
    .gallery-grid figure {
      position: relative;
      min-height: 360px;
      margin: 0;
      overflow: hidden;
      background: var(--deep);
    }
    .gallery-grid img {
      width: 100%;
      height: 100%;
      min-height: 360px;
      object-fit: cover;
      filter: saturate(.82) contrast(1.03);
      transition: transform .3s ease;
    }
    .gallery-grid figure:hover img { transform: scale(1.035); }
    .gallery-grid figcaption {
      position: absolute;
      left: 16px;
      bottom: 16px;
      padding: 9px 12px;
      color: #fff;
      background: rgba(14, 18, 15, .78);
      font-size: .78rem;
      font-weight: 850;
      letter-spacing: .08em;
      text-transform: uppercase;
    }
    .team-section {
      padding: clamp(42px, 6vw, 76px) clamp(22px, 6.5vw, 86px);
      border-top: 1px solid var(--line);
      background: var(--paper);
    }
    .profile-card {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 220px;
      gap: clamp(30px, 6vw, 90px);
      align-items: start;
      padding: clamp(34px, 5vw, 62px) 0;
      border-top: 1px solid var(--line);
    }
    .profile-card:first-child { border-top: 0; }
    .profile-card:not(.with-photo) {
      grid-template-columns: minmax(0, 1fr);
    }
    .profile-copy {
      max-width: 920px;
    }
    .profile-index {
      margin-bottom: 16px;
      color: #1c473b;
      font-size: .78rem;
      font-weight: 900;
      letter-spacing: .22em;
      text-transform: uppercase;
    }
    .profile-copy h2 {
      margin-bottom: 10px;
      font-size: clamp(2rem, 3.8vw, 3.2rem);
      line-height: 1;
    }
    .profile-copy h3 {
      margin-bottom: 2px;
      color: #1f3c32;
      font-family: Inter, ui-sans-serif, system-ui, sans-serif;
      font-size: 1.02rem;
      font-weight: 850;
    }
    .profile-role {
      margin-bottom: 28px;
      color: #425049;
      font-size: .92rem;
    }
    .profile-copy > p:not(.profile-index):not(.profile-role) {
      max-width: 970px;
      color: #111614;
      font-size: 1.04rem;
    }
    .profile-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 26px clamp(30px, 8vw, 110px);
      margin-top: 30px;
    }
    .profile-grid span {
      display: block;
      margin-bottom: 8px;
      color: #b89348;
      font-size: .72rem;
      font-weight: 900;
      letter-spacing: .16em;
      text-transform: uppercase;
    }
    .profile-grid p {
      margin: 0;
      color: #5f675f;
      font-size: 1rem;
    }
    .profile-photo {
      position: relative;
      margin: 0;
      justify-self: end;
      width: 190px;
      box-shadow: 0 22px 44px rgba(14, 18, 15, .16);
    }
    .profile-photo img {
      width: 100%;
      aspect-ratio: 3 / 4.2;
      object-fit: cover;
      filter: saturate(.86);
    }
    .profile-photo figcaption {
      position: absolute;
      right: 10px;
      bottom: 8px;
      padding: 8px 12px;
      color: #fff;
      background: rgba(14, 18, 15, .72);
      font-size: .62rem;
      font-weight: 850;
      letter-spacing: .06em;
      text-transform: uppercase;
    }
    .clients {
      color: #fff;
      background: var(--deep);
    }
    .clients h2 { max-width: 880px; }
    .client-strip {
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      margin-top: 34px;
      border-top: 1px solid rgba(255,255,255,.18);
      border-left: 1px solid rgba(255,255,255,.18);
    }
    .client-strip span {
      min-height: 130px;
      display: grid;
      place-items: center;
      border-right: 1px solid rgba(255,255,255,.18);
      border-bottom: 1px solid rgba(255,255,255,.18);
      font-family: Georgia, "Times New Roman", serif;
      font-size: clamp(1.25rem, 2vw, 1.8rem);
    }
    .contact {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(280px, 430px);
      gap: 42px;
      padding: clamp(58px, 8vw, 104px) clamp(22px, 7vw, 92px);
      color: #fff;
      background: var(--green);
    }
    .contact p { color: rgba(255, 255, 255, .78); }
    address {
      display: grid;
      align-content: start;
      gap: 16px;
      font-style: normal;
      font-size: 1.08rem;
    }
    address a, address span {
      padding-bottom: 16px;
      border-bottom: 1px solid rgba(255, 255, 255, .22);
      color: #fff;
      text-decoration: none;
    }
    .site-footer {
      display: grid;
      grid-template-columns: minmax(0, 1.2fr) minmax(180px, .45fr) minmax(220px, .55fr);
      gap: clamp(30px, 5vw, 70px);
      padding: clamp(46px, 7vw, 76px) clamp(22px, 7vw, 92px) 28px;
      color: #f7f2e8;
      background: #11150f;
      border-top: 1px solid rgba(255, 255, 255, .12);
    }
    .footer-logo {
      margin-bottom: 18px;
      color: #f7f2e8;
    }
    .footer-brand p {
      max-width: 500px;
      color: rgba(247, 242, 232, .72);
      font-size: 1rem;
    }
    .footer-column {
      display: grid;
      align-content: start;
      gap: 10px;
    }
    .footer-column h2 {
      margin: 0 0 8px;
      color: var(--gold);
      font-family: Inter, ui-sans-serif, system-ui, sans-serif;
      font-size: .78rem;
      font-weight: 900;
      letter-spacing: .16em;
      text-transform: uppercase;
    }
    .footer-column a, .footer-column span {
      color: rgba(247, 242, 232, .78);
      text-decoration: none;
    }
    .footer-bottom {
      grid-column: 1 / -1;
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
      padding-top: 24px;
      border-top: 1px solid rgba(255, 255, 255, .12);
      color: rgba(247, 242, 232, .58);
      font-size: .9rem;
    }
    @media (max-width: 1060px) {
      .site-header { align-items: flex-start; flex-direction: column; gap: 14px; }
      nav { justify-content: flex-start; }
      .hero { min-height: 700px; }
      .hero-copy { max-width: 590px; }
      .site-footer { grid-template-columns: 1fr 1fr; }
      .footer-brand { grid-column: 1 / -1; }
      .service-grid, .client-strip, .gallery-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .market-grid { grid-template-columns: 1fr; }
    }
    @media (max-width: 780px) {
      .site-header {
        position: sticky;
        gap: 12px;
        padding: 12px 18px;
      }
      .brand span { width: 36px; height: 36px; font-size: 1.25rem; }
      .brand strong { font-size: 1.12rem; }
      nav {
        width: calc(100vw - 36px);
        flex-wrap: nowrap;
        gap: 18px;
        overflow-x: auto;
        padding-bottom: 4px;
        white-space: nowrap;
        scrollbar-width: none;
      }
      nav::-webkit-scrollbar { display: none; }
      .hero { min-height: auto; display: grid; }
      .hero > img {
        position: absolute;
        object-position: 70% center;
      }
      .hero-overlay {
        background:
          linear-gradient(90deg, rgba(8, 10, 8, .94) 0%, rgba(8, 10, 8, .78) 52%, rgba(8, 10, 8, .36) 100%),
          linear-gradient(0deg, rgba(8, 10, 8, .7), rgba(8, 10, 8, .04));
      }
      .hero-copy {
        max-width: 100%;
        padding: 44px 22px 24px;
      }
      .hero-card {
        position: relative;
        right: auto;
        bottom: auto;
        width: auto;
        margin: 0 22px 34px;
        padding: 20px;
      }
      .about, .feature, .feature.reverse, .contact { grid-template-columns: 1fr; }
      .site-footer { grid-template-columns: 1fr; }
      .feature.reverse img { order: 0; }
      .feature { min-height: auto; }
      .feature img { min-height: 300px; max-height: 440px; }
      .feature > div { padding: 42px 22px 52px; }
      .profile-card, .profile-grid { grid-template-columns: 1fr; }
      .profile-photo { justify-self: start; }
      .proof-strip, .service-grid, .client-strip, .process-band, .gallery-grid { grid-template-columns: 1fr; }
      .proof-strip article { min-height: auto; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.12); }
      .format-list { grid-template-columns: 1fr; }
    }
    @media (max-width: 560px) {
      .site-header { min-height: auto; }
      nav { gap: 16px; font-size: .92rem; }
      .eyebrow, .section-kicker, .profile-index { letter-spacing: .14em; }
      h1 { font-size: clamp(2.38rem, 11.5vw, 3.45rem); line-height: 1; }
      h2 { font-size: clamp(2.05rem, 10vw, 3.05rem); }
      h3 { font-size: 1.22rem; }
      .hero-copy { padding-top: 38px; }
      .hero-copy p { font-size: 1rem; }
      .hero-card strong { font-size: 1.25rem; }
      .section, .team-section, .contact { padding-left: 20px; padding-right: 20px; }
      .service-card { min-height: auto; padding: 24px; }
      .process-band div { padding: 22px; }
      .gallery-section { padding-left: 20px; padding-right: 20px; }
      .gallery-grid figure, .gallery-grid img { min-height: 280px; }
      .profile-copy h2 { font-size: clamp(2rem, 10vw, 2.75rem); }
      .profile-copy > p:not(.profile-index):not(.profile-role) { font-size: 1rem; }
      .profile-photo { width: min(220px, 82vw); }
      .site-footer { padding-left: 20px; padding-right: 20px; }
      .footer-bottom { display: grid; }
    }
  `;
}

function adminStyles() {
  return `
    .admin {
      min-height: 100vh;
      padding: clamp(28px, 6vw, 74px);
      background: var(--deep);
    }
    .admin-panel {
      max-width: 760px;
      margin: 0 auto;
      padding: clamp(26px, 5vw, 50px);
      background: var(--paper);
    }
    .admin-panel h1 {
      font-size: clamp(2.4rem, 5vw, 4rem);
    }
    .admin-panel label {
      display: grid;
      gap: 8px;
      margin: 18px 0;
      color: var(--soft-ink);
      font-weight: 800;
    }
    .admin-panel input {
      width: 100%;
      min-height: 48px;
      border: 1px solid var(--line);
      padding: 10px 12px;
      background: #fff;
      color: var(--ink);
      font: inherit;
    }
    .admin-error {
      padding: 12px 14px;
      color: #7f1d1d;
      background: #fee2e2;
      border: 1px solid #fecaca;
    }
    .admin-links {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      margin: 26px 0;
    }
    .admin-links a {
      padding: 14px 16px;
      color: var(--ink);
      background: #fff;
      border: 1px solid var(--line);
      text-decoration: none;
      font-weight: 800;
    }
    .secondary-admin {
      color: var(--green);
      background: transparent;
    }
    @media (max-width: 560px) {
      .admin-links { grid-template-columns: 1fr; }
    }
  `;
}
