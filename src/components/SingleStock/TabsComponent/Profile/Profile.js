import React from 'react'
import './styles.css'

import Table from 'react-bootstrap/Table'


const Profile = ({profile}) => {
    return (
        <div style={{margin:'15px'}}>

            <div className="row" style={{margin:'30px'}}>
                <div className="col-md-5 m-3">
                {profile?profile.assetProfile.address1 : 'N/A'} <br />
                {profile?profile.assetProfile.city : 'N/A'}, {profile?profile.assetProfile.state : 'N/A'}   {profile?profile.assetProfile.zip : 'N/A'} <br />
                {profile?profile.assetProfile.country : 'N/A'} <br />
                <span style={{color:'#0d6efd'}}>{profile?profile.assetProfile.phone : 'N/A'} </span><br />
               <span style={{color:'#0d6efd'}}>{profile?profile.assetProfile.website : 'N/A'}</span> <br />

                </div>
                <div className="col-md-5 m-3">
                Sector(s): <span style={{fontWeight:'bold'}}>{profile?profile.assetProfile.address1 : 'N/A'} </span><br />
                Industry: <span style={{fontWeight:'bold'}}>{profile?profile.assetProfile.industry : 'N/A'} </span><br />
                Full Time Employees: <span style={{fontWeight:'bold'}}>{profile?profile.assetProfile.fullTimeEmployees : 'N/A'} </span><br />
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
