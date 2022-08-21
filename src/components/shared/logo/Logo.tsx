type LogoProps = {
  dark?: boolean;
};

export const Logo = ({ dark = true }: LogoProps) => {
  return (
    <svg
      width="137"
      height="36"
      viewBox="0 0 137 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33.5696 28V8.36363H37.2386V11.5597H37.4815C37.8906 10.4773 38.5597 9.63352 39.4886 9.02841C40.4176 8.41477 41.5298 8.10795 42.8253 8.10795C44.1378 8.10795 45.2372 8.41477 46.1236 9.02841C47.0185 9.64204 47.679 10.4858 48.1051 11.5597H48.3097C48.7784 10.5114 49.5242 9.67613 50.5469 9.05397C51.5696 8.42329 52.7884 8.10795 54.2031 8.10795C55.9844 8.10795 57.4375 8.66619 58.5625 9.78267C59.696 10.8991 60.2628 12.5824 60.2628 14.8324V28H56.4404V15.1903C56.4404 13.8608 56.0781 12.8977 55.3537 12.3011C54.6293 11.7045 53.7642 11.4062 52.7585 11.4062C51.5142 11.4062 50.5469 11.7898 49.8565 12.5568C49.1662 13.3153 48.821 14.2912 48.821 15.4844V28H45.0114V14.9474C45.0114 13.8821 44.679 13.0256 44.0142 12.3778C43.3494 11.7301 42.4844 11.4062 41.419 11.4062C40.6946 11.4062 40.0256 11.598 39.4119 11.9815C38.8068 12.3565 38.3168 12.8807 37.9418 13.554C37.5753 14.2273 37.3921 15.0071 37.3921 15.8935V28H33.5696Z"
        fill={dark ? '#ffffff' : '#111111'}
      />
      <path
        d="M65.6928 28V1.81818H69.5153V11.5469H69.7454C69.967 11.1378 70.2866 10.6648 70.7042 10.1278C71.1218 9.5909 71.7014 9.12215 72.4428 8.72159C73.1843 8.3125 74.1644 8.10795 75.3832 8.10795C76.9684 8.10795 78.3832 8.50852 79.6275 9.30966C80.8718 10.1108 81.8477 11.2656 82.5551 12.7741C83.271 14.2827 83.6289 16.098 83.6289 18.2202C83.6289 20.3423 83.2752 22.1619 82.5678 23.679C81.8604 25.1875 80.8889 26.3508 79.6531 27.169C78.4173 27.9787 77.0068 28.3835 75.4215 28.3835C74.2283 28.3835 73.2525 28.1832 72.494 27.7827C71.744 27.3821 71.1559 26.9133 70.7298 26.3764C70.3036 25.8395 69.9755 25.3622 69.7454 24.9446H69.4258V28H65.6928ZM69.4386 18.1818C69.4386 19.5625 69.6389 20.7727 70.0394 21.8125C70.44 22.8523 71.0195 23.6662 71.7781 24.2543C72.5366 24.8338 73.4656 25.1236 74.565 25.1236C75.707 25.1236 76.6616 24.821 77.4286 24.2159C78.1957 23.6023 78.7752 22.7713 79.1673 21.723C79.5678 20.6747 79.7681 19.4943 79.7681 18.1818C79.7681 16.8864 79.5721 15.723 79.18 14.6918C78.7965 13.6605 78.217 12.8466 77.4414 12.25C76.6744 11.6534 75.7156 11.3551 74.565 11.3551C73.457 11.3551 72.5195 11.6406 71.7525 12.2116C70.994 12.7827 70.4187 13.5795 70.0266 14.6023C69.6346 15.625 69.4386 16.8182 69.4386 18.1818Z"
        fill={dark ? '#ffffff' : '#111111'}
      />
      <path
        d="M91.7436 1.81818V28H87.9212V1.81818H91.7436Z"
        fill={dark ? '#ffffff' : '#111111'}
      />
      <path
        d="M96.886 28V8.36363H100.708V28H96.886ZM98.8164 5.3338C98.1516 5.3338 97.5806 5.11221 97.1033 4.66903C96.6346 4.21732 96.4002 3.68039 96.4002 3.05823C96.4002 2.42755 96.6346 1.89062 97.1033 1.44744C97.5806 0.995734 98.1516 0.769882 98.8164 0.769882C99.4812 0.769882 100.048 0.995734 100.517 1.44744C100.994 1.89062 101.233 2.42755 101.233 3.05823C101.233 3.68039 100.994 4.21732 100.517 4.66903C100.048 5.11221 99.4812 5.3338 98.8164 5.3338Z"
        fill={dark ? '#ffffff' : '#111111'}
      />
      <path
        d="M115.017 8.36363V11.4318H104.291V8.36363H115.017ZM107.168 3.65909H110.99V22.2344C110.99 22.9758 111.101 23.5341 111.322 23.9091C111.544 24.2756 111.83 24.527 112.179 24.6633C112.537 24.7912 112.925 24.8551 113.342 24.8551C113.649 24.8551 113.918 24.8338 114.148 24.7912C114.378 24.7486 114.557 24.7145 114.685 24.6889L115.375 27.8466C115.153 27.9318 114.838 28.017 114.429 28.1023C114.02 28.196 113.509 28.2472 112.895 28.2557C111.889 28.2727 110.952 28.0937 110.082 27.7187C109.213 27.3437 108.51 26.7642 107.973 25.9801C107.436 25.196 107.168 24.2116 107.168 23.027V3.65909Z"
        fill={dark ? '#ffffff' : '#111111'}
      />
      <path
        d="M121.662 35.3636C121.091 35.3636 120.571 35.3168 120.102 35.223C119.633 35.1378 119.284 35.044 119.054 34.9418L119.974 31.8097C120.673 31.9972 121.295 32.0781 121.841 32.0526C122.386 32.027 122.868 31.8224 123.285 31.4389C123.711 31.0554 124.086 30.429 124.41 29.5597L124.883 28.2557L117.699 8.36363H121.789L126.762 23.6023H126.967L131.94 8.36363H136.044L127.951 30.6207C127.576 31.6435 127.099 32.5085 126.52 33.2159C125.94 33.9318 125.25 34.4687 124.449 34.8267C123.647 35.1847 122.718 35.3636 121.662 35.3636Z"
        fill={dark ? '#ffffff' : '#111111'}
      />
      <path
        d="M0.794514 14.1049C0.280908 15.4722 -1.52588e-05 16.9533 -1.52588e-05 18.5C-1.52588e-05 25.4035 5.59643 31 12.5 31C16.2389 31 19.5944 29.3584 21.8851 26.7567C21.7754 25.7348 21.4373 24.8567 20.8708 24.1223C20.1683 23.1987 19.1861 22.4246 17.9242 21.8001C16.6753 21.1757 15.2247 20.6228 13.5725 20.1414L8.79153 18.7364C5.65625 17.7997 3.22348 16.5053 1.49322 14.8531C1.2421 14.6133 1.00919 14.3639 0.794514 14.1049Z"
        fill="#904D27"
      />
      <path
        d="M24.223 22.8481C24.7255 21.4939 25 20.029 25 18.5C25 11.5964 19.4035 5.99998 12.5 5.99998C8.60498 5.99998 5.12606 7.78147 2.83359 10.5741C2.91452 10.7715 3.00763 10.9619 3.1129 11.1454C3.56823 11.939 4.17968 12.622 4.94724 13.1944C5.7278 13.7538 6.58643 14.2351 7.52311 14.6384C8.4728 15.0417 9.429 15.38 10.3917 15.6532L14.6068 16.863C15.8817 17.2143 17.1566 17.6631 18.4315 18.2095C19.7065 18.7559 20.8708 19.4454 21.9246 20.278C22.8535 20.9917 23.6196 21.8484 24.223 22.8481Z"
        fill="#904D27"
      />
    </svg>
  );
};