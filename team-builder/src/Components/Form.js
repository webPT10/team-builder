import React from 'react';


function Form (){

    return (
        <form>
            <label>
                Call Sign:
                <input 
                    type="text"
                />
            </label>
            
            <br />
            
            <label>
                Fav Ice Cream: 
                <select>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option selected value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
            </label>

            <br />

            <label>
                Witty Remarks:
                <textarea></textarea>
            </label>
        </form>
    )
}
export default Form;