import Container from './container'
import { connect } from 'react-redux'

const withSomething = (WrappedComponent) => props => {
    return <WrappedComponent {...props}/>
  }

export default withSomething(Container)