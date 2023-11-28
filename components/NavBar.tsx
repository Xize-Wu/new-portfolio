import '../styles/navbar.css';

export default function NavBar (){
    return (
    <div className="container">
      <h1 className="icon"></h1> {/*add night mode icon*/}

      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>

    )
}