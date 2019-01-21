import { connect } from 'react-redux';
import { $isSetupComplete } from '../../selectors/setup';
import { $hasSignedIn } from '../../selectors/signin';

import App from './App';

const mapStateToProps = state => ({
  hasSignedIn: $hasSignedIn(state),
  isSetupComplete: $isSetupComplete(state),
});

export default connect(mapStateToProps)(App);
