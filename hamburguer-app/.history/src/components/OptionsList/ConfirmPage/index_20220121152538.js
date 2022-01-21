import React, {useState} from "react";

export default ConfirmPage = (props) => {
    const [isConfirmed, setIsConfirmed] = useState(false)
    
    return (
        <div className="confirm-page">
            <div className="order-section"></div>
            <button onClick={setIsc}/>
        </div>
    )
};
