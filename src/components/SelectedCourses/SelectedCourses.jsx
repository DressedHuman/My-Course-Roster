import PropTypes from 'prop-types'

const SelectedCourses = ({selectedCourses}) => {
    return (
        <div className='bg-white p-6 rounded-xl'>
            <h2 className='text-[#1C1B1B] text-xl font-bold'>Course Name</h2>
            <ol className='mx-6 list-disc'>
                {
                    selectedCourses.map((course, idx) => <li key={idx}>{course.course_title}</li>)
                }
            </ol>
        </div>
    );
};

SelectedCourses.propTypes = {
    selectedCourses: PropTypes.array,
}

export default SelectedCourses;