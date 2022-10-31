import Card from 'react-bootstrap/Card';


const CardNav = (props) => {
  return (
    <Card bg={props.bg_class} border={props.border_class} className={props.style}>
        {props.children}
    </Card>
  )
}

export default CardNav