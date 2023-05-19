import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EditToys = () => {
    const  {toyName,price,stock,category,photo,rating,description} = useLoaderData()
    console.log(toyName)
    return (
        <form   className=" my-11 color w-1/2 mx-auto mt-10 p-4 space-y-7 rounded-lg" action="">
             
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
    );
};

export default EditToys;