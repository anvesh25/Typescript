import * as React from 'react';

interface IState
{
    sharePQuality: number,
    sharePrice: number,
    subTotal: number
}
class PurchaseCalculator extends React.Component<{}, IState> 
{
    constructor(props: IState)
    {
        super(props)
        this.state = 
        {
            sharePQuality: 0,
            sharePrice: 0,
            subTotal: 0 
        }
    }
    public handleOnChange =(e: any) => 
    {
        const {name, value} =e.target
        const{sharePQuality, sharePrice, subTotal}= Object.assign({}, this.state, {[name]: value})
        let state: IState
        if(name === "sharePQuality")
        {
            state = 
            {
                sharePQuality,
                sharePrice,
                subTotal: sharePQuality * subTotal,
            }
        }
        else if(name === "sharePrice")
        {
            state =
            {
                sharePQuality,
                sharePrice,
                subTotal: sharePQuality * subTotal,
            }
        }
        else if(name === "subTotal")
        {
            state =
            {
                sharePQuality: subTotal / sharePrice,
                sharePrice,
                subTotal,
            }
        }
        else
        {
            state =this.state
        }

        this.setState(state)
    }
    public render() {
    const{sharePQuality, sharePrice, subTotal}=this.state
    
    return (
        <div>
            <label htmlFor="sharePQuality">share Quality</label>
            <input name="sharePQuality" value={sharePQuality} onChange={this.handleOnChange}/>

            <label htmlFor="sharePrice">share Price</label>
            <input name="sharePrice" value={sharePrice} onChange={this.handleOnChange}/>

            <label htmlFor="subTotal">sub Total</label>
            <input name="subTotal" value={subTotal} onChange={this.handleOnChange}/>
        </div> ) 
    }
}

export default PurchaseCalculator