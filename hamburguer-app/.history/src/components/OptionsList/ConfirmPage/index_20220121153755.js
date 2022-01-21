import React, {useState} from "react";

export default ConfirmPage = (props) => {
    const [isConfirmed, setIsConfirmed] = useState(false)
    const orderConfirmed= ()=>{
        setIsConfirmed(true)
    }
    return (
        <div className="confirm-page">
            <div className="order-section"></div>
            <button onClick={orderConfirmed}>Confimr</button>
        </div>
    )
};
