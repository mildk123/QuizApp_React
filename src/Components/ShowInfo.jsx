import React, { Component } from "react";

class ShowInfo extends Component {
  render() {
    const {noOfQues , goBackBtn} = this.props;
  return (
  <div>
      Total Question : {noOfQues}
        <button onClick={goBackBtn} className='btn btn-danger'>Go Back</button>
      </div>
    );
  }
}

export default ShowInfo;
