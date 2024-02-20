import { motion } from 'framer-motion'

const PosterHoverWrap = (props) => {
  return (
    <motion.div whileHover={{ scale: [1, 1.01] }} className={props.className}>
      {props.children}
    </motion.div>
  )
}

export default PosterHoverWrap
