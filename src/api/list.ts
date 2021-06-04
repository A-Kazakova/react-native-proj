import axios from 'axios';

import { ListItem, GetListItemRequest } from 'models/List';
import { Endpoints } from './endpoints';

export const fetchList = async (page = 1, limit = 10): Promise<ListItem[]> => {
  try {
    const { data } = await axios.get(`${Endpoints.LIST}?page=${page}&limit=${limit}`);

    return data;
  } catch (error) {
    const {
      response: {
        data: { message },
      },
    } = error;
    throw new Error(`${message}`);
  }
};

export const fetchListItem = async ({ id }: GetListItemRequest): Promise<ListItem> => {
  try {
    const { data } = await axios.get(`${Endpoints.LIST}/${id}`);

    return data;
  } catch (error) {
    const {
      response: {
        data: { message },
      },
    } = error;
    throw new Error(`${message}`);
  }
};
