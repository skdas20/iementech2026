import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { FaHome, FaPenSquare, FaBook, FaCalendarAlt, FaFileUpload, FaUsers, FaPhone, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';
import { IoIosPeople } from "react-icons/io";
import { MdOutlineGroups } from "react-icons/md";

// --- Styled Components (Crafted for a Royal & Professional Feel) ---

// 1. TOP BANNER (Hero section background)
const TopBanner = styled.header`
  background: linear-gradient(135deg, rgba(5, 15, 35, 0.75) 0%, rgba(10, 25, 50, 0.75) 50%, rgba(15, 35, 70, 0.75) 100%),
    url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 0.75rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1101;
  border-bottom: none;
  
  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
  }
`;

const MainLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;

const MainLogo = styled.img`
  height: 60px;
  width: auto;
  filter: drop-shadow(0 4px 16px rgba(0, 0, 0, 0.3));  
  @media (max-width: 768px) {
    height: 65px;
  }
`;

const ConferenceTitle = styled.h2`
  font-family: 'Georgia', serif;
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #f59e0b;
  margin: 0;
  margin-top: 0.18rem;
  text-shadow: 0 1px 3px rgba(0,0,0,0.13);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }
`;

// 2. MAIN NAVBAR (Hero section background)
const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 1100;
  background: linear-gradient(135deg, rgba(5, 15, 35, 0.75) 0%, rgba(10, 25, 50, 0.75) 50%, rgba(15, 35, 70, 0.75) 100%),
    url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 60px;
  border-bottom: none;
  transition: none;
  
  @media (max-width: 992px) {
    height: auto;
    min-height: 50px;
  }
`;

const NavbarContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  position: relative;
  
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 0;
    width: 100%;
  }
`;

const NavSideLogo = styled.img`
  height: 44px;
  width: auto;
  margin: 0 0.5rem;
  filter: drop-shadow(0 2px 8px rgba(30, 42, 90, 0.13));
  transition: transform 0.4s cubic-bezier(.4,2,.3,1), box-shadow 0.3s;
  will-change: transform;
  &:hover {
    transform: translateY(-6px) scale(1.08) rotate(-3deg);
    box-shadow: 0 8px 24px rgba(245, 158, 11, 0.13);
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    background: rgba(30, 41, 59, 0.98);
    flex-direction: column;
    padding: 0;
    gap: 0;
    opacity: ${props => props.isOpen ? '1' : '0'};
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-10px)'};
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    box-shadow: 0 10px 30px rgba(30,42,90,0.3);
    z-index: 1250;
    border-radius: 0 0 15px 15px;
    overflow: hidden;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(100, 181, 246, 0.2);
    border-top: none;
  }
`;

const NavItem = styled.li`
  position: relative;
`;

const NavLink = styled(Link)`
  color: rgba(255, 255, 255, 0.9);
  font-weight: 600;
  padding: 1rem 0.5rem;
  transition: color 0.25s, background 0.25s, text-shadow 0.25s;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.02rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  position: relative;
  text-decoration: none;
  border-radius: 8px;
  z-index: 1;  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: rgba(100, 181, 246, 0.2);
  touch-action: manipulation;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 80%;
    height: 3px;
    background: linear-gradient(90deg, #64b5f6 0%, #42a5f5 100%);
    border-radius: 2px;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    z-index: -1;
    box-shadow: 0 0 10px rgba(100, 181, 246, 0.5);
  }
  &:hover, &.active {
    color: #64b5f6;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7), 0 0 8px rgba(100, 181, 246, 0.4);
    
    &::after {
      transform: translateX(-50%) scaleX(1);
    }
  }
  
  @media (max-width: 992px) {
    width: 100%;
    padding: 1.2rem 2rem;
    font-size: 1.1rem;
    border-radius: 0;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    
    &::after {
      display: none;
    }
    
    &:hover, &.active {
      color: #ffffff;
      background: rgba(100, 181, 246, 0.2);
    }
    
    &:active {
      background: rgba(100, 181, 246, 0.3);
      transform: scale(0.98);
    }
  }
    .icon {
    font-size: 1.15rem;
    transition: transform 0.3s;
  }
  
  &:hover .icon {
    transform: scale(1.13) rotate(-8deg);
  }
`;

const DropdownWrapper = styled.div`
  position: relative;
  .dropdown-icon {
    transition: transform 0.3s;
    margin-left: 0.25rem;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 50%;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  min-width: 260px;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transform: ${props => props.isOpen ? 'translateY(0) translateX(-50%)' : 'translateY(-10px) translateX(-50%)'};
  transition: all 0.3s;
  z-index: 1300;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.2);
  @media (max-width: 992px) {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    background: rgba(0, 0, 0, 0.7);
    border: none;
    width: 100%;
    padding-left: 2rem;
    display: ${props => props.isOpen ? 'block' : 'none'};  }
`;

const DropdownItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.2s;
  border-left: 3px solid transparent;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: rgba(100, 181, 246, 0.2);
  touch-action: manipulation;
  
  @media (max-width: 992px) {
    padding: 1rem 3rem;
    width: 100%;
    border-left: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    font-size: 1rem;
    
    &:active {
      background: rgba(100, 181, 246, 0.3);
      transform: scale(0.98);
    }
  }
  
  &:hover, &.active {
    background: rgba(100, 181, 246, 0.2);
    color: #64b5f6;
    border-left-color: #64b5f6;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7), 0 0 8px rgba(100, 181, 246, 0.4);
    
    @media (max-width: 992px) {
      border-left-color: transparent;
      background: rgba(100, 181, 246, 0.25);
    }
  }
`;

const MobileToggle = styled.button`
  display: none;
  background: linear-gradient(135deg, rgba(5, 15, 35, 0.9) 0%, rgba(15, 35, 70, 0.9) 100%);
  border: 2px solid rgba(100, 181, 246, 0.3);
  cursor: pointer;
  z-index: 1300;
  color: rgba(255, 255, 255, 0.9);
  padding: 0.8rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  margin: 0.8rem 0;
  
  .icon {
    font-size: 1.2rem;
    transition: transform 0.3s;
  }
  
  &:hover {
    color: #64b5f6;
    background: linear-gradient(135deg, rgba(15, 35, 70, 0.95) 0%, rgba(25, 45, 80, 0.95) 100%);
    border-color: rgba(100, 181, 246, 0.5);
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7), 0 0 10px rgba(100, 181, 246, 0.5);
    transform: translateY(-2px);
  }
  
  @media (max-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

// --- The Main Component ---
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommitteeDropdownOpen, setIsCommitteeDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const isActive = (path) => location.pathname === path ? 'active' : '';
  const isCommitteeActive = () => location.pathname.startsWith('/committee') ? 'active' : '';
  const handleDropdownToggle = (e) => {
    if (window.innerWidth <= 992) {
      e.preventDefault();
      setIsCommitteeDropdownOpen(!isCommitteeDropdownOpen);
    }
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsCommitteeDropdownOpen(false);
  };
  return (
    <>      <TopBanner>
        <MainLogoContainer>
          <MainLogo src="/assets/LOGO.png" alt="IEMENTech Logo" />
        </MainLogoContainer>
      </TopBanner>
        <NavbarContainer>
        <NavbarContent>
          <NavSideLogo src="/assets/IEM_Logo-150x150.png" alt="IEM Logo" />
            {/* Mobile Toggle Button - Shows in mobile view */}
          <MobileToggle isOpen={isMobileMenuOpen} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes className="icon" /> : <FaBars className="icon" />}
          </MobileToggle>
          
          <NavMenu isOpen={isMobileMenuOpen}>
            <NavItem><NavLink to="/" className={isActive('/')} onClick={handleMobileLinkClick}> <FaHome className="icon" />Home</NavLink></NavItem>
            <NavItem><NavLink to="/registration" className={isActive('/registration')} onClick={handleMobileLinkClick}> <FaPenSquare className="icon" />Registration</NavLink></NavItem>
            <NavItem><NavLink to="/topics" className={isActive('/topics')} onClick={handleMobileLinkClick}> <FaBook className="icon" />Topics</NavLink></NavItem>
            <NavItem><NavLink to="/key-dates" className={isActive('/key-dates')} onClick={handleMobileLinkClick}> <FaCalendarAlt className="icon" />Key Dates</NavLink></NavItem>
            <NavItem><NavLink to="/submissions" className={isActive('/submissions')} onClick={handleMobileLinkClick}> <FaFileUpload className="icon" />Submissions</NavLink></NavItem>
            <NavItem>
              <DropdownWrapper 
                isOpen={isCommitteeDropdownOpen}
                onMouseEnter={() => window.innerWidth > 992 && setIsCommitteeDropdownOpen(true)} 
                onMouseLeave={() => window.innerWidth > 992 && setIsCommitteeDropdownOpen(false)}
              >
                <NavLink to="#" onClick={handleDropdownToggle} className={isCommitteeActive()}>
                  <FaUsers className="icon" />Committee <FaChevronDown className="dropdown-icon" />
                </NavLink>
                <DropdownMenu isOpen={isCommitteeDropdownOpen}>
                  <DropdownItem to="/committee/organizing" onClick={handleMobileLinkClick} className={isActive('/committee/organizing')}>
                    <MdOutlineGroups />Organizing
                  </DropdownItem>
                  <DropdownItem to="/committee/advisory" onClick={handleMobileLinkClick} className={isActive('/committee/advisory')}>
                    <IoIosPeople />Advisory
                  </DropdownItem>
                </DropdownMenu>
              </DropdownWrapper>
            </NavItem>
            <NavItem><NavLink to="/contact" className={isActive('/contact')} onClick={handleMobileLinkClick}> <FaPhone className="icon" />Contact</NavLink></NavItem>
          </NavMenu>
          <NavSideLogo src="/assets/UEM_Logo-150x150.png" alt="UEM Logo" />
        </NavbarContent>
      </NavbarContainer>    </>
  );
};

export default Navbar;