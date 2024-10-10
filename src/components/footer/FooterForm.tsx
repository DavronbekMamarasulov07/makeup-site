import type { FormProps } from 'antd';
import { Button, Form, Input, InputNumber } from 'antd';

type FieldType = {
  username?: string;
  phone?: string;
  message?: string;
};



const FooterForm = () => {
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Form
      name="basic"
      layout='vertical'
      className='w-full'
      initialValues={{ remember: true }}
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
          <InputNumber  className='w-full' />
        </Form.Item>
      </div>
      <Form.Item
      name="message"
      label="Message" 
      rules={[{ required: true }]}>
        <Input.TextArea  placeholder="Enter your message"  style={{ height: 100, resize: 'none' }} />
      </Form.Item>
      <Form.Item className='text-center pt-5 '>
        <Button className='w-full max-w-[150px] !bg-black' size="large" type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );

}

export default FooterForm
