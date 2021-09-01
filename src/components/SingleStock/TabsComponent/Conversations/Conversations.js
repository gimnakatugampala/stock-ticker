import React from 'react'
import './styles.css'

import Card from 'react-bootstrap/Card'


const Conversations = ({conversations}) => {
    return (
        <div>
            <h5 style={{margin:'15px'}}>Conversations</h5>

            {conversations?conversations.canvassMessages?.map((conversation,index) =>(
                   <Card key={index} style={{margin:'20px'}}>
                   <Card.Body>
                       <Card.Title style={{display:'flex',color:'#0d6efd'}}>
                       <Card.Img style={{width:'50px',height:'35px',borderRadius:'50%',marginRight:'10px',justifySelf:'center'}} src={conversation.meta.author.image.url} />
                       {conversation.meta.author.nickname}
                       </Card.Title>
                       <Card.Text style={{marginLeft:'20px'}}>
                       {conversation.details.userText}
                       </Card.Text>
                       
                      <span style={{margin:'15px',padding:'10px'}}><i class="fas fa-thumbs-up"></i>{conversation.reactionStats.upVoteCount}</span>  <span> <i class="fas fa-thumbs-down"></i>{conversation.reactionStats.downVoteCount}</span> 
                
                   </Card.Body>
                   </Card>

            )) : 'Null'}
            
         
        </div>
    )
}

export default Conversations
