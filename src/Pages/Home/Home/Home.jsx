import React, { useContext } from 'react';
import { logInContext } from '../../../Proveder/AuthContext';

const Home = () => {
    const {oli,number,setNumber}=useContext(logInContext)
    console.log(oli,number,setNumber);
    return (
        <div>
            This is Home {number+9}
        </div>
    );
};

export default Home;