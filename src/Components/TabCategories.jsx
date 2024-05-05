import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { JobCard } from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

export const TabCategories = () => {
  const [jobData, setJobData] = useState([])
    
  useEffect(()=>{
       axios.get('http://localhost:5000/jobs')
       .then(data =>{
        console.log(data.data)
        setJobData(data?.data)
       })
  },[])

  return (
    <div className="container py-10 px-6 mx-auto">
         <h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl '>
          Browse Jobs By Categories
        </h1>

        <p className='max-w-2xl mx-auto my-6 text-center text-gray-500 '>
          Three categories available for the time being. They are Web
          Development, Graphics Design and Digital Marketing. Browse them by
          clicking on the tabs below.
        </p>
      <Tabs>
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Design</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>
        </div>
        <TabPanel>
          <h2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              jobData.filter(j=> j.category === 'Web Development').map(job => <JobCard key={job?._id}
              job={job}
              ></JobCard>)
            }
          </h2>
        </TabPanel>
        <TabPanel>
        <h2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              jobData.filter(j=> j.category === 'Graphics Design').map(job => <JobCard key={job?._id}
              job={job}
              ></JobCard>)
            }
          </h2>
        </TabPanel>
        <TabPanel>
        <h2 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              jobData.filter(j=> j.category === 'Digital Marketing').map(job => <JobCard key={job?._id}
              job={job}
              ></JobCard>)
            }
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};
