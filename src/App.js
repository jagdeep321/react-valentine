import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import confetti from "canvas-confetti";

function App() {
  const girlfriendName = " AKASH ❤️";

  const [open, setOpen] = useState(false);
  const [proposal, setProposal] = useState(false);
  const [slide, setSlide] = useState(0);
  const [noPosition, setNoPosition] = useState({});
  const [timeTogether, setTimeTogether] = useState("");

  const clipRef = useRef(null);

  const photos = ["/akash1.jpg", "/akash2.jpg", "/akash3.jpg", "/akash4.jpg", "/akash5.jpg"];

  // Slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Countdown Days Together
  useEffect(() => {
    const startDate = new Date("2018-12-11");
    const interval = setInterval(() => {
      const now = new Date();
      const diff = now - startDate;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      setTimeTogether(days + " Days Together ❤️");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const playClip = () => {
    clipRef.current.play();
  };

  const fireWorksPlus = () => {
    const duration = 8 * 1000;
    const end = Date.now() + duration;
    const interval = setInterval(() => {
      confetti({
        particleCount: 200,
        spread: 160,
        startVelocity: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
      });
      if (Date.now() > end) clearInterval(interval);
    }, 400);

    const hearts = document.createElement("div");
    hearts.className = "fire-heart";
    hearts.innerText = "💖 ❤️ 💕";
    document.body.appendChild(hearts);
    setTimeout(() => document.body.removeChild(hearts), 5000);

    const popup = document.createElement("div");
    popup.className = "popup-text";
    popup.innerText = "I Love You Forever ❤️";
    document.body.appendChild(popup);
    setTimeout(() => document.body.removeChild(popup), 4000);
  };

  const moveNoButton = () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    setNoPosition({ transform: `translate(${x}px, ${y}px)` });
  };

  return (
    <div className="container">
      <audio ref={clipRef}>
        <source src="/clip.mp3" type="audio/mpeg" />
      </audio>

      <div className="hearts"></div>

      <h1 className="glow-title">💘 Valentine Special 💘</h1>
      <h2 className="name-glow">{girlfriendName}</h2>
      <div className="timer">{timeTogether}</div>

      {!open ? (
        <button className="btn" onClick={() => { setOpen(true); playClip(); }}>
          🎁 Open My Heart
        </button>
      ) : (
        <>
          <div className="card">
            <p className="romantic-text">
              You are not just my love…<br />
              You are my peace in chaos,<br />
              my strength in weakness,<br />
              my forever in this lifetime.<br />
              Every heartbeat whispers your name.<br />
              I don’t just love you…<br />
              I choose you. Every single day. 💍❤️
            </p>
          </div>

          {/* 💖 SHAYARI SECTION */}
          <div className="shayari-container">
            <div className="shayari moon-shayari">
              <p>
                ਉਹਨੂੰ ਕੀ ਚਾਨਣ ਦਵਾਂ,<br />
                ਚਾਨਣਾਂ ਵਰਗਾ ਉਹ… 🌙<br /><br />
                ਉਹਨੂੰ ਕੀ ਗੁਲਾਬ ਦਵਾਂ,<br />
                ਗੁਲਾਬਾਂ ਵਰਗਾ ਉਹ… 🌹♥️
              </p>
            </div>

            <div className="shayari heart-shayari">
              <p>
                ਧੜਕਣਾਂ ਚ ਵੱਸਦਾ ਏ,<br />
                ਰੂਹਾਂ ਵਰਗਾ ਉਹ…<br /><br />
                ਮੇਰਾ ਹਰ Valentine ਏ,<br />
                ਦੁਆਵਾਂ ਵਰਗਾ ਉਹ… 💕
              </p>
            </div>
          </div>

          <div className="slideshow">
            <img src={photos[slide]} alt="memory" />
          </div>

          {!proposal ? (
            <button className="btn" onClick={() => setProposal(true)}>
              💍 Click For Proposal
            </button>
          ) : (
            <div className="proposal">
              <h2>Will You Be Mine Forever? ❤️</h2>
              <button className="yes" onClick={fireWorksPlus}>
                Yes 💖
              </button>
              <button className="no" onMouseEnter={moveNoButton} style={noPosition}>
                No 😜
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
