import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Drawer, Radio, Space } from "antd";
import React, { useState } from "react";

const Dashboard = () => {
   const [visible, setVisible] = useState(false);
   const [placement, setPlacement] = useState("left");

   const showDrawer = () => {
     setVisible(true);
   };

   const onChange = (e) => {
     setPlacement(e.target.value);
   };

   const onClose = () => {
     setVisible(false);
   };
   return (
     <div className="my-5 p-4 ">
       <Space>
         <MenuUnfoldOutlined
           className="text-primary fs-1 d-flex justify-start"
           type="primary"
           onClick={showDrawer}
         ></MenuUnfoldOutlined>
       </Space>
       <h1 className="text-primary text-center">Dashboard</h1>
       <Drawer
         placement={placement}
         width={500}
         onClose={onClose}
         visible={visible}
         extra={
           <Space>
             <Button type="primary" onClick={onClose}>
               OK
             </Button>
           </Space>
         }
       >
         <p>Some contents...</p>
         <p>Some contents...</p>
         <p>Some contents...</p>
       </Drawer>
     </div>
   );
};

export default Dashboard;