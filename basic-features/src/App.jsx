import './App.css'
import ImageSlider from './Components/ImageSlider'
import Accordion from './Components/Accordion'
import RandomColor from './Components/RandomColorGenerator'
import RatingSelection from './Components/RatingSelection'

function App() {

  return (
    <>
      <Accordion />
      <RandomColor />
      <RatingSelection />
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={5}/>
    </>
  )
}

export default App