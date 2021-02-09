import React, {useState} from 'react';
import { Card, Button, Modal, Input } from 'antd';

function Blog(props) { 
    
    const [form, setForm] = useState({})
    const [obj, setObj] = useState(
        {
            name: props.title,
            desc: props.desc
        }
    )
    console.log(props)

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        let array = obj
        array = form
        setObj({...array})
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const newData = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

   return(
        <div>
            <Card title={props.title}  style={{ width: 300, margin: '20px' }}>
            <p>{props.desc}</p>
            <Button onClick={() => props.deleteBlog(props.index)}>delete</Button>
            <Button onClick={showModal}>Edit</Button>
            <Modal title="Edit" visible={isModalVisible} onOk={() => props.handleEdit(props.index, form, handleCancel)} onCancel={handleCancel}>
                <Input addonBefore='New title' name={'title'} onChange={newData}/>
                <Input addonBefore='New description' name={'desc'} onChange={newData}/>
            </Modal>
            </Card>
        </div>
   )
}

export default Blog;