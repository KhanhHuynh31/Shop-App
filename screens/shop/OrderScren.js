import React from "react";
import { StyleSheet, View, FlatList, Platform , Text} from "react-native";
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButtonCustm from "../../components/UI/HeaderButton";


const OrderScreen = (props) => {
  const orders = useSelector((state) => state.orders.order);
  return (<View>
      <Text>DADA</Text>
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={(itemData) => <Text>{itemData.item.totalAmount}</Text>}
    />
  </View>
  );
};

OrderScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Your Order",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButtonCustm}>
        <Item
          title="menu"
          iconName={Platform.OS === "android" ? "md-menu" : "ios-menu"}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default OrderScreen;
