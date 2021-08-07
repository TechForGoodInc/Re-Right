import React from 'react';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import colors from '../../config/colors';

export default function HomeDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props}>
                <DrawerItem label="Test" style={{backgroundColor: colors.black}}/>
            </DrawerItemList>
        </DrawerContentScrollView>
    )
}