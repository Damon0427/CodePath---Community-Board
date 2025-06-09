
import './App.css'
import Card from './components/card'
import languages from './Data/languages'


function App() {
  return (
    <div className='app'>
      <h1>
        Programming Language Board
      </h1>
      <div className='card-container'>
        {languages.map((language, index) => (
          <Card 
          key={index} 
          title={language.title} 
          image={language.image} 
          description={language.description} 
          link={language.link} />
        ))}
        </div>
    </div>
  )
}

export default App
