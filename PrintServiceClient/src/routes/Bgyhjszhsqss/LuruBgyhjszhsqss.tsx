import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Icon, Input, Button, Checkbox, message, Row, Col } from 'antd';
const FormItem = Form.Item;
const create = Form.create;
import styles from './LuruBgyhjszhsqss.css';
//用库
import { Select } from 'antd';

const { Option, OptGroup } = Select;
function handleChange(value) {
    console.log(`selected ${value}`);
}
function LuruBgyhjszhsqss({ dispatch, form }) {
    const { getFieldDecorator } = form;
    function handleSubmit(e) {
        form.validateFields((err, values) => {
            console.log(values);

            let data = {
                "customername": values.customername,
                "bankcode": values.bankcode,
                "accountnumber": values.accountnumber,
                "natureofaccount": values.natureofaccount,
                "accountopennumber": values.accountopennumber,
                "changesas": values.changesas,
                "customername1": values.customername1,
                "id": values.id,
                "postalcode": values.postalcode,
                "phonenumber": values.phonenumber,
                "registered": values.registered,
                "typeof": values.typeof,
                "documentnumber": values.documentnumber,
                "businessscope": values.businessscope,
                "legal": values.legal,
                "name": values.name,
                "typedocument": values.typedocument,
                "idnumber": values.idnumber,
                "affiliated": values.affiliated,
                "dengjibiao": values.dengjibiao,
                "thesuperior": values.thesuperior,
                "thename": values.thename,
                "headofunit": values.headofunit,
                "name1": values.name1,
                "typedocument1": values.ttypedocument1,
                "idnumber1": values.idnumber1,
            };

            if (!err) {
                dispatch({
                    type: 'bgyhjszhsqss/createbgyhjszhsqss',
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
                    "customername": values.customername,
                    "bankcode": values.bankcode,
                    "accountnumber": values.accountnumber,
                    "natureofaccount": values.natureofaccount,
                    "accountopennumber": values.accountopennumber,
                    "changesas": values.changesas,
                    "customername1": values.customername1,
                    "id": values.id,
                    "postalcode": values.postalcode,
                    "phonenumber": values.phonenumber,
                    "registered": values.registered,
                    "typeof": values.typeof,
                    "documentnumber": values.documentnumber,
                    "businessscope": values.businessscope,
                    "legal": values.legal,
                    "name": values.name,
                    "typedocument": values.typedocument,
                    "idnumber": values.idnumber,
                    "affiliated": values.affiliated,
                    "dengjibiao": values.dengjibiao,
                    "thesuperior": values.thesuperior,
                    "thename": values.thename,
                    "headofunit": values.headofunit,
                    "name1": values.name1,
                    "typedocument1": values.ttypedocument1,
                    "idnumber1": values.idnumber1,
                };

                dispatch({
                    type: "print/printBgyhjszhsqss",
                    payload: data
                });
            }
        });
    }

    const formCol = {
        labelCol: { span: 5 },
        wrapperCol: { span: 15 }
    };

    return (<div >
        <div>
            <header className={styles.title}>
                <Link to="/"><Row className={styles.logo}></Row></Link>
                <Row className={styles.title}>变更银行结算账户申请书</Row>
            </header>
            <section>
                <div className={styles.maxborder}>
                    <Form onSubmit={handleSubmit} className={styles.customername}>
                        <div className={styles.content}>
                            <div className={styles.customername}>
                                <FormItem label="账户名称" {...{ labelCol: { span: 2 }, wrapperCol: { span: 20 } }}>
                                    {getFieldDecorator('customername', {
                                        rules: [{ required: true, message: '请输入账户名称！' }]
                                    })(<Input className={styles.xbkuang} />)}
                                </FormItem>
                            </div>

                            <Row className={styles.customername}>
                                <Col span={4}>开户银行代码:</Col>
                                <Col span={10}>
                                    <FormItem>
                                        {getFieldDecorator('bankcode', {
                                            rules: [{ required: true, message: '请输入开户银行代码！' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                                <Col span={2}>账号：</Col>
                                <Col span={8}>
                                    <FormItem>
                                        {getFieldDecorator('accountnumber', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>


                            <Row className={styles.customername}>
                                <Col span={4} className={styles.natureofaccount}>账户性质</Col>
                                <Col span={20}>
                                    <FormItem>
                                        {getFieldDecorator('natureofaccount', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Select style={{ width: 200 }} onChange={handleChange}>

                                                <Option value="基本">基本</Option>
                                                <Option value="专用">专用</Option>
                                                <Option value="一般" >一般</Option>
                                                <Option value="临时">临时</Option>
                                                <Option value="个人" >个人</Option>
                                            </Select>,
                                        )}
                                    </FormItem>
                                </Col>

                            </Row>


                            <Row className={styles.customername}>
                                <Col span={4} className={styles.accountopennumber}>开户许可证核准号：</Col>
                                <Col span={20}>
                                    <FormItem>
                                        {getFieldDecorator('accountopennumber', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>

                            </Row>




                            <Row className={styles.customername}>
                                <Col span={6} className={styles.changesas}>变更事项及变更后内容如下:</Col>
                                <Col span={18}>
                                    <FormItem>
                                        {getFieldDecorator('changesas', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>


                            <Row className={styles.customername}>
                                <Col span={4} className={styles.customername1}>账户名称：</Col>
                                <Col span={20}>
                                    <FormItem>
                                        {getFieldDecorator('customername1', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>


                            <Row className={styles.customername}>
                                <Col span={4} className={styles.id}>地址：</Col>
                                <Col span={20}>
                                    <FormItem>
                                        {getFieldDecorator('id', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>


                            <Row className={styles.customername}>
                                <Col span={4} className={styles.postalcode}>邮政编码：</Col>
                                <Col span={20}>
                                    <FormItem>
                                        {getFieldDecorator('postalcode', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row className={styles.customername}>
                                <Col span={4} className={styles.phonenumber}>电话：</Col>
                                <Col span={20}>
                                    <FormItem>
                                        {getFieldDecorator('phonenumber', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row className={styles.customername}>
                                <Col span={4} className={styles.registered}>注册资金金额:</Col>
                                <Col span={20}>
                                    <FormItem>
                                        {getFieldDecorator('registered', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row className={styles.customername}>
                                <Col span={4} className={styles.typeof}>证明文件种类:</Col>
                                <Col span={20}>
                                    <FormItem>
                                        {getFieldDecorator('typeof', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row className={styles.customername}>
                                <Col span={4} className={styles.documentnumber}>证明文件编号:</Col>
                                <Col span={20}>
                                    <FormItem>
                                        {getFieldDecorator('documentnumber', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>

                            <Row className={styles.customername}>
                                <Col span={4} className={styles.businessscope}>经营范围:</Col>
                                <Col span={20}>
                                    <FormItem>
                                        {getFieldDecorator('businessscope', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Row className={styles.customername}>
                                    <Col span={4} className={styles.legal}>法定代表人或单位负责人</Col>
                                    <Col span={20}>

                                        <FormItem label="姓名" {...{ labelCol: { span: 4 }, wrapperCol: { span: 20 } }}>
                                            {getFieldDecorator('name', {
                                                rules: [{ required: true, message: '请输入姓名！' }]
                                            })(<Input className={styles.xbkuang} />)}
                                        </FormItem>

                                        <FormItem label="证件种类" {...{ labelCol: { span: 4 }, wrapperCol: { span: 20 } }}>
                                            {getFieldDecorator('typedocument', {
                                                rules: [{ required: true, message: '请输入姓名！' }]
                                            })(<Input className={styles.xbkuang} />)}
                                        </FormItem>

                                        <FormItem label="证件号码" {...{ labelCol: { span: 4 }, wrapperCol: { span: 20 } }}>
                                            {getFieldDecorator('idnumber', {
                                                rules: [{ required: true, message: '请输入姓名！' }]
                                            })(<Input className={styles.xbkuang} />)}
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Row>
                            <Row>
                                <Row className={styles.customername}>
                                    <Col span={10} className={styles.affiliated}>关联企业</Col>
                                    <Col span={14}>
                                        <FormItem>
                                            {getFieldDecorator('affiliated', {
                                                rules: [{ required: true, message: '' }]
                                            })(
                                                <Input className={styles.xbkuang} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row className={styles.customername}>
                                    <Col span={10} className={styles.dengjibiao}>变更后的关联企业信息填列在“关联企业登记表”中:</Col>
                                    <Col span={14}>
                                        <FormItem>
                                            {getFieldDecorator('dengjibiao', {
                                                rules: [{ required: true, message: '' }]
                                            })(
                                                <Input className={styles.xbkuang} />
                                            )}
                                        </FormItem>
                                    </Col>
                                </Row>
                            </Row>
                            <Row className={styles.customername}>
                                <Col span={10} className={styles.thesuperior}>上级法人或主管单位的基本存款账户核准号:</Col>
                                <Col span={14}>
                                    <FormItem>
                                        {getFieldDecorator('thesuperior', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row className={styles.customername}>
                                <Col span={10} className={styles.thename}>上级法人或主管单位的名称:</Col>
                                <Col span={14}>
                                    <FormItem>
                                        {getFieldDecorator('thename', {
                                            rules: [{ required: true, message: '' }]
                                        })(
                                            <Input className={styles.xbkuang} />
                                        )}
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Row className={styles.customername}>
                                    <Col span={4} className={styles.legal}>上级法人或主管单位法定代表人或单位负责人</Col>
                                    <Col span={20}>

                                        <FormItem label="姓名" {...{ labelCol: { span: 4 }, wrapperCol: { span: 20 } }}>
                                            {getFieldDecorator('name1', {
                                                rules: [{ required: true, message: '请输入姓名！' }]
                                            })(<Input className={styles.xbkuang} />)}
                                        </FormItem>

                                        <FormItem label="证件种类" {...{ labelCol: { span: 4 }, wrapperCol: { span: 20 } }}>
                                            {getFieldDecorator('typedocument1', {
                                                rules: [{ required: true, message: '请输入姓名！' }]
                                            })(<Input className={styles.xbkuang} />)}
                                        </FormItem>

                                        <FormItem label="证件号码" {...{ labelCol: { span: 4 }, wrapperCol: { span: 20 } }}>
                                            {getFieldDecorator('idnumber1', {
                                                rules: [{ required: true, message: '请输入姓名！' }]
                                            })(<Input className={styles.xbkuang} />)}
                                        </FormItem>
                                    </Col>
                                </Row>
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
                </div>
            </section>
        </div>
    </div >
    );
}
LuruBgyhjszhsqss = connect((state) => {
    return {
        ...state.bgyhjszhsqss,
    };
})(LuruBgyhjszhsqss);

export default create()(LuruBgyhjszhsqss);