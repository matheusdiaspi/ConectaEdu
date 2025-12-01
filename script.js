// script.js

// =================================================================
// 0. CONTEÚDO DE TEXTO DOS PDFs PARA PESQUISA INTERNA (FULL-TEXT)
// =================================================================

const pdfContent_ConectaEdu = `
1. Arquitetura de Computadores: Explorando os Processadores AMD e Intel
A arquitetura de computadores é uma área fascinante que nos permite compreender o funcionamento interno dos dispositivos que utilizamos diariamente. Nesse contexto, os processadores desempenham um papel crucial, sendo responsáveis por executar as instruções que tornam possível a realização das mais diversas tarefas em nossos computadores. No mercado, dois gigantes se destacam: AMD e Intel. Vamos explorar as nuances dessas arquiteturas, entender suas diferenças e semelhanças, e mergulhar no universo que molda o desempenho dos dispositivos que utilizamos. 
Continuando nossa jornada pela arquitetura de computadores e a rivalidade entre AMD e Intel, é fundamental compreender a estrutura interna desses processadores. A AMD, com sua arquitetura Ryzen, adota o conceito de múltiplos núcleos agrupados em CCX (Complexo de Computação e Comunicação), formando uma espécie de "ecossistema de núcleos". Isso permite uma distribuição eficiente de tarefas, beneficiando principalmente as atividades que se beneficiam da execução simultânea de processos. Em contrapartida, a Intel utiliza a arquitetura Core, conhecida por sua ênfase em alcançar altas frequências de clock. Cada núcleo, nesse caso, é otimizado para desempenhar tarefas complexas de forma rápida e eficaz. 
A AMD também se destaca pela utilização da tecnologia de fabricação FinFET, que contribui para a eficiência energética e o desempenho geral. Essa abordagem possibilita a produção de processadores mais poderosos sem aumentar significativamente o consumo de energia. Por outro lado, a Intel, embora tenha enfrentado desafios recentes em relação à redução do tamanho dos transistores, historicamente tem sido pioneira nesse aspecto, impactando diretamente na capacidade de integração de mais transistores em um espaço menor. 
Além disso, a gestão da memória cache é um elemento crucial na arquitetura de ambos os fabricantes. A AMD, ao adotar um modelo de cache L3 compartilhado entre os núcleos, promove uma maior cooperação entre eles, facilitando o acesso a dados compartilhados. A Intel, por sua vez, muitas vezes utiliza uma abordagem de cache mais hierárquica, com diferentes níveis de cache para otimizar o acesso a dados frequentemente utilizados. 
Essas nuances técnicas, embora possam parecer complexas à primeira vista, têm um impacto direto na experiência do usuário. A escolha entre AMD e Intel não se resume apenas a números e especificações, mas à maneira como essas tecnologias se traduzem na velocidade de resposta, na capacidade de multitarefa e na eficiência energética de nossos dispositivos. 
Arquitetura AMD: Inovação e Competitividade 
A AMD (Advanced Micro Devices) tem conquistado seu espaço no mercado de processadores com uma abordagem inovadora e competitiva. A empresa tem se destacado especialmente nas últimas décadas, desafiando a hegemonia da Intel. A arquitetura dos processadores AMD é conhecida por sua eficiência em multitarefa, proporcionando um excelente desempenho em situações que exigem o processamento simultâneo de várias tarefas. 
Os processadores AMD adotam a arquitetura Ryzen, que é modular e escalável, permitindo uma ampla gama de opções para atender às necessidades específicas dos usuários. Isso significa que, ao escolher um processador AMD, os consumidores têm a flexibilidade de optar por modelos que atendam às demandas desde tarefas simples do dia a dia até aplicações mais exigentes, como edição de vídeo e jogos pesados. 
Dentro do universo de processadores, a AMD tem se destacado como uma força impulsionadora da inovação e da competitividade. A arquitetura AMD Ryzen, em particular, representa um marco significativo na abordagem da empresa para atender às demandas diversificadas dos usuários. Essa arquitetura é conhecida por seu design modular, permitindo uma flexibilidade única na criação de processadores adaptáveis a diversas necessidades.  
A modularidade da arquitetura Ryzen se traduz em uma vasta gama de opções para os consumidores. Ao oferecer diferentes configurações de núcleos e threads, a AMD possibilita que os usuários escolham processadores que atendam especificamente às exigências de suas atividades diárias. Desde tarefas básicas, como navegação na web, até atividades mais intensivas, como edição de vídeos e jogos, a AMD fornece opções que equilibram desempenho e custo. 
Outro ponto de destaque na arquitetura AMD é a ênfase na capacidade de multitarefa. Com a inclusão de um número significativo de núcleos, os processadores Ryzen se destacam em situações em que diversas tarefas precisam ser executadas simultaneamente. Isso é particularmente benéfico para profissionais que lidam com projetos complexos, como designers, editores de vídeo e desenvolvedores, que podem experimentar ganhos substanciais de eficiência ao realizar várias tarefas ao mesmo tempo. 
A AMD, ao alinhar inovação e competitividade, tem contribuído para um cenário de mercado mais dinâmico e diversificado. A constante evolução da arquitetura Ryzen não apenas desafia as normas estabelecidas, mas também oferece aos consumidores mais opções e maior poder de escolha ao decidirem qual processador melhor atende às suas necessidades específicas. 
a. Arquitetura Intel: Tradição e Inovação 
A Intel, por sua vez, é uma empresa com uma longa tradição na fabricação de processadores. Sua arquitetura, baseada na microarquitetura x86, tem sido a espinha dorsal de computadores pessoais por décadas. A empresa busca constantemente inovações para manter sua posição de destaque no mercado. Os processadores Intel, como os da linha Core, são conhecidos por sua excelente performance em tarefas que demandam alta frequência de clock. Isso faz com que se destaquem em atividades que exigem grande poder de processamento por núcleo, como jogos e softwares de edição. A Intel também tem investido em recursos específicos, como a tecnologia Hyper-Threading, que simula núcleos virtuais para melhorar a eficiência em multitarefa. 
A Intel, com sua longa tradição na fabricação de processadores, combina a estabilidade proveniente de décadas de experiência com uma busca constante por inovação. A arquitetura Intel Core é um testemunho dessa combinação, incorporando elementos tradicionais e inovadores para atender às exigências modernas dos usuários. A base dessa arquitetura é a microarquitetura x86, que se tornou uma referência na indústria de computadores pessoais, proporcionando compatibilidade e familiaridade aos usuários.  
A inovação na arquitetura Intel se manifesta em várias frentes, sendo uma das mais notáveis a ênfase na obtenção de altas frequências de clock. Essa abordagem visa proporcionar um desempenho excepcional em tarefas que demandam uma resposta rápida de um único núcleo. Em atividades como jogos e determinadas aplicações profissionais, onde o paralelismo não é crucial, essa característica torna os processadores Intel particularmente eficazes. 
A tecnologia Hyper-Threading é outro aspecto inovador da arquitetura Intel, oferecendo a simulação de núcleos virtuais para melhorar a eficiência em multitarefa. Isso significa que um processador Intel com Hyper-Threading pode lidar com mais threads simultaneamente, resultando em uma execução mais suave de várias tarefas. Essa capacidade é especialmente valiosa em situações onde a multitarefa é comum, como em ambientes de trabalho que envolvem a utilização simultânea de aplicativos diversos. 
Além disso, a Intel tem sido pioneira na redução do tamanho dos transistores, uma característica crucial para aumentar a densidade de transistores em um chip. Embora o ritmo de diminuição desses transistores tenha enfrentado desafios recentemente, a tradição da Intel em explorar novas tecnologias de fabricação tem sido um fator impulsionador na evolução constante de seus processadores. 
Em resumo, a arquitetura Intel é um casamento entre a tradição que solidificou sua posição no mercado e a inovação constante para atender às demandas dinâmicas dos usuários modernos. Ao equilibrar elementos consolidados com novas tecnologias, a Intel continua a ser uma força influente no desenvolvimento de processadores que se destacam em diversos cenários de uso. 
Qual a principal diferença técnica entra as duas marcas? 
b. Diferenças Técnicas e Impactos no Desempenho 
Ao comparar os processadores AMD e Intel, é essencial entender as diferenças técnicas que influenciam diretamente no desempenho dos dispositivos. A arquitetura dos núcleos, a quantidade de cache, a tecnologia de fabricação e a frequência de clock são fatores críticos a serem considerados. Os processadores AMD Ryzen, por exemplo, frequentemente apresentam um maior número de núcleos físicos e lógicos em comparação com modelos equivalentes da Intel. Isso pode resultar em um desempenho superior em tarefas que se beneficiam do paralelismo, como renderização de vídeos e execução de máquinas virtuais. 
Já a Intel, ao focar em frequências de clock mais altas, tende a se destacar em atividades que demandam um alto desempenho por núcleo, como jogos que ainda não tiram total proveito de múltiplos núcleos. 
`;

// =================================================================
// 1. FUNÇÕES DE SUPORTE (Busca Robusta)
// =================================================================

// Função Auxiliar para buscar frases dentro do conteúdo
const searchPdfContent = (content, term) => {
    // 1. Limpa e normaliza o termo de busca
    const lowerCaseTerm = term.toLowerCase()
        .replace(/[\u00A0\uFEFF]/g, ' ') 
        .replace(/\s+/g, ' ') 
        .trim();
    
    const results = [];
    const normalizedContent = content
        .replace(/[\u00A0\uFEFF]/g, ' ') 
        .replace(/\s+/g, ' ') 
        .trim();

    // 2. Divide o conteúdo em blocos para exibição, usando pontuações fortes como delimitadores
    const blocks = normalizedContent.split(/(?<=[.?!;])\s*/g).filter(s => s.trim().length > 0);
    const uniqueResults = new Set();

    blocks.forEach(block => {
        if (block.toLowerCase().includes(lowerCaseTerm)) {
            let cleanBlock = block.trim();
            
            if (!uniqueResults.has(cleanBlock)) {
                if (!cleanBlock.match(/[.?!;]$/)) {
                    cleanBlock += '.';
                }
                uniqueResults.add(cleanBlock);
                results.push(cleanBlock);
            }
        }
    });

    return results;
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


// =================================================================
// 4. Função para Abrir o PDF em uma NOVA ABA (COM PÁGINA E DESTAQUE)
// =================================================================
function openPdf(fileName, page, searchTerm) {
    let url = fileName;
    
    if (page && page > 1) {
        url += `#page=${page}`;
    }
    
    if (searchTerm && searchTerm.trim() !== '') {
        const encodedSearchTerm = encodeURIComponent(searchTerm.trim());
        url += `#search="${encodedSearchTerm}"`;
    }
    
    window.open(url, '_blank');
    console.log(`Abrindo o arquivo: ${fileName} na página: ${page}, buscando por: ${searchTerm}.`);
}

// =================================================================
// 5. LÓGICA DE DEBOUNCE E BUSCA EM TEMPO REAL
// =================================================================

/**
 * Cria uma função debounced que atrasa a execução de 'func' até que 'delay' milissegundos
 * tenham decorrido desde a última vez que a função debounced foi chamada.
 */
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// O buscador real (mantido inalterado)
function searchMaterial() {
    const searchTerm = document.getElementById('pdf-search').value;
    const lowerCaseSearchTerm = searchTerm.toLowerCase(); 

    const serviceCards = document.querySelectorAll('.service-card');
    const pdfResultsContainer = document.getElementById('pdf-results');
    
    let foundInServices = false;
    let htmlPdfResults = '';
    
    if (searchTerm.length === 0) {
        // Se a busca estiver vazia, mostra todos os cards
        serviceCards.forEach(card => card.style.display = 'block');
        serviceCards.forEach(card => card.style.border = '5px solid var(--primary-color)');
        pdfResultsContainer.innerHTML = '';
        return; 
    }

    // --- 5.1. Lista de Documentos Searchables (Com URL e PÁGINAS) ---
    const documents = [
        
        { 
          title: 'Arquitetura de Computadores: Explorando os Processadores AMD e Intel', 
          keywords: 'arquitetura de computadores, amd, intel, processadores, desenvolvimento de sistema, introdução', 
          url: 'ConectaEdu.pdf', 
          content: pdfContent_ConectaEdu,
          page_start: 3 
        },
        
        { 
          title: 'Arquitetura Intel: Tradição e Inovação', 
          keywords: 'arquitetura intel, intel core, hyper-threading, microarquitetura x86', 
          url: 'ConectaEdu.pdf', 
          content: pdfContent_ConectaEdu,
          page_start: 5 
        },

        { 
          title: 'Diferenças Técnicas e Impactos no Desempenho', 
          keywords: 'diferenças técnicas, desempenho, cache, frequência clock, ryzen, intel', 
          url: 'ConectaEdu.pdf', 
          content: pdfContent_ConectaEdu,
          page_start: 7 
        },
        
        { 
          title: 'Guia Rápido de Canva e Design', 
          keywords: 'canva, design, habilidades digitais', 
          content: 'Guia de introdução ao Canva e técnicas básicas de design digital. Aprenda a criar apresentações e posts para redes sociais.'
        },
    ];
    
    
    // --- 5.2. Filtragem dos cards de serviço (Cursos) ---
    serviceCards.forEach(card => {
        const cardTitle = card.querySelector('h4').textContent.toLowerCase();
        const cardDescription = card.querySelector('p').textContent.toLowerCase();
        
        const matches = cardTitle.includes(lowerCaseSearchTerm) || cardDescription.includes(lowerCaseSearchTerm);

        if (matches) {
            card.style.display = 'block'; 
            card.style.border = '5px solid orange'; 
            foundInServices = true;
        } else {
            card.style.display = 'none';
        }
    });

    // --- 5.3. Busca de Frases dentro dos Conteúdos ---
    const pdfContentMatches = [];
    
    documents.forEach(doc => {
        if (doc.content) {
            const matches = searchPdfContent(doc.content, searchTerm); 
            if (matches.length > 0) {
                pdfContentMatches.push({ 
                    title: doc.title, 
                    url: doc.url, 
                    phrases: matches, 
                    page_start: doc.page_start 
                }); 
            }
        }
    });


    // --- 5.4. Exibição dos Resultados (COM LINKS DE PDF) ---
    if (pdfContentMatches.length > 0) {
        htmlPdfResults += '<h4>📁 Trechos Encontrados em Documentos e Materiais Didáticos:</h4>';
        
        pdfContentMatches.forEach(docMatch => {
            
            const pageInfo = docMatch.page_start ? ` (Página ${docMatch.page_start})` : '';
            const openPdfLink = docMatch.url ? 
                ` (<a href="#" onclick="openPdf('${docMatch.url}', ${docMatch.page_start || 1}, '${searchTerm}'); return false;">Abrir PDF completo</a>)` : 
                ''; 

            htmlPdfResults += `<h5 style="margin-top: 20px; color: var(--secondary-color); font-size: 1.1rem;">No documento: ${docMatch.title}${pageInfo}${openPdfLink}</h5>`;
            
            docMatch.phrases.forEach(phrase => {
                let displayedPhrase = phrase;
                
                // Se NÃO houver URL de PDF, faz o destaque in-line
                if (!docMatch.url) {
                    const termToHighlight = searchTerm.replace(/[\u00A0\uFEFF]/g, ' ').replace(/\s+/g, ' ').trim();
                    displayedPhrase = phrase.replace(new RegExp(termToHighlight, 'gi'), match => `<strong>${match}</strong>`);
                }
                
                // O clique para abrir o PDF só é adicionado se houver uma URL válida
                const onClickAction = docMatch.url ? `onclick="openPdf('${docMatch.url}', ${docMatch.page_start || 1}, '${searchTerm}'); return false;" style="cursor: pointer;"` : '';
                
                htmlPdfResults += `<p class="pdf-item" ${onClickAction} style="background-color: #f0f0f0; border-left: 3px solid #4682B4; margin-bottom: 5px;">... ${displayedPhrase}</p>`;
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


// --- 6. ATIVAÇÃO DA BUSCA EM TEMPO REAL ---

// Cria a função debounced (atrasada)
const debouncedSearch = debounce(searchMaterial, 300); // 300ms de atraso

// Adiciona o novo evento de escuta à caixa de busca
document.getElementById('pdf-search').addEventListener('input', debouncedSearch);

// Remove o antigo listener de clique, se ele ainda existir (opcional, mas seguro)
document.getElementById('search-button').addEventListener('click', (e) => {
    e.preventDefault(); // Impede o envio do formulário, se houver
    searchMaterial(); // Executa a busca imediatamente, caso o usuário clique
});