import React from "react";
import hljs from "highlight.js"
import PropTypes from 'prop-types'

class CodeBlock extends React.PureComponent {
    constructor(props) {
        super(props)
        this.setRef = this.setRef.bind(this)
    }

    setRef(el) {
        this.codeEl = el
    }

    componentDidMount() {
        hljs.highlightBlock(this.codeEl)
    }

    componentDidUpdate() {
        hljs.highlightBlock(this.codeEl)
    }

    render() {
        return (
            <pre>
                <code
                    ref={this.setRef}
                    className={`language-${this.props.language === null ? 'bash': this.props.language}`}
                    style={{background: "#eee",borderRadius: 4}}
                >
                    {this.props.value}
                </code>
            </pre>
        )
    }
}

CodeBlock.defaultProps = {
    language: ''
}

CodeBlock.propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
}

export default CodeBlock;
