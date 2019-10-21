import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Input, Button, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
//用库
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
import { Select } from 'antd';
const { Option, OptGroup } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}
function handleChange(value) {
    console.log(`selected ${value}`);
}
import styles from './LuruKailiApplyBook.css';
function LuruKailiApplyBook({ dispatch, form, }) {
    const { getFieldDecorator } = form;
    function handleSubmit(e) {
        form.validateFields((err, values) => {
            console.log(values);
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
                "year": values.date.year(),
                "month": values.date.month() + 1,
                "day": values.date.day(),
                "directorName": values.directorName,
                "cunkuanZhangHu": values.cunkuanZhangHu,
                "zuZhiJiGou": values.zuZhiJiGou,
                "fadingDaiBiao": values.fadingDaiBiao,
                "fadingDaiBiaoName": values.fadingDaiBiaoName,
                "fadingDaiBiaoType": values.fadingDaiBiaoType,
                "fadingDaiBiaoNumber": values.fadingDaiBiaoNumber
            };
            if (!err) {
                dispatch({
                    type: 'powerbook/createPowerbook',
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
                    "year": values.date.year(),
                    "month": values.date.month() + 1,
                    "day": values.date.day(),
                    "directorName": values.directorName,
                    "cunkuanZhangHu": values.cunkuanZhangHu,
                    "zuZhiJiGou": values.zuZhiJiGou,
                    "fadingDaiBiao": values.fadingDaiBiao,
                    "fadingDaiBiaoName": values.fadingDaiBiaoName,
                    "fadingDaiBiaoType": values.fadingDaiBiaoType,
                    "fadingDaiBiaoNumber": values.fadingDaiBiaoNumber
                };
                dispatch({
                    type: "print/printPowerbook",
                    payload: data
                });
            }
        });
    }
    const formCol = {
        labelCol: { span: 3 },
        wrapperCol: { span: 12 }
    };
    const formCol1 = {
        labelCol: { span: 5 },
        wrapperCol: { span: 18 }
    };
    const formCol2 = {
        labelCol: { span: 5 },
        wrapperCol: { span: 12 }
    };
    const formCol3 = {
        labelCol: { span: 10 },
        wrapperCol: { span: 12 }
    };
    return (<div className={styles.container}>
            <header>
                <Link to="/"><Row className={styles.logo}></Row></Link>
                <Row className={styles.title}>开立单位银行结算账号申请书</Row>
            </header>
            <section>
                <Form onSubmit={handleSubmit}>
                    <div className={styles.items}>
                        <Row>
                            <Col span={15}>
                                <FormItem label="存款人名称" {...formCol}>
                                    {getFieldDecorator('sname', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                            <Col span={9}>
                                <FormItem label="电话" {...formCol}>
                                    {getFieldDecorator('phoneNumber', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={12}>
                                <FormItem label="地址" {...formCol}>
                                    {getFieldDecorator('address', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem label="邮编" {...formCol}>
                                    {getFieldDecorator('postCode', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={20}>
                                <FormItem label="存款人类别" {...formCol}>
                                    {getFieldDecorator('depositorsType', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                            <Col span={20}>
                                <FormItem label="组织机构代码" {...formCol}>
                                    {getFieldDecorator('organization', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={7} className={styles.fadingAndDanwei}>
                                <FormItem label="" {...formCol}>
                                    {getFieldDecorator('fadingAndDanwei', {})(<Select style={{ width: 200 }} onChange={handleChange}>

                                            <Option value="法定代表人">法定代表人</Option>
                                            <Option value="单位负责人">单位负责人</Option>
                                        </Select>)}
                                </FormItem>
                            </Col>
                            <Col span={17} className={styles.nameLeftBod}>
                                <FormItem label="姓名" {...formCol}>
                                    {getFieldDecorator('name', {})(<Input className={styles.input}/>)}
                                </FormItem>
                                <FormItem label="证件类型" {...formCol}>
                                    {getFieldDecorator('paperType', {})(<Input className={styles.input}/>)}
                                </FormItem>
                                <FormItem label="证件号码" {...formCol}>
                                    {getFieldDecorator('paperNumber', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={14}>
                                <FormItem label="行业分类" {...formCol}>
                                    {getFieldDecorator('industry', {})(<Select style={{ width: 200 }} onChange={handleChange}>

                                            <Option value="农、林、牧、渔业">农、林、牧、渔业</Option>
                                            <Option value="采矿业">采矿业</Option>
                                            <Option value="制造业">制造业</Option>
                                            <Option value="电力、燃气及水的生产供应业">电力、燃气及水的生产供应业</Option>
                                            <Option value="建筑业">建筑业</Option>
                                            <Option value="交通运输、仓储和邮政业">交通运输、仓储和邮政业</Option>
                                            <Option value="信息传输、计算机服务及软件业">信息传输、计算机服务及软件业</Option>
                                            <Option value="批发和零售业">批发和零售业</Option>
                                            <Option value="住宿和餐饮业">住宿和餐饮业</Option>
                                            <Option value="金融业">金融业</Option>
                                            <Option value="房地产业">房地产业</Option>
                                            <Option value="租赁和商务服务业">租赁和商务服务业</Option>
                                            <Option value="科学研究、技术服务和地址地质勘查业">科学研究、技术服务和地址地质勘查业</Option>
                                            <Option value="水利、环境和公共设施管理">水利、环境和公共设施管理</Option>
                                            <Option value="居民服务和其他服务业">居民服务和其他服务业</Option>
                                            <Option value="教育业">教育业</Option>
                                            <Option value="卫生、社会保障和社会福利业">卫生、社会保障和社会福利业</Option>
                                            <Option value="文化、教育和娱乐业">文化、教育和娱乐业</Option>
                                            <Option value="公共管理和社会组织">公共管理和社会组织</Option>
                                            <Option value="其他行业">其他行业</Option>
                                        </Select>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={12}>
                                <FormItem label="注册资金" {...formCol}>
                                    {getFieldDecorator('zijin', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                            <Col span={12}>
                                <FormItem label="地区代码" {...formCol}>
                                    {getFieldDecorator('addressDaima', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={12}>
                                <FormItem label="经营范围" {...formCol}>
                                    {getFieldDecorator('business', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={20}>
                                <FormItem label="证明文件种类" {...formCol}>
                                    {getFieldDecorator('paperWenjian', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                            <Col span={20}>
                                <FormItem label="证明文件编号" {...formCol}>
                                    {getFieldDecorator('paperBianhao', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={24}>
                                <FormItem label="税务登记证(国税或地税)编号" {...formCol1}>
                                    {getFieldDecorator('tax', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row style={{ fontSize: '15px', fontWeight: 'bold' }}>
                            关联企业:关联企业信息填列在"关联企业登记表"上。
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={14}>
                                <FormItem label="账户性质" {...formCol}>
                                    {getFieldDecorator('zhangHuNature', {})(<Select style={{ width: 200 }} onChange={handleChange}>

                                            <Option value="基本">基本</Option>
                                            <Option value="一般">一般</Option>
                                            <Option value="专用">专用</Option>
                                            <Option value="临时">临时</Option>
                                        </Select>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={13}>
                                <FormItem label="资金性质" {...formCol}>
                                    {getFieldDecorator('ziJiNature', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem label='有效日期至' {...formCol2}>
                                    {getFieldDecorator('date', {
        rules: [{ required: true, message: '请输入日期！' }]
    })(<DatePicker className={styles.datePicker}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={12}>
                                <FormItem label="上级法人或主管单位名称" {...formCol3}>
                                    {getFieldDecorator('directorName', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={13}>
                                <FormItem label="基本存款账户开户许可证核准号" {...formCol3}>
                                    {getFieldDecorator('cunkuanZhangHu', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                            <Col span={11}>
                                <FormItem label='组织机构代码' {...formCol1}>
                                    {getFieldDecorator('zuZhiJiGou', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <Row>
                            <Col span={7} className={styles.fadingAndDanwei}>
                                <FormItem label="" {...formCol}>
                                    {getFieldDecorator('fadingDaiBiao', {})(<Select style={{ width: 200 }} onChange={handleChange}>

                                            <Option value="法定代表人">法定代表人</Option>
                                            <Option value="单位负责人">单位负责人</Option>
                                        </Select>)}
                                </FormItem>
                            </Col>
                            <Col span={17} className={styles.nameLeftBod}>
                                <FormItem label="姓名" {...formCol}>
                                    {getFieldDecorator('fadingDaiBiaoName', {})(<Input className={styles.input}/>)}
                                </FormItem>
                                <FormItem label="证件种类" {...formCol}>
                                    {getFieldDecorator('fadingDaiBiaoType', {})(<Input className={styles.input}/>)}
                                </FormItem>
                                <FormItem label="证件号码" {...formCol}>
                                    {getFieldDecorator('fadingDaiBiaoNumber', {})(<Input className={styles.input}/>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.BorderBottom}></div>
                        <div>
                            <Row>
                                <Col span={4}>
                                    <Link to="/" style={{ fontSize: 16 }}> &lt;&lt; 返回首页</Link>
                                </Col>

                                <Col offset={5} span={8}>
                                    <Button.Group size='large'>
                                        <Button type="primary" htmlType="submit">提交</Button>
                                        <Button type="primary" htmlType="button" onClick={() => { handlePrint(); }}>打印</Button>
                                        <Button type="primary" htmlType="button" onClick={() => { handleReset(); }}>重置</Button>
                                    </Button.Group>
                                </Col>
                            </Row>
                        </div>
                    </div>


                </Form>
            </section>
        </div>);
}
LuruKailiApplyBook = connect((state) => {
    return Object.assign({}, state.powerbook);
})(LuruKailiApplyBook);
export default create()(LuruKailiApplyBook);
