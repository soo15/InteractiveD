//비교연산자 사용
//getTime() 메서드 사용 두날짜 비교
//valueOf() 메서드 사용 두날짜 비교
//Number()한수로 두 날짜를 비교
//단항연산자 +를 사용 두날짜 비교

function solution(버스시간, 기준시간){
    let answer = [];
    기준시간 = 기준시간.split(':').map(n => parseInt(n, 10));
    기준시간 = (기준시간[0] * 60) + 기준시간[1];
  
    for (let i in 버스시간){
      let time = 버스시간[i].split(':').map(n => parseInt(n, 10));
      time = (time[0] * 60) + time[1];ㅋ
  
      if (time < 기준시간){
        answer.push('지나갔습니다');
      } else{
        let 시간 = parseInt((time - 기준시간) / 60, 10);
        let 분 = (time - 기준시간) % 60;
        answer.push(String(시간).padStart(2, 0) + '시간 ' + String(분).padStart(2, 0) + '분');
      }
    }
    return answer;
  }
  
  console.log(solution(["12:30", "13:20", "14:13"], "12:40"));
  