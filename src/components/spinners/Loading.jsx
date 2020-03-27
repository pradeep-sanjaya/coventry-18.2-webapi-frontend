import React, { Component } from "react";
import { css } from "@emotion/core";
import { GridLoader} from "react-spinners";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class Loading extends Component {

    render() {
        return (
            <div className="sweet-loading">
                <GridLoader
                    css={override}
                    size={20}
                    color={"#3abc86"}
                    loading={this.props.loading}
                />
            </div>
        );
    }
}

export default Loading;