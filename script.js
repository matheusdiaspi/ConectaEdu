// script.js

// =================================================================
// 0. CONTEÚDO DE TEXTO DOS PDFs PARA PESQUISA INTERNA (FULL-TEXT)
// =================================================================

const pdfContent_ConectaEdu = `
Arquitetura de Computadores: Explorando os Processadores AMD e Intel.
A arquitetura de computadores é uma área fascinante que nos permite compreender o funcionamento interno dos dispositivos que utilizamos diariamente.
Nesse contexto, os processadores desempenham um papel crucial, sendo responsáveis por executar as instruções que tornam possível a realização das mais diversas tarefas em nossos computadores.
No mercado, dois gigantes se destacam: AMD e Intel. Vamos explorar as nuances dessas arquiteturas, entender suas diferenças e semelhanças, e mergulhar no universo que molda o desempenho dos dispositivos que utilizamos.
Continuando nossa jornada pela arquitetura de computadores e a rivalidade entre AMD e Intel, é fundamental compreender a estrutura interna desses processadores.
A AMD, com sua arquitetura Ryzen, adota o conceito de múltiplos núcleos agrupados em CCX (Complexo de Computação e Comunicação), formando uma espécie de "ecossistema de núcleos".
Isso permite uma distribuição eficiente de tarefas, beneficiando principalmente as atividades que se beneficiam da execução simultânea de processos.
Em contrapartida, a Intel utiliza a arquitetura Core, conhecida por sua ênfase em alcançar altas frequências de clock.
Cada núcleo, nesse caso, é otimizado para desempenhar tarefas complexas de forma rápida e eficaz.
A AMD também se destaca pela utilização da tecnologia de fabricação FinFET, que contribui para a eficiência energética e o desempenho geral.
Essa abordagem possibilita a produção de processadores mais poderosos sem aumentar significativamente o consumo de energia.
Por outro lado, a Intel, embora tenha enfrentado desafios recentes em relação à redução do tamanho dos transistores, historicamente tem sido pioneira nesse aspecto, impactando diretamente na capacidade de integração de mais transistores em um espaço menor.
A gestão da memória cache é um elemento crucial na arquitetura de ambos os fabricantes.
A AMD, ao adotar um modelo de cache L3 compartilhado entre os núcleos, promove uma maior cooperação entre eles, facilitando o acesso a dados compartilhados.
A Intel, por sua vez, muitas vezes utiliza uma abordagem de cache mais hierárquica, com diferentes níveis de cache para otimizar o acesso a dados frequentemente utilizados.
Essas nuances técnicas, embora possam parecer complexas à primeira vista, têm um impacto direto na experiência do usuário.
A escolha entre AMD e Intel não se resume apenas a números e especificações, mas à maneira como essas tecnologias se traduzem na velocidade de resposta, na capacidade de multitarefa e na eficiência energética de nossos dispositivos.
A AMD (Advanced Micro Devices) tem conquistado seu espaço no mercado de processadores com uma abordagem inovadora e competitiva.
A empresa tem se destacado especialmente nas últimas décadas, desafiando a hegemonia da Intel.
A arquitetura dos processadores AMD é conhecida por sua eficiência em multitarefa, proporcionando um excelente desempenho em situações que exigem o processamento simultâneo de várias tarefas.
Os processadores AMD adotam a arquitetura Ryzen, que é modular e escalável, permitindo uma ampla gama de opções para atender às necessidades específicas dos usuários.
A arquitetura Intel: Tradição e Inovação.
A Intel, por sua vez, é uma empresa com uma longa tradição na fabricação de processadores.
Sua arquitetura, baseada na microarquitetura x86, tem sido a espinha dorsal de computadores pessoais por décadas.
Os processadores Intel, como os da linha Core, são conhecidos por sua excelente performance em tarefas que demandam alta frequência de clock.
Isso faz com que se destaquem em atividades que exigem grande poder de processamento por núcleo, como jogos e softwares de edição.
A Intel também tem investido em recursos específicos, como a tecnologia Hyper-Threading, que simula núcleos virtuais para melhorar a eficiência em multitarefa.
`;

// =================================================================
// 1. FUNÇÕES DE SUPORTE
// =================================================================

// Função Auxiliar para buscar frases dentro do conteúdo do PDF
const searchPdfContent = (content, term) => {
    // Regex para dividir o texto em frases, usando pontuação como delimitador
    const sentences = content.split(/(\.|\?|!|\;|\n)/).filter(s => s.trim().length > 0 && !s.match(/(\.|\?|!|\;|\n)/));
    const lowerCaseTerm = term.toLowerCase();
    const results = [];

    sentences.forEach(sentence => {
        if (sentence.toLowerCase().includes(lowerCaseTerm)) {
            let cleanSentence = sentence.trim();
            // Garante que a frase termine com pontuação para melhor leitura
            if (!cleanSentence.match(/[.?!;]$/)) {
                 cleanSentence += '.';
            }
            results.push(cleanSentence);
        }
    });

    // Retorna resultados únicos
    return [...new Set(results)];
};


// 2. Funcionalidade do Botão CTA (Chamada para Ação)
document.getElementById('cta-button').addEventListener('click', function() {
    alert('Ótima escolha! Vamos te conectar com o aprendizado. A partir de R$ 50,00, você já começa a estudar!');
    document.getElementById('planos').scrollIntoView({ behavior: 'smooth' });
});


// 3. Efeito de Fundo do Header ao Rolar (Scroll)
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#1C6D42';
    } else {
        header.style.backgroundColor = 'var(--primary-color)';
    }
});


// 4. Função para Abrir o PDF em uma NOVA ABA
function openPdf(fileName) {
    // Usa a função que você confirmou que funcionava para caminhos de arquivo locais.
    window.open(fileName, '_blank');
    console.log(`Abrindo o arquivo: ${fileName} em nova aba.`);
}


// =================================================================
// 5. LÓGICA PRINCIPAL DO BUSCADOR (PÁGINA REMOVIDA)
// =================================================================
function searchMaterial() {
    const searchTerm = document.getElementById('pdf-search').value.toLowerCase();
    const serviceCards = document.querySelectorAll('.service-card');
    const pdfResultsContainer = document.getElementById('pdf-results');
    
    let foundInServices = false;
    let htmlPdfResults = '';
    
    if (searchTerm.length === 0) {
        serviceCards.forEach(card => card.style.display = 'block');
        serviceCards.forEach(card => card.style.border = '5px solid var(--primary-color)');
        pdfResultsContainer.innerHTML = '';
        return; 
    }

    // --- 5.1. Lista de Documentos Searchables (O campo 'page_start' foi mantido, mas não será usado no HTML) ---
    const documents = [
        // Processadores AMD x INTEL (ConectaEdu.pdf)
        { 
          title: 'Arquitetura de Computadores: Processadores AMD x INTEL', 
          keywords: 'arquitetura de computadores, amd, intel, processadores, desenvolvimento de sistema', 
          url: 'ConectaEdu.pdf', 
          content: pdfContent_ConectaEdu,
          page_start: 3 
        },
        
        // Guia Rápido de Canva e Design
        { 
          title: 'Guia Rápido de Canva e Design', 
          keywords: 'canva, design, habilidades digitais', 
          url: 'GuiaCanva.pdf', 
          content: 'Guia de introdução ao Canva e técnicas básicas de design digital. Aprenda a criar apresentações e posts para redes sociais.',
          page_start: 1 
        },
    ];
    
    
    // --- 5.2. Filtragem dos cards de serviço (Cursos) ---
    serviceCards.forEach(card => {
        const cardTitle = card.querySelector('h4').textContent.toLowerCase();
        const cardDescription = card.querySelector('p').textContent.toLowerCase();
        
        const matches = cardTitle.includes(searchTerm) || cardDescription.includes(searchTerm);

        if (matches) {
            card.style.display = 'block'; 
            card.style.border = '5px solid orange'; 
            foundInServices = true;
        } else {
            card.style.display = 'none';
        }
    });

    // --- 5.3. Busca de Frases dentro dos PDFs ---
    const pdfContentMatches = [];
    
    documents.forEach(doc => {
        if (doc.content) {
            const matches = searchPdfContent(doc.content, searchTerm);
            if (matches.length > 0) {
                // Passa o page_start para os resultados (se necessário para uso futuro)
                pdfContentMatches.push({ title: doc.title, url: doc.url, phrases: matches, page_start: doc.page_start }); 
            }
        }
    });


    // --- 5.4. Exibição dos Resultados (PÁGINA REMOVIDA DA EXIBIÇÃO) ---
    if (pdfContentMatches.length > 0) {
        htmlPdfResults += '<h4>📁 Trechos Encontrados em Documentos e Materiais Didáticos:</h4>';
        
        pdfContentMatches.forEach(docMatch => {
            
            // Título do Documento: REMOVIDA A INDICAÇÃO DE PÁGINA (Página ${docMatch.page_start})
            htmlPdfResults += `<h5 style="margin-top: 20px; color: var(--secondary-color); font-size: 1.1rem;">No documento: ${docMatch.title} (<a href="#" onclick="openPdf('${docMatch.url}'); return false;">Abrir PDF completo</a>)</h5>`;
            
            // Loop para as frases com onclick
            docMatch.phrases.forEach(phrase => {
                // A frase tem 'cursor: pointer' e o evento que abre o PDF
                htmlPdfResults += `<p class="pdf-item" style="cursor: pointer; background-color: #f0f0f0; border-left: 3px solid #4682B4; margin-bottom: 5px;" onclick="openPdf('${docMatch.url}'); return false;">... ${phrase}</p>`;
            });
        });
    }

    
    // --- 5.5. Feedback Final ---
    pdfResultsContainer.innerHTML = htmlPdfResults;
    
    if (!foundInServices && pdfContentMatches.length === 0) {
        pdfResultsContainer.innerHTML = `<h4>Nenhum curso ou material didático encontrado para "${searchTerm}".</h4>`;
        
        serviceCards.forEach(card => card.style.display = 'block');
        serviceCards.forEach(card => card.style.border = '5px solid var(--primary-color)');
    } else if (pdfContentMatches.length > 0 && !foundInServices) {
         serviceCards.forEach(card => card.style.display = 'block');
         serviceCards.forEach(card => card.style.border = '5px solid var(--primary-color)');
    }
}