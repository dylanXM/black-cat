import { View, StyleSheet, Text } from 'react-native';
import SvgNoActivity from '@/components/svgs/NoActivity';

interface PastsProps {
  text: string;
}

export default function Empty({ text }: PastsProps) {
  return (
    <View style={styles.container}>
      <SvgNoActivity style={styles.icon} fill="#D3C1E5" />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  icon: {
    height: 60,
    width: 60,
  },
  text: {
    color: '#BABABA',
    marginTop: 11,
  }
});