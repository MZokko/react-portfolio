import {useState,useEffect} from 'react'
import axios from "axios";
//styles imp
import Title from '../UI/TitleStyle'
import {AdviceContainer,CardAdvice,CardAdviceTitleSection,CardAdviceContent,AdviceButton} from './AdviceApiStyle'

const AdviceApi = () => {
    const [randomAdvice,setRandomAdvice] = useState('ready?')

    const randomAdviceHandler = ()=>{
        axios.get('https://api.adviceslip.com/advice')
        .then(
          res=>{
              setRandomAdvice(res.data.slip.advice)
              return randomAdvice
              
          })
        .catch((error)=>{
            return console.log(error)
        })
        return randomAdvice
    }

    return (
        <>
        <AdviceContainer>
            
                <CardAdviceTitleSection>
                    <Title>Just a piece of advice.</Title>
                    <AdviceButton onClick={randomAdviceHandler}>Go</AdviceButton>
                </CardAdviceTitleSection>
                <CardAdviceContent>
                    {randomAdvice}
                </CardAdviceContent>


            
        </AdviceContainer>
        </>
    )
}

export default AdviceApi
