import { timeRangeOptions } from '@/store/actions/search';
import { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
const timeRangeOptionsLength = timeRangeOptions.length;

export default function TimeRangeSearch() {
  const [activeKey, setActiveKey] = useState<string>('');
  const [timePickerVisible, setTimePickerVisible] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handlePress = (key: string) => {
    const isSameKey = activeKey === key;
    // 处理点击事件设置activeKey，点击已选中的选项取消选中
    setActiveKey((prev) => prev === key ? '' : key);

    // 最后一个选项需要特殊处理，弹出时间选择器
    if (key === String(timeRangeOptions.length)) {
      setTimePickerVisible(!timePickerVisible);
    } else {
      setTimePickerVisible(false);
      const { value } = timeRangeOptions[Number(key)];
      // 设置搜索条件
      dispatch({
        type: 'SET_TIME_RANGE',
        payload: {
          timeRange: {
            start: isSameKey ? '' : value.start,
            end: isSameKey ? '' : value.end,
          }
        }
      });
    }

  };

  return (
    <>
      {
        timeRangeOptions?.map((option, index) => (
          <TouchableOpacity
            key={option.label}
            onPress={() => handlePress(String(index))}
            style={[styles.container, activeKey === String(index) && styles.activeContainer]}
          >
            <Text
              style={[styles.text, activeKey === String(index) && styles.activeText]}
            >
              {option.label}
            </Text>
          </TouchableOpacity>
        ))
      }
      <TouchableOpacity
        style={[styles.container, activeKey === String(timeRangeOptionsLength) && styles.activeContainer]}
      >
        <Text
          style={[styles.text, activeKey === String(timeRangeOptionsLength) && styles.activeText]}
          onPress={() => handlePress(String(timeRangeOptionsLength))}
        >
          LATER
        </Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    justifyContent: 'center',
    marginBottom: 8,
    marginRight: 8,
    borderRadius: 12,
  },
  text: {
    fontSize: 14,
    color: '#E8E8E8',
  },
  activeContainer: {
    backgroundColor: '#E5F7A9',
  },
  activeText: {
    color: '#453257',
  }
});