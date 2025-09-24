document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos da página
    const mainContent = document.querySelector('.main-content');
    const navLinks = document.querySelectorAll('.nav-link');

    // Funções para gerar o conteúdo de cada página
    const generateVagasPage = () => {
        return `
            <header class="header">
                <h2>Criação de Vaga</h2>
            </header>
            <section class="form-section">
                <form id="form-vaga">
                    <div class="form-group">
                        <label for="titulo">Título da Vaga</label>
                        <input type="text" id="titulo" name="titulo" required>
                    </div>
                    <div class="form-group">
                        <label for="descricao">Descrição da Vaga</label>
                        <textarea id="descricao" name="descricao" rows="6" required></textarea>
                    </div>
                    <div class="form-group">
                        <label for="requisitos">Requisitos (separar com vírgulas)</label>
                        <input type="text" id="requisitos" name="requisitos" required>
                    </div>
                    <div class="form-group">
                        <label for="localizacao">Localização</label>
                        <input type="text" id="localizacao" name="localizacao">
                    </div>
                    <div class="form-group">
                        <label for="tipo-contrato">Tipo de Contrato</label>
                        <select id="tipo-contrato" name="tipo-contrato">
                            <option value="clt">CLT</option>
                            <option value="pj">PJ</option>
                            <option value="estagio">Estágio</option>
                            <option value="freelance">Freelance</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="salario">Salário (opcional)</label>
                        <input type="text" id="salario" name="salario">
                    </div>
                    <button type="submit" class="btn-submit">Publicar Vaga</button>
                </form>
            </section>
        `;
    };

    const generateDashboardPage = () => {
        return `
            <header class="header">
                <h2>Dashboard</h2>
            </header>
            <section>
                <h3>Bem-vindo ao Painel de Controle!</h3>
                <p>Aqui você verá um resumo das suas atividades.</p>
                <div class="dashboard-cards">
                    <div class="card">
                        <h4>Vagas Ativas</h4>
                        <p>15</p>
                    </div>
                    <div class="card">
                        <h4>Candidatos Novos</h4>
                        <p>25</p>
                    </div>
                    <div class="card">
                        <h4>Vagas Finalizadas</h4>
                        <p>3</p>
                    </div>
                </div>
            </section>
        `;
    };

    const generateCandidatosPage = () => {
        return `
            <header class="header">
                <h2>Candidatos</h2>
            </header>
            <section>
                <h3>Lista de Candidatos</h3>
                <p>Aqui você poderá visualizar, filtrar e gerenciar todos os candidatos para as suas vagas.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Vaga</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>João Silva</td>
                            <td>Analista de Marketing</td>
                            <td>Em Análise</td>
                        </tr>
                        <tr>
                            <td>Maria Souza</td>
                            <td>Desenvolvedor Júnior</td>
                            <td>Entrevista</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        `;
    };
    
    const generateRelatoriosPage = () => {
        return `
            <header class="header">
                <h2>Relatórios</h2>
            </header>
            <section>
                <h3>Análises e Estatísticas</h3>
                <p>Nesta área, você terá acesso a gráficos e relatórios sobre o desempenho de suas vagas e o funil de contratação.</p>
                </section>
        `;
    };

    // Objeto que mapeia o nome da página à sua função geradora de conteúdo
    const pages = {
        'dashboard': generateDashboardPage,
        'vagas': generateVagasPage,
        'candidatos': generateCandidatosPage,
        'relatorios': generateRelatoriosPage
    };

    // Função para renderizar o conteúdo da página
    const renderPage = (pageName) => {
        if (pages[pageName]) {
            mainContent.innerHTML = pages[pageName]();
            // Re-binds event listeners for forms, as they are recreated
            if (pageName === 'vagas') {
                bindFormListener();
            }
        }
    };

    // Função para adicionar o listener ao formulário de vagas
    const bindFormListener = () => {
        const formVaga = document.getElementById('form-vaga');
        if (formVaga) {
            formVaga.addEventListener('submit', (event) => {
                event.preventDefault();

                const titulo = document.getElementById('titulo').value;
                const descricao = document.getElementById('descricao').value;
                const requisitos = document.getElementById('requisitos').value.split(',').map(item => item.trim());
                const localizacao = document.getElementById('localizacao').value;
                const tipoContrato = document.getElementById('tipo-contrato').value;
                const salario = document.getElementById('salario').value;

                const novaVaga = { titulo, descricao, requisitos, localizacao, tipoContrato, salario };

                console.log('Nova vaga criada:', novaVaga);
                alert('Vaga publicada com sucesso!');
                formVaga.reset();
            });
        }
    };

    // Adiciona o evento de clique para os links de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove a classe 'active' de todos os links
            navLinks.forEach(item => item.classList.remove('active'));
            // Adiciona a classe 'active' apenas ao link clicado
            link.classList.add('active');
            
            // Renderiza a página correspondente
            const page = link.dataset.page;
            renderPage(page);
        });
    });

    // Renderiza a página de 'vagas' por padrão ao carregar
    renderPage('vagas');
});