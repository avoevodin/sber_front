import Loader from '../Loader/Loader'

const withLoader = (WrappedComponent) => ({ loading }) => {
  if (loading) {
    return (<Loader />)
  }
  return <WrappedComponent />
}

export default withLoader
