import { useState, useCallback } from 'react';

function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  function enter() {
    setIsHovered(true);
  }

  function leave() {
    setIsHovered(false);
  }

  const ref = useCallback((node) => {
    if (node !== null) {
      node.addEventListener('mouseenter', enter);
      node.addEventListener('mouseleave', leave);
    }
  }, []);

  return [isHovered, ref];
}

export default useHover;
