import React,{Component} from 'react';
import Button from './Button/Button';
import Buttonadd from './Button/Button_add';
import DelButton from './Button/DelButton';
import InputBox from './InputBox/InputBox'
import classes from './Form.css';

class Form extends Component {   
   
    state={
        siteCount: 0,
        siteArr : [],        
        studyID : '',
        siteID : [],
        drugProgram : '',
        therapeuticArea : '',
        ind : ''            

    }

    // updatePurchaseState (ingredients) {
    //     const sum = Object.keys( ingredients )
    //         .map( igKey => {
    //             return ingredients[igKey];
    //         } )                   
    // }

    // addSiteHandler=()=>{
    //     const oldCount = this.state.ingredients[type];
    //     const updatedCount = oldCount + 1;
    //     const updatedIngredients = {
    //         ...this.state.ingredients
    //     };
    //     updatedIngredients[type] = updatedCount;
    //     this.setState( { ingredients: updatedIngredients } );
    //     this.updatePurchaseState(updatedIngredients);
    // }
    addSiteHandler=()=>{
        this.setState({siteCount :this.state.siteCount + 1})
    }

    updateInputStudyHandler(event) {
        this.setState({studyID:event.target.value});   
        console.log(this.state);     
    }

    updateInputSiteHandler(event) {
        this.setState({siteID: [...this.state.siteID, event.target.value]});   
        console.log(this.state);     
    }

    updateInputDrugProgramHandler(event) {
        this.setState({drugProgram:event.target.value});   
        console.log(this.state);        
    }
    
    submitHandler() {
        console.log(this.state);
    }

    deleteSiteHandler=(a)=>{   
        const arr = [...this.state.siteArr];
        console.log(a);
        arr.splice(a,1);
        console.log(arr);
        let c = this.state.siteCount;
        c--;
        this.setState({siteCount: c, siteArr: arr})
    }

    render(){
        let disabledInfo = this.state.siteCount
            disabledInfo = disabledInfo >= 4
        
        let iter = 0;
        let arr =[];
        while(iter < this.state.siteCount) {
            arr.push(iter)
            iter++;
          } 

          const siteMap = arr.map((x, index) =>{              
            return(
                <div key={index}><InputBox plcHolder='Site Name ' />
                <DelButton click={()=>this.deleteSiteHandler(index)} /></div>
            )});
          

    
    return(
            <div className={classes.innerDiv}>
            <div className={classes.Form}>
                <InputBox plcHolder='Study Name' change={this.updateInputStudyHandler.bind(this)}/><br/>
                <InputBox plcHolder='Site Name' change={this.updateInputSiteHandler.bind(this)}/>
                <Buttonadd click={this.addSiteHandler} disabled={disabledInfo}/>
                {siteMap}
                <InputBox plcHolder='Drug Program' change={this.updateInputDrugProgramHandler.bind(this)}/><br/>
                <InputBox plcHolder='Therapeutic Area' /><br/>
                <InputBox plcHolder='Investigational New Drug' /><br/>
                <Button val='Submit' click={this.submitHandler}/>
                <Button val='OK'/>
            </div>    
            </div>
            
        )}
}

export default Form;

