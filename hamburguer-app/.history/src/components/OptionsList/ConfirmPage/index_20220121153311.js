import React, {useState} from "react";

export default ConfirmPage = (props) => {
    const [isConfirmed, setIsConfirmed] = useState(false)
    const orderConfirmed
    return (
        <div className="confirm-page">
            <div className="order-section"></div>
            <button onClick={setIsConfirmed(true)}>Conf</button>
        </div>
    )
};
