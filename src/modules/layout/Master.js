import React from 'react'
// import './App.css';
import 'assets/css/normalize.css'
import 'assets/css/webflow.css'
import 'assets/css/r360-clone-for-pos-edit.webflow.css'
import 'assets/css/master.css'
import { Header } from './Header'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export const Master = (props) => {
    const { children } = props;
    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )

    // return (
    //     <div class="flex-body">
    //         <div class="top-nav-menu">
    //             <div data-ix="showmobilemenu" data-w-id="c7aaafff-7069-4c2a-6c57-f00107fe5c81" class="mobile-hamburger-menu">
    //                 <div class="hamburger-line"></div>
    //                 <div class="hamburger-line"></div>
    //                 <div class="hamburger-line"></div>
    //                 <div class="admin-image"></div>
    //             </div>
    //             <a href="#" class="top-nav-logo w-inline-block">
    //                 <h4 class="heading-4">APP LOGO</h4>
    //             </a>
    //             <div class="top-nav-menu-link-wrapper">
    //                 <div class="top-menu-link-container w-hidden-small w-hidden-tiny">
    //                     <a href="#" class="main-nav-links hde">Dashboard</a>
    //                     <a href="#" class="main-nav-links hide">Help &amp; Support</a>
    //                 </div>
    //                 <div class="top-nav-button-wrapper">
    //                     <div class="add-customer-copy">
    //                         <div data-w-id="d3dffadc-384c-6b02-6b5b-80365779821a" class="modal-closer"><img src="images/Close.svg" alt="" /></div>
    //                         <div data-w-id="d3dffadc-384c-6b02-6b5b-80365779821c" class="butto loylt customersmarginbtn">
    //                             <div class="creae-addon-button mod top mk">SEND MENU</div>
    //                             <div class="modal-wrapper">
    //                                 <div class="bot-background"></div>
    //                                 <div class="modal reglar snd-mnu">
    //                                     <div class="table-form-g tbright nn">
    //                                         <div class="div-block-14 fl">
    //                                             <div class="text-block-14"><strong class="bold-text-4">Send Menu</strong></div>
    //                                         </div>
    //                                         <div class="form-block-13 w-form">
    //                                             <form id="email-form-7" name="email-form-7" data-name="Email Form 7">
    //                                                 <label for="name-3">Description (20 words)</label><textarea placeholder="Description (20 words)" maxlength="5000" id="field-6" name="field-6" class="form-field w-input"></textarea><label for="name-3">Customer Number</label>
    //                                                 <div class="div-block-101">
    //                                                     <input type="text" class="form-field w-input" maxlength="256" name="name-3" data-name="Name 3" placeholder="" id="name-3" />
    //                                                     <a href="#" class="link-9"></a>
    //                                                 </div><label for="name-3">Email Address</label>
    //                                                 <div class="div-block-101">
    //                                                     <input type="email" class="form-field w-input" maxlength="256" name="name-2" data-name="Name 2" placeholder="" id="name-2" />
    //                                                     <a href="#" class="link-9"></a>
    //                                                 </div><input type="submit" value="SEND" data-wait="Please wait..." class="btn w-button" />
    //                                             </form>
    //                                             <div class="w-form-done">
    //                                                 <div>Thank you! Your submission has been received!</div>
    //                                             </div>
    //                                             <div class="w-form-fail">
    //                                                 <div>Oops! Something went wrong while submitting the form.</div>
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                     </div>
    //                     <a href="#" class="div-block-95 w-inline-block" id="btnOrderToggleTB">
    //                         <div class="notification-button">
    //                             <div class="notif-icon">
    //                                 <img src="/Content/images/5fba9a6615d1f00e32007323_familiar-meeting-on-table.svg" loading="lazy" alt="" class="image-3" /></div>
    //                         </div>
    //                         <div class="div-block-3">
    //                             <div class="text-block-8">Table Bookings</div>
    //                         </div>
    //                         <div class="notifcount topnotifc">
    //                             <div class="text-block-46">3</div>
    //                         </div>
    //                     </a>
    //                     <a href="#" class="div-block-95 w-inline-block" id="btnOrderToggleMenu">
    //                         <div class="notification-button">
    //                             <div class="notif-icon">
    //                                 <img src="https://assets.website-files.com/5f9d631bd5fd03af93ee9ed9/5fde169542573057b169fd62_5fbe61c82518146618aa3cd4_covered-food-tray-on-a-hand-of-hotel-room-service%20(1).svg" loading="lazy" alt="" class="image-3 fdo" />
    //                             </div>
    //                         </div>
    //                         <div class="div-block-3">
    //                             <div class="text-block-8">Food Ordering</div>
    //                         </div><div class="notifcount topnotifc hidetop2"><div class="text-block-46">3</div></div>
    //                     </a>
    //                     <div class="text-block-56">
    //                         <a id="btnViewNotification" href="#" class="link-15"></a>
    //                     </div>
    //                     <div id="divNotificationGallery" class="r360-notif-wrapper" style="display: none; opacity: 1;">
    //                         <a href="#" class="alert-msg-single-div _1 w-inline-block">
    //                             <div class="div-block-141">
    //                                 <div class="r360-notif-icon bell"></div>
    //                                 <div class="r360notification-single-content">Upcoming order alert</div>
    //                             </div>
    //                             <div class="r360-clock-alarm-notif"><span class="text-span-21"></span> 9:35 m</div>
    //                         </a>
    //                         <a href="#" class="alert-msg-single-div _1 w-inline-block">
    //                             <div class="div-block-141">
    //                                 <div class="r360-notif-icon warning"></div>
    //                                 <div class="r360notification-single-content"><span class="username-notification">Samue</span>l waiting for order</div>
    //                             </div>
    //                             <div class="r360-clock-alarm-notif"><span class="text-span-21"></span> 9:35 m</div>
    //                         </a>

    //                     </div>
    //                 </div>
    //             </div>
    //         </div>

    //         <div class="dashboard-flex">
    //             {/* <div class="left-nav-new">
    //                 <div class="left-nav-wrapper">

    //                     <a href="#" class="menu-link dashboard-link w-inline-block w--current">
    //                         <div class="left-menu-icons cur">&#xf4fe;</div>
    //                         <div class="text-block-4 cur2">User Management</div>
    //                     </a>


    //                     <div class="profile-container">
    //                         <div class="profile-picture"><img src="images/profile-picture-300x300.jpg" width="125" alt="" class="profile-img" /></div>
    //                         <div data-delay="0" class="profile-name-wrapper w-dropdown">
    //                             <div class="profile-dropdown-toggle w-dropdown-toggle">
    //                                 <div class="down-arrow"></div>
    //                                 <div class="profile-text">Mr.  John Ashley</div>
    //                             </div>
    //                             <nav class="profile-dropdown-list w-dropdown-list">
    //                                 <a href="#" class="w-dropdown-link">Mr. Arvind Singh</a>
    //                                 <a href="#" class="w-dropdown-link">Mr. Arun Rathi</a>
    //                                 <a href="#" class="w-dropdown-link">Mr. Arvind lal</a>
    //                             </nav>
    //                         </div>
    //                     </div>
    //                     <div class="submenunavs">
    //                         <a href="#" class="menu-link dashboard-link w-inline-block">
    //                             <div class="left-menu-icons"></div>
    //                             <div class="text-block-4">thermal Printer</div>
    //                         </a>
    //                         <a href="#" class="menu-link dashboard-link w-inline-block">
    //                             <div class="left-menu-icons"></div>
    //                             <div class="text-block-4">App Settings</div>
    //                         </a>
    //                         <a href="pos.html" class="menu-link dashboard-link w-inline-block">
    //                             <div class="left-menu-icons"></div>
    //                             <div class="text-block-4">POS Settings</div>
    //                         </a>
    //                         <a id="btnSignOut" href="#" class="menu-link dashboard-link w-inline-block">
    //                             <div class="left-menu-icons"></div>
    //                             <div class="text-block-4">Logout</div>
    //                         </a>
    //                     </div>
    //                 </div>
    //             </div> */}
    //             <div class="right-body">
    //                 <div class="main-blocks-section ms">
    //                     <div class="div-block-94" id="TransactionType">
    //                         <a href="#" class="main-sub-blocks w-inline-block w--current" id="btnUpcomingOrderLink">
    //                             <div class="mainb-block-left">
    //                                 <div class="mainb-block-label">UPCOMING <span class="types">..</span></div>
    //                             </div>
    //                             <div class="report-block-right">
    //                                 <div class="text-block-3"></div>
    //                             </div>
    //                             <div class="selected-arrow" style="display:none"></div>
    //                             <div class="notifcount ">
    //                                 <div class="text-block-46 upcoming">0</div>
    //                             </div>
    //                         </a>
    //                         <a href="#" class="main-sub-blocks w-inline-block w--current" id="btnScheduledOrderLink">
    //                             <div class="mainb-block-left">
    //                                 <div class="mainb-block-label">SCHEDULED <span class="types">..</span></div>
    //                             </div>
    //                             <div class="report-block-right">
    //                                 <div class="text-block-3"></div>
    //                             </div>
    //                             <div class="selected-arrow" style="display:block"></div>
    //                             <div class="notifcount ">
    //                                 <div class="text-block-46 scheduled">0</div>
    //                             </div>
    //                         </a>
    //                         <a href="#" class="main-sub-blocks w-inline-block " id="btnCompletedOrderLink">
    //                             <div class="mainb-block-left">
    //                                 <div class="mainb-block-label">COMPLETED <span class="types">..</span></div>
    //                             </div>
    //                             <div class="report-block-right">
    //                                 <div class="text-block-3"></div>
    //                             </div>
    //                             <div class="selected-arrow" style=""></div>
    //                             <div class="notifcount ">
    //                                 <div class="text-block-46 completed">0</div>
    //                             </div>
    //                         </a>
    //                     </div>
    //                 </div>
    //                 <div class="setupt-wrapper">
    //                     {children}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )




}

// export default App;
