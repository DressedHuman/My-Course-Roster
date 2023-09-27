import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(setCourses);
    },[])


    return (
        <div className="grid grid-cols-3 gap-6">
            {
                courses.map(course => <Course
                    key={course.id}
                    course={course}
                ></Course>)
            }
        </div>
    );
};

export default Courses;