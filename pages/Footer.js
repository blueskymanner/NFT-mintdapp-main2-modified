import React from 'react'
/* eslint disable */

const Footer = () => {
  return (
    <footer className="footer-section relative footer-shape pb-20 lg:pb-28 pt-40 lg:pt-56 text-gray-400">
      <div className="container mx-auto relative px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8">
          <div className="footer-widget xl:flex xl:flex-col xl:justify-center xl:col-span-2">
            <a
              className="font-coiny mb-8 text-xl md:text-3xl font-bold"
              href="/#"
            >
              <span className="bg-gradient-to-br from-brand-blue to-brand-purple pr-2 bg-clip-text text-transparent ">
                SHIB
              </span>
              CLUB
            </a>
            <div className="social-share flex items-center">
              <a
                className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                href="https://opensea.io/" target="_blank"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  viewBox="0 0 90 90"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M45 0C20.151 0 0 20.151 0 45C0 69.849 20.151 90 45 90C69.849 90 90 69.849 90 45C90 20.151 69.858 0 45 0ZM22.203 46.512L22.392 46.206L34.101 27.891C34.272 27.63 34.677 27.657 34.803 27.945C36.756 32.328 38.448 37.782 37.656 41.175C37.323 42.57 36.396 44.46 35.352 46.206C35.217 46.458 35.073 46.71 34.911 46.953C34.839 47.061 34.713 47.124 34.578 47.124H22.545C22.221 47.124 22.032 46.773 22.203 46.512ZM74.376 52.812C74.376 52.983 74.277 53.127 74.133 53.19C73.224 53.577 70.119 55.008 68.832 56.799C65.538 61.38 63.027 67.932 57.402 67.932H33.948C25.632 67.932 18.9 61.173 18.9 52.83V52.56C18.9 52.344 19.08 52.164 19.305 52.164H32.373C32.634 52.164 32.823 52.398 32.805 52.659C32.706 53.505 32.868 54.378 33.273 55.17C34.047 56.745 35.658 57.726 37.395 57.726H43.866V52.677H37.467C37.143 52.677 36.945 52.299 37.134 52.029C37.206 51.921 37.278 51.813 37.368 51.687C37.971 50.823 38.835 49.491 39.699 47.97C40.284 46.944 40.851 45.846 41.31 44.748C41.4 44.55 41.472 44.343 41.553 44.145C41.679 43.794 41.805 43.461 41.895 43.137C41.985 42.858 42.066 42.57 42.138 42.3C42.354 41.364 42.444 40.374 42.444 39.348C42.444 38.943 42.426 38.52 42.39 38.124C42.372 37.683 42.318 37.242 42.264 36.801C42.228 36.414 42.156 36.027 42.084 35.631C41.985 35.046 41.859 34.461 41.715 33.876L41.661 33.651C41.553 33.246 41.454 32.868 41.328 32.463C40.959 31.203 40.545 29.97 40.095 28.818C39.933 28.359 39.753 27.918 39.564 27.486C39.294 26.82 39.015 26.217 38.763 25.65C38.628 25.389 38.52 25.155 38.412 24.912C38.286 24.642 38.16 24.372 38.025 24.111C37.935 23.913 37.827 23.724 37.755 23.544L36.963 22.086C36.855 21.888 37.035 21.645 37.251 21.708L42.201 23.049H42.219C42.228 23.049 42.228 23.049 42.237 23.049L42.885 23.238L43.605 23.436L43.866 23.508V20.574C43.866 19.152 45 18 46.413 18C47.115 18 47.754 18.288 48.204 18.756C48.663 19.224 48.951 19.863 48.951 20.574V24.939L49.482 25.083C49.518 25.101 49.563 25.119 49.599 25.146C49.725 25.236 49.914 25.38 50.148 25.56C50.337 25.704 50.535 25.884 50.769 26.073C51.246 26.46 51.822 26.955 52.443 27.522C52.605 27.666 52.767 27.81 52.92 27.963C53.721 28.71 54.621 29.583 55.485 30.555C55.728 30.834 55.962 31.104 56.205 31.401C56.439 31.698 56.7 31.986 56.916 32.274C57.213 32.661 57.519 33.066 57.798 33.489C57.924 33.687 58.077 33.894 58.194 34.092C58.554 34.623 58.86 35.172 59.157 35.721C59.283 35.973 59.409 36.252 59.517 36.522C59.85 37.26 60.111 38.007 60.273 38.763C60.327 38.925 60.363 39.096 60.381 39.258V39.294C60.435 39.51 60.453 39.744 60.471 39.987C60.543 40.752 60.507 41.526 60.345 42.3C60.273 42.624 60.183 42.93 60.075 43.263C59.958 43.578 59.85 43.902 59.706 44.217C59.427 44.856 59.103 45.504 58.716 46.098C58.59 46.323 58.437 46.557 58.293 46.782C58.131 47.016 57.96 47.241 57.816 47.457C57.609 47.736 57.393 48.024 57.168 48.285C56.97 48.555 56.772 48.825 56.547 49.068C56.241 49.437 55.944 49.779 55.629 50.112C55.449 50.328 55.251 50.553 55.044 50.751C54.846 50.976 54.639 51.174 54.459 51.354C54.144 51.669 53.892 51.903 53.676 52.11L53.163 52.569C53.091 52.641 52.992 52.677 52.893 52.677H48.951V57.726H53.91C55.017 57.726 56.07 57.339 56.925 56.61C57.213 56.358 58.482 55.26 59.985 53.604C60.039 53.541 60.102 53.505 60.174 53.487L73.863 49.527C74.124 49.455 74.376 49.644 74.376 49.914V52.812V52.812Z"
                    fill={'currentColor'}
                  ></path>
                </svg>
              </a>
              <a
                className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                href="https://twitter.com/" target="_blank"
              >
                <svg
                  className="w-6 h-6 md:w-8 md:h-8"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                </svg>
              </a>
              <a
                className="flex items-center justify-center w-10 h-10 bg-blueGray-200 rounded-lg border border-blueGray-200 transition duration-500 hover:bg-indigo-500 mr-2"
                href="https://etherscan.io/" target="_blank"
              >
                <svg 
                  className="w-6 h-6 md:w-8 md:h-8" 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="293.775" height="293.671" 
                  viewBox="0 0 293.775 293.671">
                  <g id="etherscan-logo-circle" transform="translate(-219.378 -213.33)">
                    <path id="Path_1" data-name="Path 1" d="M280.433,353.152A12.45,12.45,0,0,1,292.941,340.7l20.737.068a12.467,12.467,0,0,1,12.467,12.467v78.414c2.336-.692,5.332-1.43,8.614-2.2a10.389,10.389,0,0,0,8.009-10.11V322.073a12.469,12.469,0,0,1,12.468-12.47h20.778a12.469,12.469,0,0,1,12.467,12.467v90.279s5.2-2.106,10.269-4.245a10.408,10.408,0,0,0,6.353-9.577V290.9a12.466,12.466,0,0,1,12.466-12.467h20.778A12.468,12.468,0,0,1,450.815,290.9v88.625c18.014-13.055,36.271-28.758,50.759-47.639a20.926,20.926,0,0,0,3.185-19.537,146.6,146.6,0,0,0-136.644-99.006c-81.439-1.094-148.744,65.385-148.736,146.834a146.371,146.371,0,0,0,19.5,73.45,18.56,18.56,0,0,0,17.707,9.173c3.931-.346,8.825-.835,14.643-1.518a10.383,10.383,0,0,0,9.209-10.306V353.152" fill="#21325b"/>
                    <path id="Path_2" data-name="Path 2" d="M244.417,398.641A146.808,146.808,0,0,0,477.589,279.9c0-3.381-.157-6.724-.383-10.049-53.642,80-152.686,117.4-232.79,128.793" transform="translate(35.564 80.269)" fill="#979695"/>
                  </g>
                </svg>
              </a>
            </div>
          </div>
          {/* <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
            <h4 className="font-display text-xl text-blueGray-900 font-semibold">
              Navigation
            </h4>
            <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="/dark/"
                >
                  Home
                </a>
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="/dark/explore"
                >
                  Explore
                </a>
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="/dark/wallet"
                >
                  Wallet
                </a>
              </li>

              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="/dark/term-condition"
                >
                  Terms{' '}
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
            <h4 className="font-display text-xl text-blueGray-900 font-semibold">
              Explore
            </h4>
            <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="/dark/explore"
                >
                  Explore Artwork
                </a>
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="/dark/item-single"
                >
                  Artwork History
                </a>
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="/dark/leaderboard"
                >
                  Explore Trends
                </a>
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="#"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget pb-4 lg:pb-0 lg:border-b-0 border-b border-indigo-200">
            <h4 className="font-display text-xl text-blueGray-900 font-semibold">
              Community
            </h4>
            <ul className="mt-4 xl:mt-10 flex flex-wrap xl:block">
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="/mint"
                >
                 Mint Page
                </a>
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="/dark/item-single2"
                >
                  Howto Mint
                </a>
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="/dark/activity"
                >
                  Activity
                </a>
              </li>
              <li className="mb-4 mr-4">
                <a
                  className="font-body text-blueGray-600 transition duration-500 hover:text-indigo-500 underline-hover"
                  href="/dark/contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div> */}
          <div className="footer-widget col-span-1 md:col-span-2">
            <h4 className="font-display text-xl text-blueGray-900 font-semibold">
              Contact Us
            </h4>
            <form className="footer-newsletter flex items-center w-full mb-4 mt-4 xl:mt-10">
              <input
                className="bg-transparent border-2 border-r-0 border-indigo-500 transition duration-500 focus:outline-none hover:bg-white rounded-l w-full h-14 p-4"
                type="text"
                placeholder="Your e-mail address"
              />
              <button
                className="flex items-center rounded-r h-14 py-4 px-8 transition-all duration-500 bg-gradient-to-tl from-indigo-500 via-purple-500 to-indigo-500 bg-size-200 bg-pos-0 hover:bg-pos-100"
                type="submit"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 13h6v-2H3V1.846a.5.5 0 0 1 .741-.438l18.462 10.154a.5.5 0 0 1 0 .876L3.741 22.592A.5.5 0 0 1 3 22.154V13z" fill="rgba(236,240,241,1)"/></svg>
              </button>
            </form>
            <p className="font-body text-sm text-blueGray-600">
              Your privacy protected! We dont disclose Email.
            </p>
          </div>
        </div>
        <div className="lg:text-center mt-8 lg:mt-14">
          <p className="font-body text-sm text-blueGray-600">
            © <span id="spanYear">2022</span> - All Rights Reserved by{' '}
            <a
              href="#"
              className="text-indigo-500 underline-hover"
              rel="noopener"
            >
              SHIB CLUB
            </a>
          </p>
        </div>
      </div>
      <a
        href="#top"
        className="footer-back w-10 h-10 hidden fixed bottom-8 right-8 z-50 bg-blueGray-600 rounded-lg items-center justify-center show"
      >
        <svg
          width={18}
          height={10}
          viewBox="0 0 18 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 9L9 1L17 9"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>
    </footer>
  )
}

export default Footer
