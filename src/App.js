import { useState } from "react";
import bee_icon from "./spelling_bee_icon.svg";
import sudoku_icon from "./sudoku_icon.svg";
import conn_icon from "./connections_icon.svg";
import wordle_icon from "./wordle_icon.svg";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const redirect = (url) => {
    window.location.href = url;
  }
  return (
    <div id="container">
      <nav>
        <div id="menuIcon" onClick={() => setShowMenu(!showMenu)}>
          {!showMenu ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
              <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
              <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
            </svg>
          )}
        </div>
        <h1>NYT Games Hub</h1>
      </nav>

      <div id="desktop">
        <div id="menu" className={showMenu ? "" : "hidden"}>
          <h4>Games</h4>
          <div id="gameList">
            <div
              onClick={() => redirect("https://connections-ofai.onrender.com")}
              className="game"
            >
              <img src={conn_icon} />
              <h5>Connections</h5>
            </div>
            <div
              onClick={() => redirect("https://nc-spelling-bee.netlify.app/")}
              className="game"
            >
              <img src={bee_icon} />
              <h5>Spelling Bee</h5>
            </div>
            <div
              onClick={() => redirect("https://wordle-clone-nc.netlify.app/")}
              className="game"
            >
              <img src={wordle_icon} />
              <h5>Wordle</h5>
            </div>
            <div
              onClick={() => redirect("https://nc-sudoku.netlify.app/")}
              className="game"
            >
              <img src={sudoku_icon} />
              <h5>Sudoku</h5>
            </div>
          </div>
        </div>
        <div className="banner">
          <div
            className="card"
            onClick={() => redirect("https://nc-spelling-bee.netlify.app/")}
          >
            <img src={bee_icon} />
            <h2 className="title">Spelling Bee</h2>
            <p className="subtitle">
              Make as many words as you can with 7 letters.
            </p>
          </div>
        </div>
        <div className="moreGames">
          <h3>More Games</h3>
          <div className="moreList">
            <div className="gameCard">
              <div className="cardTop" id="spelling_bee">
                <img src={bee_icon} />
                <h3>Spelling Bee</h3>
              </div>
              <div className="cardBottom">
                <p className="subtitle">
                  Make as many words as you can with 7 letters.
                </p>
                <div className="btn-container">
                  <button
                    className="btn"
                    onClick={() => redirect("https://nc-spelling-bee.netlify.app/")}
                  >
                    Play
                  </button>
                </div>
              </div>
            </div>
            <div className="gameCard">
              <div className="cardTop" id="wordle">
                <img src={wordle_icon} />
                <h3>Wordle</h3>
              </div>
              <div className="cardBottom">
                <p className="subtitle">
                  Get six chances to guess a five-letter word.
                </p>
                <div className="btn-container">
                  <button
                    className="btn"
                    onClick={() => redirect("https://wordle-clone-nc.netlify.app/")}
                  >
                    Play
                  </button>
                </div>
              </div>
            </div>

            <div className="gameCard">
              <div className="cardTop" id="connections">
                <img src={conn_icon} />
                <h3>Connections</h3>
              </div>
              <div className="cardBottom">
                <p className="subtitle">
                  Group words that share a common thread
                </p>
                <div className="btn-container">
                  <button
                    className="btn"
                    onClick={() => redirect("https://connections-ofai.onrender.com")}
                  >
                    Play
                  </button>
                </div>
              </div>
            </div>
            <div className="gameCard">
              <div className="cardTop" id="sudoku">
                <img src={sudoku_icon} />
                <h3>Sudoku</h3>
              </div>
              <div className="cardBottom">
                <p className="subtitle">
                  Try this number game, minus the math.
                </p>
                <div className="btn-container">
                  <button
                    className="btn"
                    onClick={() => redirect("https://nc-sudoku.netlify.app/")}
                  >
                    Play
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile">
        <div className="gameList">
          <div
          id="spelling_bee"
            className="gameCard"
            onClick={() => redirect("https://nc-spelling-bee.netlify.app/")}
          >
            <img src={bee_icon} />
            <h3>Spelling Bee</h3>
            <p className="subtitle">Wrangle words</p>
          </div>
          <div
            className="gameCard"
            id="connections"
            onClick={() => redirect("https://connections-ofai.onrender.com")}
          >
            <img src={conn_icon} />
            <h3>Connections</h3>
            <p className="subtitle">Group words</p>
          </div>
          <div
          id="wordle"
            className="gameCard"
            onClick={() => redirect("https://wordle-clone-nc.netlify.app/")}
          >
            <img src={wordle_icon} />
            <h3>Wordle</h3>
            <p className="subtitle">Untangle terms</p>
          </div>
          <div
          id="sudoku"
            className="gameCard"
            onClick={() => redirect("https://nc-sudoku.netlify.app/")}
          >
            <img src={sudoku_icon} />
            <h3>Sudoku</h3>
            <p className="subtitle">Decode digits</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
