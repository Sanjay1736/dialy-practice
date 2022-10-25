// import logo from './logo.svg';
// import Content1 from './Components/Content1';
import './App.css';
import Contest2  from './Components/content2';
import Home from './Components/home';
function App() {
  // const title = "welcome to react"
  // const likes = 50;
  // const link = 'https://my.newtonschool.co/course/3tjbkobzb2x0/assignment/faphfler2qhn';

  return (
    <div className='app'>
      <Contest2 />
      <div className='content'>
        <h1> <Home/></h1>
        {/* <h1>{title}</h1> */}
        {/* <p>Liked {likes}Times</p>
        <p>The Array Values are {[1,2,3,4,5,6] } .</p>
        <p>{Math.random() * 100}</p>
        <a href={link}>newtonschool</a> */}
      
       
      </div>
      
    </div>
  )
}

export default App;
