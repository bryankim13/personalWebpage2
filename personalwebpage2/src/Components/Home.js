import { Reveal } from './Reveal.js'
import { ScrollWords } from './ScrollWords.js'
export default function Home() {
    return <div className='homeContainer' >
        <div className= "homeText">
            <Reveal>
                <div className="titleSubheading1">
                    <h3>Hi,</h3>
                </div>
            </Reveal>
            <Reveal>
                <div className="titleHeading">
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

            <ScrollWords>
                <></>
            </ScrollWords>
            </div>
    </div>
}