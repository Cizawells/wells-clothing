import React, { Component } from "react";
import "./Shop-Page.Styles.scss";
import ShopData from "./shop.data";
import CollectionPreview from "../../components/collection-preview/Collection-Preview.Component";

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(collection => (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
