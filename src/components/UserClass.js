import React from "react";
class UserClass extends React.Component {
  constructor(props){
    super(props);
    this.state={
      count:0,
    }
    
  }
  

  render() {
    const{name,id,loc}=this.props;
    return (
      <div className="user">
        <h1>{name}</h1>
        <h2>{id}</h2>
        <h3>count: {this.state.count}</h3>
        <button onClick={()=>{
          this.setState({
            count:this.state.count+1,
          })
        }}>count</button>
      </div>
    );
  }
}
export default UserClass;
