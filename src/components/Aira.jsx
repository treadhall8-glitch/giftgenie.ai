import aira from "../assets/aira.png";

function Aira() {
  return (
    <div className="aira-card">
      <div className="glow"></div>

      <img src={aira} alt="Aira AI Assistant" className="aira-image" />

      <h2>Aira AI</h2>

      <p>Your intelligent shopping assistant.</p>

      <div className="status">🟢 Online</div>
    </div>
  );
}

export default Aira;