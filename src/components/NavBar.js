import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
  useCurrentUser,
  useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";
import useClickOutsideToggle from "../hooks/useClickOutsideToggle";
import {OverlayTrigger,  Tooltip } from "react-bootstrap";

const NavBar = () => {
  const currentUser = useCurrentUser();
  const setCurrentUser = useSetCurrentUser();

  const { expanded, setExpanded, ref } = useClickOutsideToggle();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setCurrentUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const addPostIcon = (
    <OverlayTrigger
      placement="bottom"
      overlay={<Tooltip>Create post</Tooltip>}
      >
        <NavLink exact
          className={styles.NavLink}
          activeClassName="main-nav-active"
          to="/posts/create"
        >
          <i className="fa-regular fa-pen-to-square"></i>
        </NavLink>
    </OverlayTrigger>
  );
  const loggedInIcons = (
    <>
    <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Feed</Tooltip>}
        >
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/feed"
        >
          <i class="fa-solid fa-rss"></i>
        </NavLink>
      </OverlayTrigger>

      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Liked</Tooltip>}
        >
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/liked"
        >
          <i className="fa-regular fa-star"></i>
        </NavLink>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Sign Out</Tooltip>}
        >
        <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
          <i className="fas fa-sign-out-alt"></i>
        </NavLink>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>My Profile</Tooltip>}
        >
      <NavLink
        className={styles.NavLink}
        to={`/profiles/${currentUser?.profile_id}`}
      >
        <Avatar src={currentUser?.profile_image} height={45} />
      </NavLink>
      </OverlayTrigger>
    </>
  );
  const loggedOutIcons = (
    <>
     <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Sign In</Tooltip>}
        >
        <NavLink
          className={styles.NavLink}
          activeClassName={styles.Active}
          to="/signin"
        >
          <i className="fas fa-sign-in-alt"></i>
        </NavLink>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Sign Up</Tooltip>}
        >
        <NavLink
          to="/signup"
          className={styles.NavLink}
          activeClassName={styles.Active}
        >
          <i className="fas fa-user-plus"></i>
        </NavLink>
      </OverlayTrigger>
    </>
  );

  return (
    <Navbar
      expanded={expanded}
      className={styles.NavBar} 
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink to="/">
          <Navbar.Brand>
            <img src={logo} alt="logo" height="45" />
          </Navbar.Brand>
        </NavLink>
        {currentUser && addPostIcon}
        <Navbar.Toggle
          className="navbar-dark"
          ref={ref}
          onClick={() => setExpanded(!expanded)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center">
          <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip>Home</Tooltip>}
        >
            <NavLink
              exact
              className={styles.NavLink}
              activeClassName={styles.Active}
              to="/"
            >
             <i className="fa-solid fa-house-fire"></i>
            </NavLink>
            </OverlayTrigger>

            {currentUser ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;