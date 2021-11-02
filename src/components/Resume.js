import React from "react";

export default function Nav() {
    const linkStyle = { border: '1px black', padding: '5px' };
  
    return (
      <nav className="main-header-menu">
        <section
          style={{
            display: 'flex',
            fontFamily: 'helvetica',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}
        >
            <Link>About Me</Link>
            <Link>Portfolio</Link>
            <Link>Resume</Link>
            <Link>Contact</Link>
         
        </section>
      </nav>
    );
  }