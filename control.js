
window.onload = function(){
    verticleRWD();
    let height = innerHeight;
    window.addEventListener("resize", () =>{
        height = window.innerHeight;
    })
    setButton();
    LoadOver();
    QueueLode();
}


let Visual_score = 0;
let Aural_score = 0;
let ReadWrite_score = 0;
let Kinesthetic_score = 0;
let NowPage = -1;
let NowMusic = 0;
let CaseID = 0;
let Mute = true;


// 找到每個按鈕並套上事件
function setButton(){
    let Button_addV = document.getElementsByClassName("ButtonV");
    let Button_addA = document.getElementsByClassName("ButtonA");
    let Button_addR = document.getElementsByClassName("ButtonR");
    let Button_addK = document.getElementsByClassName("ButtonK");
    let Button_Start = document.querySelector(".ButtonStart");
    let Soundon = document.getElementsByClassName("on");
    let Soundoff = document.getElementsByClassName("off");    
    console.log(Button_Start);
    Button_Start.addEventListener("click",ChangePage);
    for(let i=0; i<Button_addA.length;i++){
        Button_addV[i].addEventListener("click",addScoreV);
        Button_addA[i].addEventListener("click",addScoreA);
        Button_addR[i].addEventListener("click",addScoreR);
        Button_addK[i].addEventListener("click",addScoreK);
    }

    //換音樂的按鈕事件
    Button_addV[1].addEventListener("click",MusicNext);
    Button_addV[3].addEventListener("click",MusicNext);
    Button_addV[5].addEventListener("click",MusicNext);
    Button_addA[1].addEventListener("click",MusicNext);
    Button_addA[3].addEventListener("click",MusicNext);
    Button_addA[5].addEventListener("click",MusicNext);
    Button_addR[1].addEventListener("click",MusicNext);
    Button_addR[3].addEventListener("click",MusicNext);
    Button_addR[5].addEventListener("click",MusicNext);
    Button_addK[1].addEventListener("click",MusicNext);
    Button_addK[3].addEventListener("click",MusicNext);
    Button_addK[5].addEventListener("click",MusicNext);
    //放音效的按鈕事件
    Button_addV[3].addEventListener("click",SFX01_Play);
    Button_addA[3].addEventListener("click",SFX01_Play);
    Button_addR[3].addEventListener("click",SFX01_Play);
    Button_addK[3].addEventListener("click",SFX01_Play);
    Button_addV[5].addEventListener("click",SFX02_Play);
    Button_addA[5].addEventListener("click",SFX02_Play);
    Button_addR[5].addEventListener("click",SFX02_Play);
    Button_addK[5].addEventListener("click",SFX02_Play);


    let music = document.getElementsByClassName("BGM");
    for(let s=0;s<music.length;s++){
        music[s].volume = 0;
    }
    Soundon[0].addEventListener("click",AudioSwitch);
    console.log(Soundon[0]);
    Soundoff[0].addEventListener("click",AudioSwitch);
    console.log(Soundoff[0]);
}

function addScoreV(){
    Visual_score++;
    afterChoose();
    console.log("V得分："+Visual_score);
}
function addScoreA(){
    Aural_score++;
    afterChoose();
    console.log("A得分："+Aural_score);
}
function addScoreR(){
    ReadWrite_score++;
    afterChoose();
    console.log("R得分："+ReadWrite_score);
}
function addScoreK(){
    Kinesthetic_score++;
    afterChoose();
    console.log("K得分："+Kinesthetic_score);
}

function afterChoose(){
    disableButton();
    PageTransition();
}


//讓按鈕不可被點擊
function disableButton(){
    let disabled_ButtonStart = document.querySelector(".ButtonStart");
    let disabled_ButtonV = document.querySelector((".Page"+NowPage)+".ButtonV");
    let disabled_ButtonA = document.querySelector((".Page"+NowPage)+".ButtonA");
    let disabled_ButtonR = document.querySelector((".Page"+NowPage)+".ButtonR");
    let disabled_ButtonK = document.querySelector((".Page"+NowPage)+".ButtonK");

    if(disabled_ButtonA!=null){
        disabled_ButtonStart.disabled = true;
        disabled_ButtonV.disabled = true;
        disabled_ButtonA.disabled = true;
        disabled_ButtonR.disabled = true;
        disabled_ButtonK.disabled = true;    
    }
}
//讓按鈕可被點擊
function enableButton(){
    let disabled_ButtonStart = document.querySelector(".ButtonStart");
    let disabled_ButtonV = document.querySelector((".Page"+NowPage)+".ButtonV");
    let disabled_ButtonA = document.querySelector((".Page"+NowPage)+".ButtonA");
    let disabled_ButtonR = document.querySelector((".Page"+NowPage)+".ButtonR");
    let disabled_ButtonK = document.querySelector((".Page"+NowPage)+".ButtonK");

    if(disabled_ButtonA!=null){
        disabled_ButtonStart.disabled = false;
        disabled_ButtonV.disabled = false;
        disabled_ButtonA.disabled = false;
        disabled_ButtonR.disabled = false;
        disabled_ButtonK.disabled = false;    
    }

}
//讓音量按鈕不可被點擊
function disableAudioButton(){
    let OnButton = document.querySelector(".on");
    let OffButton = document.querySelector(".off");
    
    OnButton.disabled = true;
    OffButton.disabled = true;

}
//讓音量按鈕可以被點擊
function enableAudioButton(){
    let OnButton = document.querySelector(".on");
    let OffButton = document.querySelector(".off");
    
    OnButton.disabled = false;
    OffButton.disabled = false;

}

// 載入完成，從載入頁切換到開始頁面
function LoadOver(){
    let oldPage = document.querySelector(".PageLoading");
    oldPage.classList.toggle("hide");
    let oldDescription = oldPage.querySelector(".Description");
    oldDescription.classList.toggle("transOut");
    let oldbackgroud_image = oldPage.querySelector(".background_image");
    oldbackgroud_image.classList.toggle("transOut");

    ChangePage();
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
    if(oldThings!=null){
        oldThings.classList.toggle("hide");
    }
    NowPage++;
    console.log(NowPage);
    if(NowPage!=9){
        disableButton();
        setTimeout(() => {
            enableButton();
            console.log("enable");
        }, 3000);    
    }
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
    // let lastPageCTA = newThings.querySelector(".CTA");
    // if(NowPage==8){
    //     lastPageCTA.classList.toggle("transIn");        
    // }


}



function FinalScore(){
    if(NowPage==8){

        //下面是計算最高分的項目
        let Result = Math.max(Visual_score, Aural_score, ReadWrite_score, Kinesthetic_score);

        if (Result == Visual_score){
            if(Result != Kinesthetic_score){      
                if(Result != ReadWrite_score ){
                    if(Result != Aural_score){
                        console.log("V");
                        CaseID = 1;
                    }
                    else{
                        console.log("VA");
                        CaseID = 5;
                    }
                }
                else{
                    if(Result != Aural_score){
                        console.log("VR");
                        CaseID = 6;
                    }
                    else{
                        console.log("VAR");
                        CaseID = 11;
                    }
                }
            }
            else{
                if(Result != ReadWrite_score){
                    if(Result != Aural_score){
                        console.log("VK");
                        CaseID = 7;
                    }
                    else{
                        console.log("VAK");
                        CaseID = 12;
                    }
                }
                else{
                    if(Result != Aural_score){
                        console.log("VRK");
                        CaseID = 13;
                    }
                    else{
                        console.log("VARK");
                        CaseID = 15;
                    }
                }
            }
        }
        else if(Result == Aural_score){
            if(Result != Kinesthetic_score){
                if(Result != ReadWrite_score){
                    console.log("A");
                    CaseID = 2;
                }
                else{
                    console.log("AR");
                    CaseID = 8;
                }
            }
            else{
                if(Result != ReadWrite_score){
                    console.log("AK");
                    CaseID = 9;
                }
                else{
                    console.log("ARK")
                    CaseID = 14;
                }
            }
        }
        else if(Result == ReadWrite_score){
            if(Result != Kinesthetic_score){
                console.log("R");
                CaseID = 3;
            }
            else{
                console.loh("RK");
                CaseID = 10;
            }
        }
        else if(Result == Kinesthetic_score){
            console.log("K");
            CaseID = 4;
        }
        else{
            console.log("unknown");
        }
        ResultPage();
    }

        setTimeout(() => {
            ChangePage();
        }, 1000);

}


// 根據 CaseID，將結尾頁用 switch 顯示為指定的頁面
function ResultPage(){
    let resultImage = document.querySelector(".resultImage1");

    switch (CaseID){
        case 1:
            resultImage.src="image/Result/01_V/1_V_observer.png";

            console.log("check-V");
            break;
        case 2:
            resultImage.src="image/Result/01_V/1_V_observer.png";

            console.log("check-A");
            break;
        case 3:
            resultImage.src="image/Result/01_V/1_V_observer.png";

            console.log("check-R");
            break;
        case 4:
            resultImage.src="image/Result/01_V/1_V_observer.png";

            console.log("check-K");
            break;
        case 5:
            resultImage.src="image/Result/01_V/1_V_observer.png";

            console.log("check-VA");
            break;
        case 6:
            resultImage.src="image/Result/01_V/1_V_observer.png";

            console.log("check-VR");
            break;
        case 7:
            resultImage.src="image/Result/01_V/1_V_observer.png";

            console.log("check-VK");
            break;    
        case 8:
            resultImage.src="image/Result/01_V/1_V_observer.png";
            console.log("check-AR");
            break;
        case 9:
            resultImage.src="image/Result/01_V/1_V_observer.png";
            console.log("check-AK");
            break;
        case 10:
            resultImage.src="image/Result/01_V/1_V_observer.png";
            console.log("check-KR");
            break;
        case 11:
            resultImage.src="image/Result/01_V/1_V_observer.png";
            console.log("check-VAR");
            break;
        case 12:
            resultImage.src="image/Result/01_V/1_V_observer.png";
            console.log("check-VAK");
            break;
        case 13:
            resultImage.src="image/Result/01_V/1_V_observer.png";
            console.log("check-VRK");
            break;
        case 14:
            resultImage.src="image/Result/01_V/1_V_observer.png";
            console.log("check-ARK");
            break;    
        case 15:
            resultImage.src="image/Result/01_V/1_V_observer.png";
            console.log("check-VARK");
            break;    
    
    }

}


// 聲音相關處理，切換 icon 和 音樂停放
let FadeLapse = 50;
let FadeUnit = FadeLapse/500;

function AudioSwitch(){
    console.log("AudioSwitchCalled")
    let Soundon = document.querySelector(".on");
    let Soundoff = document.querySelector(".off");
    console.log(Soundon);
    console.log(Soundoff);
    let music = document.getElementsByClassName("BGM");
    disableAudioButton();
    console.log("disabled");
    Soundon.classList.toggle("hide");
    Soundoff.classList.toggle("hide");
    console.log(music[NowMusic].volume);
    console.log(music[NowMusic]);
    console.log(music[0]);
    if(music[NowMusic].volume === 1){
        Mute = true;
        AudioMinus();
    }
    else if(music[NowMusic].volume === 0){
        Mute = false;
        AudioAdds();
        music[NowMusic].play();
        console.log("RealPlay");
    }
}


function AudioMinus(){
    let music = document.getElementsByClassName("BGM");
        console.log("FadeOutCalled");
    if(music[NowMusic].volume>=FadeUnit){
        music[NowMusic].volume = music[NowMusic].volume - FadeUnit;
        setTimeout(AudioMinus,FadeLapse);
        console.log("FadeOut");
        }
    else{
        music[NowMusic].volume=0;
        enableAudioButton();
        console.log("FadeOut2")
    }
}
function AudioAdds(){
    let music = document.getElementsByClassName("BGM");
    if(music[NowMusic].volume<= 1-FadeUnit){
        music[NowMusic].volume = music[NowMusic].volume + FadeUnit;
        setTimeout(AudioAdds,FadeLapse);
        console.log("FadeIn");
    }
    else{
        music[NowMusic].volume=1;
        enableAudioButton();
    }
}

function MusicNext(){
    disableAudioButton();
    MusicFadeOut();
}

function MusicFadeOut(){
    let music = document.getElementsByClassName("BGM");
    if(music[NowMusic].volume>=FadeUnit){
        music[NowMusic].volume = music[NowMusic].volume - FadeUnit;
        setTimeout(MusicFadeOut,FadeLapse);
        console.log("FadeOut");
        }
    else{
        music[NowMusic].volume=0;
        if(Mute != true){
            music[NowMusic+1].play();
        }
        MusicFadeIn();
    }

}

function MusicFadeIn(){
    let music = document.getElementsByClassName("BGM");
    if(music[NowMusic+1].volume<= 1-FadeUnit){
        music[NowMusic+1].volume = music[NowMusic+1].volume + FadeUnit;
        setTimeout(MusicFadeIn,FadeLapse);
        console.log("FadeIn");
    }
    else{
        if(Mute != true){
            music[NowMusic+1].volume=1;
        }
        else{
            music[NowMusic+1].volume=0;
        }
        NowMusic++;
        enableAudioButton();
    }

}
// 特殊音效播放
function SFX01_Play(){
    let SFX = document.querySelector(".SFX01");
    SFX.volume=0.8;
    if(Mute!= true){
        SFX.play();
    }
}

function SFX02_Play(){
    let SFX = document.querySelector(".SFX02");
    SFX.volume=0.8;
    if(Mute!= true){
        SFX.play();
    }
}

function verticleRWD(){
    if(window.innerWidth<=375){

        if(window.innerHeight<=667){
            document.getElementById("App").style.top = 0;
            document.getElementById("App").style.bottom = 0;
            document.getElementById("App").style.left = 0;
            document.getElementById("App").style.right = 0;

            document.getElementById("App").style.margin = 0;
            }
        else{
            document.getElementById("App").style.left = 0;
            document.getElementById("App").style.right = 0;
            document.getElementById("App").style.margin =("auto 0");
        }
    
    }
    else{
        if(window.innerHeight<=667){
            document.getElementById("App").style.top = 0;
            document.getElementById("App").style.bottom = 0;
            document.getElementById("App").style.margin = ("0 auto");
        }
        else{
            document.getElementById("App").style.margin = ("auto");
        }
    }
}

// 分頁面載入
let pageCount = 0;
function QueueLode(){
    // 每一頁載完後進入下一頁
        let AllImagePage = document.getElementsByClassName("Page"+pageCount);
        console.log("現在開始抓第"+pageCount+"頁的Queue");
        // 下面是取得第 i 頁的所有圖片
        let LoadPageImage = AllImagePage[0].getElementsByTagName("img");
        console.log("第"+pageCount+"頁圖片有" + LoadPageImage.length);
        //當頁已載完數量
        let k = 0;
        //載圖片，直到滿當頁數量
        for(let pageCountNow=0;pageCountNow<LoadPageImage.length;pageCountNow++){
            //判斷這張圖片載完了沒
            if(LoadPageImage[pageCountNow].complete==true){
                k = k+1;
                console.log("第"+pageCount+LoadPageImage[pageCountNow].complete);
                //每當圖片載完，判斷這整頁圖片載完了沒，載完就進入下一頁
                if(LoadPageImage.length == k){
                    console.log("第"+pageCount+"頁載入完成");
                    pageCount=pageCount+1;
                    //檢查是不是最後一頁
                    if(pageCount<9){
                        //如果全部都載完，呼叫載入下一頁圖片的 funtion
                        ImageList(pageCount);
                        //如果全部都載完，進入下一頁的檢查
                        QueueLode();
                    }
                }
            }
            else{
                LoadPageImage[pageCountNow].addEventListener("load",() => {
                    k = k+1;
                    if(LoadPageImage.length == k){
                        console.log("第"+pageCount+"頁載入完成");
                        pageCount=pageCount+1;
                        if(pageCount<9){
                            ImageList(pageCount);    
                            QueueLode();
                        }
                    }                    
                });

            }
        }
}

function ImageList(LoadingImage){
    console.log(LoadingImage+"開始Loading");
    let ChangeSrcPage = document.getElementsByClassName("Page"+LoadingImage);
    //抓取底下有 img tag 的變陣列
    let TheChangeImg = ChangeSrcPage[0].getElementsByTagName("img");
    if(LoadingImage ==0){
    }
    else if (LoadingImage ==1){
        TheChangeImg[0].src ="image/Page1/background.png";
        TheChangeImg[1].src ="image/Page1/smallstar.png";
        TheChangeImg[2].src ="image/Page1/bigstar.png";
        TheChangeImg[3].src ="image/Page1/cloud.png";
        TheChangeImg[4].src ="image/Page1/foxycat_liedown.png";
    }
    else if (LoadingImage ==2){
        TheChangeImg[1].src ="image/Page2/foxycat_reading.png";
    }
    else if (LoadingImage ==3){
        TheChangeImg[0].src ="image/Page3/computer_background.png";
        TheChangeImg[2].src ="image/Page3/computer.png";

    }
    else if (LoadingImage ==4){
        TheChangeImg[0].src ="image/Page3/computer_background.png";
        TheChangeImg[1].src ="image/Page4/foxycat_look.png";

    }
    else if (LoadingImage ==5){
        TheChangeImg[0].src ="image/Page5/bg_moon_earth.jpg";
        TheChangeImg[4].src ="image/Page5/Foxycat_shock.png";

    }
    else if (LoadingImage ==6){
        TheChangeImg[0].src ="image/Page6/bg_school_room.jpg";
        TheChangeImg[1].src ="image/Page6/teacher.png";

    }
    else if (LoadingImage ==7){
        TheChangeImg[0].src ="image/Page7/bg_stage.png";
        TheChangeImg[1].src ="image/Page7/foxycat_withpad.png";

    }
    else if (LoadingImage ==8){
        TheChangeImg[0].src ="image/Page8/bg_road.png";
        TheChangeImg[4].src ="image/Page8/foxycat_withQuestionMark.png";

    }

}

