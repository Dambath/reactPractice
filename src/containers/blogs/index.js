import React, {useState} from 'react';
import Blog from '../../components/blog';
import { Modal, Button, Input } from 'antd';
import { useForm } from 'antd/lib/form/Form';


function Blogs() {

    const [obj, setObj] = useState({})
    const [blogs, setBlogs] = useState([])
    
    const deleteBlog = i => {
        const newBlogs = blogs.filter((item, index) => index != i)
        console.log(newBlogs)
        setBlogs(newBlogs)
    }
    console.log(blogs)

    const handleEdit = (i, obj, closeModal) => {
        blogs.splice(i, 1, obj)
        setBlogs([...blogs])
        closeModal()
    }

    const blogsItems = blogs.map((item, i) => <Blog key={i} deleteBlog={deleteBlog} index={i} title={item.title} desc={item.desc} handleEdit={handleEdit} />)
    


    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        let array = [...blogs]
        array.push(obj)
        setBlogs([...array])
    };
    
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    
    const addBlog = e => {
        setObj({...obj, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Create new blog
            </Button>
            <Modal title="enter your data" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input addonBefore='Title' name={'title'} onChange={addBlog}/>
                <Input addonBefore='Description' name={'desc'} onChange={addBlog}/>
            </Modal>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {blogsItems}
            </div>
        </div>
    )

}
export default Blogs; 