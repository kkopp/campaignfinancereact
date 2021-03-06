import React from "react";
import API from "../utils/API";
import axios from "axios";
// import _ from "underscore";
import NavBar from "../components/NavBar";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Questions from "../components/QuizQuestion/QuizQuestion";


class TakeQuiz extends React.Component {
    state = {
        cards: [],
        currentCardIndex: 0,
        value: "",
        score: 0,
        message: "Begin Quiz",
        correctAnswers: [],
        allAnswers: [],

}

    componentDidMount() {
        this.loadQuiz();
    }
    
    loadQuiz = () => {
        API.getQuiz()
          .then(res => 
            // console.log('takeQuiz', res.data)
            
            this.setState({ cards: res.data})
          )
          .catch(err => console.log(err));
    };

    
    handleButtonChange = (event) => {
        this.setState({ value: event.target.getAttribute("value")}, () => console.log(this.state.value))
        
    }

    checkAnswer = () => {
        if(this.state.value === this.state[this.state.currentCardIndex].correctAns) {
            let newScore = this.state.score + 1
            this.setState({score: newScore})
        } 
    }

    nextSlide = () => {
        this.checkAnswer()
        const lastIndex = this.state.length - 1;
        const { currentCardIndex } = this.state;
        const shouldEndQuiz = currentCardIndex === lastIndex;

        if(shouldEndQuiz) {
            alert(`Your Score is: ${this.state.score}/${this.state.length}`)
            let resetIndex = 0
            this.setState({currentCardIndex: resetIndex})
            let resetScore = 0
            this.setState({score: resetScore})
        } else {
            let index = currentCardIndex + 1
            this.setState({ currentCardIndex: index });
        }

    }

    render() {
       
        return (
        <MDBContainer fluid>
            <NavBar>
                <h1 className="display-4">Campaign Finance Quiz</h1>
                <hr className="my-2" />
            </NavBar>
            <MDBRow>
                
                <MDBCol md="9">
                {this.state.length ? (
                    <Questions 
                    card={this.state[this.state.currentCardIndex]}
                    handleButtonChange={this.handleButtonChange}
                    nextSlide={this.nextSlide}
                    />
                  ) : (
                    <Questions />
                  
                )}
                    
                </MDBCol>
            
            </MDBRow>
        </MDBContainer>
        );
    }
}


export default TakeQuiz;