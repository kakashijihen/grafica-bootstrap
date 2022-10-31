import Nav from 'react-bootstrap/Nav';

const NavTabs = (props) => {
  return (
    <Nav fill variant="tabs" className='mb-0 mb-lg-3' >
        {
            props.items.map((link)=>
            <Nav.Item key={link.id} className="mb-3 mb-lg-0">
                <Nav.Link eventKey={link.href}>{link.titulo}</Nav.Link>
            </Nav.Item>
            )
        }
    </Nav>
  )
}

export default NavTabs