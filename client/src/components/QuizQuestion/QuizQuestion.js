import React from "react";
import { MDBCard, MDBCardTitle, MDBCardBody, MDBCol, MDBRow } from 'mdbreact';
// import "./quiz.css"

function Questions(props) {
    console.log('quiz props', props)

        if(!props.card) {
            return(
                <MDBCard style={{ width: "80%" }}>
                <MDBCardBody>
                    <MDBCardTitle>
                        <p>Click to start.</p>
                    </MDBCardTitle>
                   
                </MDBCardBody>
            </MDBCard>
            )
        }
   
        return (
        <>
                <MDBCard className="card-body" id={props.card.correctAns} >
                    <MDBCardTitle>{props.card.question}</MDBCardTitle>
                    <MDBCardBody>
                        <div className="form-check py-2">
                            <input 
                            type="radio" className="form-check-input" 
                            value="ans1" 
                            name={props.card._id}
                            onChange={props.handleButtonChange}/>
                            <label className="form-check-label">{props.card.ans1}</label>
                        </div>

                        <div className="form-check py-2">
                            <input 
                            type="radio" className="form-check-input" 
                            value="ans2" 
                            name={props.card._id}
                            onChange={props.handleButtonChange}/>
                            <label className="form-check-label">{props.card.ans2}</label>
                        </div>

                        <div className="form-check py-2">
                            <input 
                            type="radio" 
                            className="form-check-input" 
                            value="ans3" 
                            name={props.card._id}
                            onChange={props.handleButtonChange}/>
                            <label className="form-check-label">{props.card.ans3}</label>
                        </div>
                        <div className="form-check py-2">
                            <input 
                            type="radio" 
                            className="form-check-input" 
                            value="ans4" 
                            name={props.card._id}
                            onChange={props.handleButtonChange}/>
                            <label className="form-check-label">{props.card.ans4}</label>
                        </div>
                        <div className="form-check py-2">
                            <input 
                            type="radio" 
                            className="form-check-input" 
                            value="ans5" 
                            name={props.card._id}
                            onChange={props.handleButtonChange}/>
                            <label className="form-check-label">{props.card.ans5}</label>
                        </div>
                    </MDBCardBody>
                </MDBCard>
        <MDBRow>
            <MDBCol size="5"></MDBCol>
            <MDBCol size="3">
                <button className="quizBtn btn" onClick={()=>props.nextSlide()}>Next</button>
            </MDBCol>
        </MDBRow>
        </>
    )
    
}

export default Questions;