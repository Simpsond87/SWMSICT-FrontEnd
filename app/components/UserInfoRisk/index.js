/**
*
* UserInfoRisk
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class UserInfoRisk extends React.PureComponent {
  render() {
    return (
      <div className="riskContainer">
        <div className="userInfoRisk">
          <h1>
            <div>What is your investment</div>
            <div>risk tolerance?</div>
          </h1>

<<<<<<< HEAD

          <div className="riskChoice">
              <label className="riskRadio">
                <input type="radio" name="risk" value="3" onClick={this.props.handleRiskLevel} hidden/>Conservative</label>
              <label className="riskRadio">
                <input type="radio" name="risk" value="2" onClick={this.props.handleRiskLevel} hidden/>Moderate</label>
              <label className="riskRadio">
                <input type="radio" name="risk" value="1" onClick={this.props.handleRiskLevel} hidden/>Aggressive</label>
=======
          <div className="riskChoice">
              <label className="riskRadio">
                <input type="radio" name="risk" value="3" hidden/>Conservative</label>
              <label className="riskRadio">
                <input type="radio" name="risk" value="2" hidden/>Moderate</label>
              <label className="riskRadio">
                <input type="radio" name="risk" value="1" hidden/>Aggressive</label>
>>>>>>> 448590ccfb2f9c2bbd0edad0424a664c5b3b189f
          </div>
          <input type="button" value="Continue" onClick={this.props.handleContinue2}/>
        </div>
      </div>
    );
  }
}

UserInfoRisk.contextTypes = {
  router: React.PropTypes.object
};
