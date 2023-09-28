import PropTypes from 'prop-types'

const SelectedCourses = ({ selectedCourses, credit, totalPrice }) => {
    return (
        <div className='bg-white p-6 rounded-xl'>
            <h2 className='text-lg font-bold text-[#2F80ED]'>Credit Hour Remaining {credit} hr</h2>
            <hr className='my-4' />
            <h2 className='text-[#1C1B1B] text-xl font-bold'>Course Name</h2>
            <div className='my-6'>
                {
                    selectedCourses.map((course, idx) => <p
                        key={idx}
                        className='text-[#1c1b1b99]'
                    >{idx + 1} {course.course_title}</p>)
                }
            </div>
            <hr />
            <p className='my-4 text-[#1c1b1bcc] font-medium'>Total Credit Hour : {20 - credit}</p>
            <hr />
            <p className='mt-4 text-[#1c1b1bcc] font-medium'>Total Price : {totalPrice.toFixed(2)} USD</p>
        </div>
    );
};

SelectedCourses.propTypes = {
    selectedCourses: PropTypes.array,
    credit: PropTypes.number,
    totalPrice: PropTypes.number,
}

export default SelectedCourses;