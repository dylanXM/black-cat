import React from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { TypeCurrentIndex } from '../../hooks';
import { useDispatch } from 'react-redux';
import { TimeRange } from '@/store/actions/search';

interface DatePickerProps {
  visible: boolean;
  closeDatePicker: () => void;
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
}: DatePickerProps) {
  const today = new Date();
  const value = currentIndex === 'from' ? startDate : endDate;
  const minimumDate = currentIndex === 'from' ? today : startDate;
  const dispatch = useDispatch();

  const handleConfirm = (date: Date) => {
    const timeRange: Partial<TimeRange> = {};
    if (currentIndex === 'from') {
      onChangeStartDate(date);
      timeRange['start'] = String(date.getTime());
    } else {
      onChangeEndDate(date);
      timeRange['end'] = String(date.getTime());
    }
    // 关闭时间选择器
    closeDatePicker();
    // 设置搜索条件
    dispatch({
      type: 'SET_TIME_RANGE',
      payload: { timeRange }
    });
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
  )
}