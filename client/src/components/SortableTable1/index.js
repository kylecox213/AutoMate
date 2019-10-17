import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

class SortableTable extends React.Component {

    state = {
        currentSort: 'default',
        sortIndex: "id"
    }

    sortTypes = {
        up: {
            key: this.state.sortIndex,
            class: 'sort-up',
            fn: (a, b) => a[this.key] - b[this.key]
        },
        down: {
            key: this.state.sortIndex,
            class: 'sort-down',
            fn: (a, b) => b[this.key] - a[this.key]
        },
        default: {
            key: this.state.sortIndex,
            class: 'sort',
            fn: (a, b) => a
        }
    }

    onSortChange = () => {
        const { currentSort } = this.state;
        let nextSort;

        if (currentSort === 'down') nextSort = 'up';
        else if (currentSort === 'up') nextSort = 'default';
        else if (currentSort === 'default') nextSort = 'down';

        this.setState({
            currentSort: nextSort
        })
    }

    formatHeader = string => {
        let targIndex = string.indexOf(string.match(/[A-Z]{1}/));
        if (targIndex > 0) {
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

    render() {

        const { data, heads, pathType } = this.props;
        const { currentSort } = this.state;

        let tableHeaders = [];

        if (heads.length) {
            heads.map(header => {
                return tableHeaders.push(this.formatHeader(header));
            });
        };


        return (data.length > 0 && (
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        {tableHeaders.map(header => {
                            return (<th key={header} scope="col">
                                {header}
                                <button onClick={this.onSortChange}>
                                    <i className={`fas fa-${this.sortTypes[currentSort].class}`}></i>
                                </button>
                            </th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                    {[...data].sort(this.sortTypes[currentSort].fn).map(dataRow => (
                        <tr key={dataRow.id}>
                            {heads.map(header => {
                                return (<td key={dataRow.id + "-" + header}>
                                    <Link to={`/app/${pathType}/${dataRow.id}`}>{dataRow[header]}</Link>
                                </td>)
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        ))
    }
}

export default SortableTable;