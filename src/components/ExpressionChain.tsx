import React, { useState } from 'react'

type ExpressionChainType = {
    chain: Array<string | number>
}


export const ExpressionChain = ({chain}: ExpressionChainType) => {
    const [expChain, setExpChain] = useState<(string | number)[]>([]);

    React.useEffect(() => {
        let chainConvert = chain.map(value => {
            if(value === 'n')
                return "<span class='numberator'>";
            if(value === '/')
                return "</span><span class='denominator'>";
            if(value === 'd') {
                return "</span>";
            }
            return value;
        })

        setExpChain(chainConvert);
    },[chain])

    if(chain.length === 0)
        return null;

    const convertToHTML = (elements: (string | number)[]) => {
        let result: string[] = [];
        let spanWrapAmout = 0;
        let spansWrap = "";


        elements.forEach((element) => {
            console.log(spanWrapAmout)
            if(element === "<span class='numberator'>") {
                spanWrapAmout++;
            }

            if(spanWrapAmout !== 0) {
                if( element === "<span class='numberator'>" || element === '</span>' || element === "</span><span class='denominator'>") {
                    spansWrap += element;
                }
                else {
                    spansWrap += '<span>' + element +'</span>';
                }
                
            }
            else {
                result.push(element.toString());
            }

            if ( element === '</span>') {
                result.push(spansWrap);
                spansWrap = '';
                spanWrapAmout--;
            }
        });
        console.log(elements);
        console.log(result);

        return result;
    };

    const htmlStructure = convertToHTML(expChain).map((html, index) => {
        if(html.startsWith('<span')) {
            console.log(html)
            return <span className='fraction' key={index} dangerouslySetInnerHTML={{ __html: html }} />;
        }
        else {
            return <span  key={index} dangerouslySetInnerHTML={{ __html: html }} />;
        }
    });

    return (
        <>
            {
                htmlStructure
            }
        </>
    );
}

