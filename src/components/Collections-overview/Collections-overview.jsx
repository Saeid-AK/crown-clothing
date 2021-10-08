import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPrev from '../Collection-Prev/Collection-Prev';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

import './Collections-overview.scss';

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPrev key={id} {...otherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
