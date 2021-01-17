import React from "react";
import { getDesigner } from "../../api/designer";
import DesignerPresenter from "./DesignerPresenter";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    let result = null;
    try {
      ({ data: result } = await getDesigner());
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <DesignerPresenter result={result} error={error} loading={loading} />
  }
}
