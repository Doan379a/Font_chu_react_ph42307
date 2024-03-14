import {
  Image,
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import jestConfig from '../jest.config';

const Bai3_lab5 = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />
        <ImageBackground
          source={{
            uri: 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-7-1024x1024.jpg?tr=dpr-2,w-675',
          }}
          style={{height: 350, width: '100%'}}></ImageBackground>

        <View style={{flex: 5}}>
          <View
            style={{
              flexDirection: 'row',
              // justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 23,
                paddingHorizontal: 10,
                fontFamily: 'DancingScript-VariableFont_wght',
                color: 'black',
              }}>
              _ Pù Luông - Thanh Hóa
            </Text>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=48&id=8ggStxqyboK5&format=png',
              }}
              style={{height: 20, width: 20, marginStart: 10}}
            />
            <Text>5.0</Text>
          </View>
          <View
            style={{
              position: 'absolute',
              end: 10,
              top: -40,
              backgroundColor: '#f0f0f5',
              borderRadius: 50,
              padding: 10,
            }}>
            <Image
              source={{
                uri: 'https://img.icons8.com/?size=48&id=19411&format=png',
              }}
              style={{height: 30, width: 30}}
            />
          </View>

          <ScrollView
            style={{
              // flexDirection: 'row',
              // paddingHorizontal: 20,
              // justifyContent: 'space-around',
              marginTop: 10,
              marginBottom: 5,
              // backgroundColor: 'red',
              height: 80,
            }}
            showsVerticalScrollIndicator={false}
            horizontal>
            <Image
              style={{width: 100, height: 100, marginHorizontal: 10}}
              source={{
                uri: 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-6-819x1024.jpg?tr=dpr-2,w-675',
              }}
            />
            <Image
              style={{width: 100, height: 100, marginEnd: 10}}
              source={{
                uri: 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-8-1024x1024.jpg?tr=dpr-2,w-675',
              }}
            />
            <Image
              style={{width: 100, height: 100, marginEnd: 10}}
              source={{
                uri: 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-9-820x1024.jpg?tr=dpr-2,w-675',
              }}
            />
            <Image
              style={{width: 100, height: 100, marginEnd: 10}}
              source={{
                uri: 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-10-853x1024.jpg?tr=dpr-2,w-675',
              }}
            />
            <Image
              style={{width: 100, height: 100, marginEnd: 10}}
              source={{
                uri: 'https://ik.imagekit.io/tvlk/blog/2022/02/dia-diem-du-lich-viet-nam-11-819x1024.jpg?tr=dpr-2,w-675',
              }}
            />
          </ScrollView>
          <View
            style={{
              flex: 2,
              paddingHorizontal: 20,
              justifyContent: 'space-around',
              borderWidth: 1,
              borderTopRightRadius: 10,
              marginHorizontal: 15,
              borderTopLeftRadius: 10,
              borderBottomWidth: 0,
            }}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
              Thông tin chuyến đi
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginBottom: 5,
                fontFamily: 'Montserrat-VariableFont_wght',
              }}>
              Rời Tây Bắc xuôi xuống phía Nam, bạn nhất định phải ghé thăm Pù
              Luông, Thanh Hoá nhé. Nếu nghĩ địa điểm check-in ở Việt Nam chỉ có
              ruộng bậc thang tương tự như Tây Bắc thì bạn đã lầm! Pù Luông xinh
              đẹp và có nhiều cảnh quan đa dạng hơn rất nhiều.
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontFamily: 'Montserrat-VariableFont_wght',
              }}>
              Đầu tiên, chúng ta có thể đến thăm địa điểm này vào những tháng
              giữa hè - khi lúa xanh chỉ vừa lên mạ. Không khí mát mẻ cùng từng
              mảng ruộng xanh trên triền đồi sẽ khiến bạn cảm thấy Pù Luông hoàn
              toàn khác biệt với các nơi khác.
            </Text>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          height: 60,
          backgroundColor: '#33adff',
          // bottom: 0,s
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
          // position: 'absolute',
          borderTopStartRadius: 20,
          borderTopEndRadius: 20,
          flexDirection: 'row',
        }}>
        <Text style={{fontWeight: 'bold', color: 'white', fontSize: 15}}>
          $100/<Text style={{fontSize: 13}}>Ngày</Text>
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            paddingVertical: 10,
            borderRadius: 5,
            paddingHorizontal: 35,
          }}>
          <Text style={{fontWeight: 'bold', color: 'blue'}}>Đặt ngay</Text>
        </TouchableOpacity>
      </View>
    </View>
    // <View
    //   style={{
    //     flex: 1,
    //   }}>
    //   <StatusBar translucent backgroundColor="rgba(0,0,0,0)" />

    //   <ImageBackground
    //     source={{
    //       uri: 'https://file.hstatic.net/1000054905/file/ga-hap-mien-tay_1e1db4c3821347a499c2fd50a6ad7fe9.jpg',
    //     }}
    //     style={{
    //       // height: 500,
    //       flex: 1,
    //       borderTopLeftRadius: 20,
    //       borderTopRightRadius: 20,
    //     }}>
    //     {/* <Image
    //       source={icon.tim2}
    //       style={{right: 50, height: 40, width: 40, top: 10}}
    //     /> */}
    //     <View
    //       //   khung mờ
    //       style={{
    //         // position: 'absolute',
    //         top: 430,
    //         left: 0,
    //         right: 0,
    //         flex: 1,
    //         borderTopLeftRadius: 20,
    //         borderTopRightRadius: 20,
    //         paddingHorizontal: 20,
    //         paddingTop: 20,
    //         height: '45%', // 20% của chiều cao của hình ảnh
    //         // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Màu đen với độ mờ 40%
    //         // backgroundColor: 'gray',
    //       }}>
    //       <View
    //         style={{
    //           flexDirection: 'row',
    //           justifyContent: 'space-between',
    //         }}>
    //         <View>
    //           <Text style={{color: 'red', fontWeight: 'bold', fontSize: 18}}>
    //             đ <Text style={{fontSize: 23}}>69.000-140.000</Text>
    //           </Text>
    //           <Text style={{fontSize: 18, color: 'white'}}>Gà hấp xả</Text>
    //         </View>
    //         <TouchableOpacity style={{}}>
    //           {/* <Image
    //           source={icon.comment}
    //           style={{height: 30, width: 30, justifyContent: 'center'}}
    //         /> */}
    //           <Text style={{fontSize: 13, color: 'white'}}>Liên hệ</Text>
    //         </TouchableOpacity>
    //       </View>
    //       <View
    //         style={{
    //           flexDirection: 'row',
    //           alignItems: 'center',
    //           marginVertical: 11,
    //         }}>
    //         {/* <Image
    //         source={icon.star}
    //         style={{height: 15, width: 15, marginRight: 5}}
    //       /> */}
    //         <Text style={{color: 'white', fontWeight: 'bold'}}>4.5 / 5</Text>
    //       </View>
    //       <Text style={{color: 'white', fontWeight: 'bold'}}>Mô tả: </Text>
    //       <Text
    //         style={{
    //           fontSize: 14,
    //           color: 'white',
    //           fontFamily: 'DancingScript-VariableFont_wght',
    //         }}>
    //         Bánh xèo có vỏ giòn vàng, được làm từ bột gạo, nước cốt dừa, và bột
    //         nghệ. Bên trong bánh xèo có nhân thịt heo, tôm, giá đỗ, và đậu xanh.
    //         Bánh xèo được ăn kèm với rau sống, như xà lách, rau thơm, húng quế,
    //         và nước chấm.
    //       </Text>
    //     </View>
    //     <View
    //       style={{
    //         backgroundColor: '',
    //         // position: 'absolute',
    //         height: 60,
    //         // bottom: '100',
    //         flexDirection: 'row',
    //         justifyContent: 'space-between',
    //         paddingHorizontal: 10,
    //         borderTopEndRadius: 10,
    //         borderTopStartRadius: 10,
    //         alignItems: 'center',
    //       }}>
    //       <Image
    //         style={{color: 'white'}}
    //         source={require('./icons8-heart-48.png')}
    //       />
    //       <TouchableOpacity
    //         style={{
    //           backgroundColor: 'white',
    //           paddingHorizontal: 60,
    //           borderRadius: 10,
    //           paddingVertical: 10,
    //         }}>
    //         <Text style={{color: 'blue', fontFamily: 'AlfaSlabOne-Regular'}}>
    //           Dat ngay
    //         </Text>
    //       </TouchableOpacity>
    //     </View>
    //   </ImageBackground>
    // </View>
  );
};

export default Bai3_lab5;

const styles = StyleSheet.create({});
