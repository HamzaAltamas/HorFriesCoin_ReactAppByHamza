import './index.css'
import { NavBar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import { Home } from './Pages/Home'
import { ThemeChangeBtn } from './Components/ThemeChangeBTN'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom'
import { ReadMore } from './Pages/ReadMore'
import { Tokenomic } from './Pages/Tokenomic'
import { Hotfriescoin } from './Pages/Hotfriescoin'
import { BacktoTopButton } from './Components/BacktoTopButton'

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <BacktoTopButton />
        <ThemeChangeBtn />
        <Switch>
          <Route exact path="/read" component={ReadMore} />
          <Route exact path="/" component={Home} />
          <Route exact path="/HFC" component={Hotfriescoin} />
          <Route exact path="/tokenomic" component={Tokenomic} />
          <Redirect to={Home}/>
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
