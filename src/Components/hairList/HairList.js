import React from "react";
import { getHairList } from "../../api/hairList";
import HairListPresenter from "./HairListPresenter";

export default class extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    let result = null;
    try {
      ({ data: result } = await getHairList());
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    {console.log(result)}
    return <HairListPresenter result={result} error={error} loading={loading} />
  }
}
