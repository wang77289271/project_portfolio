import './Design.scss'
import { AppWrap } from '../../wrapper'
import { images } from '../../constants'
import { motion } from 'framer-motion'
import PosterHoverWrap from '../../wrapper/PosterHoverWrap'

const Design = () => {
  return (
    <motion.div
      whileInView={{ scale: [0.9, 1], y: [10, 0] }}
      transition={{ duration: 0.5 }}
      className='app__design app__flex'
    >
      <div className='app__design-content'>
        {/* <h3 className='app__design-head-text'>
          Look like an <span>expert</span>
          <br />
          right from the start
        </h3> */}
        <h3>
          I know that <span>Good Design</span> <br /> means{' '}
          <span>Good Business</span>
        </h3>
        <p>Head start your stylish website with a gorgeous template</p>
        <a href='#'>View Demos</a>
      </div>
      <div className='app__design-poster-bg-container'>
        <div className='devices-wrapper poster-top'>
          <PosterHoverWrap className='poster desktop'>
            <img src={images.design_bg_1} alt='poster-1' />
          </PosterHoverWrap>
        </div>
        <div className='devices-wrapper poster-middle'>
          <PosterHoverWrap className='poster pad'>
            <img src={images.design_bg_2} alt='poster-2' />
          </PosterHoverWrap>
          <PosterHoverWrap className='poster phone'>
            <img src={images.design_bg_3} alt='poster-3' />
          </PosterHoverWrap>
          <PosterHoverWrap className='poster pad'>
            <img src={images.design_bg_4} alt='poster-4' />
          </PosterHoverWrap>
          <PosterHoverWrap className='poster phone'>
            <img src={images.design_bg_5} alt='poster-5' />
          </PosterHoverWrap>
          <PosterHoverWrap className='poster pad'>
            <img src={images.design_bg_7} alt='poster-7' />
          </PosterHoverWrap>
        </div>
        <div className='devices-wrapper poster-bottom'>
          <PosterHoverWrap className='poster desktop'>
            <img src={images.design_bg_6} alt='poster-6' />
          </PosterHoverWrap>
        </div>
      </div>
    </motion.div>
  )
}

export default AppWrap(Design, 'design', 'app__primarybg')
