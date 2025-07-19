// sdk/src/context/useSentinel.js
import { useContext } from 'react';
import { SentinelContext } from './SentinelProvider';

export const useSentinel = () => {
  return useContext(SentinelContext);
};