import { View, StyleSheet, Text } from 'react-native';
import SvgNoActivity from '@/components/svgs/NoActivity';
import { color_disabled_text_light, color_primary_light } from '@/constants/Colors';

interface PastsProps {
  text: string;
}

export default function Empty({ text }: PastsProps) {
  return (
    <View style={styles.container}>
      <SvgNoActivity style={styles.icon} fill={color_primary_light} />
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
    color: color_disabled_text_light,
    marginTop: 11,
  }
});