import { Twitter } from '@/common/apis/twitter';
import { useEffect, useState } from 'react';
import { Subject } from 'rxjs';

export const activityDetail$ = new Subject<Twitter>();

export function useActivityDetail() {
  const [activity, setActivity] = useState<Twitter | null>(null);

  useEffect(() => {
    const subscription = activityDetail$.subscribe((activity) => {
      setActivity(activity);
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  return { activity };
}