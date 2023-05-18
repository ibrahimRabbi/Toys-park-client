import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const CategoryTab = () => {
    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>Marvel</Tab>
                    <Tab>avengers</Tab>
                    <Tab>king kong</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;