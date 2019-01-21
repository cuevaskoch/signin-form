import { connect } from 'react-redux';
import {
  $isInGoodStandingPending,
  $isInGoodStanding,
} from '../../selectors/signin';
import { clearSignIn } from '../../store/signin';
import Confirmation from './Confirmation';

const mapStateToProps = (state) => ({
  isInGoodStandingPending: $isInGoodStandingPending(state),
  isInGoodStanding: $isInGoodStanding(state),
});
const mapDispatchToProps = {
  onReset: clearSignIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
