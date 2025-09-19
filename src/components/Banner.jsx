import { Container,Row ,Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from '../assets/img/header-img.svg'
import {useState,useEffect} from 'react'


const Banner=()=>{

    const toRotate=["Maithili Mali","Software Engineer","Devops Engineer"];
    const[loopNum,setLoopNum]=useState(0);
    const[isDeleting,setIsdeleting]=useState(false);
    const[text,setText]=useState('');
    const[delta,setDelta]=useState(300-Math.random()*100);
    const period=200;

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick();
        },delta)
        return ()=>{clearInterval(ticker)};
    },[text])

    const tick=()=>{
        let i=loopNum % toRotate.length;
        let fullText=toRotate[i];
        let updateText=isDeleting ? fullText.substring(0,text.length -1):fullText.substring(0,text.length+1)

        setText(updateText);
        if(isDeleting){
            setDelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && updateText === fullText){
            setIsdeleting(true);
            setDelta(period)
        }else if(isDeleting && updateText === ''){
            setIsdeleting(false)
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to My Portfolio</span>
                        <h1>{`Hi I am `}<span className="wrap">{text}</span></h1>
                        <button onClick={()=>console.log('connect')}>Lets Connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Banner