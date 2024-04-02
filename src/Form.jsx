import React from "react";

function Form(props) {

    const [newTranslation, setNewTranslation] = React.useState();
    const [selectedLanguage, setSelectedLanguage] = React.useState();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("https://api.mymemory.translated.net/get?q=" + newTranslation +"!&langpair=en|" + selectedLanguage)
        .then(res => res.json())
        .then(data => {
            props.getTranslation(data.responseData.translatedText)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <select name="languages" required onChange={(event) => setSelectedLanguage(event.target.value)}>
            <option value="">Select language</option>
            <option value="it">Italian</option>
            <option value="sv">Swedish</option>
            <option value="ru">Russian</option>
            <option value="no">Norwegian</option>
            <option value="da">Danish</option>
            <option value="ja">Japanese</option>
            <option value="zh">Chinese</option>
            </select>
            <br></br>
            <input type="text" onChange={(event) => setNewTranslation(event.target.value)} required/>
            <button>Translate</button>
        </form>
    )
}

export default Form;