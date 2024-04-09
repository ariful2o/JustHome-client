import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

import img1 from '../assets/istockphoto-1338737831-612x612.jpg'
import img2 from '../assets/istockphoto-1297055506-612x612.jpg'
import img3 from '../assets/lk-home-union-life-protect1600x490.jpg'
import img4 from '../assets/homepage-slide-1.jpg'
import img5 from '../assets/how1-370x233.jpg'
import img6 from '../assets/how3-370x233.jpg'
import img7 from '../assets/post-15-370x370.jpg'
import img8 from '../assets/post-4-370x370.jpg'
import img9 from '../assets/program1-1170x658.jpg'

const slider = (
  <AutoplaySlider
    play={true}
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src={img9} />
    <div data-src={img1} />
    <div data-src={img2} />
    <div data-src={img3} />
    <div data-src={img4} />
    <div data-src={img5} />
    <div data-src={img6} />
    <div data-src={img7} />
    <div data-src={img8} />

  </AutoplaySlider>
);
export default function Slider() {
  return (
    <>
      {slider}
    </>
  )
}
