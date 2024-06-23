import React from "react";

const index = (props: { type: "classic" | "invert" }) => {
  const { type } = props;
  switch (type) {
    case "classic":
      return (
        <svg
          width="183"
          height="35"
          viewBox="0 0 183 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_433_169)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.811 27.8484V0L13.4212 2.43454V13.4214C13.4212 13.7733 13.3976 14.1164 13.3463 14.453V14.4747C13.1238 16.0297 12.4156 17.4196 11.3886 18.4795C11.0206 18.8573 10.6141 19.1918 10.1755 19.4785C10.0215 19.5805 9.86103 19.6761 9.69629 19.763V35H13.8747C15.7896 35 17.5226 34.1986 18.7785 32.9043C19.9723 31.6729 20.7361 29.9919 20.8046 28.1307C20.811 28.0374 20.811 27.944 20.811 27.8484ZM9.69621 34.9999V19.7629V19.7607L9.68986 19.7642V34.9999H9.26196V19.9761C8.56322 20.2923 7.80581 20.4925 7.009 20.5534C6.8357 20.5686 6.66026 20.5751 6.48483 20.5751H0V34.9999H9.69621ZM30.8194 20.9813C30.8194 22.3691 30.4365 23.6656 29.7711 24.7602C29.4908 25.2228 29.1592 25.6506 28.7869 26.0372C27.531 27.3315 25.798 28.1308 23.8853 28.1329H21.2389V8.69444L30.8173 5.54016V20.9792L30.8194 20.9813ZM7.90331 9.6382V4.21533L0 6.74325V13.8536H3.81901C3.9217 13.8536 4.0244 13.8492 4.1271 13.8405C4.69406 13.7971 5.22894 13.6321 5.70819 13.3736C5.80446 13.3215 5.8986 13.265 5.9906 13.2064C6.24948 13.037 6.4891 12.8394 6.70519 12.6179C7.31067 11.9946 7.72787 11.1736 7.86052 10.2593V10.2463C7.88834 10.0465 7.90331 9.84452 7.90331 9.6382Z"
              fill="white"
            />
            <path
              d="M52.5055 29.1384H46.2068V5.65305H52.5055V29.1384ZM56.8294 22.9337H48.3185V17.0439H56.5941C57.6659 17.0439 58.3912 16.8745 58.7721 16.5357C59.1508 16.1969 59.3412 15.4542 59.3412 14.3097C59.3412 13.1651 59.1508 12.3942 58.7721 12.0662C58.3912 11.7383 57.6659 11.5754 56.5941 11.5754H48.3185V5.65088H56.8294C58.6159 5.65088 60.1692 5.99619 61.4871 6.68463C62.805 7.37525 63.8256 8.36774 64.553 9.66428C65.2783 10.9608 65.642 12.5093 65.642 14.3097C65.642 16.11 65.2783 17.7215 64.553 19.0072C63.8277 20.2928 62.805 21.268 61.4871 21.9347C60.1692 22.6014 58.6159 22.9337 56.8294 22.9337Z"
              fill="white"
            />
            <path
              d="M79.0545 29.4924C76.6412 29.4924 74.5744 28.9994 72.8564 28.0156C71.1362 27.0318 69.8226 25.6397 68.9111 23.8437C67.9997 22.0477 67.5461 19.9324 67.5461 17.5C67.5461 15.0676 68.0019 12.9523 68.9111 11.1563C69.8226 9.36026 71.1362 7.97034 72.8564 6.98436C74.5744 6.00056 76.6412 5.50757 79.0545 5.50757C81.4679 5.50757 83.5282 6.00056 85.2355 6.98436C86.9429 7.97034 88.2522 9.36026 89.1637 11.1563C90.0729 12.9523 90.5287 15.0655 90.5287 17.5C90.5287 19.9345 90.0729 22.0477 89.1637 23.8437C88.2522 25.6397 86.9429 27.0297 85.2355 28.0156C83.5282 29.0016 81.4679 29.4924 79.0545 29.4924ZM79.0545 23.1314C80.2377 23.1314 81.1598 22.975 81.8209 22.6623C82.482 22.3495 82.9484 21.7827 83.2201 20.9596C83.494 20.1365 83.6309 18.9855 83.6309 17.5022C83.6309 16.0189 83.494 14.8374 83.2201 14.0274C82.9463 13.2173 82.4799 12.6548 81.8209 12.3421C81.1598 12.0293 80.2377 11.873 79.0545 11.873C77.8714 11.873 76.9428 12.0293 76.271 12.3421C75.5992 12.6548 75.1264 13.2173 74.8525 14.0274C74.5787 14.8396 74.4418 15.9971 74.4418 17.5022C74.4418 19.0072 74.5787 20.1387 74.8525 20.9596C75.1264 21.7827 75.5971 22.3495 76.271 22.6623C76.9428 22.975 77.8714 23.1314 79.0545 23.1314Z"
              fill="white"
            />
            <path
              d="M98.8171 29.1384H92.45V5.65303H98.8171V29.1384ZM102.028 29.1384H93.8321V23.2138H101.69C103.023 23.2138 104.05 23.0727 104.773 22.7925C105.497 22.5124 105.997 21.952 106.282 21.1094C106.564 20.2689 106.705 19.0289 106.705 17.3935C106.705 15.7582 106.564 14.4899 106.282 13.6603C105.999 12.8307 105.497 12.2747 104.773 11.9945C104.05 11.7144 103.023 11.5732 101.69 11.5732H93.8321V5.64868H102.028C104.512 5.64868 106.613 6.11127 108.329 7.03426C110.045 7.95726 111.35 9.29506 112.242 11.0477C113.135 12.8003 113.58 14.9156 113.58 17.3914C113.58 19.8672 113.133 21.9824 112.242 23.7351C111.35 25.4877 110.045 26.8255 108.329 27.7485C106.613 28.6715 104.512 29.134 102.028 29.134V29.1384Z"
              fill="white"
            />
            <path
              d="M121.318 29.1384H115.599V5.65308H121.318V29.1384Z"
              fill="white"
            />
            <path
              d="M133.83 29.4924C131.425 29.4924 129.44 29.1015 127.876 28.3175C126.312 27.5357 125.15 26.4368 124.391 25.023C123.631 23.6091 123.252 21.9564 123.252 20.0627V5.65308H129.836V19.7108C129.836 20.5752 129.934 21.2528 130.133 21.7436C130.332 22.2344 130.717 22.5797 131.288 22.7774C131.86 22.9772 132.707 23.0749 133.828 23.0749C134.949 23.0749 135.794 22.975 136.368 22.7774C136.939 22.5797 137.324 22.2344 137.523 21.7436C137.722 21.2528 137.82 20.5752 137.82 19.7108V5.65308H144.404V20.0605C144.404 21.9543 144.025 23.607 143.265 25.0208C142.506 26.4346 141.35 27.5335 139.799 28.3153C138.246 29.0993 136.256 29.4903 133.828 29.4903L133.83 29.4924Z"
              fill="white"
            />
            <path
              d="M152.709 29.1384H146.37V5.65308H154.934L158.306 14.9069L159.756 20.9705H160.195L161.746 14.9069L164.748 5.65308H173.312V29.1384H166.973V20.5513L167.343 15.5042H166.905L165.522 20.9031L163.702 26.6865H155.98L154.16 20.9031L152.743 15.5042H152.305L152.709 20.5513V29.1384Z"
              fill="white"
            />
            <path
              d="M183 29.1384H175.259V21.8174H183V29.1384Z"
              fill="#FE191B"
            />
          </g>
          <defs>
            <clipPath id="clip0_433_169">
              <rect width="183" height="35" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
    case "invert":
      return (
        <svg
          width="105"
          height="20"
          viewBox="0 0 105 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_502_403)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9407 15.9134V0L7.70066 1.39116V7.6694C7.70066 7.87044 7.68716 8.06652 7.6577 8.25887V8.27128C7.53003 9.15984 7.1237 9.95408 6.53446 10.5597C6.32332 10.7756 6.09008 10.9667 5.83842 11.1306C5.75004 11.1889 5.65797 11.2435 5.56344 11.2931V20H7.96091C9.0596 20 10.0539 19.5421 10.7745 18.8024C11.4595 18.0988 11.8978 17.1382 11.9371 16.0747C11.9407 16.0213 11.9407 15.968 11.9407 15.9134ZM5.5634 20V11.2931V11.2919L5.55976 11.2938V19.9999H5.31424V11.4149C4.91332 11.5956 4.47874 11.71 4.02156 11.7448C3.92212 11.7535 3.82146 11.7572 3.7208 11.7572H0V20H5.5634ZM17.6833 11.9893C17.6833 12.7823 17.4635 13.5232 17.0818 14.1487C16.9209 14.413 16.7307 14.6575 16.5171 14.8784C15.7965 15.618 14.8021 16.0747 13.7047 16.076H12.1863V4.96825L17.6821 3.16581V11.9881L17.6833 11.9893ZM4.53469 5.50754V2.40876L0 3.85329V7.91633H2.19123C2.25016 7.91633 2.30908 7.91385 2.36801 7.90889C2.69332 7.88406 3.00021 7.78975 3.27519 7.64207C3.33043 7.61229 3.38444 7.58002 3.43723 7.54651C3.58577 7.44971 3.72326 7.33678 3.84724 7.2102C4.19465 6.85403 4.43403 6.38493 4.51014 5.86247V5.85503C4.52609 5.74085 4.53469 5.62544 4.53469 5.50754Z"
              fill="#1E1E1E"
            />
            <path
              d="M30.1262 16.6504H26.5122V3.23024H30.1262V16.6504ZM32.6072 13.1049H27.7238V9.7393H32.4721C33.0871 9.7393 33.5033 9.64251 33.7218 9.44891C33.9391 9.25531 34.0483 8.83089 34.0483 8.17688C34.0483 7.52287 33.9391 7.08232 33.7218 6.89493C33.5033 6.70753 33.0871 6.61446 32.4721 6.61446H27.7238V3.229H32.6072C33.6322 3.229 34.5234 3.42632 35.2796 3.81972C36.0358 4.21436 36.6213 4.7815 37.0387 5.52238C37.4549 6.26326 37.6636 7.14809 37.6636 8.17688C37.6636 9.20567 37.4549 10.1265 37.0387 10.8612C36.6226 11.5958 36.0358 12.1531 35.2796 12.534C34.5234 12.915 33.6322 13.1049 32.6072 13.1049Z"
              fill="#1E1E1E"
            />
            <path
              d="M45.3593 16.8529C43.9746 16.8529 42.7887 16.5711 41.803 16.009C40.816 15.4468 40.0623 14.6513 39.5393 13.625C39.0164 12.5987 38.7561 11.39 38.7561 10C38.7561 8.61011 39.0176 7.40137 39.5393 6.37506C40.0623 5.34876 40.816 4.55451 41.803 3.9911C42.7887 3.42892 43.9746 3.14722 45.3593 3.14722C46.744 3.14722 47.9261 3.42892 48.9058 3.9911C49.8854 4.55451 50.6366 5.34876 51.1596 6.37506C51.6813 7.40137 51.9428 8.60887 51.9428 10C51.9428 11.3912 51.6813 12.5987 51.1596 13.625C50.6366 14.6513 49.8854 15.4456 48.9058 16.009C47.9261 16.5724 46.744 16.8529 45.3593 16.8529ZM45.3593 13.218C46.0381 13.218 46.5672 13.1286 46.9465 12.9499C47.3259 12.7712 47.5935 12.4473 47.7494 11.977C47.9065 11.5066 47.9851 10.8489 47.9851 10.0013C47.9851 9.15367 47.9065 8.47856 47.7494 8.01567C47.5922 7.55278 47.3246 7.23136 46.9465 7.05265C46.5672 6.87395 46.0381 6.7846 45.3593 6.7846C44.6804 6.7846 44.1476 6.87395 43.7622 7.05265C43.3767 7.23136 43.1054 7.55278 42.9483 8.01567C42.7912 8.4798 42.7126 9.14126 42.7126 10.0013C42.7126 10.8613 42.7912 11.5079 42.9483 11.977C43.1054 12.4473 43.3755 12.7712 43.7622 12.9499C44.1476 13.1286 44.6804 13.218 45.3593 13.218Z"
              fill="#1E1E1E"
            />
            <path
              d="M56.6985 16.6505H53.0452V3.23027H56.6985V16.6505ZM58.5411 16.6505H53.8382V13.265H58.3471C59.1119 13.265 59.7011 13.1843 60.116 13.0243C60.531 12.8642 60.8182 12.544 60.9815 12.0625C61.1435 11.5822 61.2245 10.8736 61.2245 9.93912C61.2245 9.00465 61.1435 8.27991 60.9815 7.80584C60.8194 7.33178 60.531 7.01408 60.116 6.85399C59.7011 6.6939 59.1119 6.61324 58.3471 6.61324H53.8382V3.22778H58.5411C59.9663 3.22778 61.1718 3.49212 62.1563 4.01954C63.1408 4.54697 63.8896 5.31143 64.4015 6.31292C64.9134 7.3144 65.1688 8.52314 65.1688 9.93788C65.1688 11.3526 64.9122 12.5614 64.4015 13.5629C63.8896 14.5643 63.1408 15.3288 62.1563 15.8562C61.1718 16.3837 59.9663 16.648 58.5411 16.648V16.6505Z"
              fill="#1E1E1E"
            />
            <path
              d="M69.609 16.6507H66.3276V3.23047H69.609V16.6507Z"
              fill="#1E1E1E"
            />
            <path
              d="M76.7879 16.853C75.4081 16.853 74.2689 16.6296 73.3716 16.1816C72.4742 15.7348 71.8076 15.1069 71.3718 14.299C70.936 13.4911 70.7188 12.5467 70.7188 11.4645V3.23047H74.496V11.2635C74.496 11.7574 74.5525 12.1446 74.6667 12.4251C74.7808 12.7055 75.0018 12.9028 75.3295 13.0158C75.6573 13.1299 76.1434 13.1858 76.7867 13.1858C77.4299 13.1858 77.9148 13.1287 78.2438 13.0158C78.5716 12.9028 78.7926 12.7055 78.9067 12.4251C79.0209 12.1446 79.0774 11.7574 79.0774 11.2635V3.23047H82.8546V11.4633C82.8546 12.5454 82.6373 13.4898 82.2015 14.2977C81.7658 15.1056 81.1029 15.7336 80.2129 16.1803C79.3216 16.6283 78.18 16.8517 76.7867 16.8517L76.7879 16.853Z"
              fill="#1E1E1E"
            />
            <path
              d="M87.62 16.6507H83.9827V3.23047H88.8967L90.8313 8.51838L91.6636 11.9833H91.9153L92.8053 8.51838L94.5276 3.23047H99.4416V16.6507H95.8043V11.7437L96.0166 8.85966H95.765L94.972 11.9448L93.9273 15.2496H89.497L88.4523 11.9448L87.6396 8.85966H87.388L87.62 11.7437V16.6507Z"
              fill="#1E1E1E"
            />
            <path d="M105 16.6505H100.559V12.467H105V16.6505Z" fill="#FE191B" />
          </g>
          <defs>
            <clipPath id="clip0_502_403">
              <rect width="105" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );
  }
};

export default index;
