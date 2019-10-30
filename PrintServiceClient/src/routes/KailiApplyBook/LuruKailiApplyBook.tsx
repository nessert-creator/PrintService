import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
//用库
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
import { Select } from 'antd';
const { Option, OptGroup } = Select;

import styles from './LuruKailiApplyBook.css';

function LuruKailiApplyBook({ dispatch, form, }) {
    const { getFieldDecorator } = form;

    function handleSubmit(e) {
        form.validateFields((err, values) => {
            if (!err) {
                let data = {
                    "sname": values.sname,
                    "phoneNumber": values.phoneNumber,
                    "address": values.address,
                    "postCode": values.postCode,
                    "depositorsType": values.depositorsType,
                    "organization": values.organization,
                    "fadingAndDanwei": values.fadingAndDanwei,
                    "name": values.name,
                    "paperType": values.paperType,
                    "paperNumber": values.paperNumber,
                    "industry": values.industry,
                    "zijin": values.zijin,
                    "addressDaima": values.addressDaima,
                    "business": values.business,
                    "paperWenjian": values.paperWenjian,
                    "paperBianhao": values.paperBianhao,
                    "tax": values.tax,
                    "zhangHuNature": values.zhangHuNature,
                    "ziJiNature": values.ziJiNature,
                    "year": values.date && values.date.year(),
                    "month": values.date && values.date.month() + 1,
                    "day": values.date && values.date.day(),
                    "directorName": values.directorName,
                    "cunkuanZhangHu": values.cunkuanZhangHu,
                    "zuZhiJiGou": values.zuZhiJiGou,
                    "fadingDaiBiao": values.fadingDaiBiao,
                    "fadingDaiBiaoName": values.fadingDaiBiaoName,
                    "fadingDaiBiaoType": values.fadingDaiBiaoType,
                    "fadingDaiBiaoNumber": values.fadingDaiBiaoNumber
                };
                dispatch({
                    type: 'kailiApplyBook/createKailiApplyBook',
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
                    "sname": values.sname,
                    "phoneNumber": values.phoneNumber,
                    "address": values.address,
                    "postCode": values.postCode,
                    "depositorsType": values.depositorsType,
                    "organization": values.organization,
                    "fadingAndDanwei": values.fadingAndDanwei,
                    "name": values.name,
                    "paperType": values.paperType,
                    "paperNumber": values.paperNumber,
                    "industry": values.industry,
                    "zijin": values.zijin,
                    "addressDaima": values.addressDaima,
                    "business": values.business,
                    "paperWenjian": values.paperWenjian,
                    "paperBianhao": values.paperBianhao,
                    "tax": values.tax,
                    "zhangHuNature": values.zhangHuNature, 
                    "ziJiNature": values.ziJiNature,
                    "year": values.date && values.date.year(),
                    "month": values.date && values.date.month() + 1,
                    "day": values.date && values.date.day(),
                    "directorName": values.directorName,
                    "cunkuanZhangHu": values.cunkuanZhangHu,
                    "zuZhiJiGou": values.zuZhiJiGou,
                    "fadingDaiBiao": values.fadingDaiBiao,
                    "fadingDaiBiaoName": values.fadingDaiBiaoName,
                    "fadingDaiBiaoType": values.fadingDaiBiaoType,
                    "fadingDaiBiaoNumber": values.fadingDaiBiaoNumber
                };

                dispatch({
                    type: "print/printKailiApplyBook",
                    payload: data
                });
            }
        });
    }

    const formCol = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    };
    const formCol1 = {
        labelCol: { span: 5 },
        wrapperCol: { span: 18 }
    }
    const formCol2 = {
        labelCol: { span: 5 },
        wrapperCol: { span: 12 }
    }
    const formCol3 = {
        labelCol: { span: 10 },
        wrapperCol: { span: 12 }
    }
    return (
        <div className={styles.container}>
            <header>
                <Link to="/"><Row className={styles.logo}></Row></Link>
                <Row className={styles.title}>开立单位银行结算账号申请书</Row>
            </header>
            <section>
                <Form onSubmit={handleSubmit}>
                    <div className={styles.items}>

                        <header className={styles.header} >
                            存款人上级法人或主管单位信息
                        </header>

                        <Row>
                            <Col span={10}>
                                <FormItem label="存款人名称"{...formCol}>
                                    {getFieldDecorator('sname', {
                                        // // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col offset={2} span={10}>
                                <FormItem label="电话"{...formCol}>
                                    {getFieldDecorator('phoneNumber', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10}>
                                <FormItem label="地址"{...formCol}>
                                    {getFieldDecorator('address', {
                                        // // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col offset={2} span={10}>
                                <FormItem label="邮编"{...formCol}>
                                    {getFieldDecorator('postCode', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10}>
                                <FormItem label="存款人类别"{...formCol}>
                                    {getFieldDecorator('depositorsType', {
                                        // // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col offset={2} span={10}>
                                <FormItem label="组织机构代码"{...formCol}>
                                    {getFieldDecorator('organization', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10}>
                                <FormItem label="负责人"{...formCol}>
                                    {getFieldDecorator('fadingAndDanwei', {
                                        // // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Select style={{ width: 200 }} >

                                            <Option value="法定代表人">法定代表人</Option>
                                            <Option value="单位负责人">单位负责人</Option>
                                        </Select>
                                    )}
                                </FormItem>
                            </Col>
                            <Col offset={2} span={10}>
                                <FormItem label="姓名"{...formCol}>
                                    {getFieldDecorator('name', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10} >
                                <FormItem label="证件类型"{...formCol}>
                                    {getFieldDecorator('paperType', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col offset={2} span={10}>
                                <FormItem label="证件号码"{...formCol}>
                                    {getFieldDecorator('paperNumber', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10}>
                                <FormItem label="行业分类"{...formCol}>
                                    {getFieldDecorator('industry', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <span>
                                            请在纸质单据上勾选
                                        </span>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10}>
                                <FormItem label="注册资金"{...formCol}>
                                    {getFieldDecorator('zijin', {
                                        // // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col offset={2} span={10}>
                                <FormItem label="地区代码"{...formCol}>
                                    {getFieldDecorator('addressDaima', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10}>
                                <FormItem label="经营范围"{...formCol}>
                                    {getFieldDecorator('business', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10}>
                                <FormItem label="证明文件种类"{...formCol}>
                                    {getFieldDecorator('paperWenjian', {
                                        // // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col offset={2} span={10}>
                                <FormItem label="证明文件编号"{...formCol}>
                                    {getFieldDecorator('paperBianhao', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <FormItem label="税务登记证(国税或地税)编号"{...formCol1}>
                                    {getFieldDecorator('tax', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10}>
                                <FormItem label="关联企业" {...formCol}>
                                    <span>
                                        关联企业信息填列在"关联企业登记表"上。
                                        </span>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10}>
                                <FormItem label="账户性质"{...formCol}>
                                    {getFieldDecorator('zhangHuNature', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Select style={{ width: 200 }} >

                                            <Option value="基本">基本</Option>
                                            <Option value="一般">一般</Option>
                                            <Option value="专用">专用</Option>
                                            <Option value="临时">临时</Option>
                                        </Select>,
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={10}>
                                <FormItem label="资金性质"{...formCol}>
                                    {getFieldDecorator('ziJiNature', {
                                        // // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col offset={2} span={10}>
                                <FormItem label='有效日期至' {...formCol}>
                                    {getFieldDecorator('date', {
                                        // rules: [{ required: true, message: '请输入日期！' }]
                                    })(
                                        <DatePicker className={styles.datePicker} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>

                        <header className={styles.header}>
                            存款人上级法人或主管单位信息
                        </header>

                        <Row>
                            <Col span={12}>
                                <FormItem label="上级法人或主管单位名称"{...formCol}>
                                    {getFieldDecorator('directorName', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <FormItem label="基本存款账户开户许可证核准号"{...formCol3}>
                                    {getFieldDecorator('cunkuanZhangHu', {
                                        // // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem label='组织机构代码' {...formCol3}>
                                    {getFieldDecorator('zuZhiJiGou', {
                                        // rules: [{ required: true, message: '请输入组织机构代码！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12} className={styles.fadingAndDanwei}>
                                <FormItem label="负责人"{...formCol}>
                                    {getFieldDecorator('fadingDaiBiao', {
                                        // // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Select style={{ width: "100%" }}>

                                            <Option value="法定代表人">法定代表人</Option>
                                            <Option value="单位负责人">单位负责人</Option>
                                        </Select>,
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12} className={styles.nameLeftBod}>
                                <FormItem label="姓名"{...formCol}>
                                    {getFieldDecorator('fadingDaiBiaoName', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12} className={styles.nameLeftBod}>
                                <FormItem label="证件种类"{...formCol}>
                                    {getFieldDecorator('fadingDaiBiaoType', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                            <Col span={12} className={styles.nameLeftBod}>
                                <FormItem label="证件号码"{...formCol}>
                                    {getFieldDecorator('fadingDaiBiaoNumber', {
                                        // rules: [{ required: true, message: '请输入姓名！' }]
                                    })(
                                        <Input className={styles.input} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
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
        </div>
    );
}
LuruKailiApplyBook = connect((state) => {
    return {
        ...state.powerbook,
    };
})(LuruKailiApplyBook);

export default create()(LuruKailiApplyBook);