  /* <div class="hand hour"></div>
      <div class="hand minute"></div>
      <div class="hand second"></div>
      <div class="time time1">|</div>
      <div class="time time2">|</div>
      <div class="time time3">|</div>
      <div class="time time4">|</div>
      <div class="time time5">|</div>
      <div class="time time6">|</div>
      <div class="time time7">|</div>
      <div class="time time8">|</div>
      <div class="time time9">|</div>
      <div class="time time10">|</div>
      <div class="time time11">|</div>
      <div class="time time12">|</div> */

      const makeDOMwithProperties = (domType, className, innerHTML) => {
        const dom = document.createElement(domType);
        dom.className = className;
        dom.innerHTML = innerHTML;
        return dom;
      };

      const AnalogClock = $container => {
        const $handHour = makeDOMwithProperties('div', 'hand hour', null);
        const $handMinute = makeDOMwithProperties('div', 'hand minute', null);
        const $handSecond = makeDOMwithProperties('div', 'hand second', null);
        const $timeOne = makeDOMwithProperties('div', 'time time1', '|');
        const $timeTwo = makeDOMwithProperties('div', 'time time2', '|');
        const $timeThree = makeDOMwithProperties('div', 'time time3', '|');
        const $timeFour = makeDOMwithProperties('div', 'time time4', '|');
        const $timeFive = makeDOMwithProperties('div', 'time time5', '|');
        const $timeSix = makeDOMwithProperties('div', 'time time6', '|');
        const $timeSeven = makeDOMwithProperties('div', 'time time7', '|');
        const $timeEight = makeDOMwithProperties('div', 'time time8', '|');
        const $timeNine = makeDOMwithProperties('div', 'time time9', '|');
        const $timeTen = makeDOMwithProperties('div', 'time time10', '|');
        const $timeEleven = makeDOMwithProperties('div', 'time time11', '|');
        const $timeTwelve = makeDOMwithProperties('div', 'time time12', '|');
        
        $container.append($handHour, $handMinute, $handSecond, $timeOne, $timeTwo, $timeThree, $timeFour, $timeFive, $timeSix, $timeSeven, $timeEight, $timeNine, $timeTen, $timeEleven, $timeTwelve);
        
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
        const setDate = () => {
          const utc = Date.now();
          const now = new Date(utc + KR_TIME_DIFF);
          const seconds = now.getSeconds();
          const minutes = now.getMinutes();
          const hours = now.getHours();
          const secondsDeg = (seconds / 60) * 360;
          const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
          const hoursDeg = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
          $handSecond.style.transform = `rotate(${secondsDeg}deg)`;
          $handMinute.style.transform = `rotate(${minutesDeg}deg)`;
          $handHour.style.transform = `rotate(${hoursDeg}deg)`;
        };
        setInterval(setDate, 1000); 
      };
      
      export default AnalogClock;
      
    