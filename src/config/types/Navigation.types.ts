import { Item } from './Product.types';

export type DrawerParamList = {
    Login: undefined;
    Home: undefined;
    Menu: undefined;
    Cart: undefined;
};

export type MenuStackParamList = {
    MenuScreen: undefined;
    ItemDetailScreen: { item: Item };
};
