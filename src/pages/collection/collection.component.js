import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.Component";
import { selectCollection } from "../../redux/selectors/shop.selectors";

const Collection = ({ collection, match }) => {
  console.log(collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h1 className="title">{title}</h1>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
// const mapStateToProps = (state, ownProps) => ({
//   collection: state.shop.shopData.filter(
//     (item) => item.routeName === ownProps.match.params.collectionId
//   ),
// });

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};
export default connect(mapStateToProps)(Collection);
