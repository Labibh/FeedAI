import React from "react";
import {Link} from "react-router-dom";
import styled from 'styled-components';

const Nav = styled.div`
{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
  max-width: 1920px;
  height: 70px;
  background-color: var(--color-blue-1);
}

  .nav-link,
  .nav-link-more,
  .nav-link-donate {
    font-family: var(--font-family-inter);
    color: var(--color-purple-1);
    text-decoration: none;
  }
  

  .nav-logo {
    display: flex;
    align-items: center;
    margin-right: 7%;
    width: 270px;
  }


  .nav-logo-img > svg {
    margin: 15px;
    width: 40px;
    height: 40px;
  }

  .nav-logo-text {
    text-decoration: none;
  }

  .nav-logo-text > span {
    font-family: var(--font-family-inter);
    font-size: 24px;
    font-weight: 700;
    color: var(--color-purple-1);
    text-decoration: none;
  }

  .nav-menu-main {
    margin-right: auto;
    font-size: 20px;
  }

  .nav-link {
    padding: 0 10px;
    font-size: 20px;
    font-weight: 600;
  }

  .nav-menu-more {
    margin-right: 30px;
    font-size: 20px;
    font-weight: 600;
  }

  .nav-link-more {
    padding: 0 15px;
  }

  .nav-link-donate {
    background-color: var(--color-pink-1);
    color: var(--color-white);
    margin: 0 10px;
    padding: 14px 30px;
    font-size: 22px;
    font-weight: 700;
    border-radius: 5px;
    border: 2px solid var(--color-white);
  }

  .nav-link-donate:hover {
    background-color: var(--color-pink-2);
  }
`

const Navbar = () => {
    return (
        <Nav>
            <div className="nav-logo">
                <Link to="/" className="nav-logo-img"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="none"><path fill="#F8312F" d="M5 3.5a1.5 1.5 0 0 1-1 1.415V12l2.16 5.487L4 23c-1.1 0-2-.9-2-1.998v-7.004a2 2 0 0 1 1-1.728V4.915A1.5 1.5 0 1 1 5 3.5Zm25.05.05c0 .681-.44 1.26-1.05 1.468V12.2c.597.347 1 .994 1 1.73v7.01c0 1.1-.9 2-2 2l-2.94-5.68L28 11.93V5.018a1.55 1.55 0 1 1 2.05-1.468Z"/><path fill="#FFB02E" d="M11 4.5A1.5 1.5 0 0 1 12.5 3h7a1.5 1.5 0 0 1 .43 2.938c-.277.082-.57.104-.847.186l-3.053.904l-3.12-.908c-.272-.08-.56-.1-.832-.18A1.5 1.5 0 0 1 11 4.5Z"/><path fill="#CDC4D6" d="M22.05 30H9.95C6.66 30 4 27.34 4 24.05V12.03C4 8.7 6.7 6 10.03 6h11.95C25.3 6 28 8.7 28 12.03v12.03c0 3.28-2.66 5.94-5.95 5.94Z"/><path fill="#212121" d="M9.247 18.5h13.506c2.33 0 4.247-1.919 4.247-4.25A4.257 4.257 0 0 0 22.753 10H9.247A4.257 4.257 0 0 0 5 14.25a4.257 4.257 0 0 0 4.247 4.25Zm4.225 7.5h5.056C19.34 26 20 25.326 20 24.5s-.66-1.5-1.472-1.5h-5.056C12.66 23 12 23.674 12 24.5s.66 1.5 1.472 1.5Z"/><path fill="#00A6ED" d="M10.25 12C9.56 12 9 12.56 9 13.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25Zm11.5 0c-.69 0-1.25.56-1.25 1.25v2.5a1.25 1.25 0 1 0 2.5 0v-2.5c0-.69-.56-1.25-1.25-1.25Z"/></g></svg></Link>
                <Link to="/" className="nav-logo-text"><span>Feed AI</span></Link>
            </div>

            <div className="nav-menu-main">
                <Link to="/" className="nav-link">Main</Link>
                <Link to="/liked" className="nav-link">Liked</Link>
            </div>
            <div className="nav-menu-more">
                <Link to="/create" className="nav-link-more">Create</Link>
                <Link to="/myposts" className="nav-link-donate">My Posts</Link>
            </div>
        </Nav>
    )
}

export default Navbar;