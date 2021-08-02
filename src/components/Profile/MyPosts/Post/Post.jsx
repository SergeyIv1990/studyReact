import React from 'react';
import CatAva from '../../../../img/CatAva.jpg';
import pop from './Post.module.css';

const Post = (props) => {
    return (      

              <div className={pop.item}>
               <img src={CatAva} />
                
                { props.message }
                <div>
                <span>Like</span>   { props.likesCount }
                </div>
                
                <div>
            
            
            </div>
            </div>
        )
        
        };
    
export default Post;