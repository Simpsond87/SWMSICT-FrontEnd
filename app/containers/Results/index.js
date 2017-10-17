/*
 *
<<<<<<< HEAD
 * Results
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import Navbar from 'components/Navbar';
 import SignupBox from 'components/SignupBox';
 import SignInBox from 'components/SignInBox';
 import WouldYouLike from 'components/WouldYouLike';
 import './style.css';
 import './styleM.css';


 export default class Results extends React.PureComponent {
   constructor(){
     super();
     this.state={
       products:[],
       showWouldYouLike: true,
       showSignUp: false
     }
   }
   componentWillMount() {
     this.getSearchData();
   }
   closeWouldYouLike = () => {
     this.setState({
       showWouldYouLike: !this.state.showWouldYouLike
     })
   }
   toggleSignUp = () => {
     this.setState({
       showWouldYouLike: false,
       showSignUp: !this.state.showSignUp
     })
   }
   getSearchData = () => {
     let data = new FormData();
     let _this = this;
     data.append('userID', 1);

     fetch ('http://localhost:8000/api/collectSearchData',{
       method: 'POST',
       body: data
     })
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       console.log(json.searchData);
       _this.setState ({
         searchData:json.searchData
       }, function() {
         _this.getProducts(json.searchData);
       })
     }.bind(this))
   }


   getProducts = (searchData, type = 'name', order = 'desc') => {
     let _this = this;
     let data = new FormData();
     searchData = searchData[0];

      data.append('userID', 1);
      data.append('minInvestment', 10000);
      data.append('riskLevel', 1);
      data.append('isStock', 1);
      data.append('isBond', 1);
      data.append('isMutualFund', 1);
      data.append('isETF', 1);
      data.append('isIndexFund', 1);
      data.append('isRetirement', 1);

      console.log(searchData);


     this.setState({
       displayOptions: []
     });

     fetch ('http://localhost:8000/api/getProducts?type='+type+'&order='+order,{
       method: 'POST',
       body: data
     })
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       console.log(json.resultProducts);
       console.log(json.searchCriteria);
       _this.parseResults(json.searchCriteria);
       _this.setState({
         getProducts:json.resultProducts,
         message:json.message,
         messageNum:json.messageNum
       })
     }.bind(this))
   }

   parseResults = (data) => {

     let displayOptions = this.state.displayOptions;
     let minInvestment = '$' + data[1];
     let riskLevel = 'Aggressive';

     if (data.length > 0) {
       if (data[0] == 1) {
         riskLevel = 'Aggressive';
       }
       else if (data[0] == 2) {
         riskLevel = 'Moderate';
       }
       else if (data[0] == 3) {
         riskLevel:'Conservative';
       }
     }
     let temp = '';
     for (let x = 2; x < data.length; x++) {

         if (x < data.length - 1) {
             temp = data[x] + ', ';
         }
         else {
           temp = data[x];
         }

         displayOptions.push(temp);

         this.setState({
           displayRiskLevel:riskLevel,
           displayOptions:displayOptions,
           displayMinInvestment:minInvestment
         })
     }
   }
   renderResults = () => {
     if(this.state.messageNum !== ''){

       if(this.state.messageNum == 1){
         let options = <span>{this.state.displayOptions}</span>;
         return (
           <div>
             <div>
             Results: {this.state.getProducts.length}<br/><br/>
               You searched on: Risk level ({this.state.displayRiskLevel}), Minimum investment ({this.state.displayMinInvestment})
             </div>
             <div>
               Products: {options}<br/><br/>
             </div>
               {this.state.message}<br/><br/>
               {this.state.getProducts.map((product,index)=>(
                   <div>
                   <div><h3>{product.name}</h3></div>
                   <div><h4>{product.summary}</h4></div>
                   <span>Risk level: {product.riskLevel} </span><span>Minimum investment: ${product.minInvestment} </span><span>Type of investment: {product.isStock}</span>
                   <div><br/><br/></div>
                   </div>

               ))}
           </div>
         )
       }
       else if (this.state.messageNum == 0) {
         console.log(this.state.messageNum + 'hiya');
         return (
           <div>
           <div>
             You searched on: Risk level ({this.state.displayRiskLevel}), Minimum investment (${this.state.searchCriteria[1]})
           </div>
           <div>
             Products: {this.state.displayOptions}<br/><br/>
           </div>
             {this.state.message}
           </div>
         )
       }
       else {
         return (
           <div></div>
         );
       }
     }
   }
   render() {
     return (
       <div className="container resultsContainer">
         <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

         <header>
           <Navbar/>
         </header>
         <WouldYouLike closeWouldYouLike={this.closeWouldYouLike} toggleSignUp={this.toggleSignUp} openWouldYouLike={this.state.showWouldYouLike}/>
         <SignupBox toggleSignUp={this.toggleSignUp} openSignUp={this.state.showSignUp}/>

         <main>

           <h1 className="openingHeader">Results Page</h1>

           <div className="mobileWrapper">
             <div className="choicesWrapper">
               <h2 className="choicesHeader1">Sort Data By:</h2>
               <h3 className="choicesHeader2"> Fees </h3>
               <h3 className="choicesHeader3"> Performance </h3>
               <div className="choicesWrapperSub1">
                 <h3 className="choicesHeader4">Special Offers</h3>
                 <h3 className="choicesHeader5">Physical Location</h3>
               </div>
             </div>

             <div className="inputWrapper">

               <h3 className="inputHeader1"></h3>

               <h3 className="inputHeader2">
                 <div className="content">
                  <input type="button" onClick={() => this.getProducts(this.state.searchData, 'name', 'desc')} />
                   <input type="checkBox" onChange={this.handlePassword}/>High-Low
                   <input type="checkBox" onChange={this.handlePassword}/>Low-High
                 </div>
               </h3>

               <h3 className="inputHeader3">
                 <div className="content">
                   <input type="checkBox" onChange={this.handlePassword}/>High-Low
                   <input type="checkBox" onChange={this.handlePassword}/>Low-High
                 </div>
               </h3>

               <div className="inputWrapperSub1">
                 <h3 className="inputHeader4">
                   <div className="content">
                     <input type="checkBox" onChange={this.handlePassword}/>Yes
                   </div>
                 </h3>

                 <h3 className="inputHeader5">
                   <div className="content">
                     <input type="checkBox" onChange={this.handlePassword}/>Yes
                   </div>
                 </h3>
               </div>
             </div>
           </div>
           <div className="resultsPage">
             <div className="productSummary">
             {this.renderResults()}
             </div>
           </div>
         </main>
       </div>
     );
   }
 }

 Results.contextTypes = {
   router: React.PropTypes.object
 };
=======
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Navbar from 'components/Navbar';
import SignupBox from 'components/SignupBox';
import SignInBox from 'components/SignInBox';
import WouldYouLike from 'components/WouldYouLike';
import './style.css';
import './styleM.css';


export default class Results extends React.PureComponent {
  render() {
    return (
      <div className="container resultsBackground">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <Navbar/>
        </header>


        <main>
          <section className="resultsBanner">
            <h1>
              Search Results
            </h1>
            <p>
              The following investment products have been curated with your goals in mind.
            </p>
            <p>
              Use the filters below to further refine your results.
            </p>
          </section>

          <div className="resultsFilters">
            <div className="feesFilter">
              <select>
                <option value="" disabled selected>Fees & Expenses</option>
                <option value="1">High to Low</option>
                <option value="2">Low to High</option>
              </select>
            </div>
            <div className="performanceFilter">
              <select>
                <option value="" disabled selected>Performance</option>
                  <option value="1">High to Low</option>
                  <option value="2">Low to High</option>
              </select>
            </div>
            <div className="specialOffersFilter">
              <select>
                <option value="" disabled selected>Special Offers</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="locationFilter" default="SpecialOffers">
              <select>
                <option value="" disabled selected>Physical Location</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          <div className="resultBox">
            <div className="result">
              <div className="companyTitle"></div>
              <div className="productName"></div>
              <div className="resultDescription"></div>
            </div>
          </div>
        </div>
      </main>
    </div>
    );
  }
}

Results.contextTypes = {
  router: React.PropTypes.object
};
>>>>>>> 448590ccfb2f9c2bbd0edad0424a664c5b3b189f
