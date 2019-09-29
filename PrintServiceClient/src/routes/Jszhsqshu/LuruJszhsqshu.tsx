import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruJszhsqshu.css';

function LuruJszhsqshu({ dispatch, form }) {
    const { getFieldDecorator } = form;
    function handleSubmit(e) {
        form.validateFields((err, values) => {
            console.log(values);

            let data = {
                "accounttitle": values.accounttitle,
                "bankname": values.bankname,
                "bankcode": values.bankcode,
                "account": values.account,
                "naturezccount": values.naturezccount,
                // "basic": values.basic,
                // "special": values.special,
                // "general": values.general,
                // "temporary": values.temporary,
                // "personal": values.personal,
                "accountnumber": values.accountnumber,
                "pinreasons": values.pinreasons,
                "voucher": values.voucher,
                "species": values.species,
                "anumberof": values.anumberof,
                "allnumbers": values.allnumbers,
                "fillingexplanation": values.fillingexplanation,
                "year": values.year,
                "month": values.month,
                "day": values.day,
                "year1": values.year1,
                "month1": values.month1,
                "day1": values.day1,
            };

            if (!err) {
                dispatch({
                    type: 'jszhsqshu/createjszhsqshu',
                    payload: data
                });
            }
        });
    }

    const formCol = {
        labelCol: { span: 5 },
        wrapperCol: { span: 15 }
    };

    return (
        <div className={styles.jszhsqs}>
            <span className={styles.cxyh}>撤销银行结算账户申请书</span>
            <div className={styles.zdborder}>
                <section className={styles.border}>
                    <Form onSubmit={handleSubmit} className={styles.accounttitle}>
                        <div className={styles.accounttitle1}>
                            <FormItem label="账户名称" {...formCol}>
                                {getFieldDecorator('accounttitle', {
                                    rules: [{ required: true, message: '请输入账户名称！' }]
                                })(<Input />)}
                            </FormItem>
                        </div>
                        <div className={styles.bankname1}>
                            <FormItem label="开户银行名称" {...formCol}>
                                {getFieldDecorator('bankname', {
                                    rules: [{ required: true, message: '请输入开户银行名称！' }]
                                })(<Input />)}
                            </FormItem>
                        </div>
                        <div className={styles.bankcode}>
                            <div className={styles.account}>
                                <FormItem label="开户银行代码" {...formCol}>
                                    {getFieldDecorator('bankcode', {
                                        rules: [{ required: true, message: '请输入开户银行代码！' }]
                                    })(<Input />)}
                                </FormItem>
                                <div className={`${styles.hint} clearfix`}>
                                    <FormItem label="账号" {...formCol}>
                                        {getFieldDecorator('account', {
                                            rules: [{ required: true, message: '请输入账号！' }]
                                        })(<Input />)}
                                    </FormItem>
                                </div>
                            </div>
                            <div className={styles.naturezccount1}>
                                <FormItem label="账户性质" {...formCol}>
                                    {getFieldDecorator('naturezccount', {
                                        rules: [{ required: true, message: '请输入账户性质！' }]
                                    })(<Input />)}
                                </FormItem>
                            </div>
                            <div className={styles.accountnumber1}>
                                <FormItem label="开户许可证核准号" {...formCol}>
                                    {getFieldDecorator('accountnumber', {
                                        rules: [{ required: true, message: '请输入开户许可证核准号！' }]
                                    })(<Input />)}
                                </FormItem>
                            </div>
                            <div className={styles.pinreasons1}>
                                <FormItem label="销户原因" {...formCol}>
                                    {getFieldDecorator('pinreasons', {
                                        rules: [{ required: true, message: '请输入销户原因！' }]
                                    })(<Input />)}
                                </FormItem>
                            </div>
                            <div>
                                <div>
                                </div>
                                <div className={`${styles.hint} clearfix`}>
                                    <header className={styles.dbk}>
                                        <span className={styles.bckr}>本存款人申请撤销上述银行账户，承诺所提供的证明文件真实，有效。</span>
                                        <span className={styles.ckrqz}>存款人（签章）</span>
                                        <span className={styles.nyr}>年 月 日</span>
                                    </header>
                                </div>
                            </div>

                            <div className={styles.khyhbk}>
                                <header className={styles.khyh}>开户银行审核意见:</header>
                                <span className={styles.jbrqz}>经办人（签章）</span>
                            </div>
                            <div className={styles.nyrbk}>
                                <div className={styles.dybk}>开户银行（签章）</div>
                                <div className={styles.nyr1}>年 月 日</div>
                            </div>
                            <div className={styles.jhkb}>交回空白重要凭证</div>
                            <div className={styles.voucher1}>
                                <FormItem label="年" {...formCol}>
                                    {getFieldDecorator('year', {
                                        rules: [{ required: true, message: '请输入年！' }]
                                    })(<Input />)}
                                </FormItem>
                                <FormItem label="月" {...formCol}>
                                    {getFieldDecorator('month', {
                                        rules: [{ required: true, message: '请输入月！' }]
                                    })(<Input />)}
                                </FormItem>
                                <FormItem label="日" {...formCol}>
                                    {getFieldDecorator('day', {
                                        rules: [{ required: true, message: '请输入日！' }]
                                    })(<Input />)}
                                </FormItem>
                                <FormItem label="年" {...formCol}>
                                    {getFieldDecorator('year1', {
                                        rules: [{ required: true, message: '请输入年！' }]
                                    })(<Input />)}
                                </FormItem>
                                <FormItem label="月" {...formCol}>
                                    {getFieldDecorator('month1', {
                                        rules: [{ required: true, message: '请输入月！' }]
                                    })(<Input />)}
                                </FormItem>
                                <FormItem label="日" {...formCol}>
                                    {getFieldDecorator('day1', {
                                        rules: [{ required: true, message: '请输入日！' }]
                                    })(<Input />)}
                                </FormItem>
                                <FormItem label="交回空白重要凭证" {...formCol}>
                                    {getFieldDecorator('voucher', {
                                        rules: [{ required: true, message: '请输入交回空白重要凭证！' }]
                                    })(<Input />)}
                                </FormItem>
                            </div>
                            <div>
                                <Row>
                                    <Col span={6}>种类</Col>
                                    <Col span={4}>张（份）数</Col>
                                    <Col span={10}>起讫号码</Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <FormItem >
                                            {getFieldDecorator('species', {
                                                rules: [{ required: true, message: '请输入种类！' }]
                                            })(<Input />)}
                                        </FormItem>
                                    </Col>
                                    <Col span={4}>
                                    <FormItem >
                                        {getFieldDecorator('anumberof', {
                                            rules: [{ required: true, message: '请输入张（份）数！' }]
                                        })(<Input />)}
                                    </FormItem>
                                    </Col>
                                    <Col span={10}>
                                    <FormItem>
                                        {getFieldDecorator('allnumbers', {
                                            rules: [{ required: true, message: '请输入起讫号码！' }]
                                        })(<Input />)}
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <FormItem >
                                            {getFieldDecorator('species', {
                                                rules: [{ required: true, message: '请输入种类！' }]
                                            })(<Input />)}
                                        </FormItem>
                                    </Col>
                                    <Col span={4}>
                                    <FormItem >
                                        {getFieldDecorator('anumberof', {
                                            rules: [{ required: true, message: '请输入张（份）数！' }]
                                        })(<Input />)}
                                    </FormItem>
                                    </Col>
                                    <Col span={10}>
                                    <FormItem>
                                        {getFieldDecorator('allnumbers', {
                                            rules: [{ required: true, message: '请输入起讫号码！' }]
                                        })(<Input />)}
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <FormItem >
                                            {getFieldDecorator('species', {
                                                rules: [{ required: true, message: '请输入种类！' }]
                                            })(<Input />)}
                                        </FormItem>
                                    </Col>
                                    <Col span={4}>
                                    <FormItem >
                                        {getFieldDecorator('anumberof', {
                                            rules: [{ required: true, message: '请输入张（份）数！' }]
                                        })(<Input />)}
                                    </FormItem>
                                    </Col>
                                    <Col span={10}>
                                    <FormItem>
                                        {getFieldDecorator('allnumbers', {
                                            rules: [{ required: true, message: '请输入起讫号码！' }]
                                        })(<Input />)}
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <FormItem >
                                            {getFieldDecorator('species', {
                                                rules: [{ required: true, message: '请输入种类！' }]
                                            })(<Input />)}
                                        </FormItem>
                                    </Col>
                                    <Col span={4}>
                                    <FormItem >
                                        {getFieldDecorator('anumberof', {
                                            rules: [{ required: true, message: '请输入张（份）数！' }]
                                        })(<Input />)}
                                    </FormItem>
                                    </Col>
                                    <Col span={10}>
                                    <FormItem>
                                        {getFieldDecorator('allnumbers', {
                                            rules: [{ required: true, message: '请输入起讫号码！' }]
                                        })(<Input />)}
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <FormItem >
                                            {getFieldDecorator('species', {
                                                rules: [{ required: true, message: '请输入种类！' }]
                                            })(<Input />)}
                                        </FormItem>
                                    </Col>
                                    <Col span={4}>
                                    <FormItem >
                                        {getFieldDecorator('anumberof', {
                                            rules: [{ required: true, message: '请输入张（份）数！' }]
                                        })(<Input />)}
                                    </FormItem>
                                    </Col>
                                    <Col span={10}>
                                    <FormItem>
                                        {getFieldDecorator('allnumbers', {
                                            rules: [{ required: true, message: '请输入起讫号码！' }]
                                        })(<Input />)}
                                    </FormItem>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col span={6}>
                                        <FormItem >
                                            {getFieldDecorator('species', {
                                                rules: [{ required: true, message: '请输入种类！' }]
                                            })(<Input />)}
                                        </FormItem>
                                    </Col>
                                    <Col span={4}>
                                    <FormItem >
                                        {getFieldDecorator('anumberof', {
                                            rules: [{ required: true, message: '请输入张（份）数！' }]
                                        })(<Input />)}
                                    </FormItem>
                                    </Col>
                                    <Col span={10}>
                                    <FormItem>
                                        {getFieldDecorator('allnumbers', {
                                            rules: [{ required: true, message: '请输入起讫号码！' }]
                                        })(<Input />)}
                                    </FormItem>
                                    </Col>
                                </Row>
                                
                            </div>
                        </div>


                        <Button type="primary" htmlType="submit" className={styles.btn}>
                            提交
					</Button>
                    </Form>
                </section>
            </div>
        </div>
    );
}
LuruJszhsqshu = connect((state) => {
    return {
        ...state.jszhsqshu,
    };
})(LuruJszhsqshu);

export default create()(LuruJszhsqshu);
