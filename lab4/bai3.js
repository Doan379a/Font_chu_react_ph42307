import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
import {
  isvalidatepassword,
  isvalidatetendangnhap,
} from '../validate/Validatetion';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
const Bai3_lab4 = props => {
  const [isSelected, setSelection] = useState(true);
  const [hienpassword, sethienpassword] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 20}}>
        <View>
          <View style={{marginBottom: 30}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'black',
                marginBottom: 10,
                marginTop: 20,
              }}>
              Hi Welcome Back!
            </Text>
            <Text style={{fontSize: 15, color: 'black', marginBottom: 10}}>
              Hello again you have been missed!
            </Text>
            <Image
              source={require('./img4.jpg')}
              style={{
                height: 200,
                width: 300,
                borderRadius: 10,
                alignSelf: 'center',
              }}
            />
          </View>
          <View
            style={{
              justifyContent: 'space-evenly',
              height: 280,
              // backgroundColor: 'red',
            }}>
            <View>
              <Text style={{fontSize: 14, marginBottom: 5}}> Email</Text>
              <View></View>
              <TextInput
                placeholder="nhap email"
                style={{borderWidth: 1, borderRadius: 10, padding: 10}}
              />
            </View>
            <View>
              <Text style={{fontSize: 14, marginBottom: 5}}> Password</Text>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  alignItems: 'center',
                }}>
                <TextInput
                  placeholder="nhap password"
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    width: '100%',
                    // backgroundColor: 'yellow',
                  }}
                  secureTextEntry={hienpassword ? false : true}
                />
                <TouchableOpacity
                  onPress={() => {
                    sethienpassword(!hienpassword);
                  }}>
                  {hienpassword ? (
                    <Image
                      source={require('./view.png')}
                      style={{
                        height: 25,
                        width: 25,
                        // position: 'absolute',
                        end: 40,
                      }}
                      // resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={require('./hidden.png')}
                      style={{
                        height: 25,
                        width: 25,
                        // position: 'absolute',
                        end: 40,
                      }}
                      // resizeMode="contain"
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', alignItems: 'center', top: -10}}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
              <Text> Remmember</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingBottom: 30,
              //   backgroundColor: 'pink',
              //   flex:,
            }}>
            <View
              style={{
                borderBottomWidth: 1.5,
                borderColor: 'gray',
                width: 50,
                flex: 1,
              }}
            />
            <Text style={{paddingHorizontal: 10}}>Or Login with</Text>
            <View
              style={{
                borderBottomWidth: 1.5,
                borderColor: 'gray',
                width: 50,
                flex: 1,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              paddingBottom: 30,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                paddingHorizontal: 35,
                alignItems: 'center',
                paddingVertical: 2,
                borderRadius: 5,
                marginEnd: 10,
              }}>
              <Image
                source={require('./icons8-facebook-64.png')}
                style={{height: 40, width: 40}}
              />
              <Text>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                paddingHorizontal: 50,
                borderRadius: 5,
                paddingVertical: 2,
                alignItems: 'center',
              }}>
              <Image
                source={require('./icons8-google-64.png')}
                style={{height: 40, width: 40}}
              />
              <Text>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{}}>Don't have an account?</Text>
            <Text style={{marginStart: 10, color: 'red'}}>Register</Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Bai3_lab4;

const styles = StyleSheet.create({
  chu: {fontSize: 30, fontStyle: 'normal', color: 'black'},
});
