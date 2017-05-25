import React from "react";
import {
  Features,
  StyledFeature,
  FeatureIcon,
  FeatureText,
  Tagline,
  GreyWrapper,
  FeaturesTitle,
} from "../../styles/home";

const HomePageFeatures = () => (
  <GreyWrapper>
    <Features>

      <StyledFeature>
        <FeaturesTitle>
          Features
        </FeaturesTitle>
        <FeatureIcon className="fa fa-feed" />
        <Tagline>Discover</Tagline>
        <FeatureText>
          Discover new RSS feeds from our wide library of sources
        </FeatureText>
      </StyledFeature>

      <StyledFeature>
        <FeatureIcon className="fa fa-calendar-check-o" />
        <Tagline>Subscriptions</Tagline>
        <FeatureText>
          Keep up to date with the most recent articles
        </FeatureText>
      </StyledFeature>

      <StyledFeature>
        <FeatureIcon className="fa fa-history" />
        <Tagline>Save</Tagline>
        <FeatureText>
          Easily save articles to be read at a later time
        </FeatureText>
      </StyledFeature>

      <StyledFeature>
        <FeatureIcon className="fa fa-folder-open-o" />
        <Tagline>Collections</Tagline>
        <FeatureText>
          Create collections to follow and organize RSS feeds
        </FeatureText>
      </StyledFeature>

    </Features>
  </GreyWrapper>
);

export default HomePageFeatures;
