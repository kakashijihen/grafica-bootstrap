import { Card, Tab } from 'react-bootstrap'
import CardNav from './components/CardNav'
import ContentTabs from './components/subcomponentes/ContentTabs'
import NavTabs from './components/subcomponentes/NavTabs'
import { navItems } from './js/listados' 
import logo from './assets/Dandadan-logo.png'

function App() {


  return (
    <div className="min-vh-100 container d-flex justify-content-center align-items-center bg-black min-vw-100">
        <CardNav bg_class="black" border_class="primary" style='mobile'>
          <Tab.Container defaultActiveKey="Home">
          <Card.Header>
            <NavTabs items={navItems}/>
          </Card.Header>
          <Card.Body>
            <Card.Title> <img src={logo} className="img-fluid" width='640px' height='192px'/> </Card.Title>
            <Card.Subtitle className='mb-2 text-primary text-center'>Evolución de Ventas</Card.Subtitle>
            <ContentTabs content={navItems}/>
          </Card.Body>
          </Tab.Container>
        </CardNav>
    </div>
  )
}

export default App
