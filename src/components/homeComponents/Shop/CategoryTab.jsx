import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 import Holder from './Holder'
const CategoryTab = () => {

     

     

     
    return (
        <section className='w-[90%] mx-auto mt-20'>
            <div data-aos="fade-left" className='mb-10 lg:w-1/2 mx-auto space-y-4 text-center'>
                <h1 className='text-4xl  font-semibold'>Shop Category</h1>
                <p className='text-sm text-gray-400'>Discover the Magic Unicorn Castle: Step into a world of enchantment with the Magic Unicorn Castle toy set. This whimsical playset includes a majestic castle, complete</p>
                <hr className='border-pink-500' />
            </div>

            <div className='font-semibold mt-16'>
                <Tabs>
                    <TabList>
                        <Tab>Marvel</Tab>
                        <Tab>Warner Bros</Tab>
                        <Tab>Universal</Tab>
                        <Tab>Disnap</Tab>
                    </TabList>

                    <TabPanel>
                        <Holder name='marvel'/>
                    </TabPanel>
                    <TabPanel>
                        <Holder name="warner bros" />
                    </TabPanel>
                    <TabPanel>
                        <Holder name="universal"/>
                    </TabPanel>
                    <TabPanel>
                        <Holder name="disnap"/>
                    </TabPanel>
                </Tabs>
            </div>

        </section>
    );
};

export default CategoryTab;