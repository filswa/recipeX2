import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React from 'react';

const Home = ({children}: {children: React.ReactNode}) => {
    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="flex h-screen flex-col justify-between">
                <Navbar />
                <main>{children}</main>
                <Footer />
            </div>
            
        </div>
    );
}

// <Footer />

export default Home