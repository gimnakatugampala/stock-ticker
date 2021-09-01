import React from 'react'
import './styles.css'

import Table from 'react-bootstrap/Table'


const Profile = ({profile}) => {
    return (
        <div style={{margin:'15px'}}>

            <div className="row" style={{margin:'30px'}}>
                <div className="col-md-5 m-3">
                {profile.assetProfile == null ? 'N/A' : profile.assetProfile.address1} <br />
                {profile.assetProfile.city == undefined ? 'N/A': profile.assetProfile.city}, {profile.assetProfile.state == undefined ?'N/A' : profile.assetProfile.state}   {profile.assetProfile.zip == undefined ? 'N/A' : profile.assetProfile.zip} <br />
                {profile.assetProfile.country == undefined? 'N/A' : profile.assetProfile.country} <br />
                <span style={{color:'#0d6efd'}}>{profile.assetProfile.phone == undefined ?'N/A' : profile.assetProfile.phone } </span><br />
               <span style={{color:'#0d6efd'}}>{profile.assetProfile.website == undefined ? 'N/A' : profile.assetProfile.website}</span> <br />

                </div>
                <div className="col-md-5 m-3">
                Sector(s): <span style={{fontWeight:'bold'}}>{profile.assetProfile.address1 == undefined ? 'N/A' : profile.assetProfile.address1} </span><br />
                Industry: <span style={{fontWeight:'bold'}}>{profile.assetProfile.industry == undefined ? 'N/A' : profile.assetProfile.industry} </span><br />
                Full Time Employees: <span style={{fontWeight:'bold'}}>{profile.assetProfile.fullTimeEmployees == undefined ? 'N/A' : profile.assetProfile.fullTimeEmployees} </span><br />
                </div>
            </div>


            <h5>Key Executives</h5>
           <Table striped bordered hover style={{margin:'15px'}}>
            <thead>
                <tr>
                <th><h6>Name</h6></th>
                <th><h6>Title</h6></th>
                <th><h6>Pay</h6></th>
                <th><h6>Exercised</h6></th>
                <th><h6>Year Born</h6></th>
                
                </tr>
            </thead>
            <tbody>
                
                {profile?profile.assetProfile.companyOfficers?.map((pro,index) => (
                    <tr key={index}>
                    <td>{pro.name? pro.name : 'N/A'}</td>
                    <td>{pro.title? pro.title : 'N/A'}</td>
                    <td>{pro.totalPay? pro.totalPay.fmt : 'N/A'}</td>
                    <td>{pro.unexercisedValue? pro.unexercisedValue.longFmt : '0'}</td>
                    <td>{pro.yearBorn? pro.yearBorn : 'N/A'}</td>
                    </tr>
                )) : 'N/A'}
               
                
            </tbody>
            </Table>  
            
            <h3 style={{margin:'10px'}}>Description</h3>
            <p>{profile?profile.assetProfile.longBusinessSummary : 'N/A'}  </p>
        </div>
    )
}

export default Profile
