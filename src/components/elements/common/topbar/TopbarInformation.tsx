import React from 'react';
import * as Helper from 'lib/Helper';
import GlobalAlert from 'lib/GlobalAlert';

function TopbarInformation() {

    const handleLogOutClick = () => {
        Helper.removeLoginInfo();
        GlobalAlert.thenLocationReload({
            text: '로그아웃 되었습니다.'
        });
    }

    return (
        <>
            <li className="nav-item dropdown no-arrow">

                <button type="button" className="btn btn-primary btn-sm btn-block" onClick={() => handleLogOutClick()}>로그아웃</button>
                {/* <Link to={process.env.PUBLIC_URL + "/"} className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small" onClick={() => handleLogOutClick}>로그아웃</span>
                    <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt=""/>
                </Link> */}
                {/* <!-- Dropdown - User Information --> */}
                {/* <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item" href="{null}"> <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> Profile </Link>
                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item" href="{null}"> <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i> Settings </Link>
                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item" href="{null}"> <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i> Activity Log </Link>
                    <div className="dropdown-divider"></div>
                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item" data-toggle="modal" data-target="#logoutModal"> <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> Logout </Link>
                </div> */}
            </li>
        </>
    );
}

export default TopbarInformation;