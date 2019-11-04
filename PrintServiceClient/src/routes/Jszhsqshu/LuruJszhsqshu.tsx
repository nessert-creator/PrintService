import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, Select, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
const Option = Select.Option;
import styles from './LuruJszhsqshu.css';

function LuruJszhsqshu({ dispatch, form }) {
    const { getFieldDecorator } = form;

    function handleSubmit(e) {
        form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    "accounttitle": values.accounttitle,
                    "bankname": values.bankname,
                    "bankcode": values.bankcode,
                    "account": values.account,
                    "naturezccount": values.naturezccount,
                    "accountnumber": values.accountnumber,
                    "pinreasons": values.pinreasons
                };
                dispatch({
                    type: 'jszhsqshu/createJszhsqshu',
                    payload: data
                });
            }
        });
    }


    function handleReset() {
        form.resetFields();
    }

    function handlePrint() {
        form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    "accounttitle": values.accounttitle,
                    "bankname": values.bankname,
                    "bankcode": values.bankcode,
                    "account": values.account,
                    "naturezccount": values.naturezccount,
                    "accountnumber": values.accountnumber,
                    "pinreasons": values.pinreasons,
                };

                dispatch({
                    type: "print/printJszhsqshu",
                    payload: data
                });
            }
        });
    }

    const formCol = {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 }
    };

    return (
        <div className={styles.container}>

            <header className={styles.title}>
                <Link to="/"><Row className={styles.logo}></Row></Link>
                <Row className={styles.title}>撤销银行结算账户申请书</Row>
            </header>

            <div className={styles.zdborder}>
                <Form onSubmit={handleSubmit}>
                    <section className={styles.border}>
                        <FormItem label="账户名称" {...formCol}>
                            {getFieldDecorator('accounttitle', {
                                // rules: [{ required: true, message: '请输入账户名称！' }]
                            })(<Input className={styles.input} />)}
                        </FormItem>
                        <FormItem label="开户银行名称" {...formCol}>
                            {getFieldDecorator('bankname', {
                                // rules: [{ required: true, message: '请输入开户银行名称！' }]
                            })(<Input className={styles.input} />)}
                        </FormItem>
                        <FormItem label="开户银行代码" {...formCol}>
                            {getFieldDecorator('bankcode', {
                                // rules: [{ required: true, message: '请输入开户银行代码！' }]
                            })(<Input className={styles.input} />)}
                        </FormItem>
                        <FormItem label="账号" {...formCol}>
                            {getFieldDecorator('account', {
                                // rules: [{ required: true, message: '请输入账号！' }]
                            })(<Input className={styles.input} />)}
                        </FormItem>
                        <FormItem label="账户性质" {...formCol}>
                            {getFieldDecorator('naturezccount', {
                                // rules: [{ required: true, message: '请输入账户性质！' }]
                            })(
                                <Select className={styles.select}>
                                    <Option value="基本">基本</Option>
                                    <Option value="专用">专用</Option>
                                    <Option value="一般">一般</Option>
                                    <Option value="临时">临时</Option>
                                    <Option value="个人">个人</Option>
                                </Select>
                            )}
                        </FormItem>
                        <FormItem label="开户许可证核准号" {...formCol}>
                            {getFieldDecorator('accountnumber', {
                                // rules: [{ required: true, message: '请输入开户许可证核准号！' }]
                            })(<Input className={styles.input} />)}
                        </FormItem>
                        <FormItem label="销户原因" {...formCol}>
                            {getFieldDecorator('pinreasons', {
                                // rules: [{ required: true, message: '请输入销户原因！' }]
                            })(<Input className={styles.input} />)}
                        </FormItem>
                    </section>

                    <div className={styles.footer}>
                        <Row>
                            <Col span={4}>
                                <Link to="/" style={{ fontSize: 16 }}> &lt;&lt; 返回首页</Link>
                            </Col>

                            <Col offset={5} span={8}>
                                <Button.Group size='large'>
                                    <Button type="primary" htmlType="submit">提交</Button>
                                    <Button type="primary" htmlType="button" onClick={() => { handlePrint() }}>打印</Button>
                                    <Button type="primary" htmlType="button" onClick={() => { handleReset() }}>重置</Button>
                                </Button.Group>
                            </Col>
                        </Row>
                    </div>
                </Form>
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
