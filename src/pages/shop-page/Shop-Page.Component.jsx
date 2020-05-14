import React from "react";
import "./Shop-Page.Styles.scss";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route } from "react-router-dom";
import Collection from "../collection/collection.component";
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route exact path={`${match.path}/:collectionId`} component={Collection} />
  </div>
);

export default ShopPage;
