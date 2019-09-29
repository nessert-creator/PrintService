import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
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

            if (!err) {
                dispatch({
                    type: 'shouquanshu/createShouquanshu',
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
        <div>
            <header className={styles.shoquauanshu}>
                <span>中信银行公司电子银行业务办理授权书</span>
            </header>

            <section className={styles.content}>
                <div className={styles.neiron}>
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col span={6} className={styles.fenghan}>中信银行昆明分行</Col>
                            <Col span={6}>
                                <FormItem >
                                    {getFieldDecorator('zhihang', {
                                        rules: [{ required: true, message: '请输入支行名称！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={4} className={styles.zhihang}>支行：</Col>
                        </Row>
                        <Row className={styles.duanluo}>
                            <span className={styles.shouquan}>我公司因办理中信银行公司电子银行业务需要，特此授权</span>
                            <FormItem style={{ display: "inline-block", border: "none" }}>
                                {getFieldDecorator('name', {
                                    rules: [{ required: true, message: '请输入被授权人姓名！' }]
                                })(
                                    <Input className={styles.input} />
                                )}
                            </FormItem>
                            (被授权人姓名，身份证号码：
                            <FormItem style={{ display: "inline-block", border: "none" }}>
                                {getFieldDecorator('idcard', {
                                    rules: [{ required: false, message: '请输入身份证号码！' }]
                                })(
                                    <Input className={styles.input} />
                                )}
                            </FormItem>
                            手机号码：
                            <FormItem style={{ display: "inline-block", border: "none" }}>
                                {getFieldDecorator('telephonenumber', {
                                    rules: [{ required: true, message: '请输入手机号码！' }]
                                })(
                                    <Input className={styles.input} />
                                )}）
                            </FormItem>
                            <span>携带业务相关资料、本人有效身份证件原件和复印件（复印件需加盖单位公章）及本授权书，前往贵行办理：</span>
                        </Row>
                        <Row className={styles.duanluo}>
                            <Col span={6} className={styles.gou}>
                                <Radio.Group  >
                                    <Radio value={"中信银行公司电子银行业务申请"}>中信银行公司电子银行业务申请</Radio>
                                    <Radio value={"中信银行公司电子银行申请资料（客户联）领取"}>中信银行公司电子银行申请资料（客户联）领取</Radio>
                                    <Radio value={"中信银行公司电子银行USBETY（用户数字证书）领取"}>中信银行公司电子银行USBETY（用户数字证书）领取</Radio>
                                    <Radio value={"中信银行公司电子银行用户密码信函领取"}>中信银行公司电子银行用户密码信函领取</Radio>
                                    <Radio name="其他" >其他</Radio>
                                </Radio.Group>
                            </Col>
                            <FormItem className={styles.input2}>
                                {getFieldDecorator('other', {
                                    rules: [{ required: false, message: '请输入其他！' }]
                                })(
                                    <Input className={styles.input1} />
                                )}
                            </FormItem>
                        </Row>
                        <div className={styles.mowei}>
                            <div className={styles.minze}>等业务相关手续。若因被授权人原因导致的相关法律后果由我公司承担责任，贵行免责。</div>
                            <div className={styles.fujin}>附件：被授权人身份证复印件（加盖公章）</div>
                        </div>
                        <span className={styles.gonzhang}>企业公章</span>
                        <FormItem label='日期' {...formCol} className={styles.Date}>
                            {getFieldDecorator('date', {
                                rules: [{ required: true, message: '请输入日期！' }]
                            })(
                                <DatePicker />
                            )}
                        </FormItem>
                        <div className={styles.footer}><Button type="primary" htmlType="submit">提交</Button></div>

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