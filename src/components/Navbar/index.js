import React from "react";
import { Link as LinkR } from "react-router-dom";
import styled,{useTheme} from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";


const Nav = styled.div`
    background-color: ${({ theme }) => theme.bgLight};
    height:80px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    position:sticky;
    top:0;
    z-index:10;
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

const NavbarContainer = styled.div`
    display:flex;
    justify-content:space-between;
    height:60px;
    z-index:1;
    width:100%;
    padding: 0 24px;
    max-width:1100px;
    `;


const NavLogo = styled(LinkR)`
    width:80%;
    padding: 0 6px;
    display:flex;
    justify-self:flex-start;
    cursor:pointer
    text-decoration: none;
    align-items:center;
    @media screen and(max-width:640px){
        padding: 0 0px;
    }
    `;

const MobileIcon = styled.div`
    display: none;
    @media screen and(max-width:768px){
        display:block;
        position:absolute;
        top:0;
        right:0;
        transform: translate(-100%, 50%);
        font-size:1.5rem;
        cursor:pointer;
        color:${({ theme }) => theme.text_primary};
    }
    `;

const Navitems = styled.ul`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    gap:32px;
    list-style:none;

    @media screen and (max-width:768px){
        display:none;
    }
   
`;

const NavLink = styled.a`
    color:${({ theme }) => theme.text_primary};
    font-weight:500;
    cursor:pointer;
    text-decoration:none;
    transition:all 0.2s ease-in-out;
    &:hover{
        color:${({ theme }) => theme.primary};
    }
    `;

const ButtonContainer = styled.div`
    width:100%;
    height:100%;
    padding: 0 6px;
    display: flex;
    align-items: center;
    justify-content:flex-end;
    @media screen and(max-width:768px){
        display: none;
    }
`;


const GitHubButton = styled.div`
border: 1.8px solid ${({ theme }) => theme.primary};
color: ${({ theme }) => theme.primary};
width: max-content;
background-color:transparent;
border-radius:20px;
display:flex;
justify-content:center;
align-items:center;
padding: 0 20px;
font-size:1rem;
font-weight:500;
cursor: pointer;
height:70%;
:hover{
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
}

@media screen and(max-width: 640px){
    font-size: 0.8rem;
}

`;

export const Span = styled.span`
padding: 0 4px;
font-weight:bold;
font-size:18px;
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light};
    transition: all 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
    opacity: ${({ open }) => (open ? "1" : "0")};
    z-index: ${({ open }) => (open ? "1" : "1")};
`;


const MobileMenuLinks = styled(LinkR)`
color: ${({ theme }) => theme.text_primary};
font-weight:500;
cursor:pointer;
text-decoration:none;
transition: all 0.2s ease-in-out;
&:hover{
    color: ${({ theme }) => theme.primary};
}
`;


const Navbar = () => {
    const [Open, setOpen] = React.useState(false);
    const theme = useTheme;
    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <a style={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        marginBottom: '20;',
                        cursor: 'pointer'
                    }}>
                        <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
                    </a>
                </NavLogo>
                <MobileIcon>
                    <FaBars onClick={() => {
                        setOpen(!Open)
                    }} />
                </MobileIcon>
                <Navitems>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#skills">Skills</NavLink>
                    <NavLink href="#experience">Experience</NavLink>
                    <NavLink href="#project">Project</NavLink>
                    <NavLink href="#education">Education</NavLink>

                    <ButtonContainer>
                        <GitHubButton href="https://github.com/HemantPachaury">GitHub Profile</GitHubButton>
                    </ButtonContainer>
                </Navitems>
            </NavbarContainer>
            {Open && (
             <MobileMenu Open={Open}>
                <MobileMenuLinks 
                href="#about" onClick={() => {
                    setOpen(Open);
                }}>About</MobileMenuLinks>
                <MobileMenuLinks href='#skills' onClick={() => {
                    setOpen(Open);
                }}>Skills</MobileMenuLinks>
                <MobileMenuLinks href='#experience' onClick={() => {
                    setOpen(Open);
                }}>Experience</MobileMenuLinks>
                <MobileMenuLinks href='#projects' onClick={() => {
                    setOpen(Open);
                }}>Projects</MobileMenuLinks>
                <MobileMenuLinks href='#education' onClick={() => {
                    setOpen(Open);
                }}>Education</MobileMenuLinks>
                <GitHubButton style={{
                    padding: '10px 16px', 
                    background: "${theme.primary}",
                    color: 'white',
                    width: 'max-content'
                }}
                    href="https://github.com/HemantPachaury" 
                    target="_display">Github Profile</GitHubButton>
                  
            </MobileMenu>
            )
            }
        </Nav>
    )
};

export default Navbar;
