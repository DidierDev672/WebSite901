import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProfileUser from "../containers/ProfileUser";
import Ordering from "./Ordering";
import { addOrdersHeader } from "../reducers/orders/ordersSlice";
import API from "../api";
import "../styles/components/sibebar.scss";

const Sibebar = () => {
    const [ orders, setOrders ] = useState(false);
    const [ profile, setProfile ] = useState(true);
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
        }
    },[]);

    const handleSeeeProfile = () => {
        switch(profile){
            case false:
                setProfile(!profile);
                if(orders === true){
                    setOrders(!orders);
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

            case true:
                setOrders(!orders);
                if(profile === false){
                    setProfile(!profile);
                }

            default:
                "No boolean data"
        }
    }

    return(
        <div className="sibebar">
            <nav className="content-sibebar">
                <ul className="sibebar-list-sibebar">
                    <li className="item-list-sibebar">
                        <button  className="btn-sibebar" onClick={handleSeeeProfile}>Profile</button>
                    </li>
                    <li className="item-list-sibebar">
                        <button className="btn-sibebar" onClick={handleSeenOrders}>
                            Pedidos
                        </button>
                    </li>
                    <li className="item-list-sibebar">
                        <button className="btn-sibebar">Factura</button>
                    </li>
                    <li className="item-list-sibebar">
                        <button className="btn-sibebar">Solicitudes</button>
                    </li>
                </ul>
            </nav>
            <div id="detail">
                {profile ? <ProfileUser /> : ""}
                { orders ? <Ordering/> : "" }
            </div>
        </div>
    );
};

export default Sibebar;