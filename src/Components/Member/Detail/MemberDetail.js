import React , {useEffect }from "react";
import MemberDetailPresenter from "./MemberDetailPresenter";
import { getDetailMember } from "../../../api/member";

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const phoneNumber = parseInt(id);
    if (isNaN(phoneNumber)) {
      return push("/");
    }
    let result = null;
    try {
        ({data : result } = await getDetailMember(phoneNumber));
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }

  render() {
    const { result, error, loading } = this.state;
    return <MemberDetailPresenter result={result} error={error} loading={loading}/>;
  }
}