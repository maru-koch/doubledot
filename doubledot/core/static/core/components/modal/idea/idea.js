import React, { useEffect, useRef, useState } from "react";
import { IdeaLayout, IdeaPage, IdeaForm, PopUp} from "../index";
import { data } from "../../../constants/ideaData"
import { endpoints } from "../../../api";
import { useNavigate } from 'react-router-dom'

const INITIAL_PAGE = {id: 1, title: 'Got a Project You want to discuss?', subTitle: 'Your Journey is about to start', cards: Array(1)}
const INITIAL_QUESTION_ANSWER = []

export const Idea=({close})=>{

    const [dataArr, setDataArr]= useState([])
    const [pageObject, setPageObject] = useState(INITIAL_PAGE)
    const [questionAnswer, setQuestionAnswer] = useState(INITIAL_QUESTION_ANSWER)
    const [showForm, setShowForm] = useState(false)
    const [msgSent, setMsgSent] = useState(false)
    
    // const navigate = useNavigate()

    let index = useRef(0)

    const onRadioSelect=(question, answer)=>{
        const _QA = {}
        _QA[question] = answer
        questionAnswer.push(_QA)
        setQuestionAnswer(questionAnswer=>(questionAnswer))
        console.log(questionAnswer)
    }

    const nextPage=()=>{
        if (index.current < dataArr.length-1){
            index.current ++
            const arr = dataArr[index.current]
            setPageObject(pageObject =>({...pageObject, id:arr.id, title:arr.title, subTitle:arr.subTitle, cards:arr.cards}))
        }else{
            setPageObject(pageObject =>({...pageObject, id:'', title:"Let's chat...", subTitle:'', cards:[]}))
            setShowForm(true)
        }

    }

    const handleSubmit=(formData)=>{
        formData['preferences'] = questionAnswer
        const res = endpoints.sendEmail(formData)

        // const status_code = res.data['status']
        // if (status_code === 200){
        //     setMsgSent(true)
        // }
        setPageObject(pageObject =>({...pageObject, id:'', title:'', subTitle:'', cards:[]}))
        setMsgSent(true)
    }

    const backToHome=()=>{
        setMsgSent(false)
        showForm(false)
        close()
        // navigate('/')
    }

    useEffect(()=>{
        // Sets the data when page is loaded

        setDataArr(data)
        var dataArray = data
        const arr = dataArray[0]
        setPageObject(pageObject =>({...pageObject, id:arr.id, title:arr.title, subTitle:arr.subTitle, cards:arr.cards}))
    }, [])


    return (
        <IdeaLayout title={pageObject.title} subtitle={pageObject.subTitle} close={close}>
            {
             msgSent?
                <PopUp 
                    title="Message Sent" 
                    content="We have received your message. We will get in touch with you shortly"
                    btnText="ok"
                    action={close}
                />
                :
            showForm?
                <IdeaForm handleSubmit={handleSubmit}/>
                :
                <IdeaPage page={pageObject} nextPage={nextPage} handleRadioSelect={onRadioSelect}/>
            }
        </IdeaLayout>
    )
}