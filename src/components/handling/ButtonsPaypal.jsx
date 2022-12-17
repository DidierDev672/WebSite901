import { useEffect } from "react";
import {  useDispatch} from "react-redux";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import API from "../../api";
import { clearBag } from "../../reducers/cart/cartSlice";

    // This values are the props in the UI
    const currency = "USD";
    const style = {"layout":"vertical"};

// Custom component to wrap the PayPalButtons and handle currency changes
const ButtonWrapper = ({ currency, showSpinner, handleSumTotal }) => {
     // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    // const { state_buy } = useSelector( state => state.cart );
    // const [ status, setStatus ] = useState(...state_buy);

    useEffect(() => {
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: currency,
            },
        });
        console.log(handleSumTotal());
    }, [currency, showSpinner]);


     // This values are the props in the UI
    const amount = handleSumTotal();
    const Dispatch = useDispatch();
    return(
        <>
            { (showSpinner && isPending) && <div className="spinner" /> }
            <PayPalButtons
                style={style}
                disabled={false}
                forceReRender={[amount, currency, style]}
                fundingSource={undefined}
                createOrder={(data,actions) => {
                    return actions.order
                        .create({
                            purchase_units:[
                                {
                                    amount:{
                                        currency_code: currency,
                                        value: amount,
                                    }
                                }
                            ]
                        })
                        .then((orderId) => {
                            // Dispatch(clearBag());
                            // Your code here after create the order
                            return orderId;
                        })
                }}
                onApprove={function (data, actions){
                    return actions.order.capture().then(function (){
                        // Your code here after capture the order
                    })
                }}
            />
        </>
    );
};

const ButtonsPaypal = ({ handleSumTotal }) => {
    return(
        <div style={{ maxWidth: "750px", minHeight: "200px" }}>
            <PayPalScriptProvider
                options={{
                    "client-id": "AYZb03kDUpLtup416KhzkWS456Z2SJ_0AEiKY23PwbB6FWQstcQDFsS5AgNTMGZoAS9uxA5XkxfkfcUN",
                    components: "buttons",
                    currency: "USD"
                }}
            >
                <ButtonWrapper
                    handleSumTotal={handleSumTotal}
                    currency={currency}
                    showSpinner={false}
                />
            </PayPalScriptProvider>
        </div>
    );
};

export default ButtonsPaypal;