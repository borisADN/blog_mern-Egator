import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
<footer>
<ul className='footer__categories'>

<li><Link to="/posts/categories/:Agriculture">Agriculture</Link></li>
<li><Link to="/posts/categories/:Animals">Animals</Link></li>
<li><Link to="/posts/categories/:Architecture">Architecture</Link></li>
<li><Link to="/posts/categories/:Art">Art</Link></li>
<li><Link to="/posts/categories/:Books">Books</Link></li>
<li><Link to="/posts/categories/:Business">Business</Link></li>
<li><Link to="/posts/categories/:Computers">Computers</Link></li>
<li><Link to="/posts/categories/:Education">Education</Link></li>

</ul>
<div className="footer__copyright">
  <small>&copy; {new Date().getFullYear()}  All rights reserved</small>
</div>
</footer>
  )
}

export default Footer