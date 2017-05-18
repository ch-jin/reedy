import React from "react";
import CollectionItem from "./collection_item";
import { StyledCollectionWrapper } from "../../styles/collection";

const CollectionList = props => (
  <StyledCollectionWrapper>
    <CollectionItem />
    <CollectionItem />
  </StyledCollectionWrapper>
);

export default CollectionList;
