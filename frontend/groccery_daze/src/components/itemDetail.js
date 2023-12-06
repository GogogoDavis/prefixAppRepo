import React, { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';

export const Detail = () => { 
    const { id } = useParams();
    const [ItemDetail, setItemDetail] = useState({
        userId: '', 
        ItemName: '', 
        description: '',
        quantity: 0,
    });
    useEffect(() => {
    fetch(`http://localhost:8080/item/:${id}`)
    .then(res => res.json())
    .then(data => setItemDetail(data))    
    })

    return( 
        console.log(ItemDetail)
    )
}