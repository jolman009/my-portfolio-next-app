"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [ messageInput, setMessageInput ] = useState('');

  const [messages, setMessages] = useState([
		{
			role: 'assistant',
			content: 'How can I help you learn more about Joel and his Resume?'
		}
  ]);

  const submitForm = async (e) => {
    e.preventDefault();
    let newMessages = [...messages, { role: 'user', content: messageInput }]
    setMessages(newMessages);
    setMessageInput('');
    const apiMessage = await fetch(
      '/api',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages })
      }
    ).then(res => res.json());
    setMessages([...newMessages, { role: 'assistant', content: apiMessage.message }]);
  }

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header>
        <a href="#" className="logo-holder">
          <div className="logo">J</div>
          <div className="logo-text">Portfolio Website</div>
        </a>
        <nav>
          <ul id="menu" className={menuOpen ? "active" : ""}>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="mailto:jolman009@yahoo.com" className="button">Contact Me</a>
            </li>
          </ul>
          <a href="#" className="mobile-toggle" onClick={toggleMobileMenu}>
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h10"/>
            </svg>
          </a>
        </nav>
      </header>
      <main>
        <section className="container hero">
          <div className="hero-blue">
            <div>
              <h1><small>Hi I'm</small>
            Joel Guzman
              </h1>
              <p>
              I am committed to the education of new skills in technology that will create professionals and contributors to our society. <span>I share an interest in incorporating my business education with my career in teaching to gain a position within a company that will best use my amalgamation of skills.</span>
              </p>
              <div className="call-to-action">
                <a href="./myresume2024.pdf" className="button black">
                  View Resume
                </a>
                <a href="mailto:jolman009@yahoo.com" className="button white">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a href="#">
                  <img src="./imgs/github.png" alt="GitHub" width="48" />
                </a>
                <a href="#">
                  <img src="./imgs/linkedin.png" alt="LinkedIn" width="48" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow">
            <img src="./imgs/joel-profile.png" alt="Joel Guzman" width="100%" />
          </div>
        </section>
        <section className="container logos">
          <div className="marquee">
            <div className="track">
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/sass.png" width="128" alt="Sass" />
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/nextjs.png" width="128" alt="Next JS" />
              <img src="./imgs/azure.png" width="128" alt="Azure" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/python.png" width="128" alt="Python" />
              <img src="./imgs/html.png" alt="HTML" width="128" />
              <img src="./imgs/css.png" alt="CSS" width="128" />
              <img src="./imgs/javascript.png" alt="JS" width="128" />
              <img src="./imgs/sass.png" width="128" alt="Sass" />
              <img src="./imgs/react.png" width="128" alt="React" />
              <img src="./imgs/nextjs.png" width="128" alt="Next JS" />
              <img src="./imgs/azure.png" width="128" alt="Azure" />
              <img src="./imgs/vscode.png" width="128" alt="VS Code" />
              <img src="./imgs/python.png" width="128" alt="Python" />
            </div>
          </div>
        </section>
        <section id="skills" className="container skills">
          <h2>
            <small>About Me</small>
            Skills
          </h2>
          <div className="holder-blue">
            <div className="left-column">
              <h3>Frontend</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Angular</li>
                <li>Vue</li>
              </ul>
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Python</li>
                <li>Java</li>
                <li>PHP</li>
                <li>Ruby</li>
              </ul>
            </div>
            <div className="right-column">
              <h3>A bit about me</h3>
              <p>
                Hi I'm Joel Guzman, a designer and developer who creates educational content on YouTube to teach others about HTML, CSS and JavaScript.  I'm interested in AI topics which is why I also add things like ChatGPT into my projects these days!
              </p>
              <p>
                I'm currently working on a project that uses Azure AI to create a chatbot that can help answer questions about web development.  I'm also working on a project that uses React and Next.js to create a portfolio website design that looks good.
              </p>
            </div>
          </div>
        </section>
        <section className="container work-experience">
          <h2>
            <small>Recent</small>
            Work Experience
          </h2>
          <div className="jobs">
            <article>
              <figure>
                <div>
                  <img src="./imgs/workplace-1.jpg" alt="Workplace 1 - YouTube Creator" width="100%" />
                  <figcaption>
                    Workplace - 1 YouTube Creator
                  </figcaption>
                </div>
              </figure>
              <h3>Studying Computer Programming</h3>
              <div>2024-current</div>
              <p>Content creation online teaching people about how to code using HTML, CSS, JS.</p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./imgs/workplace-2.jpg" alt="Workplace 2 - Moshi Moshi Marketing" width="100%" />
                  <figcaption>
                    Workplace - Moshi Moshi Marketing
                  </figcaption>
                </div>
              </figure>
              <h3>HS English Teacher</h3>
              <div>2007-2024</div>
              <p>Marketing agency building websites and programming them from the ground up. </p>
            </article>
            <article>
              <figure>
                <div>
                  <img src="./imgs/workplace-3.jpg" alt="Workplace 3 - Chamber of Commerce" width="100%" />
                  <figcaption>
                    Workplace - Chamber of Commerce
                  </figcaption>
                </div>
              </figure>
              <h3>Head Softball Coach</h3>
              <div>2017-2024</div>
              <p>A small to large business organisation that helps facilitate advice and support.</p>
            </article>
            
          </div>
        </section>
        <section id="projects" className="container bento">
          <h2>
            <small>
              Previous
            </small>
            Completed Projects
          </h2>
          <div className="bento-grid">
            <a href="#" className="bento-item">
              <img src="./imgs/bento-1.jpg" alt="BGCCI" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-2.jpg" alt="Churhview" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-3.jpg" alt="Harley" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-5.jpg" alt="Bunbury" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-6.jpg" alt="Running" width="100%" />
            </a>
            <a href="#" className="bento-item">
              <img src="./imgs/bento-7.jpg" alt="School" width="100%" />
            </a>
          </div>
        </section>
        <section className="container chatbot">
          <h2>
            <small>
              Talk to me
            </small>
            Chatbot
          </h2>
          <div className="chatbot-blue">
            <div className="chat-info">
              <h3>Azure AI Chatbot</h3>
              <p>I've put together a chatbot here which knows all my skills, work experience and has a copy of my CV/Resume. You can use it to ask questions about me to get a better idea of who I am and what I've done.</p>
              <p>You can also download my resume here if you want to take a look at it.  I'm currently looking for new opportunities so if you have a project you think I'd be a good fit for, please get in touch!</p>
              <a href="./myresume2024.pdf" className="button black">Download Resume</a>
            </div>
            <div className="chat-box">
              <div className="scroll-area">
                <ul id="chat-log">
                  {messages.map((message, index) => (
                    <li key={index} className={`${message.role}`}>
                      <span className={`avatar`}>{message.role === 'user' ? 'You' : 'AI'}</span>
                      <div className="message">{message.content}</div>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={submitForm} className="chat-message">
                <input type="text" placeholder="Hey Joel, what skills are you best at?" value={messageInput} onChange={e => setMessageInput(e.target.value)} />
                <button className="button black">Send</button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}