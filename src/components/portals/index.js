import React, {
    Fragment,
    useState,
    useEffect,
    useCallback,
    useMemo,
} from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Child from './child'

// 使用memo可以防止子组件不必要的更新
const ChildMemo = React.memo(Child)
export default class Portals extends React.Component {
    constructor() {
        super()
        this.el = document.createElement('div')
    }

    componentDidMount() {
        this.someRoot = document.getElementById('box')
        this.someRoot.appendChild(this.el)
    }

    componentWillUnmount() {
        this.someRoot.removeChild(this.el)
    }

    render() {
        return (
            <Fragment>
                <UserDisplay />
                {/* 使用Portal传送门 */}
                {
                    ReactDOM.createPortal(
                        this.props.children,
                        this.el,
                    )
                }
            </Fragment>

        )
    }
}

Portals.propTypes = {
    children: PropTypes.node,
}

Portals.defaultProps = {
    children: null,
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
            <button type="button" onClick={() => setUser({ name: 'name changed' })}>
                Click me
            </button>
            <br />
            <button type="button" onClick={() => setCount(count + 1)}>
                Click count
            </button>
        </Fragment>
    )
}