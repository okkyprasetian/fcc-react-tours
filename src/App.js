import { useState, useEffect } from 'react'
import Loading from './components/Loading'
import Header from './components/Header'
import Cards from './components/Cards'
import './App.css';

function App() {

  const [tourLs, setTourLs] = useState([])

  useEffect(() => {
    const getTourLs = async () => {
      const response = await fetch('https://course-api.com/react-tours-project')
      const data = await response.json()
      return data
    }

    getTourLs().then(data => setTourLs(data))
  }, [])

  return (
    <div className="App">
      {tourLs.length < 1 ? <Loading /> :
        <main>
          <Header />
          <Cards tourLs={tourLs} />
        </main>}
    </div>
  )
}

export default App;
