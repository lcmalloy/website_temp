import {useState} from 'react';
import {motion} from "framer-motion"
import { Pills } from '../components/Pills'

export const Home = () => {
const [isHeroText, setHeroText] = useState<string>('One Platform');

const updateHeroText = (e) => {
  const currentNode = document.querySelector('#' + `${e.target.alt}`);
  setHeroText(currentNode.dataset.headertag)

}

const resetText = () => {
  setHeroText('One Platform');
}

const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.8,
    },
  },
  hide: {
    y: -20,
    opacity: 0,
  },
}

  return (
    <>
      <section className="hero | section">
        <div className="container" data-type="wide">
          <div className="even-columns">
            <div className="flow">
              <h1 className="heading-1">
                <motion.div key={isHeroText} variants={variants} animate={"show"} initial="hide">
                  <span className="clr-primary-400">
                  {isHeroText}
                  </span>
                </motion.div>
                <br />
                built for business
              </h1>
              <p>The smartest media platform in the world makes it easier than ever to realize your ideal in-location experience.</p>
              <button className="button" data-type="primary">find your solution</button>
            </div>
            <div className="m-auto">
              <div className="hero-images">
                <Pills pills={[
  {
    heroId: "music", 
    heroText:"Music", 
    imageUrl:"/src/assets/music1.jpeg", 
    alt:"music"
  },
  {
    heroId:"signage", 
    heroText:"Digital Signage", 
    imageUrl:"/src/assets/digi1.png", 
    alt:"signage"
  },
  {
    heroId:"tv",
    heroText:"TV",
    imageUrl:"/src/assets/tv1.jpg", 
    alt:"tv"
  }
]}
updateHeroText={updateHeroText}
resetText={resetText}
/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};