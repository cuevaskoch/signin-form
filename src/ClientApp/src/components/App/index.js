import { connect } from 'react-redux';
import App from './App';

const mapStateToProps = () => ({
  isAuthorized: false,
});

export default connect(mapStateToProps)(App);
