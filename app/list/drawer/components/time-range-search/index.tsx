import { timeRangeOptions } from '@/store/actions/search';
import { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import DatePicker from './components/date-picker';
import SvgDateFrom from '@/components/svgs/DateFrom';
import SvgDateTo from '@/components/svgs/DateTo';
import { useDatePicker } from './hooks';
import { formatDateToDay } from '@/common/utils/format-time';

const timeRangeOptionsLength = timeRangeOptions.length;

export default function TimeRangeSearch() {
  const [activeKey, setActiveKey] = useState<string>('');
  const dispatch = useDispatch();

  const {
    currentIndex,
    showEndDatePicker,
    showStartDatePicker,
    clearCurrentIndex,
    closeDatepicker,
    datePickerVisible,
    startDate,
    endDate,
    onChangeStartDate,
    onChangeEndDate,
  } = useDatePicker();

  const handlePress = (key: string) => {
    const isSameKey = activeKey === key;
    // 处理点击事件设置activeKey，点击已选中的选项取消选中
    setActiveKey((prev) => prev === key ? '' : key);

    // 最后一个选项需要特殊处理，弹出时间选择器
    if (key !== String(timeRangeOptions.length)) {
      clearCurrentIndex();
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
      <DatePicker
        visible={datePickerVisible}
        closeDatePicker={closeDatepicker}
        startDate={startDate}
        endDate={endDate}
        currentIndex={currentIndex}
        onChangeStartDate={onChangeStartDate}
        onChangeEndDate={onChangeEndDate}
      />
      {/* 条件渲染日期选择器 */}
      {activeKey === String(timeRangeOptions.length) && (
        <View style={styles.datePickerContainer}>
          <View style={styles.triangle} />
          <View style={styles.pickerRange}>
            <View style={styles.picker}>
              <SvgDateFrom style={[styles.pickerIcon, { fill: '#D5EF7F' }]} />
              <TouchableOpacity onPress={showStartDatePicker}>
                <Text style={[styles.pickerRes, currentIndex === 'from' && styles.activePickerRes]}>
                  {formatDateToDay(startDate)}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.pickerDivider}>-</Text>
            <View style={styles.picker}>
              <SvgDateTo style={[styles.pickerIcon, { fill: '#D5EF7F' }]} />
              <TouchableOpacity onPress={showEndDatePicker}>
                <Text style={[styles.pickerRes, currentIndex === 'to' && styles.activePickerRes]}>
                {formatDateToDay(endDate)}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
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
  },
  datePickerContainer: {
    marginBottom: 8,
    width: '100%',
  },
  // 三角形
  triangle: {
    marginLeft: 20,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#fff',
  },
  pickerRange: {
    marginTop: -1,
    backgroundColor: '#fff',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  picker: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerIcon: {
    width: 12,
    height: 12,
    marginRight: 6,
  },
  pickerDivider: {
    color: '#8560A9',
  },
  pickerRes: {
    color: '#8560A9',
  },
  activePickerRes: {
    backgroundColor: '#D5EF7F',
  },
});