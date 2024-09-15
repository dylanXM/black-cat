import { channelOptions, TypeChannel } from '@/store/actions/search';
import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { Subject } from 'rxjs';
import { TypeHandleChannelChange } from '../..';

export const channleSearchSubject$ = new Subject();

interface ChannelSearchProps {
  handleChannelChange: TypeHandleChannelChange;
}

export default function ChannelSearch({ handleChannelChange }: ChannelSearchProps) {
  const [activeKey, setActiveKey] = useState<string>('');

  const handlePress = (key: string) => {
    const isSameKey = activeKey === key;
    // 设置activeKey，点击已选中的选项取消选中
    setActiveKey(isSameKey ? '' : key);

    // 设置搜索条件
    const { value } = channelOptions[Number(key)];
    handleChannelChange(isSameKey ? '' as TypeChannel : value);
  };

  useEffect(() => {
    const subscription = channleSearchSubject$.subscribe(() => {
      setActiveKey('');
    });
    return () => {
      subscription.unsubscribe();
    }
  }, []);

  return (
    <>
      {
        channelOptions?.map((option, index) => (
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    paddingRight: 8,
    marginBottom: 10,
    marginRight: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D3C1E5',
    height: 24,
    justifyContent: 'center',
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