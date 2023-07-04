import { FC, ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

interface CustomViewProps {
  children: ReactNode;
  alignment?: 'center' | 'flex-start' | 'flex-end';
  justify?: 'center' | 'flex-start' | 'flex-end';
  px?: number;
  py?: number;
}

const CustomView: FC<CustomViewProps> = ({
  children,
  alignment,
  justify,
  px,
  py
}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#fff',
      alignItems: alignment,
      justifyContent: justify,
      paddingHorizontal: px,
      paddingVertical: py
    }
  });

  return <View style={styles.container}>{children}</View>;
};

export default CustomView;
