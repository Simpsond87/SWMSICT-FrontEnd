/*
<<<<<<< HEAD
*
* UserInfo
*
*/
=======
 *
 * UserInfo
 *
 */
>>>>>>> 448590ccfb2f9c2bbd0edad0424a664c5b3b189f

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
<<<<<<< HEAD

import UserInfoContribution from 'components/UserInfoContribution';
import UserInfoRisk from 'components/UserInfoRisk';
import UserInfoProducts from 'components/UserInfoProducts';

=======
import UserInfoContribution from 'components/UserInfoContribution';
import UserInfoRisk from 'components/UserInfoRisk';
import UserInfoProducts from 'components/UserInfoProducts';
>>>>>>> 448590ccfb2f9c2bbd0edad0424a664c5b3b189f
import './style.css';
import './styleM.css';

export default class UserInfo extends React.PureComponent {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      userID: "",
      riskLevel: "",
      minInvestment: 0,
      isStock: 0,
      isBond: 0,
      isMutualFund: 0,
      isETF: 0,
      isIndexFund: 0,
      isRetirement: 0,
      getProducts: [],
      success: "",
      messageNum: "",
      options: "",
      searchCriteria:[],
      displayRiskLevel: "",
      displayMinInvestment: "",
      displayOptions: [],
      riskLevel: "",
      showUserInfoContribution: true,
      showUserInfoRisk: false,
      showUserInfoProducts: false,
      searchStuff: []
    }
  }


  handleMinInvestment = (event) => {
    this.setState ({
      minInvestment:document.getElementById('dollar').value
    })
  }

  handleRiskLevel = (event) => {
    this.setState ({
      riskLevel:event.target.value
    })
  }
  handleStocks = (event) => {
    if (this.state.isStock == 0) {
      this.setState ({
        isStock: 1
      })
    }
    else {
      this.setState({
        isStock: 0
      })
    }
  }

  handleBonds = (event) => {
    if (this.state.isBond == 0) {
      this.setState ({
        isBond: 1
      })
    }
    else {
      this.setState({
        isBond: 0
      })
    }
  }

  handleMutualFunds = (event) => {
    if (this.state.isMutualFund == 0) {
      this.setState ({
        isMutualFund: 1
      })
    }
    else {
      this.setState({
        isMutualFund: 0
      })
    }
  }

  handleExTradeFunds = (event) => {
    if (this.state.isETF == 0) {
      this.setState ({
        isETF: 1
      })
    }
    else {
      this.setState({
        isETF: 0
      })
    }
  }

  handleIndexFunds = (event) => {
    if (this.state.isIndexFund == 0) {
      this.setState ({
        isIndexFund: 1
      })
    }
    else {
      this.setState({
        isIndexFund: 0
      })
    }
  }

  handleRetirement = (event) => {
    if (this.state.isRetirement == 0) {
      this.setState ({
        isRetirement: 1
      })
    }
    else {
      this.setState({
        isRetirement: 0
      })
    }
  }

  sendFormData = () => {
    let data = new FormData();

    data.append('userID', 1);
    data.append('riskLevel', this.state.riskLevel);
    data.append('minInvestment', this.state.minInvestment);
    data.append('isStock', this.state.isStock);
    data.append('isBond', this.state.isBond);
    data.append('isMutualFund', this.state.isMutualFund);
    data.append('isETF', this.state.isETF);
    data.append('isIndexFund', this.state.isIndexFund);
    data.append('isRetirement', this.state.isRetirement);

    fetch ('http://localhost:8000/api/saveSearchData',{
      method: 'POST',
      body: data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      console.log(json.success);
    })
  }




=======
      showUserInfoContribution: true,
      showUserInfoRisk: false,
      showUserInfoProducts: false
    }
  }
  handleRisk = (event) => {

  }

>>>>>>> 448590ccfb2f9c2bbd0edad0424a664c5b3b189f
  handleContinue1 = () => {
    this.setState({
      showUserInfoContribution: false,
      showUserInfoRisk: true
    })
<<<<<<< HEAD
    this.handleMinInvestment();
=======
>>>>>>> 448590ccfb2f9c2bbd0edad0424a664c5b3b189f
  }

  handleContinue2 = () => {
    this.setState({
      showUserInfoRisk: false,
      showUserInfoProducts: true
    })
  }
  handleContinue3 = () => {
<<<<<<< HEAD
    this.sendFormData();
=======
>>>>>>> 448590ccfb2f9c2bbd0edad0424a664c5b3b189f
    this.context.router.push("/Results");
  }

  renderUserInfoContribution = () => {
    if(this.state.showUserInfoContribution === true)
    {
      return (
        <div>
          <UserInfoContribution handleContinue1={this.handleContinue1}/>
        </div>
      )
    }
  }
  renderUserInfoRisk = () => {
    if(this.state.showUserInfoRisk === true)
    {
      return (
        <div>
<<<<<<< HEAD
          <UserInfoRisk handleContinue2={this.handleContinue2} handleRiskLevel={this.handleRiskLevel}/>
=======
          <UserInfoRisk handleContinue2={this.handleContinue2}/>
>>>>>>> 448590ccfb2f9c2bbd0edad0424a664c5b3b189f
        </div>
      )
    }
  }
  renderUserInfoProducts = () => {
    if(this.state.showUserInfoProducts === true)
    {
      return (
        <div>
<<<<<<< HEAD
          <UserInfoProducts handleContinue3={this.handleContinue3} handleStocks={this.handleStocks} handleBonds={this.handleBonds} handleMutualFunds={this.handleMutualFunds} handleExTradeFunds={this.handleExTradeFunds} handleIndexFunds={this.handleIndexFunds} handleRetirement={this.handleRetirement}/>
=======
          <UserInfoProducts handleContinue3={this.handleContinue3}/>
>>>>>>> 448590ccfb2f9c2bbd0edad0424a664c5b3b189f
        </div>
      )
    }
  }
<<<<<<< HEAD

=======
>>>>>>> 448590ccfb2f9c2bbd0edad0424a664c5b3b189f
  render() {
    return (
      <div className="container userInfoBackground">
        <Helmet title="UserInfo" meta={[ { name: 'description', content: 'Description of UserInfo' }]}/>
<<<<<<< HEAD
=======

>>>>>>> 448590ccfb2f9c2bbd0edad0424a664c5b3b189f
        <header>
          <Navbar/>
        </header>

<<<<<<< HEAD

        <main>here: {this.state.minInvestment} / {this.state.riskLevel} <br/>
        Stocks:{this.state.isStock}<br/>
        Bonds:{this.state.isBond}<br/>
        MF:{this.state.isMutualFund}<br/>
        ETF:{this.state.isETF}<br/>
        Retirement:{this.state.isRetirement}<br/>
        Index Funds:{this.state.isIndexFund}<br/>


          {this.renderUserInfoContribution()}
          {this.renderUserInfoRisk()}
          {this.renderUserInfoProducts()}

        </main>
        <footer>
          <ul className="progressBar">
            <li className="active">CONTRIBUTION</li>
=======
        <main>
          {this.renderUserInfoContribution()}
          {this.renderUserInfoRisk()}
          {this.renderUserInfoProducts()}
        </main>
        <footer>
          <ul className="progressBar">
            <li class="active">CONTRIBUTION</li>
>>>>>>> 448590ccfb2f9c2bbd0edad0424a664c5b3b189f
            <li>RISK TOLERANCE</li>
            <li>PRODUCTS</li>
          </ul><br/>
        </footer>


      </div>
    );
  }
}

UserInfo.contextTypes = {
  router: React.PropTypes.object
};
