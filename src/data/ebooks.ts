export interface EbookData {
  slug: string;
  titulo: string;
  subtitulo: string;
  promessa: string;
  descricao: string;
  capa: string;
  mockup: string;
  acento: string;

  preco: { de?: string; por: string };
  checkoutUrl: string;

  dor: { frase: string; paragrafos: string[] };

  beneficios: { icone: string; titulo: string; descricao: string }[];

  capitulos: { numero: string; titulo: string; descricao: string }[];

  paraQuem: string[];

  autor: { nome: string; cargo: string; bio: string; foto: string };

  depoimentos: { nome: string; cargo?: string; texto: string }[];

  faq: { pergunta: string; resposta: string }[];

  seo: { title: string; description: string };
}

export const EBOOKS: EbookData[] = [
  {
    slug: 'orando',
    titulo: 'Orando com o Corpo, a Alma e o Espírito',
    subtitulo: 'Como envolver todo o seu ser na comunhão com Deus',
    promessa: 'Transforme sua vida de oração em 7 dias — de forma simples, prática e bíblica.',
    descricao: 'Um guia direto ao ponto — que até uma criança entende — para aprender a buscar a Deus com o corpo que se ajoelha, a alma que se abre e o espírito que adora.',
    capa: '/orando_com_corpo_alma_espirito_1781101893485.png',
    mockup: '/orando_com_corpo_alma_espirito_1781101893485.png',
    acento: '#b8863f',
    preco: { de: 'R$ 39,90', por: 'R$ 19,90' },
    checkoutUrl: '#',
    dor: {
      frase: 'Você sente que ora, mas não sabe se Deus está ouvindo?',
      paragrafos: [
        'Você senta para orar e em minutos a mente já foi para outra coisa. O corpo está ali, mas o coração está longe. As palavras saem decoradas, sem vida, sem emoção — e você termina a oração sem sentir que algo mudou.',
        'Não é falta de fé. É que ninguém te ensinou a orar com todo o ser. A maioria de nós aprendeu uma forma de oração fragmentada: a boca fala, mas a alma fica quieta e o espírito permanece adormecido.',
        'Deus não te criou em pedaços. Ele não quer que você ore pela metade.',
      ],
    },
    beneficios: [
      { icone: '🙏', titulo: 'Oração que transforma', descricao: 'Aprenda a diferença entre orar por hábito e orar com todo o ser.' },
      { icone: '📖', titulo: 'Fundamento bíblico', descricao: 'Cada prática ensinada tem base direta nas Escrituras.' },
      { icone: '🗓️', titulo: 'Plano de 7 dias', descricao: 'Um roteiro prático para renovar sua vida de oração em uma semana.' },
      { icone: '💡', titulo: 'Linguagem acessível', descricao: 'Escrito para iniciantes e experientes — simples o suficiente para uma criança entender.' },
      { icone: '🧠', titulo: 'Mente e emoções', descricao: 'Como lidar com a distração, o silêncio e os momentos de seca espiritual.' },
      { icone: '🔥', titulo: 'Orações-modelo', descricao: 'Exemplos práticos de como orar em cada dimensão do ser.' },
    ],
    capitulos: [
      { numero: '01', titulo: 'O Fundamento', descricao: 'Quem é você diante de Deus? O que é oração integral e por que ela transforma.' },
      { numero: '02', titulo: 'Orando com o Corpo', descricao: 'O corpo como templo, posturas que falam e o exemplo do Getsêmani.' },
      { numero: '03', titulo: 'Orando com a Alma', descricao: 'Entregando mente, emoção e vontade. A escola dos Salmos.' },
      { numero: '04', titulo: 'Orando com o Espírito', descricao: 'Adorando em espírito e em verdade — e o que fazer quando faltam palavras.' },
    ],
    paraQuem: [
      'Cristãos que sentem que a oração é mecânica e sem vida',
      'Quem quer aprofundar a vida devocional com base bíblica',
      'Líderes, pastores e grupos de oração',
      'Novos convertidos que ainda estão aprendendo a orar',
      'Qualquer pessoa que quer se aproximar mais de Deus no dia a dia',
    ],
    autor: {
      nome: 'Pr. Francisco Gomes Alves',
      cargo: 'Pastor • Conferencista • Ensinador da Palavra',
      bio: 'Com mais de duas décadas servindo ao Senhor, o Pr. Francisco Gomes tem o chamado de tornar a vida com Deus simples, prática e real. Vice-Presidente do MAJEV — Ministério Arrependei-vos, Jesus Está Voltando — seus livros são escritos para edificar, não impressionar. Cada palavra nasce de uma convicção: a Palavra de Deus basta, e ela é suficiente para transformar qualquer vida.',
      foto: '/author_pastoral.png',
    },
    depoimentos: [
      { nome: 'Ana Beatriz M.', cargo: 'Líder de Célula', texto: 'Depois de ler este e-book, a minha oração nunca mais foi a mesma. Eu aprendi a envolver todo o meu ser em cada momento com Deus.' },
      { nome: 'Carlos Henrique', cargo: 'Membro de Igreja', texto: 'Simples, direto e profundo ao mesmo tempo. Raramente um livro sobre oração me alcançou de um jeito tão prático.' },
      { nome: 'Pra. Débora L.', cargo: 'Pastora', texto: 'Indiquei para toda a minha congregação. O plano de 7 dias foi transformador para nossa liderança.' },
    ],
    faq: [
      { pergunta: 'Como recebo o e-book após a compra?', resposta: 'Após a confirmação do pagamento, você recebe um e-mail com o link para download imediato em PDF.' },
      { pergunta: 'Posso ler no celular?', resposta: 'Sim! O PDF é otimizado para leitura em celular, tablet, computador e e-reader.' },
      { pergunta: 'O acesso é vitalício?', resposta: 'Sim. Uma vez baixado, o arquivo é seu para sempre.' },
      { pergunta: 'O e-book é físico ou digital?', resposta: 'É um livro digital em PDF. Por isso o acesso é imediato e o preço é acessível.' },
      { pergunta: 'O pagamento é seguro?', resposta: 'Sim. A compra é processada pela Hotmart, uma das maiores plataformas de produtos digitais do Brasil.' },
      { pergunta: 'Posso presentear alguém?', resposta: 'Sim! Você pode baixar o arquivo e encaminhar para quem desejar presentear.' },
    ],
    seo: {
      title: 'Orando com o Corpo, a Alma e o Espírito | Pr. Francisco Gomes',
      description: 'Aprenda a orar com todo o seu ser. Um guia prático e bíblico para transformar sua vida de oração em 7 dias.',
    },
  },

  {
    slug: 'quando-nao-ha-rei',
    titulo: 'Quando Não Há Rei',
    subtitulo: 'O que acontece com um povo que faz o que é certo aos próprios olhos',
    promessa: 'Uma análise corajosa de Juízes 19–21 — o que acontece quando Deus é destronado.',
    descricao: 'Uma jornada corajosa pela história mais sombria da Bíblia para revelar o que acontece com um povo, uma Igreja e um coração que tiram Deus do trono.',
    capa: '/quando_nao_ha_rei_1781101904540.png',
    mockup: '/quando_nao_ha_rei_1781101904540.png',
    acento: '#b8863f',
    preco: { de: 'R$ 39,90', por: 'R$ 19,90' },
    checkoutUrl: '#',
    dor: {
      frase: 'Você já sentiu que a Igreja está funcionando sem Deus no centro?',
      paragrafos: [
        'Templos cheios, plataformas lotadas, eventos espetaculares — e, ao mesmo tempo, uma sensação crescente de que algo essencial está faltando. O trono está vazio, e cada um está fazendo o que é certo aos próprios olhos.',
        'A história de Juízes 19–21 é tão sombria que raramente se prega sobre ela. Uma mulher abusada, um corpo cortado, uma guerra. Deus deliberadamente não a escondeu. A Bíblia registrou esse horror como uma radiografia de um tumor: para nos alertar.',
        'Onde Deus não reina, o homem se destrói. E a cura começa quando alguém chama as coisas pelo nome.',
      ],
    },
    beneficios: [
      { icone: '👑', titulo: 'O trono do coração', descricao: 'Entenda o que acontece quando o "eu" ocupa o lugar que pertence a Deus.' },
      { icone: '📖', titulo: 'Exegese profunda', descricao: 'Estudo sério e aplicado de Juízes 19–21 com clareza pastoral.' },
      { icone: '🔍', titulo: 'Diagnóstico espiritual', descricao: 'Ferramentas para identificar onde Deus foi destronado em sua vida.' },
      { icone: '🙏', titulo: 'Clamores de oração', descricao: 'Orações de arrependimento e rendição ao final de cada capítulo.' },
      { icone: '🗓️', titulo: 'Plano de 7 dias', descricao: 'Destronar o "eu" e coroar o Rei — passo a passo, com reflexões diárias.' },
      { icone: '⚠️', titulo: 'Leitura para adultos', descricao: 'Conteúdo sério que lida com temas graves das Escrituras com responsabilidade.' },
    ],
    capitulos: [
      { numero: '01', titulo: 'A Descida', descricao: 'O dia em que cada um virou rei e o perigo do deus de bolso.' },
      { numero: '02', titulo: 'A Noite', descricao: 'O levita que não amava e o horror na porta de Gibeá.' },
      { numero: '03', titulo: 'O Grito', descricao: 'A mensagem dos doze pedaços e o pecado do silêncio que mata.' },
      { numero: '04', titulo: 'A Falha Humana', descricao: 'O zelo sem Deus e a tentativa inútil de consertar o mal com mais mal.' },
      { numero: '05', titulo: 'O Rei que Faltava', descricao: 'O anseio por um Rei e o clamor de coroação a Jesus.' },
    ],
    paraQuem: [
      'Cristãos que querem uma fé honesta e sem verniz',
      'Pastores e líderes que percebem algo errado na Igreja atual',
      'Professores de Escola Bíblica e discipuladores',
      'Quem deseja viver sob o senhorio real de Cristo',
      'Estudiosos da Bíblia que não fogem dos textos difíceis',
    ],
    autor: {
      nome: 'Pr. Francisco Gomes Alves',
      cargo: 'Pastor • Conferencista • Ensinador da Palavra',
      bio: 'Com mais de duas décadas servindo ao Senhor, o Pr. Francisco Gomes tem o chamado de tornar a vida com Deus simples, prática e real. Vice-Presidente do MAJEV — Ministério Arrependei-vos, Jesus Está Voltando — seus livros são escritos para edificar, não impressionar. Cada palavra nasce de uma convicção: a Palavra de Deus basta, e ela é suficiente para transformar qualquer vida.',
      foto: '/author_pastoral.png',
    },
    depoimentos: [
      { nome: 'Carlos Eduardo', cargo: 'Cristão', texto: 'Uma leitura densa, mas necessária. Fez-me rever que áreas da minha vida ainda não estão sob o senhorio de Cristo.' },
      { nome: 'Pra. Rute Mendes', cargo: 'Pastora', texto: 'O Pr. Francisco trouxe Juízes 19–21 com clareza e aplicação pastoral impressionantes. Raro de ver.' },
      { nome: 'Fernando Costa', cargo: 'Líder de Jovens', texto: 'As orações ao fim de cada capítulo me quebraram. Um livro que todo cristão atual deveria ler.' },
    ],
    faq: [
      { pergunta: 'Como recebo o e-book após a compra?', resposta: 'Após a confirmação do pagamento, você recebe um e-mail com o link para download imediato em PDF.' },
      { pergunta: 'Posso ler no celular?', resposta: 'Sim! O PDF é otimizado para leitura em celular, tablet, computador e e-reader.' },
      { pergunta: 'O acesso é vitalício?', resposta: 'Sim. Uma vez baixado, o arquivo é seu para sempre.' },
      { pergunta: 'É indicado para crianças?', resposta: 'Não. O livro trata de Juízes 19–21, com temas graves de violência. É recomendado apenas para adultos.' },
      { pergunta: 'O pagamento é seguro?', resposta: 'Sim. A compra é processada pela Hotmart, plataforma líder em produtos digitais no Brasil.' },
      { pergunta: 'Posso presentear alguém?', resposta: 'Sim! Você pode baixar o arquivo e encaminhar para quem desejar presentear.' },
    ],
    seo: {
      title: 'Quando Não Há Rei | Pr. Francisco Gomes',
      description: 'O colapso de um povo sem Deus no trono. Uma análise corajosa de Juízes 19–21 para a Igreja e o coração de hoje.',
    },
  },

  {
    slug: 'quem-ainda-chora',
    titulo: 'Quem Ainda Chora?',
    subtitulo: 'O clamor de Jeremias e a denúncia que a Igreja precisa ouvir',
    promessa: 'Um livro que vai incomodar — e curar. Para quem ainda tem coragem de chorar pelo povo de Deus.',
    descricao: 'Uma denúncia profética fundamentada em Jeremias 9 contra a superficialidade, a liderança que trocou o choro pelas almas pelo amor ao lucro.',
    capa: '/quem_ainda_chora_1781101915571.png',
    mockup: '/quem_ainda_chora_1781101915571.png',
    acento: '#b8863f',
    preco: { de: 'R$ 39,90', por: 'R$ 19,90' },
    checkoutUrl: '#',
    dor: {
      frase: 'Você ainda consegue chorar pelo povo de Deus?',
      paragrafos: [
        'Nunca tivemos tantos templos, eventos e recursos. E, ao mesmo tempo, nunca a liderança cristã pareceu tão distante do choro que transforma. Trocamos o altar molhado de pranto pelo palco iluminado de holofotes.',
        'O que mais incomoda não é a falta de talento. É a falta de lágrimas. Jeremias chorava tanto que queria se tornar lágrima. Onde estão os que ainda choran por uma Igreja que está trocando Deus por ídolos?',
        'Este livro é um espelho. E espelhos doem um pouco antes de ajudar.',
      ],
    },
    beneficios: [
      { icone: '😢', titulo: 'O peso do choro bíblico', descricao: 'Entenda por que as lágrimas de Jeremias eram proféticas, não fraqueza.' },
      { icone: '🔦', titulo: 'Diagnóstico da Igreja atual', descricao: 'Quadros "O Retrato de Hoje" que comparam a Bíblia com nossa realidade.' },
      { icone: '🪞', titulo: 'Autoanálise honesta', descricao: 'Seção "O Espelho" para que cada leitor examine o próprio coração.' },
      { icone: '🙏', titulo: 'Clamores de arrependimento', descricao: 'Orações profundas de arrependimento ao final de cada capítulo.' },
      { icone: '🗓️', titulo: 'Plano de 7 dias de lágrimas', descricao: 'Uma semana de leitura e intercissão guiada pela Palavra.' },
      { icone: '🔥', titulo: 'Linguagem cortante e verdadeira', descricao: 'Sem eufemismos, sem verniz — só a Palavra e a realidade.' },
    ],
    capitulos: [
      { numero: '01', titulo: 'A Fonte de Lágrimas', descricao: 'Um homem que queria virar lágrima e o peso de um coração que chora.' },
      { numero: '02', titulo: 'O Cansaço de Amar um Povo Infiel', descricao: 'A dor de ver a Igreja trocando Deus por ídolos e benefício próprio.' },
      { numero: '03', titulo: 'A Língua como Arco', descricao: 'Quando o púlpito vira arma e profetas curam feridas levianamente.' },
      { numero: '04', titulo: 'Religião sem Deus', descricao: 'A aparência de piedade sem poder e o juízo que começa pela casa de Deus.' },
    ],
    paraQuem: [
      'Líderes e pastores que sentem o peso pela Igreja',
      'Quem tem intercedido por avivamento sem ver resposta',
      'Cristãos que estão incomodados com a superficialidade na Igreja',
      'Professores bíblicos que querem base profética sólida',
      'Qualquer pessoa que ainda tem coragem de chorar',
    ],
    autor: {
      nome: 'Pr. Francisco Gomes Alves',
      cargo: 'Pastor • Conferencista • Ensinador da Palavra',
      bio: 'Com mais de duas décadas servindo ao Senhor, o Pr. Francisco Gomes tem o chamado de tornar a vida com Deus simples, prática e real. Vice-Presidente do MAJEV — Ministério Arrependei-vos, Jesus Está Voltando — seus livros são escritos para edificar, não impressionar. Cada palavra nasce de uma convicção: a Palavra de Deus basta, e ela é suficiente para transformar qualquer vida.',
      foto: '/author_pastoral.png',
    },
    depoimentos: [
      { nome: 'Joana Ferreira', cargo: 'Intercessora', texto: 'Esse livro me fez parar e chorar por horas. Não de tristeza — de arrependimento e amor. Obrigada, pastor.' },
      { nome: 'Pr. Márcio Alves', cargo: 'Pastor', texto: 'Raro encontrar um livro que confronte com tanta coragem e ao mesmo tempo com tanta misericórdia.' },
      { nome: 'Sabrina Costa', cargo: 'Liderança de Jovens', texto: 'Lemos em grupo e foi transformador. O plano de 7 dias foi o melhor presente que dei para minha célula.' },
    ],
    faq: [
      { pergunta: 'Como recebo o e-book após a compra?', resposta: 'Após a confirmação do pagamento, você recebe um e-mail com o link para download imediato em PDF.' },
      { pergunta: 'Posso ler no celular?', resposta: 'Sim! O PDF é otimizado para leitura em celular, tablet, computador e e-reader.' },
      { pergunta: 'O acesso é vitalício?', resposta: 'Sim. Uma vez baixado, o arquivo é seu para sempre.' },
      { pergunta: 'É adequado para grupos e células?', resposta: 'Sim! O plano de 7 dias foi pensado também para grupos de leitura e intercissão.' },
      { pergunta: 'O pagamento é seguro?', resposta: 'Sim. A compra é processada pela Hotmart, plataforma líder em produtos digitais no Brasil.' },
      { pergunta: 'Posso presentear alguém?', resposta: 'Sim! Você pode baixar o arquivo e encaminhar para quem desejar presentear.' },
    ],
    seo: {
      title: 'Quem Ainda Chora? | Pr. Francisco Gomes',
      description: 'Um clamor profético baseado em Jeremias 9. Para quem ainda tem coragem de chorar pelo povo de Deus e pela Igreja que se perdeu.',
    },
  },

  {
    slug: 'somos-todos-jerusalem',
    titulo: 'Somos Todos Jerusalém',
    subtitulo: 'O perdão que transforma quem um dia negou a Cristo',
    promessa: 'Uma jornada simples e profunda pela história da cruz — do nosso pecado ao perdão que recomeça tudo.',
    descricao: 'Sem diferença de raça, língua ou tribo — todos somos Jerusalém. Um livro que dói um pouco antes de curar, fundamentado inteiramente na Palavra de Deus.',
    capa: '/somos_todos_jerusalem_1781101925943.png',
    mockup: '/somos_todos_jerusalem_1781101925943.png',
    acento: '#b8863f',
    preco: { de: 'R$ 39,90', por: 'R$ 19,90' },
    checkoutUrl: '#',
    dor: {
      frase: 'Você já se sentiu longe demais para voltar?',
      paragrafos: [
        'Tem momentos em que a distância de Deus parece grande demais. Falhas repetidas, promessas quebradas, o silêncio depois de um pecado que você jurou não cometer de novo. E uma voz que diz: "Desta vez foi longe demais."',
        'A história de Jerusalém é a nossa história. A cidade que Deus amou, que recebeu os profetas, que tinha o templo — e que mesmo assim negou, matou e destrocou o Filho de Deus.',
        'E mesmo assim, a primeira mensagem do ressuscitado foi: "Ide e dizei aos meus discípulos... e a Pedro." Somos todos Jerusalém. E a graça é maior do que imaginamos.',
      ],
    },
    beneficios: [
      { icone: '✝️', titulo: 'O peso da cruz', descricao: 'Entenda o que realmente aconteceu no Calvário e por que foi necessário.' },
      { icone: '❤️', titulo: 'Graça escandalosa', descricao: 'Por que Deus perdoa quem menos merece — e como isso muda tudo.' },
      { icone: '🪞', titulo: 'Quadros "O Espelho"', descricao: 'Momentos de aplicação pessoal ao longo do livro para não ficar na teoria.' },
      { icone: '🔄', titulo: 'A vida que recomeça', descricao: 'Como voltar depois de cair — e por que Deus ainda te chama pelo nome.' },
      { icone: '📖', titulo: 'Linguagem simples', descricao: 'Escrito para uma criança entender e um adulto sentir — sem jargão teológico.' },
      { icone: '🗓️', titulo: 'Plano de leitura de 7 dias', descricao: 'Orações-modelo e reflexões para cada dia da semana.' },
    ],
    capitulos: [
      { numero: '01', titulo: 'A Cidade Amada', descricao: 'Por que somos todos Jerusalém e o amor que veio chorando.' },
      { numero: '02', titulo: 'A Multidão e a Cruz', descricao: 'O peso do pecado, a traição de Judas, a negação de Pedro e o grito da multidão.' },
      { numero: '03', titulo: 'O Olhar que Perdoa', descricao: 'O olhar do ressuscitado que alcança e restaura quem falhou.' },
      { numero: '04', titulo: 'A Vida que Recomeça', descricao: 'A nova aliança e a missão de levar o Evangelho ao mundo.' },
    ],
    paraQuem: [
      'Quem se sente distante de Deus e não sabe se pode voltar',
      'Cristãos que precisam redescobrir a profundidade da graça',
      'Quem quer presentear alguém com uma mensagem de esperança',
      'Grupos de discipulado e estudos sobre a cruz',
      'Qualquer pessoa que já negou a Cristo e precisa saber: há perdão',
    ],
    autor: {
      nome: 'Pr. Francisco Gomes Alves',
      cargo: 'Pastor • Conferencista • Ensinador da Palavra',
      bio: 'Com mais de duas décadas servindo ao Senhor, o Pr. Francisco Gomes tem o chamado de tornar a vida com Deus simples, prática e real. Vice-Presidente do MAJEV — Ministério Arrependei-vos, Jesus Está Voltando — seus livros são escritos para edificar, não impressionar. Cada palavra nasce de uma convicção: a Palavra de Deus basta, e ela é suficiente para transformar qualquer vida.',
      foto: '/author_pastoral.png',
    },
    depoimentos: [
      { nome: 'Letícia M.', cargo: 'Cristã', texto: 'Li de uma vez só. Cada página me lembrava que a graça de Deus é muito maior do que eu imaginava.' },
      { nome: 'Pr. André Santos', cargo: 'Pastor', texto: 'Usei em minha série sobre a cruz. Os quadros "O Espelho" são poderosos — a congregação foi impactada.' },
      { nome: 'Renata Oliveira', cargo: 'Mãe de família', texto: 'Comprei para dar de presente para minha filha que estava afastada de Deus. Foi o início de um retorno.' },
    ],
    faq: [
      { pergunta: 'Como recebo o e-book após a compra?', resposta: 'Após a confirmação do pagamento, você recebe um e-mail com o link para download imediato em PDF.' },
      { pergunta: 'Posso ler no celular?', resposta: 'Sim! O PDF é otimizado para leitura em celular, tablet, computador e e-reader.' },
      { pergunta: 'O acesso é vitalício?', resposta: 'Sim. Uma vez baixado, o arquivo é seu para sempre.' },
      { pergunta: 'É um bom livro para presentear?', resposta: 'Sim, especialmente para pessoas que estão distantes de Deus ou passando por uma fase difícil na fé.' },
      { pergunta: 'O pagamento é seguro?', resposta: 'Sim. A compra é processada pela Hotmart, plataforma líder em produtos digitais no Brasil.' },
      { pergunta: 'É adequado para grupos e células?', resposta: 'Sim! O plano de 7 dias foi pensado também para grupos de leitura e discipulado.' },
    ],
    seo: {
      title: 'Somos Todos Jerusalém | Pr. Francisco Gomes',
      description: 'O perdão que transforma quem um dia negou a Cristo. Uma jornada pela história da cruz — do nosso pecado à graça que recomeça tudo.',
    },
  },

  {
    slug: 'cercados-mas-nao-sozinhos',
    titulo: 'Cercados, mas Não Sozinhos',
    subtitulo: 'Joabe e Abisai, e a coragem de enfrentar a batalha de duas frentes',
    promessa: 'Quando o problema está à sua frente e a luta é por dentro — há uma palavra de Deus para quem se sente cercado.',
    descricao: 'Uma jornada pelo coração de 1 Crônicas 19 para quem está lutando em mais de uma frente ao mesmo tempo e precisa de coragem, fé e a presença de um irmão ao lado.',
    capa: '/livros/cercados-mas-nao-sozinhos/capa.png',
    mockup: '/livros/cercados-mas-nao-sozinhos/mockup-escuro.png',
    acento: '#b8863f',
    preco: { de: 'R$ 39,90', por: 'R$ 19,90' },
    checkoutUrl: '#',
    dor: {
      frase: 'Você já se sentiu cercado por todos os lados ao mesmo tempo?',
      paragrafos: [
        'O problema bem à sua frente e, ao mesmo tempo, a luta calada por dentro. A pressão no trabalho e a tensão em casa. O ataque visível e o medo invisível.',
        'A vida raramente nos cerca por um lado só. E há momentos em que o coração aperta diante da sensação de estar espremido — sem retaguarda, sem saída, sem ninguém que entenda.',
        'Foi exatamente assim que Joabe se viu no vale de 1 Crônicas 19. E o que ele fez naquele instante decisivo tem muito a dizer sobre as suas batalhas de hoje.',
      ],
    },
    beneficios: [
      { icone: '🛡️', titulo: 'Coragem para duas frentes', descricao: 'Como agir com firmeza quando o perigo vem de dentro e de fora ao mesmo tempo.' },
      { icone: '🤝', titulo: 'O valor de um irmão', descricao: 'Por que ninguém foi feito para lutar sozinho — e como ser (e buscar) esse irmão.' },
      { icone: '⚖️', titulo: 'Equilíbrio da fé', descricao: 'Esforçar-se com tudo e, ao mesmo tempo, entregar o resultado a Deus.' },
      { icone: '👁️', titulo: 'Olhar o perigo de frente', descricao: 'Como encarar a ameaça real sem ser dominado pelo desespero.' },
      { icone: '🎯', titulo: 'Lutar por uma causa maior', descricao: 'O que acontece quando você luta por algo maior do que você mesmo.' },
      { icone: '👑', titulo: 'O Rei que desceu ao vale', descricao: 'A revelação de Cristo que não ficou no palácio enquanto você sangrava.' },
    ],
    capitulos: [
      { numero: '01', titulo: 'Como Nascem as Guerras', descricao: 'A origem do conflito: a bondade recusada, a suspeita e o orgulho que não recua.' },
      { numero: '02', titulo: 'Cercado por Diante e por Detrás', descricao: 'A batalha de duas frentes e a coragem de olhar o perigo sem desespero.' },
      { numero: '03', titulo: 'O Pacto dos Irmãos', descricao: 'O coração do livro: confiar, socorrer e lutar costas com costas.' },
      { numero: '04', titulo: 'Esforça-te', descricao: 'Coragem que age, causa que ergue os olhos e fé que entrega o desfecho a Deus.' },
      { numero: '05', titulo: 'A Vitória que Vem de Deus', descricao: 'O avanço, a vitória e o Rei que desce pessoalmente à batalha.' },
    ],
    paraQuem: [
      'Quem está enfrentando batalhas em mais de uma frente ao mesmo tempo',
      'Quem se sente sozinho na luta e precisa redescobrir a irmandade',
      'Líderes, pais e servos cansados que precisam de coragem renovada',
      'Grupos, células e estudos bíblicos (tem guia de leitura e oração)',
      'Cristãos que querem aprofundar o estudo de 1 Crônicas',
    ],
    autor: {
      nome: 'Pr. Francisco Gomes Alves',
      cargo: 'Pastor • Conferencista • Ensinador da Palavra',
      bio: 'Com mais de duas décadas servindo ao Senhor, o Pr. Francisco Gomes tem o chamado de tornar a vida com Deus simples, prática e real. Vice-Presidente do MAJEV — Ministério Arrependei-vos, Jesus Está Voltando — seus livros são escritos para edificar, não impressionar. Cada palavra nasce de uma convicção: a Palavra de Deus basta, e ela é suficiente para transformar qualquer vida.',
      foto: '/author_pastoral.png',
    },
    depoimentos: [
      { nome: 'Ana Paula S.', cargo: 'Cristã', texto: 'Estava passando por um momento muito difícil. A história de Joabe me ensinou que posso me esforçar e ao mesmo tempo confiar em Deus.' },
      { nome: 'Pr. Marcos Leal', cargo: 'Pastor', texto: 'Indiquei para toda a minha célula. O guia de oração ao final é perfeito para grupos. Exegese fiel, aplicação pastoral sensível.' },
      { nome: 'Roberta Fontes', cargo: 'Líder', texto: 'Nunca havia prestado atenção em 1 Crônicas 19, mas o Pr. Francisco abre esse texto de um jeito que você não consegue parar de ler.' },
    ],
    faq: [
      { pergunta: 'Como recebo o e-book após a compra?', resposta: 'Após a confirmação do pagamento, você recebe um e-mail com o link para download imediato em PDF.' },
      { pergunta: 'Posso ler no celular?', resposta: 'Sim! O PDF é otimizado para leitura em celular, tablet, computador e e-reader.' },
      { pergunta: 'O acesso é vitalício?', resposta: 'Sim. Uma vez baixado, o arquivo é seu para sempre.' },
      { pergunta: 'É adequado para grupos e células?', resposta: 'Sim! O livro traz um guia de leitura e oração pensado para uso pessoal, em família ou em grupo.' },
      { pergunta: 'O pagamento é seguro?', resposta: 'Sim. A compra é processada pela Hotmart, plataforma líder em produtos digitais no Brasil.' },
      { pergunta: 'Posso presentear alguém?', resposta: 'Sim! Você pode baixar o arquivo e encaminhar para quem desejar presentear.' },
    ],
    seo: {
      title: 'Cercados, mas Não Sozinhos | Pr. Francisco Gomes',
      description: 'Para quem está lutando em mais de uma frente. Uma jornada por 1 Crônicas 19 sobre coragem, irmandade e fé em meio ao cerco.',
    },
  },
];

export function getEbook(slug: string): EbookData | undefined {
  return EBOOKS.find(e => e.slug === slug);
}
