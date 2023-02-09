import './App.css';

function App() {
  return (
    <div className='Main'>
      <div className="App">
        <div className='Button Schema'>
          <a
            className="Schema"
            href="https://cloud.timeedit.net/liu/web/schema/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schema
          </a>
        </div>
        <div className='Button Printa'>
          <a
            className="Printa"
            href="https://portalliu.onricoh.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Printa
          </a>
        </div>
        <div className='Button Boka'>
          <a
            href="https://cloud.timeedit.net/liu/web/wr_stud/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Boka Sal
          </a>
        </div>
      </div>
      <div className="Github">
        <a
            href="https://github.com/williamtorberntsson/openliunet"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github page to contribute! 
          </a>
      </div>
    </div>
  );
}

export default App;