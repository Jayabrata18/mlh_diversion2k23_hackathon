import React, {useState} from "react";
import '../layout.css'




function DoctorCard({name,job,experience}){
     return (
        <div className="card2">
            <div className="upper-container">
                <div className="image-container">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg" alt="" height="100px" width="100px" />
            </div>
        </div>
        <div className="lower-container">
            <h3 className="srv">{name}</h3>
            <h3 className="srv1">{job}</h3>
            <h4>{experience}</h4>
           
            <button navigate={"/book-appointment"}>Book your appointment</button>
        </div>
        </div> 
     )  
}
export default DoctorCard;