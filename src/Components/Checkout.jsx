import { useEffect, useState } from "react";
import { useContext } from "react";
import { ItemNumberContext } from "./Contexts/ItemNumber";
import { Formik, Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';


const Checkout = () => {
     const [selectedCountry, setSelectedCountry] = useState('')
     const [selectedOption, setSelectedOption] = useState("");
     const [showCard, setShowCard] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            telephone: '',
            address: '',
            country: '',
            zip: '',
            city: '',
            payment: '',
            debitCardNumber: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            // phone: Yup.string().required('Phone number is required'),
            address: Yup.string().required('Address is required'),
            country: Yup.string().required('Country is required'),
            city: Yup.string().required('City is required'),
            payment: Yup.string().required('Payment method is required'),
            telephone: Yup.string().required('Phone number is required'),
            debitCardNumber: Yup.string().matches(/^[0-9]{16}$/, 'Debit card number is not valid'),
            expiryDate: Yup.string().matches(/^(0[1-9]|1[0-2])\/([0-9]{2})$/, 'Expiry date is not valid'),
            cvv: Yup.string().matches(/^[0-9]{3}$/, 'CVV is not valid'),
          }),
          onSubmit: (values, {resetForm}) => {
            resetForm({values: ''})
            setSelectedCountry('')
          }
    })

    const [countries, setCountries] = useState([])

    const {items, setItems, eachItem, setEachItem} = useContext(ItemNumberContext)
    
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
          .then((res) => res.json())
          .then((data) => {
            const countries = data.map((country) => country.name.common);
            setCountries(countries);
          })
          .catch((err) => console.log("error occurred"));
      }, []);

      useEffect(() => {
        if(!window.location.hash){
        window.scrollTo(0, 0);}
      }, []);

    const sortedCountries = countries.sort((a, b) => a.localeCompare(b));
    console.log(sortedCountries);

   

    const countryChange = (e) => {
        setSelectedCountry(e.target.value)
    }
    const totalAmount = items.reduce((total, e) => total + (e.price * e.number), 0);
    const totalAmountInt = Math.round(totalAmount, 10)


    return ( 
        <form action="" onSubmit={formik.handleSubmit}>
        <div className="flex place-items-center justify-center bg-gray-200">
            <div className=" w-10/12 flex flex-col my-8">
                <section className=" m-4 bg-white p-4">
                    
                    <h1 className="text-3xl font-extrabold">CHECKOUT</h1>
                    <div className="my-8">
                        <h2 className="text-xl text-orange-400 font-bold">Billing Details</h2>
                        <div className="flex flex-col my-2 gap-2">
                            <label htmlFor="name" className="font-bold">Name: </label>
                            <input type="text" id="name" className="border-2 text-lg pt-2 pl-1" {...formik.getFieldProps('name')}/>
                            {formik.touched.name && formik.errors.name ? (
                  <div className="text-red-500">{formik.errors.name}</div>
                ) : null}
                            <label htmlFor="email" className="font-bold">Email: </label>
                            <input type="email" id="email" className="border-2 text-lg pt-2 pl-1" {...formik.getFieldProps('email')}/>
                            {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500">{formik.errors.email}</div>
                ) : null}
                            <label htmlFor="phone" className="font-bold">Phone Number: </label>
                            <input type="telephone" id="phone" className="border-2 text-lg pt-2 pl-1" {...formik.getFieldProps('telephone')}/>
                            {formik.touched.telephone && formik.errors.telephone ? (
                  <div className="text-red-500">{formik.errors.telephone}</div>
                ) : null}
                        </div>
                    </div>
                    <div className="my-16">
                        <h2 className="text-xl text-orange-400 font-bold">Shipping Info</h2>
                        <div className="flex flex-col my-2 gap-2">
                            <label htmlFor="address" className="font-bold">Address: </label>
                            <input type="text" id="address" className="border-2 text-lg pt-2 pl-1" {...formik.getFieldProps('address')}/>
                            {formik.touched.address && formik.errors.address ? (
                  <div className="text-red-500">{formik.errors.address}</div>
                ) : null}
                            <label htmlFor="zip" className="font-bold">Zip Code: </label>
                            <input type="number" id="zip" className="border-2 text-lg pt-2 pl-1" {...formik.getFieldProps('zip')}/>
                            <label htmlFor="country" className="font-bold">Country: </label>
                            {/* <input type="text" id="country" className="border-2 text-lg pt-2 pl-1"/> */}
                            <select id="country" value={selectedCountry} onChange={countryChange} className="border-2 text-lg pt-2 pl-1" {...formik.getFieldProps('country')}>
                                <option value="">Select a Country</option>
                                {sortedCountries.map((country) => {
                                   return <option value={country}>{country}</option>
                                })}
                            </select>
                            {formik.touched.country && formik.errors.country ? (
                  <div className="text-red-500">{formik.errors.country}</div>
                ) : null}
                            <label htmlFor="city" className="font-bold">City: </label>
                            <input type="text" id="city" className="border-2 text-lg pt-2 pl-1" {...formik.getFieldProps('city')}/>
                            {formik.touched.city && formik.errors.city ? (
                  <div className="text-red-500">{formik.errors.city}</div>
                ) : null}
                        </div>
                    </div>
                    <div className="my-8">
                        <h2 className="text-xl text-orange-400 font-bold">Payment Details</h2>
                        <div className="flex flex-col my-2 gap-2">
                            <h3 className="text-lg font-bold">Payment Method</h3>
                            <div className="grid grid-cols-2 gap-4 my-4">
                            <label htmlFor="card" className="font-bold">Card: </label>
                            <input type="radio" id="card" name="payment" value='card' checked={formik.values.payment === 'card'} onChange={(e) => {
                            formik.handleChange(e);
                                if (e.target.checked) {
                                setShowCard(true);
                            }
                            }}/>
                            <label htmlFor="cash" className="font-bold">Cash on Delivery: </label>
                            <input type="radio" id="cash" name="payment" value='cash' checked={formik.values.payment === 'cash'} onChange={(e) => {
                            formik.handleChange(e);
                                if (e.target.checked) {
                                setShowCard(false);
                            }
                            }}/>
                            {formik.touched.payment && formik.errors.payment ? (
                                <div className="text-red-500">{formik.errors.payment}</div>
                                ) : null}
                            </div>
                            {showCard && 
                            <div className="flex flex-col gap-4">
                                <label htmlFor="cardNumber" className="font-bold">Card Number:</label>
                                <input type="number" name='debitCardNumber' id="cardNumber" className="border-2 text-lg pt-2 pl-1" required={formik.values.payment === "card"}/>
                                {showCard && formik.touched.debitCardNumber && formik.errors.debitCardNumber ? (
                                <div className="text-red-500">{formik.errors.debitCardNumber}</div>
                                ) : null}

                                <label htmlFor="expiryDate" className="font-bold">Expiry Date:</label>
                                <input type="number" name='expiryDate' id="expiryDate" className="border-2 text-lg pt-2 pl-1" required={formik.values.payment === "card"}/>
                                {showCard && formik.touched.expiryDate && formik.errors.expiryDate ? (
                                <div className="text-red-500">{formik.errors.expiryDate}</div>
                                ) : null}

                                <label htmlFor="cvv" className="font-bold">CVV:</label>
                                <input type="number" name='cvv' id="cvv" className="border-2 text-lg pt-2 pl-1" required={formik.values.payment === "card"}/>
                                {showCard && formik.touched.cvv && formik.errors.cvv ? (
                                <div className="text-red-500">{formik.errors.cvv}</div>
                                ) : null}
                            </div>}
                        </div>
                    </div>
                    
                </section>
                <aside className="my-8 mx-4 bg-white p-4">
                    <h1 className="text-3xl font-extrabold">SUMMARY</h1>
                    <div className="my-4 flex flex-col gap-4">
                        {items.map((e) => {
                            const amount = e.price * e.number
                            return (
                            // <h2>{e.name} {e.number} {e.price}</h2>
                            <div className="flex justify-between">
                                <div className="flex flex-col">
                                    <h2 className="font-bold">{e.name}</h2>
                                    <h2 className=" text-gray-400 font-bold">${e.price}</h2>
                                </div>
                                    <h2 className=" text-gray-400 font-bold">x{e.number}</h2>
                            </div>
                            )
                        })}
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between">
                            <h1 className="text-gray-400 font-bold">TOTAL</h1>
                            <h1 className="font-bold">${totalAmountInt}</h1>
                            </div>
                            <div className="flex justify-between">
                            <h1 className="text-gray-400 font-bold">SHIPPING</h1>
                            <h1 className="font-bold">$50</h1>
                            </div>
                            <div className="flex justify-between">
                            <h1 className="text-gray-400 font-bold">GRAND TOTAL</h1>
                            <h1 className="font-bold">${totalAmountInt + 50}</h1>
                            </div>
                        </div>
                        <button type="submit" className="bg-orange-400 text-lg p-2 font-bold text-white uppercase">Continue and Pay</button>
                    </div>
                </aside>
            </div>
        </div>
        </form>
     );
}
 
export default Checkout;