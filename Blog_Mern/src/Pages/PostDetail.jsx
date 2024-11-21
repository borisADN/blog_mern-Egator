import React from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../assets/Images/blog3.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={`/posts/werwer/edit`} className="btn sm primary">Edit</Link>
            <Link to={`/posts/werwer/delete`} className="btn sm danger">Delete</Link>
          </div>
        </div>
        <h1>This is the post title!</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, non consequatur veritatis dolorem et 
            modi nihil omnis. Consectetur nulla ut laboriosam suscipit debitis a, fugiat, maiores harum rem soluta 
            vitae quae eligendi voluptates officiis porro. Quasi possimus, architecto voluptates culpa minima
             ipsa, cupiditate vero, ex nulla veniam laboriosam earum. Laudantium asperiores, sed vel, sint eligendi esse 
             dicta magni fugit, eveniet quos distinctio voluptatem. Quo voluptates adipisci quisquam perspiciatis 
             nostrum nihil deserunt alias quia qui? Voluptate laudantium voluptas eveniet dolor maiores. Doloremque
              nisi illum, delectus sit a accusamus, doloribus vero magni excepturi enim eum assumenda dolorum fugit, 
              deleniti ipsam nobis aliquam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, non consequatur veritatis dolorem et 
            modi nihil omnis. Consectetur nulla ut laboriosam suscipit debitis a, fugiat, maiores harum rem soluta 
            vitae quae eligendi voluptates officiis porro. Quasi possimus, architecto voluptates culpa minima
             ipsa, cupiditate vero, ex nulla veniam laboriosam earum. Laudantium asperiores, sed vel, sint eligendi esse 
             dicta magni fugit, eveniet quos distinctio voluptatem. Quo voluptates adipisci quisquam perspiciatis 
             nostrum nihil deserunt alias quia qui? Voluptate laudantium voluptas eveniet dolor maiores. Doloremque
              nisi illum, delectus sit a accusamus, doloribus vero magni excepturi enim eum assumenda dolorum fugit, 
              deleniti ipsam nobis aliquam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, non consequatur veritatis dolorem et 
            modi nihil omnis. Consectetur nulla ut laboriosam suscipit debitis a, fugiat, maiores harum rem soluta 
            vitae quae eligendi voluptates officiis porro. Quasi possimus, architecto voluptates culpa minima
             ipsa, cupiditate vero, ex nulla veniam laboriosam earum. Laudantium asperiores, sed vel, sint eligendi esse 
             dicta magni fugit, eveniet quos distinctio voluptatem. Quo voluptates adipisci quisquam perspiciatis 
             nostrum nihil deserunt alias quia qui? Voluptate laudantium voluptas eveniet dolor maiores. Doloremque
              nisi illum, delectus sit a accusamus, doloribus vero magni excepturi enim eum assumenda dolorum fugit, 
              deleniti ipsam nobis aliquam?</p>

      </div>
    </section>
  )
}

export default PostDetail