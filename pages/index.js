import { useState, useEffect } from 'react';

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      id: 1,
      title: "BubbleMakers",
      description: "Jogo de sobrevivência cooperativa com câmera isométrica, desenvolvido para rodar diretamente no navegador. O diferencial é o sistema de local multiplayer inovador, onde dois jogadores dividem o mesmo teclado para controlar robôs com funções complementares (ataque com sabão e suporte com água) contra ondas de inimigos. Desenvolvido em Unity com otimizações WebGL.",
      image: "/assets/bubblemakers.png",
      itchLink: "https://lowstaminadev.itch.io/bubblemakers",
      buttonText: "Jogar no Navegador"
    },
    {
      id: 2,
      title: "RetroSwim",
      description: "Endless runner 3D com estética Vaporwave, focado na fluidez de movimento e pontuação. Controle uma prancha em um oceano infinito, realize manobras e colete itens (DVDs). Desenvolvido em Godot com shaders avançados para criar efeitos de água, distorção de luz e atmosfera sintética.",
      image: "/assets/retroswim.png",
      itchLink: "https://lowstaminadev.itch.io/retroswim",
      buttonText: "Jogar no Navegador"
    },
    {
      id: 3,
      title: "LaughArena",
      description: "Jogo de sobrevivência em arena que mescla movimentação 3D com estética 2D (estilo Billboarding), inspirado em animações clássicas. Sobreviva a hordas de ratos utilizando mecânicas de física (chutar, soltar cascas de banana) e gestão de recursos em um espaço confinado. Desenvolvido em Godot com máquina de estados avançada.",
      image: "/assets/laugharena.png",
      itchLink: "https://lowstaminadev.itch.io/laugharena",
      buttonText: "Baixar no itch.io"
    },
    {
      id: 4,
      title: "ProjectBoost",
      description: "Jogo de plataforma de precisão baseado em física onde o controle de empuxo (thrust) e rotação é a chave para a navegação. Transporte uma nave frágil através de níveis com obstáculos, exigindo precisão extrema e gerenciamento de inércia. Desenvolvido em Godot com física realista e detecção de colisão precisa.",
      image: "/assets/projectboost.png",
      itchLink: "https://lowstaminadev.itch.io/projectboost",
      buttonText: "Baixar no itch.io"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <img 
            src="/assets/lowstamina_logo_white.png" 
            alt="Low Stamina Studio Logo" 
            style={styles.logo}
          />
          <p style={styles.heroSubtitle}>
            Desenvolvendo jogos com paixão e criatividade
          </p>
          <div style={styles.scrollIndicator}>
            <span style={styles.scrollText}>Scroll para ver nossos projetos</span>
            <div style={styles.scrollArrow}>↓</div>
          </div>
        </div>
      </section>

      {/* Projects Sections */}
      {projects.map((project, index) => (
        <section 
          key={project.id} 
          style={{
            ...styles.projectSection,
            backgroundColor: index % 2 === 0 ? '#0a0a0a' : '#1a1a1a'
          }}
        >
          <div style={styles.projectContainer}>
            {index % 2 === 0 ? (
              <>
                {/* Texto à esquerda, imagem à direita */}
                <div style={styles.projectText}>
                  <h2 style={styles.projectTitle}>{project.title}</h2>
                  <p style={styles.projectDescription}>{project.description}</p>
                  <a 
                    href={project.itchLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.downloadButton}
                  >
                    {project.buttonText}
                  </a>
                </div>
                <div style={styles.projectImage}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={styles.projectImageImg}
                  />
                </div>
              </>
            ) : (
              <>
                {/* Imagem à esquerda, texto à direita */}
                <div style={styles.projectImage}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    style={styles.projectImageImg}
                  />
                </div>
                <div style={styles.projectText}>
                  <h2 style={styles.projectTitle}>{project.title}</h2>
                  <p style={styles.projectDescription}>{project.description}</p>
                  <a 
                    href={project.itchLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={styles.downloadButton}
                  >
                    {project.buttonText}
                  </a>
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2026 Low Stamina Studio. Todos os direitos reservados.</p>
        <div style={styles.socialLinks}>
          <a href="#" style={styles.socialLink}>Twitter</a>
          <a href="#" style={styles.socialLink}>Discord</a>
          <a href="https://lowstaminadev.itch.io/" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>itch.io</a>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    margin: 0,
    padding: 0,
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #0a0a0a 0%, #1a3a1a 100%)',
    textAlign: 'center',
    padding: '2rem',
  },
  heroContent: {
    maxWidth: '800px',
  },
  logo: {
    width: '400px',
    height: 'auto',
    marginBottom: '.5rem',
    animation: 'float 3s ease-in-out infinite',
  },
  heroTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#4CAF50',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  heroSubtitle: {
    fontSize: '1.5rem',
    color: '#e0e0e0',
    marginBottom: '3rem',
  },
  scrollIndicator: {
    marginTop: '4rem',
  },
  scrollText: {
    fontSize: '0.9rem',
    color: '#4CAF50',
    display: 'block',
    marginBottom: '0.5rem',
  },
  scrollArrow: {
    fontSize: '2rem',
    color: '#4CAF50',
    animation: 'bounce 2s infinite',
  },
  projectSection: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
  },
  projectContainer: {
    maxWidth: '1200px',
    width: '100%',
    display: 'flex',
    gap: '4rem',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  projectText: {
    flex: 1,
    minWidth: '300px',
  },
  projectTitle: {
    fontSize: '2.5rem',
    color: '#4CAF50',
    marginBottom: '1.5rem',
    fontWeight: 'bold',
  },
  projectDescription: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    color: '#e0e0e0',
    marginBottom: '2rem',
  },
  downloadButton: {
    display: 'inline-block',
    padding: '1rem 2.5rem',
    backgroundColor: '#4CAF50',
    color: '#000',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    borderRadius: '8px',
    transition: 'all 0.3s ease',
    border: '2px solid #4CAF50',
    cursor: 'pointer',
  },
  projectImage: {
    flex: 1,
    minWidth: '300px',
  },
  projectImageImg: {
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    boxShadow: '0 10px 30px rgba(76, 175, 80, 0.2)',
  },
  imagePlaceholder: {
    width: '100%',
    height: '400px',
    backgroundColor: '#2a2a2a',
    border: '3px dashed #4CAF50',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    color: '#4CAF50',
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#0a0a0a',
    padding: '3rem 2rem',
    textAlign: 'center',
    borderTop: '2px solid #4CAF50',
  },
  footerText: {
    color: '#e0e0e0',
    marginBottom: '1rem',
  },
  socialLinks: {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
  },
  socialLink: {
    color: '#4CAF50',
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'color 0.3s ease',
  },
};

export default Home;
