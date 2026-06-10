const fs = require('fs');

// 1. Expand the Legal Pages content in App.tsx
let app = fs.readFileSync('src/App.tsx', 'utf8');

const oldPrivacidade = `<p>A Editora O Chamado da Graça tem o compromisso com a privacidade e a segurança de seus clientes durante todo o processo de navegação e compra pelo site.</p><p>Os dados cadastrais dos clientes não são vendidos, trocados ou divulgados para terceiros, exceto quando essas informações são necessárias para o processo de entrega, para cobrança, ou para participação em promoções solicitadas pelos clientes.</p>`;

const newPrivacidade = `<p>A Editora O Chamado da Graça tem o compromisso com a privacidade e a segurança de seus clientes durante todo o processo de navegação e compra pelo site.</p>
<p>Os dados cadastrais dos clientes não são vendidos, trocados ou divulgados para terceiros, exceto quando essas informações são necessárias para o processo de entrega, para cobrança, ou para participação em promoções solicitadas pelos clientes.</p>
<h3>1. Coleta de Informações</h3>
<p>Coletamos informações pessoais fornecidas voluntariamente por você durante o processo de compra, cadastro em nossa newsletter ou preenchimento de formulários de contato. Isso inclui nome, endereço de e-mail e dados de cobrança.</p>
<h3>2. Uso das Informações</h3>
<p>As informações coletadas são utilizadas exclusivamente para viabilizar as transações comerciais, fornecer suporte ao cliente, e enviar comunicações relevantes sobre nossos lançamentos, desde que autorizado previamente. Não realizamos spam sob nenhuma circunstância.</p>
<h3>3. Segurança dos Dados</h3>
<p>Implementamos rigorosas medidas de segurança em nível tecnológico e organizacional para proteger seus dados pessoais contra acessos não autorizados, perdas ou alterações.</p>
<h3>4. Seus Direitos</h3>
<p>Em conformidade com a LGPD (Lei Geral de Proteção de Dados), você tem o direito de solicitar a exclusão, correção ou atualização de seus dados a qualquer momento, enviando um e-mail para nossa equipe de suporte.</p>`;

const oldTermos = `<p>Ao acessar o site O Chamado da Graça, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p><p>Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. A Editora O Chamado da Graça não garante que qualquer material em seu site seja preciso, completo ou atual.</p>`;

const newTermos = `<p>Ao acessar o site O Chamado da Graça, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis.</p>
<h3>1. Licença de Uso</h3>
<p>Os e-books e materiais adquiridos nesta plataforma são exclusivamente para uso pessoal e intransferível. É terminantemente proibida a revenda, distribuição, cópia ou reprodução pública de qualquer obra sem a autorização prévia por escrito do autor.</p>
<h3>2. Isenção de Responsabilidade</h3>
<p>Os materiais exibidos no site podem incluir erros técnicos, tipográficos ou fotográficos. A Editora O Chamado da Graça não garante que qualquer material em seu site seja preciso, completo ou atual, embora nos esforcemos para manter o mais alto padrão de qualidade editorial.</p>
<h3>3. Modificações</h3>
<p>A Editora pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.</p>
<h3>4. Política de Reembolso</h3>
<p>Garantimos a devolução integral do valor pago dentro do prazo de 7 dias úteis após a compra, caso o cliente sinta-se insatisfeito com o conteúdo digital, conforme estabelecido pelo Código de Defesa do Consumidor.</p>`;

app = app.replace(oldPrivacidade, newPrivacidade);
app = app.replace(oldTermos, newTermos);

fs.writeFileSync('src/App.tsx', app);

// 2. Darken Hero Overlay in HomePage.tsx
let home = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

// The hero overlay was: backgroundImage: 'linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9)), url("/home_hero_bg.png")'
const oldOverlay = `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.9))`;
const newOverlay = `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95))`;

home = home.replace(oldOverlay, newOverlay);

// Also let's just make sure the text shadow is very strong
const oldTitleShadow = `textShadow: '0 4px 6px rgba(0,0,0,0.9)'`;
const newTitleShadow = `textShadow: '0 6px 15px rgba(0,0,0,1), 0 2px 4px rgba(0,0,0,1)'`;

home = home.replace(oldTitleShadow, newTitleShadow);
home = home.replace(`textShadow: '0 2px 4px rgba(0,0,0,0.8)'`, `textShadow: '0 4px 10px rgba(0,0,0,1)'`);
home = home.replace(`textShadow: '0 2px 4px rgba(0,0,0,0.8)'`, `textShadow: '0 4px 10px rgba(0,0,0,1)'`);

fs.writeFileSync('src/pages/HomePage.tsx', home);
