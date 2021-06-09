import React from "react";
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

const MainMenuWrapper = styled.div`
    display:flex;
`

const MenuItem = styled(Link)`
    color:white;
    display:block;
    padding: 8px 16px;
`



const MainMenu = () => (


  <StaticQuery query={graphql`
      {
        allWpMenu(filter: {
            name: {
            eq: "меню 1"
        }
        }) {
            edges {
              node {
                name
                slug
                menuItems {
                  nodes {
                    url
                    label
                    path
                  }
                }
              }
            }
        }
      }
  `} render={props => (



      <MainMenuWrapper className="header-menu-ul">
          {props.allWpMenu.edges[0].node.menuItems.nodes.map(item => (
              <MenuItem className="header-menu-li" to={item.path} key={item.label}>
                  {item.label}
              </MenuItem>
          ))}
      </MainMenuWrapper>
  )} />
);

export default MainMenu;



