import React from 'react';
import moment from 'moment';
import chinesesCurrencyFormatter from 'chinese-currency-formatter';

export default class Ywdlsqbiao extends React.Component {
    render() {
        const { ywdlsqbiao } = this.props;
        return (
            <div
                style={{
                    fontSize: '20px',
                    lineHeight: '40px',
                    marginLeft: '50px',
                    marginRight: '50px'
                }}
            >

                <div style={{height: '100px',padding:'90px'}}>{ywdlsqbiao.customername}</div>
                <div style={{width:'100%'}}>
                    <div style={{width:'50%',float:'left'}}>
                        <div style={{ height: '50px'}}>{ywdlsqbiao.name}</div>
                        <div style={{ height: '50px'}}>{ywdlsqbiao.certificatetype}</div>
                        <div style={{ height: '50px'}}>{ywdlsqbiao.idnumber}</div>
                        <div style={{ height: '50px'}}>{ywdlsqbiao.contactnumber}</div>
                    </div>
                    <div style={{width:'50%',float:'left'}}>
                        <div style={{ height: '50px'}}>{ywdlsqbiao.name2}</div>
                        <div style={{ height: '50px'}}>{ywdlsqbiao.certificatetype2}</div>
                        <div style={{ height: '50px'}}>{ywdlsqbiao.idnumber2}</div>
                        <div style={{ height: '50px'}}>{ywdlsqbiao.contactnumber2}</div>
                    </div>
                    <div style={{clear:'both'}}></div>
                </div>
                <div style={{ height: '50px'}}>{ywdlsqbiao.agentinformation}</div>
                <div style={{ height: '50px'}}>{ywdlsqbiao.name1}</div>
                <div style={{ height: '50px'}}>{ywdlsqbiao.certificatetype1}</div>
                <div style={{ height: '50px'}}>{ywdlsqbiao.idnumber1}</div>
                <div style={{ height: '50px'}}>{ywdlsqbiao.contactnumber1}</div>
            </div>
        );
    }
}
