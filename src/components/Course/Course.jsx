import PropTypes from 'prop-types'
import { FiDollarSign } from 'react-icons/fi'
import { IoBookOutline } from 'react-icons/io5'

const Course = ({ course, handleSelect }) => {
    const { course_title, description, cover_picture, price, credit } = course;

    return (
        <div className='bg-white p-4 rounded-xl'>
            <img className='w-full mb-4' src={cover_picture} alt={`cover picture of ${course_title}`} />
            <h1 className='text-lg font-semibold text-[#1C1B1B] mb-3'>{course_title}</h1>
            <p className='text-[#1c1b1b99] text-sm mb-5'>{description}</p>
            <div className='flex gap-4 justify-between text-[#1c1b1b99] font-medium mb-7'>
                <div className='w-1/2 flex items-center justify-evenly'>
                    <FiDollarSign className='text-[#1C1B1B] text-2xl' />
                    <p>Price: {price}</p>
                </div>
                <div className='flex-1 flex items-center justify-evenly'>
                    <IoBookOutline className='text-[#1C1B1B] text-2xl' />
                    <p>Credit: {credit}hr</p>
                </div>
            </div>
            <button onClick={() => {
                handleSelect(course);
            }} className='bg-[#2F80ED] text-white py-2 w-full rounded-lg text-center text-lg font-semibold'>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object,
    handleSelect: PropTypes.func,
}

export default Course;