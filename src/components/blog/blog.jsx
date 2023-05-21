import React,{useEffect} from 'react';

const Blog = () => {

    useEffect(() => {
        document.title = "toys-park || blog"
    }, [])
    return (
        <div className='my-20 m-auto w-[70%]'>
            <div className='mt-4 bg-slate-300 p-5 rounded-md space-y-5'>
                <div>
                    <h1 className='text-2xl font-semibold' >what is access token and refresh token</h1>
                    <p className='pl-3 mt-2'>
                        The refresh token is used to generate a new access token. Typically, if the access token has an expiration date, once it expires, the user would have to authenticate again to obtain an access token. 
                        <br />
                        It contains all the information the server needs to know if the user / device can access the resource you are requesting or not. They are usually expired tokens with a short validity period
                    </p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold' > how do they work  and where should we store them on the client side ?</h1>
                    <p className='pl-3 mt-2'> 
                        bescilley resfresh token is a so sensetive data so ..its as soon as posiable must have a insure strong secure...the two place of store this refresh token
                        <br />
                        
                        1|| local storage
                        <br />
                        2|| cookies
                    </p>
               </div>
            </div>
            <div className='mt-4 bg-slate-300 p-5 rounded-md'>
                <h1 className='text-2xl font-semibold'>compare SQL and NoSQL Database</h1>
                <p className='pl-3 mt-2'> 
                    the sql is a relational database == NoSQL non-relational database
                    <br />
                    sql database manage and record by row and table wise == NoSQL database bata manage by class base database

                    <br />
                    SQL vertically scaleable === NoSQL horizentally scaleable
                </p>
            </div>

            <div className='mt-4 bg-slate-300 p-5 rounded-md'>
                <h1 className='text-2xl font-semibold'>what is expressJS and what is nest js ?</h1>
                <p className='pl-3 mt-2'> 
                    <br />
                    the express and nest both is a node js beck end frameWork
                </p>
            </div>
            <div className='mt-4 bg-slate-300 p-5 rounded-md'>
                <h1 className='text-2xl font-semibold'>what is mongoDB aggregate and how does it work</h1>
                <p className='pl-3 mt-2'> is a way of processing a large number of documents in a collection by means of passing them through different stages.
                    <br />
                    The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline
                </p>
            </div>
        </div>
    );
};

export default Blog;