<div className="container">
  <div className={classNames("sidebar", { "is-open": isOpen })}>
    <div className="sidebar-header">
      <span color="info" onClick={toggle} style={{ color: "#fff" }}>
        &times;
      </span>
      <h1>Bug Chart</h1>
    </div>
    <div className="side-menu">
      <Nav vertical className="list-unstyled pb-3">
        <NavItem>
          <NavLink tag={Link} to={"/"}>
            <FontAwesomeIcon icon={faNetworkWired} className="mr-2" />
            Dashboard
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink tag={Link} to={"/viewbugs"}>
            <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
            View Bugs
          </NavLink>
        </NavItem>
        {auth.admin && (
          <NavItem>
            <NavLink className="nav-link" to={"/create"}>
              <FontAwesomeIcon icon={faWrench} className="mr-2" />
              Create Bug
            </NavLink>
          </NavItem>
        )}
      </Nav>
      <button onClick={SignOut}>Log out</button>
    </div>
  </div>
</div>;
