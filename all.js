(function () {

    const container = document.querySelector('.wrapper');

    function card(multiplicand, multiplier) {
   
            const card = document.createElement('div');
            card.classList.add('card');

            const title = createEle({
                tag: 'div',
                className: 'card__title',
                content: multiplicand
            });
            card.appendChild(title);
            for (let i = 1; i <= multiplier; i++) {
                card.appendChild(makeFormula(multiplicand, i))                
            }

            container.appendChild(card);
        }

    function makeFormula (multiplicand, multiplier) {
        const content = `${multiplicand} x ${multiplier} = ${multiplicand * multiplier}`;
        const formulaEl = createEle({
          tag: 'div',
          className: 'card__formula',
          content
        });
        return formulaEl;
    }


    function createEle({tag, className, content}) {
        content = content || '';
        let ele = document.createElement(tag);
        ele.classList.add(className);
        ele.textContent = content;
        return ele;
    }

    for (let i = 2; i<=9; i++){
        card(i, 9)  
      }

})();