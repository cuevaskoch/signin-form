import { connect } from 'react-redux';
import { logSignIn } from '../../store/signin';

import SignInForm from './SignInForm';

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  onSubmit: logSignIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
