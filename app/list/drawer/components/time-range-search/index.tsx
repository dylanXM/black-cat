import { timeRangeOptions } from '@/store/actions/search';
import { useEffect, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import DatePicker from './components/date-picker';
import SvgDateFrom from '@/components/svgs/DateFrom';
import SvgDateTo from '@/components/svgs/DateTo';
import { useDatePicker } from './hooks';
import { formatDateToDay } from '@/common/utils/format-time';
import { Subject } from 'rxjs';
import { TypeHandleTimeRangeChange } from '../..';
import { color_complement, color_complement_light, color_primary, color_primary_dark } from '@/constants/Colors';

export const timeRangeSearchSubject$ = new Subject();

const timeRangeOptionsLength = timeRangeOptions.length;

interface TimeRangeSearchProps {
  handleTimeRangeChange: TypeHandleTimeRangeChange;
}

export default function TimeRangeSearch({ handleTimeRangeChange }: TimeRangeSearchProps) {
  const [activeKey, setActiveKey] = useState<string>('');

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
    if (key === String(timeRangeOptions.length)) {
      handleTimeRangeChange({
        start: String(startDate.getTime()),
        end: String(endDate.getTime()),
      });
    }

    if (key !== String(timeRangeOptions.length)) {
      clearCurrentIndex();
      const { value } = timeRangeOptions[Number(key)];
      // 设置搜索条件
      handleTimeRangeChange({
        start: String(isSameKey ? '' : value.start),
        end: String(isSameKey ? '' : value.end),
      });
    }
  };

  useEffect(() => {
    const subscription = timeRangeSearchSubject$.subscribe(() => {
      setActiveKey('');
    });
    return () => {
      subscription.unsubscribe();
    }
  }, []);

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
              <SvgDateFrom style={[styles.pickerIcon, { fill: color_complement }]} />
              <TouchableOpacity onPress={showStartDatePicker}>
                <Text style={[styles.pickerRes, currentIndex === 'from' && styles.activePickerRes]}>
                  {formatDateToDay(startDate)}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.pickerDivider}>-</Text>
            <View style={styles.picker}>
              <SvgDateTo style={[styles.pickerIcon, { fill: color_complement }]} />
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
    backgroundColor: color_complement_light,
  },
  activeText: {
    color: color_primary_dark,
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
    color: color_primary,
  },
  pickerRes: {
    color: color_primary,
  },
  activePickerRes: {
    backgroundColor: color_complement,
  },
});