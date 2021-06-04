import React, { memo } from 'react';
import { View, Text } from 'react-native';

import { ListItem } from 'models/List';

import styles from './ListItem.style';

function ListItemComponent(item: ListItem) {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>
        {`${item.firstName} ${item.lastName}`}
      </Text>
    </View>
  );
}

export default memo(ListItemComponent);
