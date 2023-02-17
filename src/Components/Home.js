import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div id="home">
      <h1>Welcome to Travel the W0rld!</h1>
      <p>This web application is developed by and desiged for the travel enthusiasts around the globe. Since a young age I have traveled from Rome to NY about every summer to visit my family in the States. I got accustomed to plane rides from an early age. In the more recent years, as I realize there is so much of the world yet to see, I have been trying to embark on adventures (brief or longish) in an effort to learn more about the places others call home.</p>
      <p>Dear user, start by creating an account <Link to="sign-up">here</Link>. Once you sign-in you will be taken to an interface with a dynamic map that will update as you submit more trips, and keep track of your adventures for you. Have fun exploring the functionality. More will be added! I hope this app may bring joy to some of you out there.</p>
      <h2>About Dan</h2>
      <img src="https://drive.google.com/uc?export=view&id=1hj-wFsPg4XOFUK4F-_QvMCzeR1M_-BsF" alt="giant's causeway" height="300px"/>
      <p>Hello, I am Dan. I am currently studying full stack web development at the Pursuit fellowship. Learning how to set up a database, a server, an api, and then build the front-end in React has been incredibly stimulating and exciting! Since a young age I have gravitated towards computers and technology. My first exposure to coding was thanks to FreeCodeCamp during June 2020, that is when I had started learning Python. After getting the certificate of completion I returned working and set aside my interest in computer science. I am so happy that our paths have met again. I am in this field to stay.</p>
      <p>When I am not coding, I enjoy playing soccer, cooking (especially making pasta from scratch), listening to electronic music, reading, and traveling of course. Lets' connect!
      </p>
      <div id="bio-buttons">
      
      </div>
    </div>
  );
}
