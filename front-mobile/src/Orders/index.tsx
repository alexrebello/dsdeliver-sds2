import { useIsFocused, useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Image, StyleSheet, Text, ScrollView, Alert, View } from "react-native";
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { fetchOrders } from '../api';
import Headers from '../Header'
import OrderCard from '../OrderCard'
import { Order } from '../types';

function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const fetchData = () => {
    setIsLoading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert("Erro ao buscar pedidos!"))
      .finally(()=> setIsLoading(false))
  }

  useEffect(()=>{
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);
  
  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', {
      order
    });
  }

  return (
    <>
    <Headers></Headers>
    <ScrollView style={styles.container}>
      {isLoading ? (
        <View style={styles.container2}>
          <Text style={styles.header}> Carregando Pedidos ... </Text>
        </View>
        
      ):(
        orders.map(order => (
          <TouchableWithoutFeedback 
            key={order.id} 
            onPress={() => handleOnPress(order)}
          >
            <OrderCard order={order}></OrderCard>  
          </TouchableWithoutFeedback>
        ))
      )}
      
    </ScrollView>
    </>
  );
}

const styles= StyleSheet.create({
  container: {
    paddingRight: '5%',
    paddingLeft: '5%'
  },
  container2: {
    marginTop: '10%',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    padding: 15,
    backgroundColor: '#FFF',
    shadowOpacity: 0.25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 20,
    borderRadius: 10,
    elevation: 5
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: 25,
    letterSpacing: -0.24,
    color: '#263238',
    fontFamily: 'OpenSans_700Bold'
  }
});

export default Orders;