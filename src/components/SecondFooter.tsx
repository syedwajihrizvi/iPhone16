import AccordianComponent from "./AccordianComponent"

const accordianData = [
    {
        title: <h3>Shop and Learn</h3>,
        body: (
            <ul className="accordian__list">
                <li>Store</li>
                <li>Mac</li>
                <li>iPad</li>
                <li>iPhone</li>
                <li>Watch</li>
                <li>Vision</li>
                <li>AirPods</li>
                <li>TV & Home</li>
                <li>AirTag</li>
                <li>Accessories</li>
                <li>Gift Cards</li>
            </ul>          
        )
    },
    {
        title: <h3>Apple Wallet</h3>,
        body: (
            <ul className="accordian__list">
                <li>Wallet</li>
                <li>Apple Pay</li>
            </ul>
        )
    },
    {
        title: <h3>Account</h3>,
        body: (
            <ul className="accordian__list">
                <li>Manage Your Apple Account</li>
                <li>Apple Store Account</li>
                <li>iCloud.com</li>
            </ul>          
        )
    },
    {
        title: <h3>Entertainment</h3>,
        body: (
            <ul className="accordian__list">
                <li>Apple One</li>
                <li>Apple TV+</li>
                <li>Apple Music</li>
                <li>Apple Arcade</li>
                <li>Apple Fitness+</li>
                <li>Apple News+</li>
                <li>Apple Podcasts</li>
                <li>Apple Books</li>
                <li>Apple Store</li>
            </ul>          
        )
    },
    {
        title: <h3>Apple Store</h3>,
        body: (
            <ul className="accordian__list">
                <li>Find a Store</li>
                <li>Genius Bar</li>
                <li>Today at Apple</li>
                <li>Group Reservations</li>
                <li>Apple Camp</li>
                <li>Apple Store App</li>
                <li>Certified Refurbished</li>
                <li>Apple Trade In</li>
                <li>Financing</li>
                <li>Irder Status</li>
                <li>Shopping Help</li>
            </ul>         
        )
    },
    {
        title: <h3>For Business</h3>,
        body: (
            <ul className="accordian__list">
                <li>Apple and Business</li>
                <li>Shop for Business</li>
                <li>Business Financing</li>
            </ul>         
        )
    },
    {
        title: <h3>For Education</h3>,
        body: (
            <ul className="accordian__list">
                <li>Apple and Education</li>
                <li>Shop for K-12</li>
                <li>Shop for University</li>
                <li>Education Financing</li>
            </ul>        
        )
    },
    {
        title: <h3>About Apple</h3>,
        body: (
            <ul className="accordian__list">
                <li>Newsroom</li>
                <li>Apple Leadership</li>
                <li>Career Opportunities</li>
                <li>Investors</li>
                <li>Ethics & Compliance</li>
                <li>Events</li>
                <li>Contact Apple</li>
            </ul>          
        )
    }
]

function SecondFooter() {
    return (
        <footer className="second__footer">
            {accordianData.map(accordian => (
                <AccordianComponent title={accordian.title} content={accordian.body}/>
            ))}
        </footer>
    )
}

export default SecondFooter