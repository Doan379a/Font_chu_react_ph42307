import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';

const Bai2_lab5 = () => {
  const [isSelected, setSelection] = useState(true);
  const [hienpassword, sethienpassword] = useState(false);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ImageBackground
          source={{
            uri: 'https://img3.thuthuatphanmem.vn/uploads/2019/08/13/anh-4k-rat-dep-dung-cho-dien-thoai-cam-trai-trong-rung_052936510.jpg',
          }}
          style={{flex: 1, paddingHorizontal: 20}}>
          <View style={{marginBottom: 61.5}}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 10,
                marginTop: 20,
              }}>
              Hi Welcome Back!
            </Text>
            <Text style={{fontSize: 15, color: 'white', marginBottom: 10}}>
              Hello again you have been missed!
            </Text>
            <Image
              source={{
                uri: 'https://th.bing.com/th/id/OIP.UHbamC08Q2Aa6GbBqnJilAHaFk?w=210&h=180&c=7&r=0&o=5&pid=1.7',
              }}
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
              <Text style={{fontSize: 14, marginBottom: 5, color: 'white'}}>
                Email
              </Text>
              <View></View>
              <TextInput
                placeholder="nhap email"
                placeholderTextColor={'white'}
                style={{
                  borderWidth: 1,
                  borderRadius: 10,
                  padding: 10,
                  borderColor: 'white',
                }}
              />
            </View>
            <View>
              <Text style={{fontSize: 14, marginBottom: 5, color: 'white'}}>
                Password
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  // backgroundColor: 'red',
                  alignItems: 'center',
                }}>
                <TextInput
                  placeholder="nhap password"
                  placeholderTextColor={'white'}
                  style={{
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    borderColor: 'white',
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
                      source={require('../lab4/view.png')}
                      style={{
                        height: 25,
                        width: 25,
                        // position: 'absolute',
                        end: 40,
                        tintColor: 'white',
                      }}
                      // resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={require('../lab4/hidden.png')}
                      style={{
                        height: 25,
                        width: 25,
                        // position: 'absolute',
                        end: 40,
                        tintColor: 'white',
                      }}
                      // resizeMode="contain"
                    />
                  )}
                </TouchableOpacity>
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                top: -10,
                marginStart: 19,
                marginTop: 5,
              }}>
              <CheckBox value={isSelected} onValueChange={setSelection} />
              <Text style={{color: 'black', fontWeight: 'bold'}}>
                Remmember
              </Text>
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
                borderColor: 'white',
                width: 50,

                flex: 1,
              }}
            />
            <Text style={{paddingHorizontal: 10, color: 'white'}}>
              Or Login with
            </Text>
            <View
              style={{
                borderBottomWidth: 1.5,
                borderColor: 'white',
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
                borderColor: 'white',
                borderRadius: 5,
                marginEnd: 10,
              }}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/?size=48&id=118497&format=png',
                }}
                style={{height: 40, width: 40}}
              />
              <Text style={{color: 'white'}}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                paddingHorizontal: 50,
                borderRadius: 5,
                paddingVertical: 2,
                borderColor: 'white',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: 'https://img.icons8.com/?size=48&id=V5cGWnc9R4xj&format=png',
                }}
                style={{height: 35, width: 35}}
              />
              <Text style={{color: 'white'}}>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{color: 'white'}}>Don't have an account?</Text>
            <Text
              style={{
                marginStart: 10,
                color: 'red',
                borderBottomWidth: 1,
                borderColor: 'red',
              }}>
              Register
            </Text>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Bai2_lab5;

const styles = StyleSheet.create({});
