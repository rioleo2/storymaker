import './App.css';
import storyMaker from './components/storyMaker.mjs';


function App() {
  return (
    <div className="App">
      <div className="container">
        <main className="main">
          <header className="header">
            <h1>StoryMaker</h1>
            <label for="name">Как вас зовут?</label>
            <input type="text" id="name" name="name"></input>
          </header>
          <section className="questions">
            <div className="question">
              <label for="answer1" id='question1'></label>
              <input type="text" id="answer1"></input>
            </div>
            <div className="question">
              <label for="answer2" id='question2'></label>
              <input type="text" id="answer2"></input>
            </div>
            <div className="question">
              <label for="answer3" id='question3'></label>
              <input type="text" id="answer3"></input>
            </div>
            <button type="button" onClick={storyMaker} className="submit__button">🔮</button>
          </section>
          <section className="story">
            <p className="story__text">

            </p>
          </section>
        </main>
      </div>

    </div>
  );
}

export default App;
