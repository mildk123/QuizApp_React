import React, { Component } from "react";

class ShowQuiz extends Component {
  render() {
    const { quizkName, questionsk } = this.props;
    return (
      <div>
        {quizkName.map((value, index) => {
          return (
            <div key={index + 2}>
              <li key={index} className="offset-1 mb-2 ">
                {value.name}
              <button name={index} onClick={questionsk} className="btn btn-info float-right mr-5">Enter Quiz</button>
              </li>
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default ShowQuiz;
