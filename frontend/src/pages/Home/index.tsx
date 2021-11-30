import React from 'react';

import Tabs from '../../components/Tab';
import Search from '../Search';
import Favorite from '../Favorite';

export default () => {
  const tabs = [
    {
      label: 'Search',
      component: (<Search />),
    },
    {
      label: 'Favourite',
      component: (<Favorite />),
    },
  ];

  return (
    <Tabs tabs={tabs} />
  );
}
