
// Styles
import './styles/TopBar.css';


/**
 * Top Bar Component
 * 
 * Displays the top navigation bar with user name and navigation links
 * 
 * @returns The Top Bar JSX element
 */
export default
function TopBar()
{
    return (
        <div className='TopBar'>
            <div className='TopBarHamburger'></div>
            <div className='TopBarSections'>
                    <a href="#home" className='NavLink'>Home</a>
                    <a href="#projects" className='NavLink'>Projects</a>
                    <a href="#about" className='NavLink'>About Me</a>
                    <a href="#contact" className='NavLink'>Contact</a>
            </div>
            <div className='TopBarLanguageSelect'></div>
        </div>
    );
}