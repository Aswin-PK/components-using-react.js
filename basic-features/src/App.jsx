import './App.css'
import LoadMoreItems from './Components/LoadMoreItems'
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
      <LoadMoreItems url={'https://dummyjson.com/products'} limit={20}/>
    </>
  )
}

export default App