document.querySelector(".comments-length").textContent = commentsArr.length;
const commentsContainer = document.querySelector("#comments-container");

function getComments(commentOfArr) {
    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.id = commentOfArr.id;
    comment.innerHTML = `
    <div class="comment-top">
      <img
          src="${commentOfArr.avaSrc}"
          alt=""
          class="comment-img"
      />
      <div class="comment-name">
          <span>${commentOfArr.name}</span>
          <span>${commentOfArr.surname}</span>
      </div>
      <span class="mx-2 md:mx-[2px]">|</span>
      <div class="comment-date">
          <span>${commentOfArr.date}</span>
          <span>/</span>
          <span>${commentOfArr.time}</span>
      </div>
  </div>

  <div class="pb-6 pl-20 md:pl-4">
      <p class="comment-text">
          ${commentOfArr.text}
      </p>
      <button
          class="comment-doanswer"
      >
          Відповісти
      </button>
  </div>
  `;
    commentsContainer.appendChild(comment);
}

function getAnswers(commentOfArr) {
    const comment = document.createElement("div");
    comment.classList.add("comment");
    comment.classList.add("answer");
    comment.id = commentOfArr.id;
    comment.innerHTML = `
  <div class="comment-top">
      <img
          src="${commentOfArr.avaSrc}"
          alt=""
          class="comment-img"
      />
      <div class="comment-name">
          <span>${commentOfArr.name}</span>
          <span>${commentOfArr.surname}</span>
      </div>
      <span class="mx-2 md:mx-[2px]">|</span>
      <div class="comment-date">
          <span>${commentOfArr.date}</span>
          <span>/</span>
          <span>${commentOfArr.time}</span>
      </div>
  </div>

  <div class="pb-6 pl-20 md:pl-4">
      <p class="comment-text">
          <span class="name-answer ">
          ${commentOfArr.nameForAnswer}</span>
          ${commentOfArr.text}
      </p>
      <button
          class="comment-doanswer"
      >
          Відповісти
      </button>
  </div>`;
    const needComm = document.querySelector(`#${commentOfArr.parentId}`);
    needComm.appendChild(comment);
}

commentsArr.forEach((element) => {
    if (element.parentId == null) {
        getComments(element);
    } else {
        getAnswers(element);
    }
});

const doAnswerBtns = document.querySelectorAll(".comment-doanswer");
let formForAnswer = null;

doAnswerBtns.forEach((doAnswerBtn) => {
    let i = 2;
    doAnswerBtn.addEventListener("click", () => {
        const parentComm = doAnswerBtn.parentNode;

        if (!formForAnswer) {
            formForAnswer = document.createElement("form");
            formForAnswer.innerHTML = `
            <div class="name-surname">
                <input
                    type="text"
                    class="answer-inp"
                    placeholder="name"
                    pattern="[A-Za-z]+"
                    required
                />
                <input
                    type="text"
                    class="answer-inp"
                    placeholder="surname"
                    pattern="[A-Za-z]+"
                    required
                />
            </div>
            <input
                type="text"
                class="answer-inp mb-2"
                placeholder="comment..."
                required
            />
            <div
                class="answer__buttons"
            >
                <button
                    type="button"
                    class="doanswer-btn doanswer__cancel"
                >
                    Скасувати
                </button>
                <button
                    type="submit"
                    class="doanswer-btn"
                >
                    Відповісти
                </button>
            </div>
            `;

            const cancelButton =
                formForAnswer.querySelector(".doanswer__cancel");
            cancelButton.addEventListener("click", () => {
                if (formForAnswer.parentNode === parentComm) {
                    parentComm.removeChild(formForAnswer);
                }
            });
        }
        if (i % 2 == 0) {
            parentComm.appendChild(formForAnswer);
        } else {
            if (formForAnswer.parentNode === parentComm) {
                parentComm.removeChild(formForAnswer);
            }
        }

        i = 3 - i;
    });
});

// в конце

const comments = document.querySelectorAll(".comment");
const answerCondition = document.querySelector(".answer");

if (answerCondition) {
    comments.forEach((comment) => {
        const answers = comment.querySelectorAll(".answer");
        if (!comment.classList.contains("answer")) {
            if (answers.length > 0) {
                answers[0].classList.add("pl-20");
                answers[0].classList.add("md:pl-5");
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".comment-form");

    form.addEventListener("submit", function (event) {
        const nameInput = form.querySelector('input[type="text"]');
        const surnameInput = form.querySelector('input[type="text"]');
        const commentTextarea = form.querySelector("textarea");

        if (!nameInput.value || !surnameInput.value || !commentTextarea.value) {
            alert("Будь ласка, заповніть усі поля.");
            event.preventDefault(); // Предотвращаем отправку формы
        }
    });
});
