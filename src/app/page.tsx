import React from 'react';
import App from './(root)/layout';

const Page = ({children}:{children:React.ReactNode}) => {
    return (
        <div>
            <App>{children}</App>
        </div>
    );
};

export default Page;