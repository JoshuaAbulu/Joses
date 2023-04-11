import {Link} from 'react-router-dom'
import { useState } from 'react'
import { useContext } from 'react'
import { GlovesValueContext } from './Contexts/GlovesValueContext'
import { TotalValueContext } from './Contexts/TotalValueContext'

const Navigation = () => {

    const {glovesValue, setGlovesValue, babyValue, setBabyValue, bpValue, setBpValue} = useContext(GlovesValueContext)

    const {totalValue, setTotalValue} = useContext(TotalValueContext)

    const [nav, setNav] = useState(false)

    const toggleNav = () => {
        if (!nav){
            setNav(true)
        }
        else{
            setNav(false)
        }
    }

    return ( 
            <header className=" py-8 w-full bg-orange-400 text-white flex flex-col justify-around border-b-2 gap-8">
                <div className="flex justify-around place-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"  stroke="currentColor" className="w-10 h-10 cursor-pointer" onClick={toggleNav}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                    <Link to='/'>
                    <h1 className=" text-3xl font-extrabold text-center">JO'SES STORES</h1>
                    </Link>
                    <Link to='/checkout'>
                    <div className='flex'>
                    <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                    <h1 className='text-center text-2xl font-extrabold'>{totalValue}</h1>
                    </div>
                    </Link>
                </div>
                {nav && <div className=' flex flex-col justify-around text-center text-xl gap-3 font-bold mt-4 lg:flex-row'>
                    <Link to='/' className='flex flex-col justify-center'>Home</Link>
                    <Link to='/equipment'>Hospital Equipment</Link>
                    <Link to='/consumables'>Hospital Consumables</Link>
                    <Link to='/baby'>Baby Products</Link>
                </div>}
            </header>
     );
}
 
export default Navigation;