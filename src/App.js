import React, { useState } from "react";
import "./App.css"
import { employee } from "./data/table1";
import { emp } from "./data/table2";
function App() {
  const [isActive, setActive] = useState(false);
  const datas=employee;

  datas.forEach((data, i) => {
    data.id = i + 1;
  });

  const customers = emp;
  customers.forEach((customer,j) =>{
    customer.id = j+1;
  })
  const toggleClass = () => {
    setActive(!isActive);
  };

  return (
    <div className="App">
  
      <section id="sidebar"  className={isActive ? 'hide': null} >
        <a href="#" class="brand">
          <i class='bx bxs-smile'></i>
          <span class="text">AdminHub</span>
        </a>
        <ul class="side-menu top">
          <li class="active">
            <a href="#">
              <i class='bx bxs-dashboard' ></i>
              <span class="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-user-plus' ></i>
              <span class="text">Add Candidate</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-dashboard' ></i>
              <span class="text">Assignment Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-file-txt' ></i>
              <span class="text">My Timesheet</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-file' ></i>
              <span class="text">Approve Timesheet</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class='bx bxs-log-in' ></i>
              <span class="text">Login to HRMS</span>
            </a>
          </li>
        </ul>
        <ul class="side-menu">
          <li>
            <a href="#" class="Signout">
              <i class='bx bxs-log-out-circle' ></i>
              <span class="text">Sign Out</span>
            </a>
          </li>
        </ul>
      </section>
     
      <section id="content">
       
        <nav>
          <i  class='bx bx-menu'  onClick={toggleClass}  ></i>
          <a href="#" class="nav-link">Approve Timesheet</a>
          <a href="#" class="profile">
            <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g"/>
          </a>
          <a href="#" class="text">
            <p>Good Morning</p> 
            <p>John Doe</p>
          </a>
          <a href="#" class="notification">
            <i class='bx bxs-bell' ></i>
          </a>
        </nav>
      
        <main>

          <ul class="box-info">
            <li>
              <span class="text">
                <h3>Total</h3>
                <p>64</p>
              </span>
              <i class='bx bx-hash'></i>
            </li>
            <li>
              <span class="text">
                <h3>Pending</h3>
                <p>64</p>
              </span>
              <i class='bx bxs-time-five' ></i>
            </li>
            <li>
              <span class="text">
                <h3>Approved</h3>
                <p>64</p>
              </span>
              <i class='bx bxs-check-circle' ></i>
            </li>
            <li>
              <span class="text">
                <h3>Clarification Pending</h3>
                <p>64</p>
              </span>
              <i class='bx bxs-error-circle' ></i>
            </li>
          </ul>


          <div class="table-data">
            <div class="emp">
              <div class="head">
                <form action="#">
                  <div class="form-input">
                    <input type="search" placeholder="Search candidate" />
                    <button type="button" class="search-btn"><i class='bx bx-search' ></i></button>
                  </div>
                </form>
              </div>
              <ul class="emp-list">
                <span class="text">
                  {customers.map((customer)=>(
                  <li key={customer.id}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_vxRX-Zpn6wkXhak46Z4Qf6119il3yOeb8S4Axsf7rA&s"></img>
                    <p>{customer.name}</p>
                    <p>{customer.designation}</p>
                  </li>
                  ))}
                </span>
              </ul>
            </div>
            <div class="order">
              <div class="head">
                <h3>All Timesheets</h3>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Company</th>
                    <th>Week Ending</th>
                    <th>Total Hours</th>
                    <th>Submitted At</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {datas.map((data)=>(
                  <tr key={data.id}>
                    <td>
                      <img src="https://secure.gravatar.com/avatar/d09eaad01aea86c51b4f892b4f8abf6f?s=100&d=wavatar&r=g"/>
                      <p>{data.name}</p>
                    </td>
                    <td>{data.department}</td>
                    <td>{data.company}</td>
                    <td>{data.weekending}</td>
                    <td>{data.totalhours}</td>
                    <td>{data.submittedat}</td>
                    <td><span>{data.status}</span></td>
                  </tr>
                  ))}
                  <tr>
                    <td>Rows per page</td>
                    <td>5 <i class="bx bxs-down-arrow"></i></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1-5 of 25</td>
                    <td><i class='bx bx-chevron-left'></i>         <i class='bx bxs-chevron-right'></i></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default App;