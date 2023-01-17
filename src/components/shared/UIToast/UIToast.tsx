import React, { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';

export function UIToast(): ReactElement {
    return (
        <ToastContainer
            progressStyle={{ backgroundColor: 'red' }}
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
    );
}
