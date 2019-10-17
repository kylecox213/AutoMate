import React from "react";

function Table(props) {

    function formatHeader(string) {
        let targIndex = string.indexOf(string.match(/[A-Z]{1}/));
        if (targIndex > -1) {
            let wordArray = [];
            wordArray.push(string.slice(0, targIndex));
            wordArray.push(string.slice(targIndex, (string.length)));
            let formattedArray = [];
            wordArray.map(word => {
                let cap = word[0].toUpperCase();
                let trunc = word.slice(1, word.length)
                let formattedWord = cap + trunc;
                return formattedArray.push(formattedWord);
            });
            return formattedArray.join(" ");
        }
        else {
            let cap = string[0].toUpperCase();
            let trunc = string.slice(1, string.length)
            let formattedWord = cap + trunc;
            return formattedWord;
        };
    };

    let tableHeaders = [];

    if (props.heads.length) {
        props.heads.map(header => {
            return tableHeaders.push(formatHeader(header));
        });
    };

    if (tableHeaders.length) {
        return (
            <table>
                <thead>
                    <tr>
                        {tableHeaders.map(header => {
                            return (<th>{header}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(dataRow => {
                        return (
                            <tr>
                                {props.heads.map(header => {
                                    return (<td>{dataRow[header]}</td>)
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        );
    } else return (<div></div>)
}

export default Table;