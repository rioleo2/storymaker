import { OpenAI } from "openai";

import questionsGenerator from "../const/questionList.js";

const openai = new OpenAI({
    apiKey: 'sk-fEDXrqFvE3ofwnwu4e0917E7Dd0f4b1fA34dA51918A73434',
    baseURL: 'https://lk.neuroapi.host/v1',
    dangerouslyAllowBrowser: true
});

let question1 = questionsGenerator()[0];
let question2 = questionsGenerator()[1];
let question3 = questionsGenerator()[2];


setTimeout(() => {
    document.getElementById("question1").innerHTML = question1;
    document.getElementById("question2").innerHTML = question2;
    document.getElementById("question3").innerHTML = question3;
}, 1)




export function storyMaker() {

    let name = document.getElementById('name').value; 


    async function storyWriter(name) {
        let textContainer = document.getElementsByClassName('story__text')[0];
        let answer1 = document.getElementById('answer1').value;
        let answer2 = document.getElementById('answer2').value;
        let answer3 = document.getElementById('answer3').value;
        console.log(question1, answer1, question2, answer2, question3, answer3);
        const chatCompletions = await openai.chat.completions.create({
            messages: [
                {
                    role: 'user',
                    content: `Меня зовут ${name}. Вот 3 вопроса: ${question1}, ${question2}, ${question3}, и 3 ответа на них: ${answer1}, ${answer2}, ${answer3}. Напиши на основе данных вопросов и ответов на них небольшую историю.`,
                }
            ],
            model: 'gpt-3.5-turbo',
        })
        console.log((chatCompletions.choices[0].message.content));
        let responseContent = chatCompletions.choices[0].message.content;
        textContainer.innerHTML = responseContent;
        return responseContent;
    }

    storyWriter(name);

}

export default function handleClick() {
    console.log('DLSJALDJ:LDKJSAL:')
  
    storyMaker();
}






