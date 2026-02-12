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
      title: "Projeto Alpha",
      description: "Um jogo de aventura épico com mecânicas inovadoras e gráficos impressionantes. Explore mundos vastos, enfrente desafios únicos e descubra segredos escondidos.",
      image: "/assets/project1.gif",
      itchLink: "https://itch.io/projeto-alpha"
    },
    {
      id: 2,
      title: "Projeto Beta",
      description: "Experiência roguelike com combate frenético e progressão permanente. Cada run é única com geração procedural de níveis e inimigos desafiadores.",
      image: "/assets/project2.gif",
      itchLink: "https://itch.io/projeto-beta"
    },
    {
      id: 3,
      title: "Projeto Gamma",
      description: "Puzzle game minimalista que desafia sua lógica e criatividade. Centenas de níveis cuidadosamente criados para proporcionar horas de diversão.",
      image: "/assets/project3.gif",
      itchLink: "https://itch.io/projeto-gamma"
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
                    Baixar no itch.io
                  </a>
                </div>
                <div style={styles.projectImage}>
                  <div style={styles.imagePlaceholder}>
                    <span style={styles.placeholderText}>GIF/Imagem do Projeto</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Imagem à esquerda, texto à direita */}
                <div style={styles.projectImage}>
                  <div style={styles.imagePlaceholder}>
                    <span style={styles.placeholderText}>GIF/Imagem do Projeto</span>
                  </div>
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
                    Baixar no itch.io
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
          <a href="#" style={styles.socialLink}>itch.io</a>
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
