import React, {useState} from "react";
import {productData} from "../data/index";
import {Select, Table} from "antd";
const HomeScreen = () => {
  const [productPrice1, setProductPrice1] = useState("");
  const [productPrice1Name, setProductPrice1Name] = useState("");
  const [productPrice2, setProductPrice2] = useState("");
  const [productPrice3, setProductPrice3] = useState("");
  const [productPrice4, setProductPrice4] = useState("");
  const [productPrice5, setProductPrice5] = useState("");
  const [productPrice6, setProductPrice6] = useState("");
  const [productPrice7, setProductPrice7] = useState("");
  const [productPrice8, setProductPrice8] = useState("");
  const [productPrice9, setProductPrice9] = useState("");
  const [productPrice10, setProductPrice10] = useState("");

  const handleProductValues1 = e => {
    console.log("e", e.target.value);
    setProductPrice1(e.target.value);
  };
  const handleProductValues2 = e => {
    console.log("e", e.target.value);
    setProductPrice2(e.target.value);
  };
  const handleProductValues3 = e => {
    console.log("e", e.target.value);
    setProductPrice3(e.target.value);
  };
  const handleProductValues4 = e => {
    console.log("e", e.target.value);
    setProductPrice4(e.target.value);
  };
  const handleProductValues5 = e => {
    console.log("e", e.target.value);
    setProductPrice5(e.target.value);
  };
  const handleProductValues6 = e => {
    console.log("e", e.target.value);
    setProductPrice6(e.target.value);
  };
  const handleProductValues7 = e => {
    console.log("e", e.target.value);
    setProductPrice7(e.target.value);
  };
  const handleProductValues8 = e => {
    console.log("e", e.target.value);
    setProductPrice8(e.target.value);
  };
  const handleProductValues9 = e => {
    console.log("e", e.target.value);
    setProductPrice9(e.target.value);
  };
  const handleProductValues10 = e => {
    console.log("e", e.target.value);
    setProductPrice10(e.target.value);
  };
  const calcPrice = (v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) => {
    console.log("shjs", v1, v1, v3, v4, v5, v6, v7, v8, v9, v10);
    const sum =
      Number(v1) +
      Number(v2) +
      Number(v3) +
      Number(v4) +
      Number(v5) +
      Number(v6) +
      Number(v7) +
      Number(v8) +
      Number(v9) +
      Number(v10);
    console.log("sum", sum);
    return sum + 10; // included shipping charge 10 rs.
  };

  const result = e => {
    e.preventDefault();
    var prod1 = document.getElementById("myForm").elements["p1"].value;
    var prod2 = document.getElementById("myForm").elements["p2"].value;
    var prod3 = document.getElementById("myForm").elements["p3"].value;
    var prod4 = document.getElementById("myForm").elements["p4"].value;
    var prod5 = document.getElementById("myForm").elements["p5"].value;
    var prod6 = document.getElementById("myForm").elements["p6"].value;
    var prod7 = document.getElementById("myForm").elements["p7"].value;
    var prod8 = document.getElementById("myForm").elements["p8"].value;
    var prod9 = document.getElementById("myForm").elements["p9"].value;
    var prod10 = document.getElementById("myForm").elements["p10"].value;
    let sum = calcPrice(
      prod1,
      prod2,
      prod3,
      prod4,
      prod5,
      prod6,
      prod7,
      prod8,
      prod9,
      prod10
    );
    document.getElementById(
      "demo"
    ).innerHTML = `Total Price Of All Selected Products Is <b>${sum}</b>`;
  };
  const columns = [
    {
      title: "Product Image",
      dataIndex: "Images",
      key: "Images",
      width: 300,
      render: (text, record) => {
        return (
          <div>
            <a href={record.Images} rel="noopener noreferrer" target={"_blank"}>
              <img
                src={record.Images}
                style={{height: "80px", width: "100px"}}
                alt="Product_Image"
              />
            </a>
          </div>
        );
      },
    },
    {
      title: "Product Name",
      dataIndex: "ProductName",
      key: "ProductName",
      width: 300,
    },
    {
      title: "Product Price",
      dataIndex: "FinalPrice",
      key: "FinalPrice",
      width: 300,
    },
  ];
  const resultImg = productData.filter(
    data => data.FinalPrice === productPrice1
  );
  console.log("result", resultImg);
  return (
    <div>
      <h1>Calculator</h1>
      {/* {productData &&
        productData.map(x => {
          return (
            <>
              {x.Images ? (
                <>
                  <img
                    src={x.Images}
                    style={{width: "100px", height: "100px"}}
                    alt={x.ProductName}
                  />
                  <span style={{margin: "50px"}}>
                    <b>{x.ProductName}</b>
                  </span>
                </>
              ) : null}
            </>
          );
        })} */}
      <Table
        dataSource={productData}
        bordered={true}
        style={{width: "200px", height: "100px"}}
        size="middle"
        columns={columns}
        pagination={false}
      />
      <form
        id="myForm"
        onSubmit={result}
        style={{width: "900px", height: "400px", marginLeft: "300px"}}
      >
        <select
          onChange={handleProductValues1}
          style={{margin: "30px"}}
          name="p1"
        >
          {productData &&
            productData.map(x => {
              console.log("x", x.Images);
              return (
                <>
                  <option value={x.FinalPrice}>{x.ProductName}</option>
                </>
              );
            })}
        </select>
        {/* {productPrice1} */}
        <select
          name="p2"
          onChange={handleProductValues2}
          style={{margin: "30px"}}
        >
          {productData &&
            productData.map(x => (
              <option value={x.FinalPrice}>{x.ProductName}</option>
            ))}
        </select>
        {/* {productPrice2} */}
        <select
          name="p3"
          onChange={handleProductValues3}
          style={{margin: "30px"}}
        >
          {productData &&
            productData.map(x => (
              <option value={x.FinalPrice}>{x.ProductName}</option>
            ))}
        </select>
        {/* {productPrice3} */}
        <select
          name="p4"
          onChange={handleProductValues4}
          style={{margin: "30px"}}
        >
          {productData &&
            productData.map(x => (
              <option value={x.FinalPrice}>{x.ProductName}</option>
            ))}
        </select>
        {/* {productPrice4} */}
        <select
          name="p5"
          onChange={handleProductValues5}
          style={{margin: "30px"}}
        >
          {productData &&
            productData.map(x => (
              <option value={x.FinalPrice}>{x.ProductName}</option>
            ))}
        </select>
        {/* {productPrice5} */}
        <select
          name="p6"
          onChange={handleProductValues6}
          style={{margin: "30px"}}
        >
          {productData &&
            productData.map(x => (
              <option value={x.FinalPrice}>{x.ProductName}</option>
            ))}
        </select>
        {/* {productPrice6} */}
        <select
          name="p7"
          onChange={handleProductValues7}
          style={{margin: "30px"}}
        >
          {productData &&
            productData.map(x => (
              <option value={x.FinalPrice}>{x.ProductName}</option>
            ))}
        </select>
        {/* {productPrice7} */}
        <select
          name="p8"
          onChange={handleProductValues8}
          style={{margin: "30px"}}
        >
          {productData &&
            productData.map(x => (
              <option value={x.FinalPrice}>{x.ProductName}</option>
            ))}
        </select>
        {/* {productPrice8} */}
        <select
          name="p9"
          onChange={handleProductValues9}
          style={{margin: "30px"}}
        >
          {productData &&
            productData.map(x => (
              <option value={x.FinalPrice}>{x.ProductName}</option>
            ))}
        </select>
        {/* {productPrice9} */}
        <select
          name="p10"
          onChange={handleProductValues10}
          style={{margin: "30px"}}
        >
          {productData &&
            productData.map(x => (
              <option value={x.FinalPrice}>{x.ProductName}</option>
            ))}
        </select>
        {/* {productPrice10} */}

        <input
          type="submit"
          style={{backgroundColor: "#285DDB", color: "#fff"}}
        />
      </form>
      <label>Selected Product's Price </label>
      <span style={{display: "flex", justifyContent: "center"}}>
        {productPrice1 ? (
          <b style={{margin: "30px"}}>
            First Product &nbsp; &nbsp;{productPrice1}
          </b>
        ) : null}
        {productPrice2 ? (
          <b style={{margin: "30px"}}>
            Second Product &nbsp; &nbsp;{productPrice2}
          </b>
        ) : null}
        {productPrice3 ? (
          <b style={{margin: "30px"}}>
            Third Product &nbsp; &nbsp;{productPrice3}
          </b>
        ) : null}
        {productPrice4 ? (
          <b style={{margin: "30px"}}>
            Fourth Product &nbsp; &nbsp;{productPrice4}
          </b>
        ) : null}
        {productPrice5 ? (
          <b style={{margin: "30px"}}>
            Fifth Product &nbsp; &nbsp;{productPrice5}
          </b>
        ) : null}
        {productPrice6 ? (
          <b style={{margin: "30px"}}>
            Sixth Product &nbsp; &nbsp;{productPrice6}
          </b>
        ) : null}
        {productPrice7 ? (
          <b style={{margin: "30px"}}>
            Seventh Product &nbsp; &nbsp;{productPrice7}
          </b>
        ) : null}
        {productPrice8 ? (
          <b style={{margin: "30px"}}>
            Eighth Product &nbsp; &nbsp;{productPrice8}
          </b>
        ) : null}
        {productPrice9 ? (
          <b style={{margin: "30px"}}>
            Ninth Product &nbsp; &nbsp;{productPrice9}
          </b>
        ) : null}
        {productPrice10 ? (
          <b style={{margin: "30px"}}>
            Tenth Product &nbsp; &nbsp;{productPrice10}
          </b>
        ) : null}
      </span>

      <p id="demo" style={{fontSize: "24px"}}></p>
    </div>
  );
};

export default HomeScreen;
