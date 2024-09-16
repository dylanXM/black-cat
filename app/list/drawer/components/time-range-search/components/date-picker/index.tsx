import React from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { TypeCurrentIndex } from '../../hooks';
import { TimeRange } from '@/store/actions/search';
import { TimeRangeSearchProps } from '../..';

interface DatePickerProps extends TimeRangeSearchProps {
  visible: boolean;
  closeDatePicker: (cb?: () => void) => void;
  startDate: Date;
  endDate: Date;
  currentIndex: TypeCurrentIndex;
  onChangeStartDate: (date: Date) => void;
  onChangeEndDate: (date: Date) => void;
}

export default function DatePicker({
  visible,
  closeDatePicker,
  startDate,
  endDate,
  currentIndex,
  onChangeStartDate,
  onChangeEndDate,
  handleTimeRangeChange,
}: DatePickerProps) {
  const today = new Date();
  const value = currentIndex === 'from' ? startDate : endDate;
  const minimumDate = currentIndex === 'from' ? today : startDate;

  const handleConfirm = (date: Date) => {
    let timeRange: Partial<TimeRange> = {};
    if (currentIndex === 'from') {
      closeDatePicker(() => onChangeStartDate(date));
      timeRange['start'] = String(date.getTime());
      timeRange = {
        start: String(date.getTime()),
        end: endDate.getTime() < date.getTime() ?  String(date.getTime()) : String(endDate.getTime()),
      };
    } else {
      timeRange = {
        start: String(startDate.getTime()),
        end: String(date.getTime()),
      };
      closeDatePicker(() => onChangeEndDate(date));
      timeRange['end'] = String(date.getTime());
    }
    // 设置搜索条件
    handleTimeRangeChange(timeRange as TimeRange);
  };

  return (
    <>
      <DateTimePickerModal
        minimumDate={minimumDate || today}
        isVisible={visible}
        mode="date"
        date={value}
        onConfirm={handleConfirm}
        onCancel={closeDatePicker}
      />
    </>
  );
}