import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom"
import { UseAuth } from "../Hook/UseAuth"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export const JobDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const {user} = UseAuth()
  const {id, isPending}= useParams()
// console.log(id)
  const {data}= useQuery({
    queryKey: ['jobs', id],
    queryFn: async () =>{
      const {data} = await axios.get(`http://localhost:5000/jobs/${id}`)
      return data
    }
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  const handlePlaceBid = e =>{
    e.preventDefault();
    const form = e.target;
    const email = user?.email;
    const price = form.price.value;
    const comment = form.comment.value;
    const dateInput = startDate;
    const status = 'pending'
    const jobTitle = data?.job_title;
    const jobId = data?._id
    console.log(email, price, comment, dateInput, status, jobTitle, jobId)
  }

console.log(data)

  return (
    <div className='flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto '>
      {/* Job Details */}
      <div className='flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]'>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-light text-gray-800 '>
            Deadline: {data?.deadline}
          </span>
          <span className='px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full '>
            {data?.category}
          </span>
        </div>

        <div>
          <h1 className='mt-2 text-3xl font-semibold text-gray-800 '>
            {data?.job_title}
          </h1>

          <p className='mt-2 text-lg text-gray-600 '>
          {data?.description}
          </p>
          <p className='mt-6 text-sm font-bold text-gray-600 '>
            Buyer Details: 
          </p>
          <div className='flex items-center gap-5'>
            <div>
              <p className='mt-2 text-sm  text-gray-600 '>Name: Jhankar Vai.</p>
              <p className='mt-2 text-sm  text-gray-600 '>
                Email: {data?.buyer_email}
              </p>
            </div>
            <div className='rounded-full object-cover overflow-hidden w-14 h-14'>
              <img src='' alt='' />
            </div>
          </div>
          <p className='mt-6 text-lg font-bold text-gray-600 '>
            Range: ${data?.minimum_price} - ${data?.maximum_price}
          </p>
        </div>
      </div>
      {/* Place A Bid Form */}
      <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Place A Bid
        </h2>

        <form onSubmit={handlePlaceBid}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='price'>
                Price
              </label>
              <input
                id='price'
                type='text'
                name='price'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                value={user?.email}
                name='email'
                disabled
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='comment'>
                Comment
              </label>
              <input
                id='comment'
                name='comment'
                type='text'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Deadline</label>
              <DatePicker className="border py-2 px-2" selected={startDate} onChange={(date) => setStartDate(date)} />
              {/* Date Picker Input Field */}
            </div>
          </div>

          <div className='flex justify-end mt-6'>
            <button
              type='submit'
              className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
              Place Bid
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}
