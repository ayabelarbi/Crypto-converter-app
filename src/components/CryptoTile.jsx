import React from 'react'; 

const CryptoTile = ({data, selected, onClick}) =>{
    const{id,name,rate,icon} = data; 

    const handleClick =() => onClick(data); 
    
    return(
        //We're given the data from the tile
        <div className= {`card ${selected && 'selected'}`} onClick={handleClick}>
            <div className="card-body">
                <img className="coin-icon" src={icon} alt="icon"/>
                <div>{name}</div>
                <div>{rate}</div>
          
            </div>
        </div>
    )

}

export default CryptoTile; 