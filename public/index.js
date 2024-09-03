document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const tileSVGs = [`<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_1_r23" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-17.6 -22.9 21 -16.1 36.6 48.7)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_1_r23" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(18.6 -22.1 20.3 17 24.3 38.3)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_1_r23" x1="52" y1="52" x2="-2.3" y2="1" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.2" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.5" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.7" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_1_r23" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="ClipPath-1_c_1_r"><rect width="56" height="56" rx="8" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_1_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.6,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_1_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#ClipPath-1_c_1_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_1_r;"><rect opacity="0.7" width="56" height="56" rx="8" fill="#151c2e"></rect><path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M31.3 73.8c.2-5.9 4.5-10.1 7.6-15.1 3.3-5.2 4.6-13.1 10.6-14.1s9.3 6.8 14.6 9.9c5.8 3.5 14.8 2.7 17.5 8.9 2.9 6.6 0 14.8-4.6 20.3-4.3 5.1-11.7 4.7-18.1 6.4-7.1 2-14.6 8-21 4.3-6.5-3.8-6.8-13.1-6.6-20.6ZM23.8 44.2c3.6 3.3 7.2 8 6.2 12.8-.9 4.8-7 5.7-10.6 9-3.8 3.5-5.4 11.3-10.6 10.7-5.3-.6-4.5-9-8.1-13-3.7-4.1-11.5-4.6-12.4-10.1-1-5.7 3.4-11.5 8.4-14.4 4.5-2.6 9.9.2 15 1.1 4.3.8 8.8.9 12.1 3.9ZM51.3-5.2c3.6 3.4 7.2 8 6.3 12.9-1 4.7-7.1 5.7-10.6 8.9-3.9 3.6-5.5 11.4-10.7 10.7-5.3-.6-4.5-9-8-12.9-3.7-4.2-11.6-4.6-12.5-10.1-1-5.7 3.4-11.6 8.4-14.4 4.6-2.6 9.9.1 15 1.1 4.3.8 8.8.9 12.1 3.8Z" fill="#1c2130"></path><rect opacity="0.6" width="52" height="52" rx="6" fill="url(#Gradient-0_c_1_r23)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="4" fill="url(#Gradient-1_c_1_r23)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M23.6 50.4c-3.9-.9-6.1-4.4-9-7.2-3-2.9-8.1-4.8-8-9 .2-4.1 5.9-5.2 8.7-8.3 3.1-3.5 3.8-9.5 8.3-10.5 4.8-1 9.9 2 12.9 5.9 2.8 3.6 1.6 8.4 1.8 12.9.4 5.1 3.4 10.9 0 14.6-3.5 3.8-9.7 2.8-14.7 1.6Z" fill="url(#Gradient-2_c_1_r23)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M19.9 26c.1-4 3-6.9 5.1-10.3 2.1-3.6 3-9 7.1-9.7 4.1-.8 6.3 4.6 10 6.6 4 2.3 10.1 1.7 12 5.9 2 4.5.1 10.1-3 13.9-2.9 3.5-7.9 3.3-12.3 4.5-4.8 1.4-9.9 5.6-14.3 3.1-4.4-2.6-4.7-8.9-4.6-14Z" fill="url(#Gradient-3_c_1_r23)"></path><rect opacity="0.6" width="56" height="56" rx="8" fill="#151c2e" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_1_r;"></rect></g></svg>`,
        `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" viewBox="0 0 54 54"><defs><radialGradient id="Gradient-2_c_2_r24" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(28.6228 -7.61449 6.96925 26.1973 5.358 50.625)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><radialGradient id="Gradient-3_c_2_r24" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(-26.8297 -12.5463 11.4831 -24.5562 19.703 45.611)"><stop offset="0" stop-color="#1c2130"></stop><stop offset="1" stop-color="#1c2130" stop-opacity="0"></stop></radialGradient><linearGradient id="Gradient-0_c_2_r24" x1="58.152" y1="24.257" x2="-3.614" y2="28.984" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d8fffc" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#a0fff7" stop-opacity="0"></stop><stop offset="0.491" stop-color="#8dfff6" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#9af8f0"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#bafff9" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-1_c_2_r24" x1="24" y1="0" x2="24" y2="48" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#37b0ce"></stop><stop offset="1" stop-color="#01586b"></stop></linearGradient><clipPath id="clip0_366_7284_c_2_r"><rect width="56" height="56" rx="7.593" fill="#fff"></rect></clipPath></defs><style>@keyframes a0_t_c_2_r{0%{transform:translate(28px,28px) scale(0,0) translate(-28px,-28px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28px,28px) scale(1,1) translate(-28px,-28px)}}@keyframes a1_o_c_2_r{0%{opacity:.6}to{opacity:0}}</style><g clip-path="url(#clip0_366_7284_c_2_r)" transform="matrix(0 0 0 0 28 28)" style="animation: 0.25s linear 0s 1 normal both running a0_t_c_2_r;"><rect opacity="0.7" width="56" height="56" rx="12" fill="#151C2E"></rect><rect opacity="0.6" width="52" height="52" rx="10" fill="url(#Gradient-0_c_2_r24)" transform="translate(2 2)"></rect><rect width="48" height="48" rx="8" fill="url(#Gradient-1_c_2_r24)" transform="translate(4 4)"></rect><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M14.834 60.127c3.731 1.672 7.732.204 11.798-.231 4.245-.454 9.628 1.157 12.1-2.325 2.466-3.477-1.482-7.917-1.818-12.166-.375-4.74 2.845-10.093-.23-13.719-3.261-3.844-9.295-4.521-14.177-3.264-4.482 1.155-6.48 5.88-9.52 9.37-3.412 3.912-9.48 6.762-9.052 11.935.43 5.202 6.134 8.266 10.899 10.4Z" fill="url(#Gradient-2_c_2_r24)"></path><path opacity="0.1" fill-rule="evenodd" clip-rule="evenodd" d="M8.7 53.292c-3.968.987-7.647-1.164-11.573-2.31-4.098-1.196-9.681-.56-11.498-4.423-1.815-3.857 2.854-7.531 3.935-11.655 1.205-4.599-1.02-10.436 2.648-13.462 3.888-3.208 9.947-2.81 14.53-.711 4.208 1.928 5.34 6.931 7.718 10.902 2.667 4.453 8.137 8.33 6.803 13.346-1.342 5.045-7.497 7.053-12.563 8.313Z" fill="url(#Gradient-3_c_2_r24)"></path><rect opacity="0.6" width="56" height="56" rx="12" fill="#151C2E" style="animation: 0.25s linear 0s 1 normal both running a1_o_c_2_r;"></rect></g></svg>`
    ];
    const availableTraps = [1, 3, 5, 7]; // Available trap numbers
    const starSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="none" style="background: 0px 0px;"><defs><linearGradient id="Gradient-0_s_i" x1="28.392" y1="0.972" x2="40.632" y2="48.291" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fba416" stop-opacity="0"></stop><stop offset="1" stop-color="#fdbb4e" stop-opacity="0.63"></stop></linearGradient><linearGradient id="Gradient-1_s_i" x1="28.392" y1="0.972" x2="40.633" y2="48.291" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fdbb4e" stop-opacity="0"></stop><stop offset="1" stop-color="#fdbb4e" stop-opacity="0.63"></stop></linearGradient><linearGradient id="Gradient-3_s_i" x1="43.739" y1="37.512" x2="18.526" y2="14.674" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feffd3" stop-opacity="0.63"></stop><stop offset="0.219" stop-color="#fafd4e" stop-opacity="0"></stop><stop offset="0.491" stop-color="#fdff8b" stop-opacity="0.56"></stop><stop offset="0.733" stop-color="#f7f990"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop><stop offset="1" stop-color="#feffb7" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-4_s_i" x1="28.391" y1="14.126" x2="28.026" y2="38.425" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#feffb0"></stop><stop offset="0.277" stop-color="#fff" stop-opacity="0.51"></stop><stop offset="1" stop-color="#fafd4e" stop-opacity="0.15"></stop></linearGradient><linearGradient id="Gradient-5_s_i" x1="27.214" y1="23.393" x2="27.033" y2="32.029" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafd4e" stop-opacity="0"></stop><stop offset="0.732" stop-color="#fafd4e" stop-opacity="0.46"></stop></linearGradient><linearGradient id="Gradient-6_s_i" x1="24.792" y1="18.563" x2="29.645" y2="23.143" gradientUnits="userSpaceOnUse"><stop offset="0.224" stop-color="#fafd4e" stop-opacity="0.35"></stop><stop offset="1" stop-color="#fafd4e" stop-opacity="0"></stop></linearGradient><linearGradient id="Gradient-7_s_i" x1="0.016" y1="26.376" x2="16.573" y2="26.055" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff"></stop><stop offset="1" stop-color="#fff" stop-opacity="0"></stop></linearGradient><radialGradient id="Gradient-2_s_i" cx="0" cy="0" r="1" fx="0" fy="0" gradientUnits="userSpaceOnUse" gradientTransform="rotate(52.671 -10.467 32.845) scale(31.9369)"><stop offset="0.739" stop-color="#9cb6dd" stop-opacity="0"></stop><stop offset="0.898" stop-color="#c6f1ff" stop-opacity="0.37"></stop><stop offset="1" stop-color="#effbff" stop-opacity="0.7"></stop></radialGradient><mask id="Mask-1_s_i"><path fill="url(#Gradient-7_s_i)" transform="rotate(30 31.002 3.397)" d="M0 0h16.959v56H0z" style="animation: 0.7s linear 0s 1 normal both running a4_t_s_i;"></path></mask></defs><style>@keyframes star_t_s_i{0%{transform:translate(28.3918px,26.0576px) scale(0,0) translate(-23.4974px,-22.4547px);animation-timing-function:cubic-bezier(0,0,.58,1)}42.8571%{transform:translate(28.3918px,26.0576px) scale(1,1) translate(-23.4974px,-22.4547px);animation-timing-function:cubic-bezier(0,0,.58,1)}71.4285%{transform:translate(28.3918px,26.0576px) scale(1.15,1.15) translate(-23.4974px,-22.4547px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(28.3918px,26.0576px) scale(1,1) translate(-23.4974px,-22.4547px)}}@keyframes a1_t_s_i{0%,to{transform:translate(23.4966px,22.4549px)}}@keyframes a0_t_s_i{0%{transform:scale(1.889498,1.889498) translate(-28.3911px,-27.0603px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:scale(1,1) translate(-28.3911px,-27.0603px)}}@keyframes a2_t_s_i{0%{transform:translate(22.2182px,22.7642px) rotate(145.526246deg) scale(.462454,.462454) translate(-27.1127px,-26.3671px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(22.2182px,22.7642px) rotate(0deg) scale(1,1) translate(-27.1127px,-26.3671px)}}@keyframes a2_o_s_i{0%{opacity:0;animation-timing-function:cubic-bezier(0,0,.58,1)}to{opacity:1}}@keyframes a3_t_s_i{0%{transform:translate(18.9293px,24.3971px) rotate(-53.127557deg) scale(.322292,.322292) translate(-26.7458px,-20.6401px);animation-timing-function:cubic-bezier(0,0,.58,1)}to{transform:translate(21.8514px,17.0372px) rotate(0deg) scale(1,1) translate(-26.7458px,-20.6401px)}}@keyframes a3_o_s_i{0%{opacity:0;animation-timing-function:cubic-bezier(0,0,.58,1)}to{opacity:1}}@keyframes a4_t_s_i{0%{transform:translate(-.804393px,13.4424px) rotate(30deg) translate(-8.47967px,-28px)}28.5714%{transform:translate(-.804393px,13.4424px) rotate(30deg) translate(-8.47967px,-28px);animation-timing-function:cubic-bezier(.42,0,.58,1)}85.7142%,to{transform:translate(58.8824px,41.1538px) rotate(30deg) translate(-8.47967px,-28px)}}</style><g id="star" transform="matrix(0 0 0 0 28.392 26.058)" style="animation: 0.7s linear 0s 1 normal both running star_t_s_i;"><path d="M26.439 4.8c.813-1.595 3.092-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.168l12.385 1.97c1.768.28 2.472 2.448 1.207 3.714l-8.862 8.873a2.193 2.193 0 0 0-.615 1.891l1.955 12.388c.279 1.768-1.565 3.107-3.16 2.295l-11.177-5.686a2.192 2.192 0 0 0-1.989 0L16.22 48.269c-1.595.812-3.439-.527-3.16-2.295l1.955-12.388a2.192 2.192 0 0 0-.615-1.89l-8.862-8.874c-1.265-1.266-.561-3.433 1.207-3.714l12.385-1.97a2.192 2.192 0 0 0 1.609-1.168l5.7-11.17Z" fill="#C22A20" transform="translate(-4.894 -3.603)"></path><path d="M26.439 4.8c.813-1.595 3.092-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.168l12.385 1.97c1.768.28 2.472 2.448 1.207 3.714l-8.862 8.873a2.193 2.193 0 0 0-.615 1.891l1.955 12.388c.279 1.768-1.565 3.107-3.16 2.295l-11.177-5.686a2.192 2.192 0 0 0-1.989 0L16.22 48.269c-1.595.812-3.439-.527-3.16-2.295l1.955-12.388a2.192 2.192 0 0 0-.615-1.89l-8.862-8.874c-1.265-1.266-.561-3.433 1.207-3.714l12.385-1.97a2.192 2.192 0 0 0 1.609-1.168l5.7-11.17Z" fill="url(#Gradient-0_s_i)" transform="translate(-4.894 -3.603)"></path><path d="M26.44 4.799c.813-1.595 3.091-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.169l12.385 1.97c1.768.28 2.472 2.447 1.207 3.714l-8.863 8.873a2.192 2.192 0 0 0-.614 1.89l1.954 12.388c.28 1.769-1.564 3.108-3.16 2.296l-11.177-5.687a2.193 2.193 0 0 0-1.988 0L16.22 48.27c-1.596.812-3.44-.527-3.16-2.296l1.954-12.387a2.192 2.192 0 0 0-.614-1.891l-8.863-8.873c-1.265-1.267-.56-3.434 1.207-3.715l12.386-1.969a2.192 2.192 0 0 0 1.608-1.169l5.7-11.17Z" fill="url(#Gradient-1_s_i)" transform="translate(-4.894 -3.603)"></path><path d="M26.44 4.799c.813-1.595 3.091-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.169l12.385 1.97c1.768.28 2.472 2.447 1.207 3.714l-8.863 8.873a2.192 2.192 0 0 0-.614 1.89l1.954 12.388c.28 1.769-1.564 3.108-3.16 2.296l-11.177-5.687a2.193 2.193 0 0 0-1.988 0L16.22 48.27c-1.596.812-3.44-.527-3.16-2.296l1.954-12.387a2.192 2.192 0 0 0-.614-1.891l-8.863-8.873c-1.265-1.267-.56-3.434 1.207-3.715l12.386-1.969a2.192 2.192 0 0 0 1.608-1.169l5.7-11.17Z" fill="url(#Gradient-2_s_i)" transform="translate(-4.894 -3.603)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="m35.394 16.302-5.7-11.171c-.542-1.063-2.061-1.063-2.604 0l-5.7 11.17a2.923 2.923 0 0 1-2.145 1.559L6.86 19.829c-1.178.187-1.648 1.632-.804 2.476l8.862 8.873c.66.661.965 1.598.82 2.522l-1.955 12.387c-.186 1.179 1.043 2.072 2.106 1.53l11.178-5.686a2.923 2.923 0 0 1 2.65 0l11.178 5.687c1.064.54 2.292-.352 2.106-1.53L41.047 33.7a2.923 2.923 0 0 1 .82-2.522l8.862-8.873c.843-.844.374-2.289-.805-2.476l-12.385-1.97a2.923 2.923 0 0 1-2.145-1.558ZM30.345 4.799c-.814-1.595-3.092-1.595-3.906 0l-5.7 11.17a2.192 2.192 0 0 1-1.608 1.169l-12.386 1.97c-1.768.28-2.472 2.447-1.207 3.714l8.863 8.873c.495.496.723 1.198.614 1.89l-1.954 12.388c-.28 1.769 1.564 3.108 3.16 2.296l11.177-5.687a2.193 2.193 0 0 1 1.988 0l11.178 5.687c1.595.812 3.438-.527 3.16-2.296l-1.955-12.387c-.11-.693.119-1.395.614-1.891l8.863-8.873c1.265-1.267.56-3.434-1.207-3.715l-12.385-1.969a2.192 2.192 0 0 1-1.609-1.169l-5.7-11.17Z" fill="url(#Gradient-3_s_i)" transform="translate(-4.894 -3.603)"></path><g style="animation: 0.7s linear 0s 1 normal both running a1_t_s_i;"><path d="M27.442 15.766a1.096 1.096 0 0 1 1.898 0l3.338 5.77c.156.268.417.458.72.523l6.52 1.392a1.096 1.096 0 0 1 .586 1.805l-4.456 4.958c-.207.23-.307.538-.275.846l.69 6.63a1.096 1.096 0 0 1-1.535 1.116L28.836 36.1a1.095 1.095 0 0 0-.89 0l-6.092 2.706a1.096 1.096 0 0 1-1.535-1.115l.69-6.63a1.096 1.096 0 0 0-.275-.847l-4.456-4.958a1.096 1.096 0 0 1 .587-1.805l6.519-1.392c.303-.065.565-.255.72-.523l3.338-5.77Z" fill="url(#Gradient-4_s_i)" transform="translate(-30.148 -28.676) scale(1.8895)" style="animation: 0.7s linear 0s 1 normal both running a0_t_s_i;"></path></g><path fill-rule="evenodd" clip-rule="evenodd" d="M26.893 7.286c.27.137.378.467.241.737l-1.55 3.063a.548.548 0 1 1-.977-.495l1.55-3.063a.548.548 0 0 1 .736-.242Z" fill="#F9BE76" transform="translate(-4.895 -3.603)"></path><circle fill="#F9BE76" transform="translate(3.035 16.918)" r="0.548"></circle><circle fill="#F9BE76" transform="translate(19.477 8.514)" r="0.548"></circle><path id="mask-flex_s_i" d="M26.439 4.8c.813-1.595 3.092-1.595 3.905 0l5.7 11.17a2.192 2.192 0 0 0 1.609 1.168l12.385 1.97c1.768.28 2.472 2.448 1.207 3.714l-8.862 8.873a2.193 2.193 0 0 0-.615 1.891l1.955 12.388c.279 1.768-1.565 3.107-3.16 2.295l-11.177-5.686a2.192 2.192 0 0 0-1.989 0L16.22 48.269c-1.595.812-3.439-.527-3.16-2.295l1.955-12.388a2.192 2.192 0 0 0-.615-1.89l-8.862-8.874c-1.265-1.266-.561-3.433 1.207-3.714l12.385-1.97a2.192 2.192 0 0 0 1.609-1.168l5.7-11.17Z" fill="#fff3bf" mask="url(#Mask-1_s_i)" transform="translate(-4.894 -3.603)"></path></g></svg>`
    const revealCounts = { 1: [6, 7], 3: 5, 5: 4, 7: 3 }; // Number of tiles to reveal based on traps
    let trapIndex = 1;
    let tiles = [];
    let tilesRevealed = false; // Flag to track if tiles have been revealed

    // Initialize grid
    function initializeGrid() {
        gridContainer.innerHTML = ''; // Clear the grid container
        tiles = []; // Reset the tiles array

        for (let i = 0; i < 25; i++) {
            const tile = document.createElement('div');
            tile.classList.add('grid-tile');
            tile.innerHTML = tileSVGs[i % 2]; // Alternate SVGs
            tile.addEventListener('click', () => revealTile(tile));
            gridContainer.appendChild(tile);
            tiles.push(tile); // Store all tiles in an array for later reference
        }
    }

    function revealTile(tile) {
        // Replace the tile's content with the star SVG when clicked
        tile.innerHTML = starSVG;
        tilesRevealed = true; // Set the flag to true when a tile is revealed
    }

    // Trap selection controls
    const trapNumberDisplay = document.querySelector('.trap-number');
    const leftButton = document.querySelector('.left');
    const rightButton = document.querySelector('.right');

    leftButton.addEventListener('click', () => {
        // Decrease trap index, stop if at the beginning
        if (trapIndex > 0) {
            trapIndex--;
            updateTrapDisplay();
        }
    });

    rightButton.addEventListener('click', () => {
        // Increase trap index, stop if at the end
        if (trapIndex < availableTraps.length - 1) {
            trapIndex++;
            updateTrapDisplay();
        }
    });

    function updateTrapDisplay() {
        trapNumberDisplay.textContent = availableTraps[trapIndex];

        // Enable or disable buttons based on the current trapIndex
        leftButton.disabled = trapIndex === 0;
        rightButton.disabled = trapIndex === availableTraps.length - 1;
    }

    // Initialize display with default trap number
    updateTrapDisplay();

    // Play button functionality
    const playButton = document.getElementById('play-button');
    playButton.addEventListener('click', () => {
        if (tilesRevealed) {
            resetGrid(); // Reset the grid only if tiles have been revealed
            setTimeout(() => {
                revealRandomTiles(); // Add a delay before revealing tiles after reset
            }, 500); // Delay of 500ms before revealing tiles again
        } else {
            revealRandomTiles();
        }
    });

    function resetGrid() {
        // Reset the grid to its initial state
        initializeGrid();
        tilesRevealed = false; // Reset the flag
    }

    function revealRandomTiles() {
        // Get the number of tiles to reveal based on the selected trap count
        const trapCount = availableTraps[trapIndex];
        const revealCount = Array.isArray(revealCounts[trapCount])
            ? Math.floor(Math.random() * (revealCounts[trapCount][1] - revealCounts[trapCount][0] + 1)) + revealCounts[trapCount][0]
            : revealCounts[trapCount];

        // Shuffle the tiles and select a subset to reveal
        const shuffledTiles = [...tiles].sort(() => 0.5 - Math.random());
        const tilesToReveal = shuffledTiles.slice(0, revealCount);

        // Reveal tiles one by one with a delay
        tilesToReveal.forEach((tile, index) => {
            setTimeout(() => revealTile(tile), index * 300); // 300ms delay between each reveal
        });
    }

    // Initialize the grid on page load
    initializeGrid();
    // Modal handling
    const modal = document.getElementById('userModal');
    const modalContent = document.querySelector('.modal-content');
    const submitButton = document.querySelector('.modal-submit');
    const errorMessage = document.querySelector('.modal-error');

    submitButton.addEventListener('click', submitUserId);

    function showModal() {
        modal.classList.remove('hide');
        modalContent.classList.add('show');
    }

    function hideModal() {
        modalContent.classList.remove('show');
        modal.classList.add('hide');

        // Hide the modal completely after the fade-out animation ends
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }

    async function submitUserId() {
        const userId = document.getElementById('userIdInput').value;
        if (userId) {
            try {
                const response = await fetch('https://spinsmines-b00e47957dce.herokuapp.com/api/check-sub-id', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ userId }),
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }

                const result = await response.json();
                if (result.valid) {
                    hideErrorMessage();
                    hideModal();
                } else {
                    showErrorMessage('Invalid User ID. Try again or create an account.');
                }
            } catch (error) {
                console.error('Error:', error.message);
                showErrorMessage('Failed to validate User ID. Try again.');
            }
        } else {
            showErrorMessage('Please enter your 1Win User ID');
        }
    }

    function showErrorMessage(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function hideErrorMessage() {
        errorMessage.style.display = 'none';
    }

    submitButton.addEventListener('click', submitUserId);

    // Show the modal on page load
    showModal();

    const findItText = document.querySelector('.how-to-find'); // Select "How to find it" text
    const findItModal = document.getElementById('findItModal'); // The new modal element
    const closeButton = findItModal.querySelector('.close-button'); // Close button inside the modal
    findItModal.style.display = 'none';

    findItText.addEventListener('click', () => {
        findItModal.classList.remove('hide'); // Show the modal
        findItModal.classList.add('show'); // Show the modal
        findItModal.style.display = 'flex';
    });

    closeButton.addEventListener('click', () => {
        findItModal.classList.add('hide'); 
        findItModal.classList.remove('show');
        setTimeout(() => {
            findItModal.style.display = 'none'; // Fully hide after fade-out completes
        }, 300); // Duration of the fade-out animation
    });

    // You can also hide the modal if the user clicks outside of the modal content
    findItModal.addEventListener('click', (event) => {
        if (event.target === findItModal) {
            findItModal.classList.add('hide');
            findItModal.classList.remove('show');
            setTimeout(() => {
                findItModal.style.display = 'none'; // Fully hide after fade-out completes
            }, 300); // Duration of the fade-out animation
        }
    });
});

