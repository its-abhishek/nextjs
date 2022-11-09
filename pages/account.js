import { useSession } from 'next-auth/react';
import React, { use } from 'react';

const account = () => {
    const {data: session, status} = useSession({requuired: true});
    if (status=="authenticated") {
        return (
            <div>
                <p>Welcome {session.user.name}</p>
            </div>
        );
    } else {
        return (
            <div>
                <p>You are not signed in.</p>
            </div>
        );
    }
};

export default account;
