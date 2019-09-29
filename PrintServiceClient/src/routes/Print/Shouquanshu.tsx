import React from 'react';
import moment from 'moment';
import chinesesCurrencyFormatter from 'chinese-currency-formatter';
import { digitUppercase } from '../../utils/digitUppercase'

export default class Shouquanshu extends React.Component {
    render() {
        const { Shouquanshu } = this.props;
        return (
            <div style={{
                fontSize: "21px",
                paddingTop: "210px"
            }}>
                <div>
                    <span
                        style={{
                            marginLeft: "320px"
                        }}>{Shouquanshu.zhihang}</span>
                </div>
                <div style={{ marginTop: "20px" }}>
                    <span style={{
                        marginLeft: "650px"
                    }}>{Shouquanshu.name}</span>
                </div>
                <div style={{ marginTop: "10px" }}>
                    <span style={{
                        marginLeft: "400px"
                    }}>{Shouquanshu.idcard}</span>
                </div>
                <div style={{}}>
                    <span
                    style={{
                        marginLeft:"170px"
                    }}>{Shouquanshu.telephonenumber}</span>
                </div>
                <div style={{}}>
                    <span>{Shouquanshu.other}</span>
                </div>
                <div>
                    <span style={{
                    }}>{Shouquanshu.year}</span>
                    <span style={{
                    }}>{Shouquanshu.month}</span>
                    <span style={{
                    }}>{Shouquanshu.day}</span>
                </div>
            </div>
        );
    }
}