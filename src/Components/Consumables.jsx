import {Link} from 'react-router-dom'
import glovesbg from '../img/glovesbg.png'
import { useEffect } from 'react';
import { PriceContext } from './Contexts/PriceContext';
import { ValueContext } from './Contexts/ValueContext';
import { useContext } from 'react';
import { useState } from 'react';
import {GlovesValueContext} from './Contexts/GlovesValueContext'
import { TotalValueContext } from './Contexts/TotalValueContext';
import { ItemNumberContext } from './Contexts/ItemNumber';


const Consumables = () => {

    const price = useContext(PriceContext)
    const useInput = useContext(ValueContext)
    const {glovesValue, setGlovesValue} = useContext(GlovesValueContext)
    const {items, setItems} = useContext(ItemNumberContext)
    const {eachItem, setEachItem} = useContext(ItemNumberContext)

      const input1 = useInput(0);
      const input2 = useInput(0);
      const input3 = useInput(0);
      const input4 = useInput(0);
      const input5 = useInput(0);
      const input6 = useInput(0);

      setGlovesValue(input1.value + input2.value + input3.value + input4.value + input5.value + input6.value)
    
    useEffect(() => {
        if (window.location.hash) {
          const element = document.querySelector(window.location.hash);
          if (element) {
            element.scrollIntoView();
          }
        }
      }, []);

      useEffect(() => {
        if(!window.location.hash){
        window.scrollTo(0, 0);}
      }, []);

      const {totalValue, setTotalValue} = useContext(TotalValueContext)

    return ( 
        <div className='flex flex-col place-items-center text-center my-24'>
            <h1 className='text-5xl font-black mb-12'>HOSPITAL CONSUMABLES</h1>
            <div className=' bg-orange-400 w-10/12 rounded-2xl flex flex-col place-items-center gap-8 text-center text-white my-6 border-2 border-orange-400 lg:grid lg:grid-cols-2' id='gloves'>
                <div className='py-4'>
                    <img src={glovesbg} alt="latex gloves" className=' w-48 h-48'/>
                </div>
                <div className='bg-white text-black flex flex-col gap-4 px-4 py-10 place-items-center'>
                    <h1 className=' text-4xl font-black'>Latex Gloves</h1>
                    <h2 className='text-3xl font-extrabold text-orange-400'>${price.gloves}</h2>
                    <p className='text-2xl font-bold text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, debitis!</p>
                    
                    <div className='flex bg-orange-400 w-2/3 rounded-2xl justify-center place-items-center gap-4 p-2'>
                        <button onClick = {() => 
                        {setTotalValue(totalValue+input1.value); 
                        setEachItem((prev) => {
                            const newObj = {...prev, name: 'Latex Gloves', number: input1.value, price: price.gloves}
                            setItems((prev) => {
                                const newArr = [...prev, newObj]
                                return newArr
                            });
                            return newObj
                        });
                        input1.setShowAdded(true);
                        input1.setValue(0)}}
                        className='text-white text-xl font-bold'>Add to Cart</button>
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={input1.deduction}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>

                        <input type="number" min='0' name="" id="gloves-cart" className='border-2 border-orange-400 w-10 h-10 flex justify-center place-items-center text-lg font-bold text-center' value={input1.value} onChange={input1.onChange} />

                        <svg onClick={input1.increment} className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    {input1.showAdded && <h1 className='font-bold'>{input1.added}</h1>}
                </div>
            </div>

            <div className=' bg-orange-400 w-10/12 rounded-2xl flex flex-col place-items-center gap-8 text-center text-white my-6 border-2 border-orange-400 lg:grid lg:grid-cols-2'>
                <div className='py-4'>
                    <img src={glovesbg} alt="latex gloves" className=' w-48 h-48'/>
                </div>
                <div className='bg-white text-black flex flex-col gap-4 px-4 py-10 place-items-center'>
                    <h1 className=' text-4xl font-black'>Latex Gloves</h1>
                    <h2 className='text-3xl font-extrabold text-orange-400'>${price.gloves}</h2>
                    <p className='text-2xl font-bold text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, debitis!</p>
                    
                    <div className='flex bg-orange-400 w-2/3 rounded-2xl justify-center place-items-center gap-4 p-2'>
                        <button onClick = {() => {setTotalValue(totalValue+input2.value); setEachItem((prev) => {
                            const newObj = {...prev, name: 'Latex Gloves', number: input2.value, price: price.gloves}
                            setItems((prev) => {
                                const newArr = [...prev, newObj]
                                return newArr
                            });
                            return newObj
                        }); 
                        input2.setShowAdded(true);
                        input2.setValue(0)}} className='text-white text-xl font-bold'>Add to Cart</button>
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={input2.deduction}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>

                        <input type="number" name="" id="gloves-cart" className='border-2 border-orange-400 w-10 h-10 flex justify-center place-items-center text-lg font-bold text-center' value={input2.value} onChange={input2.onChange}/>

                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={input2.increment}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    {input2.showAdded && <h1 className='font-bold'>{input2.added}</h1>}
                </div>
            </div>

            <div className=' bg-orange-400 w-10/12 rounded-2xl flex flex-col place-items-center gap-8 text-center text-white my-6 border-2 border-orange-400 lg:grid lg:grid-cols-2'>
                <div className='py-4'>
                    <img src={glovesbg} alt="latex gloves" className=' w-48 h-48'/>
                </div>
                <div className='bg-white text-black flex flex-col gap-4 px-4 py-10 place-items-center'>
                    <h1 className=' text-4xl font-black'>Latex Gloves</h1>
                    <h2 className='text-3xl font-extrabold text-orange-400'>${price.gloves}</h2>
                    <p className='text-2xl font-bold text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, debitis!</p>
                    
                    <div className='flex bg-orange-400 w-2/3 rounded-2xl justify-center place-items-center gap-4 p-2'>
                        <button onClick = {() => {setTotalValue(totalValue+input3.value); setEachItem((prev) => {
                            const newObj = {...prev, name: 'Latex Gloves', number: input3.value, price: price.gloves}
                            setItems((prev) => {
                                const newArr = [...prev, newObj]
                                return newArr
                            });
                            return newObj
                        });
                        input3.setShowAdded(true);
                        input3.setValue(0)}} className='text-white text-xl font-bold'>Add to Cart</button>
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={input3.deduction}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>

                        <input type="number" name="" id="gloves-cart" className='border-2 border-orange-400 w-10 h-10 flex justify-center place-items-center text-lg font-bold text-center' value={input3.value} onChange={input3.onChange}/>

                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={input3.increment}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    {input3.showAdded && <h1 className='font-bold'>{input3.added}</h1>}
                </div>
            </div>

            <div className=' bg-orange-400 w-10/12 rounded-2xl flex flex-col place-items-center gap-8 text-center text-white my-6 border-2 border-orange-400 lg:grid lg:grid-cols-2'>
                <div className='py-4'>
                    <img src={glovesbg} alt="latex gloves" className=' w-48 h-48'/>
                </div>
                <div className='bg-white text-black flex flex-col gap-4 px-4 py-10 place-items-center'>
                    <h1 className=' text-4xl font-black'>Latex Gloves</h1>
                    <h2 className='text-3xl font-extrabold text-orange-400'>${price.gloves}</h2>
                    <p className='text-2xl font-bold text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, debitis!</p>
                    
                    <div className='flex bg-orange-400 w-2/3 rounded-2xl justify-center place-items-center gap-4 p-2'>
                        <button onClick = {() => {setTotalValue(totalValue+input4.value); setEachItem((prev) => {
                            const newObj = {...prev, name: 'Latex Gloves', number: input4.value, price: price.gloves}
                            setItems((prev) => {
                                const newArr = [...prev, newObj]
                                return newArr
                            });
                            return newObj
                        });
                        input4.setShowAdded(true)
                        input4.setValue(0)}} className='text-white text-xl font-bold'>Add to Cart</button>
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={input4.deduction}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>

                        <input type="number" name="" id="gloves-cart" className='border-2 border-orange-400 w-10 h-10 flex justify-center place-items-center text-lg font-bold text-center' value={input4.value} onChange={input4.onChange}/>

                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={input4.increment}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    {input4.showAdded && <h1 className='font-bold'>{input4.added}</h1>}
                </div>
            </div>

            <div className=' bg-orange-400 w-10/12 rounded-2xl flex flex-col place-items-center gap-8 text-center text-white my-6 border-2 border-orange-400 lg:grid lg:grid-cols-2'>
                <div className='py-4'>
                    <img src={glovesbg} alt="latex gloves" className=' w-48 h-48'/>
                </div>
                <div className='bg-white text-black flex flex-col gap-4 px-4 py-10 place-items-center'>
                    <h1 className=' text-4xl font-black'>Latex Gloves</h1>
                    <h2 className='text-3xl font-extrabold text-orange-400'>${price.gloves}</h2>
                    <p className='text-2xl font-bold text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, debitis!</p>
                    
                    <div className='flex bg-orange-400 w-2/3 rounded-2xl justify-center place-items-center gap-4 p-2'>
                        <button onClick = {() => {setTotalValue(totalValue+input5.value); setEachItem((prev) => {
                            const newObj = {...prev, name: 'Latex Gloves', number: input5.value, price: price.gloves}
                            setItems((prev) => {
                                const newArr = [...prev, newObj]
                                return newArr
                            });
                            return newObj
                        }); 
                        input5.setShowAdded(true)
                        input5.setValue(0)}} className='text-white text-xl font-bold'>Add to Cart</button>
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={input5.deduction}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>

                        <input type="number" name="" id="gloves-cart" className='border-2 border-orange-400 w-10 h-10 flex justify-center place-items-center text-lg font-bold text-center' value={input5.value} onChange={input5.onChange}/>

                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={input5.increment}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    {input5.showAdded && <h1 className='font-bold'>{input5.added}</h1>}
                </div>
            </div>

            <div className=' bg-orange-400 w-10/12 rounded-2xl flex flex-col place-items-center gap-8 text-center text-white my-6 border-2 border-orange-400 lg:grid lg:grid-cols-2'>
                <div className='py-4'>
                    <img src={glovesbg} alt="latex gloves" className=' w-48 h-48'/>
                </div>
                <div className='bg-white text-black flex flex-col gap-4 px-4 py-10 place-items-center'>
                    <h1 className=' text-4xl font-black'>Latex Gloves</h1>
                    <h2 className='text-3xl font-extrabold text-orange-400'>${price.gloves}</h2>
                    <p className='text-2xl font-bold text-gray-700'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, debitis!</p>
                    
                    <div className='flex bg-orange-400 w-2/3 rounded-2xl justify-center place-items-center gap-4 p-2'>
                        <button onClick = {() => {setTotalValue(totalValue+input6.value); setEachItem((prev) => {
                            const newObj = {...prev, name: 'Latex Gloves', number: input6.value, price: price.gloves}
                            setItems((prev) => {
                                const newArr = [...prev, newObj]
                                return newArr
                            });
                            return newObj
                        });
                        input6.setShowAdded(true)
                        input6.setValue(0)}} className='text-white text-xl font-bold'>Add to Cart</button>
                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={input6.deduction}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                        </svg>

                        <input type="number" name="" id="gloves-cart" className='border-2 border-orange-400 w-10 h-10 flex justify-center place-items-center text-lg font-bold text-center' value={input6.value} onChange={input6.onChange}/>

                        <svg className='w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" onClick={input6.increment}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </div>
                    {input6.showAdded && <h1 className='font-bold'>{input6.added}</h1>}
                </div>
            </div>
        </div>
     );
}
 
export default Consumables;