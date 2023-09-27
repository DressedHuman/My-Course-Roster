import { useEffect } from "react";
import { useState } from "react";

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(setCourses);
    },[])


    return (
        <div>
            {
                <h2>Courses : {courses.length}</h2>
            }
        </div>
    );
};

export default Courses;