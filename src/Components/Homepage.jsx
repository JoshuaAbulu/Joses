import bpbg from '../img/bpbg.png'
import bptwobg from '../img/bp2bg.png'
import glovesbg from '../img/glovesbg.png'
import babybg from '../img/babybg.png'
import equipment from '../img/equipment.jpg'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'

const Homepage = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

    return ( 
        <main className="flex flex-col place-items-center "> {/* Entire homepage content */}
            <section className=" bg-orange-400 flex flex-col place-items-center border-b-2 py-4 px-4 rounded-b-2xl lg:flex-row lg:py-36">
                {/* New product */}
                <div className=' pb-2 pt-2 flex justify-center'>
                    <img src={bpbg} alt="bp monitor" className='h-1/2 w-1/2 lg:w-full lg:h-full' />
                </div>
                <div className='w-full text-white flex flex-col place-items-center text-center gap-4'>
                    <span className='text-slate-300 font-extrabold text-3xl italic'>NEW PRODUCT</span>
                    <h1 className=' font-extrabold text-4xl'>BLOOD PRESSURE MONITOR</h1>
                    <p className=' font-bold text-2xl'>Take control of your health and monitor your blood pressure at home with our reliable and easy-to-use blood pressure monitor</p>
                    <Link to='/equipment#bp'>
                        <button className='h-12 w-40 bg-black rounded-2xl text-xl font-extrabold'>
                            View Product
                        </button>
                    </Link>
                </div>
            </section>
            <section className='flex flex-col gap-12 place-items-center my-24 w-10/12 lg:grid lg:grid-cols-3 lg:w-11/12'>
                {/* Different sections */}
                <div className=' bg-gray-200 rounded-2xl w-full flex flex-col place-items-center my-8 relative lg:col-span-1 lg:w-full'>
                    {/* Hospital equipment section */}
                    <img src={bptwobg} alt="bp monitor" className=' w-40 h-40 relative bottom-20'/>
                    <h1 className=' text-2xl font-black relative bottom-10'>HOSPITAL <br /> EQUIPMENT</h1>
                    <Link to='/equipment' className='flex gap-3'>
                        <h2 className=' text-xl text-slate-400 italic font-bold'>SHOP</h2>
                        <svg className='w-8 h-8 text-orange-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </div>
                <div className=' bg-gray-200 rounded-2xl w-full flex flex-col place-items-center my-8 relative lg:col-span-1 lg:w-full'>
                    {/* Hospital consumables section */}
                    <img src={glovesbg} alt="gloves" className=' w-40 h-40 relative bottom-20'/>
                    <h1 className=' text-2xl font-black relative bottom-10'>HOSPITAL <br /> CONSUMABLES</h1>
                    <Link to='/consumables' className='flex gap-3'>
                        <h2 className=' text-xl text-slate-400 italic font-bold'>SHOP</h2>
                        <svg className='w-8 h-8 text-orange-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </div>
                <div className=' bg-gray-200 w-full rounded-2xl flex flex-col place-items-center my-8 relative lg:col-span-1 lg:w-full'>
                    {/* Baby products section */}
                    <img src={babybg} alt="baby cloth" className=' w-40 h-40 relative bottom-20'/>
                    <h1 className=' text-2xl font-black relative bottom-10'>BABY <br /> PRODUCTS</h1>
                    <Link to='/baby' className='flex gap-3'>
                        <h2 className=' text-xl text-slate-400 italic font-bold'>SHOP</h2>
                        <svg className='w-8 h-8 text-orange-400' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </Link>
                </div>
            </section>
            <section className='flex flex-col place-items-center text-center mb-24 lg:w-11/12'> {/* Featured products */}
                <h1 className='w-10/12 text-4xl font-black'>FEATURED PRODUCTS</h1>
                <div className=' bg-orange-400 w-10/12 rounded-2xl flex flex-col place-items-center my-8 py-8 gap-8 text-center text-white lg:flex-row lg:w-full'>
                    <img src={glovesbg} alt="latex gloves" className=' w-48 h-48 lg:w-80 lg:h-80'/>
                    <div className='flex flex-col gap-8 lg:flex lg:flex-col lg:gap-8'>
                    <h1 className=' text-4xl font-black'>Latex Gloves</h1>
                    <p className='text-2xl font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, debitis!</p>
                    <Link to='/consumables#gloves' className=''>
                        <button className='h-16 w-44 bg-black rounded-2xl text-xl font-extrabold text-white'>
                            SEE PRODUCT
                        </button>
                    </Link>
                    </div>
                </div>
                <div className=' bg-orange-400 w-10/12 rounded-2xl flex flex-col place-items-center my-8 py-8 gap-8 text-center text-white lg:flex-row lg:w-full'>
                    <img src={bpbg} alt="bp monitor" className=' w-48 h-48 lg:w-80 lg:h-80'/>
                    <div className='flex flex-col gap-8 lg:flex lg:flex-col lg:gap-8'>
                    <h1 className=' text-4xl font-black'>Blood Pressure Monitor</h1>
                    <p className='text-2xl font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, debitis!</p>
                    <Link to='/equipment#bp' className=''>
                        <button className='h-16 w-44 bg-black rounded-2xl text-xl font-extrabold text-white'>
                            SEE PRODUCT
                        </button>
                    </Link>
                    </div>
                </div>
                <div className=' bg-orange-400 w-10/12 rounded-2xl flex flex-col place-items-center my-8 py-8 gap-8 text-center text-white lg:flex-row lg:w-full'>
                    <img src={babybg} alt="baby cloth" className=' w-48 h-48 lg:w-80 lg:h-80'/>
                    <div className='flex flex-col gap-8 lg:flex lg:flex-col lg:gap-8'>
                    <h1 className=' text-4xl font-black'>Baby Cloth</h1>
                    <p className='text-2xl font-bold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, debitis!</p>
                    <Link to='/baby#cloth' className=''>
                        <button className='h-16 w-44 bg-black rounded-2xl text-xl font-extrabold text-white'>
                            SEE PRODUCT
                        </button>
                    </Link>
                    </div>
                </div>
            </section>
            <section className='w-10/12 flex flex-col gap-12 place-items-center mx-4 mb-36 lg:flex-row lg:w-11/12'>
                <img src={equipment} alt="Equipment" className='w-full rounded-2xl' />
                <div>
                <h1 className='text-3xl font-black text-center'>Bringing you <span className='text-orange-400 font-bold'>quality</span> and <span className='text-orange-400 font-bold'>affordable</span> hospital equipment, consumables, and baby products</h1>
                <p className='text-xl text-gray-700 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus expedita maxime ea repudiandae atque id voluptas? Repudiandae nostrum unde ad perspiciatis omnis optio, non itaque obcaecati reiciendis magni, quisquam vero!</p>
                </div>
            </section>
        </main>
     );
}
 
export default Homepage;