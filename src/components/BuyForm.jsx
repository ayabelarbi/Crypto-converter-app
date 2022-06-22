import React, { useState, useEffect, useCallback} from 'react'; 
import InputBase from './InputBase';

const BuyForm = ({ data, onPurchase }) =>{
    const { name, rate} = data; 
    const INIT = {amount : 0, converted: 0}; 
    const [exchange, setExchange] = useState(INIT);
    const [transactions, setTransactions] = useState([]);
    
    useEffect(() => {
        setExchange({
            ...exchange, 
            converted : Number(exchange.amount / rate).toFixed(4),
        })
    }, [name]); 
    
 
    useEffect(() => {
        onPurchase(transactions); 
    }, [transactions]); 


    const handleChange = ({ target: {value, name} }) => {
        const val = Number(value.trim());
        const converted = (val / rate).toFixed(4); 
        console.log('here it is', converted);

        setExchange({
            [name] : val,
            converted,   
        }); 
    }

    const makePurchase = useCallback((e) => {
        e.preventDefault(); 
        if (!exchange.amount){
            alert('Please Enter Amount');
        }

        const payload = {
            ...exchange, 
            name,
        }
        setTransactions([...transactions, payload]);


    },[exchange,transactions]);

    console.log('transX', transactions);

    return(
        <form onSubmit={makePurchase} className="form">
            <div className="input-group mb-3">
                <InputBase name="amount" textLabel="AYA" onChange={handleChange}/>
                <i className="fas fa-exchange-alt" />
                <InputBase disabled value={exchange.converted} textLabel={name} />
            </div>
            <input className="btn btn-primary" type="submit" value="Purchase" />
        </form>
       
    )
}; 

export default BuyForm; 