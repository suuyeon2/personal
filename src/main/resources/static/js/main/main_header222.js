/* main_header.js */

function menuOpen() {
    let click = document.getElementById("my_menu_wrap");
    if (click.style.display === "none" || click.style.display === "") {

        click.style.display = "block";

    } else {
        click.style.display = "none";

    }
}

//알림
function alarm(userNo, authorityAlarm, realtorInquiryCnt) {
    console.log(userNo);
    console.log(realtorInquiryCnt);
    let alarmTag = document.querySelector('#alarm_tag');
    alarmTag.innerHTML = '';
    if (alarmTag.style.display === 'none' || alarmTag.style.display === "") {

        alarmTag.style.display = 'block';

        //권한승인 알림
        if (authorityAlarm == 1) {
            let authority = `<div id="authority-alarm">권한이 승인되었습니다.
                <span>다시보지않기<input type="checkbox" onclick="authority(this);"></input></span>
            </div>
            `;
            alarmTag.insertAdjacentHTML('afterbegin', authority);
        }
        //매물문의 알림
        if (realtorInquiryCnt != 0) {
            let realtorTxt = `<div onclick="location.href='/realtor/inquiryBoardList'">매물 문의가 ${realtorInquiryCnt}건 있습니다.</div>`
            alarmTag.insertAdjacentHTML('afterbegin', realtorTxt);
        } 
        if(authorityAlarm != 1 && realtorInquiryCnt == 0) {
            alarmTag.innerHTML = '새로운 알림이 없습니다.';
        }
    } else {
        alarmTag.style.display = 'none';
    }
}

//권한 승인 알림 지우기
function authority(chk){
    if(chk.checked == true){
        fetch('/realtorAuthorityAlarm', { //요청경로
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            //컨트롤러로 전달할 데이터
            body: JSON.stringify({
            // 데이터명 : 데이터값
            })
        })
        .then((response) => {
            return response.text(); //나머지 경우에 사용
        })
        //fetch 통신 후 실행 영역
        .then((data) => {//data -> controller에서 리턴되는 데이터!
            document.querySelector('#authority-alarm').remove();
        })
        //fetch 통신 실패 시 실행 영역
        .catch(err=>{
            alert('fetch error!\nthen 구문에서 오류가 발생했습니다.\n콘솔창을 확인하세요!');
            console.log(err);
        });
    }
    
}