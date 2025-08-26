export const MEGA_PACK = [
  {
    section: "arrays",
    name: ".push(novoItem)",
    badge: "Adicionar",
    desc: "Adiciona um novo item no final do array e retorna o novo tamanho total do array.",
    explanation:
      "O método push() é como colocar um novo item na última posição de uma fila. Ele modifica o array original.",
    tags: "arrays adicionar push pilha stack fim",
    code: `// Exemplo prático: adicionando itens ao carrinho de compras
const itensDoCarrinho = ["mouse óptico", "teclado mecânico"];
console.log("Carrinho antes:", itensDoCarrinho); // ["mouse óptico", "teclado mecânico"]

const novoTamanho = itensDoCarrinho.push("monitor 24\"");
console.log("Novo tamanho:", novoTamanho); // 3
console.log("Carrinho depois:", itensDoCarrinho); // ["mouse óptico", "teclado mecânico", "monitor 24\""]`,
  },
  {
    section: "arrays",
    name: ".pop()",
    badge: "Remover",
    desc: "Remove e retorna o último item do array, diminuindo o tamanho em 1.",
    explanation:
      "O método pop() é como tirar o último item de uma pilha. Ele modifica o array original e te dá o item removido.",
    tags: "arrays remover pop fim undo pilha stack",
    code: `// Exemplo: processando pedidos em ordem LIFO (último a entrar, primeiro a sair)
const filaDeAtendimento = ["pedido-101", "pedido-102", "pedido-103"];
console.log("Fila antes:", filaDeAtendimento);

const ultimoPedidoAtendido = filaDeAtendimento.pop();
console.log("Pedido atendido:", ultimoPedidoAtendido); // "pedido-103"
console.log("Fila depois:", filaDeAtendimento); // ["pedido-101", "pedido-102"]`,
  },
  {
    section: "arrays",
    name: ".unshift(item)",
    badge: "Adicionar",
    desc: "Adiciona um novo item no início do array e retorna o novo tamanho total.",
    explanation:
      "O método unshift() é como furar a fila - coloca o novo item na primeira posição. Todos os outros itens são empurrados para frente.",
    tags: "arrays fila fifo unshift inicio",
    code: `// Exemplo: adicionando prioridade alta no início da fila
const filaDeProcessamento = ["tarefa-B", "tarefa-C"];
console.log("Fila antes:", filaDeProcessamento);

const novoTamanho = filaDeProcessamento.unshift("tarefa-A-URGENTE");
console.log("Novo tamanho:", novoTamanho); // 3
console.log("Fila depois:", filaDeProcessamento); // ["tarefa-A-URGENTE", "tarefa-B", "tarefa-C"]`,
  },
  {
    section: "arrays",
    name: ".shift()",
    badge: "Remover",
    desc: "Remove e retorna o primeiro item do array, movendo todos os outros para trás.",
    explanation:
      "O método shift() é como atender o primeiro da fila. Remove o primeiro item e todos os outros avançam uma posição.",
    tags: "arrays shift remover inicio fifo",
    code: `// Exemplo: processando fila de atendimento FIFO (primeiro a entrar, primeiro a sair)
const filaAtendimento = ["cliente-A", "cliente-B", "cliente-C"];
console.log("Fila antes:", filaAtendimento);

const proximoCliente = filaAtendimento.shift();
console.log("Atendendo:", proximoCliente); // "cliente-A"
console.log("Fila depois:", filaAtendimento); // ["cliente-B", "cliente-C"]`,
  },
  {
    section: "arrays",
    name: ".slice(inicio, fim)",
    badge: "Cópia",
    desc: "Cria uma cópia de uma parte do array sem modificar o array original.",
    explanation:
      "O slice é como tirar uma fatia de bolo - você pega um pedaço mas o bolo original continua intacto. O índice final não é incluído.",
    tags: "arrays slice copia imutavel",
    code: `// Exemplo: pegando apenas alguns produtos para promoção
const todosProdutos = ["notebook", "mouse", "teclado", "monitor", "impressora"];
console.log("Todos os produtos:", todosProdutos);

// Pega do índice 1 até 3 (não inclui o 3)
const produtosPromocao = todosProdutos.slice(1, 4);
console.log("Em promoção:", produtosPromocao); // ["mouse", "teclado", "monitor"]
console.log("Original não mudou:", todosProdutos); // continua igual`,
  },
  {
    section: "arrays",
    name: ".splice(indice, quantidade, ...novosItens)",
    badge: "Editar",
    desc: "Remove/insere itens em qualquer posição do array, modificando o array original.",
    explanation:
      "O splice é como um canivete suíço para arrays - pode cortar, inserir e substituir tudo de uma vez. Muito poderoso!",
    tags: "arrays splice editar mutavel",
    code: `// Exemplo: editando lista de tarefas
const tarefas = ["acordar", "escovar dentes", "trabalhar", "dormir"];
console.log("Antes:", tarefas);

// No índice 2, remove 1 item e adiciona 2 novos
tarefas.splice(2, 1, "almoçar", "trabalhar");
console.log("Depois:", tarefas); // ["acordar", "escovar dentes", "almoçar", "trabalhar", "dormir"]

// Só remover: no índice 1, remove 2 itens
// tarefas.splice(1, 2); // removeria "escovar dentes" e "almoçar"`,
  },
  {
    section: "arrays",
    name: ".concat(...arrays)",
    badge: "Juntar",
    desc: "Junta vários arrays ou itens criando um novo array sem modificar os originais.",
    explanation:
      "O concat é como juntar várias listas em uma só, mas mantendo as listas originais intactas.",
    tags: "arrays concat juntar imutavel",
    code: `// Exemplo: juntando diferentes categorias de produtos
const eletronicos = ["notebook", "mouse"];
const livros = ["JavaScript", "Python"];
const roupas = ["camiseta"];

const todosCatalogo = eletronicos.concat(livros, roupas, "item avulso");
console.log("Catálogo completo:", todosCatalogo);
// ["notebook", "mouse", "JavaScript", "Python", "camiseta", "item avulso"]

console.log("Eletrônicos originais:", eletronicos); // continuam iguais`,
  },
  {
    section: "arrays",
    name: ".indexOf() / .lastIndexOf()",
    badge: "Buscar",
    desc: "Encontra a posição (índice) de um item no array. Retorna -1 se não encontrar.",
    explanation:
      "É como procurar onde está um item específico na sua lista. indexOf busca do início, lastIndexOf busca do final.",
    tags: "arrays indexof buscar posicao",
    code: `// Exemplo: encontrando posição de um produto
const estoque = ["mouse", "teclado", "mouse", "monitor"];
console.log("Estoque:", estoque);

const primeiraMouse = estoque.indexOf("mouse");
console.log("Primeira posição do mouse:", primeiraMouse); // 0

const ultimaMouse = estoque.lastIndexOf("mouse");  
console.log("Última posição do mouse:", ultimaMouse); // 2

const webcam = estoque.indexOf("webcam");
console.log("Posição da webcam:", webcam); // -1 (não encontrado)`,
  },
  {
    section: "transform",
    name: ".map(funcao)",
    badge: "Transformar",
    desc: "Cria um novo array aplicando uma transformação em cada item do array original.",
    explanation:
      "O map é como uma fábrica de transformação - pega cada item, aplica uma mudança e coloca no novo array. O original não muda.",
    tags: "arrays transformar map imutável",
    code: `// Exemplo: aplicando desconto em todos os preços
const precosOriginais = [100, 250, 80, 150];
console.log("Preços originais:", precosOriginais);

// Aplicando 20% de desconto em cada preço
const precosComDesconto = precosOriginais.map(function(preco) {
  return preco * 0.8; // 80% do preço original
});
console.log("Com desconto:", precosComDesconto); // [80, 200, 64, 120]

// Versão mais curta com arrow function:
const comImposto = precosOriginais.map(preco => preco * 1.2);
console.log("Com imposto:", comImposto); // [120, 300, 96, 180]`,
  },
  {
    section: "transform",
    name: ".filter(funcao)",
    badge: "Filtrar",
    desc: "Cria um novo array contendo apenas os itens que passaram no teste da função.",
    explanation:
      "O filter é como um peneira - só deixa passar os itens que atendem à condição que você definir.",
    tags: "arrays filtrar filter busca condicao",
    code: `// Exemplo: filtrando pedidos que foram pagos
const pedidos = [
  { id: 1, pago: true,  total: 50, cliente: "Ana" },
  { id: 2, pago: false, total: 80, cliente: "Carlos" },
  { id: 3, pago: true,  total: 30, cliente: "Maria" },
  { id: 4, pago: false, total: 120, cliente: "João" }
];

// Pegando apenas os pedidos que foram pagos
const pedidosPagos = pedidos.filter(function(pedido) {
  return pedido.pago === true;
});
console.log("Pedidos pagos:", pedidosPagos);

// Pegando pedidos acima de R$ 50
const pedidosGrandes = pedidos.filter(pedido => pedido.total > 50);
console.log("Pedidos > R$ 50:", pedidosGrandes);`,
  },
  {
    section: "transform",
    name: ".reduce(funcao, valorInicial)",
    badge: "Acumular",
    desc: "Reduz todo o array a um único valor, acumulando o resultado a cada iteração.",
    explanation:
      "O reduce é como uma calculadora que vai somando (ou fazendo outra operação) item por item até chegar num resultado final.",
    tags: "arrays reduce somar acumular totalizar",
    code: `// Exemplo: calculando total de vendas
const vendas = [
  { produto: "notebook", preco: 1500 },
  { produto: "mouse", preco: 50 },
  { produto: "teclado", preco: 200 }
];

// Somando todos os preços
const totalVendas = vendas.reduce(function(acumulador, vendaAtual) {
  console.log(\`Acumulador: \${acumulador}, Venda atual: \${vendaAtual.preco}\`);
  return acumulador + vendaAtual.preco;
}, 0); // 0 é o valor inicial do acumulador

console.log("Total das vendas:", totalVendas); // 1750

// Versão mais curta:
const total = vendas.reduce((total, venda) => total + venda.preco, 0);`,
  },
  {
    section: "transform",
    name: ".find(funcao)",
    badge: "Buscar",
    desc: "Retorna o primeiro item que satisfaz a condição. Se não encontrar, retorna undefined.",
    explanation:
      "O find é como procurar uma pessoa específica numa multidão - ele para assim que encontra a primeira que atende seus critérios.",
    tags: "arrays find buscar primeiro",
    code: `// Exemplo: encontrando um usuário específico
const usuarios = [
  { id: 1, nome: "Ana", idade: 25, ativo: true },
  { id: 2, nome: "Carlos", idade: 30, ativo: false },
  { id: 3, nome: "Maria", idade: 28, ativo: true }
];

// Procurando usuário com ID 2
const usuarioEncontrado = usuarios.find(function(usuario) {
  return usuario.id === 2;
});
console.log("Usuário encontrado:", usuarioEncontrado); // Objeto do Carlos

// Procurando primeiro usuário inativo
const usuarioInativo = usuarios.find(user => user.ativo === false);
console.log("Primeiro inativo:", usuarioInativo); // Objeto do Carlos

// Se não encontrar, retorna undefined
const inexistente = usuarios.find(user => user.id === 999);
console.log("Não existe:", inexistente); // undefined`,
  },
  {
    section: "transform",
    name: ".findIndex(funcao)",
    badge: "Buscar",
    desc: "Retorna o índice (posição) do primeiro item que satisfaz a condição. Se não encontrar, retorna -1.",
    explanation:
      "É como o find(), mas em vez de te dar o item, te diz em que posição ele está.",
    tags: "arrays findIndex posicao indice",
    code: `// Exemplo: encontrando posição de um produto específico
const produtos = ["mouse", "teclado gamer", "monitor", "webcam"];

// Procurando posição do primeiro produto com mais de 5 caracteres
const indiceProdutoLongo = produtos.findIndex(function(produto) {
  return produto.length > 5;
});
console.log("Posição do produto longo:", indiceProdutoLongo); // 1 ("teclado gamer")

// Procurando produto que não existe
const indiceInexistente = produtos.findIndex(produto => produto === "impressora");
console.log("Posição da impressora:", indiceInexistente); // -1 (não encontrado)`,
  },
  {
    section: "transform",
    name: ".some(funcao)",
    badge: "Checar",
    desc: "Verifica se PELO MENOS UM item do array atende à condição. Retorna true ou false.",
    explanation:
      "O some é como perguntar 'tem pelo menos um?' - se encontrar um que serve, já retorna true.",
    tags: "arrays some algum verificar",
    code: `// Exemplo: verificando se há algum produto caro
const precos = [10, 25, 15, 500, 30];

// Tem algum produto acima de R$ 100?
const temProdutoCaro = precos.some(function(preco) {
  return preco > 100;
});
console.log("Tem produto caro?", temProdutoCaro); // true

// Versão mais curta:
const temParar = [1, 3, 5, 7].some(numero => numero % 2 === 0);
console.log("Tem número par?", temParar); // false`,
  },
  {
    section: "transform",
    name: ".every(funcao)",
    badge: "Checar",
    desc: "Verifica se TODOS os itens do array atendem à condição. Retorna true ou false.",
    explanation:
      "O every é como perguntar 'todos são assim?' - só retorna true se TODOS passarem no teste.",
    tags: "arrays every todos verificar",
    code: `// Exemplo: verificando se todos os usuários são maiores de idade
const usuarios = [
  { nome: "Ana", idade: 25 },
  { nome: "Carlos", idade: 30 },
  { nome: "Maria", idade: 28 }
];

// Todos são maiores de 18 anos?
const todosMaioresDeIdade = usuarios.every(function(usuario) {
  return usuario.idade >= 18;
});
console.log("Todos maiores de idade?", todosMaioresDeIdade); // true

// Todos têm mais de 30 anos?
const todosMaisDe30 = usuarios.every(usuario => usuario.idade > 30);
console.log("Todos > 30?", todosMaisDe30); // false`,
  },
  {
    section: "transform",
    name: ".flat(niveis)",
    badge: "Achatar",
    desc: "Transforma um array com arrays internos em um array simples (achatado).",
    explanation:
      "O flat é como desembrulhar caixas dentro de caixas - deixa tudo no mesmo nível.",
    tags: "arrays flat achatar desaninhar",
    code: `// Exemplo: organizando categorias de produtos
const categorias = [
  ["mouse", "teclado"], 
  ["monitor", "webcam"], 
  [["notebook", "tablet"], "impressora"]
];

// Achatar 1 nível (padrão)
const produtosNivel1 = categorias.flat();
console.log("1 nível:", produtosNivel1); 
// ["mouse", "teclado", "monitor", "webcam", ["notebook", "tablet"], "impressora"]

// Achatar 2 níveis
const todosProdutos = categorias.flat(2);
console.log("2 níveis:", todosProdutos);
// ["mouse", "teclado", "monitor", "webcam", "notebook", "tablet", "impressora"]

// Achatar todos os níveis
const completamenteAchatado = categorias.flat(Infinity);`,
  },
  {
    section: "transform",
    name: ".flatMap(funcao)",
    badge: "Map + Achatar",
    desc: "Aplica uma transformação em cada item e depois achata o resultado em 1 nível.",
    explanation:
      "É como fazer um map() e um flat() juntos - transforma cada item e depois organiza tudo num array simples.",
    tags: "arrays flatMap transformar achatar",
    code: `// Exemplo: extraindo palavras de frases
const frases = ["Olá mundo", "JavaScript é legal", "Arrays são úteis"];

// Separando cada frase em palavras
const todasPalavras = frases.flatMap(function(frase) {
  return frase.split(" "); // split retorna um array de palavras
});
console.log("Todas as palavras:", todasPalavras);
// ["Olá", "mundo", "JavaScript", "é", "legal", "Arrays", "são", "úteis"]

// Se usássemos apenas map:
const comMap = frases.map(frase => frase.split(" "));
console.log("Só com map:", comMap);
// [["Olá", "mundo"], ["JavaScript", "é", "legal"], ["Arrays", "são", "úteis"]]`,
  },
  {
    section: "transform",
    name: "localeCompare() para ordenação",
    badge: "Ordenar texto",
    desc: "Ordena strings respeitando acentos, cedilhas e regras do idioma brasileiro.",
    explanation:
      "O localeCompare ordena textos da forma correta para o português, considerando ç, ã, é, etc.",
    tags: "arrays sort texto localeCompare acentos",
    code: `// Exemplo: ordenando nomes brasileiros corretamente
const nomes = ["José", "Ângela", "Carlos", "Ação", "Zebra", "Ávila"];

// Ordenação que respeita acentos brasileiros
const nomesOrdenados = nomes.sort(function(nome1, nome2) {
  return nome1.localeCompare(nome2, "pt-BR");
});
console.log("Nomes ordenados:", nomesOrdenados);
// ["Ação", "Ângela", "Ávila", "Carlos", "José", "Zebra"]

// Sem localeCompare (ordenação incorreta para português):
// const errado = nomes.sort(); // Ângela viria depois de Z

// Para ordenar objetos por nome:
const pessoas = [{nome: "José"}, {nome: "Ângela"}];
pessoas.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));`,
  },
  {
    section: "objects",
    name: "Object.keys(objeto)",
    badge: "Listar chaves",
    desc: "Retorna um array com todas as chaves (propriedades) do objeto.",
    explanation:
      "É como pedir uma lista de todas as gavetas de um móvel - te dá os nomes das propriedades.",
    tags: "objetos keys propriedades chaves",
    code: `// Exemplo: listando informações de um perfil de usuário
const perfilUsuario = { 
  id: 7, 
  nome: "Aline", 
  email: "aline@email.com",
  plano: "premium",
  ativo: true
};

const propriedades = Object.keys(perfilUsuario);
console.log("Propriedades do perfil:", propriedades);
// ["id", "nome", "email", "plano", "ativo"]

// Útil para iterar sobre um objeto:
propriedades.forEach(function(propriedade) {
  console.log(\`\${propriedade}: \${perfilUsuario[propriedade]}\`);
});`,
  },
  {
    section: "objects",
    name: "Spread (...) e Desestruturação",
    badge: "Essencial",
    desc: "Spread copia propriedades entre objetos. Desestruturação extrai valores específicos.",
    explanation:
      "Spread é como xerox de objetos. Desestruturação é como tirar apenas o que você precisa de uma caixa.",
    tags: "objetos spread desestruturacao copia",
    code: `// SPREAD - Copiando e modificando objetos
const configPadrao = { 
  tema: "claro", 
  fonte: "16px", 
  animacoes: true 
};

// Criando nova configuração baseada na padrão
const minhaConfig = { 
  ...configPadrao,        // copia tudo de configPadrao
  tema: "escuro",         // sobrescreve apenas o tema
  notificacoes: true      // adiciona nova propriedade
};
console.log("Minha config:", minhaConfig);
// { tema: "escuro", fonte: "16px", animacoes: true, notificacoes: true }

// DESESTRUTURAÇÃO - Extraindo valores específicos
const pedido = { 
  id: 10, 
  total: 99.90, 
  cliente: { nome: "Aline", cidade: "São Paulo" }
};

// Extraindo apenas o que preciso
const { total, cliente: { nome } } = pedido;
console.log(\`Total: R$ \${total} - Cliente: \${nome}\`);`,
  },
  {
    section: "objects",
    name: "Object.values(objeto)",
    badge: "Listar valores",
    desc: "Retorna um array com todos os valores das propriedades do objeto.",
    explanation:
      "É como abrir todas as gavetas e pegar apenas o conteúdo, ignorando os rótulos das gavetas.",
    tags: "objetos values valores",
    code: `// Exemplo: pegando apenas os valores de um relatório
const vendas = {
  janeiro: 1000,
  fevereiro: 1200,
  marco: 800,
  abril: 1500
};

const valoresVendas = Object.values(vendas);
console.log("Valores das vendas:", valoresVendas); // [1000, 1200, 800, 1500]

// Calculando total das vendas
const totalVendas = valoresVendas.reduce((total, valor) => total + valor, 0);
console.log("Total vendido:", totalVendas); // 4500`,
  },
  {
    section: "objects",
    name: "Object.entries() / Object.fromEntries()",
    badge: "Converter",
    desc: "entries transforma objeto em array de pares [chave, valor]. fromEntries faz o contrário.",
    explanation:
      "entries é como fazer uma lista de 'chave = valor'. fromEntries reconstrói o objeto dessa lista.",
    tags: "objetos entries fromentries conversao",
    code: `// Exemplo: convertendo objeto para modificar e voltar
const precos = {
  notebook: 1500,
  mouse: 50,
  teclado: 200
};

// Transformando em array de pares [chave, valor]
const paresChaveValor = Object.entries(precos);
console.log("Pares:", paresChaveValor);
// [["notebook", 1500], ["mouse", 50], ["teclado", 200]]

// Aplicando desconto de 10% em todos os preços
const precosComDesconto = paresChaveValor.map(function([produto, preco]) {
  return [produto, preco * 0.9]; // 90% do preço
});

// Reconstruindo o objeto
const objetoComDesconto = Object.fromEntries(precosComDesconto);
console.log("Com desconto:", objetoComDesconto);
// { notebook: 1350, mouse: 45, teclado: 180 }`,
  },
  {
    section: "objects",
    name: "Object.hasOwn(objeto, propriedade)",
    badge: "Verificação Segura",
    desc: "Verifica se o objeto possui uma propriedade específica (não herdada).",
    explanation:
      "É a forma mais segura de perguntar 'esse objeto tem essa propriedade?', sem se confundir com propriedades herdadas.",
    tags: "objetos hasOwn verificar propriedade",
    code: `// Exemplo: verificando se objeto tem propriedades específicas
const usuario = {
  nome: "Carlos",
  idade: 30
};

// Verificando propriedades
console.log("Tem nome?", Object.hasOwn(usuario, "nome")); // true
console.log("Tem email?", Object.hasOwn(usuario, "email")); // false

// Mais seguro que usar 'in' ou verificar diretamente
console.log("nome" in usuario); // true (mas pode incluir propriedades herdadas)
console.log(usuario.email !== undefined); // false (mas undefined pode ser um valor válido)`,
  },
  {
    section: "objects",
    name: "Object.assign(destino, ...origens)",
    badge: "Mesclar",
    desc: "Copia propriedades de um ou mais objetos para o objeto de destino.",
    explanation:
      "É como derramar o conteúdo de vários baldes em um balde maior - mistura tudo no destino.",
    tags: "objetos assign mesclar copiar",
    code: `// Exemplo: mesclando configurações padrão com personalizadas
const configPadrao = {
  tema: "claro",
  fonte: "14px",
  animacoes: true
};

const configUsuario = {
  tema: "escuro",
  notificacoes: false
};

// Mesclando configurações (configPadrao será modificado!)
const configFinal = Object.assign(configPadrao, configUsuario);
console.log("Config final:", configFinal);
// { tema: "escuro", fonte: "14px", animacoes: true, notificacoes: false }

// Para não modificar o original, use um objeto vazio como destino:
const configSegura = Object.assign({}, configPadrao, configUsuario);`,
  },
  {
    section: "objects",
    name: "structuredClone(objeto)",
    badge: "Cópia Profunda",
    desc: "Faz uma cópia completa e independente do objeto, incluindo objetos aninhados.",
    explanation:
      "É como uma máquina de xerox que copia até as páginas dentro de pastas dentro de outras pastas.",
    tags: "objetos clone deep copia profunda",
    code: `// Exemplo: copiando objeto com propriedades aninhadas
const perfilOriginal = {
  nome: "Ana",
  configuracoes: {
    tema: "claro",
    preferencias: {
      notificacoes: true,
      sons: false
    }
  },
  historico: ["login", "compra", "logout"]
};

// Cópia profunda - completamente independente
const perfilCopia = structuredClone(perfilOriginal);

// Modificando a cópia não afeta o original
perfilCopia.configuracoes.tema = "escuro";
perfilCopia.historico.push("nova-acao");

console.log("Original:", perfilOriginal.configuracoes.tema); // "claro"
console.log("Cópia:", perfilCopia.configuracoes.tema); // "escuro"`,
  },
  {
    section: "objects",
    name: "Object.freeze() / Object.seal()",
    badge: "Imutabilidade",
    desc: "freeze impede qualquer modificação. seal permite alterar valores existentes mas não adicionar/remover propriedades.",
    explanation:
      "freeze é como colocar o objeto numa vitrine - pode ver mas não pode mexer. seal é como uma caixa com tampa - pode trocar o que tem dentro mas não pode adicionar gavetas.",
    tags: "objetos freeze seal imutabilidade protecao",
    code: `// Exemplo: protegendo configurações críticas
const configSistema = {
  apiUrl: "https://api.empresa.com",
  versao: "2.1.0",
  debug: false
};

// FREEZE - impede qualquer alteração
const configProtegida = Object.freeze(configSistema);
configProtegida.debug = true; // Não funciona (erro em modo strict)
configProtegida.novaPropriedade = "valor"; // Não funciona
console.log(configProtegida.debug); // ainda false

// SEAL - permite alterar valores existentes
const configSemiProtegida = Object.seal({...configSistema});
configSemiProtegida.debug = true; // Funciona!
configSemiProtegida.nova = "valor"; // Não funciona
console.log(configSemiProtegida.debug); // true`,
  },
  {
    section: "strings",
    name: ".includes(texto)",
    badge: "Buscar",
    desc: "Verifica se uma string contém outra string dentro dela. Retorna true ou false.",
    explanation:
      "É como procurar uma palavra dentro de um texto - se encontrar, retorna true.",
    tags: "strings includes buscar contem",
    code: `// Exemplo: verificando se email é corporativo
const emailUsuario = "aline@empresa.com.br";
const emailPessoal = "carlos@gmail.com";

const ehCorporativo = emailUsuario.includes("@empresa");
console.log("Email corporativo?", ehCorporativo); // true

const ehGmail = emailPessoal.includes("gmail");
console.log("É Gmail?", ehGmail); // true

// Case sensitive (diferencia maiúsculas/minúsculas)
console.log("TEM EMPRESA?", emailUsuario.includes("EMPRESA")); // false`,
  },
  {
    section: "strings",
    name: ".replace() / .replaceAll()",
    badge: "Substituir",
    desc: "replace substitui apenas a primeira ocorrência. replaceAll substitui todas as ocorrências.",
    explanation:
      "É como usar 'localizar e substituir' no Word - replace troca só o primeiro, replaceAll troca todos.",
    tags: "strings replace replaceall substituir normalizar",
    code: `// Exemplo: normalizando formato de moeda brasileira para internacional
const valorBrasileiroOriginal = "R$ 1.234.567,89";
console.log("Valor original:", valorBrasileiroOriginal);

// Removendo símbolo da moeda
let valorLimpo = valorBrasileiroOriginal.replace("R$ ", "");
console.log("Sem R$:", valorLimpo); // "1.234.567,89"

// Removendo TODOS os pontos (separadores de milhares)
valorLimpo = valorLimpo.replaceAll(".", "");
console.log("Sem pontos:", valorLimpo); // "1234567,89"

// Trocando vírgula por ponto (decimal)
const valorInternacional = valorLimpo.replace(",", ".");
console.log("Formato internacional:", valorInternacional); // "1234567.89"
console.log("Como número:", Number(valorInternacional)); // 1234567.89`,
  },
  {
    section: "strings",
    name: ".trim() / .trimStart() / .trimEnd()",
    badge: "Limpar",
    desc: "Remove espaços em branco das extremidades. trim remove dos dois lados, trimStart só do início, trimEnd só do final.",
    explanation:
      "É como cortar as bordas em branco de uma foto - trim corta dos dois lados, os outros cortam só de um lado.",
    tags: "strings trim limpar espacos",
    code: `// Exemplo: limpando dados de entrada do usuário
const nomeComEspacos = "   Maria da Silva   ";
const emailComEspacos = "  maria@email.com";
const senhaComEspacos = "minhasenha   ";

console.log("Nome original: '" + nomeComEspacos + "'");
console.log("Nome limpo: '" + nomeComEspacos.trim() + "'"); // "Maria da Silva"

console.log("Email só início: '" + emailComEspacos.trimStart() + "'"); // "maria@email.com"
console.log("Senha só final: '" + senhaComEspacos.trimEnd() + "'"); // "  minhasenha"

// Muito útil em formulários:
const dadosFormulario = {
  nome: nomeComEspacos.trim(),
  email: emailComEspacos.trim(),
  senha: senhaComEspacos.trim()
};`,
  },
  {
    section: "strings",
    name: ".padStart() / .padEnd()",
    badge: "Preencher",
    desc: "Preenche a string até atingir um tamanho específico. padStart adiciona no início, padEnd no final.",
    explanation:
      "É como adicionar zeros à esquerda de um número ou espaços para alinhar texto - enche até ficar do tamanho desejado.",
    tags: "strings padStart padEnd preencher formatar",
    code: `// Exemplo: formatando números e códigos
const numeroSequencial = "7";
const codigoUsuario = "123";

// Preenchendo com zeros à esquerda (padStart)
const numeroFormatado = numeroSequencial.padStart(4, "0");
console.log("Número formatado:", numeroFormatado); // "0007"

const codigoFormatado = codigoUsuario.padStart(6, "USR");
console.log("Código usuário:", codigoFormatado); // "USR123"

// Preenchendo com espaços à direita (padEnd) para alinhar
const produtos = ["Mouse", "Teclado", "Monitor"];
produtos.forEach(produto => {
  const produtoAlinhado = produto.padEnd(10, ".");
  console.log(produtoAlinhado + " R$ 100,00");
});
// Mouse..... R$ 100,00
// Teclado... R$ 100,00
// Monitor... R$ 100,00`,
  },
  {
    section: "strings",
    name: ".split() / .join()",
    badge: "Dividir e Juntar",
    desc: "split divide uma string em array usando um separador. join faz o contrário - junta array em string.",
    explanation:
      "split é como cortar uma pizza em pedaços onde tem uma marca. join é como colar os pedaços de volta com uma cola específica.",
    tags: "strings split join dividir juntar",
    code: `// Exemplo: processando lista de emails
const listaEmails = "ana@empresa.com,carlos@empresa.com,maria@empresa.com";
console.log("Lista original:", listaEmails);

// Dividindo em array de emails individuais
const emailsIndividuais = listaEmails.split(",");
console.log("Emails separados:", emailsIndividuais);
// ["ana@empresa.com", "carlos@empresa.com", "maria@empresa.com"]

// Juntando de volta com separador diferente
const emailsComBarras = emailsIndividuais.join(" | ");
console.log("Com barras:", emailsComBarras);
// "ana@empresa.com | carlos@empresa.com | maria@empresa.com"

// Dividindo nome completo
const nomeCompleto = "Maria da Silva Santos";
const partesNome = nomeCompleto.split(" ");
const primeiroNome = partesNome[0];
const ultimoNome = partesNome[partesNome.length - 1];
console.log(\`Primeiro: \${primeiroNome}, Último: \${ultimoNome}\`); // Maria, Santos`,
  },
  {
    section: "strings",
    name: ".startsWith() / .endsWith()",
    badge: "Verificar início/fim",
    desc: "startsWith verifica se a string começa com determinado texto. endsWith verifica se termina.",
    explanation:
      "É como verificar se uma frase começa com uma palavra específica ou termina com determinada pontuação.",
    tags: "strings startsWith endsWith comeca termina",
    code: `// Exemplo: verificando tipos de arquivo e protocolos
const nomeArquivo = "relatorio-vendas.pdf";
const urlSegura = "https://www.empresa.com/api";
const urlInsegura = "http://site-duvidoso.com";

// Verificando extensão do arquivo
const ehPDF = nomeArquivo.endsWith(".pdf");
const ehExcel = nomeArquivo.endsWith(".xlsx");
console.log("É PDF?", ehPDF); // true
console.log("É Excel?", ehExcel); // false

// Verificando protocolo da URL
const ehHTTPS = urlSegura.startsWith("https://");
const urlSeguraVerificada = urlInsegura.startsWith("https://");
console.log("URL segura?", ehHTTPS); // true
console.log("URL duvidosa é segura?", urlSeguraVerificada); // false

// Verificando prefixo de arquivo
const ehRelatorio = nomeArquivo.startsWith("relatorio");
console.log("É relatório?", ehRelatorio); // true`,
  },
  {
    section: "strings",
    name: ".match() e Regex",
    badge: "Busca Avançada",
    desc: "Usa expressões regulares (regex) para encontrar padrões complexos na string.",
    explanation:
      "Regex é como uma linguagem especial para descrever padrões. É poderoso mas pode ser complexo - use com moderação!",
    tags: "strings match regex expressao regular padrao",
    code: `// Exemplo: extraindo informações de texto
const textoContato = "Entre em contato: (11) 98765-4321 ou email@empresa.com";

// Encontrando telefone brasileiro
const telefoneEncontrado = textoContato.match(/\\(\\d{2}\\) \\d{5}-\\d{4}/);
if (telefoneEncontrado) {
  console.log("Telefone:", telefoneEncontrado[0]); // "(11) 98765-4321"
}

// Encontrando email
const emailEncontrado = textoContato.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/);
if (emailEncontrado) {
  console.log("Email:", emailEncontrado[0]); // "email@empresa.com"
}

// Exemplo mais simples: encontrando números
const frase = "Vendemos 150 notebooks e 200 mouses";
const numerosEncontrados = frase.match(/\\d+/g); // 'g' pega todos os números
console.log("Números:", numerosEncontrados); // ["150", "200"]`,
  },
  {
    section: "strings",
    name: "Template literals (``)",
    badge: "Interpolar",
    desc: "Permite inserir variáveis e expressões diretamente dentro da string usando ${}.",
    explanation:
      "É como madlibs - você escreve o texto e deixa espaços marcados com ${} para inserir valores dinâmicos.",
    tags: "strings template literals interpolacao crase",
    code: `// Exemplo: gerando mensagens personalizadas
const nomeCliente = "Ana Silva";
const totalPedido = 299.90;
const dataEntrega = "15/08/2025";
const desconto = 10;

// Jeito antigo (concatenação)
const mensagemAntiga = "Olá " + nomeCliente + ", seu pedido de R$ " + totalPedido + " será entregue em " + dataEntrega;

// Jeito moderno (template literals)
const mensagemModerna = \`Olá \${nomeCliente}!

Seu pedido foi confirmado:
• Total: R$ \${totalPedido.toFixed(2)}
• Desconto: \${desconto}%
• Valor final: R$ \${(totalPedido * (1 - desconto/100)).toFixed(2)}
• Data de entrega: \${dataEntrega}

Obrigado pela preferência!\`;

console.log(mensagemModerna);

// Pode usar expressões dentro de \${}
const status = totalPedido > 200 ? "Premium" : "Normal";
console.log(\`Cliente \${status}: desconto de \${totalPedido > 200 ? 15 : 5}%\`);`,
  },
  {
    section: "numbers",
    name: "Number() / parseInt() / parseFloat()",
    badge: "Converter para número",
    desc: "Convertem texto (string) em número. Cada um funciona de forma diferente com entradas inválidas.",
    explanation:
      "Number é mais rigoroso, parseInt pega só a parte inteira, parseFloat pega decimais também. Importante saber a diferença!",
    tags: "numeros parse conversao string",
    code: `// Exemplo: processando entrada de formulários
const idadeTexto = "25";
const precoTexto = "199.90";
const salarioTexto = "R$ 3.500,00";
const numeroComLixo = "42px";
const textoInvalido = "abc123";

// Number() - mais rigoroso
console.log("Number('25'):", Number(idadeTexto)); // 25
console.log("Number('199.90'):", Number(precoTexto)); // 199.9
console.log("Number('R$ 3.500,00'):", Number(salarioTexto)); // NaN (falha)
console.log("Number('42px'):", Number(numeroComLixo)); // NaN (falha)

// parseInt() - pega números inteiros do início
console.log("parseInt('25'):", parseInt(idadeTexto, 10)); // 25
console.log("parseInt('199.90'):", parseInt(precoTexto, 10)); // 199 (ignora decimal)
console.log("parseInt('42px'):", parseInt(numeroComLixo, 10)); // 42 (ignora 'px')
console.log("parseInt('abc123'):", parseInt(textoInvalido, 10)); // NaN

// parseFloat() - pega números decimais do início  
console.log("parseFloat('199.90'):", parseFloat(precoTexto)); // 199.9
console.log("parseFloat('42.5px'):", parseFloat("42.5px")); // 42.5

// Dica: sempre use base 10 com parseInt para evitar surpresas
console.log("parseInt('08', 10):", parseInt("08", 10)); // 8`,
  },
  {
    section: "numbers",
    name: ".toFixed() e Intl.NumberFormat",
    badge: "Formatar números",
    desc: "toFixed() fixa casas decimais. Intl.NumberFormat formata como moeda, percentual, etc.",
    explanation:
      "toFixed é simples mas básico. Intl.NumberFormat é mais poderoso e lida com formatos brasileiros automaticamente.",
    tags: "numeros formatar moeda decimal toFixed",
    code: `// Exemplo: formatando valores monetários
const preco = 1234.5;
const desconto = 0.15; // 15%
const precoComDesconto = preco * (1 - desconto);

// toFixed() - simples mas limitado
console.log("Preço com toFixed:", preco.toFixed(2)); // "1234.50"
console.log("Com desconto:", precoComDesconto.toFixed(2)); // "1049.33"

// Intl.NumberFormat - mais poderoso e internacionalizado
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL"
});

console.log("Preço em BRL:", formatadorMoeda.format(preco)); // "R$ 1.234,50"
console.log("Com desconto:", formatadorMoeda.format(precoComDesconto)); // "R$ 1.049,33"

// Formatando percentual
const formatadorPercent = new Intl.NumberFormat("pt-BR", {
  style: "percent",
  minimumFractionDigits: 1
});
console.log("Desconto:", formatadorPercent.format(desconto)); // "15,0%"

// Formatando números grandes
const numeroGrande = 1234567.89;
const formatadorNumero = new Intl.NumberFormat("pt-BR");
console.log("Número grande:", formatadorNumero.format(numeroGrande)); // "1.234.567,89"`,
  },
  {
    section: "numbers",
    name: "Math.max() / Math.min() com spread",
    badge: "Máximo e Mínimo",
    desc: "Encontra o maior ou menor valor. Use spread (...) para funcionar com arrays.",
    explanation:
      "Math.max/min não funcionam diretamente com arrays. O spread (...) 'desempacota' o array para eles.",
    tags: "numeros math max min spread maior menor",
    code: `// Exemplo: analisando vendas mensais
const vendasMensais = [1200, 1500, 800, 2000, 1800, 900, 2200, 1600, 1100, 1900, 2100, 1400];

// Maior e menor venda (usando spread)
const maiorVenda = Math.max(...vendasMensais);
const menorVenda = Math.min(...vendasMensais);

console.log("Maior venda:", maiorVenda); // 2200
console.log("Menor venda:", menorVenda); // 800
console.log("Diferença:", maiorVenda - menorVenda); // 1400

// Comparando valores diretos (sem array)
const precoA = 150;
const precoB = 200;
const precoC = 120;

const precoMaisCaro = Math.max(precoA, precoB, precoC);
const precoMaisBarato = Math.min(precoA, precoB, precoC);

console.log("Mais caro:", precoMaisCaro); // 200
console.log("Mais barato:", precoMaisBarato); // 120

// Encontrando posição da maior/menor venda
const indiceMaiorVenda = vendasMensais.indexOf(maiorVenda);
const indiceMenorVenda = vendasMensais.indexOf(menorVenda);
console.log(\`Melhor mês: \${indiceMaiorVenda + 1} (R$ \${maiorVenda})\`);
console.log(\`Pior mês: \${indiceMenorVenda + 1} (R$ \${menorVenda})\`);`,
  },
  {
    section: "dates",
    name: ".toLocaleString()",
    badge: "Formatar datas",
    desc: "Formata data e hora considerando o idioma e fuso horário brasileiro.",
    explanation:
      "É a forma mais fácil de mostrar datas no formato brasileiro, lidando automaticamente com fusos horários.",
    tags: "datas tolocalestring timezone fuso formatacao",
    code: `// Exemplo: formatando datas de eventos e entregas
const dataEvento = new Date("2025-08-22T14:30:00Z"); // UTC
const agora = new Date();

// Formatação brasileira básica
const dataFormatadaBR = dataEvento.toLocaleString("pt-BR");
console.log("Data evento (padrão):", dataFormatadaBR);
// "22/08/2025 11:30:00" (automaticamente convertido para horário de Brasília)

// Formatação personalizada
const opcoesBrasileiras = {
  timeZone: "America/Sao_Paulo",
  day: "2-digit",
  month: "2-digit", 
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  weekday: "long"
};

const dataDetalhada = dataEvento.toLocaleString("pt-BR", opcoesBrasileiras);
console.log("Data detalhada:", dataDetalhada);
// "sexta-feira, 22/08/2025 às 11:30"

// Só a data, sem hora
const apenasData = dataEvento.toLocaleDateString("pt-BR");
console.log("Apenas data:", apenasData); // "22/08/2025"

// Só a hora, sem data  
const apenasHora = dataEvento.toLocaleTimeString("pt-BR");
console.log("Apenas hora:", apenasHora); // "11:30:00"`,
  },
  {
    section: "dates",
    name: "Date.now()",
    badge: "Timestamp atual",
    desc: "Retorna o timestamp atual (milissegundos desde 1970). Útil para medir tempo decorrido.",
    explanation:
      "É como um cronômetro universal - te dá um número que representa exatamente este momento no tempo.",
    tags: "datas now timestamp cronometro tempo",
    code: `// Exemplo: medindo tempo de execução de operações
console.log("Iniciando processamento...");
const tempoInicio = Date.now();

// Simulando processamento pesado
let soma = 0;
for (let i = 0; i < 1000000; i++) {
  soma += i;
}

const tempoFim = Date.now();
const tempoDecorrido = tempoFim - tempoInicio;

console.log(\`Processamento concluído em \${tempoDecorrido}ms\`);
console.log(\`Resultado: \${soma}\`);

// Criando timestamp para logs
function logarEvento(evento) {
  const timestamp = Date.now();
  const dataLegivel = new Date(timestamp).toLocaleString("pt-BR");
  console.log(\`[\${timestamp}] \${dataLegivel} - \${evento}\`);
}

logarEvento("Usuário fez login");
logarEvento("Produto adicionado ao carrinho");`,
  },
  {
    section: "dates",
    name: "Adicionar/Subtrair dias",
    badge: "Cálculos com datas",
    desc: "Como somar ou subtrair dias de uma data sem usar bibliotecas externas.",
    explanation:
      "JavaScript não tem um método direto para somar dias, mas podemos criar uma função simples para isso.",
    tags: "datas adicionar subtrair dias calculo",
    code: `// Função para adicionar dias a uma data
function adicionarDias(data, numeroDias) {
  const novaData = new Date(data); // Cria cópia para não modificar original
  novaData.setDate(novaData.getDate() + numeroDias);
  return novaData;
}

// Exemplo prático: calculando prazos de entrega
const dataCompra = new Date("2025-08-26");
console.log("Data da compra:", dataCompra.toLocaleDateString("pt-BR"));

// Prazo de entrega: 7 dias úteis
const dataEntrega = adicionarDias(dataCompra, 7);
console.log("Data de entrega:", dataEntrega.toLocaleDateString("pt-BR"));

// Prazo de devolução: 30 dias
const prazoDevolucao = adicionarDias(dataCompra, 30);
console.log("Prazo devolução:", prazoDevolucao.toLocaleDateString("pt-BR"));

// Subtraindo dias (usando número negativo)
const dataVencimento = new Date("2025-09-15");
const lembrete7Dias = adicionarDias(dataVencimento, -7);
const lembrete1Dia = adicionarDias(dataVencimento, -1);

console.log("Lembrete 7 dias antes:", lembrete7Dias.toLocaleDateString("pt-BR"));
console.log("Lembrete 1 dia antes:", lembrete1Dia.toLocaleDateString("pt-BR"));`,
  },
  {
    section: "dates",
    name: "Diferença entre datas",
    badge: "Cálculo de intervalo",
    desc: "Calcula quantos dias, horas ou milissegundos existem entre duas datas.",
    explanation:
      "Subtração de datas dá milissegundos. Dividimos por constantes para converter em dias, horas, etc.",
    tags: "datas diferenca intervalo dias horas",
    code: `// Função para calcular diferença em dias
function diferencaEmDias(data1, data2) {
  const umDiaEmMs = 24 * 60 * 60 * 1000; // 24h * 60min * 60seg * 1000ms
  const diferencaMs = Math.abs(data2 - data1); // Valor absoluto (sempre positivo)
  return Math.ceil(diferencaMs / umDiaEmMs); // Arredonda para cima
}

// Exemplo: calculando idade de conta e dias restantes
const dataCriacaoConta = new Date("2024-01-15");
const dataAtual = new Date();
const dataVencimentoPlano = new Date("2025-09-15");

const idadeConta = diferencaEmDias(dataCriacaoConta, dataAtual);
console.log(\`Conta criada há \${idadeConta} dias\`);

const diasRestantesPlano = diferencaEmDias(dataAtual, dataVencimentoPlano);
console.log(\`Plano vence em \${diasRestantesPlano} dias\`);

// Calculando diferentes unidades
function calcularIdade(dataNascimento) {
  const agora = new Date();
  const nascimento = new Date(dataNascimento);
  
  const diferencaMs = agora - nascimento;
  const dias = Math.floor(diferencaMs / (24 * 60 * 60 * 1000));
  const anos = Math.floor(dias / 365.25); // 365.25 considera anos bissextos
  
  return { anos, dias };
}

const idade = calcularIdade("1990-05-20");
console.log(\`Idade: \${idade.anos} anos (\${idade.dias} dias de vida)\`);`,
  },
  {
    section: "json",
    name: "JSON.parse() / JSON.stringify()",
    badge: "Serialização",
    desc: "Converte entre texto JSON e objetos JavaScript. Essencial para APIs e armazenamento.",
    explanation:
      "JSON.parse transforma texto em objeto. JSON.stringify faz o contrário - objeto vira texto. Muito usado em APIs!",
    tags: "json parse stringify serializar api",
    code: `// Exemplo: trabalhando com dados de API
const respostaAPI = '{"usuario": {"id": 123, "nome": "Ana"}, "pedidos": [{"id": 1, "total": 99.90}], "sucesso": true}';

console.log("Resposta da API (texto):", typeof respostaAPI); // string

// Convertendo texto JSON em objeto JavaScript
const dadosObjeto = JSON.parse(respostaAPI);
console.log("Dados como objeto:", typeof dadosObjeto); // object

// Agora posso acessar as propriedades
console.log("Nome do usuário:", dadosObjeto.usuario.nome); // "Ana"
console.log("Total do pedido:", dadosObjeto.pedidos[0].total); // 99.9

// Modificando o objeto
dadosObjeto.usuario.ultimoLogin = new Date().toISOString();
dadosObjeto.pedidos.push({ id: 2, total: 150.00 });

// Convertendo objeto de volta para texto JSON
const dadosParaEnviar = JSON.stringify(dadosObjeto, null, 2);
console.log("Dados formatados para enviar:");
console.log(dadosParaEnviar);

// Salvando no localStorage (precisa ser string)
// localStorage.setItem('dadosUsuario', JSON.stringify(dadosObjeto));`,
  },
  {
    section: "json",
    name: "JSON.parse() seguro",
    badge: "Tratamento de erro",
    desc: "Como fazer parse de JSON sem quebrar o código quando o texto é inválido.",
    explanation:
      "JSON.parse pode falhar se o texto estiver mal formado. Sempre trate erros em produção!",
    tags: "json parse seguro erro try catch",
    code: `// Função para parse seguro de JSON
function parseJSONSeguro(textoJSON, valorPadrao = null) {
  try {
    return JSON.parse(textoJSON);
  } catch (erro) {
    console.warn("JSON inválido:", erro.message);
    return valorPadrao;
  }
}

// Exemplo: processando diferentes tipos de entrada
const jsonValido = '{"nome": "Carlos", "idade": 30}';
const jsonInvalido = '{"nome": "Carlos", idade: 30}'; // Sem aspas na chave 'idade'
const textoQualquer = "Isto não é JSON";

// Parse seguro - não quebra o código
const dadosValidos = parseJSONSeguro(jsonValido);
console.log("Dados válidos:", dadosValidos); // {nome: "Carlos", idade: 30}

const dadosInvalidos = parseJSONSeguro(jsonInvalido, {erro: true});
console.log("Dados inválidos:", dadosInvalidos); // {erro: true}

const textoInvalido = parseJSONSeguro(textoQualquer, []);
console.log("Texto inválido:", textoInvalido); // []

// Exemplo prático: carregando configurações
function carregarConfiguracoes() {
  const configSalva = localStorage.getItem('configuracoes') || '{}';
  const configPadrao = {
    tema: 'claro',
    idioma: 'pt-BR',
    notificacoes: true
  };
  
  const configCarregada = parseJSONSeguro(configSalva, {});
  return { ...configPadrao, ...configCarregada }; // Mistura padrão com salva
}`,
  },
  {
    section: "async",
    name: "async/await + Promise.all",
    badge: "Programação assíncrona",
    desc: "Executa operações que demoram (como buscar dados da internet) de forma organizada e eficiente.",
    explanation:
      "async/await deixa código assíncrono parecer síncrono. Promise.all executa várias operações em paralelo. Muito usado em APIs!",
    tags: "async await promise all paralelo api",
    code: `// Exemplo: carregando dados completos de um usuário
async function carregarPerfilCompleto(idUsuario) {
  try {
    console.log("Iniciando carregamento do perfil...");
    
    // Primeiro busca dados básicos do usuário
    const perfilBasico = await buscarPerfilUsuario(idUsuario);
    console.log("Perfil básico carregado:", perfilBasico.nome);
    
    // Depois busca dados complementares EM PARALELO (mais rápido!)
    console.log("Carregando dados complementares...");
    const [notificacoes, pedidosRecentes, preferencias] = await Promise.all([
      buscarNotificacoes(idUsuario),
      buscarPedidosRecentes(idUsuario), 
      buscarPreferencias(idUsuario)
    ]);
    
    // Monta objeto completo
    const perfilCompleto = {
      ...perfilBasico,
      notificacoes: notificacoes,
      pedidosRecentes: pedidosRecentes,
      preferencias: preferencias,
      dataCarregamento: new Date().toISOString()
    };
    
    console.log("Perfil completo carregado com sucesso!");
    return perfilCompleto;
    
  } catch (erro) {
    console.error("Erro ao carregar perfil:", erro.message);
    // Retorna dados padrão em caso de erro
    return {
      erro: true,
      mensagem: "Não foi possível carregar os dados do usuário",
      dataErro: new Date().toISOString()
    };
  }
}

// Funções simuladas de API (exemplo)
async function buscarPerfilUsuario(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, nome: "Ana Silva", email: "ana@email.com" }), 500);
  });
}

async function buscarNotificacoes(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve([{ tipo: "pedido", mensagem: "Pedido entregue" }]), 300);
  });
}

// Uso da função
// carregarPerfilCompleto(123).then(perfil => console.log(perfil));`,
  },
  {
    section: "async",
    name: "fetch() para APIs",
    badge: "Requisições HTTP",
    desc: "Busca dados de APIs externas. Sempre trate erros de rede e respostas inválidas.",
    explanation:
      "fetch() é como fazer um pedido para outro servidor. Pode dar errado (sem internet, servidor fora do ar), então sempre trate erros!",
    tags: "async fetch http api requisicao",
    code: `// Função robusta para buscar dados de API
async function buscarDadosAPI(url) {
  try {
    console.log(\`Buscando dados de: \${url}\`);
    
    // Fazendo a requisição
    const resposta = await fetch(url);
    
    // Verificando se a resposta foi bem-sucedida
    if (!resposta.ok) {
      throw new Error(\`Erro HTTP: \${resposta.status} - \${resposta.statusText}\`);
    }
    
    // Convertendo resposta para JSON
    const dados = await resposta.json();
    console.log("Dados recebidos com sucesso!");
    
    return {
      sucesso: true,
      dados: dados,
      status: resposta.status
    };
    
  } catch (erro) {
    console.error("Erro na requisição:", erro.message);
    
    return {
      sucesso: false,
      erro: erro.message,
      dados: null
    };
  }
}

// Exemplo prático: buscando informações de CEP
async function buscarCEP(cep) {
  const cepLimpo = cep.replace(/\D/g, ''); // Remove caracteres não numéricos
  
  if (cepLimpo.length !== 8) {
    return { sucesso: false, erro: "CEP deve ter 8 dígitos" };
  }
  
  const url = \`https://viacep.com.br/ws/\${cepLimpo}/json/\`;
  const resultado = await buscarDadosAPI(url);
  
  if (resultado.sucesso && resultado.dados.erro) {
    return { sucesso: false, erro: "CEP não encontrado" };
  }
  
  return resultado;
}

// Exemplo de uso:
// buscarCEP("01310-100").then(resultado => {
//   if (resultado.sucesso) {
//     console.log("Endereço:", resultado.dados);
//   } else {
//     console.log("Erro:", resultado.erro);
//   }
// });`,
  },
  {
    section: "async",
    name: "AbortController",
    badge: "Cancelar requisições",
    desc: "Cancela requisições que estão demorando muito ou não são mais necessárias.",
    explanation:
      "É como ter um botão de 'cancelar' para requisições. Útil para evitar que requisições lentas travem a aplicação.",
    tags: "async abort controller cancelar timeout",
    code: `// Função com timeout automático para requisições
async function buscarComTimeout(url, tempoLimiteMs = 5000) {
  // Criando controlador para cancelar a requisição
  const controller = new AbortController();
  
  // Configurando timeout automático
  const timeoutId = setTimeout(() => {
    console.log("Requisição cancelada por timeout");
    controller.abort();
  }, tempoLimiteMs);
  
  try {
    console.log(\`Buscando \${url} (timeout: \${tempoLimiteMs}ms)\`);
    
    const resposta = await fetch(url, {
      signal: controller.signal // Conecta o fetch ao controller
    });
    
    // Se chegou aqui, deu certo - cancela o timeout
    clearTimeout(timeoutId);
    
    if (!resposta.ok) {
      throw new Error(\`HTTP \${resposta.status}\`);
    }
    
    const dados = await resposta.json();
    console.log("Dados recebidos dentro do prazo!");
    return { sucesso: true, dados };
    
  } catch (erro) {
    clearTimeout(timeoutId);
    
    if (erro.name === 'AbortError') {
      console.log("Requisição foi cancelada");
      return { sucesso: false, erro: "Requisição cancelada (timeout ou manual)" };
    }
    
    console.error("Erro na requisição:", erro.message);
    return { sucesso: false, erro: erro.message };
  }
}

// Exemplo: cancelamento manual
function exemploComCancelamentoManual() {
  const controller = new AbortController();
  
  // Inicia a requisição
  const promessaRequisicao = fetch("https://api.exemplo.com/dados-lentos", {
    signal: controller.signal
  });
  
  // Simula botão de cancelar após 2 segundos
  setTimeout(() => {
    console.log("Usuário clicou em cancelar");
    controller.abort();
  }, 2000);
  
  // Trata o resultado
  promessaRequisicao
    .then(resposta => console.log("Sucesso:", resposta))
    .catch(erro => {
      if (erro.name === 'AbortError') {
        console.log("Cancelado pelo usuário");
      } else {
        console.log("Erro real:", erro);
      }
    });
}`,
  },
  {
    section: "logic",
    name: "Optional Chaining (?.) e Nullish Coalescing (??)",
    badge: "Programação segura",
    desc: "Acessa propriedades aninhadas sem erro. Define valores padrão para null/undefined.",
    explanation:
      "?. é como perguntar 'existe?' antes de acessar. ?? é como dizer 'se for nada, use isso aqui'.",
    tags: "logica optional chaining nullish coalescing seguro",
    code: `// Exemplo: acessando dados de usuário que podem não existir
const usuario = {
  id: 123,
  nome: "Carlos",
  endereco: {
    rua: "Rua das Flores, 100",
    cidade: "São Paulo",
    // estado: undefined (não definido)
  },
  // telefone: null (não tem telefone)
  configuracoes: {
    tema: "escuro"
    // idioma não definido
  }
};

// SEM optional chaining (perigoso - pode quebrar)
// console.log(usuario.endereco.estado.codigo); // ERRO! Cannot read property 'codigo' of undefined

// COM optional chaining (seguro)
const codigoEstado = usuario.endereco?.estado?.codigo;
console.log("Código do estado:", codigoEstado); // undefined (não quebra)

const telefone = usuario.telefone?.numero;
console.log("Telefone:", telefone); // undefined

// Usando nullish coalescing para valores padrão
const cidadeUsuario = usuario.endereco?.cidade ?? "Cidade não informada";
console.log("Cidade:", cidadeUsuario); // "São Paulo"

const estadoUsuario = usuario.endereco?.estado ?? "Estado não informado"; 
console.log("Estado:", estadoUsuario); // "Estado não informado"

const idiomaUsuario = usuario.configuracoes?.idioma ?? "pt-BR";
console.log("Idioma:", idiomaUsuario); // "pt-BR"

// Diferença entre ?? e ||
const config = {
  mostrarAnuncios: false, // valor boolean false
  limite: 0              // valor numérico zero
};

// Com || (ERRADO - trata false e 0 como "falsy")
console.log("Anúncios com ||:", config.mostrarAnuncios || true); // true (errado!)
console.log("Limite com ||:", config.limite || 10); // 10 (errado!)

// Com ?? (CORRETO - só substitui null/undefined)  
console.log("Anúncios com ??:", config.mostrarAnuncios ?? true); // false (correto!)
console.log("Limite com ??:", config.limite ?? 10); // 0 (correto!)`,
  },
  {
    section: "logic",
    name: "Debounce",
    badge: "Otimização UX",
    desc: "Aguarda o usuário parar de digitar antes de executar uma ação. Evita chamadas excessivas.",
    explanation:
      "É como esperar alguém terminar de falar antes de responder. Muito usado em campos de busca!",
    tags: "utils debounce input busca otimizacao ux",
    code: `// Função debounce reutilizável
function criarDebounce(funcao, tempoEsperaMs = 300) {
  let timeoutId;
  
  return function(...argumentos) {
    // Cancela execução anterior se houver
    clearTimeout(timeoutId);
    
    // Agenda nova execução
    timeoutId = setTimeout(() => {
      funcao.apply(this, argumentos);
    }, tempoEsperaMs);
  };
}

// Exemplo prático: campo de busca
function buscarProdutos(termoBusca) {
  console.log(\`Buscando por: "\${termoBusca}"\`);
  // Aqui faria chamada para API
  // fetch(\`/api/produtos?q=\${termoBusca}\`)
}

// Versão com debounce (espera usuário parar de digitar)
const buscarProdutosDebounced = criarDebounce(buscarProdutos, 500);

// Simulando digitação rápida
console.log("Simulando usuário digitando 'notebook':");
buscarProdutosDebounced("n");      // Cancelada
buscarProdutosDebounced("no");     // Cancelada  
buscarProdutosDebounced("not");    // Cancelada
buscarProdutosDebounced("note");   // Cancelada
buscarProdutosDebounced("noteb");  // Cancelada
buscarProdutosDebounced("notebook"); // Esta executa após 500ms

// Exemplo de uso em HTML:
// <input type="text" oninput="buscarProdutosDebounced(this.value)">

// Debounce para salvar rascunhos automaticamente
function salvarRascunho(conteudo) {
  console.log("Salvando rascunho...", conteudo.substring(0, 50));
  // localStorage.setItem('rascunho', conteudo);
}

const salvarRascunhoDebounced = criarDebounce(salvarRascunho, 1000);

// Simulando usuário digitando um texto
console.log("Simulando digitação de texto longo:");
salvarRascunhoDebounced("Era uma vez");
salvarRascunhoDebounced("Era uma vez uma");
salvarRascunhoDebounced("Era uma vez uma história"); // Esta salva após 1s`,
  },
  {
    section: "logic",
    name: "Throttle",
    badge: "Limite de execução",
    desc: "Limita quantas vezes uma função pode executar por período de tempo. Usado em scroll e resize.",
    explanation:
      "É como um freio - não importa quantas vezes chamem, só executa de X em X tempo. Evita sobrecarga.",
    tags: "utils throttle scroll resize limite performance",
    code: `// Função throttle reutilizável  
function criarThrottle(funcao, intervaloMs = 200) {
  let ultimaExecucao = 0;
  
  return function(...argumentos) {
    const agora = Date.now();
    
    if (agora - ultimaExecucao >= intervaloMs) {
      ultimaExecucao = agora;
      funcao.apply(this, argumentos);
    }
  };
}

// Exemplo: atualizando posição do scroll
function atualizarBarraProgresso() {
  const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  console.log(\`Scroll: \${scrollPercent.toFixed(1)}%\`);
  
  // Atualiza barra de progresso visual
  // document.getElementById('barra-progresso').style.width = scrollPercent + '%';
}

// Com throttle - só executa a cada 100ms no máximo
const atualizarBarraThrottled = criarThrottle(atualizarBarraProgresso, 100);

// Exemplo de uso:
// window.addEventListener('scroll', atualizarBarraThrottled);

// Exemplo: redimensionamento de janela
function ajustarLayout() {
  console.log(\`Janela redimensionada: \${window.innerWidth}x\${window.innerHeight}\`);
  
  // Ajusta layout responsivo
  // if (window.innerWidth < 768) {
  //   document.body.classList.add('mobile');
  // }
}

const ajustarLayoutThrottled = criarThrottle(ajustarLayout, 250);

// window.addEventListener('resize', ajustarLayoutThrottled);

// Diferença prática entre debounce e throttle:
console.log("\\nComparando debounce vs throttle:");

function exemploExecucao(tipo) {
  console.log(\`\${tipo} executou às \${new Date().toLocaleTimeString()}\`);
}

const exemploDebounced = criarDebounce(() => exemploExecucao("DEBOUNCE"), 1000);
const exemploThrottled = criarThrottle(() => exemploExecucao("THROTTLE"), 1000);

// Simulando chamadas rápidas
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    exemploDebounced(); // Só executa 1x após parar
    exemploThrottled(); // Executa periodicamente
  }, i * 200);
}`,
  },
  {
    section: "logic",
    name: "Set e Map",
    badge: "Coleções especiais",
    desc: "Set armazena valores únicos. Map armazena pares chave-valor com qualquer tipo de chave.",
    explanation:
      "Set é como uma lista sem repetições. Map é como um objeto mais poderoso que aceita qualquer tipo de chave.",
    tags: "set map colecoes unico chave valor",
    code: `// SET - Coleção de valores únicos
console.log("=== TRABALHANDO COM SET ===");

const tagsUnicas = new Set();
tagsUnicas.add("javascript");
tagsUnicas.add("programação");
tagsUnicas.add("tutorial");
tagsUnicas.add("javascript"); // Duplicata - será ignorada

console.log("Tags únicas:", Array.from(tagsUnicas)); 
// ["javascript", "programação", "tutorial"]

// Removendo duplicatas de array
const numerosComDuplicatas = [1, 2, 3, 2, 4, 1, 5, 3];
const numerosSemDuplicatas = [...new Set(numerosComDuplicatas)];
console.log("Sem duplicatas:", numerosSemDuplicatas); // [1, 2, 3, 4, 5]

// Verificando se item existe
console.log("Tem 'javascript'?", tagsUnicas.has("javascript")); // true
console.log("Tamanho do Set:", tagsUnicas.size); // 3

console.log("\\n=== TRABALHANDO COM MAP ===");

// MAP - Pares chave-valor mais flexível que objeto
const configuracoesPorUsuario = new Map();

// Adicionando configurações
configuracoesPorUsuario.set("user123", { tema: "escuro", idioma: "pt" });
configuracoesPorUsuario.set("user456", { tema: "claro", idioma: "en" });
configuracoesPorUsuario.set(999, { tema: "auto", idioma: "es" }); // Chave numérica!

// Buscando configurações
const configUser123 = configuracoesPorUsuario.get("user123");
console.log("Config user123:", configUser123); // {tema: "escuro", idioma: "pt"}

// Iterando sobre o Map
console.log("Todas as configurações:");
for (const [usuario, config] of configuracoesPorUsuario) {
  console.log(\`Usuario \${usuario}: tema \${config.tema}\`);
}

// Vantagens do Map sobre objeto comum:
// 1. Qualquer tipo de chave (não só strings)
const estatisticas = new Map();
estatisticas.set(new Date(), "visitas hoje");
estatisticas.set(true, "usuário ativo");
estatisticas.set(function() {}, "callback especial");

// 2. Tamanho direto
console.log("Quantas configs:", configuracoesPorUsuario.size); // 3

// 3. Ordem preservada
console.log("Chaves na ordem:", [...configuracoesPorUsuario.keys()]);`,
  },
  {
    section: "logic",
    name: "WeakMap para cache",
    badge: "Cache inteligente",
    desc: "Cache que se limpa automaticamente quando o objeto não é mais usado. Evita vazamentos de memória.",
    explanation:
      "WeakMap é como um cache que se auto-destrói quando não precisa mais. Muito útil para evitar acúmulo de lixo na memória.",
    tags: "weakmap cache memoria garbage collection",
    code: `// Cache usando WeakMap - se auto-limpa automaticamente
const cacheParsedData = new WeakMap();

function processarDadosComCache(objetoDados) {
  // Verifica se já processamos este objeto antes
  if (cacheParsedData.has(objetoDados)) {
    console.log("Dados encontrados no cache! ⚡");
    return cacheParsedData.get(objetoDados);
  }
  
  console.log("Processando dados pela primeira vez...");
  
  // Simula processamento pesado
  const dadosProcessados = {
    ...objetoDados,
    processadoEm: new Date().toISOString(),
    hash: Math.random().toString(36).substr(2, 9)
  };
  
  // Salva no cache
  cacheParsedData.set(objetoDados, dadosProcessados);
  
  return dadosProcessados;
}

// Exemplo de uso
const dadosUsuario1 = { id: 1, nome: "Ana" };
const dadosUsuario2 = { id: 2, nome: "Carlos" };

// Primeira chamada - processa
console.log("=== Primeira vez ===");
const resultado1 = processarDadosComCache(dadosUsuario1);
console.log("Resultado:", resultado1);

// Segunda chamada - vem do cache
console.log("\\n=== Segunda vez (mesmo objeto) ===");
const resultado1Cache = processarDadosComCache(dadosUsuario1);
console.log("Resultado:", resultado1Cache);

// Terceira chamada - objeto diferente, processa novamente
console.log("\\n=== Objeto diferente ===");
const resultado2 = processarDadosComCache(dadosUsuario2);

// Exemplo prático: cache de elementos DOM
const cacheElementos = new WeakMap();

function obterDimensoesElemento(elemento) {
  if (cacheElementos.has(elemento)) {
    console.log("Dimensões em cache");
    return cacheElementos.get(elemento);
  }
  
  console.log("Calculando dimensões...");
  const dimensoes = {
    largura: elemento.offsetWidth,
    altura: elemento.offsetHeight,
    calculadoEm: Date.now()
  };
  
  cacheElementos.set(elemento, dimensoes);
  return dimensoes;
}

// Quando o elemento DOM é removido da página,
// o cache automaticamente se limpa também!
// Isso evita vazamentos de memória.`,
  },
  {
    section: "logic",
    name: "Memoização",
    badge: "Cache de funções",
    desc: "Armazena resultados de funções puras para evitar recálculos desnecessários.",
    explanation:
      "Memoização é como ter um caderno de respostas - se já calculou antes, só consulta a anotação ao invés de refazer a conta.",
    tags: "memo memoize cache performance funcoes puras",
    code: `// Função para criar versão memoizada de qualquer função
function criarMemoizacao(funcaoOriginal) {
  const cache = new Map();
  
  return function(...argumentos) {
    // Cria chave única baseada nos argumentos
    const chaveCache = JSON.stringify(argumentos);
    
    // Se já calculou antes, retorna do cache
    if (cache.has(chaveCache)) {
      console.log("🔥 Resultado vem do cache:", argumentos);
      return cache.get(chaveCache);
    }
    
    // Se não, calcula pela primeira vez
    console.log("⏳ Calculando pela primeira vez:", argumentos);
    const resultado = funcaoOriginal.apply(this, argumentos);
    
    // Salva no cache para próximas vezes
    cache.set(chaveCache, resultado);
    
    return resultado;
  };
}

// Exemplo: função cara de calcular (Fibonacci)
function fibonacciLento(n) {
  if (n <= 1) return n;
  return fibonacciLento(n - 1) + fibonacciLento(n - 2);
}

// Versão memoizada - muito mais rápida!
const fibonacciRapido = criarMemoizacao(function(n) {
  if (n <= 1) return n;
  return fibonacciRapido(n - 1) + fibonacciRapido(n - 2);
});

// Testando performance
console.log("=== Fibonacci com memoização ===");
console.time("Fibonacci 40");
const resultado = fibonacciRapido(40);
console.timeEnd("Fibonacci 40");
console.log("Resultado:", resultado);

// Chamada seguinte é instantânea (cache)
console.time("Fibonacci 40 (cache)");
fibonacciRapido(40);
console.timeEnd("Fibonacci 40 (cache)");

// Exemplo prático: cálculos de desconto
function calcularDesconto(preco, categoria, tempoCliente) {
  console.log("Calculando desconto complexo...");
  
  let desconto = 0;
  
  // Lógica complexa de desconto
  if (categoria === "premium") desconto += 15;
  if (categoria === "gold") desconto += 10;
  if (categoria === "silver") desconto += 5;
  
  if (tempoCliente > 12) desconto += 10; // Cliente há mais de 1 ano
  if (tempoCliente > 24) desconto += 5;  // Cliente há mais de 2 anos
  
  if (preco > 1000) desconto += 5; // Compra alta
  
  const precoFinal = preco * (1 - desconto / 100);
  
  return {
    precoOriginal: preco,
    descontoPercent: desconto,
    precoFinal: precoFinal,
    economizou: preco - precoFinal
  };
}

const calcularDescontoMemoizado = criarMemoizacao(calcularDesconto);

// Primeira chamada - calcula
console.log("\\n=== Cálculo de desconto ===");
const desc1 = calcularDescontoMemoizado(1500, "premium", 18);
console.log("Desconto:", desc1);

// Segunda chamada igual - vem do cache
const desc2 = calcularDescontoMemoizado(1500, "premium", 18);
console.log("Segundo cálculo:", desc2);`,
  },
  // ==== Extra entries injected from user's study material ====
  {
    section: "arrays",
    name: ".at(index)",
    badge: "Acesso",
    desc: "Acessa por índice (aceita negativos).",
    tags: "arrays at indice negativo acesso",
    code: `const vendas=[150,200,180,220,300]; vendas.at(-1); // 300`,
  },
  {
    section: "arrays",
    name: ".includes(valor)",
    badge: "Checar",
    desc: "Verifica se o valor existe no array.",
    tags: "arrays includes checar permissao",
    code: `const perms=["ler","escrever"]; perms.includes("escrever"); // true`,
  },
  {
    section: "arrays",
    name: ".join(sep)",
    badge: "String",
    desc: "Une itens em uma string com separador.",
    tags: "arrays join string breadcrumb csv",
    code: `["Home","Produtos","Notebooks"].join("/"); // "Home/Produtos/Notebooks"`,
  },
  {
    section: "arrays",
    name: ".reverse()",
    badge: "Inverter",
    desc: "Inverte a ordem (muta o array).",
    tags: "arrays reverse inverter mutavel",
    code: `const a=[1,2,3]; a.reverse(); // [3,2,1]`,
  },
  {
    section: "arrays",
    name: ".findLast / .findLastIndex",
    badge: "Buscar do fim",
    desc: "Retorna o último item/índice que satisfaz.",
    tags: "arrays findlast findlastindex buscar ultimo",
    code: `[{nivel:"info"},{nivel:"error"}].findLast(x=>x.nivel==="error");`,
  },
  {
    section: "arrays",
    name: ".forEach(fn)",
    badge: "Iterar",
    desc: "Executa fn para cada item (não retorna).",
    tags: "arrays foreach iterar efeitos colaterais",
    code: `["a","b"].forEach((v,i)=>console.log(i,v));`,
  },
  {
    section: "arrays",
    name: ".sort(cmp)",
    badge: "Ordenar",
    desc: "Ordena com comparador (muta).",
    tags: "arrays sort ordenar comparador",
    code: `const n=[10,2,30,4]; n.sort((a,b)=>a-b); // [2,4,10,30]`,
  },
  {
    section: "objects",
    name: "delete obj.prop",
    badge: "Remover",
    desc: "Remove propriedade do objeto.",
    tags: "objetos delete remover sanitizar",
    code: `const r={user:"ana",senha:"x"}; delete r.senha;`,
  },
  {
    section: "objects",
    name: `"chave" in obj`,
    badge: "Checar",
    desc: "Verifica existência (inclui herdadas).",
    tags: "objetos in existencia prototype",
    code: `("toString" in {}); // true`,
  },
  {
    section: "strings",
    name: ".indexOf / .lastIndexOf",
    badge: "Posição",
    desc: "Índice da substring (ou -1).",
    tags: "strings indexof lastindexof posicao",
    code: `"arquivo.txt".lastIndexOf("."); // 7`,
  },
  {
    section: "strings",
    name: ".slice / .substring",
    badge: "Extrair",
    desc: "Fatias de string (substring não aceita negativos).",
    tags: "strings slice substring extrair",
    code: `"BR1234567890XY".slice(0,2); // "BR"`,
  },
  {
    section: "strings",
    name: ".toLowerCase / .toUpperCase",
    badge: "Normalizar",
    desc: "Ajusta capitalização para comparações/formatos.",
    tags: "strings case minusculo maiusculo normalizar",
    code: `"Ana SILVA".toLowerCase(); // "ana silva"`,
  },
  {
    section: "strings",
    name: ".repeat(n)",
    badge: "Repetir",
    desc: "Repete a string n vezes.",
    tags: "strings repeat decoracao progresso",
    code: `"=".repeat(10); // "=========="`,
  },
  {
    section: "numbers",
    name: "Number.isNaN / isFinite / isInteger",
    badge: "Validar",
    desc: "Utilitários de validação numérica.",
    tags: "numeros validacao isnan isfinite isinteger",
    code: `Number.isNaN(Number("abc")); // false, NaN é que é true`,
  },
  {
    section: "numbers",
    name: "toPrecision / toExponential",
    badge: "Precisão",
    desc: "Formatos científicos e dígitos significativos.",
    tags: "numeros precisao exponencial",
    code: `(123.456).toPrecision(4); // "123.5"`,
  },
  {
    section: "numbers",
    name: "Math.round / floor / ceil / trunc",
    badge: "Arredondar",
    desc: "Arredondamentos comuns.",
    tags: "numeros arredondar round floor ceil trunc",
    code: `Math.trunc(-4.9); // -4`,
  },
  {
    section: "numbers",
    name: "Math.random() & helpers",
    badge: "Aleatório",
    desc: "Inteiros em faixa e embaralhar.",
    tags: "numeros random aleatorio",
    code: `const r=(min,max)=>Math.floor(Math.random()*(max-min+1))+min;`,
  },
  {
    section: "numbers",
    name: "Potência & Raiz",
    badge: "Pow/Sqrt",
    desc: "Operador ** e Math.sqrt.",
    tags: "numeros pow sqrt potencia",
    code: `2**3; // 8, Math.sqrt(16); // 4`,
  },
  {
    section: "numbers",
    name: "Math.abs & constantes",
    badge: "Absoluto",
    desc: "Valor absoluto e constantes (PI, E...).",
    tags: "numeros abs constantes",
    code: `Math.abs(-5); // 5; Math.PI; // 3.1415...`,
  },
  {
    section: "dates",
    name: "new Date(...)",
    badge: "Criar",
    desc: "Construtores: atual, ISO, timestamp, componentes.",
    tags: "datas new date criar",
    code: `new Date(); new Date("2025-01-01T00:00:00Z"); new Date(1700000000000);`,
  },
  {
    section: "dates",
    name: "get*/set*",
    badge: "Componentes",
    desc: "Extrai e altera partes (mês é 0-indexado).",
    tags: "datas get set componentes",
    code: `const d=new Date(); d.setDate(d.getDate()+7);`,
  },
  {
    section: "dates",
    name: ".toISOString()",
    badge: "ISO 8601",
    desc: "Formato seguro para APIs e BD.",
    tags: "datas iso padrao",
    code: `new Date().toISOString();`,
  },
  {
    section: "json",
    name: "replacer / reviver",
    badge: "Custom",
    desc: "Transforme durante stringify/parse.",
    tags: "json replacer reviver transformar",
    code: `JSON.stringify(obj,(k,v)=>k==="email"?"***":v);
JSON.parse(s,(k,v)=>/Data/i.test(k)?new Date(v):v);`,
  },
  {
    section: "json",
    name: "Limitações JSON",
    badge: "Atenção",
    desc: "Funções/undefined somem; Date vira string.",
    tags: "json limitacoes datas undefined funcao",
    code: `JSON.stringify({x:undefined,f(){}}); // "{}"`,
  },
];
