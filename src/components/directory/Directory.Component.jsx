import React from "react";
import MenuItem from "../menu-item/Menu-Item.Component";
import "./Directory.Styles.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/selectors/directory.selectors";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, size, linkUrl }) => (
        <MenuItem
          key={id}
          title={title}
          imageUrl={imageUrl}
          size={size}
          linkUrl={linkUrl}
        />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
