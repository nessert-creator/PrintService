import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col, InputNumber } from 'antd';
import { Link } from 'dva/router';
import styles from './Lurujiangzhangdan.css';
const FormItem = Form.Item;
const create = Form.create;
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

function Lurujiangzhangdan({ dispatch, form }) {
    const { getFieldDecorator } = form;
    function handleSubmit(e) {
        form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    "year": values.date.year(),
                    "month": values.date.month() + 1,
                    "day": values.date.day(),
                    "chupiaorenqc": values.chupiaorenqc,
                    "chupiaorenzh": values.chupiaorenzh,
                    "chupiaorenkhyh": values.chupiaorenkhyh,
                    "shoukuanrenqc": values.shoukuanrenqc,
                    "shoukuanrenzh": values.shoukuanrenzh,
                    "shoukuanrenkhyh": values.shoukuanrenkhyh,
                    "renminbi": values.renminbi,
                    "piaojuzhonglei": values.piaojuzhonglei,
                    "piaojuzhangshu": values.piaojuzhangshu,
                    "piaojuhaoma": values.piaojuhaoma
                };
                dispatch({
                    type: 'jiangzhangdan/createJiangzhangdan',
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
                    "year": values.date.year(),
                    "month": values.date.month() + 1,
                    "day": values.date.day(),
                    "chupiaorenqc": values.chupiaorenqc,
                    "chupiaorenzh": values.chupiaorenzh,
                    "chupiaorenkhyh": values.chupiaorenkhyh,
                    "shoukuanrenqc": values.shoukuanrenqc,
                    "shoukuanrenzh": values.shoukuanrenzh,
                    "shoukuanrenkhyh": values.shoukuanrenkhyh,
                    "renminbi": values.renminbi,
                    "piaojuzhonglei": values.piaojuzhonglei,
                    "piaojuzhangshu": values.piaojuzhangshu,
                    "piaojuhaoma": values.piaojuhaoma
                };

                dispatch({
                    type: "print/printJinzhangdan",
                    payload: data
                });
            }
        });
    }

    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };

    return (
        <div className={styles.container}>

            <header className={styles.title}>
                <Row className={styles.logo}></Row>
                <Row className={styles.title}>进账单</Row>
            </header>

            <section>
                <Form onSubmit={handleSubmit}>
                    <div className={styles.date}>
                        <FormItem label='日期' {...{ labelCol: { span: 4 }, wrapperCol: { span: 18 } }}>
                            {getFieldDecorator('date', {
                                rules: [{ required: true, message: '请输入日期！' }]
                            })(
                                <DatePicker className={styles.datePicker} />
                            )}
                        </FormItem>
                    </div>
                    <div className={`${styles.biao} clearfix`}>
                        <div className={styles.top}>
                            <div className={styles.chupiaorenheader}>出票人</div>
                            <div className={styles.chupiaorenName}>
                                <FormItem label="全称：" {...formCol}>
                                    {getFieldDecorator('chupiaorenqc', {
                                        rules: [{ required: true, message: '请输入全称！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                                <FormItem label="账号：" {...formCol}>
                                    {getFieldDecorator('chupiaorenzh', {
                                        rules: [{ required: true, message: '请输入账号！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                                <FormItem label="开户银行：" {...formCol}>
                                    {getFieldDecorator('chupiaorenkhyh', {
                                        rules: [{ required: true, message: '请输入开户银行！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </div>


                            <div className={styles.shoukuanrenheader}>收款人</div>
                            <div className={styles.shoukuanrenName}>
                                <FormItem label="全称：" {...formCol}>
                                    {getFieldDecorator('shoukuanrenqc', {
                                        rules: [{ required: true, message: '请输入全称！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                                <FormItem label="账号：" {...formCol}>
                                    {getFieldDecorator('shoukuanrenzh', {
                                        rules: [{ required: true, message: '请输入账号！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                                <FormItem label="开户银行：" {...formCol}>
                                    {getFieldDecorator('shoukuanrenkhyh', {
                                        rules: [{ required: true, message: '请输入开户银行！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </div>
                        </div>

                        <div className={styles.money}>
                            <div className={styles.moneyheader}>金额</div>
                            <div className={styles.renminbi}>
                                <FormItem label="人民币（小写）" {...formCol}>
                                    {getFieldDecorator('renminbi', {
                                        rules: [{ required: true, message: '请输入金额！' }]
                                    })(
                                        <InputNumber className={styles.inputNumber} />
                                    )}
                                </FormItem>
                            </div>
                        </div>

                        <div className={styles.clearfix}>
                            <div className={styles.left}>
                                <div className={styles.clearfix}>
                                    <div className={styles.piaojuzhonglei}>
                                        <FormItem label="票据种类" {...formCol}>
                                            {getFieldDecorator('piaojuzhonglei', {
                                                rules: [{ required: true, message: '请输入票据种类！' }]
                                            })(
                                                <Input className={styles.input} />
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className={styles.piaojuzhangshu}>
                                        <FormItem label="票据张数" {...formCol}>
                                            {getFieldDecorator('piaojuzhangshu', {
                                                rules: [{ required: true, message: '请输入票据张数！' }]
                                            })(
                                                <InputNumber className={styles.inputNumber} />
                                            )}
                                        </FormItem>
                                    </div>
                                    <div className={styles.piaojuhaoma}>
                                        <FormItem label="票据号码" {...formCol}>
                                            {getFieldDecorator('piaojuhaoma', {
                                                rules: [{ required: true, message: '请输入票据号码！' }]
                                            })(
                                                <Input className={styles.input} />
                                            )}
                                        </FormItem>
                                    </div>
                                </div>
                                <div className={styles.fuhejizhang}>
                                    <span className={styles.fuhe}>复核</span><span className={styles.jizhang}>记账</span>
                                </div>
                            </div>
                            <div className={styles.right}>开户银行签章</div>
                        </div>
                    </div>
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
            </section>
        </div >
    );
}
Lurujiangzhangdan = connect((state) => {
    return {
        ...state.jiangzhangdan,
    };
})(Lurujiangzhangdan);

export default create()(Lurujiangzhangdan);