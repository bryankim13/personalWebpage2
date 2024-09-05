import { Reveal } from './RevealAnimation.js'
import { ScrollWords } from './ScrollWordsAnimation.js'
export default function Home() {
    return <div className='homeContainer' >
        <div className= "homeText">
            <Reveal overflowVal='visible'>
                <div className="titleHeading">
                    <h3>Hi,</h3>
                    <h1 style={{float: "left"}} className="introName">Bryan</h1>
                    <h4 style={{float: "right"}}>here.</h4>
                </div>
            </Reveal>
                <br></br>
            <Reveal>
                <div className="titleSubheading2">
                    <h3>Welcome to my portfolio</h3>
                </div>
            </Reveal>

            <ScrollWords/>
            </div>
    </div>
}