import { useCallback, useState } from 'react';

export type TypeCurrentIndex = 'from' | 'to' | '';

export function useDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [currentIndex, setCurrentIndex] = useState<TypeCurrentIndex>('');
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const onChangeStartDate = useCallback((selectedDate: Date) => {
    const currentDate = selectedDate || startDate;
    setStartDate(currentDate);
    setEndDate(currentDate);
  }, []);

  const onChangeEndDate = useCallback((selectedDate: Date) => {
    const currentDate = selectedDate || endDate;
    setEndDate(currentDate);
  }, []);

  const showStartDatePicker = useCallback(() => {
    setCurrentIndex('from');
    setDatePickerVisible(true);
  }, []);

  const showEndDatePicker = useCallback(() => {
    setCurrentIndex('to');
    setDatePickerVisible(true);
  }, []);

  const closeDatepicker = useCallback(() => {
    setDatePickerVisible(false);
  }, []);

  const clearCurrentIndex = useCallback(() => {
    setCurrentIndex('');
  }, []);

  return {
    startDate,
    endDate,
    currentIndex,
    datePickerVisible,
    onChangeStartDate,
    onChangeEndDate,
    showStartDatePicker,
    showEndDatePicker,
    closeDatepicker,
    clearCurrentIndex,
  }
}