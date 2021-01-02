import React from "react";
import { getMember } from "../../api/member";
import MemberPresenter from "./MemberPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    let result = null;
    try {
      ({ data: result } = await getMember());
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <MemberPresenter result={result} error={error} loading={loading} />
  }
}