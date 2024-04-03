import Header from "./Header";
import UserClass from "./UserClass";
import UserC from "./UserC";
const About=()=>{
  return (
  <div>
   
    <div className="about">
      <h1>it is about page</h1>
      <UserC name={"anshu"} id={823}/>
      <UserClass name={"aman"} id={78}/>
    </div>
  </div>);
}
export default About;