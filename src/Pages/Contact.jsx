import React from "react";
import { Button, Form, Input, InputNumber, Select } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
/* eslint-enable no-template-curly-in-string */

const onFinishAppointment = (values) => {
  console.log(values);
};
const onFinishQuestion = (values) => {
  console.log(values);
};

const Contact = () => {
  return (
    <div>
      <section className="contact">
        <div className="bg-gradient-to-r from-blue-300 to-transparent p-6 md:py-28 lg:pl-52">
          <h2 className="text-6xl font-semibold">Contact us</h2>
          <p className="my-3 mb-4 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
            vero.
          </p>
        </div>
      </section>
      <div className="container w-11/12 mx-auto py-12 ">
        <div className="flex flex-wrap items-center justify-around gap-5">
          <div className="lg:w-3/12 max-[700px]:w-full max-[700px]:justify-center max-[700px]:gap-5 max-[450px]:justify-between max-[450px]:gap-0 flex items-center p-6 rounded-xl bg-gray-50 border-2 gap-2">
            <span>
              <img src="/icons/phone.png" width={70} alt="icon" />
            </span>
            <span>
              <a
                className="font-medium hover:text-blue-400"
                href="tel:+998949813606"
              >
                +998 94 981 36 06
              </a>
              <p>Call Today</p>
            </span>
          </div>
          <div className="max-[700px]:w-full max-[700px]:justify-center max-[700px]:gap-5 flex items-center max-[450px]:justify-between max-[450px]:gap-0 p-6 rounded-xl bg-gray-50 border-2 gap-2">
            <span>
              <img src="/icons/mail.png" width={70} alt="icon" />
            </span>
            <span>
              <a
                className="font-medium hover:text-blue-400"
                href="mailto:example@gmail.com"
              >
                example@gmail.com
              </a>
              <p>Feel Free To Mail Us</p>
            </span>
          </div>
          <div className="lg:w-3/12 max-[700px]:w-full max-[700px]:justify-center max-[700px]:gap-5 flex items-center max-[450px]:justify-between max-[450px]:gap-0 p-6 rounded-xl bg-gray-50 border-2 gap-2">
            <span>
              <img src="/icons/location.png" width={60} alt="icon" />
            </span>
            <span>
              <a
                className="font-medium hover:text-blue-400"
                href="https://www.google.com/maps/@40.936804,71.977382,168m/data=!3m1!1e3?hl=en"
              >
                Margizar, Norin, Namangan
              </a>
              <p>Find Our Location</p>
            </span>
          </div>
        </div>
        <h2 className="text-center font-sans text-lg mt-14">
          You can book an appointment with our doctors online or ask a question
          directly from specialists by filling out one of the forms below.
        </h2>
        <div className="flex flex-wrap justify-around mt-10 gap-5">
          {/* Appointment form */}
          <Form
            id="appForm"
            className="md:w-5/12 shadowing bg-gray-50 border border-gray-400 p-3 rounded-xl"
            name="nest-messages"
            onFinish={onFinishAppointment}
            validateMessages={validateMessages}
          >
            <h2 className="font-semibold text-blue-400 font-mono text-4xl text-center pb-4">
              Book an Appointment
            </h2>
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["user", "phone"]}
              label="Phone"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input addonBefore="+998" />
            </Form.Item>
            <Form.Item
              className="sm:pl-7"
              name={["user", "age"]}
              label="Age"
              rules={[
                {
                  type: "number",
                  min: 0,
                  max: 99,
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name={["user", "service"]}
              label="Service"
              rules={[{ required: true }]}
            >
              <Select defaultValue="Select a service">
                <Option value="happy">happy</Option>
                <Option value="sad">sad</Option>
                <Option value="fine">fine</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                className="bg-sky-500 w-1/3"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>

          {/* Question form */}
          <Form
            className="md:w-5/12 shadowing bg-gray-50  rounded-xl border border-gray-400 p-3"
            name="nest-messages"
            onFinish={onFinishQuestion}
            validateMessages={validateMessages}
          >
            <h2 className="text-center text-blue-400 font-semibold font-mono text-4xl pb-4">
              Ask a Question
            </h2>
            <Form.Item
              name={["user", "name"]}
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              className="sm:pl-3"
              name={["user", "phone"]}
              label="Phone"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input addonBefore="+998" />
            </Form.Item>
            <Form.Item
              className="sm:pl-7"
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name={["user", "question"]}
              label="Question"
              rules={[{ required: true }]}
              initialValue=""
            >
              <Input.TextArea rows={4} />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                className="bg-sky-500 w-1/3"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
