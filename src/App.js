import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'

import './app.css'

const App=()=>(
  <BrowserRouter>
  <div className="app-container">
    <Header/>
    <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/about" Component={About} />
      <Route exact path="/contact" Component={Contact} />
      <Route path="*" Component={NotFound} />
    </Routes>
  
  </div>
  </BrowserRouter>


)

export default App