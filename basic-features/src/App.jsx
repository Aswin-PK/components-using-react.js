import './App.css'
import Accordion from './Components/Accordion'
import RandomColor from './Components/RandomColorGenerator'
import RatingSelection from './Components/RatingSelection'
import ImageSlider from './Components/ImageSlider'
import LoadMoreItems from './Components/LoadMoreItems'
import TreeView from './Components/TreeView'
import QRCodeGenerator from './Components/QRCodeGenerator'
import ThemeChanger from './Components/ThemeChange'
import ScrollIndicator from './Components/ScrollIndicator'
import TabsTest from './Components/CustomTabs/tab-test'
import PopupModal from './Components/PopupModal'
import GitHubProfileFinder from './Components/GitHubProfileFinder'

function App() {

  return (
    <>
      <Accordion />
      <RandomColor />
      <RatingSelection />
      <ImageSlider url={'https://picsum.photos/v2/list'} limit={5}/>
      <LoadMoreItems url={'https://dummyjson.com/products'} limit={20}/>
      <TreeView />
      <QRCodeGenerator />
      <ThemeChanger />
      <ScrollIndicator />
      <TabsTest />
      <PopupModal />
      <GitHubProfileFinder />
    </>
  )
}

export default App