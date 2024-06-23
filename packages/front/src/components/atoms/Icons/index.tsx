import React from "react";

const index = (props: {
  type: "facebook" | "linkedin" | "x" | "behance" | "burger";
}) => {
  const { type } = props;
  switch (type) {
    case "facebook":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.7734 24C19.4009 24 24.7734 18.6274 24.7734 12C24.7734 5.37258 19.4009 0 12.7734 0C6.14602 0 0.773438 5.37258 0.773438 12C0.773438 18.6274 6.14602 24 12.7734 24ZM15.0234 12.75H13.7734V17H11.7734V12.75H10.2734V10.75H11.7734V9.35C11.7734 7.8285 12.7374 7 14.0949 7C14.7449 7 15.3604 7.0485 15.5234 7.07V8.75H14.7734C13.7734 8.75 13.7734 9.235 13.7734 9.75V10.75H15.5234L15.0234 12.75Z"
            fill="#434445"
          />
        </svg>
      );
    case "linkedin":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.1823 24C18.8097 24 24.1823 18.6274 24.1823 12C24.1823 5.37258 18.8097 0 12.1823 0C5.55483 0 0.182251 5.37258 0.182251 12C0.182251 18.6274 5.55483 24 12.1823 24ZM9.48225 10.14V16.8H7.68225V10.14H9.48225ZM7.50225 8.28C7.50225 7.68 7.98225 7.2 8.58225 7.2C9.18225 7.2 9.66225 7.68 9.66225 8.28C9.66225 8.88 9.18225 9.36 8.58225 9.36C7.98225 9.36 7.50225 8.88 7.50225 8.28ZM12.5423 10.14V11.16C13.3823 9.6 16.8023 9.48 16.8023 12.72V16.8H15.0023V13.38C15.0023 11.34 12.5423 11.46 12.5423 13.38V16.8H10.7423V10.14H12.5423Z"
            fill="#434445"
          />
        </svg>
      );
    case "behance":
      return (
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.5911 24C19.2185 24 24.5911 18.6274 24.5911 12C24.5911 5.37258 19.2185 0 12.5911 0C5.96365 0 0.591064 5.37258 0.591064 12C0.591064 18.6274 5.96365 24 12.5911 24ZM15.5161 14.7304C15.3527 14.6722 15.2028 14.5814 15.0756 14.4635C14.8236 14.157 14.7001 13.765 14.7316 13.37H18.5811C18.6101 12.949 18.5756 12.5265 18.4786 12.116C18.3903 11.7339 18.2303 11.372 18.0071 11.0495C17.7886 10.742 17.5036 10.488 17.1731 10.307C16.8072 10.1144 16.3985 10.0176 15.9851 10.0255C15.4252 10.0192 14.8776 10.1901 14.4207 10.5138C13.9638 10.8374 13.6209 11.2972 13.4411 11.8275C13.3076 12.2045 13.2406 12.602 13.2431 13.002C13.2368 13.4089 13.3017 13.8138 13.4346 14.1985C13.5531 14.5424 13.7364 14.8605 13.9746 15.1355C14.2145 15.3974 14.5084 15.604 14.8361 15.741C15.1982 15.8895 15.5867 15.9631 15.9781 15.9575C16.5264 15.9743 17.0664 15.8206 17.5236 15.5175C17.9995 15.1604 18.3355 14.6482 18.4736 14.0695H17.1811C17.1096 14.2725 16.9726 14.447 16.7916 14.5645C16.5694 14.7255 16.3004 14.809 16.0261 14.802C15.853 14.8129 15.6794 14.7885 15.5161 14.7304ZM11.0286 8.141C10.7124 8.06905 10.3887 8.03581 10.0646 8.042H6.59106V15.811H10.1686C10.4944 15.8129 10.8188 15.7693 11.1326 15.6815C11.4355 15.5999 11.7208 15.4631 11.9741 15.278C12.2205 15.0913 12.4197 14.8493 12.5556 14.5715C12.7025 14.2534 12.7749 13.9059 12.7671 13.5555C12.7806 13.116 12.6641 12.682 12.4321 12.3085C12.1902 11.9563 11.831 11.7016 11.4186 11.59C11.7228 11.4477 11.9826 11.2252 12.1701 10.9465C12.3492 10.6517 12.4372 10.3106 12.4231 9.966C12.4311 9.6525 12.3731 9.3405 12.2526 9.051C12.1476 8.8155 11.9826 8.6115 11.7736 8.46C11.5477 8.3074 11.2949 8.19915 11.0286 8.141ZM10.4051 14.4425C10.2544 14.4775 10.1017 14.494 9.94706 14.492H8.21156V12.3525H9.98156C10.285 12.3358 10.5847 12.425 10.8296 12.605C10.945 12.714 11.0339 12.8479 11.0895 12.9965C11.1451 13.1452 11.166 13.3046 11.1506 13.4625C11.1591 13.6355 11.1261 13.8085 11.0551 13.967C10.9936 14.091 10.9021 14.1975 10.7881 14.2765C10.6722 14.3558 10.5422 14.4121 10.4051 14.4425ZM16.3847 11.264C16.5273 11.3174 16.6569 11.4008 16.7646 11.5085L16.7656 11.509C16.9658 11.7656 17.0841 12.0766 17.1051 12.4015H14.7206C14.7292 12.2768 14.7521 12.1545 14.7891 12.0345C14.8299 11.8914 14.8971 11.7571 14.9871 11.6385C15.0888 11.5122 15.2141 11.4069 15.3561 11.3285C15.5355 11.2359 15.7358 11.1913 15.9376 11.199C16.0895 11.1884 16.242 11.2106 16.3847 11.264ZM10.5696 10.968C10.3638 11.1187 10.1129 11.1951 9.85806 11.1845V11.1915H8.21156V9.376H9.74006C9.88013 9.37351 10.0201 9.38575 10.1576 9.4125C10.2843 9.433 10.4054 9.47966 10.5131 9.5495C10.6192 9.61297 10.7051 9.70543 10.7606 9.816C10.8258 9.95512 10.8564 10.108 10.8496 10.2615C10.8731 10.528 10.7691 10.7905 10.5696 10.968ZM14.4131 8.561H17.4011V9.3245H14.4131V8.561Z"
            fill="#434445"
          />
        </svg>
      );
    case "x":
      return (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM16.34 7L12.8975 11.2665L17 17H13.655L11.1245 13.465L8.272 17H6.735L10.403 12.455L6.5 7H9.845L12.176 10.2585L14.8035 7H16.34ZM10.985 11.732L11.7075 12.7415L14.1745 16.1865H15.3295L12.3205 11.982L11.599 10.972L9.335 7.8135H8.18L10.985 11.732Z"
            fill="#434445"
          />
        </svg>
      );
    case "burger":
      return (
        <svg
          width="18"
          height="14"
          viewBox="0 0 18 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H18" stroke="black" stroke-width="2" />
          <path d="M0 7H18" stroke="black" stroke-width="2" />
          <path d="M0 13H18" stroke="black" stroke-width="2" />
        </svg>
      );
  }
};

export default index;
