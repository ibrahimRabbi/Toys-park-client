import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const EditToys = () => {
    const { _id, toyName, price, stock, category, photo, rating, description } = useLoaderData()
    const navigate = useNavigate()


    const updateHandler = (e) => {
        e.preventDefault()
        const toyName = e.target.toyName.value;
        const stock = e.target.stock.value;
        const price = e.target.perPrice.value;
        const category = e.target.category.value;
        const photo = e.target.photoUrl.value;
        const rating = e.target.rating.value;
        const description = e.target.description.value;
        const obj = { toyName, price, photo, category, stock, rating, description }


        fetch(`https://toys-park-server.vercel.app/update/${_id}`, {
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(res => res.json())
            .then(res => {
                if (res.modifiedCount > 0) {
                    Swal.fire(
                        'update Done',
                        'you can change or update again',
                        'success'
                    )
                    navigate('/mytoys')
                }
            })

    }



    return (

        <section>
            <div className='mt-6 w-1/2 mx-auto space-y-4 font-semibold'>
                <h1 className='text-4xl text-center '>edit {toyName}</h1>
                <hr className='border-pink-500' />
            </div>
            <form onSubmit={updateHandler} className=" my-11 color w-1/2 mx-auto mt-10 p-4 space-y-7 rounded-lg">

                <div className="grid grid-cols-2 gap-3 ">
                    <div className="flex flex-col">
                        <label htmlFor="name">
                            toys name
                        </label>
                        <input defaultValue={toyName} className="p-2 rounded-lg" type="text" name="toyName" placeholder="toy name" id="name" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="qyn">
                            stock add
                        </label>
                        <input defaultValue={stock} className="p-2 rounded-lg" name="stock" type="number" placeholder="input number" id="qyn" />
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-3 ">
                    <div className="flex flex-col">
                        <label htmlFor="price">
                            initial starting price
                        </label>
                        <input defaultValue={price} className="p-2 rounded-lg" name="perPrice" type="number" placeholder="per price" id="price" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="category">
                            category
                        </label>
                        <input defaultValue={category} className="p-2 rounded-lg" type="text" name="category" placeholder="category" id="category" />
                    </div>

                </div>
                <div className="grid grid-cols-2 gap-3 ">
                    <div className="flex flex-col">
                        <label htmlFor="price">
                            rating
                        </label>
                        <input defaultValue={rating} className="p-2 rounded-lg" name="rating" type="text" placeholder="rating" id="price" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="photo">
                            Photo URL
                        </label>
                        <input defaultValue={photo} className="p-2 rounded-lg" type="text" name="photoUrl" placeholder=" photo URL" id="photo" />
                    </div>

                </div>

                <div className="flex flex-col">
                    <label htmlFor="photo">
                        description
                    </label>
                    <textarea rows={7} defaultValue={description} className="p-2 rounded-lg" type="text" name="description" placeholder="product description" id="photo" />
                </div>



                <input className=" w-full p-2 rounded-lg font-semibold bg-pink-600 text-slate-50" type="submit" value="save change" />
            </form>
        </section>

    );
};

export default EditToys;