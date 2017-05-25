import React from "react";
import { Link } from "react-router-dom";
import { ListIcon } from "../../styles/theme";
import { StyledCollectionListItemTitle } from "../../styles/collection";

const CollectionNavItem = ({ path, icon, name, activePath }) => (
  <Link className="no-decoration-color" to={path}>
    <StyledCollectionListItemTitle active={activePath === path}>
      <ListIcon className={`fa ${icon}`} />
      {name}
    </StyledCollectionListItemTitle>
  </Link>
);

export default CollectionNavItem;
