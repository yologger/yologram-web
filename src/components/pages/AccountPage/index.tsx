import Container from './container'

const withSomething = (WrappedComponent) => props => {
    return <WrappedComponent {...props}/>
  }

export default withSomething(Container)