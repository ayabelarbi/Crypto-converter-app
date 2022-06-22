import React from "react";

const Transaction = ({list}) => {

    return (
        <div className="list-container">
            <h5>Transaction</h5> 
            <ul className="list-group">
                {list.length ? list.map((item) => (
                    <li key={item.id} className="list-group-item">
                        <span><strong>{item.name}</strong></span>
                        {': '}
                        <span>{item.converted}</span>
                    </li>
            )): <div>No Purchase</div>}
            </ul>
        </div>
    )
}; 

export default Transaction; 