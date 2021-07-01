import logo from './logo.svg';
import Bio from './Bio.js';
import './App.css';

function App() {
  return (
    <div>
      <div className='header'>
        <img src={'./logo.jpeg'} className='header-img'></img>
      </div>
      <div className='bios'>
        <Bio
          name='Hassan Jachi'
          country='Lebanon'
          bio='Hello. My name is Hassan Jachi and I’m from Beirut, Lebanon. I am pursuing a Bachelor in Industrial Engineering at the American University of Beirut, and I’m also minoring in Business Marketing.  I am fluent in two languages: Arabic and English. My hobbies include Basketball, Swimming, IT, and Reading. I am proficient in many skills, some of which include Complex Problem Solving, Analytical & Critical Thinking, and Decision-Making. Looking forward to working with an amazing team this summer semester!!'/>
        <Bio
          name='Tomas Nozica'
          country='Argentina'
          bio='Hey everyone! My name is Tomas Nozica. I’m from Buenos Aires, Argentina. I’m studying Computer Engineer at the Catholic University of Argentina. My hobbies includes Golf and spending time outside with my friends or my family. I enjoy (and miss) traveling around the world and in my country. I speak both Spanish and English. Very excited to see what our team will develop!'/>
        <Bio
          name='NameSample'
          country='CountrySample'
          bio='This is a bio'/>
        <Bio
          name='NameSample'
          country='CountrySample'
          bio='This is a bio'/>
        <Bio
          name='NameSample'
          country='CountrySample'
          bio='This is a bio'/>
        <Bio
          name='NameSample'
          country='CountrySample'
          bio='This is a bio'/>
        
      </div>
    </div>
  );
}

export default App;