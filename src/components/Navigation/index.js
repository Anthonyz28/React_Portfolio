import React from 'react';
import './assets/css/style.css';

const Navigation = (props) => {
    const tabs = ['About', 'Projects', 'Contact', 'Resume'];

    return(
        <nav>
            <ul className="nav-container">
                {tabs.map(tab => (
                    <li className="nav-item" key={tab}> 
                        <a
                            href={'#' + tab.toLowerCase()}
                            onClick={() => props.handlePageChange(tab)}
                            className={
                            props.currentPage === tab ? 'nav-link active' : 'nav-link'
                            }
                        >
                            {tab}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;