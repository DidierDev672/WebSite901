import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileUser from "../containers/ProfileUser";
import Ordering from "./Ordering";
import Invoice from "./Invoice";
import Support from "./Support";
import { addOrdersHeader, addOrdersDetail } from "../reducers/orders/ordersSlice";
import { addContact } from "../reducers/contact/contactSlice";
import API from "../api";
import "../styles/components/sibebar.scss";

const Sibebar = () => {
    const [ orders, setOrders ] = useState(false);
    const [ profile, setProfile ] = useState(true);
    const [ receipt, setReceipt ] = useState(false);
    const [ support, setSupport ] = useState(false);
    const dispatch = useDispatch();
    const { uid  } = useSelector(state => state.user);

    useEffect(() => {
        if(uid !== ""){
            API.queryOrders({ uid: uid })
            .then((result) => {
                dispatch(addOrdersHeader(result));
            })
            .catch((error) => {
                console.error(error);
            })

            API.queryAskContact({ uid: uid })
            .then((result) => {
                dispatch(addContact(result));
            })
            .catch((error) => {
                console.error(error);
            });

            API.queryDetailOrders({ uid: uid })
            .then((result) => {
                dispatch(addOrdersDetail(result.product));
            })
            .catch((error) => {
                console.error(error);
            })
        }
    },[]);

    const handleSeeeProfile = () => {
        switch(profile){
            case false:
                setProfile(!profile);
                if(orders === true){
                    setOrders(!orders);
                }

                if(receipt === true){
                    setReceipt(!receipt);
                }

                if(support === true){
                    setSupport(!support);
                }

            default:
                "No data boolean"
        }
    };

    const handleSeenOrders = () => {
        switch(orders){
            case false:
                setOrders(!orders);
                if(profile === true){
                    setProfile(!profile);
                }

                if(receipt === true){
                    setReceipt(!receipt);
                }

                if(support === true){
                    setSupport(!support);
                }

            default:
                "No boolean data"
        }
    };

    const handleSeeSupport = () => {
        switch(support){
            case false:
                setSupport(!support);
                if(orders === true){
                    setOrders(!orders);
                }

                if(receipt === true){
                    setReceipt(!receipt);
                }

                if(profile === true){
                    setProfile(!profile);
                }


            default:
                "No boolean data"
        }
    };

    const handleSeeReceipt = () => {
        switch(receipt){
            case false:
                setReceipt(!receipt);
                if(orders === true){
                    setOrders(!orders);
                }
                if(profile === true){
                    setProfile(!profile);
                }

                if(support === true){
                    setSupport(!support);
                }
            default:
                "No boolean data"
        }
    }

    return(
        <div className="container">
            <div className="py-5"></div>
            <div className="mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-primary">
                                <button className="btn-sibebar" onClick={handleSeeeProfile}><strong>Profile</strong></button>
                            </li>
                            <li className="list-group-item list-group-item-secondary">
                                <button className="btn-sibebar" onClick={handleSeenOrders}>
                                    Pedidos
                                </button>
                            </li>
                            <li className="list-group-item list-group-item-success">
                                <button className="btn-sibebar" onClick={handleSeeReceipt}>Factura</button>
                            </li>
                            <li className="list-group-item list-group-item-warning">
                                <button className="btn-sibebar" onClick={handleSeeSupport}>Solicitudes</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-8">
                        {profile ? <ProfileUser /> : ""}
                        { orders ? <Ordering/> : "" }
                        { receipt ? <Invoice/> : "" }
                        { support ? <Support /> : "" }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sibebar;