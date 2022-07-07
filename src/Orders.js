import React from 'react'
import { useState, useEffect } from "react";

export function Orders(props) {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`/orders/${props.user.sub}`)
            .then(res => res.json())
            .then(_orders => {
                setOrders(_orders)
            })
            .catch(console.error)
    }, [])

    const style = {
        width: '2rem',
        height: '2rem',
        margin: '.5rem',
        padding: '1rem',
        color: 'white',
        borderRadius: '3px',
        display: 'flex',
        itemsAlign: 'center',
        justifyItems: 'center'
    }
    return (
        <ul>
            <li>Orders</li>
            {orders.map(({order}, i) => {
                return <li key={i} style={{...style, backgroundColor: order.color}}>£{order.price}</li>
            })}
        </ul>
    )
}