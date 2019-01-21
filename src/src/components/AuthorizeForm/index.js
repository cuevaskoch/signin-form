import { connect } from 'react-redux';
import AuthorizeForm from './AuthorizeForm';
import { requestAuthorization } from '../../store/setup';
import { $isAuthorizationPending } from '../../selectors/setup';


const mapStateToProps = (state) => ({
  isAuthorizationPending: $isAuthorizationPending(state),
});
const mapDispatchToProps = {
  requestAuthorization,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizeForm);
