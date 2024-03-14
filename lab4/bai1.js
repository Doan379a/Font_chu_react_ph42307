import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

const Phone = props => {
  let {name, email, phone, url} = props.data;
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        marginVertical: 5,
        justifyContent: 'space-around',
        // borderWidth: 2,
        // borderColor: '#e0e0eb',
      }}>
      <Image
        source={require('../lab3/ao2.jpg')}
        style={{height: 100, width: 100, borderRadius: 50}}
      />
      <View
        style={{
          padding: 20,
          top: -17,
          // justifyContent: 'center',
          alignItems: 'center',
          // backgroundColor: 'yellow',
        }}>
        <Text style={{fontSize: 20, color: 'black'}}>{name}</Text>
        <Text style={{fontSize: 15, color: 'black'}}>{phone}</Text>
      </View>
      <Text style={{fontSize: 20, color: 'green'}}> Call</Text>
    </View>
  );
};

const Bai1_lab4 = props => {
  const [data, setdata] = useState([
    {
      name: 'doando',
      email: 'doan379a@gmail.com',
      phone: '0963696413',
      url: 'asfas',
    },
    {
      name: 'doando',
      email: 'doan379a@gmail.com',
      phone: '0963696413',
      url: 'asfas',
    },
    {
      name: 'doando',
      email: 'doan379a@gmail.com',
      phone: '0963696413',
      url: 'asfas',
    },
    {
      name: 'doando',
      email: 'doan379a@gmail.com',
      phone: '0963696413',
      url: 'asfas',
    },
    {
      name: 'doando',
      email: 'doan379a@gmail.com',
      phone: '0963696413',
      url: 'asfas',
    },
    {
      name: 'doando',
      email: 'doan379a@gmail.com',
      phone: '0963696413',
      url: 'asfas',
    },
    {
      name: 'doando',
      email: 'doan379a@gmail.com',
      phone: '0963696413',
      url: 'asfas',
    },
  ]);
  return (
    <View style={{flex: 1, backgroundColor: ' #c2c2d6'}}>
      <FlatList
        data={data}
        renderItem={({item}) => <Phone data={item} />}
        // keyExtractor={item => item.phone}
      />
    </View>
  );
};

export default Bai1_lab4;

const styles = StyleSheet.create({});
