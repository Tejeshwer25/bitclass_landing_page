import './App.css';

import Header from "./Components/Header/Header";
import CourseCarousel from './Components/courseCarousel/CourseCarousel';
import CourseList from './Components/CourseList/CourseList';

import data from './Data/data.json';
import instructor_data from './Data/instructor_data.json';
import course1 from './Images/course1.png';
import course2 from './Images/course2.png';
import course3 from './Images/course3.png';
import course4 from './Images/course4.png';
import InstructorList from './Components/instructorList/InstructorList';

function App() {
  return (
    <div className="app">
      
      <Header />

      <CourseCarousel screen={{mobile:1, tablet:2, desktop:2, largeDesktop:3}} data={[course1, course2, course3, course4]}/>

      <div className="app__liveClasses">
        <h1>Live - happening now!!!</h1>
        <CourseList screen={{mobile:1, tablet:2, desktop:4, largeDesktop:4}} data={data.filter(item => item.live)} type="live"/>
      </div>

      <div className="app__liveClasses">
        <h1>Upcoming Workshops</h1>
        <CourseList screen={{mobile:1, tablet:2, desktop:4, largeDesktop:4}} data={data.filter(item => item.type==="workshop")} type="workshop"/>
      </div>

      <div className="app__liveClasses">
        <h1>Upcoming Courses</h1>
        <CourseList screen={{mobile:1, tablet:2, desktop:4, largeDesktop:4}} data={data.filter(item => item.type==="course")} type="course"/>
      </div>

      <div className="app__instructorProfiles">
        <h2>Classes Taught by Real Creators</h2>
        <p>Our teachers are icons, expert and industry rockstars excited to share their experience with you...</p>
        <InstructorList screen={{mobile:1, tablet:2, smallDesktop:3, desktop:5, largeDesktop:8}} data={instructor_data}/>
      </div>

    </div>
  );
}

export default App;
