import { Col, Row, Form, Input, Divider, Button } from "antd";

import "./index.css";

const RouteForm = () => {
    const [form] = Form.useForm();

    const createConsignment = (values) => {
        console.log('createConsignment', values);
    }

    return ( 
        <>
            <Row gutter={16}>
                <Col span={12}>
                    Img
                </Col>
                <Col span={12}>
                    <Form
                        form={form}
                        name="consignmentForm"
                        className="consignmentForm"
                        layout="vertical"
                        onFinish={createConsignment}
                    >
                        <Divider orientation="left">Location Details</Divider>
                        <Row>
                            <Col span={10} className="mr-10">
                                <Form.Item
                                    label="Origin"
                                    name="origin"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Origin is requried"
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter Origin"
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={10}>
                                <Form.Item
                                    label="Destination"
                                    name="destination"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Destination is requried"
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter Destination"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Divider orientation="left">Consignment Details</Divider>
                        <Row>
                            <Col span={10} className="mr-10">
                                <Form.Item
                                    label="Consignment Description"
                                    name="consignmentDescription"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Consignment Description is requried"
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter Consignment Description"
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={10}>
                                <Form.Item
                                    label="Consignment Weight"
                                    name="consignmentWeight"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Consignment Weight is requried"
                                        },
                                    ]}
                                >
                                    <Input
                                        placeholder="Enter Consignment Weight"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row>
                            <Col span="10">
                                <Button
                                    className="optimize-button"
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Optimize
                                </Button>
                            </Col>
                        </Row>
                        
                        
                    </Form>

                </Col>
            </Row>
        </>
    );
}

export default RouteForm;