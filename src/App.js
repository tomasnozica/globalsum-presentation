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
          name='Rahmani Nitiyudo'
          country='Indonesia'
          bio='Rahmani is a Final Year Undergraduate Student at The National University of Singapore majoring in Communications & New Media and minoring in Entrepreneurship. Rahmani has a strong interest in entrepreneurship, marketing, women empowerment and wellness. She founded an online retail business called Rebel Wardrobe and a social enterprise called ArtisTree. These experiences sparked her interest in entrepreneurship and her constant quest to learn more about different industries, hence she always interns at start-ups during holidays in either marketing or business development roles.'/>
        <Bio
          name='Soeren Schroeter'
          country='Germany'
          bio='My name is Soeren Schroeter. I am currently a Master Student in Frankfurt, Germany with a focus on Management. In 2019, I graduated my Bachelor studies in Business Information Systems. Since I was a kid, my interests in the technological area have always been advanced. Solving complex problems has never been a problem, the more complex the problem, the better. A challenging environment is, from my point view, the best to grow effectively and quickly. Breaking through barriers everyday is a personal goal of mine. Therefore, I am looking forward to more challenges and an even more competitive environment. '/>
        <Bio
          name='Charmaine Chan'
          country='Hong Kong'
          bio='Hello I am Charmaine from Hong Kong! I am an undergraduate studying Global Business at The Hong Kong University of Science and Technology. I enjoy working in team settings because it is always where I get to learn and grow the most! In my first and second year at university, I was very lucky to have opportunities in gaining different exposure to entrepreneurship - I interned in startup, and I also led a venture capital themed case competition for students in Hong Kong. Both experiences provided me a glimpse into the world of entrepreneurship, consequently cemented my desire to explore it further from more angles. So here I am for this summer! '/>
        <Bio
          name='Abhay Sharma'
          country='United Arab Emirates'
          bio='Hello! I am Abhay Sharma, a student in the United Arab Emirates who is passionate about economics, entrepreneurship and sports! Entrepreneurship is something that excites me and I have been exploring entrepreneurship as a high school senior. I enjoy debating, critical thinking and solving problems around me. I love to question everything and think about philosophical questions that surround us. I am also the co-founder of the International Youth Debates, an organization that helps provide competitive debate opportunities to budding debaters, and the Young Economists Society, a platform that helps aspiring economists explore their passion.'/>
        <Bio
          name='Tomas Nozica'
          country='Argentina'
          bio='Hey everyone! My name is Tomas Nozica. I’m from Buenos Aires, Argentina. I’m studying Computer Engineer at the Catholic University of Argentina. My hobbies includes Golf and spending time outside with my friends or my family. I enjoy (and miss) traveling around the world and in my country. I speak both Spanish and English. Very excited to see what our team will develop!'/>
        
      </div>
    </div>
  );
}

export default App;
