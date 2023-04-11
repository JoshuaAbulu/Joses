import './index.css';
import Navigation from './Components/Navigation';
import {Routes, Route} from 'react-router-dom'
import Homepage from './Components/Homepage';
import Footer from './Components/Footer';
import Consumables from './Components/Consumables';
import Equipment from './Components/Equipment';
import Baby from './Components/Baby';
import { PriceContext } from './Components/Contexts/PriceContext';
import { ValueContext } from './Components/Contexts/ValueContext';
import { useState } from 'react';
import { useContext } from 'react';
import { GlovesValueContext } from './Components/Contexts/GlovesValueContext';
import { TotalValueContext } from './Components/Contexts/TotalValueContext';
import Checkout from './Components/Checkout';
import { ItemNumberContext } from './Components/Contexts/ItemNumber';

function App() {


  const [price, setPrice] = useState({
    babyCloth: 12.99,
    bpMonitor: 19.99,
    gloves: 9.99,
  })

  function useInput(initialValue = 0) {
    const [value, setValue] = useState(initialValue);
    const [added, setAdded] = useState('Added to Cart')
    const [showAdded, setShowAdded] = useState(false)
  
    const onChange = (event) => {
      const newGlovesValue = event.target.value;
      const newValue = event.target.value;
      setValue(newValue);
      
    };
  
    const increment = () => {
      setValue((prevValue) => {
      const newPrevValue = parseInt(prevValue)
      return newPrevValue + 1});
    };

    const deduction = () => {
        setValue((prevValue) => {
        const newPrevValue = parseInt(prevValue)
        return newPrevValue - 1});
      };
  
    return { value, setValue, onChange, increment, deduction, added, setAdded, showAdded, setShowAdded };
  }

  const [glovesValue, setGlovesValue] = useState(null)
  const [bpValue, setBpValue] = useState(null)
  const [babyValue, setBabyValue] = useState(null)

  const [totalValue, setTotalValue] = useState(0)

  const [items, setItems] = useState([])
  const [eachItem, setEachItem] = useState({})

  return (
    
    <div className="App h-screen w-screen scroll-smooth font-roboto">
      <PriceContext.Provider value={price}>
        <ValueContext.Provider value={useInput}>
          <GlovesValueContext.Provider value={{glovesValue, setGlovesValue, babyValue, setBabyValue, bpValue, setBpValue}}>
            <TotalValueContext.Provider value={{totalValue, setTotalValue}}>
              <ItemNumberContext.Provider value={{items, setItems, eachItem, setEachItem}}>
                <Navigation />
                  <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='/consumables' element={<Consumables />} />
                    <Route path='/equipment' element={<Equipment />} />
                    <Route path='/baby' element={<Baby />} />
                    <Route path='/checkout' element={<Checkout />} />
                  </Routes>
                <Footer />
              </ItemNumberContext.Provider>
             </TotalValueContext.Provider>
          </GlovesValueContext.Provider>
        </ValueContext.Provider>
      </PriceContext.Provider>
    </div>
  
  );
}

export default App;
