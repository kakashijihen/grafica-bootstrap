import { Tab } from "react-bootstrap"
import  Home  from "../../secciones/Home";
import  Circulacion  from "../../secciones/Circulacion";
import  VolumenActual  from "../../secciones/VolumenActual";
import  VolumenTotal  from "../../secciones/VolumenTotal";

const ContentTabs = () => {
  return (
    <Tab.Content>
        <Tab.Pane eventKey="Home">
           <Home />
        </Tab.Pane>
        <Tab.Pane eventKey="VolumenActual">
            <VolumenActual/>
        </Tab.Pane>
        <Tab.Pane eventKey="VentasTotales">
            <VolumenTotal/>
        </Tab.Pane>
        <Tab.Pane eventKey="Tiraje">
           <Circulacion/>
        </Tab.Pane>
    </Tab.Content>
  )
}

export default ContentTabs