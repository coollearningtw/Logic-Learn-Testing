/**
 * 樂知學｜第二代學習平台
 * 國文｜字詞與成語
 *
 * 本檔案只負責：
 * 1. 顯示題目
 * 2. 隨機排列選項
 * 3. 處理作答
 * 4. 顯示解析
 * 5. 計算結果
 *
 * 題目本身放在：
 *
 * ../data/chinese/vocabulary.js
 */


/* =========================================================
   1. 題目資料
   ========================================================= */

const questions =
    Array.isArray(window.ChineseVocabularyQuestions)
        ? window.ChineseVocabularyQuestions
        : [];


/* =========================================================
   2. DOM 元素
   ========================================================= */

const questionProgress =
    document.querySelector("#question-progress");

const questionCategory =
    document.querySelector("#question-category");

const questionDifficulty =
    document.querySelector("#question-difficulty");

const questionTitle =
    document.querySelector("#question-title");

const questionOptions =
    document.querySelector("#question-options");

const answerFeedback =
    document.querySelector("#answer-feedback");

const feedbackTitle =
    document.querySelector("#feedback-title");

const feedbackText =
    document.querySelector("#feedback-text");

const nextButton =
    document.querySelector("#next-button");

const quizCard =
    document.querySelector("#quiz-card");

const quizResult =
    document.querySelector("#quiz-result");

const resultCorrect =
    document.querySelector("#result-correct");

const resultTotal =
    document.querySelector("#result-total");

const resultMessage =
    document.querySelector("#result-message");

const restartButton =
    document.querySelector("#restart-button");


/* =========================================================
   3. 練習狀態
   ========================================================= */

let currentQuestionIndex = 0;

let correctCount = 0;

let hasAnswered = false;


/* =========================================================
   4. 工具函式
   ========================================================= */

/**
 * 隨機排列陣列。
 *
 * 使用 Fisher-Yates shuffle。
 *
 * @param {Array} array
 * @returns {Array}
 */
function shuffleArray(array) {

    const shuffled = [...array];

    for (
        let index = shuffled.length - 1;
        index > 0;
        index -= 1
    ) {

        const randomIndex =
            Math.floor(
                Math.random() * (index + 1)
            );

        [
            shuffled[index],
            shuffled[randomIndex]
        ] = [
            shuffled[randomIndex],
            shuffled[index]
        ];
    }

    return shuffled;
}


/**
 * 取得難度文字。
 *
 * @param {number} difficulty
 * @returns {string}
 */
function getDifficultyText(difficulty) {

    if (difficulty === 1) {
        return "基礎";
    }

    if (difficulty === 2) {
        return "進階";
    }

    if (difficulty === 3) {
        return "挑戰";
    }

    return "一般";
}


/**
 * 取得目前題目。
 *
 * @returns {object | null}
 */
function getCurrentQuestion() {

    return (
        questions[currentQuestionIndex]
        ?? null
    );
}


/* =========================================================
   5. 顯示題目
   ========================================================= */

/**
 * 顯示目前題目。
 */
function renderQuestion() {

    const question =
        getCurrentQuestion();

    if (
        !question ||
        !questionProgress ||
        !questionCategory ||
        !questionDifficulty ||
        !questionTitle ||
        !questionOptions ||
        !answerFeedback ||
        !nextButton
    ) {
        return;
    }


    hasAnswered = false;


    questionProgress.textContent =
        `${currentQuestionIndex + 1} / ${questions.length}`;


    questionCategory.textContent =
        question.category;


    questionDifficulty.textContent =
        getDifficultyText(
            question.difficulty
        );


    questionTitle.textContent =
        question.question;


    questionOptions.innerHTML = "";


    answerFeedback.hidden = true;

    feedbackTitle.textContent = "";

    feedbackText.textContent = "";


    nextButton.disabled = true;


    nextButton.textContent =
        currentQuestionIndex === questions.length - 1
            ? "查看結果"
            : "下一題";


    /*
     * 每一次顯示題目時，
     * 都重新隨機排列選項。
     *
     * 題目資料中的 answer
     * 不會因此改變。
     */
    const shuffledOptions =
        shuffleArray(question.options);


    shuffledOptions.forEach(
        (option, index) => {

            const button =
                document.createElement("button");


            button.type = "button";

            button.className =
                "question-option";


            button.dataset.optionId =
                option.id;


            button.setAttribute(
                "aria-label",
                `選項 ${index + 1}：${option.text}`
            );


            const optionNumber =
                document.createElement("span");

            optionNumber.className =
                "question-option-number";

            optionNumber.textContent =
                String.fromCharCode(
                    65 + index
                );


            const optionText =
                document.createElement("span");

            optionText.className =
                "question-option-text";

            optionText.textContent =
                option.text;


            button.append(
                optionNumber,
                optionText
            );


            button.addEventListener(
                "click",
                () => handleAnswer(option.id)
            );


            questionOptions.appendChild(
                button
            );
        }
    );
}


/* =========================================================
   6. 作答
   ========================================================= */

/**
 * 處理使用者選擇答案。
 *
 * @param {string} selectedOptionId
 */
function handleAnswer(selectedOptionId) {

    if (hasAnswered) {
        return;
    }


    const question =
        getCurrentQuestion();


    if (!question || !questionOptions) {
        return;
    }


    hasAnswered = true;


    const isCorrect =
        selectedOptionId === question.answer;


    if (isCorrect) {
        correctCount += 1;
    }


    const optionButtons =
        questionOptions.querySelectorAll(
            ".question-option"
        );


    optionButtons.forEach(
        (button) => {

            const optionId =
                button.dataset.optionId;


            button.disabled = true;


            if (
                optionId === question.answer
            ) {
                button.classList.add(
                    "question-option-correct"
                );
            }


            if (
                optionId === selectedOptionId &&
                !isCorrect
            ) {
                button.classList.add(
                    "question-option-wrong"
                );
            }
        }
    );


    showAnswerFeedback(
        question,
        isCorrect
    );


    if (nextButton) {
        nextButton.disabled = false;
    }
}


/**
 * 顯示答案解析。
 *
 * @param {object} question
 * @param {boolean} isCorrect
 */
function showAnswerFeedback(
    question,
    isCorrect
) {

    if (
        !answerFeedback ||
        !feedbackTitle ||
        !feedbackText
    ) {
        return;
    }


    answerFeedback.hidden = false;


    answerFeedback.classList.remove(
        "answer-feedback-correct",
        "answer-feedback-wrong"
    );


    if (isCorrect) {

        answerFeedback.classList.add(
            "answer-feedback-correct"
        );

        feedbackTitle.textContent =
            "答對了";

    } else {

        answerFeedback.classList.add(
            "answer-feedback-wrong"
        );

        feedbackTitle.textContent =
            "再想一下";

    }


    feedbackText.textContent =
        question.explanation;
}


/* =========================================================
   7. 下一題
   ========================================================= */

/**
 * 進入下一題。
 */
function goToNextQuestion() {

    if (!hasAnswered) {
        return;
    }


    if (
        currentQuestionIndex >=
        questions.length - 1
    ) {
        showResult();
        return;
    }


    currentQuestionIndex += 1;

    renderQuestion();
}


/* =========================================================
   8. 結果
   ========================================================= */

/**
 * 顯示練習結果。
 */
function showResult() {

    if (
        !quizCard ||
        !quizResult ||
        !resultCorrect ||
        !resultTotal ||
        !resultMessage
    ) {
        return;
    }


    quizCard.hidden = true;

    quizResult.hidden = false;


    resultCorrect.textContent =
        String(correctCount);


    resultTotal.textContent =
        String(questions.length);


    const percentage =
        questions.length > 0
            ? Math.round(
                (correctCount /
                    questions.length) *
                100
            )
            : 0;


    if (percentage === 100) {

        resultMessage.textContent =
            "全部答對，這次練習完成得很好。";

    } else if (percentage >= 80) {

        resultMessage.textContent =
            "大部分都掌握了，可以再複習幾題加深印象。";

    } else if (percentage >= 60) {

        resultMessage.textContent =
            "已經有一定基礎，再練習一次看看吧。";

    } else {

        resultMessage.textContent =
            "先看看剛才的解析，再重新練習一次。";
    }
}


/* =========================================================
   9. 重新開始
   ========================================================= */

/**
 * 重新開始整份練習。
 */
function restartQuiz() {

    currentQuestionIndex = 0;

    correctCount = 0;

    hasAnswered = false;


    if (quizCard) {
        quizCard.hidden = false;
    }


    if (quizResult) {
        quizResult.hidden = true;
    }


    renderQuestion();
}


/* =========================================================
   10. 初始化
   ========================================================= */

/**
 * 初始化練習。
 */
function initializeVocabularyQuiz() {

    if (questions.length === 0) {

        if (questionTitle) {
            questionTitle.textContent =
                "目前沒有可用的題目。";
        }

        if (questionOptions) {
            questionOptions.innerHTML = "";
        }

        if (nextButton) {
            nextButton.disabled = true;
        }

        return;
    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            goToNextQuestion
        );
    }


    if (restartButton) {

        restartButton.addEventListener(
            "click",
            restartQuiz
        );
    }


    renderQuestion();
}


/* =========================================================
   11. 啟動
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeVocabularyQuiz,
        {
            once: true
        }
    );

} else {

    initializeVocabularyQuiz();

}