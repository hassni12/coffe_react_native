import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CartScreen from '../screens/cart-screen';
import FavoritesScreeen from '../screens/favorites-screeen';
import HomeScreen from '../screens/home-screen';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OrderHistorySection from '../screens/order-history-section';
import {COLORS} from '../theme/theme';
import {BlurView} from '@react-native-community/blur';
import CustomIcon from '../components/CustomIcon';

const TabNavigators = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => {
          return <BlurView overlayColor="" blurAmount={15} />;
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <CustomIcon
              size={25}
              name="home"
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <CustomIcon
              size={25}
              name="cart"
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="History"
        component={OrderHistorySection}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <CustomIcon
              size={25}
              name="bell"
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}></Tab.Screen>
      <Tab.Screen
        name="Favorites"
        component={FavoritesScreeen}
        options={{
          tabBarIcon: ({focused, size, color}) => (
            <CustomIcon
              size={25}
              name="like"
              color={
                focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex
              }
            />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default TabNavigators;

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopColor: 'transparent',
    height: 80,
    position: 'absolute',
    elevation: 0,
    shadowOpacity: 0,
    shadowRadius: 0,
  },
  blurViewStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
