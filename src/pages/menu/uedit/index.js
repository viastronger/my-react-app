import React, { Component } from 'react'
import { Card, Button } from 'antd'
import { Editor } from 'react-draft-wysiwyg'
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import draftToHtml from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

export default class Uedit extends Component {
    constructor() {
        super()
        this.state = {
            editorState: EditorState.createEmpty(),
        }
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        })
    }

    onContentStateChange = (contentState) => {
        this.setState({
            contentState,
        })
    }

    getTxt = () => {
        // const { editorState } = this.state
        // const rawContentState = convertToRaw(editorState.getCurrentContent())
        // const html = draftToHtml(rawContentState)
        // console.log(html)

        const html = draftToHtml(this.state.contentState)
        console.log(html)
    }

    render() {
        const { editorState } = this.state
        return (
            <div>
                <Card>
                    <Button onClick={this.getTxt}>富文本内容</Button>
                    <Editor
                        editorState={editorState}
                        onContentStateChange={this.onContentStateChange}
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Card>
            </div>
        )
    }
}