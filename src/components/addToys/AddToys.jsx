import React, { useContext, useEffect } from 'react';
import { Context } from '../Authentication/AuthContext';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AddToys = () => {

    const { user } = useContext(Context)

    const navigate = useNavigate()


    const submitHandler = (e) => {
        e.preventDefault()

        const name = e.target.username.value;
        const email = e.target.email.value;
        const toyName = e.target.toyName.value;
        const stock = e.target.stock.value;
        const price = e.target.perPrice.value;
        const category = e.target.category.value;
        const photo = e.target.photoUrl.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const createObj = { name, email, toyName, price, photo, category, stock, rating, description }


        fetch('https://toys-park-server.vercel.app/toys', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(createObj)
        })
            .then(res => res.json())
            .then(res => {
                if (res.insertedId) {
                    e.target.reset()
                    navigate('/mytoys')
                    Swal.fire(
                        'Toy added Successfully',
                        '',
                        'success'
                    )
                }

            })
    }


    useEffect(() => {
        document.title = "toys-park || Add-toys"
    }, [])


    return (
        <section>
            <div className='mt-6 w-1/2 mx-auto space-y-4 font-semibold'>
                <h1 className='text-4xl text-center '>Upload product</h1>
                <hr className='border-pink-500' />
            </div>

            <form onSubmit={submitHandler} className=" my-11 color w-1/2 mx-auto mt-10 p-4 space-y-7 rounded-lg" action="">
                <div className="grid grid-cols-2 gap-3 ">
                    <div className="flex flex-col">
                        <label htmlFor="name">
                            your name
                        </label>
                        <input defaultValue={user?.displayName} className="p-2 rounded-lg" type="text" name="username" placeholder="name" id="name" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="qyn">
                            your email
                        </label>
                        <input readOnly defaultValue={user?.email} className="p-2 rounded-lg" name="email" type="email" placeholder="input number" id="qyn" />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3 ">
                    <div className="flex flex-col">
                        <label htmlFor="name">
                            toys name
                        </label>
                        <input className="p-2 rounded-lg" type="text" name="toyName" placeholder="toy name" id="name" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="qyn">
                            stock add
                        </label>
                        <input className="p-2 rounded-lg" name="stock" type="text" placeholder="input number" id="qyn" />
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-3 ">
                    <div className="flex flex-col">
                        <label htmlFor="price">
                            initial starting price
                        </label>
                        <input className="p-2 rounded-lg" name="perPrice" type="price" placeholder="per price" id="price" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="category">
                            category
                        </label>
                        <input className="p-2 rounded-lg" type="text" name="category" placeholder="category" id="category" />
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-3 ">
                    <div className="flex flex-col">
                        <label htmlFor="price">
                            rating
                        </label>
                        <input className="p-2 rounded-lg" name="rating" type="text" placeholder="rating" id="price" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="photo">
                            Photo URL
                        </label>
                        <input className="p-2 rounded-lg" type="text" name="photoUrl" placeholder=" photo URL" id="photo" />
                    </div>

                </div>

                <div className="flex flex-col">
                    <label htmlFor="photo">
                        description
                    </label>
                    <textarea className="p-2 rounded-lg" type="text" name="description" placeholder="product description" id="photo" />
                </div>



                <input className=" w-full p-2 rounded-lg font-semibold bg-pink-600 text-slate-50" type="submit" value="submit" />
            </form>
        </section>

    );
};

export default AddToys;