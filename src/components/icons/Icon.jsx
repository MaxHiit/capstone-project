import React from 'react';
import iconPath from './iconList';

const Icon = React.forwardRef(({ name, width, height, color, className = '', ...rest }, ref) => {
  return (
    <div className={className} {...rest} ref={ref}>
      <svg
        viewBox='0 0 24 24'
        width={`${width}px`}
        height={`${height}px`}
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <path fill={color} d={iconPath[name]} />
      </svg>
    </div>
  );
});

export default Icon;
