import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col, InputNumber } from 'antd';
import { Checkbox } from 'antd';
import styles from './LuruShouquanshu.css';
import { Radio } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
import { DatePicker } from 'antd';
import { now } from 'moment';

function LuruShouquanshu({ dispatch, form }) {
    const { getFieldDecorator } = form;
    function handleSubmit(e) {
        form.validateFields((err, values) => {
            if (!err) {
                console.log(values);
                let data = {
                    "zhihang": values.zhihang,
                    "name": values.name,
                    "idcard": values.idcard,
                    "telephonenumber": values.telephonenumber,
                    "other": values.other,
                    "year": values.date.year(),
                    "month": values.date.month(),
                    "day": values.date.day(),
                };
                dispatch({
                    type: 'shouquanshu/createShouquanshu',
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
                    "zhihang": values.zhihang,
                    "name": values.name,
                    "idcard": values.idcard,
                    "telephonenumber": values.telephonenumber,
                    "other": values.other,
                    "year": values.date.year(),
                    "month": values.date.month() + 1,
                    "day": values.date.day(),
                };

                dispatch({
                    type: "print/printShouquanshu",
                    payload: data
                });
            }
        });
    }

    const changeTax = function (t) {
        dispatch({
            type: 'registrationtState',
            payload: { tax: t }
        });
    }

    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 12 }
    };
    return (
        <div className={styles.container}>
            <header className={styles.title}>
                <Link to="/"><Row className={styles.logo}></Row></Link>
                <Row className={styles.title}>中信银行公司电子银行业务办理授权书</Row>
            </header>
            <section className={styles.content}>
                <div className={styles.neiron}>
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
                        <Row className={styles.zhihang}>
                            <span>中信银行昆明分行</span>
                            <FormItem className={styles.formItem}>
                                {getFieldDecorator('zhihang', {
                                    rules: [{ required: true, message: '请输入支行名称！' }]
                                })(
                                    <Input className={styles.input} />
                                )}
                            </FormItem>
                            <span>支行：</span>
                        </Row>
                        <Row className={styles.duanluo}>
                            <span className={styles.shouquan}>我公司因办理中信银行公司电子银行业务需要，特此授权</span>
                            <FormItem className={styles.formItem}>
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: '请输入被授权人姓名！' }]
                                })(
                                    <Input className={styles.input} />
                                )}
                            </FormItem>
                            (被授权人姓名，身份证号码：
                            <FormItem className={styles.formItem}>
                                {getFieldDecorator('idcard', {
                                    rules: [{ required: false, message: '请输入身份证号码！' }]
                                })(
                                    <Input className={styles.input} />
                                )}
                            </FormItem>
                            手机号码：
                            <FormItem className={styles.formItem}>
                                {getFieldDecorator('telephonenumber', {
                                    rules: [{ required: true, message: '请输入手机号码！' }]
                                })(
                                    <Input className={styles.input} />
                                )}
                            </FormItem>
                            <span>）携带业务相关资料、本人有效身份证件原件和复印件（复印件需加盖单位公章）及本授权书，前往贵行办理：</span>
                        </Row>
                        <Row className={styles.duanluo}>
                            <Col span={6}>
                                <Radio.Group >
                                    <Radio value={"中信银行公司电子银行业务申请"}>中信银行公司电子银行业务申请</Radio>
                                    <br />
                                    <Radio value={"中信银行公司电子银行申请资料（客户联）领取"}>中信银行公司电子银行申请资料（客户联）领取</Radio>
                                    <br />
                                    <Radio value={"中信银行公司电子银行USBETY（用户数字证书）领取"}>中信银行公司电子银行USBETY（用户数字证书）领取</Radio>
                                    <br />
                                    <Radio value={"中信银行公司电子银行用户密码信函领取"}>中信银行公司电子银行用户密码信函领取</Radio>
                                    <br />
                                    <Radio name="其他" >
                                        其他
                                        <FormItem className={styles.formItem}>
                                            {getFieldDecorator('other', {
                                                rules: [{ required: false, message: '请输入其他！' }]
                                            })(
                                                <Input className={styles.input} />
                                            )}
                                        </FormItem>
                                    </Radio>
                                </Radio.Group>
                            </Col>

                        </Row>
                        <div className={styles.mowei}>
                            <div className={styles.minze}>等业务相关手续。若因被授权人原因导致的相关法律后果由我公司承担责任，贵行免责。</div>
                            <div className={styles.fujin}>附件：被授权人身份证复印件（加盖公章）</div>
                        </div>
                        <span className={styles.gonzhang}>企业公章</span>

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
            </section>
        </div >
    );
}
LuruShouquanshu = connect((state) => {
    return {
        ...state.shouquanshu,
    };
})(LuruShouquanshu);

export default create()(LuruShouquanshu);