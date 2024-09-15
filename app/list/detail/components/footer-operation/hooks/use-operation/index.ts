import { useCallback, useState } from 'react';

export function useOperation() {
  const [isComment, setIsComment] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [isJoin, setIsJoin] = useState(false);

  const handleToggleLike = useCallback(() => {
    setIsLike(prev => !prev);
  }, []);

  const handleToggleJoin = useCallback(() => {
    setIsJoin(prev => !prev);
  }, []);

  const handleToggleComment = useCallback(() => {
    setIsComment(prev => !prev);
  }, []);

  return {
    isComment,
    isLike,
    isJoin,
    handleToggleJoin,
    handleToggleLike,
    handleToggleComment,
  };
}