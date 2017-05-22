import React from "react";
import CollectionItem from "./CollectionItem";
import { StyledCollectionWrapper } from "../../styles/collection";

const CollectionList = ({ collections }) => (
  <StyledCollectionWrapper>
    {collections.map(collection => (
      <CollectionItem
        key={"collection" + collection.id}
        collection={collection}
      />
    ))}

  </StyledCollectionWrapper>
);

export default CollectionList;
