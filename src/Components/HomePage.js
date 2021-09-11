import React from "react";
import {Row, Form, Select, Spin} from "antd";
// import { Select,  } from 'antd';
import debounce from "lodash/debounce";

const {Option} = Select;

const HomePage = () => {
  const [form] = Form.useForm();
  const [value, setValue] = React.useState([]);
  const formLayout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 14,
    },
  };
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(
      <Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>
    );
  }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  function DebounceSelect({fetchOptions, debounceTimeout = 800, ...props}) {
    const [fetching, setFetching] = React.useState(false);
    const [options, setOptions] = React.useState([]);

    const fetchRef = React.useRef(0);
    const debounceFetcher = React.useMemo(() => {
      const loadOptions = value => {
        fetchRef.current += 1;
        const fetchId = fetchRef.current;
        setOptions([]);
        setFetching(true);
        fetchOptions(value).then(newOptions => {
          if (fetchId !== fetchRef.current) {
            // for fetch callback order
            return;
          }

          setOptions(newOptions);
          setFetching(false);
        });
      };

      return debounce(loadOptions, debounceTimeout);
    }, [fetchOptions, debounceTimeout]);
    return (
      <Select
        labelInValue
        filterOption={false}
        onSearch={debounceFetcher}
        notFoundContent={fetching ? <Spin size="small" /> : null}
        {...props}
        options={options}
      />
    );
  }
  async function fetchUserList(username) {
    console.log("fetching user", username);
    return fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(body =>
        body.results.map(user => ({
          label: `${user.name.first} ${user.name.last}`,
          value: user.login.username,
        }))
      );
  }
  return (
    <React.Fragment>
      <h1>Calculator</h1>
      <Row justify="center">
        <Form layout={formLayout} form={form} className="promo-form">
          <Form.Item label="Choose Product Name">
            {/* <Select
              mode="multiple"
              allowClear
              style={{width: "100%"}}
              placeholder="Please select"
              defaultValue={["a10", "c12"]}
              onChange={handleChange}
            >
              {children}
            </Select> */}
            <DebounceSelect
              mode="multiple"
              value={value}
              placeholder="Select users"
              fetchOptions={fetchUserList}
              onChange={newValue => {
                setValue(newValue);
              }}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
        </Form>
      </Row>
    </React.Fragment>
  );
};

export default HomePage;
