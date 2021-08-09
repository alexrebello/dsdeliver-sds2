import React from 'react';
import { Image, StyleSheet, Text, ScrollView } from "react-native";
import Headers from '../Header'
import OrderCard from '../OrderCard'

function Orders() {
  
  const handleOnPress = () => {
  }

  return (
    <>
    <Headers></Headers>
    <ScrollView style={styles.container}>
      <OrderCard></OrderCard>
      <OrderCard></OrderCard>
      <OrderCard></OrderCard>
      <OrderCard></OrderCard>
      <OrderCard></OrderCard>
    </ScrollView>
    </>
  );
}

const styles= StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  }
});

export default Orders;