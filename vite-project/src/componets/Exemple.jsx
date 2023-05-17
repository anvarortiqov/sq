import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import { fetchMyData } from '../redux/getActions';
import myCars from './../redux/getData';
import { useEffect } from 'react';

function Exemple() {
    const dispatch = useDispatch();
    const myData = useSelector((state) => state.myCars.data);
  
    useEffect(() => {
      dispatch(fetchMyData());
    }, [dispatch]);
   console.log(myData);
    return (
      <div>
        <h2>Natija</h2>
        {myData ? myData.map((item) => (
          <p key={item.id}>{item.variant}</p>
        )):
        <h2>Ishlamadi</h2> }
    
    </div>)
}

export default Exemple