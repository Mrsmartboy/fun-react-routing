import styled from 'styled-components'


export const NavContainer= styled.nav`
   display: flex;
   flex-direction: column;

   min-height: 25vh;
   width: 100%;
 
`

export const NavListContainer= styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`

export const NavLogoContainer= styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`

export const NavLogo= styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`

export const NavHead= styled.h1`
   color: #12022f;
   font-size: 15px;
   font-weight: bold;
   
`
export const NavItemsContainer= styled.ul`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   list-style-type: none;
   padding-left: 0px;

`
export const NavItem= styled.li`
   margin-right: 10px;
   text-decoration: none;
   color: #12022f;
   font-size: 15px;
   font-weight: bold;
   cursor: pointer;
`


