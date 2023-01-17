import React, { ReactElement } from 'react';
import { ToastContainer } from 'react-toastify';

export function UIToast(): ReactElement {
    return (
        <ToastContainer
            closeButton={false}
            progressStyle={{ backgroundColor: 'red' }}
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="dark"
        />
    );
}
