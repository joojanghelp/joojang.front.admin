import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            {/* <!-- Sidebar --> */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-10">JooJang Admin<sup>v1</sup></div>
                </Link>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0"></hr>

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item">
                    <Link to="/" className="nav-link" ><i className="fas fa-fw fa-tachometer-alt"></i><span>Dashboard</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"></hr>

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">회원</div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <Link to="/users/1" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"><i className="fas fa-fw fa-cog"></i><span>회원 리스트</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/books/activity/C11110/1" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"><i className="fas fa-fw fa-cog"></i><span>독서 활동 리스트</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"></hr>

                {/* <!-- Heading --> */}
                <div className="sidebar-heading"> 책 </div>
                <li className="nav-item">
                    <Link to="/books/recommend/B11000/1" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"><i className="fas fa-fw fa-cog"></i><span>추천 도서</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/book/create" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"><i className="fas fa-fw fa-cog"></i><span>책 등록</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/books/1" className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"><i className="fas fa-fw fa-cog"></i><span>책 리스트</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block"></hr>

            </ul>
            {/* <!-- End of Sidebar --> */}
        </>
    );
}

export default Sidebar;