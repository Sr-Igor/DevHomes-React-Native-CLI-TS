import { View, Text } from 'react-native';
import * as services from './services';
import { useEffect, useState, useLayoutEffect } from 'react';

export const WallScreen = () => {
  useEffect(() => {
    const getWarnings = async () => {
      const res = await services.getWarning();
      console.log('res', res);
    };
    getWarnings();
  }, []);

  return (
    <View>
      <Text>Wall Screen</Text>
    </View>
  );
};
