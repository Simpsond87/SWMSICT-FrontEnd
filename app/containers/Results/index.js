/*
 *
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
       showSignUp: false,
       searchData:[],
       type: 'name',
       order: 'asc',
       physLoc: 'no',
       specOff: 'no'
     }
   }
   componentWillMount() {
     if(sessionStorage.getItem('userID') != 0) {
       this.getSearchData();
     }
     else {
       this.getProductsFromSession();
     }
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

     data.append('userID', sessionStorage.getItem('userID'));

     fetch ('http://localhost:8000/api/collectSearchData',{
       method: 'POST',
       body: data
     })
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       console.log('searchData');
       console.log(json.searchData);
       _this.setState ({
         searchData:json.searchData
       }, function() {
         _this.getProducts(json.searchData, this.state.type, this.state.order, this.state.physLoc, this.state.specOff);
       })
     }.bind(this))
   }

   getProductsFromSession = (type = 'name', order = 'asc', physLoc='no', specOff = 'no') => {
     console.log('sessionLoc: ' + physLoc + ' sessionSpec: ' + specOff);
     let _this = this;
     let data = new FormData();

     data.append('userID', '0');
     data.append('minInvestment', sessionStorage.getItem('minInvestment'));
     data.append('riskLevel', sessionStorage.getItem('riskLevel'));
     data.append('isStock', sessionStorage.getItem('isStock'));
     data.append('isBond', sessionStorage.getItem('isBond'));
     data.append('isMutualFund', sessionStorage.getItem('isMutualFund'));
     data.append('isETF', sessionStorage.getItem('isETF'));
     data.append('isIndexFund', sessionStorage.getItem('isIndexFund'));
     data.append('isRetirement', sessionStorage.getItem('isRetirement'));

     this.setState({
       displayOptions: []
     });

     fetch ('http://localhost:8000/api/getProducts/'+type+'/'+order+'/'+physLoc+'/'+specOff,{
       method: 'POST',
       body: data
     })
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       console.log("TESTDATA:" + JSON.stringify(json));
       /*console.log('resultProducts');
       console.log(json.resultProducts);
       console.log('messageNum');
       console.log(json.messageNum);*/
       _this.parseResults(data);
       _this.setState({
         searchData:json.searchData,
         getProducts:json.resultProducts,
         message:json.message,
         messageNum:json.messageNum
       })
       _this.forceUpdate();
     }.bind(this))

   }

   getProducts = (searchData, type = 'name', order = 'asc', physLoc = 'no', specOff = 'no') => {
     let _this = this;
     let data = new FormData();

     if(sessionStorage.getItem('userID') != 0){
     searchData = searchData[0];
     }

      data.append('userID', sessionStorage.getItem('userID'));
      data.append('minInvestment', searchData.minInvestment);
      data.append('riskLevel', searchData.riskLevel);
      data.append('isStock', searchData.isStock);
      data.append('isBond', searchData.isBond);
      data.append('isMutualFund', searchData.isMutualFund);
      data.append('isETF', searchData.isETF);
      data.append('isIndexFund', searchData.isIndexFund);
      data.append('isRetirement', searchData.isRetirement);


      /*console.log('order: ' + order);
      console.log('type: ' +  type);
      console.log('phyLoc: ' + physLoc);
      console.log('specOff: ' + specOff);
*/

     this.setState({
       displayOptions: []
     });

     fetch ('http://localhost:8000/api/getProducts/'+type+'/'+order+'/'+physLoc+'/'+specOff,{
       method: 'POST',
       body: data
     })
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       /*console.log('resultProducts');
       console.log(json.resultProducts);
       console.log('searchCriteria');
       console.log(json.searchCriteria);*/
       _this.parseResults(json.searchCriteria);
       _this.setState({
         getProducts:json.resultProducts,
         message:json.message,
         messageNum:json.messageNum
       })
       _this.forceUpdate();
     }.bind(this))
   }

   parseResults = (data) => {
console.log('parse');
     let displayOptions = this.state.displayOptions;
     let minInvestment = '$' + data[1];
     let riskLevel = '';

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
         console.log(this.state.getProducts);
         return (
           <div>
               {this.state.message}<br/><br/>
               {this.state.getProducts.map((product,index)=>(
                 <div className="result" key={index}>
                   <div className="resultLogo">
                     <a href={product.website} target="_blank">
                         <img className="logoImage" src={product.image}  title="Visit Website"/>
                     </a>
                   </div>
                   <div className="imageInfoBuffer">
                   <div className="companyAndProductTitle"></div>
                     <h2>{product.companyName} - {product.name}</h2>
                   <div className="resultProductInfo"></div>
                   <span className="resultProuctFont">Risk Level: {product.riskLevel} | Performance: {product.performance}% | Fees & Expenses: {product.fees}% | Minimum Investment: ${product.minInvestment} | Special Offers: {product.specialOffersAvailable} | Physical Location: {product.physicalLocationAvailable}</span>
                   <hr className="resultBorder"/>
                   <div className="resultDescription"></div>
                     <p>
                       {product.summary}
                     </p>
                   </div>
                 </div>
             ))}
           </div>
         )
       }
       else if (this.state.messageNum == 0) {
         console.log(this.state.messageNum + 'hiya');
         return (
           <div>
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

   filterByFee = (event) => {
    if(event.target.value == 1) {
     this.getProducts(this.state.searchData, 'fees', 'desc', 'no', 'no');
    }
    else {
      this.getProducts(this.state.searchData, 'fees', 'asc', 'no', 'no');
    }
  }
  filterByPerformance = (event) => {
    if(event.target.value == 1) {
     this.getProducts(this.state.searchData, 'performance', 'desc', 'no', 'no');
    }
    else {
      this.getProducts(this.state.searchData, 'performance', 'asc', 'no', 'no');
    }
  }
  filterByLocations = (event) => {
    console.log('physLoc = ' + event.target.value);
    if(event.target.value == 1){
      this.getProducts(this.state.searchData, 'name', 'asc', '1', 'no');
    }
    else {
      this.getProducts(this.state.searchData, 'name', 'asc', '0', 'no');
    }
  }
  filterBySpecOff = (event) => {
    console.log('specOff = ' + event.target.value);
    if(event.target.value == 1){
      console.log('equals One!');
      this.getProducts(this.state.searchData, 'name', 'asc', 'no', '1');
    }
    else {
      this.getProducts(this.state.searchData, 'name', 'asc', 'no', '0');
    }
  }
  render() {
    return (
      <div className="container resultsBackground">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <header>
          <Navbar/>
        </header>

        <WouldYouLike closeWouldYouLike={this.closeWouldYouLike}        toggleSignUp={this.toggleSignUp} openWouldYouLike={this.state.showWouldYouLike}/>
        <SignupBox toggleSignUp={this.toggleSignUp} openSignUp={this.state.showSignUp}/>

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

          <section>
            <div className="resultsFilters">
              <div className="feesFilter">
              <img src={require("../../photos/results-fees.svg")}/>
                <select onChange={this.filterByFee} defaultValue="">
                  <option value="">Fees & Expenses</option>
                  <option value="1">High to Low</option>
                  <option value="2">Low to High</option>
                </select>
              </div>
              <div className="performanceFilter">
              <img src={require("../../photos/results-performance.svg")}/>
                <select onChange={this.filterByPerformance} defaultValue="">
                  <option value="">Performance</option>
                    <option value="1">High to Low</option>
                    <option value="2">Low to High</option>
                </select>
              </div>
              <div className="specialOffersFilter">
              <img src={require("../../photos/results-specials.svg")}/>
                <select onChange={this.filterBySpecOff} defaultValue="">
                  <option value="">Special Offers</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div className="locationFilter">
              <img src={require("../../photos/results-location.svg")}/>
                <select onChange={this.filterByLocations} defaultValue="">
                  <option value="">Physical Location</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
            </div>
          </section>

        <section>
          <div className="resultsBox">
            <hr className="filterTitleDivider"/>

            {this.renderResults()}

          </div>
        </section>

      </main>

    </div>
    );
  }

}

Results.contextTypes = {
  router: React.PropTypes.object
};
