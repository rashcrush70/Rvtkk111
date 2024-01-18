import './header.css';

export default function Burger() {
    function ShowMenu() {
        var navPanel = document.getElementById("navPanel");
        if (navPanel.style.left === "0px") {
            navPanel.style.left = "-250px";
        } else {
            navPanel.style.left = "0px";
        }
    }
    window.addEventListener("scroll", function FixingMenu() {
        var navPanel = document.getElementById("navPanel");
        if (window.innerWidth > 1200) {
            if (window.scrollY >= 80) {
                navPanel.style.position = 'fixed';
            } else {
                navPanel.style.position = 'static';
            }
        } 
    });
    return (
        <div>
            <div className='burger-button' onClick={ShowMenu}>
                <span className="triPoloski"></span>
                <span className="triPoloski"></span>
                <span className="triPoloski"></span>
            </div>
            <div className="navigation-panel" id="navPanel">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">About the college</a>
                <a href="#" className="nav-link">How to get into</a>
                <a href="#" className="nav-link">To the applicant</a>
            </div>
        </div>
    );
}
