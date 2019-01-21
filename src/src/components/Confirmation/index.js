import { connect } from 'react-redux';
import { clearSignIn } from '../../store/signin';
import Confirmation from './Confirmation';

const mapStateToProps = () => ({});
const mapDispatchToProps = {
  onReset: clearSignIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
