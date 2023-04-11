import {Link} from 'react-router-dom'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'

const Footer = () => {
    return ( 
        <footer className='bg-orange-400 text-white flex flex-col gap-4 justify-center text-center p-4' id='footer'>
            <h1 className='text-3xl font-extrabold'>JO'SES STORES</h1>
            <div className=' flex flex-col justify-around text-center text-xl gap-3 font-bold'>
                <Link to='/' className='flex flex-col justify-center'>Home</Link>
                <Link to='/equipment'>Hospital Equipment</Link>
                <Link to='/consumables'>Hospital Consumables</Link>
                <Link to='/baby'>Baby Products</Link>
            </div>
            <p className='text-xl text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis labore maiores sunt modi laudantium commodi fugiat adipisci molestiae ad voluptate architecto eveniet, recusandae minima voluptas accusamus, temporibus fugit neque dolorum?</p>
            <span className='text-xl font-bold'>Copyright &copy; 2023. All Rights Reserved</span>
            <div className='flex justify-center gap-10'>
                <img src={facebook} alt="facebook" className='w-8 h-8'/>
                <img src={twitter} alt="twitter" className='w-8 h-8'/>
                <img src={instagram} alt="instagram" className='w-8 h-8'/>
            </div>
        </footer>
     );
}
 
export default Footer;