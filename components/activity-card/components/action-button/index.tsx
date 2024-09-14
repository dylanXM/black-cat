import { View, Text, StyleSheet } from 'react-native';
import { configs } from './data';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TypeAction } from '../..';
import { useState } from 'react';

interface ActionButtonProps {
  initCount: Record<TypeAction, number>;
  initState: Record<TypeAction, boolean>;
  canEdit: boolean;
}

export default function ActionButton({ initCount, initState, canEdit }: ActionButtonProps) {
  const [actionState, setActionState] = useState({ ...initState });

  const handlePress = (key: TypeAction) => {
    if (!canEdit) {
      return;
    }
    setActionState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <View style={styles.container}>
      {
        configs.map((config) => {
          const { key, text, activeText, icon, activeIcon } = config;
          const isActive = actionState[key as TypeAction] || false;
          const count = initCount[key as TypeAction] || 0;
          return (
            <TouchableOpacity key={key} disabled={!canEdit} onPress={() => handlePress(key as TypeAction)}>
              <View style={styles.actionContainer}>
                {isActive ? activeIcon : icon}
                <Text style={styles.actionText}>{ isActive ? activeText : `${count}${text}` }</Text>
              </View>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginTop: -3,
    marginLeft: 4,
    marginRight: 30,
  },
});