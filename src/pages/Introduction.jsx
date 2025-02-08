import "../styles/Global.css"
import SplitText from "../components/Introduction/SplitText"

const Introduction  = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
      };
    return (
        <div className="introduction">
            <div className="intro-content">
                <SplitText
                    text="Hello, I am Angie!"
                    className="subtitle"
                    delay={150}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    easing="easeOutCubic"
                    threshold={0.2}
                    rootMargin="-50px"
                    onLetterAnimationComplete={handleAnimationComplete}
                /> 
                <div className="intro-details">
                    <h2>Frontend <span className="gradient-title">Developer</span></h2>
                    <p className="text-white">I'm passionate about creating beautiful and functional websites. I love working with modern technologies and collaborating with talented teams to bring projects to life.</p>
                </div>
            </div>
            <div className="intro-image">
                <img src="/src/assets/img/Introduction_image.png" alt="Angie profile" className="profile-image"></img>
            </div>
        </div>
    );
};

export default Introduction;