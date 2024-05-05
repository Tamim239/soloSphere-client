import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const JobCard = ({job}) => {

const {_id, job_title, description, category, deadline, 
  minimum_price, 
  maximum_price} = job;

  return (
    <Link to={`/jobDetails/${_id}`} className='w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all'>
    <div className='flex items-center justify-between'>
      <span className='text-xs font-light text-gray-800 '>
        Deadline: {deadline}
      </span>
      <span className='px-3 py-1 text-[8px] text-blue-800 uppercase bg-blue-200 rounded-full '>
       {category}
      </span>
    </div>

    <div>
      <h1 className='mt-2 text-lg font-semibold text-gray-800 '>
       {job_title}
      </h1>

      <p className='mt-2 text-sm text-gray-600 '>
       {description}
      </p>
      <p className='mt-2 text-sm font-bold text-gray-600 '>
        Range: ${minimum_price} - ${maximum_price}
      </p>
    </div>
  </Link>
  )
}

JobCard.propTypes={
  job: PropTypes.object
}