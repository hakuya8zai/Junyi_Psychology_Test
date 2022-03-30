window.onload = function(){
    setButton();
    ChangePage();
}


let Visual_score = 0;
let Aural_score = 0;
let ReadWrite_score = 0;
let Kinesthetic_score = 0;
let NowPage = 0;

// 找到每個按鈕並套上事件
function setButton(){
    let Button_addV = document.getElementsByClassName("ButtonV");
    Button_addV[0].addEventListener("click",addScoreV);
    let Button_addA = document.getElementsByClassName("ButtonA");
    Button_addA[0].addEventListener("click",addScoreA);
    let Button_addR = document.getElementsByClassName("ButtonR");
    Button_addR[0].addEventListener("click",addScoreR);
    let Button_addK = document.getElementsByClassName("ButtonK");
    Button_addK[0].addEventListener("click",addScoreK);
    

    for(let i=0; i<Button_addA.length;i++){
        Button_addV[i].addEventListener("click",addScoreV);
        Button_addA[i].addEventListener("click",addScoreA);
        Button_addR[i].addEventListener("click",addScoreR);
        Button_addK[i].addEventListener("click",addScoreK);
    }
}

function addScoreV(){
    Visual_score++;
    disableButton();
    console.log("V得分："+Visual_score);
}
function addScoreA(){
    Aural_score++;
    disableButton();
    console.log("A得分："+Aural_score);
}
function addScoreR(){
    ReadWrite_score++;
    disableButton();
    console.log("R得分："+ReadWrite_score);
}
function addScoreK(){
    Kinesthetic_score++;
    disableButton();
    console.log("K得分："+Kinesthetic_score);
}

//讓按鈕不被重複點擊
function disableButton(){
    let disabled_ButtonV = document.querySelector((".Page"+NowPage)+".ButtonV");
    let disabled_ButtonA = document.querySelector((".Page"+NowPage)+".ButtonA");
    let disabled_ButtonR = document.querySelector((".Page"+NowPage)+".ButtonR");
    let disabled_ButtonK = document.querySelector((".Page"+NowPage)+".ButtonK");

    disabled_ButtonV.disabled = true;
    disabled_ButtonA.disabled = true;
    disabled_ButtonR.disabled = true;
    disabled_ButtonK.disabled = true;

    PageTransition();
}


function PageTransition(){
    let oldPage = document.querySelector(".Page"+NowPage);

    let oldButton = oldPage.querySelector(".Button_container");
    oldButton.classList.toggle("transOut");
    let oldDescription = oldPage.querySelector(".Description");
    oldDescription.classList.toggle("transOut");
    let oldQuestion = oldPage.querySelector(".Question");
    oldQuestion.classList.toggle("transOut");
    let oldbackgroud_image = oldPage.querySelector(".background_image");
    oldbackgroud_image.classList.toggle("transOut");

    FinalScore();
}

function ChangePage(){
    let oldThings = document.querySelector(".Page"+NowPage);
    oldThings.classList.toggle("hide");
    NowPage++;
    let newThings = document.querySelector(".Page"+NowPage);
    newThings.classList.toggle("hide");

    let newButton = newThings.querySelector(".Button_container");
    if(newButton!=null){
        newButton.classList.toggle("transIn");        
    }
    let newDescription = newThings.querySelector(".Description");
    if(newButton!=null){
        newDescription.classList.toggle("transIn");
    }
    let newQuestion = newThings.querySelector(".Question");
    if(newButton!=null){
        newQuestion.classList.toggle("transIn");
    }
    let newbackgroud_image = newThings.querySelector(".background_image");
    if(newButton!=null){
        newbackgroud_image.classList.toggle("transIn");        
    }

}


function FinalScore(){
    if(NowPage==9){
        let ScoreBoard = document.querySelector(".Finalscore");
        ScoreBoard.querySelector(".Vscore").innerHTML = "V得分："+Visual_score;
        ScoreBoard.querySelector(".Ascore").innerHTML = "A得分："+Aural_score;
        ScoreBoard.querySelector(".Rscore").innerHTML = "R得分："+ReadWrite_score;
        ScoreBoard.querySelector(".Kscore").innerHTML = "K得分："+Kinesthetic_score;
        console.log(ScoreBoard.querySelector(".Vscore"));
        }
        setTimeout(() => {
            ChangePage();
        }, 1000);


}

function LoadOver(){
    let oldThings = document.querySelector(".Page"+NowPage);
    oldThings.classList.toggle("hide");
    NowPage++;
    let newThings = document.querySelector(".Page"+NowPage);
    newThings.classList.toggle("hide");
    
}
