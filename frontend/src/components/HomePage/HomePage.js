import './HomePage.css';

function HomePage(){
    return (
        <>
            <div className='pptitleWrapper'>
                <img className='party_trumpet left' src='./images/trumpet-right.png' alt="YAY!"/>
                <h1 className='pptitle'>Welcome to Possum Party!</h1>
                <img className='party_trumpet right' src='./images/trumpet-right.png' alt="YAY!"/>
            </div>
            <div className='home-main'>
                <img src='./images/home_possum2.png' alt="Possum Party Logo"/>
                <div className='welcome-text'>
                    <div>Tired of corporate food waste?</div>
                    <div>Want to save on your bills?</div>
                    <div>Don't mind getting your hands dirty?</div>
                    <p/>
                    <span> Join the ever-growing </span>
                    <a href='https://en.wikipedia.org/wiki/Freeganism'>Freeganism</a>
                    <span> movement! Most of the food thrown away by big grocery stores is still perfectly safe and edible, even if it's technically past its sell-by date. Although there is still some stigma surrounding "dumpster diving," informed and safe diving is a great way to combat food waste while saving a few bucks in the process!</span>
                    <h3>Why not find a Dive Spot near you, and join the Possum Party today?</h3>
                </div>
            </div>
        </>
    )
}

export default HomePage;