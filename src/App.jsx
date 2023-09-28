import { useState } from "react"
import Courses from "./components/Courses/Courses"
import SelectedCourses from "./components/SelectedCourses/SelectedCourses"
import { Slide, ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css' 
import "./App.css";


function App() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const [credit, setCredit] = useState(20);

  const handleCredit = newCredit => {
    setCredit(credit - newCredit);
  }

  const handleSelect = course => {
    if (course.credit <= credit) {
      setSelectedCourses([...selectedCourses, course]);
      handleCredit(course.credit)
    }
    else{
      toast("You can't select more than 20 credits!", {theme: "dark", hideProgressBar: true, autoClose: 1200,
  })
    }
  }

  return (
    <div className="py-5 md:py-7 lg:py-12 px-7 md:px-12 lg:px-16 bg-[#F3F3F3]">
      <ToastContainer transition={Slide} position="bottom-left"></ToastContainer>
      <h1 className="text-[32px] font-bold text-[#1C1B1B] text-center mb-8">Course Registration</h1>

      <div className="flex flex-col md:flex-col-reverse lg:flex-row gap-6">
        <Courses
          handleSelect={handleSelect}
          handleCredit={handleCredit}
        ></Courses>
        <div className="lg:w-1/4">
          <SelectedCourses
            selectedCourses={selectedCourses}
            credit={credit}
          ></SelectedCourses>
        </div>
      </div>
    </div>
  )
}

export default App
