import React from "react";
import '../components/BasicInfo.css';


export default class BasicInfo extends React.Component{
  constructor(props){
    super(props);
}
render(){
        return(
           <div>
            <p className="name">{this.props.person.name}</p>
            <p>{this.props.person.number}</p>
            <p>{this.props.person.dateOfBirth}</p>
            <p>{this.props.person.favColor}</p>
        </div> 
        )
    }
}