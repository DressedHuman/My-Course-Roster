import { useState } from "react"
import Courses from "./components/Courses/Courses"
import SelectedCourses from "./components/SelectedCourses/SelectedCourses"

function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSelect = course => {
    setSelectedCourses([...selectedCourses, course])
  }

  return (
    <div className="py-5 md:py-7 lg:py-12 px-7 md:px-12 lg:px-16 bg-[#F3F3F3]">
      <h1 className="text-[32px] font-bold text-[#1C1B1B] text-center">Course Registration</h1>

      <div className="flex flex-col md:flex-col-reverse lg:flex-row gap-6">
        <Courses handleSelect={handleSelect}></Courses>
        <SelectedCourses
          selectedCourses={selectedCourses}
        ></SelectedCourses>
      </div>
    </div>
  )
}

export default App
