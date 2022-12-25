// UserDetailsProvider.js
//Reference: https://dev.to/hey_yogini/usecontext-for-better-state-management-51hi

import { createContext, useState } from 'react';

//create a context, with createContext api
export const userDetailsContext = createContext();

const UserDetailsProvider = (props) => {
        // this state will be shared with all components 
    const [userDetails, setUserDetails] = useState();

    return (
                // this is the provider providing state
        <userDetailsContext.Provider value={[userDetails, setUserDetails]}>
            {props.children}
        </userDetailsContext.Provider>
    );
};

export default UserDetailsProvider;