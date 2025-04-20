import { Item } from '../config/types/Product.types';

export type RootStackParamList = {
    Login: undefined;
    Home: undefined;
    Menu: undefined; // drawer screen
    Cart: undefined;
    ItemDetail: { item: Item };
};