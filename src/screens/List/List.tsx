import React, {
  memo,
  useEffect,
  useCallback,
  useState,
} from 'react';
import { View, Pressable } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { FlatList, ListRenderItemInfo } from 'react-native';
import { ListItem } from 'models/List';
import {
  fetchListRequest,
  fetchListItemRequest,
  clearList,
  clearCurrentListItem,
} from '../../store/list/actions';

import ListItemComponent from 'components/ListItem';
import Modal from 'components/Modal';

const List = (): JSX.Element => {
  const dispatch = useDispatch();
  const [modalState, setModalState] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const list = useSelector<RootState, ListItem[]>((state) => state.list.list);
  const currentItem = useSelector<RootState, ListItem | null>((state) => state?.list?.curretnItem ?? null);
  const isLoading = useSelector<RootState, boolean>((state) => state.list.isLoading);


  const handleListItemClick = (id: number) => {
    dispatch(fetchListItemRequest({ id }))
    setModalState(true);
  }

  const closeModal = () => {
    setModalState(false);
    dispatch(clearCurrentListItem());
  }

  const getData = (pageNum: number) => {
    dispatch(fetchListRequest(pageNum));
  }

  const onRefresh = () => {
      setPage(1);
      getData(page);
      dispatch(clearList());
  }

  const renderKeyExtractor = useCallback((item) => item.id, []);

  useEffect(
    () => {
      getData(page);
    },
    [page],
  );

  const renderItem = useCallback(({ item }: ListRenderItemInfo<ListItem>): JSX.Element => (
    <Pressable onPress={() => handleListItemClick(item.id)}>
      <ListItemComponent {...item} />
    </Pressable>

  ), []);

  const handleListEnd = (): void => {
    setPage((state) => state + 1);
    getData(page);
  };

  return (
    <View>
      <Modal
        isOpen={modalState}
        close={closeModal}
        item={currentItem}
      />
        <FlatList
          data={list}
          renderItem={renderItem}
          onEndReachedThreshold={1}
          onEndReached={handleListEnd}
          refreshing={isLoading}
          keyExtractor={renderKeyExtractor}
          onRefresh={onRefresh}
        />
    </View>
  );
};

export default memo(List);
