import { Link } from "react-router-dom"
import Container from "../container/Container"
import { useState } from "react";
import type { FormProps } from 'antd';
import { Button, Form, Input, InputNumber, message, Modal } from 'antd';

type FieldType = {
  username?: string;
  phone?: string;
  message?: string;
};

const Footer = () => {
  const [form] = Form.useForm<FieldType>();
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
    message.success(`Thank ${values.username} you for contacting us!`)
    form.resetFields();
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };
  return (
    <div className="bg-[#f5f5f5]">
      <Container>
        <div className="flex items-start justify-between py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 w-full max-w-3xl">
            <ul className="flex flex-col gap-3 text-gray-500 capitalize">
              <li className="hover:text-black transition-transform cursor-pointer">About</li>
              <li className="hover:text-black transition-transform cursor-pointer">Contact</li>
              <li className="hover:text-black transition-transform cursor-pointer">Terms of use</li>
              <li className="hover:text-black transition-transform cursor-pointer">Application</li>
            </ul>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li className="hover:text-black transition-transform cursor-pointer">About the delivery</li>
              <li className="hover:text-black transition-transform cursor-pointer">Payment methods</li>
              <li className="hover:text-black transition-transform cursor-pointer">The originality of the products</li>
              <li className="hover:text-black transition-transform cursor-pointer">Exchange and refund</li>
            </ul>
            <ul className="flex flex-col gap-3 text-gray-500">
              <li className="hover:text-black transition-transform cursor-pointer">Articles</li>
              <li className="hover:text-black transition-transform cursor-pointer">News</li>
              <li className="hover:text-black transition-transform cursor-pointer">Beauty Club</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-3 items-start">
              <li className="text-2xl">
                <Link to={"tel:+998-88-073-74-74"}> +998-88-073-74-74</Link>
              </li>
              <li className="text-gray-500">
                Daily from 7:55 to 20:05
              </li>
              <li>
                <Button onClick={showModal} className="!p-0 text-lg" type="link">
                  Callback
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
      <Modal
        title="We will call you back ourselves!"
      open={isModalOpen} 
      onCancel={handleCancel}
      maskClosable={false}
      footer={null}
      >
        <div>
          <Form
            form={form}
            name="basic"
            layout='vertical'
            className='w-full'
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
              <Form.Item<FieldType>
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item<FieldType>
                label="Phone Number"
                name="phone"
                rules={[{ required: true, message: 'Please input your phone!' }]}
              >
                <InputNumber className='w-full' />
              </Form.Item>
            </div>
            <Form.Item
              name="message"
              label="Message"
              rules={[{ required: true }]}>
              <Input.TextArea placeholder="Enter your message" style={{ height: 100, resize: 'none' }} />
            </Form.Item>
            <Form.Item className='text-center pt-5 '>
              <Button className='w-full max-w-[150px] !bg-black' size="large" type="primary" htmlType="submit">
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  )
}

export default Footer
