import { connect } from 'react-redux';
import AuthorizeForm from './AuthorizeForm';
import { startAuthorization } from '../../store/setup';

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  startAuthorization,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizeForm);
