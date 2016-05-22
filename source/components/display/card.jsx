import { colors } from '../variables';

export default const Card = props => {
  return <Container>
    <Header>{props.title}</Header>
    {props.children}
  </Container>
}


// container
export const Container = props => {
  return <div style={ Container.styles(props) }>{ props.children }</div>
}

Container.styles = props => {
  display: 'block',
  backgroundColor: colors.light,

  ':hover': {
    backgroundColor: colors.dark5,
  } 
}


// header
export const Header = props => {
  return <header style={ Header.styles(props) }>{ props.children }</header>
}

Header.styles = props => {
  backgroundColor: colors.dark5,

  ':hover': {
    backgroundColor: colors.dark10,
  } 
}