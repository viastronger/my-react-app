
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { message } from 'antd'
import QueuiAnim from 'rc-queue-anim'
import { brandName } from '../../config'
// import Logo from '../../components/logo/logo'


class Login extends Component {
    // 初始化页面常量 绑定事件方法
    constructor(props, context) {
        super(props)
        this.state = {
            loading: false,
            isCertificates: false,
            show: true,
        }
    }

    componentDidMount() {
        console.log('mount')
    }

    // #region 收缩业务代码功能

    // handleSubmit(e, isCertificates) {
    //   e.preventDefault()
    // }

    // #endregion

    render() {
        return (
            <div className="login-container">
                <div className="extraLink" />
                <div className="flexcolumn">
                    <div className="login-header" key="header">
                        <div className="slogan">
                            <QueuiAnim className="flexcolumn" type={['right', 'left']} key="p">
                                {
                                    this.state.show ? [
                                        <p key="0" className="title">
                                            {brandName}
                                        </p>,
                                    ] : null
                                }
                            </QueuiAnim>
                        </div>
                        {/* <Logo /> */}
                    </div>
                    <QueuiAnim component="div" className="login-footer" delay={600} type="bottom" key="footer">
                        {
                            this.state.show ? [
                                <p key="0"> 浙江七巧板信息科技股份有限公司 </p>,
                            ] : null
                        }
                    </QueuiAnim>
                </div>
            </div>
        )
    }
}


export default connect(null, null)(Login)