import React from "react";
import CollectionPreview from "../../components/collection-preview/Collection-Preview.Component";
import { connect } from "react-redux";
import { selectCollectionsPreview } from "../../redux/selectors/shop.selectors";
import { createStructuredSelector } from "reselect";

import "./collections-overview.styles.scss";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map((collection) => (
      <CollectionPreview
        key={collection.id}
        title={collection.title}
        items={collection.items}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
