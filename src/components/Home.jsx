import { useNavigate } from 'react-router-dom';
import appLogo from '../assets/logo.png'
import cardImg from '../assets/slack-card.png'
import './Home.css'

function Home() {
  const navigate = useNavigate();

  // ボタンを押した時の遷移処理
  const goToGetStarted = () => {
    navigate('/get-started');
  };

  return (
    <>
      <div>
        <img src={appLogo} className="logo" alt="Vite logo" />
      </div>
      <h1>Slack Link Embedder for Backlog</h1>
      <div>
        <button onClick={goToGetStarted}>Get Started</button>
      </div>
      <div className="card">
        <img src={cardImg} alt="card" className="card-image" />
        <p>
          This is a Chrome extension that embeds Slack links in Backlog.
        </p>
      </div>
      <p className="read-the-docs">
        <a href="https://github.com/zetton110/slack-embed-for-backlog-chrome-extention" target="_blank">Github</a>
      </p>
    </>
  );
}
export default Home