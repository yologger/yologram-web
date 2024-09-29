import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import Container from './container';


const withSomething = (WrappedComponent) => props => {
    return <WrappedComponent {...props}/>
  }

export default withSomething(Container)
