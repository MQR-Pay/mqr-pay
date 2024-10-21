import React from 'react';

import LoginButton from '../components/LoginButton';

const Header = () => {
  return (
    <div className="gc_main_menu_wrapper">
      <div className="container-fluid">
        <div id="search_open" className="gc_search_box">
          <input type="text" placeholder="Search here" />
          <button>
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 hidden-xs">
            <div className="gc_header_wrapper">
              <div className="gc_logo">
                <a href="/">
                  <img src="images/header/logo.png" alt="Logo" title="MQR Pay" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
            <div className="header-area hidden-menu-bar stick" id="sticker">
              {/* mainmenu start */}
              <div className="gc_right_menu hidden-xs">
                <ul>
                  {/* <li className="btc_join_navi_btn"> */}
                    <LoginButton />
                  {/* </li> */}
                  
                </ul>
              </div>
              <div className="mainmenu hidden-xs">
                <ul>
                  <li className="gc_main_navigation parent active">
                    {/* <a href="/" className="gc_main_navigation">Home</a> */}
                  </li>
                </ul>
              </div>
              {/* mainmenu end */}
              {/* mobile menu area start */}
              <div className="rp_mobail_menu_main_wrapper visible-xs">
                <div className="row">
                  <div className="col-xs-6">
                    <div className="gc_logo">
                      <a href="/">
                        <img src="images/header/logo.png" alt="Logo" title="MQR Pay" />
                      </a>
                    </div>
                  </div>
                  <div className="col-xs-6">
                    <div id="toggle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Capa_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 31.177 31.177"
                        xmlSpace="preserve"
                        width="25px"
                        height="25px"
                      >
                        <g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,1.775H0.946c-0.489,0-0.887-0.398-0.887-0.888S0.457,0,0.946,0H30.23    c0.49,0,0.888,0.398,0.888,0.888S30.72,1.775,30.23,1.775z"
                              fill="#000000"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,9.126H12.069c-0.49,0-0.888-0.398-0.888-0.888c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,8.729,30.72,9.126,30.23,9.126z"
                              fill="#000000"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,16.477H0.946c-0.489,0-0.887-0.398-0.887-0.888c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,16.079,30.72,16.477,30.23,16.477z"
                              fill="#000000"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,23.826H12.069c-0.49,0-0.888-0.396-0.888-0.887c0-0.49,0.398-0.888,0.888-0.888H30.23    c0.49,0,0.888,0.397,0.888,0.888C31.118,23.43,30.72,23.826,30.23,23.826z"
                              fill="#000000"
                            />
                          </g>
                          <g>
                            <path
                              className="menubar"
                              d="M30.23,31.177H0.946c-0.489,0-0.887-0.396-0.887-0.887c0-0.49,0.398-0.888,0.887-0.888H30.23    c0.49,0,0.888,0.398,0.888,0.888C31.118,30.78,30.72,31.177,30.23,31.177z"
                              fill="#000000"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
                <div id="sidebar">
                  <h1>
                    <a href="/">MQR Pay</a>
                  </h1>
                  <div id="toggle_close">&times;</div>
                  <div id="cssmenu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <LoginButton />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* mobile menu area end */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
