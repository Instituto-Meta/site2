// ==============================
// ROLAR PARA A ÁREA DE CURSOS
// ==============================

function irCursos() {

    document.getElementById("cursos").scrollIntoView({
        behavior: "smooth"
    });

}

// ==============================
// ABRIR LINK EXTERNO
// ==============================

function abrirLink(url) {
    window.open(url, "_blank");
}

// ==============================
// MODAL PARA IMAGENS
// ==============================

function abrirImagem(src) {
    let modal = document.getElementById('modalImagem');
    let img = document.getElementById('modalImg');
    modal.style.display = 'block';
    img.src = src;
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    document.getElementById('modalImagem').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Fechar modal com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        fecharModal();
    }
});

// ==============================
// FAQ - PERGUNTAS FREQUENTES
// ==============================

function toggleFaq(elemento) {
    let resposta = elemento.querySelector('.faq-resposta');
    let span = elemento.querySelector('span');

    if (resposta.style.display === 'none' || resposta.style.display === '') {
        resposta.style.display = 'block';
        span.textContent = '−';
    } else {
        resposta.style.display = 'none';
        span.textContent = '+';
    }
}

// ==============================
// CONTADOR DE ALUNOS/CONQUISTAS
// ==============================

function animarContador(id, valorFinal) {
    let atual = 0;
    let elemento = document.getElementById(id);
    if (!elemento) return;

    let incremento = Math.ceil(valorFinal / 40);
    let intervalo = setInterval(() => {
        atual += incremento;
        if (atual >= valorFinal) {
            atual = valorFinal;
            clearInterval(intervalo);
        }
        elemento.textContent = atual;
    }, 30);
}

// Executar contadores após carregar
setTimeout(() => {
    animarContador('numAlunos', 580);
    animarContador('numCursos', 25);
    animarContador('numAnos', 8);
    animarContador('numParcerias', 12);
}, 500);

// ==============================
// INFORMAÇÕES DOS CURSOS (CARDS)
// ==============================

const cursosInfo = {

    informatica: {
        titulo: "Curso de Informática",
        texto: "Aprenda desde o básico até recursos avançados. O curso aborda Windows, Internet, Word, Excel, PowerPoint, Canva, digitação, organização de arquivos e noções importantes para o mercado de trabalho."
    },

    profissionalizante: {
        titulo: "Cursos Profissionalizantes",
        texto: "Cursos voltados para a formação rápida e prática em diversas áreas do mercado de trabalho. Oferecemos cursos como: Assistente Administrativo, Auxiliar de Recursos Humanos, Assistente de Logística, Operador de Computador, entre outros. Duração: 3 a 6 meses. Modalidade: Presencial."
    },

    tecnico: {
        titulo: "Cursos Técnicos",
        texto: "Cursos de nível médio que preparam o aluno para atuar em áreas específicas do mercado. Oferecemos: Técnico em Informática, Técnico em Administração, Técnico em Enfermagem, Técnico em Logística, Técnico em Segurança do Trabalho, entre outros. Duração: 12 a 18 meses. Modalidade: Presencial com estágio supervisionado."
    }

};

// ==============================
// MOSTRAR CURSO (CARDS)
// ==============================

function mostrarCurso(nomeCurso) {

    let area = document.getElementById("detalhesCurso");

    area.innerHTML = `

        <h3>${cursosInfo[nomeCurso].titulo}</h3>

        <p>${cursosInfo[nomeCurso].texto}</p>

    `;

    area.scrollIntoView({
        behavior: "smooth"
    });

}

// ==============================
// INFORMAÇÕES DOS CURSOS (TABELA)
// ==============================

const cursosTabela = {

    'informatica-basica': {
        titulo: "Informática Básica",
        texto: "Curso introdutório para iniciantes. Aprenda os fundamentos da informática: sistema operacional Windows, navegação na internet, uso do pacote Office (Word, Excel, PowerPoint), digitação, organização de arquivos e pastas, e noções de segurança digital. Duração: 4 meses. Modalidade: Presencial."
    },

    'informatica-avancada': {
        titulo: "Informática Avançada",
        texto: "Curso para quem já possui conhecimentos básicos e deseja se aprofundar. Conteúdo: Excel avançado (fórmulas, gráficos, tabelas dinâmicas), PowerPoint profissional, Canva para design, gerenciamento de arquivos em nuvem, noções de programação básica e ferramentas de produtividade. Duração: 6 meses. Modalidade: Presencial."
    },

    eja: {
        titulo: "Ensino Médio EJA",
        texto: "Ideal para jovens e adultos que desejam concluir o Ensino Médio. A modalidade é Semi EAD, com aulas presenciais a cada 15 dias, oferecendo flexibilidade e acompanhamento pedagógico com certificado reconhecido. Duração: 18 meses.\n\nDisciplinas do curso:\n• Artes\n• Educação Física\n• Filosofia\n• Sociologia\n• Inglês\n• Física\n• Química\n• Biologia\n• Geografia\n• História\n• Matemática\n• Língua Portuguesa"
    },

    profissionalizante: {
        titulo: "Cursos Profissionalizantes",
        texto: "Cursos voltados para a formação rápida e prática em diversas áreas do mercado de trabalho. Oferecemos cursos como: Assistente Administrativo, Auxiliar de Recursos Humanos, Assistente de Logística, Operador de Computador, Auxiliar de Enfermagem, entre outros. Duração: 3 a 6 meses. Modalidade: Presencial."
    },

    tecnico: {
        titulo: "Cursos Técnicos",
        texto: "Cursos de nível médio que preparam o aluno para atuar em áreas específicas do mercado. Oferecemos: Técnico em Informática, Técnico em Administração, Técnico em Enfermagem, Técnico em Logística, Técnico em Segurança do Trabalho, Técnico em Radiologia, entre outros. Duração: 12 a 18 meses. Modalidade: Presencial com estágio supervisionado."
    },

    graduacao: {
        titulo: "🎓 Cursos de Graduação - UniFatecie EAD",
        texto: `
            <strong>TECNÓLOGOS:</strong><br>
            Design de Produto, Jogos Digitais, Produção Publicitária, Segurança no Trânsito, Agente Comunitário, Processos Escolares, Análise e Desenvolvimento de Sistemas, Ciência do Futuro, Comércio Exterior, Design de Interiores, Design de Moda, Design Gráfico, Gastronomia, Gestão Ambiental, Gestão Comercial, Gestão da Qualidade, Gestão de Produção Industrial, Gestão de Recursos Humanos, Gestão do Agronegócio, Gestão Financeira, Gestão Hospitalar, Gestão Pública, Hotelaria, Investigação Forense e Perícia Criminal, Logística, Marketing, Negócios Imobiliários, Podologia, Segurança da Informação, Processos Gerenciais, Processos Químicos, Secretariado, Segurança do Trabalho, Segurança Pública, Sistemas para Internet, Estética e Cosmética, Terapias Integrativas e Complementares, Radiologia, Gestão de Segurança Privada.<br><br>
            <strong>BACHARELADO:</strong><br>
            Ciências Econômicas, Teologia, Administração, Artes Visuais, Biblioteconomia, Ciências Biológicas, Ciências Contábeis, Educação Física, Química, Jornalismo, Psicopedagogia, Publicidade e Propaganda, Serviço Social, Sistemas de Informação, Engenharia de Produção, Engenharia Ambiental e Sanitária, Engenharia de Software, Arquitetura e Urbanismo, Engenharia Agronômica (Agronomia), Engenharia Civil, Engenharia da Computação, Engenharia Elétrica, Engenharia Mecânica, Psicanálise.<br><br>
            <strong>LICENCIATURAS:</strong><br>
            Educação Especial, Sociologia, Artes, Ciências Biológicas, Educação Física, Filosofia, Geografia, História, Letras (Português/Inglês), Letras (Português/Libras), Matemática, Música, Pedagogia.<br><br>
            <strong>2ª GRADUAÇÃO:</strong><br>
            Administração - Segunda Graduação p/ Bacharéis e Tecnólogos na Área de Gestão, Ciências Contábeis - Segunda Graduação p/ Bacharéis e Tecnólogos na Área de Gestão, Artes p/Licenciados, Ciências Biológicas p/ Licenciados, Educação Física (Bacharelado p/ Licenciados em Educação Física), Educação Física (Licenciatura p/ Bacharéis em Educação Física), Filosofia p/ Licenciados, Geografia p/ Licenciados, História p/ Licenciados, Letras (Português/Inglês) p/ Licenciados, Letras (Português/Libras) p/ Licenciados, Matemática p/ Licenciados, Pedagogia p/ Licenciados, Sociologia p/ Licenciados.
        `
    },

    pos: {
        titulo: "📈 Cursos de Pós-Graduação - UniFatecie EAD",
        texto: `
            <strong>🏢 EMPRESARIAL:</strong><br>
            Gestão e Qualidade em Saúde Pública, Inovação Estratégica e Design Digital, Agricultura e Manejo Sustentável, Comércio Global 360: Marketing Internacional e Negócios Internacionais, Comunicação e Liderança: Gestão Estratégica, Desenvolvimento Pessoal e Gestão de Carreira, Design Criativo, Edtech e Gestão Inovadora, Engenharia de Software e Segurança da Informação, Estratégias Transformadoras em Políticas Públicas e Gestão Social, Finanças Integradas, Corporativas e Públicas, Gestão de Conflitos e Desenvolvimento Organizacional, Gestão de Operações de Exportação, Gestão de Operações Logísticas, Gestão de Pessoas e Desenvolvimento Humano, Gestão de Unidades de Conservação, Liderança Corporativa, Liderança de Projetos e Inovação Estratégica, Master em Gestão Social e Políticas Públicas, Master em Marketing e Inteligência de Mercado, MBA em Estratégias Avançadas de Operações e Logística Integrada, MBA em Gestão Avançada e Liderança Transformadora, MBA em Gestão Contábil e Auditoria Avançada, MBA em Gestão da Qualidade e Auditoria.<br><br>
            <strong>🏥 SAÚDE:</strong><br>
            Saúde Integrada e Bem-Estar do Idoso, Administração Hospitalar e Serviços de Saúde, Auditoria em Saúde, Biociência Avançada: Tecnologias Biológicas, Cuidados Avançados: Pré e Pós-Operatório em Estética Facial e Corporal, Diagnóstico Avançado: Análises Clínicas e Laboratoriais, Enfermagem do Trabalho, Envelhecimento Saudável: Prevenção, Tratamento e Cuidado, Gastronomia: Nutrição Humana e Educação Alimentar, Gestão Hospitalar, Gestão Integrada: Segurança e Saúde Ocupacional no Ambiente Corporativo, Nutrição Clínica e Dietética, Psicologia Clínica, Psicologia Clínica e Saúde Mental, Saúde Ocupacional: Ginástica Laboral, Ergonomia e Performance no Ambiente de Trabalho, Saúde Pública, Serviço Social e Políticas Públicas com Ênfase em Saúde, Zoologia.<br><br>
            <strong>🔧 ENGENHARIA:</strong><br>
            Arquitetura e Urbanismo, Construções Verdes, Sustentabilidade e Responsabilidade Ambiental, Engenharia de Gerenciamento de Obras, Engenharia de Gerenciamento de Projetos, Engenharia de Segurança Contra Incêndio e Pânico, Engenharia de Segurança do Trabalho, Engenharia de Software, Gestão Estratégica de Projetos, MBA em Gestão de Produção Industrial, Segurança e Eficiência na Produção: Gestão de Riscos.<br><br>
            <strong>📚 EDUCAÇÃO:</strong><br>
            Alfabetização e Letramento, Aprendizagem Contínua: Metodologia do Ensino de História para Professores, Aprendizagem Organizacional, Artes e Ludicidade, Atendimento Educacional Especializado - AEE, Biblioteconomia e Gestão de Bibliotecas, Didática e Metodologia do Ensino Básico e Superior, EAD e Novas Tecnologias Educacionais, Educação 5.0 - Metodologias e Tecnologias Inovadoras, Educação de Jovens e Adultos, Educação Digital e Inovação Pedagógica, Educação do Futuro, Educação Especial (Atendimento às Necessidades Especiais), Educação Especial e Inclusiva - Neuropedagogia e Psicomotricidade, Educação Física: Abordagens Pedagógicas, Educação Infantil, Educação Infantil e Alfabetização, Educação no Campo, Ensino de Inglês, Ensino Religioso, Filosofia: Tradições e Reflexões, Future Thinking: Pensamento e Estudo do Futuro, Gestão da Aprendizagem e Inovação Tecnológica na Educação, Gestão Escolar, Língua Portuguesa: Redação Avançada, Literatura Brasileira e Internacional, Literatura e Cultura, Ludopedagogia, MBA em Ciências da Computação para Licenciados, MBA em Educação Executiva, Mediação para o Ensino a Distância: Inovação, Metodologia do Ensino de Biologia e Ciências, Metodologia do Ensino de Geografia, Metodologia do Ensino de Matemática, Metodologias Avançadas em Métodos de Ensino de Inglês, Neuroaprendizagem, Neuropsicologia Educacional, Pedagogia e Inclusão: Educação Especial, Psicopedagogia Clínica, Psicopedagogia e Práticas Educacionais, Psicopedagogia Institucional e Clínica, Sociologia na Educação, Teologia Cristã e Estudos Bíblicos Avançados, Terapia Ocupacional com Ênfase em Educação Especial e Inclusiva, Transtorno do Espectro Autista - TEA, Educação Física e Psicomotricidade, Educação Física Escolar, Personal Trainer, Treinamento Resistido e Aeróbio.<br><br>
            <strong>⚖️ DIREITO:</strong><br>
            Direito Constitucional e Prática Trabalhista, Direito do Trabalho e Previdenciário, Direito Penal, Direito Tributário e Direito Empresarial, Direito, Psicologia e Gestão de Conflitos Laborais, Gestão e Direito Penal e Trabalhista, Saúde Ocupacional e Direito do Trabalho, Segurança Jurídica e Bem-Estar no Trabalho, Segurança Pública.<br><br>
            <strong>💼 NEGÓCIOS E TECNOLOGIAS:</strong><br>
            Auditoria, Contabilidade e Perícia Contábil, Comunicação e Mídias Digitais, Controladoria e Custos, Criação e Desenvolvimento de Produtos, Empreendedorismo e Inovação, Gestão Comercial e Vendas, Gestão de Cooperativas, Gestão de Cooperativas de Crédito, Gestão de Tecnologia da Informação - T.I., Gestão de Agronegócio, Gestão Empresarial, Gestão Estratégica de Pessoas, Gestão Financeira, Gestão Pública, Logística e Operações, Marketing Digital, Negócios Imobiliários, Psicologia Organizacional.
        `
    }

};

// ==============================
// ABRIR CURSO (TABELA)
// ==============================

function abrirCurso(nomeCurso) {

    let curso = cursosTabela[nomeCurso];

    if (!curso) {
        alert("Curso não encontrado!");
        return;
    }

    let novaAba = window.open("", "_blank");

    // Formatando o texto com quebras de linha
    let textoFormatado = curso.texto.replace(/\n/g, '<br>');

    // Verificar se é o EJA para mostrar disciplinas em lista
    let disciplinasHtml = '';
    if (nomeCurso === 'eja') {
        let disciplinas = ['Artes', 'Educação Física', 'Filosofia', 'Sociologia', 'Inglês', 
                          'Física', 'Química', 'Biologia', 'Geografia', 'História', 
                          'Matemática', 'Língua Portuguesa'];
        disciplinasHtml = `
            <div class="disciplinas">
                <h4>📚 Disciplinas do Curso</h4>
                <ul>
                    ${disciplinas.map(d => `<li>${d}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    novaAba.document.write(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${curso.titulo} - Instituto Meta</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial, Helvetica, sans-serif; }
                body { background: #f5f5f5; display: flex; justify-content: center; align-items: center; min-height: 100vh; padding: 30px; }
                .container { background: white; max-width: 900px; width:100%; padding: 50px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,.2); text-align: center; }
                .container h1 { color: #ff6600; font-size: 36px; margin-bottom: 10px; }
                .container .icone { font-size: 60px; margin-bottom: 20px; }
                .container .linha { width: 60px; height: 4px; background: #ff6600; margin: 15px auto; border-radius: 2px; }
                .container p { font-size: 16px; line-height: 1.8; color: #333; text-align: left; margin-top: 20px; }
                .container .disciplinas { background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 20px; text-align: left; }
                .container .disciplinas h4 { color: #ff6600; margin-bottom: 10px; font-size: 20px; }
                .container .disciplinas ul { list-style: none; display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 8px; padding: 0; }
                .container .disciplinas ul li { background: white; padding: 8px 12px; border-radius: 5px; border-left: 3px solid #ff6600; font-size: 15px; }
                .container .btn { display: inline-block; margin-top: 30px; background: #ff6600; color: white; padding: 12px 35px; border-radius: 8px; text-decoration: none; font-weight: bold; transition: .3s; border: none; cursor: pointer; font-size: 16px; }
                .container .btn:hover { background: #e45700; transform: scale(1.05); }
                .footer { margin-top: 30px; font-size: 14px; color: #999; }
                @media(max-width:600px){ .container { padding: 20px; } .container .disciplinas ul { grid-template-columns: 1fr 1fr; } .container p { font-size: 14px; } }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="icone">
                    ${nomeCurso === 'informatica-basica' ? '💻' : 
                      nomeCurso === 'informatica-avancada' ? '🚀' : 
                      nomeCurso === 'eja' ? '📚' : 
                      nomeCurso === 'profissionalizante' ? '🔧' :
                      nomeCurso === 'tecnico' ? '⚙️' : 
                      nomeCurso === 'graduacao' ? '🎓' :
                      nomeCurso === 'pos' ? '📈' : '📖'}
                </div>
                <h1>${curso.titulo}</h1>
                <div class="linha"></div>
                <p>${textoFormatado}</p>
                ${disciplinasHtml}
                <button onclick="window.close()" class="btn">🔙 Fechar Janela</button>
                <div class="footer">Instituto Meta - Educação transformando vidas</div>
            </div>
            <script>
                document.addEventListener('keydown', function(e) { if (e.key === 'Escape') { window.close(); } });
            <\/script>
        </body>
        </html>
    `);

    novaAba.document.close();

}

// ==============================
// SALVAR MENSAGEM
// ==============================

function salvarMensagem() {

    let campo = document.getElementById("mensagem");

    let texto = campo.value.trim();

    if (texto == "") {

        alert("Digite uma mensagem.");

        return;

    }

    let mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];

    let agora = new Date();

    let data =
        agora.toLocaleDateString() +
        " às " +
        agora.toLocaleTimeString();

    mensagens.push({

        mensagem: texto,

        data: data

    });

    localStorage.setItem("mensagens", JSON.stringify(mensagens));

    campo.value = "";

    carregarMensagens();

    alert("Mensagem salva com sucesso!");

}

// ==============================
// CARREGAR HISTÓRICO
// ==============================

function carregarMensagens() {

    let historico = document.getElementById("historico");

    historico.innerHTML = "";

    let mensagens = JSON.parse(localStorage.getItem("mensagens")) || [];

    if (mensagens.length == 0) {

        historico.innerHTML = "<p>Nenhuma mensagem enviada.</p>";

        return;

    }

    mensagens.forEach(function(item, index) {

        historico.innerHTML += `

        <div class="mensagem">

            <strong>Mensagem ${index+1}</strong>

            <p>${item.mensagem}</p>

            <small>${item.data}</small>

        </div>

        `;

    });

    historico.innerHTML += `

    <button onclick="limparHistorico()">

        Limpar Histórico

    </button>

    `;

}

// ==============================
// LIMPAR HISTÓRICO
// ==============================

function limparHistorico() {

    let confirmar = confirm("Deseja realmente apagar todo o histórico?");

    if (confirmar) {

        localStorage.removeItem("mensagens");

        carregarMensagens();

    }

}

// ==============================
// INICIAR O SITE
// ==============================

window.onload = function() {

    carregarMensagens();

};