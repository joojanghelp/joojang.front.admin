import React from 'react';
import { Link } from 'react-router-dom';

function DefaultPage() {
    return (
        <>
            <div id="wrapper">

            {/* <!-- Sidebar --> */}
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/* <!-- Sidebar - Brand --> */}
                <Link to={process.env.PUBLIC_URL + "/"} className="sidebar-brand d-flex align-items-center justify-content-center">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
                </Link>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0"></hr>

                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item">
                    <Link to={process.env.PUBLIC_URL + "/"} className="nav-link" ><i className="fas fa-fw fa-tachometer-alt"></i><span>Dashboard</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"></hr>

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">Interface</div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <Link to={process.env.PUBLIC_URL + "/"} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo"><i className="fas fa-fw fa-cog"></i><span>Components</span></Link>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Components:</h6>
                            <Link to={process.env.PUBLIC_URL + "/"} className="collapse-item" href="{null}">Buttons</Link>
                            <Link to={process.env.PUBLIC_URL + "/"} className="collapse-item" href="{null}">Cards</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                <li className="nav-item">
                    <Link to={process.env.PUBLIC_URL + "/"} className="nav-link collapsed" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities"> <i className="fas fa-fw fa-wrench"></i> <span>Utilities</span> </Link>
                    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Custom Utilities:</h6>
                            <Link to={process.env.PUBLIC_URL + "/"} className="collapse-item" href="{null}">Colors</Link>
                            <Link to={process.env.PUBLIC_URL + "/"} className="collapse-item" href="{null}">Borders</Link>
                            <Link to={process.env.PUBLIC_URL + "/"} className="collapse-item" href="{null}">Animations</Link>
                            <Link to={process.env.PUBLIC_URL + "/"} className="collapse-item" href="{null}">Other</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider"></hr>

                {/* <!-- Heading --> */}
                <div className="sidebar-heading"> Addons </div>

                {/* <!-- Nav Item - Pages Collapse Menu --> */}
                <li className="nav-item">
                    <Link to={process.env.PUBLIC_URL + "/"} className="nav-link collapsed" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages"> <i className="fas fa-fw fa-folder"></i> <span>Pages</span> </Link>
                    <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Login Screens:</h6>
                            <Link to={process.env.PUBLIC_URL + "/"} className="collapse-item" href="{null}">Login</Link>
                            <Link to={process.env.PUBLIC_URL + "/"} className="collapse-item" href="{null}">Register</Link>
                            <Link to={process.env.PUBLIC_URL + "/"} className="collapse-item" href="{null}">Forgot Password</Link>
                            <div className="collapse-divider"></div>
                            <h6 className="collapse-header">Other Pages:</h6>
                            <Link to={process.env.PUBLIC_URL + "/"} className="collapse-item" href="{null}">404 Page</Link>
                            <Link to={process.env.PUBLIC_URL + "/"} className="collapse-item" href="{null}">Blank Page</Link>
                        </div>
                    </div>
                </li>

                {/* <!-- Nav Item - Charts --> */}
                <li className="nav-item">
                    <Link to={process.env.PUBLIC_URL + "/"} className="nav-link" href="{null}"> <i className="fas fa-fw fa-chart-area"></i> <span>Charts</span></Link>
                </li>

                {/* <!-- Nav Item - Tables --> */}
                <li className="nav-item active">
                    <Link to={process.env.PUBLIC_URL + "/"} className="nav-link" href="{null}"> <i className="fas fa-fw fa-table"></i> <span>Tables</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider d-none d-md-block"></hr>

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>

            </ul>
            {/* <!-- End of Sidebar --> */}

            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">

                {/* <!-- Main Content --> */}
                <div id="content">

                    {/* <!-- Topbar --> */}
                    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                        {/* <!-- Sidebar Toggle (Topbar) --> */}
                        <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                            <i className="fa fa-bars"></i>
                        </button>

                        {/* <!-- Topbar Search --> */}
                        <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <i className="fas fa-search fa-sm"></i>
                                    </button>
                                </div>
                            </div>
                        </form>

                        {/* <!-- Topbar Navbar --> */}
                        <ul className="navbar-nav ml-auto">

                            {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                            <li className="nav-item dropdown no-arrow d-sm-none">
                                <Link to={process.env.PUBLIC_URL + "/"} className="nav-link dropdown-toggle" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i className="fas fa-search fa-fw"></i> </Link>
                                {/* <!-- Dropdown - Messages --> */}
                                <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
                                    <form className="form-inline mr-auto w-100 navbar-search">
                                        <div className="input-group">
                                            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"/>>
                                            <div className="input-group-append">
                                                <button className="btn btn-primary" type="button">
                                                    <i className="fas fa-search fa-sm"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </li>

                            {/* <!-- Nav Item - Alerts --> */}
                            <li className="nav-item dropdown no-arrow mx-1">
                                <Link to={process.env.PUBLIC_URL + "/"} className="nav-link dropdown-toggle" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-bell fa-fw"></i>
                                    {/* <!-- Counter - Alerts --> */}
                                    <span className="badge badge-danger badge-counter">3+</span>
                                </Link>
                                {/* <!-- Dropdown - Alerts --> */}
                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                                    <h6 className="dropdown-header">Alerts Center</h6>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item d-flex align-items-center" href="{null}">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-primary"> <i className="fas fa-file-alt text-white"></i> </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 12, 2019</div>
                                            <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                        </div>
                                    </Link>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item d-flex align-items-center" href="{null}">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-success"> <i className="fas fa-donate text-white"></i> </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 7, 2019</div>
                                            $290.29 has been deposited into your account!
                                        </div>
                                    </Link>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item d-flex align-items-center" href="{null}">
                                        <div className="mr-3">
                                            <div className="icon-circle bg-warning">
                                                <i className="fas fa-exclamation-triangle text-white"></i>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="small text-gray-500">December 2, 2019</div>
                                            Spending Alert: We've noticed unusually high spending for your account.
                                        </div>
                                    </Link>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item text-center small text-gray-500" href="{null}">Show All Alerts</Link>
                                </div>
                            </li>

                            {/* <!-- Nav Item - Messages --> */}
                            <li className="nav-item dropdown no-arrow mx-1">
                                <Link to={process.env.PUBLIC_URL + "/"} className="nav-link dropdown-toggle" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-envelope fa-fw"></i>
                                    {/* <!-- Counter - Messages --> */}
                                    <span className="badge badge-danger badge-counter">7</span>
                                </Link>
                                {/* <!-- Dropdown - Messages --> */}
                                <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="messagesDropdown">
                                    <h6 className="dropdown-header"> Message Center </h6>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item d-flex align-items-center" href="{null}">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="https://source.unsplash.com/fn_BT9fwg_E/60x60" alt=""/>
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div className="font-weight-bold">
                                            <div className="text-truncate">Hi there! I am wondering if you can help me with a problem I've been having.</div>
                                            <div className="small text-gray-500">Emily Fowler · 58m</div>
                                        </div>
                                    </Link>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item d-flex align-items-center" href="{null}">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="https://source.unsplash.com/AU4VPcFN4LE/60x60" alt=""/>>
                                            <div className="status-indicator"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">I have the photos that you ordered last month, how would you like them sent to you?</div>
                                            <div className="small text-gray-500">Jae Chun · 1d</div>
                                        </div>
                                    </Link>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item d-flex align-items-center" href="{null}">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="https://source.unsplash.com/CS2uCrpNzJY/60x60" alt=""/>
                                            <div className="status-indicator bg-warning"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Last month's report looks great, I am very happy with the progress so far, keep up the good work!</div>
                                            <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                        </div>
                                    </Link>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item d-flex align-items-center" href="{null}">
                                        <div className="dropdown-list-image mr-3">
                                            <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60" alt=""/>
                                            <div className="status-indicator bg-success"></div>
                                        </div>
                                        <div>
                                            <div className="text-truncate">Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren't good...</div>
                                            <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                        </div>
                                    </Link>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item text-center small text-gray-500" href="{null}">Read More Messages</Link>
                                </div>
                            </li>

                            <div className="topbar-divider d-none d-sm-block"></div>

                            {/* <!-- Nav Item - User Information --> */}
                            <li className="nav-item dropdown no-arrow">
                                <Link to={process.env.PUBLIC_URL + "/"} className="nav-link dropdown-toggle" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Valerie Luna</span>
                                    <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60" alt=""/>
                                </Link>
                                {/* <!-- Dropdown - User Information --> */}
                                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item" href="{null}"> <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i> Profile </Link>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item" href="{null}"> <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i> Settings </Link>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item" href="{null}"> <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i> Activity Log </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link to={process.env.PUBLIC_URL + "/"} className="dropdown-item" data-toggle="modal" data-target="#logoutModal"> <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i> Logout </Link>
                                </div>
                            </li>

                        </ul>

                    </nav>
                    {/* <!-- End of Topbar --> */}

                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">

                        {/* <!-- Page Heading --> */}
                        <h1 className="h3 mb-2 text-gray-800">Tables</h1>
                        <p className="mb-4">DataTables is a third party plugin that is used to generate the demo table below. For more information about DataTables, please visit the <Link to={process.env.PUBLIC_URL + "/"} href="https://datatables.net">official DataTables documentation</Link>.</p>

                        {/* <!-- DataTales Example --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive">
                                    {/* <!-- Begin table --> */}
                                    {/* <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0"> */}
                                    <table className="table table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Name</th>
                                                <th>Position</th>
                                                <th>Office</th>
                                                <th>Age</th>
                                                <th>Start date</th>
                                                <th>Salary</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr>
                                                <td>Tiger Nixon</td>
                                                <td>System Architect</td>
                                                <td>Edinburgh</td>
                                                <td>61</td>
                                                <td>2011/04/25</td>
                                                <td>$320,800</td>
                                            </tr>
                                            <tr>
                                                <td>Garrett Winters</td>
                                                <td>Accountant</td>
                                                <td>Tokyo</td>
                                                <td>63</td>
                                                <td>2011/07/25</td>
                                                <td>$170,750</td>
                                            </tr>
                                            <tr>
                                                <td>Ashton Cox</td>
                                                <td>Junior Technical Author</td>
                                                <td>San Francisco</td>
                                                <td>66</td>
                                                <td>2009/01/12</td>
                                                <td>$86,000</td>
                                            </tr>
                                            <tr>
                                                <td>Cedric Kelly</td>
                                                <td>Senior Javascript Developer</td>
                                                <td>Edinburgh</td>
                                                <td>22</td>
                                                <td>2012/03/29</td>
                                                <td>$433,060</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <!-- End of table --> */}
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <!-- /.container-fluid --> */}

                </div>
                {/* <!-- End of Main Content --> */}

                {/* <!-- Footer --> */}
                <footer className="sticky-footer bg-white">
                    <div className="container my-auto">
                        <div className="copyright text-center my-auto">
                            <span>Copyright &copy; Your Website 2019</span>
                        </div>
                    </div>
                </footer>
                {/* <!-- End of Footer --> */}

            </div>
            {/* <!-- End of Content Wrapper --> */}

            </div>
            {/* <!-- End of Page Wrapper --> */}
        </>
    );
}

export default DefaultPage;