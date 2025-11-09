import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Logo from '../images/shanehind.png'
import { MdPhoneForwarded } from "react-icons/md";
import { useLocation, Link } from 'react-router-dom';
import { TiHome } from "react-icons/ti";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [activeNavItem, setActiveNavItem] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveNavItem(location.pathname);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  const isActive = (path) => {
    return activeNavItem === path;
  };

  return (
    <NavbarWrapper navbarHeight={80}> 
      <NavbarContainer>
        <TopRow>
          <div className="flex items-center">
            <div className="flex items-center">
              <NavLink to="" className="mr-0" $active={isActive('/login')}>Login</NavLink>
              <NavLink to="/contact-us" $active={isActive('/contact-us')}>Contact Us</NavLink>
              <a href="tel:8858800666" className="mr-1 flex items-center p-1" style={{border:'1px solid red', borderRadius:'10%'}}> {/* <a href="tel:8858800666"></a> */}
               Call <MdPhoneForwarded className="mr-1 ml-1" /> to join 
              </a>
            </div>
            <SocialLinks>
              <a href="https://www.facebook.com/shanehindforum.singhak/" target="_blank" rel="noopener noreferrer">
                <FaFacebook style={{color:'blue'}} />
              </a>
              <a href="https://instagram.com/shanehind.india" target="_blank" rel="noopener noreferrer">
                <FaInstagram color={{
                  color:" radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)"
                }}/>
              </a>
              <a href="https://x.com/ForumHind" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/@ShaneHindForum" target="_blank" rel="noopener noreferrer">
                <FaYoutube color={{color: 'red'}}/>
              </a>
            </SocialLinks>
          </div>
        </TopRow>

        <MainNav>
          <div className="flex items-center ">
            <NavLink to="/" className='flex align-center items-center justify-center text-3xl font-bold text-pink-900' >
              <img src={Logo} alt="Logo" /> 
{/*               <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span
                  style={{
                    marginBottom:"5px",
                    fontFamily: 'arial',
                    fontSize: '20px',
                    color: '#1c006bff',
                    fontWeight: '800',
                    textShadow: `
                      1px 1px 0 #0e4297,
                      1px 21x 0 #0e4297,
                      1px 1px 0 #0e4297,
                      1px 1px 0 #0e4297
                    `,
                  }}
                >
                  SHANE HIND FORUM
                </span>

                <span
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '28px',
                    color: '#ff0000ff',
                    fontWeight: '600',
                    textShadow: `
                      1px 1px 0 #000,
                      2px 2px 0 #000,
                      3px 3px 0 #000
                    `,
                  }}
                >
                  शाने हिंद फ़ोरम
                </span>
              </div> */}


            </NavLink>
          </div>

          <NavLinks>
             <NavLink to="/" $active={isActive('/')} style={{display:'flex', justifyContent:'center', alignItems:'center'}}><TiHome style={{fontSize:'40px', color:'#004AAD'}} /> </NavLink>
            <NavLink to="/upcoming-events" $active={isActive('/upcoming-events')}>Upcoming Events</NavLink>
            <NavLink to="/shane-sandesh" $active={isActive('/shane-sandesh')}>Shane Sandesh</NavLink>
            <JoinButton to="/join-shf" $active={isActive('/join-shf')}>Join SHF</JoinButton>
            <DonateButton to="/donate" $active={isActive('/donate')}>Donate</DonateButton>
            
            <div className="relative">
              <DropdownButton onClick={toggleDropdown}>
                Menu {isDropdownOpen ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
              </DropdownButton>
              <DropdownMenu isOpen={isDropdownOpen}>
                <div>
                  <DropdownLink as="div">About the Forum</DropdownLink>
                  <DropdownSubmenu>
                    <DropdownSubLink to="/about-shf" $active={isActive('/about-forum')}>About the Forum</DropdownSubLink>
                    <DropdownSubLink to="/our-philosophy" $active={isActive('/our-philosophy')}>Our Philosophy</DropdownSubLink>
                    <DropdownSubLink to="/our-philosophy-hindi" $active={isActive('/our-philosophy-hindi')}>Our Philosophy (Hindi)</DropdownSubLink>
                    <DropdownSubLink to="" $active={isActive('/history')}>History of Forum</DropdownSubLink>
                    <DropdownSubLink to="/our-constitution-hindi" $active={isActive('/constitution')}>Constitution</DropdownSubLink>
                  </DropdownSubmenu>
                </div>

                <div>
                  <DropdownLink as="div">About Leadership</DropdownLink>
                  <DropdownSubmenu>
                    <DropdownSubLink to="/isich-spiritual-source-of-shf" $active={isActive('/isich-spiritual-source-of-shf')}>ISICH - Spiritual Source of SHF</DropdownSubLink>
                    <DropdownSubLink to="/dr-awadhesh-kumar-singh" $active={isActive('/dr-awadhesh-kumar-singh')}>Founder Dr. Awdhesh Singh</DropdownSubLink>
                    <DropdownSubLink to="/dr-mangal-singh" $active={isActive('/dr-mangal-singh')}> Dr. Mangal Singh</DropdownSubLink>
                    <DropdownSubLink to="/dr-shailendra-kumar-singh" $active={isActive('/dr-shailendra-kumar-singh')}> Dr. Shailedra Kumar Singh</DropdownSubLink>
                    <DropdownSubLink to="" $active={isActive('/founder')}>Dr. Ram Pal Singh</DropdownSubLink>
                    <DropdownSubLink to="" $active={isActive('/founder')}>Mr. Vinod Kumar Sharma</DropdownSubLink>
                    <DropdownSubLink to="" $active={isActive('/founder')}>Mr Sunil Kumar Singh</DropdownSubLink>
                  </DropdownSubmenu>
                </div>

                <div>
                  <DropdownLink as="div">Documents and Literature</DropdownLink>
                  <DropdownSubmenu>
                    <DropdownSubLink to="/books" $active={isActive('/books')}>Books</DropdownSubLink>
                  </DropdownSubmenu>
                </div>

                <div>
                  <DropdownLink as="div">Media Resources</DropdownLink>
                  <DropdownSubmenu>
                    <DropdownSubLink to="/in-media" $active={isActive('/in-media')}>In Media</DropdownSubLink>
                    <DropdownSubLink to="" $active={isActive('/speeches')}>Speeches</DropdownSubLink>
                    <DropdownSubLink to="" $active={isActive('/interviews')}>Interviews</DropdownSubLink>
                    <DropdownSubLink to="" $active={isActive('/photo-gallery')}>Photo Gallery</DropdownSubLink>
                    <DropdownSubLink to="" $active={isActive('/video-gallery')}>Video Gallery</DropdownSubLink>
                  </DropdownSubmenu>
                </div>
              </DropdownMenu>
            </div>
          </NavLinks>

          <MobileMenuButton onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
        </MainNav>

        <MobileMenu isOpen={isMobileMenuOpen}>
          <MobileNavLink to="/" $active={isActive('/')}>Home</MobileNavLink>
          <MobileNavLink to="/upcoming-events" $active={isActive('/upcoming-events')}>Upcoming Events</MobileNavLink>
          <MobileNavLink to="/shane-sandesh" $active={isActive('/shane-sandesh')}>Shane Sandesh</MobileNavLink>
          <MobileNavLink to="/join-shf" $active={isActive('/join-shf')}>Join SHF</MobileNavLink>
          <MobileNavLink to="/donate" $active={isActive('/donate')}>Donate</MobileNavLink>
          
          <div>
            <MobileNavLink as="div" onClick={() => toggleSubMenu('about')}>
              About the Forum {openSubMenu === 'about' ? '−' : '+'}
            </MobileNavLink>
            {openSubMenu === 'about' && (
              <SubMenu>
                <SubMenuLink to="/about-shf" $active={isActive('/about-forum')}>About the Forum</SubMenuLink>
                <SubMenuLink to="" $active={isActive('/our-philosophy')}>Our Philosophy</SubMenuLink>
                <SubMenuLink to="" $active={isActive('/history')}>History of Forum</SubMenuLink>
                <SubMenuLink to="/our-constitution-hindi" $active={isActive('/constitution')}>Constitution</SubMenuLink>
              </SubMenu>
            )}
          </div>

          <div>
            <MobileNavLink as="div" onClick={() => toggleSubMenu('leadership')}>
              About Leadership {openSubMenu === 'leadership' ? '−' : '+'}
            </MobileNavLink>
            {openSubMenu === 'leadership' && (
              <SubMenu>
                <SubMenuLink to="/isich-spiritual-source-of-shf" $active={isActive('/isich-spiritual-source-of-shf')}>ISICH - Spiritual Source of SHF</SubMenuLink>
                <SubMenuLink to="/dr-awadhesh-kumar-singh" $active={isActive('/founder')}>Founder Dr. Awdhesh Singh</SubMenuLink>
                <SubMenuLink to="/dr-mangal-singh" $active={isActive('/founder')}> Dr. Mangal Singh</SubMenuLink>
                <SubMenuLink to="/dr-shailendra-kumar-singh" $active={isActive('/founder')}> Dr. Shailedra Kumar Singh</SubMenuLink>
                <SubMenuLink to="" $active={isActive('/founder')}>Dr. Ram Pal Singh</SubMenuLink>
                <SubMenuLink to="" $active={isActive('/founder')}>Mr. Vinod Kumar Sharma</SubMenuLink>
                <SubMenuLink to="" $active={isActive('/founder')}>Mr Sunil Kumar Singh</SubMenuLink>
              </SubMenu>
            )}
          </div>

          <div>
            <MobileNavLink as="div" onClick={() => toggleSubMenu('documents')}>
              Documents and Literature {openSubMenu === 'documents' ? '−' : '+'}
            </MobileNavLink>
            {openSubMenu === 'documents' && (
              <SubMenu>
                <SubMenuLink to="" $active={isActive('/books')}>Books</SubMenuLink>
              </SubMenu>
            )}
          </div>

          <div>
            <MobileNavLink as="div" onClick={() => toggleSubMenu('media')}>
              Media Resources {openSubMenu === 'media' ? '−' : '+'}
            </MobileNavLink>
            {openSubMenu === 'media' && (
              <SubMenu>
                <SubMenuLink to="" $active={isActive('/in-media')}>In Media</SubMenuLink>
                <SubMenuLink to="" $active={isActive('/speeches')}>Speeches</SubMenuLink>
                <SubMenuLink to="" $active={isActive('/interviews')}>Interviews</SubMenuLink>
                <SubMenuLink to="" $active={isActive('/photo-gallery')}>Photo Gallery</SubMenuLink>
                <SubMenuLink to="" $active={isActive('/video-gallery')}>Video Gallery</SubMenuLink>
              </SubMenu>
            )}
          </div>
        </MobileMenu>
      </NavbarContainer>
    </NavbarWrapper>
  );
};

export default Navbar;

// Updated styled components with active state
const NavLink = styled(Link)`
  color: #333;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s;
  padding: 0.0rem 1rem;
  position: relative;

  &:hover {
    color: #000;
  }

  ${({ $active }) => $active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 1rem;
      right: 1rem;
      height: 2px;
      background-color: #3498db;
      transform: scaleX(1);
      transition: transform 0.3s ease;
    }
  `}

  img {
    height: 90px;
   paddding-top:0;
   paddding-bottom:0;
    left: 10px;
  }

  span {
    margin-left: 90px;
    font-weight: 700;
    color: green;
  }

  @media (max-width: 768px) {
    padding: 0.3rem 0.3rem;

    img {
      height: 60px;
    }

    span {
      margin-left: 68px;
      font-size: 25px;
    }
  }
`;

const JoinButton = styled(Link)`
  background-color: #004AAD;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: background-color 0.3s;
  position: relative;

  &:hover {
    background-color: #2563eb;
  }

  ${({ $active }) => $active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 1.5rem;
      right: 1.5rem;
      height: 2px;
      background-color: white;
    }
  `}
`;

const DonateButton = styled(Link)`
  background-color: #ff5500ff;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  text-decoration: none;
  transition: background-color 0.3s;
  position: relative;

  &:hover {
    background-color: #dc2626;
  }

  ${({ $active }) => $active && `
    &::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 1.5rem;
      right: 1.5rem;
      height: 2px;
      background-color: white;
    }
  `}
`;

const DropdownSubLink = styled(Link)`
  display: block;
  padding: 0.25rem 0;
  color: ${({ $active }) => $active ? '#3b82f6' : '#666'};
  text-decoration: none;
  transition: color 0.3s;
  font-size: 0.875rem;
  font-weight: ${({ $active }) => $active ? '600' : 'normal'};

  &:hover {
    color: #3b82f6;
  }
`;

const MobileNavLink = styled(Link)`
  display: block;
  padding: 0.75rem 0;
  padding-left:10px;
  color: ${({ $active }) => $active ? '#3498db' : '#333'};
  font-weight: ${({ $active }) => $active ? '600' : '500'};
  text-decoration: none;
  border-bottom: 1px solid #eee;
  position: relative;

  ${({ $active }) => $active && `
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      height: 60%;
      width: 3px;
      background-color: #3498db;
    }
  `}
`;

const SubMenuLink = styled(Link)`
  display: block;
  padding: 0.5rem 0;
  color: ${({ $active }) => $active ? '#3498db' : '#666'};
  text-decoration: none;
  font-weight: ${({ $active }) => $active ? '600' : 'normal'};

  &:hover {
    color: #000;
  }
`;

// Rest of the styled components remain the same as in your original code
const NavbarWrapper = styled.div`
margin-bottom:70px;
padding-top: 0;
padding-bottom:0;
  position: relative; 
  height: ${({ navbarHeight }) => navbarHeight}px; 
  @media (max-width: 700px){
    margin-bottom: 53px;
  }
`;

const NavbarContainer = styled.nav`
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: fixed;
  z-index: 1000;
  width: 100%;
  top: 0;
  left: 0;
`;

const TopRow = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.0rem 2rem;
  border-bottom: 1px solid #eee;
  font-size: 12px;

  @media (max-width: 768px) {
    padding: 10px 10px;
    font-size: 10px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-left: 2rem;

  a {
    color: #555;
    transition: color 0.3s;
    font-size:20px;

    &:hover {
      color: #000;
    }
  }
`;

const MainNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: #333;
  font-weight: 500;
  padding: 0.5rem 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 2rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0.375rem;
  padding: 1rem;
  width: 1000px;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  z-index: 1001; 
  align-items: flex-start;
  justify-content: space-between;
`;

const DropdownLink = styled.a`
  display: block;
  padding: 0.0rem 0;
  color: #333;
  text-decoration: none;
  transition: color 0.3s;
  font-weight: 600;
  border-bottom: 2px solid brown;

  &:hover {
    color: #3b82f6;
  }
`;

const DropdownSubmenu = styled.div`
  padding-left: 1rem;
  margin-top: 0.25rem;
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 999;
`;

const SubMenu = styled.div`
  padding-left: 1rem;
  margin-top: 0.5rem;
`;