import React, { ReactChild, FC } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface Props{
    children: ReactChild,
}
const Layout:FC<Props> = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}
export default Layout;