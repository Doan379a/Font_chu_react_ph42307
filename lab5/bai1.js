import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Bai1_lab5 = () => {
  return (
    <ScrollView style={{flex: 1, padding: 10}}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: 'AlfaSlabOne-Regular',
          color: 'black',
        }}>
        8 địa điểm du lịch Việt Nam đẹp hơn cả thiên đường!
      </Text>
      <Text
        style={{
          alignSelf: 'center',
          fontFamily: 'Montserrat-Italic-VariableFont_wght',
          fontSize: 13,
        }}>
        Là một quốc gia đang phát triển nằm bên bờ Thái Bình Dương, Việt Nam sở
        hữu rất nhiều điểm mạnh để phát triển du lịch.
      </Text>
      <Text
        style={{
          fontFamily: 'AlfaSlabOne-Regular',
          fontSize: 25,
          color: 'black',
          marginLeft: 10,
        }}>
        1.Mù Cang Chải - Yên Bái
      </Text>
      <Text
        style={{
          marginHorizontal: 10,
          marginBottom: 20,
          fontSize: 13,
          fontFamily: 'AlfaSlabOne-Regular',
        }}>
        Cách Hà Nội những 300km nhưng các tín đồ du lịch vẫn không thôi mê đắm
        Mù Cang Chải, Yên Bái. Đây là một trong những cái tên nổi bật nhất khi
        người ta muốn ghé thăm, tận hưởng vẻ đẹp của núi rừng Tây Bắc. Không chỉ
        các du khách trong nước, các “thị trấn vàng” ở đây còn thu hút rất nhiều
        tín đồ vi vu bốn phương.
      </Text>
      <Image
        style={{width: 400, height: 200, alignSelf: 'center', marginBottom: 10}}
        source={{
          uri: 'https://i.pinimg.com/736x/8c/91/eb/8c91eba9c17069ab745ac9420b87b72e.jpg',
        }}
      />
      <View>
        <Text
          style={{
            marginHorizontal: 10,
            marginBottom: 20,
            fontSize: 20,
            color: 'black',
            fontFamily: 'DancingScript-VariableFont_wght',
          }}>
          Đến Mù Cang Chải, bạn nên canh chuẩn mùa lúa chín từ tháng 9 đến 10.
          Các địa điểm ngắm “mùa vàng” tuyệt nhất là đồi Móng Ngựa (bản Sáng
          Nhù), xã Tú Lệ, La Pán Tẩn,... Với góc nhìn từ trên cao xuống, thung
          lũng phía dưới mở ra tráng lệ với từng mảng ruộng rực rỡ, kéo dài chạm
          đỉnh trời, xen lẫn các mái nhà nâu đơn sơ và những con suối mơ màng.
        </Text>
        <Text
          style={{
            marginHorizontal: 20,
            marginBottom: 20,
            fontSize: 20,
            fontFamily: 'DancingScript-VariableFont_wght',
          }}>
          Tháng 5 đến tháng 8: Nếu bạn yêu sự lãng mạn và bình yên nơi xứ sở
          ngàn hoa thì tháng 5 đến tháng 8 là một khoảng thời gian đẹp. Bởi vào
          thời điểm này thì những cơn mưa phùn dường như đã chiếm lĩnh Đà Lạt.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Bai1_lab5;

const styles = StyleSheet.create({});
