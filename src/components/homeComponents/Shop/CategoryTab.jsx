import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Disnap from './Disnap';
import Marvel from './marvel';
import Universal from './Universal';
import WarnerBros from './WarnerBros';

const CategoryTab = () => {

   
    return (
        <section className='w-[90%] mx-auto mt-20'>
            <div className='mb-10 w-1/2 mx-auto space-y-4 text-center'>
                <h1 className='text-4xl  font-semibold'>Shop Category</h1>
                <p className='text-sm text-gray-400'>Discover the Magic Unicorn Castle: Step into a world of enchantment with the Magic Unicorn Castle toy set. This whimsical playset includes a majestic castle, complete</p>
                <hr className='border-pink-500' />
            </div>
           
            <div className='font-semibold mt-16'>
                <Tabs>
                    <TabList  >
                        <Tab>Marvel</Tab>
                        <Tab>Warner Bros</Tab>
                        <Tab>Universal</Tab>
                        <Tab>Disnap</Tab>
                    </TabList>
                   
                    <TabPanel>    
                        <Marvel />
                    </TabPanel>
                    <TabPanel>
                        <WarnerBros />
                    </TabPanel>
                    <TabPanel>
                         <Universal/>
                    </TabPanel>
                    <TabPanel>
                        <Disnap />
                    </TabPanel>
                </Tabs>
            </div>
             
        </section>
    );
};

export default CategoryTab;