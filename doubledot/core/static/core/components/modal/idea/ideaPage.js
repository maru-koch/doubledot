import React, { useState, useEffect, useRef} from "react"
import './ideaPage.css'

const Card =({subtitle, card, handleOnChange})=>{
    // GOT IDEA CARD
    const [checked, setChecked] = useState(false)
    
    const radioBtn = useRef() // references the radio input
    
    const onRadioSelect=(question, answer)=>{
        handleOnChange(question, answer)
        setChecked(true)
    }

    useEffect(()=>{
        setChecked(false)
    }, [subtitle])

    return (
        <div className="card">
            <div className="radio">
                {card.title && <input type="radio" checked={checked} ref={radioBtn} name="radioBtn" radioGroup="radioBtn" onChange={()=>onRadioSelect(subtitle, card.title)}/>}
            </div>
            <div className="icon" onClick={()=>onRadioSelect(subtitle, card.title)}>
                <img src={`${card.icon}`} alt={card.title}/>
            </div>
            <div className="title">
                <h3>{card.title}</h3>
                {card.subtitle&&<p>{card.subtitle}</p>}
            </div>
        </div>
    )
}

export const IdeaPage=({page, nextPage, handleRadioSelect})=>{

    // THE GOT IDEA COMPONENT
    // Displaced when the Got an Idea button on the header is clicked

    const [selected, setSelected] = useState(false)
    const [clicked, setClicked] = useState(false)

    const handleOnChange=(question, answer)=>{
        setSelected(true)
        handleRadioSelect(question, answer)
    }

    const checkRadioSelection=()=>{
        if (page.id > 1 && !selected){
            setClicked(true)
        }else{
            setClicked(false)
            nextPage()
            setSelected(false)
        }
    }


    return (
        <>
            <section className="idea-page-container">

                {page.id > 1 && clicked && !selected && <p className="option-prompt">Please select an Option</p>}
                
                <div className="idea-page-wrapper">
                {
                    page.cards.map((card, id)=><Card key={id} subtitle ={page.subTitle} card={card} handleOnChange={handleOnChange}/>)
                }
                </div>

                <div className="btn-holder">
                    <button 
                        className="btn" 

                        // if first page, go to the next page when the nextPage function is called
                        // if not first page and the radio is select, able to go next, else show prompting askign the user to select an option
                       
                        onClick = { page.id <= 1 ? () => (nextPage()) : ()=> checkRadioSelection() }>
                        Continue
                    </button> 
                </div>
            </section>
           
        </>
        
    )
}