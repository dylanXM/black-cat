import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import SvgSend from '@/components/svgs/Send';
import SvgCross from '@/components/svgs/Cross';

interface CommentProps {
  handleToggleComment: () => void;
}

export default function Comment({ handleToggleComment }: CommentProps) {

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <SvgCross style={styles.crossIcon} fill="#D5EF7F" onPress={handleToggleComment} />
        <TextInput style={styles.input} placeholder="@Little Prince" />
      </View>
      <TouchableOpacity style={styles.send} activeOpacity={0.8}>
        <SvgSend style={styles.icon} fill="#8560A9" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#8560A9',
  },
  send: {
    width: 56,
    height: 56,
    backgroundColor: '#D5EF7F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 28,
    height: 28,
  },
  crossIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 6,
    paddingRight: 14,
    flex: 1,
  },
  input: {
    height: 36,
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingLeft: 17,
    paddingRight: 17,
    paddingBottom: 7,
    paddingTop: 7,
    flex: 1,
  }
});