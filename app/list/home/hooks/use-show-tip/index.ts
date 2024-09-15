import { useEffect, useState } from 'react';
import { Subject } from 'rxjs';

export const showTipSubject$ = new Subject<boolean>();

export function useShowTip() {
  const [tipVisible, setTipVisible] = useState(false);

  useEffect(() => {
    const subscription = showTipSubject$.subscribe((visible: boolean) => {
      setTipVisible(visible);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { tipVisible };
}