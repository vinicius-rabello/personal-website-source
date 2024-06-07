import './App.css';
import github_logo from './images/github-logo.png';
import linkedin_logo from './images/linkedin-logo.png';
import profile_picture from './images/photo.jpeg'; 
import ibm_certificate from './images/ibm_certificate.jpeg'; 

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div id="navbar-home">Home</div>
        <div id="navbar-other">
          <div>Projects</div>
          <div>Contact</div>
        </div>
      </nav>

      <div className="content">
        <section id="landing">
          <div className="section-content">
            <div className="name">Vinícius Rabello</div>
            <div className="socials">
              <h3>Redes Sociais:</h3>
              <div className="links">
                <a target="_blank" href="https://github.com/vinicius-rabello">
                  <img src={github_logo} alt="github-logo"/>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/vinicius-rabello/">
                  <img src={linkedin_logo} alt="linkedin-logo"/>
                </a>
              </div>
            </div>

            <div className="bio">
                Meu nome é Vinícius Rabello, mestrando em Matemática Aplicada na UFRJ,
                gosto de trabalhar com dados, desde a coleta até a análise. Criei este site para
                poder compartilhar alguns projetos e experiências.
            </div>

            <a id="about-me-button" href="#about-me">
              \/
            </a>
          </div>
        </section>

        <section id="about-me">
          <div className='section-content'>
            <img src={profile_picture} alt="aa" />
            <div className="bio">
              Estudante de Matemática Aplicada na Universidade Federal do Rio de Janeiro. Atualmente, busco oportunidade de atuar como estagiário na área de Ciência de Dados, para vivenciar um ambiente de trabalho.
              Possuo conhecimentos em Python, SQL, PowerBI, Excel e bibliotecas de Python como: Pandas, Scikit-Learn, Dash, Seaborn, podendo atuar em diferentes etapas como coleta, análise e visualização de dados, assim como construção e avaliação de modelos, além de ajudar com a área de BI da empresa.
              Possuo o certificado profissional de Data Science da IBM: 
              https://coursera.org/share/ddcf0116e557abff85359989cbaa06ae
              No momento faço Iniciação Científica na UFRJ, desenvolvendo um modelo de Super Resolution usando Redes Neurais Convolucionais.
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
