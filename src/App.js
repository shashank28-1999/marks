import React from 'react';
import './App.css';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state={ass:0,mtt:0,mpt:0,status:'',score:''}
    }
    calculate=(event)=>{
        
        var a=this.state.ass;
        var b=this.state.mtt;
        var c=this.state.mpt;
         var a1=(15*a)/100;
         var b1=(15*b)/64;
         var c1=(70*c)/70;
         var tot=a1+b1+c1;
         if(tot<50){
             this.setState({score:'0',status:'Fail'});
         }
         else if(tot>49 && tot<60)
         {
            this.setState({score:'1',status:'Fail'});
         }
         else if(tot>59 && tot<70)
         {
            this.setState({score:'2',status:'Pass'});
         }
         else if(tot>69 && tot<80)
         {
            this.setState({score:'3',status:'Pass'});
         }
         else if(tot>79 && tot<90)
         {
            this.setState({score:'4',status:'Pass'});
         }
          else
          {
            this.setState({score:'5',status:'Pass'});
          }
          event.preventDefault();
    
    }
    render(){
        return (
              <div>
                <h2 >Enter Your Marks</h2>
                  <form onSubmit={this.calculate} className='ui form' class="center">
                      <div className='field'>
                      <lable>Enter Assignment Marks : </lable>
                      <input type='number' placeholder='Assignment marks' min='0' max='100' onChange={(e)=>{this.setState({ass:e.target.value})}}></input><br/>
                      </div>
                      <div className='field'>
                      <lable>Enter MTT Marks : </lable>
                      <input type='number' placeholder='MTT Marks' min='0' max='64' onChange={(e)=>{this.setState({mtt:e.target.value})}}></input><br/>
                      </div>
                      <div className='field'>
                      <lable>Enter MPT Marks : </lable>
                      <input type='number' placeholder='MPT Marks'  min='0' max='70' onChange={(e)=>{this.setState({mpt:e.target.value})}}></input><br/>
                      </div>
                      <button className="ui button" type='submit'>submit</button>
                  </form>
        <h2 >Your Score : {this.state.score}</h2>
        <h2>Your Status : {this.state.status}</h2>
              </div>
        );

    }
}
export default App;