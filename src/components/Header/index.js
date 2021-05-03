import React from 'react';
import Navigation from '../Navigation';


const Header = ({currentPage, handlePageChange}) => {

    return (
        <header className='app-header'>
            <div>
                <a href="/">
                    Anthony Martinez
                </a>
                <Navigation
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                />
            </div>
        </header>
    )
}

export default Header;