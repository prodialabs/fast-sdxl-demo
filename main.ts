import { Application, Router } from "https://deno.land/x/oak@v16.0.0/mod.ts";

const router = new Router();

router.get("/", (ctx) => {
  console.log(`Referrer: ${ctx.request.headers.get("Referer")}`);

  ctx.response.body = `
<!doctype html>
<head>
    <title>sdxl.lol</title>

    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <style>
    * {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        letter-spacing: 0.05rem;
    }

    body {
        background: #17151a;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;

        gap: 4rem;
    }

    header {
        text-align: left;
    }

    main, pre, header {
        max-width: 1000px;
    }

    main, pre {
        
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    @media (min-width: 480px)  {
        body {
            padding: 5rem;
        }

        main {
            flex-direction: row;
        }
    }

    section {
        display: flex;
        width: 100%;

        flex-direction: column;
        gap: 1rem;
    }

    section > *, pre {
        width: 100%;
        box-sizing: border-box;
        border-radius: 10px;
    }

    section input,
    section textarea,
    section select,
    section button,
    pre {
        border: 1px solid rgba(255, 255, 255, 0.5);
        padding: 1rem;
        font-size: 1rem;
        color: #ccc;

        background: rgba(0, 0, 0, 0);
    }

    section button {
        background: #2c2831 !important;
        height: 50px;
    }

    i {
        color: white;
    }

    pre {
        width: 100%;
        box-sizing: border-box;
        white-space: pre-wrap;
    }

    code {
        font-family: monospace;
        line-height: 125%;
        font-size: 0.8rem;
        overflow-y: scroll;
    }

    select::-ms-expand {
        display: none;
    }

    .lds-dual-ring {
        /* change color here */
        color: white;
      }
      .lds-dual-ring,
      .lds-dual-ring:after {
        box-sizing: border-box;
      }
      .lds-dual-ring {
        display: inline-block;
        width: 16px;
        height: 16px;
      }
      .lds-dual-ring:after {
        content: " ";
        display: block;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid currentColor;
        border-color: currentColor transparent currentColor transparent;
        animation: lds-dual-ring 1.2s linear infinite;
      }
      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }


    </style>
</head>
<body>
    <header>
      <a href="https://prodia.com/">
        <svg height="60" viewBox="0 0 81 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_3699_10600)">
        <path d="M0.688918 33.6489C0.486835 33.6489 0.321495 33.5834 0.192897 33.4525C0.064299 33.3216 0 33.1533 0 32.9476V14.4346C0 14.2289 0.064299 14.0606 0.192897 13.9297C0.321495 13.7988 0.486835 13.7334 0.688918 13.7334H3.80282C3.98654 13.7334 4.14269 13.7988 4.27129 13.9297C4.41826 14.0606 4.49174 14.2289 4.49174 14.4346V15.4725C4.91428 14.8928 5.4746 14.4159 6.1727 14.0419C6.8708 13.6492 7.73425 13.4529 8.76303 13.4529C9.68159 13.4529 10.4899 13.6025 11.188 13.9017C11.8861 14.1822 12.4832 14.6029 12.9792 15.1639C13.4752 15.7249 13.861 16.4075 14.1366 17.2116C14.4305 18.0157 14.5959 18.9413 14.6326 19.9885C14.651 20.3625 14.6602 20.7085 14.6602 21.0264C14.6602 21.3443 14.651 21.6902 14.6326 22.0642C14.5959 23.074 14.4397 23.981 14.1641 24.7851C13.8886 25.5892 13.5028 26.2717 13.0068 26.8327C12.5107 27.3937 11.9045 27.8332 11.188 28.1511C10.4899 28.4503 9.68159 28.5999 8.76303 28.5999C7.86285 28.5999 7.07289 28.4409 6.39315 28.123C5.73179 27.7864 5.18066 27.3189 4.73975 26.7205V32.9476C4.73975 33.1533 4.67545 33.3216 4.54686 33.4525C4.41826 33.5834 4.25292 33.6489 4.05083 33.6489H0.688918ZM7.27497 24.8412C7.89959 24.8412 8.38642 24.7103 8.73547 24.4485C9.08453 24.1867 9.33254 23.8314 9.4795 23.3826C9.64485 22.9338 9.74589 22.4382 9.78263 21.8959C9.81937 21.3162 9.81937 20.7365 9.78263 20.1568C9.74589 19.6145 9.64485 19.119 9.4795 18.6702C9.33254 18.2214 9.08453 17.8661 8.73547 17.6043C8.38642 17.3425 7.89959 17.2116 7.27497 17.2116C6.66872 17.2116 6.18189 17.3518 5.81446 17.6323C5.44704 17.8941 5.18066 18.2401 5.01532 18.6702C4.84998 19.1003 4.75812 19.5678 4.73975 20.0727C4.72138 20.428 4.7122 20.7739 4.7122 21.1105C4.7122 21.4471 4.72138 21.8024 4.73975 22.1764C4.75812 22.6439 4.85916 23.0834 5.04288 23.4948C5.22659 23.8875 5.50215 24.2147 5.86958 24.4765C6.237 24.7196 6.70546 24.8412 7.27497 24.8412ZM17.2466 28.3194C17.0445 28.3194 16.8792 28.2539 16.7506 28.123C16.622 27.9921 16.5577 27.8238 16.5577 27.6181V14.4346C16.5577 14.2476 16.622 14.0887 16.7506 13.9578C16.8792 13.8082 17.0445 13.7334 17.2466 13.7334H20.4156C20.6177 13.7334 20.7831 13.8082 20.9117 13.9578C21.0403 14.0887 21.1045 14.2476 21.1045 14.4346V15.5566C21.6006 14.9769 22.1884 14.5281 22.8682 14.2102C23.5663 13.8923 24.3471 13.7334 25.2105 13.7334H26.423C26.6067 13.7334 26.7629 13.7988 26.8915 13.9297C27.0384 14.0606 27.1119 14.2289 27.1119 14.4346V17.3238C27.1119 17.5108 27.0384 17.6791 26.8915 17.8287C26.7629 17.9596 26.6067 18.025 26.423 18.025H23.75C22.9968 18.025 22.4089 18.2401 21.9864 18.6702C21.5822 19.0816 21.3801 19.6706 21.3801 20.4373V27.6181C21.3801 27.8238 21.3066 27.9921 21.1597 28.123C21.0311 28.2539 20.8657 28.3194 20.6636 28.3194H17.2466ZM34.9158 28.5999C33.3727 28.5999 32.0683 28.3474 31.0028 27.8425C29.9556 27.3376 29.1473 26.6177 28.5778 25.6827C28.0267 24.729 27.7144 23.5976 27.6409 22.2886C27.6225 21.9146 27.6133 21.4939 27.6133 21.0264C27.6133 20.5402 27.6225 20.1194 27.6409 19.7641C27.7144 18.4364 28.045 17.3051 28.6329 16.3701C29.2208 15.4351 30.0383 14.7151 31.0855 14.2102C32.151 13.7053 33.4278 13.4529 34.9158 13.4529C36.4223 13.4529 37.6991 13.7053 38.7462 14.2102C39.8117 14.7151 40.6385 15.4351 41.2263 16.3701C41.8144 17.3051 42.145 18.4364 42.2185 19.7641C42.2369 20.1194 42.2461 20.5402 42.2461 21.0264C42.2461 21.4939 42.2369 21.9146 42.2185 22.2886C42.145 23.5976 41.8236 24.729 41.2539 25.6827C40.7028 26.6177 39.8944 27.3376 38.8289 27.8425C37.7817 28.3474 36.4774 28.5999 34.9158 28.5999ZM34.9158 25.1778C35.7425 25.1778 36.3396 24.9253 36.707 24.4204C37.0928 23.9155 37.3133 23.1582 37.3684 22.1484C37.3868 21.8679 37.3959 21.4939 37.3959 21.0264C37.3959 20.5589 37.3868 20.1849 37.3684 19.9044C37.3133 18.9133 37.0928 18.1653 36.707 17.6604C36.3396 17.1368 35.7425 16.875 34.9158 16.875C34.1075 16.875 33.5105 17.1368 33.1247 17.6604C32.7389 18.1653 32.5276 18.9133 32.4909 19.9044C32.4725 20.1849 32.4633 20.5589 32.4633 21.0264C32.4633 21.4939 32.4725 21.8679 32.4909 22.1484C32.5276 23.1582 32.7389 23.9155 33.1247 24.4204C33.5105 24.9253 34.1075 25.1778 34.9158 25.1778ZM49.4756 28.5999C48.5937 28.5999 47.7946 28.4596 47.0781 28.1791C46.38 27.8799 45.7738 27.4498 45.2594 26.8888C44.7634 26.3091 44.3776 25.6172 44.102 24.8131C43.8264 23.9903 43.6703 23.0553 43.6335 22.0081C43.6152 21.6341 43.606 21.3069 43.606 21.0264C43.606 20.7272 43.6152 20.3999 43.6335 20.0446C43.6703 19.0348 43.8264 18.1279 44.102 17.3238C44.3776 16.5197 44.7634 15.8278 45.2594 15.2481C45.7554 14.6684 46.3616 14.2289 47.0781 13.9297C47.7946 13.6118 48.5937 13.4529 49.4756 13.4529C50.3941 13.4529 51.1841 13.6118 51.8454 13.9297C52.5068 14.2289 53.0671 14.6216 53.5264 15.1078V9.10512C53.5264 8.89942 53.5907 8.73112 53.7193 8.60022C53.8479 8.46932 54.0132 8.40387 54.2153 8.40387H57.5772C57.7609 8.40387 57.9171 8.46932 58.0457 8.60022C58.1926 8.73112 58.2661 8.89942 58.2661 9.10512V27.6181C58.2661 27.8238 58.1926 27.9921 58.0457 28.123C57.9171 28.2539 57.7609 28.3194 57.5772 28.3194H54.4633C54.2612 28.3194 54.0959 28.2539 53.9673 28.123C53.8387 27.9921 53.7744 27.8238 53.7744 27.6181V26.7205C53.3335 27.2628 52.764 27.7116 52.0659 28.0669C51.3678 28.4222 50.5043 28.5999 49.4756 28.5999ZM50.9636 24.8412C51.5882 24.8412 52.0751 24.7103 52.4241 24.4485C52.7915 24.168 53.0579 23.8127 53.2233 23.3826C53.407 22.9525 53.508 22.485 53.5264 21.9801C53.5448 21.6061 53.5539 21.2508 53.5539 20.9142C53.5539 20.5776 53.5448 20.2316 53.5264 19.8763C53.508 19.4088 53.407 18.9787 53.2233 18.586C53.0396 18.1746 52.764 17.8474 52.3966 17.6043C52.0291 17.3425 51.5515 17.2116 50.9636 17.2116C50.3574 17.2116 49.8705 17.3425 49.5031 17.6043C49.1541 17.8661 48.906 18.2214 48.7591 18.6702C48.6121 19.119 48.5202 19.6145 48.4835 20.1568C48.4284 20.7365 48.4284 21.3162 48.4835 21.8959C48.5202 22.4382 48.6121 22.9338 48.7591 23.3826C48.906 23.8314 49.1541 24.1867 49.5031 24.4485C49.8705 24.7103 50.3574 24.8412 50.9636 24.8412ZM61.3763 28.3194C61.1742 28.3194 61.0089 28.2539 60.8803 28.123C60.7517 27.9921 60.6874 27.8238 60.6874 27.6181V14.4346C60.6874 14.2289 60.7517 14.0606 60.8803 13.9297C61.0089 13.7988 61.1742 13.7334 61.3763 13.7334H64.628C64.8117 13.7334 64.9678 13.7988 65.0964 13.9297C65.2434 14.0606 65.3169 14.2289 65.3169 14.4346V27.6181C65.3169 27.8238 65.2434 27.9921 65.0964 28.123C64.9678 28.2539 64.8117 28.3194 64.628 28.3194H61.3763ZM61.3487 11.6296C61.1466 11.6296 60.9813 11.5642 60.8527 11.4333C60.7241 11.3024 60.6598 11.1341 60.6598 10.9284V8.43192C60.6598 8.22622 60.7241 8.05792 60.8527 7.92702C60.9813 7.77742 61.1466 7.70262 61.3487 7.70262H64.628C64.8301 7.70262 64.9954 7.77742 65.124 7.92702C65.271 8.05792 65.3445 8.22622 65.3445 8.43192V10.9284C65.3445 11.1341 65.271 11.3024 65.124 11.4333C64.9954 11.5642 64.8301 11.6296 64.628 11.6296H61.3487ZM72.0173 28.5999C71.0253 28.5999 70.1343 28.4129 69.3443 28.0389C68.5728 27.6462 67.9573 27.1226 67.4981 26.4681C67.0388 25.8136 66.8091 25.0749 66.8091 24.2521C66.8091 22.9244 67.3419 21.8772 68.4074 21.1105C69.4729 20.3251 70.8875 19.7922 72.6511 19.5117L76.0957 18.9787V18.586C76.0957 17.9128 75.958 17.3986 75.6824 17.0433C75.4068 16.688 74.9016 16.5103 74.1668 16.5103C73.6524 16.5103 73.2299 16.6132 72.8992 16.8189C72.5869 17.0246 72.3388 17.3051 72.1551 17.6604C71.9898 17.9035 71.7602 18.025 71.4662 18.025H68.3799C68.1778 18.025 68.0216 17.9689 67.9114 17.8567C67.8012 17.7258 67.7552 17.5762 67.7736 17.4079C67.7736 17.0713 67.893 16.688 68.1319 16.2579C68.389 15.8091 68.7748 15.3696 69.2892 14.9395C69.8036 14.5094 70.465 14.1541 71.2733 13.8736C72.0816 13.5931 73.0553 13.4529 74.1943 13.4529C75.3885 13.4529 76.4081 13.5931 77.2531 13.8736C78.0982 14.1541 78.7779 14.5468 79.2923 15.0517C79.8251 15.5566 80.2201 16.155 80.4773 16.8469C80.7345 17.5201 80.8631 18.2681 80.8631 19.0909V27.6181C80.8631 27.8238 80.7896 27.9921 80.6426 28.123C80.514 28.2539 80.3578 28.3194 80.1741 28.3194H76.9776C76.7755 28.3194 76.6101 28.2539 76.4815 28.123C76.3529 27.9921 76.2886 27.8238 76.2886 27.6181V26.6364C76.0498 26.9917 75.7283 27.3189 75.3242 27.6181C74.92 27.9173 74.4423 28.1511 73.8912 28.3194C73.3584 28.5064 72.7338 28.5999 72.0173 28.5999ZM73.3125 25.4022C73.8453 25.4022 74.3229 25.29 74.7455 25.0656C75.1864 24.8225 75.5262 24.4578 75.7651 23.9716C76.0223 23.4667 76.1509 22.8403 76.1509 22.0923V21.6996L73.8085 22.1203C72.9451 22.2699 72.3113 22.5037 71.9071 22.8216C71.5213 23.1208 71.3284 23.4761 71.3284 23.8875C71.3284 24.2054 71.4203 24.4765 71.604 24.7009C71.7877 24.9253 72.0265 25.103 72.3205 25.2339C72.6144 25.3461 72.9451 25.4022 73.3125 25.4022Z" fill="white"/>
        <path d="M72.4315 3.88181C72.4323 3.98532 72.4014 4.0865 72.3434 4.17129C72.2849 4.25608 72.2022 4.3203 72.1062 4.35494L70.1405 5.08267L69.4257 7.08344C69.3906 7.18 69.3272 7.2633 69.2441 7.32212C69.161 7.38094 69.062 7.41247 68.961 7.41247C68.8595 7.41247 68.761 7.38094 68.6779 7.32212C68.5948 7.2633 68.5314 7.18 68.4963 7.08344L67.7811 5.08046L65.8158 4.35494C65.7206 4.31911 65.6387 4.25455 65.5811 4.16998C65.5235 4.0854 65.4922 3.98484 65.4922 3.88181C65.4922 3.77879 65.5235 3.67823 65.5811 3.59365C65.6387 3.50907 65.7206 3.44452 65.8158 3.40867L67.7836 2.68097L68.4963 0.680202C68.5314 0.583617 68.5948 0.500317 68.6779 0.441492C68.761 0.382669 68.8595 0.351139 68.961 0.351139C69.062 0.351139 69.161 0.382669 69.2441 0.441492C69.3272 0.500317 69.3906 0.583617 69.4257 0.680202L70.1405 2.68318L72.1062 3.40867C72.2022 3.44334 72.2849 3.50754 72.3434 3.59234C72.4014 3.67713 72.4323 3.77831 72.4315 3.88181Z" fill="url(#paint0_radial_3699_10600)"/>
        <path d="M63.7265 4.57214C63.727 4.61571 63.7136 4.65833 63.6894 4.69403C63.6647 4.72973 63.6297 4.75676 63.5896 4.77134L62.7616 5.07777L62.4606 5.9202C62.446 5.96087 62.4193 5.99594 62.3842 6.02071C62.3491 6.04545 62.3078 6.05875 62.2652 6.05875C62.2226 6.05875 62.1809 6.04545 62.1458 6.02071C62.1107 5.99594 62.0844 5.96087 62.0694 5.9202L61.7683 5.07683L60.9408 4.77134C60.9007 4.75625 60.8665 4.7291 60.8418 4.69348C60.8176 4.65787 60.8047 4.61554 60.8047 4.57214C60.8047 4.52875 60.8176 4.48642 60.8418 4.45081C60.8665 4.41519 60.9007 4.38803 60.9408 4.3729L61.7692 4.06652L62.0694 3.2241C62.0844 3.18343 62.1107 3.14835 62.1458 3.12358C62.1809 3.09882 62.2226 3.08554 62.2652 3.08554C62.3078 3.08554 62.3491 3.09882 62.3842 3.12358C62.4193 3.14835 62.446 3.18343 62.4606 3.2241L62.7616 4.06745L63.5896 4.3729C63.6297 4.38752 63.6647 4.41455 63.6894 4.45025C63.7136 4.48595 63.727 4.52858 63.7265 4.57214Z" fill="url(#paint1_radial_3699_10600)"/>
        <path d="M70.5273 10.8943C70.5277 10.9597 70.5081 11.0236 70.4713 11.0772C70.4346 11.1307 70.3824 11.1713 70.3219 11.1932L69.0802 11.6528L68.6288 12.9164C68.6067 12.9774 68.5666 13.03 68.514 13.0672C68.4614 13.1043 68.3992 13.1242 68.3353 13.1242C68.2714 13.1242 68.2088 13.1043 68.1566 13.0672C68.104 13.03 68.0639 12.9774 68.0418 12.9164L67.59 11.6513L66.3487 11.1932C66.2886 11.1705 66.2372 11.1297 66.2005 11.0763C66.1641 11.0229 66.1445 10.9594 66.1445 10.8943C66.1445 10.8293 66.1641 10.7658 66.2005 10.7124C66.2372 10.6589 66.2886 10.6181 66.3487 10.5955L67.5917 10.1359L68.0418 8.87227C68.0639 8.81124 68.104 8.75867 68.1566 8.72148C68.2088 8.68434 68.2714 8.66445 68.3353 8.66445C68.3992 8.66445 68.4614 8.68434 68.514 8.72148C68.5666 8.75867 68.6067 8.81124 68.6288 8.87227L69.0802 10.1373L70.3219 10.5955C70.3824 10.6174 70.4346 10.658 70.4713 10.7115C70.5081 10.7651 70.5277 10.829 70.5273 10.8943Z" fill="url(#paint2_radial_3699_10600)"/>
        </g>
        <defs>
        <radialGradient id="paint0_radial_3699_10600" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(68.8914 3.75109) rotate(90) scale(3.82497 3.75882)">
        <stop offset="0.572917" stop-color="#FFD500"/>
        <stop offset="1" stop-color="#FDC500"/>
        </radialGradient>
        <radialGradient id="paint1_radial_3699_10600" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(62.236 4.51711) rotate(90) scale(1.61052 1.58269)">
        <stop offset="0.572917" stop-color="#FFD500"/>
        <stop offset="1" stop-color="#FDC500"/>
        </radialGradient>
        <radialGradient id="paint2_radial_3699_10600" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(68.2914 10.8118) rotate(90) scale(2.41577 2.37402)">
        <stop offset="0.572917" stop-color="#FFD500"/>
        <stop offset="1" stop-color="#FDC500"/>
        </radialGradient>
        <clipPath id="clip0_3699_10600">
        <rect width="81" height="34" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        </a>
    </header>

    <main>
        <section>
            <!--<input type="text" placeholder="Domain" value="v2.api.staging.prodia.com" id="domain" disabled>-->
            <input type="text" placeholder="Prompt" value="cinematic still, filmed by Guillermo del Toro, Amidst a deep dark forest, an enigmatic being appears--an amalgamation of flora and fauna, with vines for hair, eyes gleaming like embers, and skin adorned with iridescent scales" id="prompt">
            <input type="text" placeholder="Negative Prompt" value="easynegative, bad proportions, low resolution, bad, ugly, terrible, painting, 3d, render, comic, anime, manga, unrealistic, flat, watermark, signature, worst quality, low quality, normal quality, lowres, simple background, inaccurate limb, extra fingers, fewer fingers, missing fingers, extra arms, (extra legs:1.3), inaccurate eyes, bad composition, bad anatomy, error, extra digit, fewer digits, cropped, low res, worst quality, low quality, normal quality, jpeg artifacts, extra digit, fewer digits, trademark, watermark, artist's name, username, signature, text, words, human," id="negativeprompt">
            <input type="number" placeholder="Steps" value="20" id="steps">
            <select id="refiner">
                <option value="false">refiner: off</option>
                <option value="true">refiner: on</option>
            </select>
            <button id="generate">Generate</button>
            <i id="info">Ready to generate</i>
        </section>
        <section>
            <img src="image.jpg" />           
        </section>
    </main>

    <pre>
        <code></code>
    </pre>

    <script>
    const getInputs = () => {
        const domain = "inference.prodia.com";
        const prompt = document.getElementById('prompt').value;
        const negative_prompt = document.getElementById('negativeprompt').value;
        const steps = document.getElementById('steps').value;
        const refiner = document.getElementById('refiner').value;

        return {
            domain: domain,
            prompt: prompt,
            negative_prompt,
            steps: parseInt(steps), // Ensure the steps value is sent as a number,
            refiner: refiner === "true"
        };
    }

    const generateCodeExample = (data) => {
        return \`const response = await fetch("https://\${data.domain}/v2/job", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "image/jpeg",
        "Authorization": "Bearer my-token-here"
    },
    body: JSON.stringify({
        type: "v2.job.sdxl.txt2img",
        config: {
            prompt: "\${data.prompt}",
            negative_prompt: "\${data.negative_prompt}",
            steps: \${data.steps},
            refiner: \${data.refiner}
        }
    })
});

// get image data
const imageData = await response.arrayBuffer();

\`;
    };

    const updateCode = () => document.querySelector("code").innerText = generateCodeExample(getInputs());

    updateCode();

    const $generate = document.getElementById('generate');

   $generate.addEventListener('click', async () => {
        const data = getInputs();
        updateCode();

        if(!data.domain || !data.prompt || !data.steps) {
            document.querySelector("#info").innerText = "Bad Input Values";
            return;
        }

        const generateText = $generate.innerHTML;
        $generate.innerHTML = "<div class=\\"lds-dual-ring\\"></div>";
        $generate.disabled = true;

        const response = await fetch('/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    
        $generate.innerHTML = generateText;
        $generate.disabled = false;

        if (response.status < 200 || response.status > 299) {
            document.querySelector("#info").innerText = "Error " + await response.text();
            return;
        }

        const blob = await response.blob();
        document.querySelector("img").src = URL.createObjectURL(blob);

        const time = (
            Number(response.headers.get("X-Generation-Time"))
                / 1000
        ).toFixed(2);

        document.querySelector("#info").innerText = "Took " + time + "s.";

        updateCode();
    });
</script>
Signup here for an api key: <a href="https://app.prodia.com/login">https://app.prodia.com/login</a>
</body>
`;
});

router.get("/image.jpg", async (ctx) => {
  ctx.response.headers.set("Content-Type", "image/jpeg");

  ctx.response.body = await Deno.readFile("image.jpg");
});

router.post("/generate", async (ctx) => {
  const data = await ctx.request.body.json();

  if (!data.domain.endsWith("prodia.com")) {
    throw new Error("Not Prodia Domain");
  }

  const startTime = Date.now();

  const config = data;

  delete config.domain;

  const response = await fetch(`https://inference.prodia.com/v2/job`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "image/jpeg",
      "Authorization": `Bearer ${Deno.env.get("API_TOKEN")}`,
    },
    body: JSON.stringify({
      type: "v2.job.sdxl.txt2img",
      config: {
        prompt: data.prompt,
        negative_prompt: data.negative_prompt,
        guidance: data.guidance,
        seed: data.seed,
        steps: data.steps,
        width: data.width,
        height: data.height,
        refiner: data.refiner,
      },
    }),
  });

  if (response.status < 200 || response.status > 299) {
    ctx.response.status = response.status;
    ctx.response.headers = new Headers(response.headers);
    ctx.response.body = response.body;
  }

  const generationTime = Date.now() - startTime;

  ctx.response.headers.set("X-Generation-Time", generationTime.toString());
  ctx.response.headers.set("Content-Type", "image/jpeg");
  ctx.response.body = response.body;
});

const app = new Application();

// Use the router
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ hostname: "0.0.0.0", port: 8080 });
