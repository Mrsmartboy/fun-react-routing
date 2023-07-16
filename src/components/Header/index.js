import {Link} from 'react-router-dom'

import {NavContainer,NavListContainer,NavLogoContainer,NavLogo,NavHead,NavItemsContainer,NavItem} from './styled'

const Header=()=>(
    <NavContainer>
        <NavListContainer>
            <NavLogoContainer>
                <NavLogo src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png" alt="wave"/>
                <NavHead>Wave</NavHead>
        </NavLogoContainer>
        <NavItemsContainer>
           <Link to="/">
           <NavItem>Home</NavItem>
           </Link>
           <Link to="/about">
           <NavItem>About</NavItem>
           </Link>
           <Link to="/contact">
           <NavItem>Contact</NavItem>
           </Link>
        </NavItemsContainer>
        </NavListContainer>
    </NavContainer>

)

export default Header