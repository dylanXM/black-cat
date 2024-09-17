import { useLatest } from '@/hooks/useLatest';
import { useCallback, useEffect, useState } from 'react';
import { Subject } from 'rxjs';

export type TypeTabKeys = 'details' | 'comments' | 'participants';

const initScrollHeight: Record<TypeTabKeys, number> = {
  details: 0,
  comments: 0,
  participants: 0,
};

export const scrollHeightSubject$ = new Subject<{ key: TypeTabKeys; height: number }>();

export function useScroll() {
  const [scrollHeight, setScrollHeight] = useState({ ...initScrollHeight });
  const scrollHeightRef = useLatest(scrollHeight);

  const setScrollHeightByKey = useCallback((key: TypeTabKeys, height: number) => {
    setScrollHeight((prev) => ({
      ...prev,
      [key]: height,
    }));
  }, []);
  
  useEffect(() => {
    const subscription = scrollHeightSubject$.subscribe(({ key, height }) => {
      if (key === 'details') {
        setScrollHeightByKey('details', 0);
      }
      if (key === 'participants') {
        setScrollHeightByKey('participants', height);
      }
      if (key === 'comments') {
        const allHeight = scrollHeightRef.current['participants'] + height;
        setScrollHeightByKey('comments', allHeight);
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  } , [setScrollHeightByKey]);

  return { scrollHeight }; 
}