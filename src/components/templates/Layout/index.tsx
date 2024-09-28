import Container from './container';
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

const withSomething = (WrappedComponent) => props => {
    return <WrappedComponent {...props}/>
  }

export default withSomething(Container)