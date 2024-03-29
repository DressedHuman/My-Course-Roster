import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'

const Courses = ({handleSelect}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(setCourses);
    },[])


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-3/4">
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                    handleSelect={handleSelect}
                ></Course>)
            }
        </div>
    );
};

Courses.propTypes = {
    handleSelect: PropTypes.func,
}

export default Courses;