import { AppWrap, MotionWrap } from '../../wrapper'
// import { motion } from 'framer-motion'
import { GoArrowUpRight } from 'react-icons/go'
import './MyWork.scss'
import { useEffect, useState } from 'react'
import { urlFor, client } from '../../client'

const MyWork = () => {
  const [myWorks, setMyWorks] = useState([])
  useEffect(() => {
    const query = '*[_type == "works"]'

    client.fetch(query).then((data) => {
      setMyWorks(data)
    })
  }, [])
  return (
    <>
      <h2 className='head-text'>
        My Creative <span>Portfolio</span> Section
      </h2>
      <p className='subtitle-text'>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
      </p>
      <div className='app__myworks-container'>
        {myWorks.map((work, index) => (
          <a href='#' className='app__mywork-item app__flex' key={index}>
            <div
              className='app__mywork-img'
              style={{ backgroundImage: `url(${urlFor(work.imgUrl)})` }}
            />
            {/* <img src={urlFor(work.imgUrl)} alt={work.name} />
            </div> */}
            <div className='app__mywork-content'>
              <div className='app__mywork-content-item'>
                <h4 className='bold-text'>
                  {work.title}
                  <GoArrowUpRight />
                </h4>
                <p className='p-text' style={{ marginTop: 10 }}>
                  {work.description}
                </p>
              </div>
              <div className='app__mywork-tech'>
                {work.techniques.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(MyWork, 'app__myworks'),
  'mywork',
  'app__whitebg'
)
