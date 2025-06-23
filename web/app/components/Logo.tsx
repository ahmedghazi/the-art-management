import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div className='logo'>
      <svg viewBox='0 0 522 300' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g>
          <path
            d='M86.7551 0H189.472L335.546 289.27H228.303L86.7551 0Z'
            fill='black'
          />
          <path
            d='M60.947 300C94.6071 300 121.894 272.689 121.894 238.999C121.894 205.308 94.6071 177.997 60.947 177.997C27.2869 177.997 0 205.308 0 238.999C0 272.689 27.2869 300 60.947 300Z'
            fill='black'
          />
          <path
            d='M273.209 0H375.886L522 289.27H414.717L273.209 0Z'
            fill='black'
          />
        </g>
      </svg>
      {/* <defs>
          <clipPath id='clip0_131_17646'>
            <rect width='522' height='300' fill='white' />
          </clipPath>
        </defs> */}
    </div>
  );
};

export default Logo;
