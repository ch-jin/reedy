import React from "react";
import { StyledItemBox } from "../../styles/collection";

const CollectionItem = ({ collection }) => {
  return (
    <StyledItemBox>
      {collection.title}
    </StyledItemBox>
  );
};

export default CollectionItem;