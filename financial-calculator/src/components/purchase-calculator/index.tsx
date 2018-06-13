import * as React from 'react';
interface Props{

}
interface State{
    shareQuality: number,
    sharePrice: number,
    subTotal: number
}
class PurchaseCalculator extends React.Component<Props, State> {
    constructor(props: State){
        super(props)
        this.state = {
            shareQuality: 0,
            sharePrice: 0,
            subTotal: 0 
        }
    }
    handleOnChange =(e: any) => {
        const {name, value} =e.target
        const{shareQuality, sharePrice, subTotal}= Object.assign({}, this.state, {[name]: value})
        let state: State
        if(name === "shareQuality"){
            state ={
                shareQuality,
                sharePrice: subTotal / sharePrice,
                subTotal: shareQuality * subTotal,
            }
        }else if(name === "sharePrice"){
            state ={
                shareQuality,
                sharePrice,
                subTotal: shareQuality + subTotal,
            }
        }else if(name === "subTotal"){
            state ={
                shareQuality: subTotal / sharePrice,
                sharePrice,
                subTotal,
            }
        }else {
            state =this.state
        }

        this.setState(state)
    }
    render() {
    const{shareQuality, sharePrice, subTotal}=this.state
    
    return (<div>
        <input name="shareQuality" value={shareQuality} onChange={this.handleOnChange}/>
        <input name="sharePrice" value={sharePrice} onChange={this.handleOnChange}/>
        <input name="subTotal" value={subTotal} onChange={this.handleOnChange}/>
    </div> ) 
    }
}

export default PurchaseCalculator