import '../styles/navbar.css';

export default function NavBar (){
    return (
    <div className="container mx-auto m-0 bg-gray-800 font-sans font-semibold">
      <h1 className="icon float-left p-2"></h1> {/*add night mode icon*/}
      <nav className='float-right'>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>

    )
}