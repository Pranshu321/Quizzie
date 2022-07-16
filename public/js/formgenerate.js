let addBtn = document.querySelector(".add-btn");
let mcqGenerated = document.querySelector(".mcq-generator");

addBtn.addEventListener("click", (e)=>{
    let questionCont = document.createElement("div");
    questionCont.setAttribute("class", "question");
    questionCont.innerHTML = `
    <div class="question-body">
    <h3>Question</h3>
    <Textarea required class="question-input" placeholder="Type Your Question Here"></Textarea>
    </div>

    <div class="question-options">
                <label for="option-1">Option 1</label>
                <textarea name="option-1" id="" cols="30" rows="1"></textarea>
                <br>
                <label for="option-2">Option 2</label>
                <textarea name="option-2" id="" cols="30" rows="1"></textarea>
                <br>
                <label for="option-3">Option 3</label>
                <textarea name="option-3" id="" cols="30" rows="1"></textarea>
                <br>
                <label for="option-4">Option 4</label>
                <textarea name="option-4" id="" cols="30" rows="1"></textarea>
            </div>


            <div class="correct-answer">
                <p>Enter Correct Answer </p>
                <textarea required placeholder="Type Correct Answer here"></textarea>
            </div>

    `
    mcqGenerated.appendChild(questionCont);
})