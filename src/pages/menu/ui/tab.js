import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useMemo,
} from 'react'
import { StepForwardOutlined } from '@ant-design/icons'
import { Tabs, Button } from 'antd'
import Portals from '../../../components/portals'
import RenderProps from '../../../components/renderProps'
import Cat from '../../../components/renderProps/cat'
import Child from '../../../components/portals/child'

const { TabPane } = Tabs
// 使用memo可以防止子组件不必要的更新
const ChildMemo = React.memo(Child)
export default class MyModal extends React.Component {
    callback = (key) => {
        console.log(key)
    }

    render() {
        return (
            <Fragment>
                <Tabs defaultActiveKey="1" onChange={this.callback}>
                    <TabPane tab="Portals" key="1">
                        <div id="box" />
                        <Portals> Portals</Portals>
                    </TabPane>
                    <TabPane tab="renderProps" key="2">
                        {/*
                            renderProps可以在 标签attributes列表中，也可以在标签内部，
                            在renderProps组件内部会始终渲染传递过去的内容/子组件，在这里可以判断需要渲染哪个组件/内容
                        */}
                        <RenderProps>
                            {
                                (data) => <Cat target={data.target} />
                            }
                        </RenderProps>
                    </TabPane>
                    <TabPane tab="hooks" key="3">
                        <UserDisplay />
                    </TabPane>
                </Tabs>
            </Fragment>
        )
    }
}

const UserDisplay = () => {
    // 使用hooks
    const [user, setUser] = useState({
        name: 'myname',
        age: 10,
        address: '0000 onestreet',
    })
    const [count, setCount] = useState(0)
    const [name, setName] = useState('风清扬')
    // 类似于componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 更新文档的标题
        document.title = `You clicked ${count} times`
    })
    return (
        <Fragment>
            <div>
                <span className="label">Name:</span>
                <span>{user.name}</span>
            </div>
            <div>
                <span className="label">Address:</span>
                <span>{user.address}</span>
            </div>
            <div>
                <span className="label">Age:</span>
                <span>{user.age}</span>
            </div>
            <div>{count}</div>
            <Button type="primary" onClick={() => setUser({ name: 'name changed' })}>
                Click me
            </Button>
            <Button type="primary" onClick={() => setCount(count + 1)} style={{ marginLeft: 20 }}>
                Click count
            </Button>
            <br />
            {/* 使用 useMemo标明某个属性(name)改变时，才会重新渲染子组件 */}
            <ChildMemo
                name={
                    useMemo(() => ({
                        newName: name,
                        count,
                    }), [name])
                }
                clickHandle={useCallback((newName) => setName(newName), [])}
            // 这里使用了useCallback优化了 传递给子组件的函数，只初始化一次这个函数，下次不产生新的函数
            />
        </Fragment>
    )
}