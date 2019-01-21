import { connect } from 'react-redux';
import { $isSetupComplete } from '../../selectors/setup';

import App from './App';

const mapStateToProps = state => ({
  isSetupComplete: $isSetupComplete(state),
});

export default connect(mapStateToProps)(App);
