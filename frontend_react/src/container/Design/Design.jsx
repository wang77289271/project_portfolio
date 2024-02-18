import './Design.scss'
import { AppWrap, MotionWrap } from '../../wrapper'

const Design = () => {
  return <div>Design</div>
}

export default AppWrap(
  MotionWrap(Design, 'app__design'),
  'design',
  'app__primarybg'
)
