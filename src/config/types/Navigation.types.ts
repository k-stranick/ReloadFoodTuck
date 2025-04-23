import { Item } from './Product.types';

export type DrawerParamList = {
    Login: undefined;
    Home: undefined;
    Menu: { screen: string };
    Cart: undefined;
};

export type MenuStackParamList = {
    MenuScreen: undefined;
    ItemDetailScreen: { item: Item };
};
