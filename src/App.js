import React, { Component } from 'react';
import ShowQuiz from './Components/ShowQuiz'
import ShowInfo from './Components/ShowInfo'

class App extends Component {
  constructor(){
    super();
    this.state = {
      quizList:[
        {name:'HTML', Questions:'20'},
        {name:'CSS', Questions:'35'},
        {name:'JAVASCRIPT', Questions:'15'},
        {name:'React', Questions:'22'},
        {name:'Python', Questions:'18'},
      ],quiz:{},showQues : false
    }
    this.showInfo = this.showInfo.bind(this);
    this.goBack = this.goBack.bind(this);
    this.showConsole = this.showConsole.bind(this);
  }

  showInfo(event){
    let indexNoClicked = event.target.name;    
    this.setState({
      quiz : this.state.quizList[indexNoClicked].Questions,
      showQues : true
    })
  }
  showConsole(){
    // console.log(this.state.quiz, this.state.showQues);
  }

  goBack(){
    this.setState({
      showQues : false,
      quiz : {}
    })
    // console.log(this.state.quiz, this.state.showQues);    
}

  render(){
    const {quizList, showQues, quiz} = this.state;

    return(
      <div>
        <header><h2 onClick={this.showConsole} className="display-4 offset-5">QuizApp</h2></header>
        {!showQues && <ShowQuiz quizkName={quizList} questionsk={this.showInfo} />} 
        {showQues && <ShowInfo noOfQues={quiz} goBackBtn={this.goBack}/>} 
      </div>
    )
  }

}

export default App;