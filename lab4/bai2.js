import React, {useState} from 'react';
import {ScrollView, RefreshControl, StatusBar, View, Text} from 'react-native';

const Bai2_lab4 = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(false);
    setTimeout(() => {
      setRefreshing(false);
      StatusBar.setBarStyle('dark-content');
      // StatusBar.setHidden(true, 'slide');
      StatusBar.setBackgroundColor('blue');

      StatusBar.setTranslucent(false); // Chẳng hạn, thay đổi sang chế độ sáng
    }, 1000); // Giả sử quá trình làm mới mất 2 giây
  };

  return (
    <ScrollView
      style={{flex: 1}}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor="#fff" // Màu mũi tên loading
          title="Đang tải..." // Chữ hiển thị khi đang tải
          titleColor="#fff" // Màu chữ khi đang tải
        />
      }>
      <StatusBar
        backgroundColor="red" // Màu nền của status bar
      />

      <View style={{padding: 20}}>
        <Text>Đây là nội dung của ứng dụng</Text>
      </View>
    </ScrollView>
  );
};

export default Bai2_lab4;
