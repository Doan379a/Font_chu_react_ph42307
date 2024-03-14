import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Modal,
  Image,
} from 'react-native';
import React, {useState} from 'react';

const Bai1 = () => {
  const [so1, setso1] = useState('');
  const [so2, setso2] = useState('');
  const [ketqua, setketqua] = useState('');
  const [modal, setmodal] = useState(false);
  const [modal2, setmodal2] = useState(false);

  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20}}>Máy tính điện tử</Text>
        <Text style={{}}>Số học</Text>
        <Text style={{fontSize: 20, textAlign: 'center', margin: 20}}>
          Kết quả: {ketqua}
        </Text>
      </View>
      <TextInput
        style={{borderWidth: 1, margin: 20}}
        placeholder="Nhập số thứ nhất"
        onChangeText={text => setso1(text)}
      />
      <TextInput
        style={{borderWidth: 1, margin: 20}}
        placeholder="Nhập số thứ hai"
        onChangeText={text => setso2(text)}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Button
          title="+"
          onPress={() => {
            setketqua((Number(so1) + Number(so2)).toString());
          }}
        />
        <Button
          title="-"
          onPress={() =>
            Alert.alert('Kết quả', (Number(so1) - Number(so2)).toString())
          }
        />
        <Button
          title="*"
          onPress={() => console.log('Kết quả:', Number(so1) * Number(so2))}
        />
        <Button title="/" onPress={() => setmodal(true)} />
      </View>

      <Modal animationType="slide" transparent={true} visible={modal}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              height: 300,
              width: 300,
            }}>
            <Text>Kết quả: {Number(so1) / Number(so2)}</Text>
            <Button title="đóng" onPress={() => setmodal(false)} />
          </View>
        </View>
      </Modal>
      <View style={{margin: 20}}>
        <Button title="profile" onPress={() => setmodal2(true)} />
      </View>
      <Modal animationType="slide" transparent={true} visible={modal2}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              height: 400,
              width: '100%',
            }}>
            <Image source={require('./ao2.jpg')} style={{height: 300}} />
            <Text
              style={{fontSize: 20, backgroundColor: 'green', color: 'black'}}>
              do the doan
            </Text>
          </View>
          <Button title="đóng" onPress={() => setmodal2(false)} />
        </View>
      </Modal>
    </View>
  );
};

export default Bai1;

const styles = StyleSheet.create({});
