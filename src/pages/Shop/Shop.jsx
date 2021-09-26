import React from 'react';

import ShopData from './ShopData';
import CollectionPrev from '../../components/Collection-Prev/Collection-Prev';

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: ShopData,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPrev key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
