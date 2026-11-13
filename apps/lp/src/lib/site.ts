export const site = {
  name: "Castelinho do Saber",
  shortName: "Castelinho",
  title: "Castelinho do Saber Bauru | Educação Infantil",
  tagline: "Educação Infantil em Bauru",
  city: "Bauru — SP",
  ages: "4 meses a 5 anos",
  description:
    "Escola de educação infantil em Bauru (4 meses a 5 anos). Brincar, vínculos e descobertas em um ambiente acolhedor no Jd. Terra Branca.",
  ogImage: "/images/og.jpg",
  instagram: {
    handle: "@escolacastelinho_bauru",
    url: "https://www.instagram.com/escolacastelinho_bauru/",
  },
  whatsapp: {
    url: "https://wa.me/message/P4QKE6AZGWZLH1",
    label: "Agendar uma visita",
  },
  phone: "(14) 99139-9578",
  phoneTel: "+5514991399578",
  address: {
    street: "Rua México, 241",
    neighborhood: "Jardim Terra Branca",
    city: "Bauru — SP",
    cep: "17054-060",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Rua+M%C3%A9xico+241+Jardim+Terra+Branca+Bauru+SP",
  },
} as const;

export const navLinks = [
  { href: "#essencia", label: "A escola" },
  { href: "#turmas", label: "Turmas" },
  { href: "#espacos", label: "Espaços" },
  { href: "#matriculas", label: "Matrículas" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
] as const;

export const differentials = [
  {
    title: "Infância em primeiro lugar",
    text: "O brincar, a imaginação e o vínculo são o centro da rotina — aprender acontece no tempo de cada criança.",
  },
  {
    title: "Do berçário ao pré",
    text: "Acompanhamos de perto de 4 meses a 5 anos, com turmas pensadas para cada fase do desenvolvimento.",
  },
  {
    title: "Cuidado que se sente",
    text: "Equipe próxima, acolhimento na adaptação e parceria com as famílias no dia a dia.",
  },
  {
    title: "Estímulos com significado",
    text: "Experiências sensoriais, movimento e descobertas que respeitam o ritmo de quem ainda está começando o mundo.",
  },
] as const;

export const classes = [
  {
    name: "Berçário",
    age: "A partir de 4 meses",
    text: "Acolhimento, vínculo e rotina segura nos primeiros meses fora de casa.",
  },
  {
    name: "Maternal",
    age: "Por volta de 1 a 2 anos",
    text: "Movimento, linguagem e exploração com muito brincar e afeto.",
  },
  {
    name: "Infantil / Pré",
    age: "Até 5 anos",
    text: "Autonomia, convivência e descobertas que preparam para a próxima etapa.",
  },
] as const;

/** Hero: só imagens de crianças / rotina (sem equipe). */
export const heroSlides = [
  {
    src: "/images/hero/01-lanche.jpg",
    alt: "Lanche coletivo no pátio do Castelinho",
  },
  {
    src: "/images/hero/02-sorriso.jpg",
    alt: "Criança sorrindo no parquinho com uniforme da escola",
  },
  {
    src: "/images/hero/03-areia.jpg",
    alt: "Brincar na areia do parquinho",
  },
  {
    src: "/images/hero/04-carrossel.jpg",
    alt: "Crianças no carrossel do parquinho",
  },
  {
    src: "/images/hero/05-brinquedos.jpg",
    alt: "Brincar com gangorras e brinquedos",
  },
  {
    src: "/images/hero/06-balanco.jpg",
    alt: "Momentos no balanço",
  },
  {
    src: "/images/hero/07-festa.jpg",
    alt: "Festa junina na escola",
  },
  {
    src: "/images/hero/08-giz.jpg",
    alt: "Desenhando com giz no pátio",
  },
] as const;

/** Baralho de fotos da seção Essência (retratos ~3:4). */
export const essenceCards = [
  {
    src: "/images/sections/cards/01-carrossel.jpg",
    alt: "Crianças no carrossel do parquinho",
  },
  {
    src: "/images/sections/cards/02-lanche.jpg",
    alt: "Lanche coletivo no pátio",
  },
  {
    src: "/images/sections/cards/03-areia.jpg",
    alt: "Atividade sensorial na sala",
  },
  {
    src: "/images/sections/cards/04-gangorras.jpg",
    alt: "Gangorras e brinquedos",
  },
  {
    src: "/images/sections/cards/05-letras.jpg",
    alt: "Aprendizado com letras na sala",
  },
  {
    src: "/images/sections/cards/06-baldes.jpg",
    alt: "Brincar com baldes no parquinho",
  },
  {
    src: "/images/sections/cards/07-giz.jpg",
    alt: "Desenhando com giz no chão",
  },
  {
    src: "/images/sections/cards/08-atividade.jpg",
    alt: "Atividade pedagógica na mesa",
  },
  {
    src: "/images/sections/cards/09-uniforme.jpg",
    alt: "Uniforme e brincar ao ar livre",
  },
  {
    src: "/images/sections/cards/10-balanco.jpg",
    alt: "Momentos no balanço",
  },
] as const;

/** Galeria: retratos ~4:5 + vídeos verticais (não vão no hero). */
export const gallery = [
  {
    type: "image" as const,
    src: "/images/gallery/carrossel.jpg",
    alt: "Crianças no carrossel do parquinho",
  },
  {
    type: "video" as const,
    src: "/videos/escola-01.mp4",
    poster: "/videos/escola-01-poster.jpg",
    alt: "Brincar na areia do Castelinho",
  },
  {
    type: "image" as const,
    src: "/images/gallery/caixa-areia.jpg",
    alt: "Caixa de areia e exploração",
    /** Print 2 — só desktop */
    desktopOnly: true,
  },
  {
    type: "image" as const,
    src: "/images/gallery/gangorras.jpg",
    alt: "Gangorras e brinquedos no pátio",
  },
  {
    type: "video" as const,
    src: "/videos/escola-03.mp4",
    poster: "/videos/escola-03-poster.jpg",
    alt: "Aventura nos pneus do parquinho",
  },
  {
    type: "image" as const,
    src: "/images/gallery/brinquedos.jpg",
    alt: "Momentos de brincar juntos",
  },
  {
    type: "image" as const,
    src: "/images/gallery/amigos-parque.jpg",
    alt: "Amigos no parquinho",
  },
  {
    type: "video" as const,
    src: "/videos/escola-02.mp4",
    poster: "/videos/escola-02-poster.jpg",
    alt: "Cuidando da horta da escola",
  },
  {
    type: "image" as const,
    src: "/images/gallery/sala-areia.jpg",
    alt: "Atividade sensorial na sala",
  },
  {
    type: "image" as const,
    src: "/images/gallery/sala-letras.jpg",
    alt: "Letras e nomes na sala",
  },
  {
    type: "image" as const,
    src: "/images/gallery/letras.jpg",
    alt: "Alfabeto e descobertas na sala",
  },
  {
    type: "image" as const,
    src: "/images/gallery/patio-ativo.jpg",
    alt: "Brincar ativo no pátio",
  },
  {
    type: "image" as const,
    src: "/images/gallery/lanche.jpg",
    alt: "Lanche coletivo no pátio",
  },
  {
    type: "image" as const,
    src: "/images/gallery/areia.jpg",
    alt: "Brincar na areia",
  },
  {
    type: "image" as const,
    src: "/images/gallery/balanco.jpg",
    alt: "Momentos no balanço",
  },
  {
    type: "image" as const,
    src: "/images/gallery/uniforme.jpg",
    alt: "Uniforme e brincar ao ar livre",
  },
  {
    type: "image" as const,
    src: "/images/gallery/alfabeto.jpg",
    alt: "Aprendizado com letras e nomes",
  },
] as const;

export const enrollmentSteps = [
  {
    title: "Agende pelo WhatsApp",
    text: "Escolha o dia e o horário que forem melhores para sua família.",
  },
  {
    title: "Venha conhecer",
    text: "Conheça os espaços, a equipe e o jeito Castelinho de cuidar.",
  },
  {
    title: "Garanta a vaga",
    text: "A secretaria explica documentos, valores e próximos passos.",
  },
] as const;

export const faqs = [
  {
    q: "A partir de que idade a criança pode estudar no Castelinho?",
    a: "Atendemos turmas de 4 meses a 5 anos, da educação infantil (berçário ao pré).",
  },
  {
    q: "Posso visitar antes de matricular?",
    a: "Sim — e recomendamos! Agende pelo WhatsApp e venha conhecer a escola de perto.",
  },
  {
    q: "Onde fica a escola?",
    a: "Na Rua México, 241, Jardim Terra Branca, Bauru — SP (CEP 17054-060).",
  },
  {
    q: "Como falo com a escola?",
    a: "Pelo WhatsApp (link na página), telefone (14) 99139-9578 ou Instagram @escolacastelinho_bauru.",
  },
] as const;
