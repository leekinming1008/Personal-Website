import React from 'react';
import PropTypes from 'prop-types';

function Pug({ className, size }) {
  const [width, height] = [size];

  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 30"
    >
      <path
        className={className}
        d="M24.1908 0.00199986C20.0588 0.00199986 16.8268 0.409999 14.3468 1.142C14.408 1.08658 14.4686 1.03058 14.5288 0.974C14.6048 0.9 14.4288 0.849999 14.0728 0.837999C13.0048 0.801999 10.3388 1.124 8.09276 2.248C5.54676 3.446 -0.143243 9.738 0.00275721 10.11C0.152757 10.484 2.92276 12.8 3.74676 13.7C4.27076 14.3 5.84276 19.618 7.26676 18.72C7.64276 18.458 7.79676 17.418 7.92676 16.134C8.04276 17.128 8.15676 18.16 8.31276 19.094C8.53676 20.592 10.4868 21.788 10.7128 23.212C10.9888 25.24 12.2328 26.658 14.6728 27.56C15.6408 28.896 17.1488 28.22 18.2728 28.828C20.0728 29.802 22.0928 29.352 24.1128 29.352C26.1368 29.352 28.0828 29.724 29.9528 28.752C31.1068 28.152 32.5928 28.812 33.5728 27.592C36.0228 26.692 37.2348 25.264 37.5168 23.212C37.7408 21.788 39.6128 20.592 39.8368 19.094C39.9648 18.334 40.0568 17.49 40.1528 16.688C40.2668 17.688 40.4128 18.496 40.7348 18.72C42.0828 19.618 43.7308 14.3 44.2548 13.7C45.0788 12.8 47.8488 10.484 47.9988 10.11C48.1468 9.734 42.3828 3.444 39.8388 2.246C37.5908 1.122 34.9248 0.799999 33.8568 0.835999C33.5228 0.845999 33.3668 0.893999 33.4068 0.959999C31.0588 0.343999 28.0628 0 24.1868 0L24.1908 0.00199986ZM24.2508 1.002C28.6568 1.002 31.9468 1.452 34.2708 2.232C34.5368 2.322 34.7468 2.428 34.9868 2.526C36.3668 3.956 38.2348 6.186 39.0148 8.76C39.0648 8.92 39.0948 9.092 39.1408 9.256V9.272C39.2308 10.812 39.7728 12.106 39.6008 13.252C39.2948 15.248 39.1448 17.198 38.8548 18.932L38.8508 18.94V18.948C38.7928 19.332 38.4148 19.9 37.8948 20.562C37.3728 21.222 36.7028 21.966 36.5308 23.058V23.07L36.5268 23.076C36.3268 24.542 35.6868 25.476 34.1868 26.24C34.4368 25.352 34.5968 24.13 34.5968 22.314C34.6708 20.068 34.7508 19.17 32.8768 16.924C31.4566 15.1075 29.5043 13.7803 27.2928 13.128C27.0708 12.348 25.8488 11.456 24.1908 11.456C22.5328 11.456 21.3608 12.3 21.1208 13.096C18.8659 13.7369 16.8727 15.0773 15.4288 16.924C13.5568 19.17 13.7088 20.144 13.7088 22.316C13.7088 24.122 13.8688 25.342 14.1148 26.236C12.5748 25.468 11.9008 24.524 11.7008 23.076V23.056C11.5268 21.95 10.8268 21.21 10.2868 20.55C9.74676 19.89 9.36276 19.316 9.30676 18.948L9.30276 18.94V18.93C9.01476 17.196 8.86276 15.25 8.55676 13.254V13.25C8.38676 12.104 8.92276 10.81 9.01476 9.27V9.3C9.04076 9.014 9.04876 8.82 9.06476 8.56C9.78476 6.24 11.3708 4.214 12.6748 2.808C13.1453 2.58615 13.6288 2.39312 14.1228 2.23C16.5068 1.448 19.8428 1 24.2488 1L24.2508 1.002ZM13.8288 8.61C12.959 8.61634 12.127 8.96645 11.5143 9.58394C10.9017 10.2014 10.5582 11.0362 10.5588 11.906C10.5588 12.3387 10.644 12.7672 10.8097 13.167C10.9754 13.5668 11.2182 13.93 11.5243 14.2359C11.8303 14.5418 12.1937 14.7844 12.5936 14.9498C12.9935 15.1153 13.422 15.2003 13.8548 15.2C14.1535 15.2003 14.4509 15.1599 14.7388 15.08C15.4368 14.328 16.1748 13.634 16.9608 12.996C17.0844 12.6459 17.148 12.2773 17.1488 11.906C17.149 11.4733 17.064 11.0447 16.8986 10.6448C16.7332 10.2449 16.4906 9.88159 16.1847 9.5755C15.8788 9.26941 15.5156 9.0266 15.1158 8.86093C14.716 8.69527 14.2875 8.61 13.8548 8.61C13.8461 8.60996 13.8374 8.60996 13.8288 8.61ZM34.4228 8.61C33.5523 8.61528 32.7192 8.96494 32.1058 9.58254C31.4923 10.2001 31.1482 11.0355 31.1488 11.906C31.1495 12.3782 31.2519 12.8448 31.4488 13.274C32.0748 13.802 32.6728 14.368 33.2388 14.97C33.6234 15.1218 34.0332 15.1998 34.4468 15.2C35.32 15.1995 36.1574 14.8522 36.7747 14.2345C37.392 13.6168 37.7388 12.7793 37.7388 11.906C37.739 11.4734 37.6541 11.045 37.4888 10.6453C37.3235 10.2455 37.0811 9.88227 36.7754 9.5762C36.4697 9.27014 36.1067 9.02729 35.7072 8.86151C35.3076 8.69572 34.8793 8.61026 34.4468 8.61C34.4388 8.60997 34.4308 8.60997 34.4228 8.61ZM14.6808 9.582C14.8986 9.58306 15.1072 9.67034 15.2608 9.82475C15.4145 9.97917 15.5008 10.1882 15.5008 10.406C15.5008 10.6238 15.4145 10.8328 15.2608 10.9872C15.1072 11.1417 14.8986 11.2289 14.6808 11.23C14.5724 11.2303 14.465 11.2091 14.3648 11.1679C14.2646 11.1266 14.1735 11.0659 14.0968 10.9894C14.0201 10.9128 13.9592 10.8219 13.9177 10.7218C13.8761 10.6217 13.8548 10.5144 13.8548 10.406C13.8548 10.2976 13.8761 10.1903 13.9177 10.0902C13.9592 9.9901 14.0201 9.89918 14.0968 9.82264C14.1735 9.74609 14.2646 9.68544 14.3648 9.64415C14.465 9.60286 14.5724 9.58174 14.6808 9.582ZM33.6208 9.582C33.7291 9.58174 33.8365 9.60286 33.9367 9.64415C34.0369 9.68544 34.128 9.74609 34.2047 9.82264C34.2814 9.89918 34.3423 9.9901 34.3838 10.0902C34.4254 10.1903 34.4468 10.2976 34.4468 10.406C34.4468 10.5142 34.4254 10.6214 34.384 10.7213C34.3426 10.8213 34.2819 10.9121 34.2054 10.9887C34.1289 11.0652 34.0381 11.1259 33.9381 11.1673C33.8381 11.2087 33.731 11.23 33.6228 11.23C33.5145 11.23 33.4074 11.2087 33.3074 11.1673C33.2075 11.1259 33.1166 11.0652 33.0401 10.9887C32.9636 10.9121 32.9029 10.8213 32.8615 10.7213C32.8201 10.6214 32.7988 10.5142 32.7988 10.406C32.7988 10.1875 32.8856 9.97787 33.0401 9.82334C33.1946 9.66881 33.4042 9.582 33.6228 9.582H33.6208ZM23.4028 12.554C23.4237 12.5528 23.4438 12.5555 23.4628 12.562C23.5382 12.5861 23.5919 12.6691 23.6121 12.7927C23.6323 12.9163 23.6175 13.0707 23.5708 13.222C23.5475 13.2973 23.5171 13.3696 23.4812 13.4348C23.4453 13.4999 23.4046 13.5567 23.3616 13.6018C23.3185 13.647 23.2738 13.6796 23.2301 13.6978C23.1864 13.716 23.1444 13.7195 23.1068 13.708C23.0319 13.683 22.9788 13.5997 22.959 13.4762C22.9391 13.3526 22.9541 13.1988 23.0008 13.048C23.0412 12.9159 23.1033 12.7946 23.1766 12.7046C23.2498 12.6146 23.3297 12.5614 23.4028 12.554ZM24.7468 12.598C24.8219 12.5939 24.9054 12.6435 24.9811 12.7373C25.0568 12.8311 25.1194 12.9625 25.1568 13.106C25.1965 13.2599 25.2041 13.4154 25.1778 13.5384C25.1516 13.6614 25.0936 13.7418 25.0168 13.762C24.9399 13.7819 24.8504 13.7401 24.7679 13.6456C24.6854 13.5511 24.6167 13.4117 24.5768 13.258C24.537 13.1041 24.5295 12.9486 24.5557 12.8256C24.582 12.7026 24.6399 12.6222 24.7168 12.602C24.7265 12.5997 24.7365 12.5984 24.7468 12.598ZM24.1148 13.55C24.1148 13.55 24.1848 14.002 24.4848 14.152C24.7848 14.302 26.2088 13.852 26.2088 13.852C25.5348 14.376 24.2628 14.378 24.2628 14.528V15.274C24.2628 16.09 24.3148 18.196 24.2008 18.644C25.8468 18.654 28.3808 20.896 28.3808 23.66V23.81C28.3048 21.114 25.1608 18.942 24.1888 18.942C23.2148 18.942 20.0688 21.038 19.9928 23.81V23.66C19.9928 20.936 22.4588 18.72 24.1068 18.648C23.9668 17.546 23.9608 16.374 23.9608 15.274V14.53C23.5348 14.3422 23.0964 14.1839 22.6488 14.056C23.0188 14.122 23.3908 14.156 23.7388 14.156C24.0388 14.004 24.1148 13.552 24.1148 13.552V13.55ZM18.0328 16.25C18.0381 16.2499 18.0434 16.2499 18.0488 16.25C18.0882 16.25 18.1272 16.2578 18.1636 16.2728C18.2 16.2879 18.233 16.31 18.2609 16.3379C18.2887 16.3657 18.3108 16.3988 18.3259 16.4352C18.341 16.4716 18.3488 16.5106 18.3488 16.55C18.349 16.5896 18.3415 16.6288 18.3265 16.6654C18.3115 16.702 18.2895 16.7354 18.2616 16.7634C18.2337 16.7915 18.2006 16.8138 18.164 16.829C18.1275 16.8442 18.0883 16.852 18.0488 16.852C17.9692 16.852 17.8929 16.8204 17.8366 16.7641C17.7804 16.7079 17.7488 16.6316 17.7488 16.552C17.7486 16.4751 17.7781 16.4012 17.8309 16.3453C17.8837 16.2895 17.956 16.2561 18.0328 16.252V16.25ZM20.2808 16.25C20.2854 16.2499 20.2901 16.2499 20.2948 16.25C20.3342 16.25 20.3732 16.2578 20.4096 16.2728C20.446 16.2879 20.479 16.31 20.5069 16.3379C20.5347 16.3657 20.5568 16.3988 20.5719 16.4352C20.587 16.4716 20.5948 16.5106 20.5948 16.55C20.595 16.5896 20.5875 16.6288 20.5725 16.6654C20.5575 16.702 20.5355 16.7354 20.5076 16.7634C20.4797 16.7915 20.4466 16.8138 20.41 16.829C20.3735 16.8442 20.3343 16.852 20.2948 16.852C20.2152 16.852 20.1389 16.8204 20.0826 16.7641C20.0264 16.7079 19.9948 16.6316 19.9948 16.552C19.9947 16.4748 20.0244 16.4005 20.0776 16.3447C20.1309 16.2888 20.2036 16.2556 20.2808 16.252V16.25ZM27.6208 16.25C27.6254 16.2499 27.6301 16.2499 27.6348 16.25C27.6742 16.25 27.7132 16.2578 27.7496 16.2728C27.786 16.2879 27.819 16.31 27.8469 16.3379C27.8747 16.3657 27.8968 16.3988 27.9119 16.4352C27.927 16.4716 27.9348 16.5106 27.9348 16.55C27.935 16.5896 27.9275 16.6288 27.9125 16.6654C27.8975 16.702 27.8755 16.7354 27.8476 16.7634C27.8197 16.7915 27.7866 16.8138 27.75 16.829C27.7135 16.8442 27.6743 16.852 27.6348 16.852C27.5552 16.852 27.4789 16.8204 27.4226 16.7641C27.3664 16.7079 27.3348 16.6316 27.3348 16.552C27.3347 16.4748 27.3644 16.4005 27.4176 16.3447C27.4709 16.2888 27.5436 16.2556 27.6208 16.252V16.25ZM29.8668 16.25C29.8721 16.2499 29.8774 16.2499 29.8828 16.25C29.9222 16.25 29.9612 16.2578 29.9976 16.2728C30.034 16.2879 30.067 16.31 30.0949 16.3379C30.1227 16.3657 30.1448 16.3988 30.1599 16.4352C30.175 16.4716 30.1828 16.5106 30.1828 16.55C30.183 16.5896 30.1755 16.6288 30.1605 16.6654C30.1455 16.702 30.1235 16.7354 30.0956 16.7634C30.0677 16.7915 30.0346 16.8138 29.998 16.829C29.9615 16.8442 29.9223 16.852 29.8828 16.852C29.8032 16.852 29.7269 16.8204 29.6706 16.7641C29.6144 16.7079 29.5828 16.6316 29.5828 16.552C29.5826 16.4751 29.6121 16.4012 29.6649 16.3453C29.7177 16.2895 29.79 16.2561 29.8668 16.252V16.25ZM18.5608 18.048C18.5661 18.0479 18.5714 18.0479 18.5768 18.048C18.6556 18.0491 18.7309 18.0811 18.7863 18.1373C18.8417 18.1934 18.8728 18.2691 18.8728 18.348C18.8728 18.4269 18.8417 18.5026 18.7863 18.5587C18.7309 18.6149 18.6556 18.6469 18.5768 18.648C18.4972 18.648 18.4209 18.6164 18.3646 18.5601C18.3084 18.5039 18.2768 18.4276 18.2768 18.348C18.2766 18.2711 18.3061 18.1972 18.3589 18.1413C18.4117 18.0855 18.484 18.0521 18.5608 18.048ZM29.3428 18.048C29.3468 18.0479 29.3508 18.0479 29.3548 18.048C29.4343 18.048 29.5106 18.0796 29.5669 18.1359C29.6232 18.1921 29.6548 18.2684 29.6548 18.348C29.6548 18.4276 29.6232 18.5039 29.5669 18.5601C29.5106 18.6164 29.4343 18.648 29.3548 18.648C29.2755 18.6475 29.1997 18.6156 29.1439 18.5594C29.0881 18.5032 29.0568 18.4272 29.0568 18.348C29.0567 18.2708 29.0864 18.1965 29.1396 18.1407C29.1929 18.0848 29.2656 18.0516 29.3428 18.048Z"
      />
    </svg>
  );
}

Pug.defaultProps = {
  className: '',
  size: 64,
};

Pug.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Pug;