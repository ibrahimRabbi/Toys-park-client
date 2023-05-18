import React from 'react';

const AddToys = () => {
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
        const createObj = {name,email,toyName,price,photo,category,stock,rating,description}
         
        fetch('http://localhost:5000/toys', {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body : JSON.stringify(createObj)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res)
                alert('added done')
             })
        
    }


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
                        <input className="p-2 rounded-lg" type="text" name="username" placeholder="name" id="name" />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="qyn">
                           your email
                        </label>
                        <input className="p-2 rounded-lg" name="email" type="email" placeholder="input number" id="qyn" />
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
                        <input className="p-2 rounded-lg" name="stock" type="number" placeholder="input number" id="qyn" />
                    </div>
                </div>


                <div className="grid grid-cols-2 gap-3 ">
                    <div className="flex flex-col">
                        <label htmlFor="price">
                            initial starting price
                        </label>
                        <input className="p-2 rounded-lg" name="perPrice" type="number" placeholder="per price" id="price" />
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