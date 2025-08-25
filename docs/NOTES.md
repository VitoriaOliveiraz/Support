

# 🧭 Entenda a estrutura do projeto (explicação para leigos)

> pense no projeto como uma “caixa de ferramentas” organizada em **gavetas** (pastas). cada gaveta guarda um tipo de coisa: páginas, estilos, códigos e dados. abaixo, o que tem em cada lugar e por que existe.

## Visão geral

```
pixel-guide/
├─ public/                # arquivos que o navegador enxerga direto
│  ├─ index.html          # a página do site
│  └─ assets/             # imagens, ícones, fontes (arquivos estáticos)
│
├─ src/                   # o "motor" do site (código de verdade)
│  ├─ css/                # visual (cores, tamanhos, botões, etc.)
│  ├─ js/                 # comportamento (abas, busca, modal, etc.)
│  └─ data/               # conteúdo (listas de métodos e desafios)
│
├─ docs/                  # anotações técnicas (para quem mantém o projeto)
├─ tests/                 # futuro: testes automáticos
└─ README.md              # este arquivo que você está lendo
```

---

## 🖥️ `public/` — o que o navegador vê diretamente

### `public/index.html` (a página)

* **O que é:** a “folha” que o navegador abre.
* **O que faz:** monta a estrutura básica da página (cabeçalho, navegação por abas, seções vazias onde o conteúdo aparecerá).
* **Como se conecta ao resto:**

  * carrega as **fontes do Google** (tipos de letra);
  * puxa o **CSS principal** (`src/css/styles.css`) para o visual;
  * puxa o **JavaScript principal** (`src/js/main.js`) para ligar as funções.
* **Quando você abre no navegador:** ele exibe a página, e o JavaScript do `main.js` busca os dados em `src/data/…` e **preenche as seções automaticamente**.

### `public/assets/`

* **O que é:** uma pasta para **arquivos estáticos** (imagens, ícones, fontes baixadas).
* **Exemplos:** `logo.png`, `favicon.ico`, `minha-fonte.ttf`.
* **Dica:** se você colocar uma imagem aqui, pode usar em qualquer lugar do site com o caminho `./assets/minha-imagem.png`.

---

## ⚙️ `src/` — o motor do site (código)

### 🎨 `src/css/` — aparência/visual

* **`base.css`**

  * **O que é:** regras base do site.
  * **O que faz:** define **cores**, **tamanhos**, **fontes** e um “reset” para padronizar o visual em todos os navegadores.
  * **Quando mexer:** quer mudar **cor do tema**, **cor do destaque**, **fonte padrão**? É aqui.

* **`components.css`**

  * **O que é:** “Lego” de estilos prontos.
  * **O que faz:** pinta **botões**, **cards**, **abas**, **caixa de busca**, **blocos de código** etc.
  * **Quando mexer:** quer um botão mais arredondado, um card com outra borda? É aqui.

* **`styles.css`**

  * **O que é:** a **porta de entrada** dos estilos.
  * **O que faz:** apenas **importa** `base.css` e `components.css` e pode ter ajustes gerais.
  * **Quando mexer:** quer um ajuste rápido de visual no projeto todo? Pode colocar aqui.

---

### 🧠 `src/js/` — comportamento/funcionalidades

> cada arquivo faz uma coisa específica; o **`main.js`** junta tudo e liga quando a página abre.

* **`utils.js` (utilidades)**

  * **O que faz:** guarda funções genéricas usadas em vários lugares (ex.: selecionar elementos da página, salvar/ler no armazenamento do navegador, “esperar parar de digitar” etc).
  * **Exemplos práticos:** salvar a aba aberta, limitar quantas vezes um evento roda.

* **`tabs.js` (abas de navegação)**

  * **O que faz:** controla qual aba está ativa (Arrays, Strings, etc).
  * **Como usa:** ao clicar numa aba, ele **esconde** as outras seções e **mostra** a escolhida. Também **lembra** a última aba quando você recarrega a página.

* **`search.js` (busca global)**

  * **O que faz:** filtra métodos e desafios conforme você digita; também tem botões de **“Expandir/Recolher”** exemplos.
  * **Extra:** realça (highlight) o termo buscado dentro dos textos.

* **`ui.js` (detalhes da interface)**

  * **O que faz:** botão “voltar ao topo”, **barra de progresso** do scroll, e o **troca-tema** (claro/escuro).
  * **Como usa:** você clica em “Tema” e ele guarda sua preferência para a próxima visita.

* **`modal.js` (adicionar método rápido)**

  * **O que faz:** abre uma janelinha (modal) que permite **criar um novo card** de método e **injetar** na seção escolhida.
  * **Para que serve:** adicionar exemplos **sem editar o código manualmente**.

* **`render.js` (montagem do conteúdo na tela)**

  * **O que faz:** pega os **dados** de `src/data/…` e **constrói** os cards de métodos e os desafios na página.
  * **Pense como:** o “garçom” que traz os pratos (dados) e arruma a mesa (HTML).

* **`main.js` (orquestrador)**

  * **O que faz:** é o **ponto de partida**. Importa todos os arquivos acima e **inicializa** cada parte quando a página termina de carregar.
  * **Sem ele, nada “liga”.**

---

### 🗂️ `src/data/` — conteúdo (dados do site)

* **`methods.js`**

  * **O que é:** uma **lista** (array) com todos os **métodos JavaScript** que aparecem no guia (nome, descrição, tags e **código de exemplo**).
  * **Como usar:** para **adicionar um novo método**, basta incluir mais um item na lista. Não precisa mexer no HTML: o `render.js` já monta o card.

* **`challenges.js`**

  * **O que é:** uma lista com os **desafios** (título, nível de dificuldade, enunciado, código inicial e solução).
  * **Como usar:** para **criar um novo desafio**, adicione um item aqui. O `render.js` cuidará de exibir no site.

> **Resumo:** `src/data/` separa **conteúdo** da **lógica**. Assim fica fácil crescer (até trocar por uma API de verdade no futuro).

---

## 📝 `docs/` — notas para quem mantém o projeto

* **`docs/NOTES.md`**

  * **O que é:** um caderno de anotações.
  * **O que colocar:** decisões de arquitetura, “por que fizemos assim?”, passos para migrar para monorepo, ideias de melhoria.

---

## ✅ `tests/` — (opcional, para o futuro)

* **Para que serve:** guardar **testes automáticos** (ex.: testar se funções de `utils.js` funcionam certo).
* **Ferramentas comuns:** Jest, Vitest.
* **Se não for usar agora:** pode ignorar — a pasta existe para facilitar no futuro.

---

## 🔗 Como tudo conversa (passo a passo)

1. Você **abre** `public/index.html` no navegador.
2. O HTML **puxa o visual** de `src/css/styles.css`.
3. O HTML **puxa o código** de `src/js/main.js`.
4. O `main.js` **liga**: abas (`tabs.js`), busca (`search.js`), interface (`ui.js`), modal (`modal.js`)…
5. O `render.js` lê os **dados** (`src/data/methods.js` e `src/data/challenges.js`) e **cria** os cards na página.
6. Resultado: a página aparece bonitinha, com abas, busca, exemplos e desafios — tudo montado **a partir dos dados**.

---

## 🔧 “Quero mudar X, onde mexo?”

* **Cor, tipografia, bordas:** `src/css/base.css` (cores) e `src/css/components.css` (componentes).
* **Adicionar um método novo:** edite `src/data/methods.js` **ou** use o botão “＋” (modal).
* **Adicionar um desafio:** edite `src/data/challenges.js`.
* **Alterar comportamento das abas:** `src/js/tabs.js`.
* **Ajustar a busca:** `src/js/search.js`.
* **Trocar tema/UX do topo/progresso:** `src/js/ui.js`.
* **Criar mais interações de UI:** um novo arquivo em `src/js/` e importe no `main.js`.

---

## 🧱 Por que essa organização é boa?

* **Fácil de entender:** cada coisa no seu lugar (página, visual, comportamento e dados).
* **Fácil de crescer:** se o projeto virar um app maior (Vite, React, monorepo), a base já está preparada.
* **Sem duplicação:** você edita o **dado** e a interface já reflete, sem mexer no HTML.

---