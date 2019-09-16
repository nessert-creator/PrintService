import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col } from 'antd';
import styles from './Lurujiangzhangdan.css';

const FormItem = Form.Item;
const create = Form.create;


import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;



function Lurujiangzhangdan({ dispatch, form }) {
    const { getFieldDecorator } = form;
    function handleSubmit(e) {
        form.validateFields((err, values) => {
            console.log(values);
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

            if (!err) {
                dispatch({
                    type: 'jiangzhangdan/createJiangzhangdan',
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
            <div className={styles.content}>
                <header className={styles.content}>
                    <span className={styles.jinzhangdan}>进账单</span>
                </header>

                <section>
                    <Form onSubmit={handleSubmit}>
                        <FormItem label='日期' {...formCol}>
                            {getFieldDecorator('date', {
                                rules: [{ required: true, message: '请输入日期！' }]
                            })(
                                <DatePicker />
                            )}
                        </FormItem>
                        <div className={styles.biao}>
                            <div className={styles.content}>出票人</div>
                            <div className={styles.chupiaoren}>
                                <FormItem label="全称：" {...formCol}>
                                    {getFieldDecorator('chupiaorenqc', {
                                        rules: [{ required: true, message: '请输入全称！' }]
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem label="账号：" {...formCol}>
                                    {getFieldDecorator('chupiaorenzh', {
                                        rules: [{ required: true, message: '请输入账号！' }]
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem label="开户银行：" {...formCol}>
                                    {getFieldDecorator('chupiaorenkhyh', {
                                        rules: [{ required: true, message: '请输入开户银行！' }]
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                            </div>


                            <div className={styles.content}>收款人</div>
                            <FormItem label="全称：" {...formCol}>
                                {getFieldDecorator('shoukuanrenqc', {
                                    rules: [{ required: true, message: '请输入全称！' }]
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem label="账号：" {...formCol}>
                                {getFieldDecorator('shoukuanrenzh', {
                                    rules: [{ required: true, message: '请输入账号！' }]
                                })(
                                    <Input />
                                )}
                            </FormItem>
                            <FormItem label="开户银行：" {...formCol}>
                                {getFieldDecorator('shoukuanrenkhyh', {
                                    rules: [{ required: true, message: '请输入开户银行！' }]
                                })(
                                    <Input />
                                )}
                            </FormItem>

                            <div className={styles.content}>金额</div>
                            <FormItem label="人民币（大写）" {...formCol}>
                                {getFieldDecorator('renminbi', {
                                    rules: [{ required: true, message: '请输入金额！' }]
                                })(
                                    <Input />
                                )}
                            </FormItem>

                            <FormItem label="票据种类" {...formCol}>
                                {getFieldDecorator('piaojuzhonglei', {
                                    rules: [{ required: true, message: '请输入票据种类！' }]
                                })(
                                    <Input />
                                )}
                            </FormItem>

                            <FormItem label="票据张数" {...formCol}>
                                {getFieldDecorator('piaojuzhangshu', {
                                    rules: [{ required: true, message: '请输入票据张数！' }]
                                })(
                                    <Input />
                                )}
                            </FormItem>

                            <FormItem label="票据号码" {...formCol}>
                                {getFieldDecorator('piaojuhaoma', {
                                    rules: [{ required: true, message: '请输入票据号码！' }]
                                })(
                                    <Input />
                                )}
                            </FormItem>
                        </div>
                        <div className={styles.footer}>
                            <Button type="primary" htmlType="submit">注册</Button>
                        </div>
                    </Form>
                </section>
            </div>
        </div >
    );
}
Lurujiangzhangdan = connect((state) => {
    return {
        ...state.jiangzhangdan,
    };
})(Lurujiangzhangdan);

export default create()(Lurujiangzhangdan);