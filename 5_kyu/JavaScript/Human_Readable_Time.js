function humanReadable(seconds) {
    let secs='00',mins='00',hours='00';
    let mintue = 60;
    let hour = 3600;
    let secToMin = seconds/60;
    let secondsLeft;
    let fix = x => String(x).length===1 ? `0${x}` : x;
    let fixInt =  x => String(x).length===1 ? `0${parseInt(x)}` : parseInt(x);
    
    if(seconds<=359999){
      if(seconds<=59){
       secs = fix(seconds)
      }
      else if(parseInt(secToMin)<=59){
       mins = fix(secToMin)
       secondsLeft = seconds - parseInt(mins)*60
       mins = fixInt(mins-secondsLeft/60)
       secs = fix(secondsLeft)
      }
      else if(secToMin/60<=599){
        secToMin = secToMin/60;
        hours = fix(secToMin)
        let timeLeft = seconds-parseInt(hours)*3600
        let minsLeft = parseInt(timeLeft/60)
        secondsLeft = timeLeft-60*minsLeft
        if(timeLeft>0){
        hours = fixInt(hours)
        secs = fix(secondsLeft)
        mins = fix(minsLeft)
        }
      }
    }
    return `${hours}:${mins}:${secs}`
  }


//   Link => https://www.codewars.com/kata/52685f7382004e774f0001f7/javascript