import React from 'react'
import { useEffect, useState } from "react";

export function Items(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('/items')
        .then(res => res.json())
        .then(_items => {
            setItems(_items)
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

    const sendOrder = (item) => {
        fetch(`/orders/${props.user.sub}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(item)
        })
        .then(res => res.json())
        .then(console.log)
        .catch(console.error)
    }

    return (
        <ul>
            <li>Items</li>
            {items.map((item, i) => {
                return (
                    <li 
                        key={i}
                        style={{...style, backgroundColor: item.color}}
                        onClick={() => sendOrder(item)}>£{item.price}</li>
                )
            })}
        </ul>
    )
}